'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, useRef, useCallback } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type OrderSelect = 'first' | 'second' | 'third' | 'custom';

interface ExplanationData {
  rule: string;
  formula: string;
  detail: string;
}

interface CalcResult {
  symbolic: string;
  evaluated: string | null;
  tangentLine: string | null;
  explanation: ExplanationData;
  preview: string;
  notation: string;
  order: number;
  inputExpr: string;
  variable: string;
  evalPoint: string | null;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const EXAMPLES = [
  { display: 'x²', expr: 'x^2', variable: 'x' },
  { display: 'x³ + 2x', expr: 'x^3 + 2*x', variable: 'x' },
  { display: 'sin(x)', expr: 'sin(x)', variable: 'x' },
  { display: 'cos(x)', expr: 'cos(x)', variable: 'x' },
  { display: 'eˣ', expr: 'e^x', variable: 'x' },
  { display: 'ln(x)', expr: 'ln(x)', variable: 'x' },
];

const VARIABLES = ['x', 'y', 't', 'u'];

// ─── Helpers ──────────────────────────────────────────────────────────────────

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
    .replace(/([0-9])\*([a-zA-Z(])/g, '$1$2')
    .replace(/\)\*([a-zA-Z])/g, ')$1')
    .replace(/x\^\(-1\)/g, '1/x')
    .replace(/y\^\(-1\)/g, '1/y')
    .replace(/t\^\(-1\)/g, '1/t')
    .replace(/u\^\(-1\)/g, '1/u')
    .replace(/\^1\b(?!\/)/, '')
    .trim();
}

