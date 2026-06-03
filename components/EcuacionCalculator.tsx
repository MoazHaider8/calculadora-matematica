'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, useRef, useCallback } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type CalcMode = 'lineal' | 'cuadratica' | 'sistema';

interface LinearResult {
  mode: 'lineal';
  inputDisplay: string;
  variable: string;
  solution: string;
  solutionDecimal: string;
  explanation: string;
  method: string;
  verification: string;
  isInfinite: boolean;
  noSolution: boolean;
}

interface QuadResult {
  mode: 'cuadratica';
  inputDisplay: string;
  variable: string;
  solutions: string[];
  decimals: string[];
  isComplex: boolean;
  discriminantSign: 'positive' | 'zero' | 'negative';
  solutionCount: number;
  explanation: string;
  method: string;
  verifications: string[];
}

interface SystemResult {
  mode: 'sistema';
  eq1Display: string;
  eq2Display: string;
  xSolution: string;
  ySolution: string;
  xDecimal: string;
  yDecimal: string;
  verification1: string;
  verification2: string;
}

type CalcResult = LinearResult | QuadResult | SystemResult;

// ─── Static data ──────────────────────────────────────────────────────────────

const MODE_LABELS: Record<CalcMode, string> = {
  lineal: 'Ecuación lineal',
  cuadratica: 'Ecuación cuadrática',
  sistema: 'Sistema 2×2',
};

const VARIABLES = ['x', 'y', 't', 'a', 'b'];

const LINEAR_EXAMPLES = [
  { display: '2x + 3 = 7',   eq: '2x + 3 = 7',   variable: 'x' },
  { display: '3x - 9 = 0',   eq: '3x - 9 = 0',   variable: 'x' },
  { display: 'x/2 + 4 = 10', eq: 'x/2 + 4 = 10', variable: 'x' },
  { display: '5x = 20',       eq: '5x = 20',       variable: 'x' },
  { display: '3y - 9 = 0',   eq: '3y - 9 = 0',   variable: 'y' },
];

const QUAD_EXAMPLES = [
  { display: 'x² - 5x + 6 = 0', eq: 'x^2 - 5x + 6 = 0' },
  { display: 'x² + 2x + 1 = 0', eq: 'x^2 + 2x + 1 = 0' },
  { display: 'x² + 1 = 0',       eq: 'x^2 + 1 = 0'       },
  { display: '2x² - 8 = 0',      eq: '2x^2 - 8 = 0'      },
];

