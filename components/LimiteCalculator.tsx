'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, useRef, useCallback } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type Direction = 'bilateral' | 'left' | 'right';
type ApproachType = 'finite' | 'pos_inf' | 'neg_inf';

interface SideValue {
  display: string;
  type: 'finite' | 'pos_inf' | 'neg_inf' | 'unknown';
}

interface ExplanationData {
  rule: string;
  formula: string;
  detail: string;
}

interface TableRow {
  x: string;
  fx: string;
  side: 'left' | 'right';
}

interface CalcResult {
  primary: string;
  primaryExists: boolean;
  left: SideValue | null;
  right: SideValue | null;
  explanation: ExplanationData;
  preview: string;
  direction: Direction;
  approachType: ApproachType;
  approachDisplay: string;
  inputExpr: string;
  variable: string;
  tableRows: TableRow[];
}

// ─── Examples ─────────────────────────────────────────────────────────────────

const EXAMPLES = [
  { display: '(x²-4)/(x-2), x→2', expr: '(x^2 - 4)/(x - 2)', variable: 'x', approach: '2', direction: 'bilateral' as Direction },
  { display: 'sin(x)/x, x→0', expr: 'sin(x)/x', variable: 'x', approach: '0', direction: 'bilateral' as Direction },
  { display: '1/x, x→∞', expr: '1/x', variable: 'x', approach: 'infinito', direction: 'bilateral' as Direction },
  { display: '1/x, x→0 bilateral', expr: '1/x', variable: 'x', approach: '0', direction: 'bilateral' as Direction },
  { display: '(x²-1)/(x-1), x→1', expr: '(x^2 - 1)/(x - 1)', variable: 'x', approach: '1', direction: 'bilateral' as Direction },
];

