'use client';

import { useState } from 'react';

type Mode = 'raiz' | 'enesima' | 'simplificar' | 'exponente';

type CalcResult = {
  type: 'success' | 'error';
  preview: string;
  resultado: string;
  decimal?: string;
  comprobacion?: string;
  explicacion: string;
  propiedad?: string;
};

type ExampleConfig = {
  label: string;
  mode: Mode;
  radicand?: string;
  index?: string;
  simplifyInput?: string;
  expExpr?: string;
  expIndex?: string;
};

// ── helpers ────────────────────────────────────────────────────────────────────

function safeParseNum(s: string): number | null {
  const t = s.trim().replace(/π/g, 'pi');
  if (!t) return null;
  if (t.toLowerCase() === 'pi') return Math.PI;
  if (t.toLowerCase() === 'e') return Math.E;
  const frac = t.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)$/);
  if (frac) {
    const d = parseFloat(frac[2]);
    if (d === 0) return null;
    return parseFloat(frac[1]) / d;
  }
  const n = parseFloat(t);
  return isNaN(n) ? null : n;
}

function safeParseIdx(s: string): number | null {
  const n = parseInt(s.trim(), 10);
  return isNaN(n) ? null : n;
}

function nearInt(n: number): boolean {
  return Math.abs(n - Math.round(n)) < 1e-9;
}

function fmt(n: number): string {
  if (nearInt(n)) return String(Math.round(n));
  return parseFloat(n.toFixed(10)).toString();
}

function radSym(idx: number): string {
  if (idx === 2) return '√';
  if (idx === 3) return '∛';
  return `${idx}√`;
}

// ── calculation ─────────────────────────────────────────────────────────────

function computeRoot(radStr: string, idxStr: string): CalcResult {
  if (!radStr.trim()) return { type: 'error', preview: '?', resultado: '', explicacion: 'Introduce el radicando.' };
  if (!idxStr.trim()) return { type: 'error', preview: '?', resultado: '', explicacion: 'Introduce el índice de la raíz.' };

  const rad = safeParseNum(radStr);
  const idx = safeParseIdx(idxStr);

  if (rad === null) return { type: 'error', preview: '?', resultado: '', explicacion: 'No se pudo interpretar el radicando. Usa números o expresiones válidas.' };
  if (idx === null) return { type: 'error', preview: '?', resultado: '', explicacion: 'El índice debe ser un número mayor que 1.' };
  if (idx === 0) return { type: 'error', preview: '?', resultado: '', explicacion: 'El índice de la raíz no puede ser 0.' };
  if (idx === 1) return { type: 'error', preview: `${radSym(1)}${rad}`, resultado: '', explicacion: 'Una raíz de índice 1 devuelve el mismo número. Usa un índice mayor que 1.' };
  if (idx < 0) return { type: 'error', preview: '?', resultado: '', explicacion: 'El índice debe ser un número mayor que 1.' };

  const sym = radSym(idx);
  const preview = rad < 0 ? `${sym}(${rad})` : `${sym}${rad}`;
  const isEven = idx % 2 === 0;
  const isNeg = rad < 0;

  if (isEven && isNeg) {
    return { type: 'error', preview, resultado: '', explicacion: 'No hay resultado real para una raíz de índice par con radicando negativo.' };
  }

  const result = isNeg ? -Math.pow(-rad, 1 / idx) : Math.pow(rad, 1 / idx);

  if (!isFinite(result) || isNaN(result)) {
    return { type: 'error', preview, resultado: '', explicacion: 'No se pudo calcular esta raíz de forma confiable. Prueba con un número o índice más simple.' };
  }

  const isExact = nearInt(result);
  const resultStr = fmt(result);
  const decimal = isExact ? undefined : parseFloat(result.toFixed(10)).toString();

  const verif = Math.pow(isNeg ? -result : result, idx);
  const comprobacion = isExact
    ? `${resultStr}^${idx} = ${Math.round(verif)}`
    : `${parseFloat(result.toFixed(6))}^${idx} ≈ ${rad}`;

  const indexName = idx === 3 ? 'cúbica' : idx === 4 ? 'cuarta' : `de índice ${idx}`;
  const explicacion = isExact
    ? `La raíz ${indexName} de ${rad < 0 ? `(${rad})` : rad} es ${resultStr} porque ${resultStr}^${idx} = ${rad < 0 ? `(${rad})` : rad}.${isNeg ? ' Las raíces de índice impar permiten resultado real negativo.' : ''}`
    : `La raíz ${indexName} de ${rad} no es exacta. La aproximación decimal es ${parseFloat(result.toFixed(10))}.`;

  return {
    type: 'success',
    preview,
    resultado: resultStr,
    decimal,
    comprobacion,
    explicacion,
    propiedad: `${idx}√a = a^(1/${idx})`,
  };
}

