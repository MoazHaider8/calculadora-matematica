'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, useRef, useCallback } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type CalcMode = 'simplificar' | 'operar' | 'factorizar' | 'evaluar' | 'info';
type OpType = 'suma' | 'resta' | 'multiplicacion';

interface SimplifyResult {
  mode: 'simplificar';
  input: string;
  result: string;
  operation: string;
  explanation: string;
}

interface OperationResult {
  mode: 'operar';
  polyA: string;
  polyB: string;
  opType: OpType;
  result: string;
  operation: string;
  explanation: string;
}

interface FactorResult {
  mode: 'factorizar';
  input: string;
  result: string;
  explanation: string;
  isUnchanged: boolean;
}

interface EvalResult {
  mode: 'evaluar';
  input: string;
  variable: string;
  value: string;
  result: string;
  expression: string;
}

interface InfoResult {
  mode: 'info';
  input: string;
  standardForm: string;
  degree: number;
  leadTerm: string;
  leadCoeff: number;
  constantTerm: number;
  termCount: number;
  variable: string;
}

type CalcResult = SimplifyResult | OperationResult | FactorResult | EvalResult | InfoResult;

// ─── Static data ──────────────────────────────────────────────────────────────

const MODE_LABELS: Record<CalcMode, string> = {
  simplificar: 'Simplificar',
  operar:      'Operar',
  factorizar:  'Factorizar',
  evaluar:     'Evaluar',
  info:        'Información',
};

const MODE_BTN_LABELS: Record<CalcMode, string> = {
  simplificar: 'Simplificar polinomio',
  operar:      'Calcular operación',
  factorizar:  'Factorizar polinomio',
  evaluar:     'Evaluar polinomio',
  info:        'Analizar polinomio',
};

const OP_LABELS: Record<OpType, string> = {
  suma: 'Suma',
  resta: 'Resta',
  multiplicacion: 'Multiplicación',
};

const VARIABLES = ['x', 'y', 'a', 'b', 't'];

const SIMP_EXAMPLES = [
  { display: '3x² + 2x - x² + 5x',   expr: '3x^2 + 2x - x^2 + 5x'    },
  { display: 'x³ + 2x² - x³ + 4',    expr: 'x^3 + 2x^2 - x^3 + 4'    },
  { display: '2y² + 3y - y',          expr: '2y^2 + 3y - y', var: 'y'  },
  { display: '5a + 2a - 3',           expr: '5a + 2a - 3', var: 'a'    },
];

const FAC_EXAMPLES = [
  { display: 'x² + 5x + 6',  expr: 'x^2 + 5x + 6'  },
  { display: 'x² - 1',        expr: 'x^2 - 1'        },
  { display: 'x² + 2x + 1',  expr: 'x^2 + 2x + 1'  },
  { display: '2x² + 4x',      expr: '2x^2 + 4x'      },
];

const EVAL_EXAMPLES = [
  { display: 'x² + 3x + 2, x=2', expr: 'x^2 + 3x + 2', variable: 'x', value: '2' },
  { display: 'x³ - 2x² + x, x=3', expr: 'x^3 - 2x^2 + x', variable: 'x', value: '3' },
];

const INFO_EXAMPLES = [
  { display: 'x³ - 2x² + x - 5', expr: 'x^3 - 2x^2 + x - 5' },
  { display: '2x² + 7x',          expr: '2x^2 + 7x'           },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const SUPS: Record<string, string> = { '2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹' };

function displayify(raw: string): string {
  return raw
    .replace(/\^([0-9])/g, (_, n) => SUPS[n] ?? `^${n}`)
    .replace(/([0-9])\*([a-zA-Z])/g, '$1$2')
    .replace(/\)\*\(/g, ')(')
    .replace(/\)\*([a-zA-Z])/g, ')$1')
    .replace(/([a-zA-Z])\*\(/g, '$1(')
    .replace(/\((-?[0-9]+)\+([a-zA-Z])\)/g, (_, n, v) =>
      n.startsWith('-') ? `(${v}${n})` : `(${v}+${n})`
    )
    .trim();
}

function normalizeExpr(raw: string): string {
  return raw
    .trim()
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/([0-9])([a-zA-Z])/g, '$1*$2');
}

