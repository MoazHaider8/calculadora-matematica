'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, useRef, useCallback } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type Mode = 'indefinite' | 'definite';

interface ExplanationData {
  rule: string;
  formula: string;
  detail: string;
}

interface CalcResult {
  symbolic: string;
  decimal: string | null;
  explanation: ExplanationData;
  preview: string;
  mode: Mode;
  inputExpr: string;
}

// ─── Example data ─────────────────────────────────────────────────────────────

const INDEF_EXAMPLES = [
  { display: 'x²', expr: 'x^2', variable: 'x' },
  { display: 'sin(x)', expr: 'sin(x)', variable: 'x' },
  { display: 'eˣ', expr: 'e^x', variable: 'x' },
  { display: '1/x', expr: '1/x', variable: 'x' },
  { display: '√x', expr: 'sqrt(x)', variable: 'x' },
  { display: 'x² + 3x', expr: 'x^2 + 3*x', variable: 'x' },
];

const DEF_EXAMPLES = [
  { display: 'x² de 0 a 1', expr: 'x^2', variable: 'x', lower: '0', upper: '1' },
  { display: 'sin(x) de 0 a π', expr: 'sin(x)', variable: 'x', lower: '0', upper: 'pi' },
  { display: 'eˣ de 0 a 1', expr: 'e^x', variable: 'x', lower: '0', upper: '1' },
];

const VARIABLES = ['x', 'y', 't', 'u'];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const SUB_MAP: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '-': '₋', 'π': 'π', 'e': 'ₑ',
};
const SUP_MAP: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '-': '⁻', 'π': 'π', 'e': 'ᵉ',
};

function toSub(s: string): string | null {
  const r = s.split('').map((c) => SUB_MAP[c]);
  return r.every(Boolean) ? r.join('') : null;
}
function toSup(s: string): string | null {
  const r = s.split('').map((c) => SUP_MAP[c]);
  return r.every(Boolean) ? r.join('') : null;
}

function normalize(s: string): string {
  return s.trim()
    .replace(/π/g, 'pi')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/\bln\(/g, 'log(');
}