const VARIABLES = ['x', 'y', 't', 'u'];
const DIRECTION_LABELS: Record<Direction, string> = {
  bilateral: 'Bilateral',
  left: 'Por la izquierda',
  right: 'Por la derecha',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function normalize(s: string): string {
  return s.trim()
    .replace(/π/g, 'pi')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/\bln\(/g, 'log(');
}

/** Parse nerdamer result (may be a fraction like "3999/1000") to a JS float */
function parseNerdResult(result: any): number | null {
  try {
    const str = String(result?.toString ? result.toString() : result).trim();
    if (!str || str === 'undefined') return null;

    const direct = Number(str);
    if (!isNaN(direct)) return direct;

    // Fraction: p/q or -p/q
    const m = str.match(/^(-?[\d.]+(?:e[+-]?\d+)?)\/([\d.]+(?:e[+-]?\d+)?)$/i);
    if (m) {
      const num = parseFloat(m[1]);
      const den = parseFloat(m[2]);
      if (den !== 0 && isFinite(num) && isFinite(den)) return num / den;
    }
    return null;
  } catch {
    return null;
  }
}

/** Evaluate f(variable = value) using nerdamer */
function evalAt(nerd: any, expr: string, variable: string, value: number): number | null {
  try {
    const valStr = value.toPrecision(10);
    const raw = nerd(expr, { [variable]: valStr });
    const n = parseNerdResult(raw);
    return n !== null && isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

function formatLimitValue(v: number): string {
  if (Math.abs(v - Math.round(v)) < 1e-5) return String(Math.round(v));
  const fracs: [number, string][] = [
    [1 / 2, '1/2'], [1 / 3, '1/3'], [2 / 3, '2/3'],
    [1 / 4, '1/4'], [3 / 4, '3/4'],
    [Math.PI, 'π'], [Math.E, 'e'],
  ];
  for (const [frac, label] of fracs) {
    if (Math.abs(v - frac) < 1e-5) return label;
    if (Math.abs(v + frac) < 1e-5) return `-${label}`;
  }
  const rounded = parseFloat(v.toFixed(6));
  return String(rounded).replace(/\.?0+$/, '') || '0';
}

function formatTableX(x: number): string {
  return parseFloat(x.toPrecision(6)).toString();
}

function formatTableFx(v: number | null): string {
  if (v === null) return 'No definido';
  if (!isFinite(v)) return v > 0 ? '+∞' : '-∞';
  return formatLimitValue(v);
}

/** Detect if a sequence of values converges, diverges to ±∞, or is unknown */
function detectConvergence(vals: (number | null)[]): SideValue {
  const valid = vals.filter((v): v is number => v !== null);
  if (valid.length < 2) return { type: 'unknown', display: 'No determinado' };

  const last = valid[valid.length - 1];
  const prev = valid[valid.length - 2];

  // Diverging to ±∞: large magnitude and growing
  if (Math.abs(last) > 1e6) {
    return { type: last > 0 ? 'pos_inf' : 'neg_inf', display: last > 0 ? '+∞' : '-∞' };
  }
  if (Math.abs(last) > 50 && prev !== 0 && Math.abs(last / prev) > 3) {
    return { type: last > 0 ? 'pos_inf' : 'neg_inf', display: last > 0 ? '+∞' : '-∞' };
  }

  // Convergence: last 3 values within 0.1% of each other
  const last3 = valid.slice(-3);
  const mn = Math.min(...last3);
  const mx = Math.max(...last3);
  const range = mx - mn;
  const absMax = Math.max(...last3.map(Math.abs));

  const isConverged = absMax === 0 ? range < 1e-9 : range / absMax < 1e-3;
  if (isConverged) {
    const limitVal = last;
    return { type: 'finite', display: formatLimitValue(limitVal) };
  }

  return { type: 'unknown', display: 'No determinado' };
}

/** Compute limit from one side (sign = -1 for left, +1 for right) */
function computeSide(nerd: any, expr: string, variable: string, a: number, sign: -1 | 1): SideValue {
  const eps = [1e-1, 1e-2, 1e-3, 1e-4, 1e-5, 1e-6];
  const vals = eps.map((e) => evalAt(nerd, expr, variable, a + e * sign));
  return detectConvergence(vals);
}

/** Compute limit as variable → ±∞ */
function computeInfinity(nerd: any, expr: string, variable: string, sign: 1 | -1): SideValue {
  const magnitudes = [1e2, 1e3, 1e4, 1e5, 1e6, 1e7];
  const vals = magnitudes.map((v) => evalAt(nerd, expr, variable, v * sign));
  return detectConvergence(vals);
}

function parseApproach(s: string): { type: ApproachType; numeric: number; display: string } | null {
  const v = s.trim().toLowerCase()
    .replace(/∞/g, 'inf')
    .replace(/infinito/g, 'inf')
    .replace(/infinity/g, 'inf');

  if (v === 'inf' || v === '+inf') return { type: 'pos_inf', numeric: Infinity, display: '∞' };
  if (v === '-inf') return { type: 'neg_inf', numeric: -Infinity, display: '-∞' };
  if (v === 'pi' || v === 'π') return { type: 'finite', numeric: Math.PI, display: 'π' };
  if (v === 'e') return { type: 'finite', numeric: Math.E, display: 'e' };

  const n = parseFloat(v);
  if (!isNaN(n) && isFinite(n)) return { type: 'finite', numeric: n, display: s.trim() };
  return null;
}

function buildPreview(expr: string, v: string, approachDisplay: string, direction: Direction, approachType: ApproachType): string {
  const e = expr.trim() || `f(${v})`;
  const sup = approachType === 'pos_inf' ? '∞' : approachType === 'neg_inf' ? '-∞' : approachDisplay;
  if (approachType !== 'finite' || direction === 'bilateral') return `lim ${v}→${sup} ${e}`;
  if (direction === 'left') return `lim ${v}→${sup}⁻ ${e}`;
  return `lim ${v}→${sup}⁺ ${e}`;
}

function buildExplanation(
  direction: Direction,
  approachType: ApproachType,
  approachDisplay: string,
  left: SideValue | null,
  right: SideValue | null,
  primaryExists: boolean,
): ExplanationData {
  const a = approachDisplay;

  if (approachType === 'pos_inf') return {
    rule: 'Límite al infinito positivo',
    formula: `lim x→∞ f(x)`,
    detail: 'La función se evalúa para valores cada vez mayores de la variable. El resultado muestra el comportamiento de la función a largo plazo.',
  };
  if (approachType === 'neg_inf') return {
    rule: 'Límite al infinito negativo',
    formula: `lim x→-∞ f(x)`,
    detail: 'La función se evalúa para valores negativos cada vez más grandes en magnitud.',
  };

  if (direction === 'bilateral') {
    if (!primaryExists) return {
      rule: 'Límite bilateral no existe',
      formula: `lim x→${a} f(x)`,
      detail: `El límite por la izquierda (${left?.display ?? 'desconocido'}) y el límite por la derecha (${right?.display ?? 'desconocido'}) son diferentes. Cuando los límites laterales no coinciden, el límite bilateral no existe.`,
    };
    const val = left?.display ?? right?.display ?? '';
    if (left?.type === 'finite') return {
      rule: 'Límite bilateral',
      formula: `lim x→${a} f(x) = ${val}`,
      detail: `Los límites por la izquierda y por la derecha coinciden en el valor ${val}. Por tanto, el límite bilateral existe y es igual a ese valor.`,
    };
    return {
      rule: 'Límite bilateral divergente',
      formula: `lim x→${a} f(x) = ${val}`,
      detail: 'La función crece o decrece sin límite en ambas direcciones de aproximación.',
    };
  }

  if (direction === 'left') return {
    rule: 'Límite por la izquierda',
    formula: `lim x→${a}⁻ f(x) = ${left?.display ?? '?'}`,
    detail: `Aproximación desde valores menores que ${a}. La función tiende a ${left?.display ?? 'un valor'} cuando la variable se acerca a ${a} por la izquierda.`,
  };

  return {
    rule: 'Límite por la derecha',
    formula: `lim x→${a}⁺ f(x) = ${right?.display ?? '?'}`,
    detail: `Aproximación desde valores mayores que ${a}. La función tiende a ${right?.display ?? 'un valor'} cuando la variable se acerca a ${a} por la derecha.`,
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export function LimiteCalculator() {
  const nerdRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const autoRan = useRef(false);

  const [expr, setExpr] = useState('(x^2 - 4)/(x - 2)');
  const [variable, setVariable] = useState('x');
  const [approach, setApproach] = useState('2');
  const [direction, setDirection] = useState<Direction>('bilateral');
  const [showTable, setShowTable] = useState(false);

  const [result, setResult] = useState<CalcResult | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [copiedResult, setCopiedResult] = useState(false);
  const [copiedExpr, setCopiedExpr] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const core = await import('nerdamer');
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

  const runCalculate = useCallback((
    calcExpr: string,
    calcVar: string,
    calcApproach: string,
    calcDirection: Direction,
    calcShowTable: boolean,
  ) => {
    setErrMsg(null);
    setBusy(true);

    try {
      const nerd = nerdRef.current;
      const ne = normalize(calcExpr);
      const ap = parseApproach(calcApproach);

      if (!ap) {
        setBusy(false);
        setErrMsg('Revisa el valor del límite. Usa números, pi, e, infinito o expresiones válidas.');
        return;
      }

      const preview = buildPreview(calcExpr, calcVar, ap.display, calcDirection, ap.type);
      let left: SideValue | null = null;
      let right: SideValue | null = null;
      const tableRows: TableRow[] = [];

      // ── Compute based on approach type ──
      if (ap.type === 'pos_inf') {
        right = computeInfinity(nerd, ne, calcVar, 1);
        if (calcShowTable) {
          [1e2, 1e3, 1e4, 1e5].forEach((v) => {
            tableRows.push({ x: String(v), fx: formatTableFx(evalAt(nerd, ne, calcVar, v)), side: 'right' });
          });
        }
      } else if (ap.type === 'neg_inf') {
        left = computeInfinity(nerd, ne, calcVar, -1);
        if (calcShowTable) {
          [-1e2, -1e3, -1e4, -1e5].forEach((v) => {
            tableRows.push({ x: String(v), fx: formatTableFx(evalAt(nerd, ne, calcVar, v)), side: 'left' });
          });
        }
      } else {
        const a = ap.numeric;
        if (calcDirection === 'bilateral' || calcDirection === 'left') {
          left = computeSide(nerd, ne, calcVar, a, -1);
        }
        if (calcDirection === 'bilateral' || calcDirection === 'right') {
          right = computeSide(nerd, ne, calcVar, a, 1);
        }
        if (calcShowTable) {
          const eps = [1e-1, 1e-2, 1e-3];
          if (calcDirection === 'bilateral' || calcDirection === 'left') {
            eps.forEach((e) => {
              const x = a - e;
              tableRows.push({ x: formatTableX(x), fx: formatTableFx(evalAt(nerd, ne, calcVar, x)), side: 'left' });
            });
          }
          if (calcDirection === 'bilateral' || calcDirection === 'right') {
            [...eps].reverse().forEach((e) => {
              const x = a + e;
              tableRows.push({ x: formatTableX(x), fx: formatTableFx(evalAt(nerd, ne, calcVar, x)), side: 'right' });
            });
          }
        }
      }

      // ── Determine primary result ──
      let primary: string;
      let primaryExists = true;

      if (ap.type !== 'finite') {
        const side = right ?? left;
        primary = side?.display ?? 'No determinado';
        primaryExists = side?.type !== 'unknown';
      } else if (calcDirection === 'bilateral' && left && right) {
        if (left.type === right.type && left.type === 'finite' && left.display === right.display) {
          primary = left.display;
        } else if (left.type === right.type && left.type !== 'finite' && left.display === right.display) {
          primary = left.display;
        } else if (left.type === 'unknown' && right.type !== 'unknown') {
          primary = right.display;
        } else if (right.type === 'unknown' && left.type !== 'unknown') {
          primary = left.display;
        } else if (left.type !== 'unknown' && right.type !== 'unknown') {
          primary = 'No existe';
          primaryExists = false;
        } else {
          primary = 'No determinado';
          primaryExists = false;
        }
      } else if (calcDirection === 'left') {
        primary = left?.display ?? 'No determinado';
        primaryExists = left?.type !== 'unknown';
      } else {
        primary = right?.display ?? 'No determinado';
        primaryExists = right?.type !== 'unknown';
      }

      const explanation = buildExplanation(calcDirection, ap.type, ap.display, left, right, primaryExists);

      setResult({
        primary,
        primaryExists,
        left,
        right,
        explanation,
        preview,
        direction: calcDirection,
        approachType: ap.type,
        approachDisplay: ap.display,
        inputExpr: calcExpr,
        variable: calcVar,
        tableRows,
      });
    } catch (err) {
      const m = String(err).toLowerCase();
      if (m.includes('parse') || m.includes('unexpected') || m.includes('token') || m.includes('syntax')) {
        setErrMsg('No se pudo interpretar la expresión. Revisa paréntesis, operadores o variables.');
      } else {
        setErrMsg('No se pudo determinar el límite de forma confiable. Revisa la expresión o prueba con una forma equivalente.');
      }
    }
    setBusy(false);
  }, []);

  useEffect(() => {
    if (ready && !autoRan.current) {
      autoRan.current = true;
      runCalculate('(x^2 - 4)/(x - 2)', 'x', '2', 'bilateral', false);
    }
  }, [ready, runCalculate]);

  const calculate = useCallback(() => {
    setResult(null);
    if (!nerdRef.current) {
      setErrMsg('La calculadora aún no está lista. Espera un momento e inténtalo de nuevo.');
      return;
    }
    if (!expr.trim()) { setErrMsg('Escribe una función para calcular el límite.'); return; }
    if (!approach.trim()) { setErrMsg('Introduce el valor al que se acerca la variable.'); return; }
    runCalculate(expr, variable, approach, direction, showTable);
  }, [expr, variable, approach, direction, showTable, runCalculate]);

  const handleReset = () => {
    setExpr('(x^2 - 4)/(x - 2)');
    setVariable('x');
    setApproach('2');
    setDirection('bilateral');
    setShowTable(false);
    setResult(null);
    setErrMsg(null);
    if (ready) runCalculate('(x^2 - 4)/(x - 2)', 'x', '2', 'bilateral', false);
  };

  const fillExample = (ex: typeof EXAMPLES[0]) => {
    setExpr(ex.expr);
    setVariable(ex.variable);
    setApproach(ex.approach);
    setDirection(ex.direction);
    setErrMsg(null);
    setResult(null);
  };

  const copyText = (text: string, which: 'result' | 'expr') => {
    navigator.clipboard.writeText(text).catch(() => {});
    if (which === 'result') { setCopiedResult(true); setTimeout(() => setCopiedResult(false), 2000); }
    else { setCopiedExpr(true); setTimeout(() => setCopiedExpr(false), 2000); }
  };

  const ap = parseApproach(approach);
  const isInfinity = ap?.type !== 'finite';
  const preview = ap ? buildPreview(expr, variable, ap.display, direction, ap.type) : `lim ${variable}→? ${expr || `f(${variable})`}`;

  return (
    <section id="calculadora" className="bg-page py-10 lg:py-14">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de límites
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
              <label htmlFor="limite-expr" className="mb-1.5 block text-sm font-semibold text-slate">
                Función
              </label>
              <input
                id="limite-expr"
                type="text"
                value={expr}
                onChange={(e) => { setExpr(e.target.value); setErrMsg(null); }}
                onKeyDown={(e) => e.key === 'Enter' && calculate()}
                placeholder="(x^2 - 4)/(x - 2)"
                aria-describedby="limite-expr-hint"
                className="w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                autoComplete="off"
                spellCheck={false}
              />
              <p id="limite-expr-hint" className="mt-1.5 text-xs text-muted">
                Acepta: sin(x)/x · (x²-4)/(x-2) · 1/x · sqrt(x+1) · e^x · combinaciones
              </p>
            </div>

            {/* Variable + Approach */}
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="limite-var" className="mb-1.5 block text-sm font-semibold text-slate">
                  Variable
                </label>
                <select
                  id="limite-var"
                  value={variable}
                  onChange={(e) => { setVariable(e.target.value); setResult(null); setErrMsg(null); }}
                  className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                >
                  {VARIABLES.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="limite-approach" className="mb-1.5 block text-sm font-semibold text-slate">
                  La variable tiende a
                </label>
                <input
                  id="limite-approach"
                  type="text"
                  value={approach}
                  onChange={(e) => { setApproach(e.target.value); setErrMsg(null); }}
                  placeholder="2"
                  className="w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                />
                <p className="mt-1 text-xs text-muted">Acepta: números, pi, e, infinito, -infinito</p>
              </div>
            </div>

            {/* Direction (hidden for infinity) */}
            {!isInfinity && (
              <div className="mb-4">
                <label htmlFor="limite-dir" className="mb-1.5 block text-sm font-semibold text-slate">
                  Dirección
                </label>
                <select
                  id="limite-dir"
                  value={direction}
                  onChange={(e) => { setDirection(e.target.value as Direction); setResult(null); setErrMsg(null); }}
                  className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                >
                  {(Object.keys(DIRECTION_LABELS) as Direction[]).map((d) => (
                    <option key={d} value={d}>{DIRECTION_LABELS[d]}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Table toggle */}
            <div className="mb-4">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={showTable}
                  onChange={(e) => { setShowTable(e.target.checked); setResult(null); }}
                  className="h-4 w-4 accent-teal"
                />
                <span className="text-sm font-semibold text-slate">Mostrar tabla de valores</span>
              </label>
            </div>

            {/* Live preview */}
            <div className="mb-5 rounded-lg px-4 py-3" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }} aria-label="Vista previa del límite">
              <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-teal">Vista previa</p>
              <p className="font-mono text-base font-semibold text-deep-teal">{preview}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={calculate}
                disabled={busy || !ready}
                aria-busy={busy}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity disabled:opacity-60"
                style={{ background: '#D8A31A' }}
              >
                {!ready && !loadFailed ? 'Cargando calculadora...' : busy ? 'Calculando...' : 'Calcular límite'}
              </button>
              <button onClick={handleReset} className="rounded-lg border border-line px-4 py-3 text-sm font-semibold text-muted transition-colors hover:border-line-2 hover:text-ink">
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
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal"
                  >
                    {ex.display}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Result panel ── */}
          <div className="academic-card overflow-hidden" aria-live="polite" aria-label="Panel de resultado">
            <div className="border-b border-line px-6 py-4">
              <p className="text-sm font-bold text-ink">Resultado</p>
            </div>

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

            {!result && !errMsg && (
              <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: '#F0FAF9' }} aria-hidden="true">
                  <span className="font-mono text-xl font-bold text-deep-teal">lim</span>
                </div>
                <p className="text-sm font-semibold text-slate">{ready ? 'Introduce una función y pulsa calcular' : 'Cargando calculadora...'}</p>
                <p className="mt-1 text-xs text-muted">El resultado aparecerá aquí</p>
              </div>
            )}

            {result && (
              <div className="divide-y divide-line">

                {/* 1. Límite calculado */}
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Límite calculado</p>
                  <p className="font-mono text-sm text-slate">{result.preview}</p>
                </div>

                {/* 2. Resultado principal */}
                <div className="px-6 py-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                  <div
                    className="rounded-xl px-5 py-4"
                    style={{ background: result.primaryExists ? '#F0FAF9' : '#FFF4CC', border: result.primaryExists ? '1px solid #DDF3F0' : '1px solid #F5DFA0' }}
                  >
                    <p className={`break-all font-mono text-2xl font-bold ${result.primaryExists ? 'text-deep-teal' : 'text-amber-700'}`}>
                      {result.primary}
                    </p>
                  </div>
                </div>

                {/* 3. Límites laterales (bilateral only, finite approach) */}
                {result.direction === 'bilateral' && result.approachType === 'finite' && (result.left || result.right) && (
                  <div className="px-6 py-4">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">Límites laterales</p>
                    <div className="grid grid-cols-2 gap-3">
                      {result.left && (
                        <div className="rounded-lg p-3" style={{ background: '#EEF4F7' }}>
                          <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-muted">Por la izquierda</p>
                          <p className="font-mono text-base font-bold text-ink">{result.left.display}</p>
                        </div>
                      )}
                      {result.right && (
                        <div className="rounded-lg p-3" style={{ background: '#EEF4F7' }}>
                          <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-muted">Por la derecha</p>
                          <p className="font-mono text-base font-bold text-ink">{result.right.display}</p>
                        </div>
                      )}
                    </div>
                    <p className="mt-2 text-xs text-slate">
                      {result.primaryExists
                        ? 'El límite bilateral existe porque ambos límites laterales coinciden.'
                        : 'El límite bilateral no existe porque los límites laterales son diferentes.'}
                    </p>
                  </div>
                )}

                {/* 4. Table of values */}
                {result.tableRows.length > 0 && (
                  <div className="px-6 py-4">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">Tabla de valores</p>
                    <div className="overflow-x-auto rounded-lg border border-line">
                      <table className="w-full text-sm">
                        <thead>
                          <tr style={{ background: '#F0FAF9' }}>
                            <th className="px-4 py-2 text-left text-[10px] font-bold uppercase tracking-wide text-teal">{result.variable}</th>
                            <th className="px-4 py-2 text-left text-[10px] font-bold uppercase tracking-wide text-teal">f({result.variable})</th>
                            {result.direction === 'bilateral' && (
                              <th className="px-4 py-2 text-left text-[10px] font-bold uppercase tracking-wide text-teal">Lado</th>
                            )}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-line">
                          {result.tableRows.map((row, i) => (
                            <tr key={i} className="hover:bg-panel">
                              <td className="px-4 py-2 font-mono text-xs text-slate">{row.x}</td>
                              <td className="px-4 py-2 font-mono text-xs font-semibold text-deep-teal">{row.fx}</td>
                              {result.direction === 'bilateral' && (
                                <td className="px-4 py-2 text-xs text-muted">{row.side === 'left' ? '←' : '→'}</td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 5. Explanation */}
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Análisis</p>
                  <p className="text-sm font-bold text-ink">{result.explanation.rule}</p>
                  <p className="mt-1.5 rounded-lg px-3 py-2 font-mono text-sm" style={{ background: '#EEF4F7', color: '#334e68' }}>
                    {result.explanation.formula}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate">{result.explanation.detail}</p>
                </div>

                {/* 6. Copy buttons */}
                <div className="flex flex-wrap gap-2 px-6 py-4">
                  <button
                    onClick={() => copyText(result.primary, 'result')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal"
                    aria-label="Copiar resultado del límite"
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