const ORDER_SUPS: Record<number, string> = { 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', 10: '¹⁰' };

function buildPreview(expr: string, v: string, order: number): string {
  const e = expr.trim() || `f(${v})`;
  if (order === 1) return `d/d${v}[${e}]`;
  const sup = ORDER_SUPS[order] || `(${order})`;
  return `d${sup}/d${v}${sup}[${e}]`;
}

function derivNotation(order: number, v: string): string {
  if (order === 1) return `f'(${v})`;
  if (order === 2) return `f''(${v})`;
  if (order === 3) return `f'''(${v})`;
  const sup = ORDER_SUPS[order] || order;
  return `f⁽${sup}⁾(${v})`;
}

function evalNotation(order: number, v: string, point: string): string {
  const pointDisplay = point.replace('pi', 'π');
  if (order === 1) return `f'(${pointDisplay})`;
  if (order === 2) return `f''(${pointDisplay})`;
  if (order === 3) return `f'''(${pointDisplay})`;
  return `f⁽${ORDER_SUPS[order] || order}⁾(${pointDisplay})`;
}

function explainDeriv(rawExpr: string, v: string, order: number): ExplanationData {
  if (order > 1) {
    if (order === 2) return {
      rule: 'Segunda derivada',
      formula: `d²/d${v}²[f(${v})] = d/d${v}[f'(${v})]`,
      detail: 'Se aplica la derivada dos veces consecutivas. La segunda derivada mide la variación de la primera derivada.',
    };
    if (order === 3) return {
      rule: 'Tercera derivada',
      formula: `d³/d${v}³[f(${v})] = d/d${v}[f''(${v})]`,
      detail: 'Se aplica la derivada tres veces consecutivas.',
    };
    return {
      rule: `Derivada de orden ${order}`,
      formula: `dⁿ/d${v}ⁿ[f(${v})]`,
      detail: `Se aplica la derivada ${order} veces siguiendo las reglas de derivación.`,
    };
  }

  const e = normalize(rawExpr).toLowerCase().replace(/\s+/g, '');

  const powerRx = new RegExp(`^${v}\\^([0-9]+(?:\\.[0-9]+)?)$`);
  const pm = e.match(powerRx);
  if (pm) {
    const n = parseFloat(pm[1]);
    return {
      rule: 'Regla de la potencia',
      formula: `d/d${v}(${v}ⁿ) = n · ${v}ⁿ⁻¹`,
      detail: `Con n = ${n}: el exponente pasa a multiplicar y se reduce en 1. Resultado: ${n} · ${v}^${n - 1}.`,
    };
  }

  if (e === v) return {
    rule: 'Regla de la potencia (n = 1)',
    formula: `d/d${v}(${v}) = 1`,
    detail: `La derivada de ${v} respecto a ${v} es siempre 1.`,
  };
  if (!isNaN(Number(e))) return {
    rule: 'Regla de la constante',
    formula: `d/d${v}(c) = 0`,
    detail: 'La derivada de cualquier constante es cero.',
  };
  if (e === `sin(${v})`) return {
    rule: 'Derivada trigonométrica',
    formula: `d/d${v}(sin(${v})) = cos(${v})`,
    detail: 'La derivada del seno es el coseno.',
  };
  if (e === `cos(${v})`) return {
    rule: 'Derivada trigonométrica',
    formula: `d/d${v}(cos(${v})) = −sin(${v})`,
    detail: 'La derivada del coseno es el seno negativo.',
  };
  if (e === `tan(${v})`) return {
    rule: 'Derivada trigonométrica',
    formula: `d/d${v}(tan(${v})) = sec²(${v})`,
    detail: 'La derivada de la tangente es la secante al cuadrado.',
  };
  if (e === `e^${v}` || e === `exp(${v})`) return {
    rule: 'Derivada exponencial',
    formula: `d/d${v}(e^${v}) = e^${v}`,
    detail: `La función e^${v} es su propia derivada, propiedad única de la exponencial natural.`,
  };
  if (e === `log(${v})` || e === `ln(${v})`) return {
    rule: 'Derivada logarítmica',
    formula: `d/d${v}(ln(${v})) = 1/${v}`,
    detail: 'La derivada del logaritmo natural de x es 1/x.',
  };
  if (e === `1/${v}` || e === `${v}^(-1)`) return {
    rule: 'Regla de la potencia (n = −1)',
    formula: `d/d${v}(1/${v}) = −1/${v}²`,
    detail: 'Se aplica la regla de la potencia con n = −1: resultado = −x^(−2) = −1/x².',
  };
  if (e === `sqrt(${v})`) return {
    rule: 'Regla de la potencia (n = 1/2)',
    formula: `d/d${v}(√${v}) = 1 / (2√${v})`,
    detail: `La raíz cuadrada es ${v}^(1/2). Aplicando la regla de la potencia: (1/2) · ${v}^(−1/2) = 1/(2√${v}).`,
  };

  return {
    rule: 'Derivación simbólica',
    formula: `d/d${v}[f(${v})] = f'(${v})`,
    detail: 'El resultado se obtuvo aplicando las reglas de derivación. Para expresiones compuestas, puede intervenir la regla del producto, cociente o cadena.',
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export function DerivadaCalculator() {
  const nerdRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const autoRan = useRef(false);

  // Inputs
  const [expr, setExpr] = useState('x^2');
  const [variable, setVariable] = useState('x');
  const [orderSelect, setOrderSelect] = useState<OrderSelect>('first');
  const [customOrder, setCustomOrder] = useState('4');
  const [evalEnabled, setEvalEnabled] = useState(false);
  const [evalPoint, setEvalPoint] = useState('');
  const [tangentEnabled, setTangentEnabled] = useState(false);

  // Output
  const [result, setResult] = useState<CalcResult | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [copiedResult, setCopiedResult] = useState(false);
  const [copiedExpr, setCopiedExpr] = useState(false);

  // Load nerdamer + Calculus (diff is in the Calculus module)
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const core = await import('nerdamer');
        // @ts-ignore
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

  const getOrder = useCallback((): number => {
    if (orderSelect === 'first') return 1;
    if (orderSelect === 'second') return 2;
    if (orderSelect === 'third') return 3;
    const n = parseInt(customOrder, 10);
    return Number.isFinite(n) && n >= 1 ? Math.min(n, 10) : 1;
  }, [orderSelect, customOrder]);

  // Core calculation — accepts explicit parameters so it can be called from auto-run
  const runCalculate = useCallback((
    calcExpr: string,
    calcVar: string,
    calcOrder: number,
    calcEvalEnabled: boolean,
    calcEvalPoint: string,
    calcTangentEnabled: boolean,
  ) => {
    setErrMsg(null);
    setBusy(true);

    try {
      const nerd = nerdRef.current;
      const ne = normalize(calcExpr);

      // ── Symbolic derivative ──
      let derivStr: string;
      try {
        const raw = nerd.diff(ne, calcVar, String(calcOrder));
        derivStr = displayify(String(raw?.toString ? raw.toString() : raw));
      } catch {
        // Fallback: apply diff iteratively
        let current = ne;
        for (let i = 0; i < calcOrder; i++) {
          const step = nerd.diff(current, calcVar);
          current = String(step?.toString ? step.toString() : step);
        }
        derivStr = displayify(current);
      }

      const preview = buildPreview(calcExpr, calcVar, calcOrder);
      const notation = derivNotation(calcOrder, calcVar);
      const explanation = explainDeriv(calcExpr, calcVar, calcOrder);

      // ── Evaluation at a point ──
      let evaluated: string | null = null;
      let tangentLine: string | null = null;

      if (calcEvalEnabled && calcEvalPoint.trim()) {
        const normalizedPoint = normalize(calcEvalPoint);
        try {
          const evRaw = nerd(derivStr.replace(/\bln\(/g, 'log('), { [calcVar]: normalizedPoint }).evaluate();
          const evNum = parseFloat(evRaw.toString());
          if (!isNaN(evNum) && isFinite(evNum)) {
            evaluated = Number.isInteger(evNum)
              ? String(evNum)
              : evNum.toFixed(6).replace(/\.?0+$/, '');
          } else {
            evaluated = displayify(evRaw.toString());
          }
        } catch {
          evaluated = null;
        }

        // ── Tangent line (first derivative + x variable only) ──
        if (calcTangentEnabled && calcOrder === 1 && evaluated !== null) {
          try {
            const faRaw = nerd(ne, { [calcVar]: normalizedPoint }).evaluate();
            const fa = parseFloat(faRaw.toString());
            const fpa = parseFloat(evaluated);
            const a = parseFloat(nerd.evaluate(normalizedPoint).toString());

            if ([fa, fpa, a].every((n) => !isNaN(n) && isFinite(n))) {
              const b = fa - fpa * a;
              const fmt = (n: number) =>
                Number.isInteger(n) ? String(n) : parseFloat(n.toFixed(4)).toString();
              const slope = fmt(fpa);
              const intercept = parseFloat(b.toFixed(4));

              if (intercept === 0) {
                tangentLine = `y = ${slope}${calcVar}`;
              } else if (intercept > 0) {
                tangentLine = `y = ${slope}${calcVar} + ${fmt(intercept)}`;
              } else {
                tangentLine = `y = ${slope}${calcVar} − ${fmt(Math.abs(intercept))}`;
              }
            } else {
              tangentLine = null;
            }
          } catch {
            tangentLine = null;
          }
        }
      }

      setResult({
        symbolic: derivStr,
        evaluated,
        tangentLine,
        explanation,
        preview,
        notation,
        order: calcOrder,
        inputExpr: calcExpr,
        variable: calcVar,
        evalPoint: calcEvalEnabled ? calcEvalPoint : null,
      });
    } catch (err) {
      const m = String(err).toLowerCase();
      if (m.includes('parse') || m.includes('unexpected') || m.includes('token') || m.includes('syntax')) {
        setErrMsg('No se pudo interpretar la expresión. Revisa paréntesis, operadores y variables.');
      } else {
        setErrMsg('No se encontró una derivada simbólica sencilla para esta función. Revisa la expresión o prueba una forma equivalente.');
      }
    }
    setBusy(false);
  }, []);

  // Auto-calculate default on load
  useEffect(() => {
    if (ready && !autoRan.current) {
      autoRan.current = true;
      runCalculate('x^2', 'x', 1, false, '', false);
    }
  }, [ready, runCalculate]);

  // User-triggered calculation
  const calculate = useCallback(() => {
    setResult(null);
    if (!nerdRef.current) {
      setErrMsg('La calculadora aún no está lista. Espera un momento e inténtalo de nuevo.');
      return;
    }
    if (!expr.trim()) {
      setErrMsg('Escribe una función para calcular la derivada.');
      return;
    }
    const order = getOrder();
    if (orderSelect === 'custom' && (isNaN(parseInt(customOrder)) || parseInt(customOrder) < 1)) {
      setErrMsg('Introduce un orden de derivada válido (número entero mayor que 0).');
      return;
    }
    if (evalEnabled && !evalPoint.trim()) {
      setErrMsg('Introduce el valor donde quieres evaluar la derivada.');
      return;
    }
    runCalculate(expr, variable, order, evalEnabled, evalPoint, tangentEnabled);
  }, [expr, variable, orderSelect, customOrder, evalEnabled, evalPoint, tangentEnabled, getOrder, runCalculate]);

  const handleReset = () => {
    setExpr('x^2');
    setVariable('x');
    setOrderSelect('first');
    setCustomOrder('4');
    setEvalEnabled(false);
    setEvalPoint('');
    setTangentEnabled(false);
    setResult(null);
    setErrMsg(null);
    if (ready) runCalculate('x^2', 'x', 1, false, '', false);
  };

  const fillExample = (ex: typeof EXAMPLES[0]) => {
    setExpr(ex.expr);
    setVariable(ex.variable);
    setOrderSelect('first');
    setEvalEnabled(false);
    setEvalPoint('');
    setTangentEnabled(false);
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

  const currentOrder = getOrder();
  const preview = buildPreview(expr, variable, currentOrder);
  const showTangentOption = orderSelect === 'first' && evalEnabled;

  return (
    <section id="calculadora" className="bg-page py-10 lg:py-14">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de derivadas
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

            {/* Function */}
            <div className="mb-4">
              <label htmlFor="deriv-expr" className="mb-1.5 block text-sm font-semibold text-slate">
                Función
              </label>
              <input
                id="deriv-expr"
                type="text"
                value={expr}
                onChange={(e) => { setExpr(e.target.value); setErrMsg(null); }}
                onKeyDown={(e) => e.key === 'Enter' && calculate()}
                placeholder="x^2"
                aria-describedby="deriv-expr-hint"
                className="w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                autoComplete="off"
                spellCheck={false}
              />
              <p id="deriv-expr-hint" className="mt-1.5 text-xs text-muted">
                Acepta: sin(x) · cos(x) · e^x · ln(x) · sqrt(x) · x^n · combinaciones
              </p>
            </div>

            {/* Variable + Order */}
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="deriv-var" className="mb-1.5 block text-sm font-semibold text-slate">
                  Variable
                </label>
                <select
                  id="deriv-var"
                  value={variable}
                  onChange={(e) => { setVariable(e.target.value); setResult(null); setErrMsg(null); }}
                  className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                >
                  {VARIABLES.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="deriv-order" className="mb-1.5 block text-sm font-semibold text-slate">
                  Orden
                </label>
                <select
                  id="deriv-order"
                  value={orderSelect}
                  onChange={(e) => { setOrderSelect(e.target.value as OrderSelect); setResult(null); setErrMsg(null); }}
                  className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                >
                  <option value="first">Primera derivada</option>
                  <option value="second">Segunda derivada</option>
                  <option value="third">Tercera derivada</option>
                  <option value="custom">Orden personalizado</option>
                </select>
              </div>
            </div>

            {/* Custom order input */}
            {orderSelect === 'custom' && (
              <div className="mb-4">
                <label htmlFor="deriv-custom-order" className="mb-1.5 block text-sm font-semibold text-slate">
                  Orden de derivada
                </label>
                <input
                  id="deriv-custom-order"
                  type="number"
                  min="1"
                  max="10"
                  value={customOrder}
                  onChange={(e) => setCustomOrder(e.target.value)}
                  placeholder="4"
                  className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                />
              </div>
            )}

            {/* Evaluar en un punto toggle */}
            <div className="mb-3">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={evalEnabled}
                  onChange={(e) => { setEvalEnabled(e.target.checked); if (!e.target.checked) { setTangentEnabled(false); setEvalPoint(''); } setResult(null); setErrMsg(null); }}
                  className="h-4 w-4 accent-teal"
                />
                <span className="text-sm font-semibold text-slate">Evaluar en un punto</span>
              </label>
            </div>

            {evalEnabled && (
              <div className="mb-3 pl-7">
                <label htmlFor="deriv-point" className="mb-1.5 block text-sm font-semibold text-slate">
                  Valor de la variable ({variable} =)
                </label>
                <input
                  id="deriv-point"
                  type="text"
                  value={evalPoint}
                  onChange={(e) => setEvalPoint(e.target.value)}
                  placeholder="2"
                  className="w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                />
                <p className="mt-1 text-xs text-muted">Admite números, pi o e.</p>
              </div>
            )}

            {/* Recta tangente toggle */}
            {showTangentOption && (
              <div className="mb-4 pl-7">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={tangentEnabled}
                    onChange={(e) => { setTangentEnabled(e.target.checked); setResult(null); setErrMsg(null); }}
                    className="h-4 w-4 accent-teal"
                  />
                  <span className="text-sm font-semibold text-slate">Calcular recta tangente</span>
                </label>
              </div>
            )}

            {/* Live formula preview */}
            <div
              className="mb-5 rounded-lg px-4 py-3"
              style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              aria-label="Vista previa de la derivada"
            >
              <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-teal">Vista previa</p>
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
                {!ready && !loadFailed ? 'Cargando calculadora...' : busy ? 'Calculando...' : 'Calcular derivada'}
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
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Ejemplos rápidos</p>
              <div className="flex flex-wrap gap-1.5">
                {EXAMPLES.map((ex) => (
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
              <div className="mx-6 mt-5 flex gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3" role="alert">
                <span className="mt-0.5 shrink-0 text-red-400" aria-hidden="true">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5zm0 6.5a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z" />
                  </svg>
                </span>
                <p className="text-sm text-red-700">{errMsg}</p>
              </div>
            )}

            {/* Empty state */}
            {!result && !errMsg && (
              <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: '#F0FAF9' }}
                  aria-hidden="true"
                >
                  <span className="font-mono text-2xl font-bold text-deep-teal">f'(x)</span>
                </div>
                <p className="text-sm font-semibold text-slate">
                  {ready ? 'Introduce una función y pulsa calcular' : 'Cargando calculadora...'}
                </p>
                <p className="mt-1 text-xs text-muted">El resultado aparecerá aquí</p>
              </div>
            )}

            {/* Full result — flat layout */}
            {result && (
              <div className="divide-y divide-line">

                {/* 1. Función ingresada */}
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Función ingresada</p>
                  <p className="font-mono text-sm text-slate">{result.preview}</p>
                </div>

                {/* 2. Derivada */}
                <div className="px-6 py-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">Derivada</p>
                  <div
                    className="rounded-xl px-5 py-4"
                    style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
                  >
                    <p className="mb-1 text-xs text-muted font-semibold">{result.notation} =</p>
                    <p className="break-all font-mono text-2xl font-bold text-deep-teal">
                      {result.symbolic}
                    </p>
                  </div>
                </div>

                {/* 3. Evaluación en un punto */}
                {result.evaluated !== null && result.evalPoint && (
                  <div className="px-6 py-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Evaluación</p>
                    <p className="font-mono text-base font-semibold text-ink">
                      {evalNotation(result.order, result.variable, result.evalPoint)} = <span className="text-deep-teal">{result.evaluated}</span>
                    </p>
                  </div>
                )}

                {/* 4. Recta tangente */}
                {result.tangentLine && (
                  <div className="px-6 py-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Recta tangente</p>
                    <div
                      className="rounded-lg px-4 py-3"
                      style={{ background: '#FFF4CC', border: '1px solid #F5DFA0' }}
                    >
                      <p className="font-mono text-base font-bold" style={{ color: '#b58000' }}>
                        {result.tangentLine}
                      </p>
                    </div>
                  </div>
                )}

                {result.evalPoint && tangentEnabled && result.order === 1 && !result.tangentLine && (
                  <div className="px-6 py-4">
                    <p className="text-xs text-muted">No se pudo calcular la recta tangente para esta expresión.</p>
                  </div>
                )}

                {/* 5. Regla aplicada + fórmula + explicación */}
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Regla aplicada</p>
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
                    aria-label="Copiar resultado de la derivada"
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