function displayify(s: string): string {
  return s
    .replace(/\blog\(/g, 'ln(')
    .replace(/\+C\b/, ' + C');
}

function buildPreview(expr: string, v: string, mode: Mode, lo: string, hi: string): string {
  const e = expr.trim() || `f(${v})`;
  if (mode === 'indefinite') return `∫ ${e} d${v}`;
  const a = lo.replace('pi', 'π').trim() || 'a';
  const b = hi.replace('pi', 'π').trim() || 'b';
  const sub = toSub(a);
  const sup = toSup(b);
  if (sub !== null && sup !== null) return `∫${sub}${sup} ${e} d${v}`;
  return `∫ ${e} d${v}  [${a}, ${b}]`;
}

function explainRule(rawExpr: string, v: string, mode: Mode): ExplanationData {
  const e = normalize(rawExpr).toLowerCase().replace(/\s+/g, '');

  const powerRx = new RegExp(`^${v}\\^([0-9]+(?:\\.[0-9]+)?)$`);
  const pm = e.match(powerRx);
  if (pm) {
    const n = parseFloat(pm[1]);
    return {
      rule: 'Regla de la potencia',
      formula: `∫ ${v}ⁿ d${v} = ${v}ⁿ⁺¹ / (n+1) + C`,
      detail: `Con n = ${n}: el exponente aumenta en 1, obteniendo ${v}^${n + 1}, y se divide entre el nuevo exponente ${n + 1}.`,
    };
  }
  if (e === v) return {
    rule: 'Regla de la potencia (n = 1)',
    formula: `∫ ${v} d${v} = ${v}² / 2 + C`,
    detail: 'Caso particular de la regla de la potencia con exponente 1.',
  };
  if (!isNaN(Number(e))) return {
    rule: 'Regla de la constante',
    formula: `∫ a d${v} = a·${v} + C`,
    detail: `Al integrar una constante respecto a ${v}, el resultado es la constante multiplicada por ${v}.`,
  };
  if (e === `sin(${v})`) return {
    rule: 'Integral trigonométrica',
    formula: `∫ sin(${v}) d${v} = −cos(${v}) + C`,
    detail: 'La antiderivada del seno es el coseno negativo. Verificación: d/dx[−cos(x)] = sin(x).',
  };
  if (e === `cos(${v})`) return {
    rule: 'Integral trigonométrica',
    formula: `∫ cos(${v}) d${v} = sin(${v}) + C`,
    detail: 'La antiderivada del coseno es el seno. Verificación: d/dx[sin(x)] = cos(x).',
  };
  if (e === `e^${v}` || e === `exp(${v})`) return {
    rule: 'Integral exponencial',
    formula: `∫ e^${v} d${v} = e^${v} + C`,
    detail: `La función e^${v} es su propia antiderivada, propiedad única de la función exponencial natural.`,
  };
  if (e === `1/${v}` || e === `${v}^(-1)`) return {
    rule: 'Regla logarítmica',
    formula: `∫ 1/${v} d${v} = ln|${v}| + C`,
    detail: 'Caso especial con n = −1, donde la regla de la potencia no aplica directamente. La antiderivada es el logaritmo natural.',
  };
  if (e === `sqrt(${v})`) return {
    rule: 'Potencia fraccionaria',
    formula: `∫ √${v} d${v} = (2/3)·${v}^(3/2) + C`,
    detail: `La raíz cuadrada equivale a ${v}^(1/2). Aplicando la regla de la potencia con n = 1/2: n+1 = 3/2, resultado = ${v}^(3/2) / (3/2).`,
  };
  if (e === `log(${v})`) return {
    rule: 'Integración por partes',
    formula: `∫ ln(${v}) d${v} = ${v}·ln(${v}) − ${v} + C`,
    detail: 'Se aplica integración por partes eligiendo u = ln(x) y dv = dx.',
  };
  if (mode === 'definite') return {
    rule: 'Integral definida',
    formula: 'F(b) − F(a)',
    detail: 'Se calcula la antiderivada F(x) y se evalúa en los límites indicados: resultado = F(b) − F(a).',
  };
  return {
    rule: 'Integración simbólica',
    formula: '∫ f(x) dx = F(x) + C',
    detail: 'El resultado se obtuvo mediante integración simbólica. Para expresiones compuestas, la herramienta aplica las reglas generales y devuelve el resultado simplificado.',
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export function IntegralCalculator() {
  const nerdRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const autoRan = useRef(false);

  const [mode, setMode] = useState<Mode>('indefinite');
  const [expr, setExpr] = useState('x^2');
  const [variable, setVariable] = useState('x');
  const [lower, setLower] = useState('');
  const [upper, setUpper] = useState('');

  const [result, setResult] = useState<CalcResult | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [copiedResult, setCopiedResult] = useState(false);
  const [copiedExpr, setCopiedExpr] = useState(false);

  // Load nerdamer + Calculus module on the client only
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const core = await import('nerdamer');
        // @ts-ignore — side-effect import that extends nerdamer with integrate/defint
        await import('nerdamer/Calculus');
        if (alive) {
          nerdRef.current = (core as any).default ?? core;
          setReady(true);
        }
      } catch {
        if (alive) setLoadFailed(true);
      }
    })();
    return () => { alive = false; };
  }, []);

  // Core calculation logic — accepts explicit args so it can be called
  // both from user interaction and from the auto-run on load
  const runCalculate = useCallback((
    calcExpr: string,
    calcVar: string,
    calcMode: Mode,
    calcLower: string,
    calcUpper: string,
  ) => {
    setErrMsg(null);
    setBusy(true);
    try {
      const nerd = nerdRef.current;
      const ne = normalize(calcExpr);
      const preview = buildPreview(calcExpr, calcVar, calcMode, calcLower, calcUpper);
      let symbolic = '';
      let decimal: string | null = null;

      if (calcMode === 'indefinite') {
        let raw: any;
        try {
          raw = nerd.integrate(ne, calcVar);
        } catch {
          raw = nerd(`integrate(${ne}, ${calcVar})`);
        }
        const str = String(raw?.toString ? raw.toString() : raw);
        const base = str.replace(/\+\s*C$/, '').trim();
        symbolic = `${displayify(base)} + C`;
      } else {
        const nl = normalize(calcLower);
        const nu = normalize(calcUpper);
        if (/inf/i.test(nl) || /inf/i.test(nu)) {
          setBusy(false);
          setErrMsg('Las integrales impropias pueden requerir análisis adicional. Prueba con límites finitos.');
          return;
        }
        let raw: any;
        try {
          raw = nerd.defint(ne, calcVar, nl, nu);
        } catch {
          raw = nerd(`defint(${ne}, ${calcVar}, ${nl}, ${nu})`);
        }
        symbolic = displayify(String(raw?.toString ? raw.toString() : raw));

        // Decimal approximation
        try {
          let evStr: string;
          if (raw && typeof raw.evaluate === 'function') {
            evStr = String(raw.evaluate().toString());
          } else {
            evStr = String(nerd.evaluate(symbolic).toString());
          }
          const num = parseFloat(evStr);
          if (!isNaN(num) && isFinite(num)) {
            decimal = num.toFixed(10).replace(/(\.\d*[1-9])0+$/, '$1').replace(/\.0+$/, '');
          }
        } catch {
          // decimal unavailable — silently skip
        }
      }

      setResult({
        symbolic,
        decimal,
        explanation: explainRule(calcExpr, calcVar, calcMode),
        preview,
        mode: calcMode,
        inputExpr: calcExpr,
      });
    } catch (err) {
      const m = String(err).toLowerCase();
      if (m.includes('parse') || m.includes('unexpected') || m.includes('token') || m.includes('syntax')) {
        setErrMsg('No se pudo interpretar la expresión. Revisa paréntesis, operadores y variables.');
      } else {
        setErrMsg('No se encontró una forma simbólica sencilla para esta integral. Revisa la expresión o prueba una forma equivalente.');
      }
    }
    setBusy(false);
  }, []);

  // Auto-calculate default (x^2) once nerdamer is ready
  useEffect(() => {
    if (ready && !autoRan.current) {
      autoRan.current = true;
      runCalculate('x^2', 'x', 'indefinite', '', '');
    }
  }, [ready, runCalculate]);

  // User-triggered calculation — validates state then delegates to runCalculate
  const calculate = useCallback(() => {
    setResult(null);
    if (!nerdRef.current) {
      setErrMsg('La calculadora aún no está lista. Espera un momento e inténtalo de nuevo.');
      return;
    }
    if (!expr.trim()) {
      setErrMsg('Escribe una función para calcular la integral.');
      return;
    }
    if (mode === 'definite') {
      if (!lower.trim()) { setErrMsg('Introduce el límite inferior.'); return; }
      if (!upper.trim()) { setErrMsg('Introduce el límite superior.'); return; }
    }
    runCalculate(expr, variable, mode, lower, upper);
  }, [expr, variable, mode, lower, upper, runCalculate]);

  const switchMode = (m: Mode) => {
    setMode(m);
    setResult(null);
    setErrMsg(null);
  };

  const handleReset = () => {
    setExpr('x^2');
    setVariable('x');
    setLower('');
    setUpper('');
    setMode('indefinite');
    setResult(null);
    setErrMsg(null);
    if (ready) runCalculate('x^2', 'x', 'indefinite', '', '');
  };

  const fillExample = (ex: typeof INDEF_EXAMPLES[0] | typeof DEF_EXAMPLES[0]) => {
    setExpr(ex.expr);
    setVariable(ex.variable);
    if ('lower' in ex) {
      setLower((ex as any).lower);
      setUpper((ex as any).upper);
    } else {
      setLower('');
      setUpper('');
    }
    setErrMsg(null);
    setResult(null);
  };

  const copyText = (text: string, which: 'result' | 'expr') => {
    navigator.clipboard.writeText(text).catch(() => {});
    if (which === 'result') {
      setCopiedResult(true);
      setTimeout(() => setCopiedResult(false), 2000);
    } else {
      setCopiedExpr(true);
      setTimeout(() => setCopiedExpr(false), 2000);
    }
  };

  const preview = buildPreview(expr, variable, mode, lower, upper);
  const examples = mode === 'indefinite' ? INDEF_EXAMPLES : DEF_EXAMPLES;

  return (
    <section id="calculadora" className="bg-page py-10 lg:py-14">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de integrales
        </h2>

        {loadFailed && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4" role="alert">
            <p className="text-sm font-semibold text-red-700">
              No se pudo cargar el motor de cálculo. Recarga la página para intentarlo de nuevo.
            </p>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-2">

          {/* ── Left: Input panel ── */}
          <div className="academic-card p-6">

            {/* Mode tabs */}
            <div
              className="mb-6 flex overflow-hidden rounded-lg border border-line"
              role="tablist"
              aria-label="Tipo de integral"
            >
              {(['indefinite', 'definite'] as Mode[]).map((m) => (
                <button
                  key={m}
                  role="tab"
                  aria-selected={mode === m}
                  onClick={() => switchMode(m)}
                  className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                    mode === m
                      ? 'bg-deep-teal text-white'
                      : 'bg-panel text-muted hover:text-ink'
                  }`}
                >
                  {m === 'indefinite' ? 'Indefinida' : 'Definida'}
                </button>
              ))}
            </div>

            {/* Function input */}
            <div className="mb-4">
              <label htmlFor="calc-expr" className="mb-1.5 block text-sm font-semibold text-slate">
                Función
              </label>
              <input
                id="calc-expr"
                type="text"
                value={expr}
                onChange={(e) => { setExpr(e.target.value); setErrMsg(null); }}
                onKeyDown={(e) => e.key === 'Enter' && calculate()}
                placeholder="x^2"
                aria-describedby="calc-expr-hint"
                className="w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                autoComplete="off"
                spellCheck={false}
              />
              <p id="calc-expr-hint" className="mt-1.5 text-xs text-muted">
                Acepta: sin(x) · cos(x) · e^x · ln(x) · sqrt(x) · x^n · combinaciones
              </p>
            </div>

            {/* Variable selector */}
            <div className="mb-4">
              <label htmlFor="calc-var" className="mb-1.5 block text-sm font-semibold text-slate">
                Variable de integración
              </label>
              <select
                id="calc-var"
                value={variable}
                onChange={(e) => { setVariable(e.target.value); setResult(null); setErrMsg(null); }}
                className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
              >
                {VARIABLES.map((v) => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>

            {/* Definite bounds */}
            {mode === 'definite' && (
              <div className="mb-4 grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="calc-lower" className="mb-1.5 block text-sm font-semibold text-slate">
                    Límite inferior
                  </label>
                  <input
                    id="calc-lower"
                    type="text"
                    value={lower}
                    onChange={(e) => setLower(e.target.value)}
                    placeholder="0"
                    className="w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                  />
                </div>
                <div>
                  <label htmlFor="calc-upper" className="mb-1.5 block text-sm font-semibold text-slate">
                    Límite superior
                  </label>
                  <input
                    id="calc-upper"
                    type="text"
                    value={upper}
                    onChange={(e) => setUpper(e.target.value)}
                    placeholder="1"
                    className="w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                  />
                </div>
                <p className="col-span-2 -mt-1 text-xs text-muted">
                  Admite números, pi y e como límites.
                </p>
              </div>
            )}

            {/* Live formula preview */}
            <div
              className="mb-5 rounded-lg px-4 py-3"
              style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              aria-label="Vista previa de la integral"
            >
              <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-teal">
                Vista previa
              </p>
              <p className="font-mono text-base font-semibold text-deep-teal">{preview}</p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button
                onClick={calculate}
                disabled={busy || !ready}
                aria-busy={busy}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity disabled:opacity-60"
                style={{ background: '#D8A31A' }}
              >
                {!ready && !loadFailed
                  ? 'Cargando calculadora...'
                  : busy
                  ? 'Calculando...'
                  : 'Calcular integral'}
              </button>
              <button
                onClick={handleReset}
                className="rounded-lg border border-line px-4 py-3 text-sm font-semibold text-muted transition-colors hover:border-line-2 hover:text-ink"
              >
                Limpiar
              </button>
            </div>

            {/* Example chips */}
            <div className="mt-5 border-t border-line pt-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">
                Ejemplos rápidos
              </p>
              <div className="flex flex-wrap gap-1.5">
                {examples.map((ex) => (
                  <button
                    key={ex.display}
                    onClick={() => fillExample(ex)}
                    className="min-h-[36px] rounded-md border border-line px-3 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal"
                  >
                    {ex.display}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Result panel ── */}
          <div
            className="academic-card overflow-hidden"
            aria-live="polite"
            aria-label="Panel de resultado"
          >
            <div className="border-b border-line px-6 py-4">
              <p className="text-sm font-bold text-ink">Resultado</p>
            </div>

            {/* Error */}
            {errMsg && (
              <div
                className="mx-6 mt-5 flex gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3"
                role="alert"
              >
                <span className="mt-0.5 shrink-0 text-red-400" aria-hidden="true">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5zm0 6.5a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z"/>
                  </svg>
                </span>
                <p className="text-sm text-red-700">{errMsg}</p>
              </div>
            )}

            {/* Empty / loading state */}
            {!result && !errMsg && (
              <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: '#F0FAF9' }}
                  aria-hidden="true"
                >
                  <span className="font-mono text-3xl font-bold text-deep-teal">∫</span>
                </div>
                <p className="text-sm font-semibold text-slate">
                  {ready ? 'Introduce una función y pulsa calcular' : 'Cargando calculadora...'}
                </p>
                <p className="mt-1 text-xs text-muted">El resultado aparecerá aquí</p>
              </div>
            )}

            {/* Full result — flat layout, all info visible at once */}
            {result && (
              <div className="divide-y divide-line">

                {/* 1. Integral ingresada */}
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">
                    Integral calculada
                  </p>
                  <p className="font-mono text-sm text-slate">{result.preview}</p>
                </div>

                {/* 2. Resultado exacto */}
                <div className="px-6 py-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">
                    {result.mode === 'definite' ? 'Resultado exacto' : 'Resultado'}
                  </p>
                  <div
                    className="rounded-xl px-5 py-4"
                    style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
                  >
                    <p className="break-all font-mono text-2xl font-bold text-deep-teal">
                      {result.symbolic}
                    </p>
                  </div>
                  {result.mode === 'indefinite' && (
                    <p className="mt-2 text-xs text-muted">
                      C es la constante de integración, presente en toda integral indefinida.
                    </p>
                  )}
                </div>

                {/* 3. Decimal (definite only) */}
                {result.mode === 'definite' && result.decimal && (
                  <div className="px-6 py-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">
                      Aproximación decimal
                    </p>
                    <p className="font-mono text-lg font-bold text-ink">
                      ≈ {result.decimal}
                    </p>
                  </div>
                )}

                {/* 4 + 5. Regla + Fórmula + Explicación */}
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">
                    Regla aplicada
                  </p>
                  <p className="text-sm font-bold text-ink">{result.explanation.rule}</p>
                  <p
                    className="mt-1.5 rounded-lg px-3 py-2 font-mono text-sm"
                    style={{ background: '#EEF4F7', color: '#334e68' }}
                  >
                    {result.explanation.formula}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate">
                    {result.explanation.detail}
                  </p>
                </div>

                {/* 6. Copy buttons */}
                <div className="flex flex-wrap gap-2 px-6 py-4">
                  <button
                    onClick={() => copyText(result.symbolic, 'result')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal"
                    aria-label="Copiar resultado de la integral"
                  >
                    {copiedResult ? '✓ Resultado copiado' : 'Copiar resultado'}
                  </button>
                  <button
                    onClick={() => copyText(result.inputExpr, 'expr')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal"
                    aria-label="Copiar expresión de entrada"
                  >
                    {copiedExpr ? '✓ Expresión copiada' : 'Copiar expresión'}
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