function isEffectivelyUnchanged(input: string, result: string): boolean {
  const norm = (s: string) => s.replace(/\s/g, '').replace(/\*/g, '').toLowerCase();
  return norm(normalizeExpr(input)) === norm(result.replace(/\s/g, ''));
}

function getPolyDegree(simplified: string, variable: string): number {
  const s = simplified.replace(/\s/g, '');
  let maxDeg = 0;
  const powRe = new RegExp(variable + '\\^(\\d+)', 'g');
  let m: RegExpExecArray | null;
  while ((m = powRe.exec(s)) !== null) {
    const d = parseInt(m[1]);
    if (d > maxDeg) maxDeg = d;
  }
  // Bare variable = degree 1
  const bareRe = new RegExp('(?:^|[^a-zA-Z0-9])' + variable + '(?:[^a-zA-Z0-9^]|$)');
  if (bareRe.test(s) && maxDeg === 0) maxDeg = 1;
  return maxDeg;
}

function getLeadCoeff(nerd: any, simplified: string, variable: string, degree: number): number {
  if (degree === 0) {
    try {
      return parseFloat(nerd(simplified, { [variable]: '0' }).evaluate().toString()) || 0;
    } catch { return 0; }
  }
  try {
    let deriv = simplified;
    for (let i = 0; i < degree; i++) {
      deriv = nerd.diff(deriv, variable).toString();
    }
    const at0 = parseFloat(nerd(deriv, { [variable]: '0' }).evaluate().toString());
    const factorial = [1, 1, 2, 6, 24, 120, 720][degree] ?? 1;
    return at0 / factorial;
  } catch { return 1; }
}

function countPolyTerms(simplified: string): number {
  const s = simplified.replace(/\s/g, '');
  if (!s) return 0;
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if ((s[i] === '+' || s[i] === '-') && s[i - 1] !== '^') count++;
  }
  return count;
}