const SYSTEM_EXAMPLES = [
  { display: '2x + y = 5 / x - y = 1', eq1: '2x + y = 5', eq2: 'x - y = 1' },
  { display: 'x + y = 4 / x - y = 2',  eq1: 'x + y = 4',  eq2: 'x - y = 2'  },
  { display: '3x + 2y = 12 / x - y = 1', eq1: '3x + 2y = 12', eq2: 'x - y = 1' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function normalizeEq(raw: string): string {
  return raw
    .trim()
    .replace(/\s+/g, '')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/([0-9])([a-zA-Z])/g, '$1*$2');
}

function parseSols(str: string): string[] {
  const inner = str.replace(/^\[|\]$/g, '').trim();
  if (!inner) return [];
  const parts: string[] = [];
  let depth = 0, cur = '';
  for (const c of inner) {
    if ('(['.includes(c)) depth++;
    else if (')]'.includes(c)) depth--;
    if (c === ',' && depth === 0) { parts.push(cur.trim()); cur = ''; }
    else cur += c;
  }
  if (cur.trim()) parts.push(cur.trim());
  return parts;
}

function isComplex(sols: string[]): boolean {
  return sols.some(s => s.includes('i'));
}

function formatSolDecimal(sol: string, nerd: any): string {
  try {
    const v = nerd(sol).evaluate().toString();
    const n = parseFloat(v);
    if (isNaN(n)) return sol;
    if (Math.abs(n - Math.round(n)) < 1e-9) return String(Math.round(n));
    return parseFloat(n.toFixed(8)).toString();
  } catch { return sol; }
}

function buildVerification(eq: string, variable: string, solStr: string, nerd: any): string {
  const eqN = normalizeEq(eq);
  const eqParts = eqN.split('=');
  if (eqParts.length !== 2) return '';
  const [lhs, rhs] = eqParts;
  const subst: Record<string, string> = { [variable]: solStr };
  try {
    const lv = nerd(lhs, subst).evaluate().toString();
    const rv = nerd(rhs, subst).evaluate().toString();
    const lNum = parseFloat(lv);
    const rNum = parseFloat(rv);
    const ok = Math.abs(lNum - rNum) < 1e-6;
    return `${eq.split('=')[0].trim()} = ${eq.split('=')[1].trim()} · al sustituir ${variable} = ${solStr}: ${parseFloat(lNum.toFixed(4))} = ${parseFloat(rNum.toFixed(4))} ${ok ? '✓' : ''}`;
  } catch { return ''; }
}

function buildLinearExplanation(eq: string, variable: string, sol: string): string {
  return `Se despeja la variable ${variable} aplicando las mismas operaciones en ambos lados de la ecuación: ${eq.split('=')[0].trim()} = ${eq.split('=')[1].trim()} → ${variable} = ${sol}.`;
}

function buildQuadExplanation(solutionCount: number, discSign: string): string {
  if (discSign === 'negative') return 'El discriminante es negativo, por lo que la ecuación no tiene soluciones reales.';
  if (discSign === 'zero') return 'El discriminante es cero. La ecuación tiene una solución doble: ambas raíces son iguales.';
  return `El discriminante es positivo. La ecuación tiene ${solutionCount} soluciones reales distintas obtenidas con la fórmula cuadrática.`;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function EcuacionCalculator() {
  const nerdRef = useRef<any>(null);
  const autoRan = useRef(false);

  const [calcMode, setCalcMode] = useState<CalcMode>('lineal');

  // Lineal/variable inputs
  const [linEq, setLinEq] = useState('2x + 3 = 7');
  const [linVar, setLinVar] = useState('x');
  // Quadratic inputs
  const [quadEq, setQuadEq] = useState('x^2 - 5x + 6 = 0');
  // System inputs
  const [sysEq1, setSysEq1] = useState('2x + y = 5');
  const [sysEq2, setSysEq2] = useState('x - y = 1');

  const [result, setResult] = useState<CalcResult | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copiedResult, setCopiedResult] = useState(false);
  const [copiedEq, setCopiedEq] = useState(false);

  const loadNerdamer = useCallback(async () => {
    if (nerdRef.current) return nerdRef.current;
    const nerd = (await import('nerdamer')).default;
    await import('nerdamer/Algebra' as any);
    await import('nerdamer/Solve' as any);
    nerdRef.current = nerd;
    return nerd;
  }, []);

  const solveLinear = useCallback((nerd: any, eq: string, variable: string): LinearResult => {
    if (!eq.includes('=')) throw new Error('EQUALS');
    const normalized = normalizeEq(eq);
    let sols: string[];
    try {
      const raw = nerd.solve(normalized, variable);
      sols = parseSols(raw.toString());
    } catch {
      throw new Error('UNSUPPORTED');
    }
    if (!sols.length) throw new Error('NO_SOLUTION');
    if (isComplex(sols)) throw new Error('COMPLEX');

    const sol = sols[0];
    const decimal = formatSolDecimal(sol, nerd);
    const verification = buildVerification(eq, variable, decimal, nerd);
    const explanation = buildLinearExplanation(eq, variable, decimal);

    return {
      mode: 'lineal',
      inputDisplay: eq,
      variable,
      solution: sol,
      solutionDecimal: decimal,
      explanation,
      method: 'Despeje de variable',
      verification,
      isInfinite: false,
      noSolution: false,
    };
  }, []);

  const solveQuadratic = useCallback((nerd: any, eq: string): QuadResult => {
    if (!eq.includes('=')) throw new Error('EQUALS');
    const normalized = normalizeEq(eq);
    let sols: string[];
    try {
      const raw = nerd.solve(normalized, 'x');
      sols = parseSols(raw.toString());
    } catch {
      throw new Error('UNSUPPORTED');
    }

    const complex = isComplex(sols);
    let discriminantSign: 'positive' | 'zero' | 'negative' = 'positive';
    let solutionCount = 0;

    if (complex || sols.length === 0) {
      discriminantSign = 'negative';
      solutionCount = 0;
    } else if (sols.length === 1) {
      discriminantSign = 'zero';
      solutionCount = 1;
    } else {
      discriminantSign = 'positive';
      solutionCount = 2;
    }

    const decimals = complex ? [] : sols.map(s => formatSolDecimal(s, nerd));
    const verifications = complex ? [] : decimals.map(d => buildVerification(eq, 'x', d, nerd)).filter(Boolean);
    const explanation = buildQuadExplanation(solutionCount, discriminantSign);

    return {
      mode: 'cuadratica',
      inputDisplay: eq,
      variable: 'x',
      solutions: complex ? [] : sols,
      decimals,
      isComplex: complex,
      discriminantSign,
      solutionCount,
      explanation,
      method: solutionCount === 1 ? 'Fórmula cuadrática (solución doble)' : solutionCount === 2 ? 'Fórmula cuadrática' : 'Discriminante negativo',
      verifications,
    };
  }, []);

  const solveSystem = useCallback((nerd: any, eq1: string, eq2: string): SystemResult => {
    if (!eq1.includes('=') || !eq2.includes('=')) throw new Error('EQUALS');
    const n1 = normalizeEq(eq1);
    const n2 = normalizeEq(eq2);
    let sys: Array<[string, string]>;
    try {
      sys = nerd.solveEquations([n1, n2], ['x', 'y']);
    } catch {
      throw new Error('UNSUPPORTED');
    }
    if (!sys || sys.length < 2) throw new Error('NO_SOLUTION');

    const xEntry = sys.find(([v]) => v === 'x');
    const yEntry = sys.find(([v]) => v === 'y');
    if (!xEntry || !yEntry) throw new Error('NO_SOLUTION');

    const xSol = String(xEntry[1]);
    const ySol = String(yEntry[1]);
    const xDec = formatSolDecimal(xSol, nerd);
    const yDec = formatSolDecimal(ySol, nerd);

    const verify = (eq: string, xVal: string, yVal: string): string => {
      const eqN = normalizeEq(eq);
      const parts = eqN.split('=');
      if (parts.length !== 2) return '';
      try {
        const lv = nerd(parts[0], { x: xVal, y: yVal }).evaluate().toString();
        const rv = nerd(parts[1], { x: xVal, y: yVal }).evaluate().toString();
        const lN = parseFloat(lv), rN = parseFloat(rv);
        const ok = Math.abs(lN - rN) < 1e-6;
        return `${eq.split('=')[0].trim()} = ${eq.split('=')[1].trim()} → ${parseFloat(lN.toFixed(4))} = ${parseFloat(rN.toFixed(4))} ${ok ? '✓' : ''}`;
      } catch { return ''; }
    };

    return {
      mode: 'sistema',
      eq1Display: eq1,
      eq2Display: eq2,
      xSolution: xSol,
      ySolution: ySol,
      xDecimal: xDec,
      yDecimal: yDec,
      verification1: verify(eq1, xDec, yDec),
      verification2: verify(eq2, xDec, yDec),
    };
  }, []);

  const runCalculate = useCallback(async (
    mode: CalcMode, lEq: string, lVar: string, qEq: string, s1: string, s2: string
  ) => {
    setErrMsg(null);
    setLoading(true);
    try {
      const nerd = await loadNerdamer();
      let res: CalcResult;
      if (mode === 'lineal') {
        if (!lEq.trim()) { setErrMsg('Escribe una ecuación para resolver.'); setLoading(false); return; }
        if (!lEq.includes('=')) { setErrMsg('La ecuación debe incluir el signo igual (=).'); setLoading(false); return; }
        res = solveLinear(nerd, lEq, lVar);
      } else if (mode === 'cuadratica') {
        if (!qEq.trim()) { setErrMsg('Escribe una ecuación cuadrática.'); setLoading(false); return; }
        if (!qEq.includes('=')) { setErrMsg('La ecuación debe incluir el signo igual (=).'); setLoading(false); return; }
        res = solveQuadratic(nerd, qEq);
      } else {
        if (!s1.trim() || !s2.trim()) { setErrMsg('Introduce las dos ecuaciones del sistema.'); setLoading(false); return; }
        if (!s1.includes('=') || !s2.includes('=')) { setErrMsg('Cada ecuación debe incluir el signo igual (=).'); setLoading(false); return; }
        res = solveSystem(nerd, s1, s2);
      }
      setResult(res);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : '';
      if (msg === 'EQUALS') setErrMsg('La ecuación debe incluir el signo igual (=).');
      else if (msg === 'NO_SOLUTION') setErrMsg('La ecuación no tiene solución real con los valores indicados.');
      else if (msg === 'COMPLEX') setErrMsg('La ecuación no tiene soluciones reales. Las soluciones son complejas.');
      else if (msg === 'UNSUPPORTED') setErrMsg('Por ahora esta calculadora admite ecuaciones lineales y cuadráticas comunes. Prueba una expresión más simple.');
      else setErrMsg('No se pudo interpretar la ecuación. Revisa paréntesis, operadores y variables.');
    } finally {
      setLoading(false);
    }
  }, [loadNerdamer, solveLinear, solveQuadratic, solveSystem]);

  const calculate = useCallback(() => {
    runCalculate(calcMode, linEq, linVar, quadEq, sysEq1, sysEq2);
  }, [calcMode, linEq, linVar, quadEq, sysEq1, sysEq2, runCalculate]);

  // Auto-run default on mount
  useEffect(() => {
    if (autoRan.current) return;
    autoRan.current = true;
    runCalculate('lineal', '2x + 3 = 7', 'x', 'x^2 - 5x + 6 = 0', '2x + y = 5', 'x - y = 1');
  }, [runCalculate]);

  const handleReset = () => {
    setLinEq('2x + 3 = 7'); setLinVar('x');
    setQuadEq('x^2 - 5x + 6 = 0');
    setSysEq1('2x + y = 5'); setSysEq2('x - y = 1');
    setErrMsg(null);
    runCalculate('lineal', '2x + 3 = 7', 'x', 'x^2 - 5x + 6 = 0', '2x + y = 5', 'x - y = 1');
  };

  const copyText = (text: string, which: 'result' | 'eq') => {
    navigator.clipboard.writeText(text).catch(() => {});
    if (which === 'result') { setCopiedResult(true); setTimeout(() => setCopiedResult(false), 2000); }
    else { setCopiedEq(true); setTimeout(() => setCopiedEq(false), 2000); }
  };

  const getResultText = (): string => {
    if (!result) return '';
    if (result.mode === 'lineal') return `${result.variable} = ${result.solutionDecimal}`;
    if (result.mode === 'cuadratica') {
      if (result.isComplex) return 'Sin soluciones reales';
      return result.decimals.map((d, i) => `x = ${d}`).join(', ');
    }
    return `x = ${result.xDecimal}, y = ${result.yDecimal}`;
  };

  const getEqText = (): string => {
    if (!result) return '';
    if (result.mode === 'lineal') return result.inputDisplay;
    if (result.mode === 'cuadratica') return result.inputDisplay;
    return `${result.eq1Display} / ${result.eq2Display}`;
  };

  // Live preview
  const previewText = (() => {
    if (calcMode === 'lineal') return linEq || `ax + b = c`;
    if (calcMode === 'cuadratica') return quadEq || 'ax² + bx + c = 0';
    return `{ ${sysEq1 || '...'} | ${sysEq2 || '...'}`;
  })();

  const inputClass = "w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20";

  return (
    <section id="calculadora" className="bg-page py-10 lg:py-14">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de ecuaciones
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* ── Left: Input panel ── */}
          <div className="academic-card p-6">

            {/* Mode tabs */}
            <div className="mb-5 flex overflow-hidden rounded-lg border border-line" role="tablist" aria-label="Tipo de ecuación">
              {(Object.keys(MODE_LABELS) as CalcMode[]).map((m) => (
                <button
                  key={m}
                  role="tab"
                  aria-selected={calcMode === m}
                  onClick={() => { setCalcMode(m); setResult(null); setErrMsg(null); }}
                  className={`flex-1 py-2 text-[11px] font-semibold transition-colors ${
                    calcMode === m ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                  }`}
                >
                  {MODE_LABELS[m]}
                </button>
              ))}
            </div>

            {/* ── MODE 1: Lineal ── */}
            {calcMode === 'lineal' && (
              <>
                <div className="mb-4">
                  <label htmlFor="lin-eq" className="mb-1.5 block text-sm font-semibold text-slate">Ecuación</label>
                  <input
                    id="lin-eq"
                    type="text"
                    value={linEq}
                    onChange={(e) => { setLinEq(e.target.value); setErrMsg(null); }}
                    onKeyDown={(e) => e.key === 'Enter' && calculate()}
                    placeholder="2x + 3 = 7"
                    className={inputClass}
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <p className="mt-1 text-xs text-muted">Acepta: 2x + 3 = 7 · 3x - 9 = 0 · x/2 + 4 = 10 · 5x = 20</p>
                </div>
                <div className="mb-4">
                  <label htmlFor="lin-var" className="mb-1.5 block text-sm font-semibold text-slate">Variable a resolver</label>
                  <select
                    id="lin-var"
                    value={linVar}
                    onChange={(e) => { setLinVar(e.target.value); setResult(null); setErrMsg(null); }}
                    className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                  >
                    {VARIABLES.map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>
              </>
            )}

            {/* ── MODE 2: Cuadrática ── */}
            {calcMode === 'cuadratica' && (
              <div className="mb-4">
                <label htmlFor="quad-eq" className="mb-1.5 block text-sm font-semibold text-slate">Ecuación cuadrática</label>
                <input
                  id="quad-eq"
                  type="text"
                  value={quadEq}
                  onChange={(e) => { setQuadEq(e.target.value); setErrMsg(null); }}
                  onKeyDown={(e) => e.key === 'Enter' && calculate()}
                  placeholder="x^2 - 5x + 6 = 0"
                  className={inputClass}
                  autoComplete="off"
                  spellCheck={false}
                />
                <div className="mt-2 rounded-lg px-3 py-2 text-xs text-slate" style={{ background: '#F0FAF9' }}>
                  <p className="font-semibold text-teal mb-1">Formatos admitidos</p>
                  <p>x^2 - 5x + 6 = 0 · x^2 + 2x + 1 = 0 · 2x^2 - 8 = 0</p>
                </div>
              </div>
            )}

            {/* ── MODE 3: Sistema 2×2 ── */}
            {calcMode === 'sistema' && (
              <>
                <div className="mb-4">
                  <label htmlFor="sys-eq1" className="mb-1.5 block text-sm font-semibold text-slate">Ecuación 1</label>
                  <input
                    id="sys-eq1"
                    type="text"
                    value={sysEq1}
                    onChange={(e) => { setSysEq1(e.target.value); setErrMsg(null); }}
                    onKeyDown={(e) => e.key === 'Enter' && calculate()}
                    placeholder="2x + y = 5"
                    className={inputClass}
                    autoComplete="off"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="sys-eq2" className="mb-1.5 block text-sm font-semibold text-slate">Ecuación 2</label>
                  <input
                    id="sys-eq2"
                    type="text"
                    value={sysEq2}
                    onChange={(e) => { setSysEq2(e.target.value); setErrMsg(null); }}
                    onKeyDown={(e) => e.key === 'Enter' && calculate()}
                    placeholder="x - y = 1"
                    className={inputClass}
                    autoComplete="off"
                  />
                </div>
                <p className="mb-4 text-xs text-muted">Las variables del sistema deben ser x e y.</p>
              </>
            )}

            {/* Preview */}
            <div className="mb-5 rounded-lg px-4 py-3" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }} aria-label="Vista previa">
              <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-teal">Vista previa</p>
              <p className="font-mono text-base font-semibold text-deep-teal">{previewText}</p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button
                onClick={calculate}
                disabled={loading}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white disabled:opacity-60"
                style={{ background: '#D8A31A' }}
              >
                {loading ? 'Calculando...' : 'Resolver ecuación'}
              </button>
              <button onClick={handleReset} className="rounded-lg border border-line px-4 py-3 text-sm font-semibold text-muted transition-colors hover:border-line-2 hover:text-ink">
                Limpiar
              </button>
            </div>

            {/* Example chips */}
            <div className="mt-5 border-t border-line pt-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Ejemplos rápidos</p>
              <div className="flex flex-wrap gap-1.5">
                {calcMode === 'lineal' && LINEAR_EXAMPLES.map((ex) => (
                  <button
                    key={ex.display}
                    onClick={() => { setLinEq(ex.eq); setLinVar(ex.variable); setErrMsg(null); setResult(null); }}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal"
                  >
                    {ex.display}
                  </button>
                ))}
                {calcMode === 'cuadratica' && QUAD_EXAMPLES.map((ex) => (
                  <button
                    key={ex.display}
                    onClick={() => { setQuadEq(ex.eq); setErrMsg(null); setResult(null); }}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal"
                  >
                    {ex.display}
                  </button>
                ))}
                {calcMode === 'sistema' && SYSTEM_EXAMPLES.map((ex) => (
                  <button
                    key={ex.display}
                    onClick={() => { setSysEq1(ex.eq1); setSysEq2(ex.eq2); setErrMsg(null); setResult(null); }}
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

            {!result && !errMsg && !loading && (
              <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: '#F0FAF9' }} aria-hidden="true">
                  <span className="font-mono text-xl font-bold text-deep-teal">=</span>
                </div>
                <p className="text-sm font-semibold text-slate">Introduce una ecuación y pulsa resolver</p>
                <p className="mt-1 text-xs text-muted">La solución aparecerá aquí</p>
              </div>
            )}

            {loading && !result && (
              <div className="flex items-center justify-center px-6 py-14">
                <p className="text-sm text-muted">Calculando...</p>
              </div>
            )}

            {/* Linear result */}
            {result && result.mode === 'lineal' && (
              <div className="divide-y divide-line">
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Ecuación ingresada</p>
                  <p className="font-mono text-sm text-slate">{result.inputDisplay}</p>
                </div>
                <div className="px-6 py-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">Solución</p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                    <p className="font-mono text-2xl font-bold text-deep-teal">{result.variable} = {result.solutionDecimal}</p>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Procedimiento</p>
                  <p className="text-xs leading-relaxed text-slate">{result.explanation}</p>
                </div>
                {result.verification && (
                  <div className="px-6 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Comprobación</p>
                    <p className="font-mono text-xs text-slate">{result.verification}</p>
                  </div>
                )}
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Método</p>
                  <p className="mt-1 rounded-lg px-3 py-2 font-mono text-sm" style={{ background: '#EEF4F7', color: '#334e68' }}>{result.method}</p>
                </div>
                <div className="flex flex-wrap gap-2 px-6 py-4">
                  <button onClick={() => copyText(getResultText(), 'result')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">
                    {copiedResult ? '✓ Resultado copiado' : 'Copiar resultado'}
                  </button>
                  <button onClick={() => copyText(getEqText(), 'eq')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">
                    {copiedEq ? '✓ Ecuación copiada' : 'Copiar ecuación'}
                  </button>
                </div>
              </div>
            )}

            {/* Quadratic result */}
            {result && result.mode === 'cuadratica' && (
              <div className="divide-y divide-line">
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Ecuación ingresada</p>
                  <p className="font-mono text-sm text-slate">{result.inputDisplay}</p>
                </div>
                <div className="px-6 py-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">
                    {result.isComplex ? 'Sin soluciones reales' : result.solutionCount === 1 ? 'Solución doble' : 'Soluciones'}
                  </p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                    {result.isComplex ? (
                      <p className="font-mono text-base font-semibold text-slate">No tiene soluciones reales</p>
                    ) : (
                      result.decimals.map((d, i) => (
                        <p key={i} className="font-mono text-2xl font-bold text-deep-teal">x = {d}</p>
                      ))
                    )}
                  </div>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Discriminante</p>
                  <p className="text-sm text-slate">
                    {result.discriminantSign === 'negative' && 'D < 0 — sin soluciones reales'}
                    {result.discriminantSign === 'zero' && 'D = 0 — solución doble'}
                    {result.discriminantSign === 'positive' && 'D > 0 — dos soluciones reales distintas'}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Explicación</p>
                  <p className="text-xs leading-relaxed text-slate">{result.explanation}</p>
                </div>
                {result.verifications.length > 0 && (
                  <div className="px-6 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Comprobación</p>
                    {result.verifications.map((v, i) => (
                      <p key={i} className="font-mono text-xs text-slate">{v}</p>
                    ))}
                  </div>
                )}
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Método</p>
                  <p className="mt-1 rounded-lg px-3 py-2 font-mono text-sm" style={{ background: '#EEF4F7', color: '#334e68' }}>{result.method}</p>
                </div>
                <div className="flex flex-wrap gap-2 px-6 py-4">
                  <button onClick={() => copyText(getResultText(), 'result')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">
                    {copiedResult ? '✓ Resultado copiado' : 'Copiar resultado'}
                  </button>
                  <button onClick={() => copyText(getEqText(), 'eq')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">
                    {copiedEq ? '✓ Ecuación copiada' : 'Copiar ecuación'}
                  </button>
                </div>
              </div>
            )}

            {/* System result */}
            {result && result.mode === 'sistema' && (
              <div className="divide-y divide-line">
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Sistema ingresado</p>
                  <p className="font-mono text-sm text-slate">{result.eq1Display}</p>
                  <p className="font-mono text-sm text-slate">{result.eq2Display}</p>
                </div>
                <div className="px-6 py-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">Solución</p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                    <p className="font-mono text-2xl font-bold text-deep-teal">x = {result.xDecimal}</p>
                    <p className="font-mono text-2xl font-bold text-deep-teal">y = {result.yDecimal}</p>
                  </div>
                </div>
                {(result.verification1 || result.verification2) && (
                  <div className="px-6 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Comprobación</p>
                    {result.verification1 && <p className="font-mono text-xs text-slate">{result.verification1}</p>}
                    {result.verification2 && <p className="mt-1 font-mono text-xs text-slate">{result.verification2}</p>}
                  </div>
                )}
                <div className="flex flex-wrap gap-2 px-6 py-4">
                  <button onClick={() => copyText(getResultText(), 'result')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">
                    {copiedResult ? '✓ Resultado copiado' : 'Copiar resultado'}
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
