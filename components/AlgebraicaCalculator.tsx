'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, useRef, useCallback } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type CalcMode = 'simplificar' | 'expandir' | 'factorizar' | 'evaluar';

interface AlgResult {
  mode: CalcMode;
  input: string;
  result: string;
  operation: string;
  explanation: string;
  isUnchanged?: boolean;
  evalVariable?: string;
  evalValue?: string;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const MODE_LABELS: Record<CalcMode, string> = {
  simplificar: 'Simplificar',
  expandir:    'Expandir',
  factorizar:  'Factorizar',
  evaluar:     'Evaluar',
};

const MODE_BUTTON_LABELS: Record<CalcMode, string> = {
  simplificar: 'Simplificar expresión',
  expandir:    'Expandir expresión',
  factorizar:  'Factorizar expresión',
  evaluar:     'Evaluar expresión',
};

const VARIABLES = ['x', 'y', 'a', 'b', 't'];

const SIMP_EXAMPLES = [
  { display: '2x + 3x - x',    expr: '2x + 3x - x'    },
  { display: 'x² + 2x²',        expr: 'x^2 + 2*x^2'    },
  { display: '3a + 2a - a',     expr: '3a + 2a - a'     },
  { display: 'x + x + 5',      expr: 'x + x + 5'       },
];

const EXP_EXAMPLES = [
  { display: '(x + 2)(x + 3)', expr: '(x + 2)*(x + 3)' },
  { display: '2(x + 4)',        expr: '2*(x + 4)'        },
  { display: 'x(x + 5)',       expr: 'x*(x + 5)'        },
  { display: '(x - 1)(x + 1)', expr: '(x - 1)*(x + 1)' },
];

const FAC_EXAMPLES = [
  { display: 'x² + 5x + 6', expr: 'x^2 + 5*x + 6' },
  { display: 'x² - 1',       expr: 'x^2 - 1'        },
  { display: 'x² + 2x + 1', expr: 'x^2 + 2*x + 1'  },
  { display: '2x + 4',       expr: '2*x + 4'         },
];

const EVAL_EXAMPLES = [
  { display: 'x² + 3x, x = 2', expr: 'x^2 + 3*x', variable: 'x', value: '2' },
  { display: '2a + 5, a = 3',  expr: '2*a + 5',    variable: 'a', value: '3' },
  { display: 'y² - 1, y = 4',  expr: 'y^2 - 1',    variable: 'y', value: '4' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const SUPERSCRIPTS: Record<string, string> = {
  '2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹',
};

function displayify(raw: string): string {
  return raw
    .replace(/\^([0-9])/g, (_, n) => SUPERSCRIPTS[n] ?? `^${n}`)
    .replace(/([0-9])\*([a-zA-Z])/g, '$1$2')   // 4*x → 4x
    .replace(/\)\*\(/g, ')(')                    // )*( → )(
    .replace(/\)\*([a-zA-Z])/g, ')$1')           // )*x → )x
    .replace(/([a-zA-Z])\*\(/g, '$1(')           // x*( → x(
    // Reorder (const+var) in factors: (2+x) → (x+2), (-1+x) → (x-1)
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
  const norm = (s: string) =>
    s.replace(/\s/g, '').replace(/\*/g, '').toLowerCase();
  return norm(input) === norm(result);
}

function buildExplanation(mode: CalcMode, input: string, result: string, isUnchanged: boolean): string {
  if (mode === 'simplificar') {
    return isUnchanged
      ? 'La expresión ya está en su forma más simple.'
      : 'Se combinaron los términos semejantes porque contienen la misma parte variable.';
  }
  if (mode === 'expandir') {
    return 'Se aplicó la propiedad distributiva para eliminar los paréntesis y obtener la forma expandida.';
  }
  if (mode === 'factorizar') {
    if (isUnchanged) return 'No se encontró una factorización simple para esta expresión.';
    return 'Se escribió la expresión como producto de factores usando factorización básica.';
  }
  return 'Se sustituyó el valor de la variable en la expresión y se calculó el resultado.';
}

// ─── Component ────────────────────────────────────────────────────────────────

export function AlgebraicaCalculator() {
  const nerdRef = useRef<any>(null);
  const autoRan = useRef(false);

  const [calcMode, setCalcMode] = useState<CalcMode>('simplificar');
  const [simpExpr, setSimpExpr] = useState('2x + 3x - x');
  const [expExpr,  setExpExpr]  = useState('(x + 2)*(x + 3)');
  const [facExpr,  setFacExpr]  = useState('x^2 + 5x + 6');
  const [evalExpr, setEvalExpr] = useState('x^2 + 3x');
  const [evalVar,  setEvalVar]  = useState('x');
  const [evalVal,  setEvalVal]  = useState('2');

  const [result, setResult] = useState<AlgResult | null>(null);
  const [errMsg,  setErrMsg]  = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copiedResult, setCopiedResult] = useState(false);
  const [copiedExpr,   setCopiedExpr]   = useState(false);

  const loadNerdamer = useCallback(async () => {
    if (nerdRef.current) return nerdRef.current;
    const nerd = (await import('nerdamer')).default;
    await import('nerdamer/Algebra' as any);
    nerdRef.current = nerd;
    return nerd;
  }, []);

  const runCalculate = useCallback(async (
    mode: CalcMode,
    sExpr: string, eExpr: string, fExpr: string,
    evExpr: string, evVar: string, evVal: string,
  ) => {
    setErrMsg(null);
    setLoading(true);
    try {
      const nerd = await loadNerdamer();
      let res: AlgResult;

      if (mode === 'simplificar') {
        if (!sExpr.trim()) { setErrMsg('Escribe una expresión algebraica.'); setLoading(false); return; }
        const norm = normalizeExpr(sExpr);
        let raw: string;
        try { raw = nerd(norm).toString(); }
        catch { setErrMsg('No se pudo interpretar la expresión. Revisa paréntesis, operadores y variables.'); setLoading(false); return; }
        const display = displayify(raw);
        const unchanged = isEffectivelyUnchanged(norm, raw);
        res = {
          mode, input: sExpr, result: display,
          operation: 'Reducción de términos semejantes',
          explanation: buildExplanation(mode, sExpr, raw, unchanged),
          isUnchanged: unchanged,
        };

      } else if (mode === 'expandir') {
        if (!eExpr.trim()) { setErrMsg('Escribe una expresión algebraica.'); setLoading(false); return; }
        const norm = normalizeExpr(eExpr);
        let raw: string;
        try { raw = nerd.expand(norm).toString(); }
        catch { setErrMsg('No se pudo expandir esta expresión de forma confiable. Prueba una expresión más simple.'); setLoading(false); return; }
        res = {
          mode, input: eExpr, result: displayify(raw),
          operation: 'Expansión de expresión algebraica',
          explanation: buildExplanation(mode, eExpr, raw, false),
        };

      } else if (mode === 'factorizar') {
        if (!fExpr.trim()) { setErrMsg('Escribe una expresión algebraica.'); setLoading(false); return; }
        const norm = normalizeExpr(fExpr);
        let raw: string;
        try { raw = nerd.factor(norm).toString(); }
        catch { setErrMsg('No se pudo factorizar esta expresión de forma confiable. Prueba una expresión más simple.'); setLoading(false); return; }
        const unchanged = isEffectivelyUnchanged(norm, raw);
        if (unchanged) {
          res = {
            mode, input: fExpr, result: displayify(raw),
            operation: 'Factorización',
            explanation: 'No se encontró una factorización simple para esta expresión. Es posible que sea irreducible.',
            isUnchanged: true,
          };
        } else {
          res = {
            mode, input: fExpr, result: displayify(raw),
            operation: 'Factorización básica',
            explanation: buildExplanation(mode, fExpr, raw, false),
          };
        }

      } else {
        if (!evExpr.trim()) { setErrMsg('Escribe una expresión algebraica.'); setLoading(false); return; }
        if (!evVal.trim())  { setErrMsg('Introduce el valor de la variable para evaluar la expresión.'); setLoading(false); return; }
        const valNum = parseFloat(evVal);
        if (isNaN(valNum)) { setErrMsg('El valor de la variable no es válido. Usa un número.'); setLoading(false); return; }
        const norm = normalizeExpr(evExpr);
        let raw: string;
        try { raw = nerd(norm, { [evVar]: evVal }).evaluate().toString(); }
        catch { setErrMsg('No se pudo evaluar esta expresión. Revisa la expresión y el valor de la variable.'); setLoading(false); return; }
        const numVal = parseFloat(raw);
        const display = isNaN(numVal) ? raw : (Math.abs(numVal - Math.round(numVal)) < 1e-9 ? String(Math.round(numVal)) : parseFloat(numVal.toFixed(8)).toString());
        res = {
          mode, input: evExpr, result: display,
          operation: `Evaluación con ${evVar} = ${evVal}`,
          explanation: `Se sustituyó ${evVar} = ${evVal} en la expresión y se calculó el resultado numérico.`,
          evalVariable: evVar,
          evalValue: evVal,
        };
      }

      setResult(res);
    } catch {
      setErrMsg('No se pudo procesar esta expresión de forma confiable. Prueba con una expresión más simple.');
    } finally {
      setLoading(false);
    }
  }, [loadNerdamer]);

  const calculate = useCallback(() => {
    runCalculate(calcMode, simpExpr, expExpr, facExpr, evalExpr, evalVar, evalVal);
  }, [calcMode, simpExpr, expExpr, facExpr, evalExpr, evalVar, evalVal, runCalculate]);

  useEffect(() => {
    if (autoRan.current) return;
    autoRan.current = true;
    runCalculate('simplificar', '2x + 3x - x', '(x + 2)*(x + 3)', 'x^2 + 5x + 6', 'x^2 + 3x', 'x', '2');
  }, [runCalculate]);

  const handleReset = () => {
    setSimpExpr('2x + 3x - x');
    setExpExpr('(x + 2)*(x + 3)');
    setFacExpr('x^2 + 5x + 6');
    setEvalExpr('x^2 + 3x'); setEvalVar('x'); setEvalVal('2');
    setErrMsg(null);
    runCalculate('simplificar', '2x + 3x - x', '(x + 2)*(x + 3)', 'x^2 + 5x + 6', 'x^2 + 3x', 'x', '2');
  };

  const copyText = (text: string, which: 'result' | 'expr') => {
    navigator.clipboard.writeText(text).catch(() => {});
    if (which === 'result') { setCopiedResult(true); setTimeout(() => setCopiedResult(false), 2000); }
    else { setCopiedExpr(true); setTimeout(() => setCopiedExpr(false), 2000); }
  };

  const previewText = (() => {
    if (calcMode === 'simplificar') return simpExpr || 'ax + bx';
    if (calcMode === 'expandir')    return expExpr  || '(a + b)(c + d)';
    if (calcMode === 'factorizar')  return facExpr  || 'x² + bx + c';
    return evalVal ? `${evalExpr || 'f(x)'}, ${evalVar} = ${evalVal}` : (evalExpr || 'f(x)');
  })();

  const inputClass = "w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20";

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de expresiones algebraicas
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Left: Input panel ── */}
          <div className="academic-card p-7">

            {/* Mode tabs */}
            <div className="mb-5 flex overflow-hidden rounded-lg border border-line" role="tablist" aria-label="Operación algebraica">
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

            {/* ── MODE 1: Simplificar ── */}
            {calcMode === 'simplificar' && (
              <div className="mb-4">
                <label htmlFor="simp-expr" className="mb-1.5 block text-sm font-semibold text-slate">Expresión algebraica</label>
                <input
                  id="simp-expr"
                  type="text"
                  value={simpExpr}
                  onChange={(e) => { setSimpExpr(e.target.value); setErrMsg(null); }}
                  onKeyDown={(e) => e.key === 'Enter' && calculate()}
                  placeholder="2x + 3x - x"
                  className={inputClass}
                  autoComplete="off"
                  spellCheck={false}
                />
                <p className="mt-1 text-xs text-muted">Acepta: 2x + 3x - x · x² + 2x² · 3a + 2a - a</p>
              </div>
            )}

            {/* ── MODE 2: Expandir ── */}
            {calcMode === 'expandir' && (
              <div className="mb-4">
                <label htmlFor="exp-expr" className="mb-1.5 block text-sm font-semibold text-slate">Expresión algebraica</label>
                <input
                  id="exp-expr"
                  type="text"
                  value={expExpr}
                  onChange={(e) => { setExpExpr(e.target.value); setErrMsg(null); }}
                  onKeyDown={(e) => e.key === 'Enter' && calculate()}
                  placeholder="(x + 2)*(x + 3)"
                  className={inputClass}
                  autoComplete="off"
                  spellCheck={false}
                />
                <div className="mt-2 rounded-lg px-3 py-2 text-xs text-slate" style={{ background: '#F0FAF9' }}>
                  <p className="font-semibold text-teal mb-1">Formatos admitidos</p>
                  <p>(x+2)*(x+3) · 2*(x+4) · x*(x+5) · (x-1)*(x+1)</p>
                </div>
              </div>
            )}

            {/* ── MODE 3: Factorizar ── */}
            {calcMode === 'factorizar' && (
              <div className="mb-4">
                <label htmlFor="fac-expr" className="mb-1.5 block text-sm font-semibold text-slate">Expresión algebraica</label>
                <input
                  id="fac-expr"
                  type="text"
                  value={facExpr}
                  onChange={(e) => { setFacExpr(e.target.value); setErrMsg(null); }}
                  onKeyDown={(e) => e.key === 'Enter' && calculate()}
                  placeholder="x^2 + 5x + 6"
                  className={inputClass}
                  autoComplete="off"
                  spellCheck={false}
                />
                <p className="mt-1 text-xs text-muted">Acepta: x^2 + 5x + 6 · x^2 - 1 · x^2 + 2x + 1 · 2x + 4</p>
              </div>
            )}

            {/* ── MODE 4: Evaluar ── */}
            {calcMode === 'evaluar' && (
              <>
                <div className="mb-4">
                  <label htmlFor="eval-expr" className="mb-1.5 block text-sm font-semibold text-slate">Expresión algebraica</label>
                  <input
                    id="eval-expr"
                    type="text"
                    value={evalExpr}
                    onChange={(e) => { setEvalExpr(e.target.value); setErrMsg(null); }}
                    onKeyDown={(e) => e.key === 'Enter' && calculate()}
                    placeholder="x^2 + 3x"
                    className={inputClass}
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="eval-var" className="mb-1.5 block text-sm font-semibold text-slate">Variable</label>
                    <select
                      id="eval-var"
                      value={evalVar}
                      onChange={(e) => { setEvalVar(e.target.value); setResult(null); setErrMsg(null); }}
                      className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    >
                      {VARIABLES.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eval-val" className="mb-1.5 block text-sm font-semibold text-slate">Valor</label>
                    <input
                      id="eval-val"
                      type="text"
                      value={evalVal}
                      onChange={(e) => { setEvalVal(e.target.value); setErrMsg(null); }}
                      onKeyDown={(e) => e.key === 'Enter' && calculate()}
                      placeholder="2"
                      className={inputClass}
                      autoComplete="off"
                    />
                  </div>
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
                disabled={loading}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white disabled:opacity-60"
                style={{ background: '#D8A31A' }}
              >
                {loading ? 'Calculando...' : MODE_BUTTON_LABELS[calcMode]}
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
                  <button key={ex.display} onClick={() => { setSimpExpr(ex.expr); setErrMsg(null); setResult(null); }}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal">
                    {ex.display}
                  </button>
                ))}
                {calcMode === 'expandir' && EXP_EXAMPLES.map((ex) => (
                  <button key={ex.display} onClick={() => { setExpExpr(ex.expr); setErrMsg(null); setResult(null); }}
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
              </div>
            </div>
          </div>

          {/* ── Right: Result panel ── */}
          <div className="academic-card overflow-hidden" aria-live="polite" aria-label="Panel de resultado">
            <div className="border-b border-line px-7 py-4">
              <p className="text-sm font-bold text-ink">Resultado</p>
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
                  <span className="font-mono text-lg font-bold text-deep-teal">x²</span>
                </div>
                <p className="text-sm font-semibold text-slate">Introduce una expresión y pulsa calcular</p>
                <p className="mt-1 text-xs text-muted">El resultado aparecerá aquí</p>
              </div>
            )}

            {loading && !result && (
              <div className="flex items-center justify-center px-6 py-14">
                <p className="text-sm text-muted">Calculando...</p>
              </div>
            )}

            {result && (
              <div className="divide-y divide-line">

                {/* Expresión ingresada */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Expresión ingresada</p>
                  <p className="font-mono text-sm text-slate">{result.input}</p>
                  {result.evalVariable && (
                    <p className="mt-0.5 font-mono text-sm text-slate">{result.evalVariable} = {result.evalValue}</p>
                  )}
                </div>

                {/* Resultado */}
                <div className="px-7 py-6">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">
                    {result.mode === 'evaluar' ? 'Resultado' : result.isUnchanged ? 'Expresión resultante' : 'Resultado'}
                  </p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                    <p className="font-mono text-2xl font-bold text-deep-teal">{result.result}</p>
                  </div>
                </div>

                {/* Operación aplicada */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Operación aplicada</p>
                  <p className="mt-1 rounded-lg px-3 py-2 font-mono text-sm" style={{ background: '#EEF4F7', color: '#334e68' }}>
                    {result.operation}
                  </p>
                </div>

                {/* Explicación */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Explicación</p>
                  <p className="text-xs leading-relaxed text-slate">{result.explanation}</p>
                </div>

                {/* Copy buttons */}
                <div className="flex flex-wrap gap-2 px-7 py-4">
                  <button
                    onClick={() => copyText(result.result, 'result')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal"
                    aria-label="Copiar resultado"
                  >
                    {copiedResult ? '✓ Resultado copiado' : 'Copiar resultado'}
                  </button>
                  <button
                    onClick={() => copyText(result.input, 'expr')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal"
                    aria-label="Copiar expresión"
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
