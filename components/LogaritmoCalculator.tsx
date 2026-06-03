'use client';

import { useState, useCallback, useRef } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type CalcMode = 'compute' | 'evaluate' | 'change';
type BaseOption = '10' | 'e' | '2' | 'custom';

interface LogResult {
  expression: string;
  result: string;
  isExact: boolean;
  exactN: number | null;
  verification: string;
  changeSteps: string | null;
  rule: string;
  formula: string;
  detail: string;
  numericValue: number;
  argNum: number;
  baseNum: number;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const MODE_LABELS: Record<CalcMode, string> = {
  compute: 'Calcular logaritmo',
  evaluate: 'Evaluar expresión',
  change: 'Cambio de base',
};

const COMPUTE_EXAMPLES = [
  { display: 'log₂(8)', arg: '8', baseOpt: '2' as BaseOption, customBase: '' },
  { display: 'log₁₀(100)', arg: '100', baseOpt: '10' as BaseOption, customBase: '' },
  { display: 'ln(e²)', arg: String(Math.E * Math.E), baseOpt: 'e' as BaseOption, customBase: '' },
  { display: 'log₃(81)', arg: '81', baseOpt: 'custom' as BaseOption, customBase: '3' },
  { display: 'log₅(125)', arg: '125', baseOpt: 'custom' as BaseOption, customBase: '5' },
  { display: 'log₂(10)', arg: '10', baseOpt: '2' as BaseOption, customBase: '' },
];

const EVAL_EXAMPLES = [
  { display: 'log(100)', expr: 'log(100)' },
  { display: 'ln(e^2)', expr: 'ln(e^2)' },
  { display: 'log(8,2)', expr: 'log(8,2)' },
  { display: 'log(81,3)', expr: 'log(81,3)' },
  { display: 'log(1000)', expr: 'log(1000)' },
];

const CHANGE_EXAMPLES = [
  { display: 'log₂(8)', arg: '8', base: '2' },
  { display: 'log₁₀(100)', arg: '100', base: '10' },
  { display: 'log₃(27)', arg: '27', base: '3' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const SUB: Record<string, string> = { '0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉' };
const SUP: Record<string, string> = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','-':'⁻' };

function subStr(s: string): string { return s.split('').map(c => SUB[c] ?? c).join(''); }
function supStr(s: string): string { return s.split('').map(c => SUP[c] ?? c).join(''); }

/** Safely parse a numeric expression (no eval) */
function safeParseNum(s: string): number | null {
  const v = s.trim()
    .replace(/π/g, String(Math.PI))
    .replace(/\bpi\b/gi, String(Math.PI));

  // Direct number
  const n = Number(v);
  if (!isNaN(n) && isFinite(n)) return n;

  // Euler's constant
  if (v === 'e') return Math.E;

  // e^n
  const eMatch = v.match(/^e\^(-?[\d.]+(?:e[+-]?\d+)?)$/i);
  if (eMatch) return Math.pow(Math.E, parseFloat(eMatch[1]));

  // a^b
  const powMatch = v.match(/^(-?[\d.]+)\^(-?[\d.]+)$/);
  if (powMatch) return Math.pow(parseFloat(powMatch[1]), parseFloat(powMatch[2]));

  // sqrt(n)
  const sqrtMatch = v.match(/^sqrt\((-?[\d.]+)\)$/i);
  if (sqrtMatch) {
    const inner = parseFloat(sqrtMatch[1]);
    return inner >= 0 ? Math.sqrt(inner) : null;
  }

  return null;
}

function formatDecimal(n: number): string {
  if (Math.abs(n - Math.round(n)) < 1e-9) return String(Math.round(n));
  return n.toFixed(10).replace(/\.?0+$/, '');
}

function buildExprDisplay(argNum: number, baseNum: number, baseOpt?: BaseOption): string {
  const argStr = Number.isInteger(argNum) ? String(argNum) : argNum.toFixed(4).replace(/\.?0+$/, '');
  if (Math.abs(baseNum - Math.E) < 1e-10) return `ln(${argStr})`;
  if (Math.abs(baseNum - 10) < 1e-10) return `log₁₀(${argStr})`;
  const baseLabel = Number.isInteger(baseNum) ? String(baseNum) : baseNum.toFixed(2).replace(/\.?0+$/, '');
  return `log${subStr(baseLabel)}(${argStr})`;
}

function buildVerification(argNum: number, baseNum: number, logVal: number): string {
  const isExact = Math.abs(logVal - Math.round(logVal)) < 1e-9;
  const exactN = Math.round(logVal);
  const argLabel = Number.isInteger(argNum) ? String(argNum) : argNum.toFixed(4).replace(/\.?0+$/, '');
  const isNat = Math.abs(baseNum - Math.E) < 1e-10;
  const baseLabel = isNat ? 'e' : Number.isInteger(baseNum) ? String(baseNum) : baseNum.toFixed(2).replace(/\.?0+$/, '');

  if (isExact) {
    return `${baseLabel}${supStr(String(exactN))} = ${argLabel}`;
  }
  return `${baseLabel}^${logVal.toFixed(4)} ≈ ${argLabel}`;
}

function buildChangeSteps(argNum: number, baseNum: number, logVal: number): string {
  const argStr = Number.isInteger(argNum) ? String(argNum) : argNum.toFixed(4).replace(/\.?0+$/, '');
  const baseLabel = Number.isInteger(baseNum) ? String(baseNum) : baseNum.toFixed(4).replace(/\.?0+$/, '');
  const lnArg = Math.log(argNum).toFixed(4);
  const lnBase = Math.log(baseNum).toFixed(4);
  const result = formatDecimal(logVal);
  return `log${subStr(baseLabel)}(${argStr}) = ln(${argStr}) / ln(${baseLabel}) = ${lnArg} / ${lnBase} = ${result}`;
}

function computeLog(argNum: number, baseNum: number, mode: CalcMode): LogResult {
  const isNat = Math.abs(baseNum - Math.E) < 1e-10;
  const is10 = Math.abs(baseNum - 10) < 1e-10;

  const logVal = isNat ? Math.log(argNum) : is10 ? Math.log10(argNum) : Math.log(argNum) / Math.log(baseNum);
  const isExact = Math.abs(logVal - Math.round(logVal)) < 1e-9;
  const exactN = isExact ? Math.round(logVal) : null;

  const expression = buildExprDisplay(argNum, baseNum);
  const result = formatDecimal(logVal);
  const verification = buildVerification(argNum, baseNum, logVal);
  const changeSteps = mode === 'change' ? buildChangeSteps(argNum, baseNum, logVal) : null;

  const rule = isNat ? 'Logaritmo natural (base e)' :
               is10 ? 'Logaritmo común (base 10)' :
               'Fórmula de cambio de base';
  const formula = isNat ? 'ln(a) = log_e(a)' : 'log_b(a) = ln(a) / ln(b)';

  const baseLabel = isNat ? 'e' : is10 ? '10' : Number.isInteger(baseNum) ? String(baseNum) : baseNum.toFixed(2);
  const argLabel = Number.isInteger(argNum) ? String(argNum) : argNum.toFixed(4).replace(/\.?0+$/, '');

  const detail = isExact
    ? `El resultado es ${exactN} porque ${baseLabel}${supStr(String(exactN!))} = ${argLabel}.`
    : isNat
    ? `El resultado es el exponente al que hay que elevar e para obtener ${argLabel}.`
    : `El resultado se obtuvo con la fórmula de cambio de base: ln(${argLabel}) / ln(${baseLabel}).`;

  return { expression, result, isExact, exactN, verification, changeSteps, rule, formula, detail, numericValue: logVal, argNum, baseNum };
}

// Parse log expression: log(x), ln(x), log(x,b)
function parseLogExpr(expr: string): { argNum: number; baseNum: number; display: string } | null {
  const s = expr.trim().replace(/\s/g, '').replace(/π/g, String(Math.PI)).replace(/\bpi\b/gi, String(Math.PI));

  // ln(x)
  const lnM = s.match(/^ln\((.+)\)$/i);
  if (lnM) {
    const a = safeParseNum(lnM[1]);
    if (a !== null) return { argNum: a, baseNum: Math.E, display: `ln(${lnM[1]})` };
  }

  // log(x,b) — must check before log(x)
  const log2M = s.match(/^log\((.+),(.+)\)$/i);
  if (log2M) {
    const a = safeParseNum(log2M[1]);
    const b = safeParseNum(log2M[2]);
    if (a !== null && b !== null) return { argNum: a, baseNum: b, display: `log(${log2M[1]}, ${log2M[2]})` };
  }

  // log(x) — base 10
  const log1M = s.match(/^log\((.+)\)$/i);
  if (log1M) {
    const a = safeParseNum(log1M[1]);
    if (a !== null) return { argNum: a, baseNum: 10, display: `log(${log1M[1]})` };
  }

  return null;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function LogaritmoCalculator() {
  const autoRan = useRef(false);

  const [calcMode, setCalcMode] = useState<CalcMode>('compute');
  // Mode 1
  const [arg, setArg] = useState('8');
  const [baseOpt, setBaseOpt] = useState<BaseOption>('2');
  const [customBase, setCustomBase] = useState('');
  // Mode 2
  const [evalExpr, setEvalExpr] = useState('');
  // Mode 3
  const [changeArg, setChangeArg] = useState('8');
  const [changeBase, setChangeBase] = useState('2');

  const [result, setResult] = useState<LogResult | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [copiedResult, setCopiedResult] = useState(false);
  const [copiedExpr, setCopiedExpr] = useState(false);

  const runCalculate = useCallback((
    mode: CalcMode,
    argStr: string,
    bOpt: BaseOption | null,
    customB: string,
    evalE: string,
    changeA: string,
    changeB: string,
  ) => {
    setErrMsg(null);
    try {
      if (mode === 'evaluate') {
        if (!evalE.trim()) { setErrMsg('Introduce una expresión logarítmica.'); return; }
        const parsed = parseLogExpr(evalE);
        if (!parsed) { setErrMsg('No se pudo interpretar la expresión. Revisa paréntesis, base y argumento.'); return; }
        const { argNum, baseNum } = parsed;
        if (argNum <= 0) { setErrMsg('El argumento del logaritmo debe ser mayor que 0.'); return; }
        if (baseNum <= 0 || Math.abs(baseNum - 1) < 1e-10) { setErrMsg('La base del logaritmo debe ser mayor que 0 y diferente de 1.'); return; }
        setResult(computeLog(argNum, baseNum, mode));
        return;
      }

      const srcArg = mode === 'change' ? changeA : argStr;
      const srcBase = mode === 'change' ? changeB : (bOpt === 'custom' ? customB : bOpt!);

      if (!srcArg.trim()) { setErrMsg('Introduce el argumento del logaritmo.'); return; }

      const argNum = safeParseNum(srcArg);
      if (argNum === null) { setErrMsg('No se pudo interpretar el argumento. Usa un número, e, pi o e^n.'); return; }
      if (argNum <= 0) { setErrMsg('El argumento del logaritmo debe ser mayor que 0.'); return; }

      let baseNum: number;
      if (bOpt === 'e' && mode !== 'change') {
        baseNum = Math.E;
      } else if (bOpt === '10' && mode !== 'change') {
        baseNum = 10;
      } else {
        if (!srcBase.trim()) { setErrMsg('Introduce o selecciona una base.'); return; }
        const b = safeParseNum(srcBase);
        if (b === null) { setErrMsg('No se pudo interpretar la base.'); return; }
        if (b <= 0) { setErrMsg('La base del logaritmo debe ser mayor que 0.'); return; }
        if (Math.abs(b - 1) < 1e-10) { setErrMsg('La base del logaritmo no puede ser 1.'); return; }
        baseNum = b;
      }

      setResult(computeLog(argNum, baseNum, mode));
    } catch {
      setErrMsg('No se pudo calcular el logaritmo de forma confiable.');
    }
  }, []);

  // Auto-calculate default log₂(8) = 3
  if (!autoRan.current) {
    autoRan.current = true;
    const argNum = 8;
    const baseNum = 2;
    setResult(computeLog(argNum, baseNum, 'compute'));
  }

  const calculate = useCallback(() => {
    runCalculate(calcMode, arg, baseOpt, customBase, evalExpr, changeArg, changeBase);
  }, [calcMode, arg, baseOpt, customBase, evalExpr, changeArg, changeBase, runCalculate]);

  const handleReset = () => {
    setArg('8'); setBaseOpt('2'); setCustomBase('');
    setEvalExpr(''); setChangeArg('8'); setChangeBase('2');
    setErrMsg(null);
    setResult(computeLog(8, 2, 'compute'));
  };

  const copyText = (text: string, which: 'result' | 'expr') => {
    navigator.clipboard.writeText(text).catch(() => {});
    if (which === 'result') { setCopiedResult(true); setTimeout(() => setCopiedResult(false), 2000); }
    else { setCopiedExpr(true); setTimeout(() => setCopiedExpr(false), 2000); }
  };

  // Live preview
  const previewText = (() => {
    if (calcMode === 'evaluate') return evalExpr.trim() || 'log(x)';
    const a = calcMode === 'change' ? (changeArg || 'a') : (arg || 'a');
    const b = calcMode === 'change' ? (changeBase || 'b') : (baseOpt === 'custom' ? (customBase || 'b') : baseOpt);
    if (b === 'e') return `ln(${a})`;
    if (b === '10') return `log₁₀(${a})`;
    return `log${subStr(b)}(${a})`;
  })();

  return (
    <section id="calculadora" className="bg-page py-10 lg:py-14">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de logaritmos
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* ── Left: Input panel ── */}
          <div className="academic-card p-6">

            {/* Mode tabs */}
            <div className="mb-5 flex overflow-hidden rounded-lg border border-line" role="tablist" aria-label="Modo de cálculo">
              {(Object.keys(MODE_LABELS) as CalcMode[]).map((m) => (
                <button
                  key={m}
                  role="tab"
                  aria-selected={calcMode === m}
                  onClick={() => { setCalcMode(m); setResult(null); setErrMsg(null); }}
                  className={`flex-1 py-2 text-xs font-semibold transition-colors ${
                    calcMode === m ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                  }`}
                >
                  {MODE_LABELS[m]}
                </button>
              ))}
            </div>

            {/* ── MODE 1: Compute ── */}
            {calcMode === 'compute' && (
              <>
                <div className="mb-4">
                  <label htmlFor="log-arg" className="mb-1.5 block text-sm font-semibold text-slate">Argumento</label>
                  <input
                    id="log-arg"
                    type="text"
                    value={arg}
                    onChange={(e) => { setArg(e.target.value); setErrMsg(null); }}
                    onKeyDown={(e) => e.key === 'Enter' && calculate()}
                    placeholder="8"
                    className="w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <p className="mt-1 text-xs text-muted">Acepta: números, e, pi, e^2, sqrt(16)</p>
                </div>
                <div className="mb-4">
                  <label htmlFor="log-base" className="mb-1.5 block text-sm font-semibold text-slate">Base</label>
                  <select
                    id="log-base"
                    value={baseOpt}
                    onChange={(e) => { setBaseOpt(e.target.value as BaseOption); setResult(null); setErrMsg(null); }}
                    className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                  >
                    <option value="10">Base 10 (log)</option>
                    <option value="e">Base e (ln)</option>
                    <option value="2">Base 2</option>
                    <option value="custom">Base personalizada</option>
                  </select>
                </div>
                {baseOpt === 'custom' && (
                  <div className="mb-4">
                    <label htmlFor="log-custom-base" className="mb-1.5 block text-sm font-semibold text-slate">Base personalizada</label>
                    <input
                      id="log-custom-base"
                      type="text"
                      value={customBase}
                      onChange={(e) => setCustomBase(e.target.value)}
                      placeholder="3"
                      className="w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    />
                    <p className="mt-1 text-xs text-muted">La base debe ser positiva y diferente de 1.</p>
                  </div>
                )}
              </>
            )}

            {/* ── MODE 2: Evaluate ── */}
            {calcMode === 'evaluate' && (
              <div className="mb-4">
                <label htmlFor="log-eval" className="mb-1.5 block text-sm font-semibold text-slate">Expresión logarítmica</label>
                <input
                  id="log-eval"
                  type="text"
                  value={evalExpr}
                  onChange={(e) => { setEvalExpr(e.target.value); setErrMsg(null); }}
                  onKeyDown={(e) => e.key === 'Enter' && calculate()}
                  placeholder="log(100)"
                  className="w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                  autoComplete="off"
                  spellCheck={false}
                />
                <div className="mt-2 rounded-lg px-3 py-2 text-xs text-slate" style={{ background: '#F0FAF9' }}>
                  <p className="font-semibold text-teal mb-1">Formatos aceptados</p>
                  <p>log(100) · ln(e^2) · log(8,2) · log(81,3)</p>
                </div>
              </div>
            )}

            {/* ── MODE 3: Change of base ── */}
            {calcMode === 'change' && (
              <>
                <div className="mb-4 grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="change-arg" className="mb-1.5 block text-sm font-semibold text-slate">Argumento</label>
                    <input
                      id="change-arg"
                      type="text"
                      value={changeArg}
                      onChange={(e) => setChangeArg(e.target.value)}
                      placeholder="8"
                      className="w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="change-base" className="mb-1.5 block text-sm font-semibold text-slate">Base</label>
                    <input
                      id="change-base"
                      type="text"
                      value={changeBase}
                      onChange={(e) => setChangeBase(e.target.value)}
                      placeholder="2"
                      className="w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    />
                  </div>
                </div>
                <div className="mb-4 rounded-lg px-4 py-3 text-sm" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                  <p className="font-mono text-deep-teal">log_b(a) = ln(a) / ln(b)</p>
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
              <button
                onClick={calculate}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white"
                style={{ background: '#D8A31A' }}
              >
                {MODE_LABELS[calcMode].replace('Calcular', 'Calcular')}
              </button>
              <button onClick={handleReset} className="rounded-lg border border-line px-4 py-3 text-sm font-semibold text-muted transition-colors hover:border-line-2 hover:text-ink">
                Limpiar
              </button>
            </div>

            {/* Example chips */}
            <div className="mt-5 border-t border-line pt-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Ejemplos rápidos</p>
              <div className="flex flex-wrap gap-1.5">
                {calcMode === 'compute' && COMPUTE_EXAMPLES.map((ex) => (
                  <button
                    key={ex.display}
                    onClick={() => {
                      setArg(ex.arg); setBaseOpt(ex.baseOpt); setCustomBase(ex.customBase);
                      setErrMsg(null); setResult(null);
                    }}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal"
                  >
                    {ex.display}
                  </button>
                ))}
                {calcMode === 'evaluate' && EVAL_EXAMPLES.map((ex) => (
                  <button
                    key={ex.display}
                    onClick={() => { setEvalExpr(ex.expr); setErrMsg(null); setResult(null); }}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal"
                  >
                    {ex.display}
                  </button>
                ))}
                {calcMode === 'change' && CHANGE_EXAMPLES.map((ex) => (
                  <button
                    key={ex.display}
                    onClick={() => { setChangeArg(ex.arg); setChangeBase(ex.base); setErrMsg(null); setResult(null); }}
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
                  <span className="font-mono text-xl font-bold text-deep-teal">log</span>
                </div>
                <p className="text-sm font-semibold text-slate">Introduce un argumento y pulsa calcular</p>
                <p className="mt-1 text-xs text-muted">El resultado aparecerá aquí</p>
              </div>
            )}

            {result && (
              <div className="divide-y divide-line">

                {/* 1. Logaritmo calculado */}
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Logaritmo calculado</p>
                  <p className="font-mono text-sm text-slate">{result.expression}</p>
                </div>

                {/* 2. Resultado */}
                <div className="px-6 py-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">
                    {result.isExact ? 'Resultado' : 'Resultado decimal'}
                  </p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                    <p className="font-mono text-2xl font-bold text-deep-teal">{result.result}</p>
                  </div>
                </div>

                {/* 3. Comprobación */}
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Comprobación</p>
                  <p className="font-mono text-base font-semibold text-ink">{result.verification}</p>
                </div>

                {/* 4. Change of base steps (mode 3 only) */}
                {result.changeSteps && (
                  <div className="px-6 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Pasos</p>
                    <p className="font-mono text-sm text-slate">{result.changeSteps}</p>
                  </div>
                )}

                {/* 5. Rule + formula + detail */}
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Fórmula aplicada</p>
                  <p className="text-sm font-bold text-ink">{result.rule}</p>
                  <p className="mt-1.5 rounded-lg px-3 py-2 font-mono text-sm" style={{ background: '#EEF4F7', color: '#334e68' }}>
                    {result.formula}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate">{result.detail}</p>
                </div>

                {/* 6. Copy buttons */}
                <div className="flex flex-wrap gap-2 px-6 py-4">
                  <button
                    onClick={() => copyText(result.result, 'result')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal"
                    aria-label="Copiar resultado del logaritmo"
                  >
                    {copiedResult ? '✓ Resultado copiado' : 'Copiar resultado'}
                  </button>
                  <button
                    onClick={() => copyText(result.expression, 'expr')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal"
                    aria-label="Copiar expresión logarítmica"
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