function computeSimplify(input: string): CalcResult {
  let idx = 2;
  let inner = input.trim();

  if (inner.startsWith('∛')) { idx = 3; inner = inner.slice(1).trim(); }
  else if (inner.startsWith('√')) { idx = 2; inner = inner.slice(1).trim(); }
  else if (/^sqrt\s*\(/i.test(inner)) { idx = 2; inner = inner.replace(/^sqrt\s*\(/i, '').replace(/\)\s*$/, '').trim(); }
  else if (/^cbrt\s*\(/i.test(inner)) { idx = 3; inner = inner.replace(/^cbrt\s*\(/i, '').replace(/\)\s*$/, '').trim(); }

  const sym = radSym(idx);
  if (!inner) return { type: 'error', preview: `${sym}?`, resultado: '', explicacion: 'Introduce un radical para simplificar.' };

  const n = safeParseNum(inner);
  if (n === null || !isFinite(n) || n <= 0) {
    return { type: 'error', preview: `${sym}${inner}`, resultado: '', explicacion: 'No se pudo simplificar este radical. Usa un número entero positivo bajo la raíz.' };
  }
  if (!Number.isInteger(n)) {
    return { type: 'error', preview: `${sym}${inner}`, resultado: '', explicacion: 'La simplificación funciona con números enteros positivos.' };
  }

  const rad = Math.round(n);
  const preview = `${sym}${rad}`;
  let outside = 1;
  let insideVal = rad;
  const limit = Math.floor(Math.pow(rad, 1 / idx)) + 1;

  for (let k = 2; k <= limit; k++) {
    const kPow = Math.round(Math.pow(k, idx));
    while (insideVal % kPow === 0) {
      outside *= k;
      insideVal = insideVal / kPow;
    }
  }

  if (insideVal === rad) {
    return { type: 'success', preview, resultado: preview, explicacion: `${rad} no tiene factores perfectos extraíbles con raíz de índice ${idx}. El radical ya está en su forma más simple.` };
  }
  if (insideVal === 1) {
    return { type: 'success', preview, resultado: String(outside), comprobacion: `${outside}^${idx} = ${rad}`, explicacion: `${rad} = ${outside}^${idx}, por eso ${preview} = ${outside}.` };
  }

  const resultado = outside === 1 ? preview : `${outside}${sym}${insideVal}`;
  return {
    type: 'success',
    preview,
    resultado,
    comprobacion: `(${outside})^${idx} · ${insideVal} = ${rad}`,
    explicacion: `Se extraen factores perfectos: ${rad} = ${outside}^${idx} · ${insideVal}, por eso ${preview} = ${resultado}.`,
    propiedad: `${idx}√(a·b) = ${idx}√a · ${idx}√b`,
  };
}

function computeToExponent(expr: string, idxStr: string): CalcResult {
  if (!expr.trim()) return { type: 'error', preview: '?', resultado: '', explicacion: 'Introduce una expresión o número.' };

  const idx = safeParseIdx(idxStr);
  if (idx === null) return { type: 'error', preview: '?', resultado: '', explicacion: 'Introduce el índice de la raíz.' };
  if (idx === 0) return { type: 'error', preview: '?', resultado: '', explicacion: 'El índice de la raíz no puede ser 0.' };
  if (idx <= 1) return { type: 'error', preview: '?', resultado: '', explicacion: 'El índice debe ser mayor que 1.' };

  const sym = radSym(idx);
  const e = expr.trim();

  const powMatch = e.match(/^([a-zA-Z])\^(\d+)$/);
  if (powMatch) {
    const base = powMatch[1];
    const m = parseInt(powMatch[2], 10);
    const preview = `${sym}(${base}^${m})`;
    const resultado = m === 1 ? `${base}^(1/${idx})` : `${base}^(${m}/${idx})`;
    return { type: 'success', preview, resultado, explicacion: `La raíz de índice ${idx} equivale al exponente 1/${idx}. Por eso ${sym}(${base}^${m}) = ${base}^(${m}/${idx}).`, propiedad: 'ⁿ√(aᵐ) = a^(m/n)' };
  }

  const varMatch = e.match(/^([a-zA-Z])$/);
  if (varMatch) {
    const base = varMatch[1];
    return { type: 'success', preview: `${sym}${base}`, resultado: `${base}^(1/${idx})`, explicacion: `La raíz de índice ${idx} de ${base} equivale a ${base}^(1/${idx}).`, propiedad: 'ⁿ√a = a^(1/n)' };
  }

  const num = safeParseNum(e);
  if (num !== null && isFinite(num) && num > 0) {
    const rootVal = Math.pow(num, 1 / idx);
    const isExact = nearInt(rootVal);
    const preview = `${sym}${num}`;
    const resultado = isExact ? `${num}^(1/${idx}) = ${Math.round(rootVal)}` : `${num}^(1/${idx}) ≈ ${parseFloat(rootVal.toFixed(6))}`;
    return { type: 'success', preview, resultado, explicacion: `Convertir ${preview} a exponente fraccionario: ${num}^(1/${idx}).`, propiedad: 'ⁿ√a = a^(1/n)' };
  }

  return { type: 'error', preview: `${sym}(${e})`, resultado: '', explicacion: 'No se pudo interpretar la expresión. Usa un número, una variable como x, o una expresión como x^2.' };
}

// ── defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_RESULT: CalcResult = {
  type: 'success',
  preview: '∛27',
  resultado: '3',
  comprobacion: '3^3 = 27',
  explicacion: 'La raíz cúbica de 27 es 3 porque 3³ = 27.',
  propiedad: '3√a = a^(1/3)',
};

const MODES: { id: Mode; label: string; btnLabel: string }[] = [
  { id: 'raiz',        label: 'Calcular raíz',     btnLabel: 'Calcular raíz'         },
  { id: 'enesima',     label: 'Raíz enésima',      btnLabel: 'Calcular raíz enésima' },
  { id: 'simplificar', label: 'Simplificar',        btnLabel: 'Simplificar radical'   },
  { id: 'exponente',   label: 'Como exponente',    btnLabel: 'Convertir raíz'        },
];

const EXAMPLES: ExampleConfig[] = [
  { label: '∛27',    mode: 'raiz',        radicand: '27',  index: '3' },
  { label: '⁴√625',  mode: 'raiz',        radicand: '625', index: '4' },
  { label: '⁵√32',   mode: 'raiz',        radicand: '32',  index: '5' },
  { label: '∛(-27)', mode: 'raiz',        radicand: '-27', index: '3' },
  { label: '√72',    mode: 'simplificar', simplifyInput: '√72' },
  { label: '∛x²',   mode: 'exponente',   expExpr: 'x^2',  expIndex: '3' },
];

const inputCls = 'w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20';

// ── component ─────────────────────────────────────────────────────────────────

export function RaizCalculator() {
  const [mode, setMode] = useState<Mode>('raiz');
  const [radicand, setRadicand] = useState('27');
  const [index, setIndex] = useState('3');
  const [simplifyInput, setSimplifyInput] = useState('√72');
  const [expExpr, setExpExpr] = useState('x^2');
  const [expIndex, setExpIndex] = useState('3');
  const [result, setResult] = useState<CalcResult>(DEFAULT_RESULT);
  const [copied, setCopied] = useState(false);

  const livePreview = (() => {
    if (mode === 'raiz' || mode === 'enesima') {
      const idx = safeParseIdx(index) ?? 2;
      const rad = safeParseNum(radicand);
      const sym = radSym(idx);
      if (rad === null) return `${sym}?`;
      return rad < 0 ? `${sym}(${rad})` : `${sym}${rad}`;
    }
    if (mode === 'simplificar') return simplifyInput || '√?';
    if (mode === 'exponente') {
      const idx = safeParseIdx(expIndex) ?? 3;
      return expExpr ? `${radSym(idx)}(${expExpr})` : `${radSym(idx)}?`;
    }
    return '';
  })();

  function handleCalculate() {
    if (mode === 'raiz' || mode === 'enesima') setResult(computeRoot(radicand, index));
    else if (mode === 'simplificar') setResult(computeSimplify(simplifyInput));
    else setResult(computeToExponent(expExpr, expIndex));
  }

  function handleCopy() {
    if (result.type === 'success' && result.resultado) {
      navigator.clipboard.writeText(result.resultado).catch(() => {});
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  function applyExample(ex: ExampleConfig) {
    setMode(ex.mode);
    if (ex.radicand !== undefined) setRadicand(ex.radicand);
    if (ex.index !== undefined) setIndex(ex.index);
    if (ex.simplifyInput !== undefined) setSimplifyInput(ex.simplifyInput);
    if (ex.expExpr !== undefined) setExpExpr(ex.expExpr);
    if (ex.expIndex !== undefined) setExpIndex(ex.expIndex);

    if (ex.mode === 'raiz' || ex.mode === 'enesima') setResult(computeRoot(ex.radicand ?? radicand, ex.index ?? index));
    else if (ex.mode === 'simplificar') setResult(computeSimplify(ex.simplifyInput ?? simplifyInput));
    else setResult(computeToExponent(ex.expExpr ?? expExpr, ex.expIndex ?? expIndex));
  }

  const activeMode = MODES.find((m) => m.id === mode)!;

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de raíces
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Left: Input panel ── */}
          <div className="academic-card p-7">

            {/* Mode tabs */}
            <div
              className="mb-5 flex overflow-hidden rounded-lg border border-line"
              role="tablist"
              aria-label="Tipo de cálculo"
            >
              {MODES.map((m) => (
                <button
                  key={m.id}
                  role="tab"
                  aria-selected={mode === m.id}
                  onClick={() => setMode(m.id)}
                  className={`flex-1 py-2 text-[10px] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal ${
                    mode === m.id
                      ? 'bg-deep-teal text-white'
                      : 'bg-panel text-muted hover:text-ink'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* Inputs */}
            {(mode === 'raiz' || mode === 'enesima') && (
              <div className="mb-4 space-y-4">
                <div>
                  <label htmlFor="raiz-radicando" className="mb-1.5 block text-sm font-semibold text-slate">
                    Radicando
                  </label>
                  <input
                    id="raiz-radicando"
                    type="text"
                    inputMode="decimal"
                    value={radicand}
                    onChange={(e) => setRadicand(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleCalculate(); }}
                    placeholder="27"
                    className={inputCls}
                    autoComplete="off"
                  />
                  <p className="mt-1 text-xs text-muted">Admite positivos, negativos y decimales.</p>
                </div>
                <div>
                  <label htmlFor="raiz-indice" className="mb-1.5 block text-sm font-semibold text-slate">
                    Índice
                  </label>
                  <input
                    id="raiz-indice"
                    type="text"
                    inputMode="numeric"
                    value={index}
                    onChange={(e) => setIndex(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleCalculate(); }}
                    placeholder={mode === 'enesima' ? '4' : '3'}
                    className={inputCls}
                    autoComplete="off"
                  />
                  <p className="mt-1 text-xs text-muted">
                    {mode === 'enesima' ? 'El índice n indica el tipo de raíz.' : '2 = cuadrada, 3 = cúbica, 4 = cuarta.'}
                  </p>
                </div>
              </div>
            )}

            {mode === 'simplificar' && (
              <div className="mb-4">
                <label htmlFor="raiz-simplify" className="mb-1.5 block text-sm font-semibold text-slate">
                  Radical
                </label>
                <input
                  id="raiz-simplify"
                  type="text"
                  value={simplifyInput}
                  onChange={(e) => setSimplifyInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleCalculate(); }}
                  placeholder="√72"
                  className={inputCls}
                  autoComplete="off"
                />
                <p className="mt-1 text-xs text-muted">Escribe √72, ∛54 o solo el número con el símbolo.</p>
              </div>
            )}

            {mode === 'exponente' && (
              <div className="mb-4 space-y-4">
                <div>
                  <label htmlFor="raiz-exp-expr" className="mb-1.5 block text-sm font-semibold text-slate">
                    Radicando o expresión
                  </label>
                  <input
                    id="raiz-exp-expr"
                    type="text"
                    value={expExpr}
                    onChange={(e) => setExpExpr(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleCalculate(); }}
                    placeholder="x^2"
                    className={inputCls}
                    autoComplete="off"
                  />
                  <p className="mt-1 text-xs text-muted">Acepta: números, variables (x), expresiones como x^2.</p>
                </div>
                <div>
                  <label htmlFor="raiz-exp-idx" className="mb-1.5 block text-sm font-semibold text-slate">
                    Índice
                  </label>
                  <input
                    id="raiz-exp-idx"
                    type="text"
                    inputMode="numeric"
                    value={expIndex}
                    onChange={(e) => setExpIndex(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleCalculate(); }}
                    placeholder="3"
                    className={inputCls}
                    autoComplete="off"
                  />
                </div>
              </div>
            )}

            {/* Preview strip */}
            <div
              className="mb-5 rounded-lg px-4 py-3"
              style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              aria-label={`Vista previa: ${livePreview}`}
            >
              <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-teal">Vista previa</p>
              <p className="font-mono text-base font-semibold text-deep-teal">{livePreview}</p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleCalculate}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2"
                style={{ background: '#D8A31A' }}
              >
                {activeMode.btnLabel}
              </button>
              <button
                onClick={() => {
                  setRadicand('27'); setIndex('3');
                  setSimplifyInput('√72');
                  setExpExpr('x^2'); setExpIndex('3');
                  setResult(DEFAULT_RESULT);
                }}
                className="rounded-lg border border-line px-4 py-3 text-sm font-semibold text-muted transition-colors hover:border-line-2 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
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
                    key={ex.label}
                    onClick={() => applyExample(ex)}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                    aria-label={`Ejemplo: ${ex.label}`}
                  >
                    {ex.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Result panel ── */}
          <div className="academic-card overflow-hidden" aria-live="polite" aria-label="Panel de resultado">

            <div className="border-b border-line px-7 py-4" style={{ background: '#F0FAF9' }}>
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado de la raíz</p>
            </div>

            {result.type === 'error' ? (
              <div className="mx-7 mt-5 flex gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3" role="alert">
                <span className="mt-0.5 shrink-0 text-red-400" aria-hidden="true">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5zm0 6.5a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z" />
                  </svg>
                </span>
                <p className="text-sm text-red-700">{result.explicacion}</p>
              </div>
            ) : (
              <div className="divide-y divide-line">

                {/* Input */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Raíz ingresada</p>
                  <p className="font-mono text-sm text-slate">{result.preview}</p>
                </div>

                {/* Main result */}
                <div className="px-7 py-6">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                    <p className="font-mono text-2xl font-bold text-deep-teal">{result.resultado}</p>
                  </div>
                </div>

                {/* Decimal */}
                {result.decimal && (
                  <div className="px-7 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Forma decimal</p>
                    <p className="mt-1 rounded-lg px-3 py-2 font-mono text-sm" style={{ background: '#EEF4F7', color: '#334e68' }}>
                      ≈ {result.decimal}
                    </p>
                  </div>
                )}

                {/* Comprobación */}
                {result.comprobacion && (
                  <div className="px-7 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Comprobación</p>
                    <p className="mt-1 rounded-lg px-3 py-2 font-mono text-sm" style={{ background: '#EEF4F7', color: '#334e68' }}>
                      {result.comprobacion}
                    </p>
                  </div>
                )}

                {/* Property */}
                {result.propiedad && (
                  <div className="px-7 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Propiedad aplicada</p>
                    <div className="mt-1 rounded-lg px-3 py-2" style={{ background: '#FFFBEB', border: '1px solid #FDE68A' }}>
                      <p className="font-mono text-sm font-bold" style={{ color: '#78350f' }}>{result.propiedad}</p>
                    </div>
                  </div>
                )}

                {/* Explanation */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Explicación</p>
                  <p className="text-xs leading-relaxed text-slate">{result.explicacion}</p>
                </div>

                {/* Copy */}
                <div className="flex flex-wrap gap-2 px-7 py-4">
                  <button
                    onClick={handleCopy}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                    aria-live="polite"
                  >
                    {copied ? '✓ Resultado copiado' : 'Copiar resultado'}
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