function formatLeadTerm(coeff: number, variable: string, degree: number): string {
  if (degree === 0) return String(Math.round(coeff * 1e9) / 1e9);
  const absCoeff = Math.abs(Math.round(coeff * 1e9) / 1e9);
  const sign = coeff < 0 ? '-' : '';
  const coeffPart = absCoeff === 1 ? '' : String(absCoeff);
  const varPart = degree === 1 ? variable : `${variable}^${degree}`;
  return `${sign}${coeffPart}${varPart}`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function PolinomioCalculator() {
  const nerdRef = useRef<any>(null);
  const autoRan = useRef(false);

  const [calcMode, setCalcMode] = useState<CalcMode>('simplificar');

  const [simpExpr, setSimpExpr] = useState('3x^2 + 2x - x^2 + 5x');
  const [simpVar,  setSimpVar]  = useState('x');

  const [polyA, setPolyA]   = useState('x^2 + 2x + 1');
  const [polyB, setPolyB]   = useState('x + 3');
  const [opType, setOpType] = useState<OpType>('suma');

  const [facExpr, setFacExpr] = useState('x^2 + 5x + 6');

  const [evalExpr, setEvalExpr] = useState('x^2 + 3x + 2');
  const [evalVar,  setEvalVar]  = useState('x');
  const [evalVal,  setEvalVal]  = useState('2');

  const [infoExpr, setInfoExpr] = useState('x^3 - 2x^2 + x - 5');
  const [infoVar,  setInfoVar]  = useState('x');

  const [result,  setResult]  = useState<CalcResult | null>(null);
  const [errMsg,  setErrMsg]  = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copiedResult, setCopiedResult] = useState(false);
  const [copiedPoly,   setCopiedPoly]   = useState(false);

  const loadNerdamer = useCallback(async () => {
    if (nerdRef.current) return nerdRef.current;
    const nerd = (await import('nerdamer')).default;
    await import('nerdamer/Algebra' as any);
    await import('nerdamer/Calculus' as any);
    nerdRef.current = nerd;
    return nerd;
  }, []);

  const runCalculate = useCallback(async (
    mode: CalcMode,
    sExpr: string, sVar: string,
    pA: string, pB: string, op: OpType,
    fExpr: string,
    evExpr: string, evVar: string, evVal: string,
    iExpr: string, iVar: string,
  ) => {
    setErrMsg(null);
    setLoading(true);
    try {
      const nerd = await loadNerdamer();

      if (mode === 'simplificar') {
        if (!sExpr.trim()) { setErrMsg('Escribe un polinomio para simplificar.'); setLoading(false); return; }
        const norm = normalizeExpr(sExpr);
        let raw: string;
        try { raw = nerd(norm).toString(); }
        catch { setErrMsg('No se pudo interpretar el polinomio. Revisa paréntesis, exponentes y variables.'); setLoading(false); return; }
        const display = displayify(raw);
        setResult({
          mode: 'simplificar', input: sExpr, result: display,
          operation: 'Reducción de términos semejantes',
          explanation: 'Se agruparon los términos semejantes y se ordenó el polinomio.',
        });

      } else if (mode === 'operar') {
        if (!pA.trim()) { setErrMsg('Escribe el primer polinomio.'); setLoading(false); return; }
        if (!pB.trim()) { setErrMsg('Introduce el segundo polinomio para realizar la operación.'); setLoading(false); return; }
        const nA = normalizeExpr(pA);
        const nB = normalizeExpr(pB);
        let raw: string;
        try {
          if (op === 'suma') raw = nerd(`(${nA})+(${nB})`).toString();
          else if (op === 'resta') raw = nerd(`(${nA})-(${nB})`).toString();
          else raw = nerd.expand(`(${nA})*(${nB})`).toString();
        } catch { setErrMsg('No se pudo realizar la operación. Revisa los polinomios.'); setLoading(false); return; }
        setResult({
          mode: 'operar', polyA: pA, polyB: pB, opType: op,
          result: displayify(raw),
          operation: OP_LABELS[op] + ' de polinomios',
          explanation: op === 'multiplicacion'
            ? 'Se aplicó la propiedad distributiva y se redujeron términos semejantes.'
            : 'Se ' + (op === 'suma' ? 'sumaron' : 'restaron') + ' los términos semejantes de ambos polinomios.',
        });

      } else if (mode === 'factorizar') {
        if (!fExpr.trim()) { setErrMsg('Escribe un polinomio para factorizar.'); setLoading(false); return; }
        const norm = normalizeExpr(fExpr);
        let raw: string;
        try { raw = nerd.factor(norm).toString(); }
        catch { setErrMsg('No se pudo factorizar este polinomio de forma confiable.'); setLoading(false); return; }
        const unchanged = isEffectivelyUnchanged(fExpr, raw);
        setResult({
          mode: 'factorizar', input: fExpr,
          result: displayify(raw),
          explanation: unchanged
            ? 'No se encontró una factorización simple. El polinomio puede ser irreducible.'
            : 'Se escribió el polinomio como producto de factores usando factorización básica.',
          isUnchanged: unchanged,
        });

      } else if (mode === 'evaluar') {
        if (!evExpr.trim()) { setErrMsg('Escribe un polinomio para evaluar.'); setLoading(false); return; }
        if (!evVal.trim())  { setErrMsg('Introduce el valor de la variable.'); setLoading(false); return; }
        if (isNaN(parseFloat(evVal))) { setErrMsg('El valor de la variable no es válido.'); setLoading(false); return; }
        const norm = normalizeExpr(evExpr);
        let raw: string;
        try { raw = nerd(norm, { [evVar]: evVal }).evaluate().toString(); }
        catch { setErrMsg('No se pudo evaluar este polinomio. Revisa la expresión y el valor.'); setLoading(false); return; }
        const n = parseFloat(raw);
        const display = isNaN(n) ? raw : (Math.abs(n - Math.round(n)) < 1e-9 ? String(Math.round(n)) : parseFloat(n.toFixed(8)).toString());
        setResult({
          mode: 'evaluar', input: evExpr, variable: evVar, value: evVal,
          result: display,
          expression: `P(${evVal}) = ${display}`,
        });

      } else {
        if (!iExpr.trim()) { setErrMsg('Escribe un polinomio para analizar.'); setLoading(false); return; }
        const norm = normalizeExpr(iExpr);
        let simplified: string;
        try { simplified = nerd(norm).toString(); }
        catch { setErrMsg('No se pudo interpretar el polinomio. Revisa paréntesis y exponentes.'); setLoading(false); return; }
        const degree = getPolyDegree(simplified, iVar);
        const constantTerm = (() => {
          try { return parseFloat(nerd(simplified, { [iVar]: '0' }).evaluate().toString()) || 0; } catch { return 0; }
        })();
        const leadCoeff = getLeadCoeff(nerd, simplified, iVar, degree);
        const termCount = countPolyTerms(simplified);
        const leadTerm = formatLeadTerm(leadCoeff, iVar, degree);
        setResult({
          mode: 'info', input: iExpr,
          standardForm: displayify(simplified),
          degree, leadTerm, leadCoeff: Math.round(leadCoeff * 1e9) / 1e9,
          constantTerm: Math.round(constantTerm * 1e9) / 1e9,
          termCount, variable: iVar,
        });
      }
    } catch {
      setErrMsg('No se pudo procesar este polinomio de forma confiable. Prueba con un polinomio más simple.');
    } finally {
      setLoading(false);
    }
  }, [loadNerdamer]);

  const calculate = useCallback(() => {
    runCalculate(calcMode, simpExpr, simpVar, polyA, polyB, opType, facExpr, evalExpr, evalVar, evalVal, infoExpr, infoVar);
  }, [calcMode, simpExpr, simpVar, polyA, polyB, opType, facExpr, evalExpr, evalVar, evalVal, infoExpr, infoVar, runCalculate]);

  useEffect(() => {
    if (autoRan.current) return;
    autoRan.current = true;
    runCalculate('simplificar', '3x^2 + 2x - x^2 + 5x', 'x', 'x^2 + 2x + 1', 'x + 3', 'suma', 'x^2 + 5x + 6', 'x^2 + 3x + 2', 'x', '2', 'x^3 - 2x^2 + x - 5', 'x');
  }, [runCalculate]);

  const handleReset = () => {
    setSimpExpr('3x^2 + 2x - x^2 + 5x'); setSimpVar('x');
    setPolyA('x^2 + 2x + 1'); setPolyB('x + 3'); setOpType('suma');
    setFacExpr('x^2 + 5x + 6');
    setEvalExpr('x^2 + 3x + 2'); setEvalVar('x'); setEvalVal('2');
    setInfoExpr('x^3 - 2x^2 + x - 5'); setInfoVar('x');
    setErrMsg(null);
    runCalculate('simplificar', '3x^2 + 2x - x^2 + 5x', 'x', 'x^2 + 2x + 1', 'x + 3', 'suma', 'x^2 + 5x + 6', 'x^2 + 3x + 2', 'x', '2', 'x^3 - 2x^2 + x - 5', 'x');
  };

  const copyText = (text: string, which: 'result' | 'poly') => {
    navigator.clipboard.writeText(text).catch(() => {});
    if (which === 'result') { setCopiedResult(true); setTimeout(() => setCopiedResult(false), 2000); }
    else { setCopiedPoly(true); setTimeout(() => setCopiedPoly(false), 2000); }
  };

  const getResultText = (): string => {
    if (!result) return '';
    if (result.mode === 'info') return `Grado: ${result.degree}, Forma: ${result.standardForm}`;
    return result.result;
  };

  const getPolyText = (): string => {
    if (!result) return '';
    if (result.mode === 'operar') return `${result.polyA} / ${result.polyB}`;
    if (result.mode === 'info') return result.input;
    return (result as any).input || '';
  };

  const previewText = (() => {
    if (calcMode === 'simplificar') return simpExpr || 'p(x)';
    if (calcMode === 'operar') return `A(x) = ${polyA || '...'} · B(x) = ${polyB || '...'}`;
    if (calcMode === 'factorizar') return facExpr || 'p(x)';
    if (calcMode === 'evaluar') return evalVal ? `P(${evalVal}) = ${evalExpr || 'p(x)'}` : (evalExpr || 'p(x)');
    return infoExpr || 'p(x)';
  })();

  const inputClass = "w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20";

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de polinomios
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Left: Input panel ── */}
          <div className="academic-card p-7">

            {/* Mode tabs */}
            <div className="mb-5 flex overflow-hidden rounded-lg border border-line" role="tablist" aria-label="Operación con polinomios">
              {(Object.keys(MODE_LABELS) as CalcMode[]).map((m) => (
                <button
                  key={m}
                  role="tab"
                  aria-selected={calcMode === m}
                  onClick={() => { setCalcMode(m); setResult(null); setErrMsg(null); }}
                  className={`flex-1 py-2 text-[10px] font-semibold transition-colors ${
                    calcMode === m ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                  }`}
                >
                  {MODE_LABELS[m]}
                </button>
              ))}
            </div>

            {/* ── MODE 1: Simplificar ── */}
            {calcMode === 'simplificar' && (
              <>
                <div className="mb-4">
                  <label htmlFor="simp-poly" className="mb-1.5 block text-sm font-semibold text-slate">Polinomio</label>
                  <input
                    id="simp-poly"
                    type="text"
                    value={simpExpr}
                    onChange={(e) => { setSimpExpr(e.target.value); setErrMsg(null); }}
                    onKeyDown={(e) => e.key === 'Enter' && calculate()}
                    placeholder="3x^2 + 2x - x^2 + 5x"
                    className={inputClass}
                    autoComplete="off" spellCheck={false}
                  />
                  <p className="mt-1 text-xs text-muted">Acepta: 3x^2 + 2x - x^2 + 5x · x^3 + 2x^2 - x^3 + 4</p>
                </div>
                <div className="mb-4">
                  <label htmlFor="simp-var" className="mb-1.5 block text-sm font-semibold text-slate">Variable</label>
                  <select id="simp-var" value={simpVar} onChange={(e) => { setSimpVar(e.target.value); setResult(null); }}
                    className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20">
                    {VARIABLES.map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>
              </>
            )}

            {/* ── MODE 2: Operar ── */}
            {calcMode === 'operar' && (
              <>
                <div className="mb-4">
                  <label htmlFor="poly-a" className="mb-1.5 block text-sm font-semibold text-slate">Polinomio A</label>
                  <input id="poly-a" type="text" value={polyA}
                    onChange={(e) => { setPolyA(e.target.value); setErrMsg(null); }}
                    onKeyDown={(e) => e.key === 'Enter' && calculate()}
                    placeholder="x^2 + 2x + 1" className={inputClass} autoComplete="off" spellCheck={false} />
                </div>
                <div className="mb-4">
                  <label htmlFor="poly-op" className="mb-1.5 block text-sm font-semibold text-slate">Operación</label>
                  <select id="poly-op" value={opType} onChange={(e) => { setOpType(e.target.value as OpType); setResult(null); }}
                    className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20">
                    <option value="suma">Sumar</option>
                    <option value="resta">Restar</option>
                    <option value="multiplicacion">Multiplicar</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="poly-b" className="mb-1.5 block text-sm font-semibold text-slate">Polinomio B</label>
                  <input id="poly-b" type="text" value={polyB}
                    onChange={(e) => { setPolyB(e.target.value); setErrMsg(null); }}
                    onKeyDown={(e) => e.key === 'Enter' && calculate()}
                    placeholder="x + 3" className={inputClass} autoComplete="off" spellCheck={false} />
                </div>
              </>
            )}

            {/* ── MODE 3: Factorizar ── */}
            {calcMode === 'factorizar' && (
              <div className="mb-4">
                <label htmlFor="fac-poly" className="mb-1.5 block text-sm font-semibold text-slate">Polinomio</label>
                <input id="fac-poly" type="text" value={facExpr}
                  onChange={(e) => { setFacExpr(e.target.value); setErrMsg(null); }}
                  onKeyDown={(e) => e.key === 'Enter' && calculate()}
                  placeholder="x^2 + 5x + 6" className={inputClass} autoComplete="off" spellCheck={false} />
                <p className="mt-1 text-xs text-muted">Acepta: x^2 + 5x + 6 · x^2 - 1 · 2x^2 + 4x</p>
              </div>
            )}

            {/* ── MODE 4: Evaluar ── */}
            {calcMode === 'evaluar' && (
              <>
                <div className="mb-4">
                  <label htmlFor="eval-poly" className="mb-1.5 block text-sm font-semibold text-slate">Polinomio</label>
                  <input id="eval-poly" type="text" value={evalExpr}
                    onChange={(e) => { setEvalExpr(e.target.value); setErrMsg(null); }}
                    onKeyDown={(e) => e.key === 'Enter' && calculate()}
                    placeholder="x^2 + 3x + 2" className={inputClass} autoComplete="off" spellCheck={false} />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="eval-var" className="mb-1.5 block text-sm font-semibold text-slate">Variable</label>
                    <select id="eval-var" value={evalVar} onChange={(e) => { setEvalVar(e.target.value); setResult(null); }}
                      className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20">
                      {VARIABLES.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eval-val" className="mb-1.5 block text-sm font-semibold text-slate">Valor</label>
                    <input id="eval-val" type="text" value={evalVal}
                      onChange={(e) => { setEvalVal(e.target.value); setErrMsg(null); }}
                      onKeyDown={(e) => e.key === 'Enter' && calculate()}
                      placeholder="2" className={inputClass} autoComplete="off" />
                  </div>
                </div>
              </>
            )}

            {/* ── MODE 5: Información ── */}
            {calcMode === 'info' && (
              <>
                <div className="mb-4">
                  <label htmlFor="info-poly" className="mb-1.5 block text-sm font-semibold text-slate">Polinomio</label>
                  <input id="info-poly" type="text" value={infoExpr}
                    onChange={(e) => { setInfoExpr(e.target.value); setErrMsg(null); }}
                    onKeyDown={(e) => e.key === 'Enter' && calculate()}
                    placeholder="x^3 - 2x^2 + x - 5" className={inputClass} autoComplete="off" spellCheck={false} />
                </div>
                <div className="mb-4">
                  <label htmlFor="info-var" className="mb-1.5 block text-sm font-semibold text-slate">Variable</label>
                  <select id="info-var" value={infoVar} onChange={(e) => { setInfoVar(e.target.value); setResult(null); }}
                    className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20">
                    {VARIABLES.map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>
              </>
            )}

            {/* Preview */}
            <div className="mb-5 rounded-lg px-4 py-3" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }} aria-label="Vista previa">
              <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-teal">Vista previa</p>
              <p className="font-mono text-base font-semibold text-deep-teal">{previewText}</p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button onClick={calculate} disabled={loading}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white disabled:opacity-60"
                style={{ background: '#D8A31A' }}>
                {loading ? 'Calculando...' : MODE_BTN_LABELS[calcMode]}
              </button>
              <button onClick={handleReset} className="rounded-lg border border-line px-4 py-3 text-sm font-semibold text-muted transition-colors hover:border-line-2 hover:text-ink">
                Limpiar
              </button>
            </div>

            {/* Example chips */}
            <div className="mt-5 border-t border-line pt-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Ejemplos rápidos</p>
              <div className="flex flex-wrap gap-1.5">
                {calcMode === 'simplificar' && SIMP_EXAMPLES.map((ex) => (
                  <button key={ex.display} onClick={() => { setSimpExpr(ex.expr); if ((ex as any).var) setSimpVar((ex as any).var); setErrMsg(null); setResult(null); }}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal">
                    {ex.display}
                  </button>
                ))}
                {calcMode === 'factorizar' && FAC_EXAMPLES.map((ex) => (
                  <button key={ex.display} onClick={() => { setFacExpr(ex.expr); setErrMsg(null); setResult(null); }}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal">
                    {ex.display}
                  </button>
                ))}
                {calcMode === 'evaluar' && EVAL_EXAMPLES.map((ex) => (
                  <button key={ex.display} onClick={() => { setEvalExpr(ex.expr); setEvalVar(ex.variable); setEvalVal(ex.value); setErrMsg(null); setResult(null); }}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal">
                    {ex.display}
                  </button>
                ))}
                {calcMode === 'info' && INFO_EXAMPLES.map((ex) => (
                  <button key={ex.display} onClick={() => { setInfoExpr(ex.expr); setErrMsg(null); setResult(null); }}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal">
                    {ex.display}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Result panel ── */}
          <div className="academic-card overflow-hidden" aria-live="polite" aria-label="Panel de resultado">
            <div className="border-b border-line px-7 py-4" style={{ background: '#F0FAF9' }}>
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado del polinomio</p>
            </div>

            {errMsg && (
              <div className="mx-7 mt-5 flex gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3" role="alert">
                <span className="mt-0.5 shrink-0 text-red-400" aria-hidden="true">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5zm0 6.5a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z" />
                  </svg>
                </span>
                <p className="text-sm text-red-700">{errMsg}</p>
              </div>
            )}

            {!result && !errMsg && !loading && (
              <div className="flex flex-col items-center justify-center px-7 py-16 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: '#F0FAF9' }} aria-hidden="true">
                  <span className="font-mono text-base font-bold text-deep-teal">p(x)</span>
                </div>
                <p className="text-sm font-semibold text-slate">Introduce un polinomio y pulsa calcular</p>
                <p className="mt-1 text-xs text-muted">El resultado aparecerá aquí</p>
              </div>
            )}

            {loading && !result && (
              <div className="flex items-center justify-center px-7 py-16">
                <p className="text-sm text-muted">Calculando...</p>
              </div>
            )}

            {/* Simplify result */}
            {result?.mode === 'simplificar' && (
              <div className="divide-y divide-line">
                <div className="px-7 py-4"><p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Polinomio ingresado</p><p className="font-mono text-sm text-slate">{result.input}</p></div>
                <div className="px-7 py-6"><p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                    <p className="font-mono text-2xl font-bold text-deep-teal">{result.result}</p></div></div>
                <div className="px-7 py-4"><p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Operación aplicada</p>
                  <p className="mt-1 rounded-lg px-3 py-2 font-mono text-sm" style={{ background: '#EEF4F7', color: '#334e68' }}>{result.operation}</p></div>
                <div className="px-7 py-4"><p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Explicación</p>
                  <p className="text-xs leading-relaxed text-slate">{result.explanation}</p></div>
                <div className="flex flex-wrap gap-2 px-7 py-4">
                  <button onClick={() => copyText(result.result, 'result')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">{copiedResult ? '✓ Resultado copiado' : 'Copiar resultado'}</button>
                  <button onClick={() => copyText(result.input, 'poly')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">{copiedPoly ? '✓ Polinomio copiado' : 'Copiar polinomio'}</button>
                </div>
              </div>
            )}

            {/* Operation result */}
            {result?.mode === 'operar' && (
              <div className="divide-y divide-line">
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Operación</p>
                  <p className="font-mono text-sm text-slate">A(x) = {result.polyA}</p>
                  <p className="font-mono text-sm text-slate">B(x) = {result.polyB}</p>
                </div>
                <div className="px-7 py-6"><p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                    <p className="font-mono text-2xl font-bold text-deep-teal">{result.result}</p></div></div>
                <div className="px-7 py-4"><p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Operación aplicada</p>
                  <p className="mt-1 rounded-lg px-3 py-2 font-mono text-sm" style={{ background: '#EEF4F7', color: '#334e68' }}>{result.operation}</p></div>
                <div className="px-7 py-4"><p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Explicación</p>
                  <p className="text-xs leading-relaxed text-slate">{result.explanation}</p></div>
                <div className="flex flex-wrap gap-2 px-7 py-4">
                  <button onClick={() => copyText(result.result, 'result')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">{copiedResult ? '✓ Resultado copiado' : 'Copiar resultado'}</button>
                </div>
              </div>
            )}

            {/* Factor result */}
            {result?.mode === 'factorizar' && (
              <div className="divide-y divide-line">
                <div className="px-7 py-4"><p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Polinomio ingresado</p><p className="font-mono text-sm text-slate">{result.input}</p></div>
                <div className="px-7 py-6"><p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">{result.isUnchanged ? 'Expresión resultante' : 'Forma factorizada'}</p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                    <p className="font-mono text-2xl font-bold text-deep-teal">{result.result}</p></div></div>
                <div className="px-7 py-4"><p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Explicación</p>
                  <p className="text-xs leading-relaxed text-slate">{result.explanation}</p></div>
                <div className="flex flex-wrap gap-2 px-7 py-4">
                  <button onClick={() => copyText(result.result, 'result')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">{copiedResult ? '✓ Resultado copiado' : 'Copiar resultado'}</button>
                  <button onClick={() => copyText(result.input, 'poly')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">{copiedPoly ? '✓ Polinomio copiado' : 'Copiar polinomio'}</button>
                </div>
              </div>
            )}

            {/* Eval result */}
            {result?.mode === 'evaluar' && (
              <div className="divide-y divide-line">
                <div className="px-7 py-4"><p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Polinomio</p><p className="font-mono text-sm text-slate">P({result.variable}) = {result.input}</p>
                  <p className="mt-0.5 font-mono text-sm text-slate">{result.variable} = {result.value}</p></div>
                <div className="px-7 py-6"><p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                    <p className="font-mono text-2xl font-bold text-deep-teal">{result.expression}</p></div></div>
                <div className="flex flex-wrap gap-2 px-7 py-4">
                  <button onClick={() => copyText(result.result, 'result')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">{copiedResult ? '✓ Resultado copiado' : 'Copiar resultado'}</button>
                  <button onClick={() => copyText(result.input, 'poly')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">{copiedPoly ? '✓ Polinomio copiado' : 'Copiar polinomio'}</button>
                </div>
              </div>
            )}

            {/* Info result */}
            {result?.mode === 'info' && (
              <div className="divide-y divide-line">

                {/* Polynomial input */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Polinomio ingresado</p>
                  <p className="font-mono text-sm text-slate">{result.input}</p>
                </div>

                {/* Degree hero */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">Identificación del polinomio</p>
                  <div className="flex items-center gap-4 rounded-xl p-4" style={{ background: '#0A4F4D' }}>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-3xl font-bold text-white" style={{ background: 'rgba(255,255,255,0.12)' }}>
                      {result.degree}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.65)' }}>Grado del polinomio</p>
                      <p className="mt-0.5 font-mono text-lg font-bold text-white">Grado {result.degree}</p>
                      <p className="mt-0.5 font-mono text-sm" style={{ color: 'rgba(216,163,26,0.9)' }}>
                        Término principal: {result.leadTerm}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Data grid */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">Propiedades</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: 'Forma estándar',         value: result.standardForm },
                      { label: 'Variable',               value: result.variable },
                      { label: 'Coeficiente principal',  value: String(result.leadCoeff) },
                      { label: 'Término independiente',  value: String(result.constantTerm) },
                      { label: 'Número de términos',     value: String(result.termCount) },
                    ].map(({ label, value }) => (
                      <div key={label} className="rounded-lg px-3 py-2.5" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-muted">{label}</p>
                        <p className="mt-0.5 font-mono text-sm font-bold text-deep-teal">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 px-7 py-4">
                  <button onClick={() => copyText(`Grado: ${result.degree}, Forma: ${result.standardForm}`, 'result')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">{copiedResult ? '✓ Resultado copiado' : 'Copiar información'}</button>
                  <button onClick={() => copyText(result.input, 'poly')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">{copiedPoly ? '✓ Polinomio copiado' : 'Copiar polinomio'}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
