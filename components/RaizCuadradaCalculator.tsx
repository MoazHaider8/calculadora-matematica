'use client';

import { useState } from 'react';

type Mode = 'calcular' | 'simplificar' | 'decimal' | 'comprobar';

type CalcResult = {
  type: 'success' | 'error' | 'incorrect';
  preview: string;
  resultado: string;
  radical?: string;
  decimal?: string;
  comprobacion?: string;
  explicacion: string;
};

type ExampleConfig = {
  label: string;
  mode: Mode;
  num: string;
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

function simplifyRadical(n: number): { outside: number; inside: number } {
  if (!Number.isInteger(n) || n < 1) return { outside: 1, inside: n };
  const rad = Math.round(n);
  let outside = 1;
  let inside = rad;
  const limit = Math.floor(Math.sqrt(rad)) + 1;
  for (let k = 2; k <= limit; k++) {
    const k2 = k * k;
    while (inside % k2 === 0) {
      outside *= k;
      inside = inside / k2;
    }
  }
  return { outside, inside };
}

function radStr(outside: number, inside: number): string {
  if (inside === 1) return String(outside);
  if (outside === 1) return `√${inside}`;
  return `${outside}√${inside}`;
}

// ── computation ────────────────────────────────────────────────────────────────

function computeSqrt(numStr: string): CalcResult {
  const raw = numStr.trim().replace(/^√/, '').replace(/^sqrt\s*\(/i, '').replace(/\)\s*$/, '');
  if (!raw) return { type: 'error', preview: '√?', resultado: '', explicacion: 'Introduce un número para calcular la raíz cuadrada.' };

  const n = safeParseNum(raw);
  if (n === null) return { type: 'error', preview: '√?', resultado: '', explicacion: 'No se pudo interpretar el número. Usa un valor numérico válido.' };
  if (n < 0) return { type: 'error', preview: `√(${n})`, resultado: '', explicacion: 'No hay resultado real para la raíz cuadrada de un número negativo.' };

  const preview = `√${n}`;
  const r = Math.sqrt(n);
  if (!isFinite(r) || isNaN(r)) return { type: 'error', preview, resultado: '', explicacion: 'No se pudo calcular la raíz cuadrada de forma confiable.' };

  if (Number.isInteger(r)) {
    return {
      type: 'success',
      preview,
      resultado: String(Math.round(r)),
      comprobacion: `${Math.round(r)}² = ${n}`,
      explicacion: `La raíz cuadrada de ${n} es exacta porque ${n} es un cuadrado perfecto.`,
    };
  }

  const decStr = parseFloat(r.toFixed(10)).toString();
  const comprobacion = `${parseFloat(r.toFixed(6))}² ≈ ${n}`;

  if (Number.isInteger(n) && n > 0) {
    const { outside, inside } = simplifyRadical(Math.round(n));
    if (outside > 1) {
      const simplified = radStr(outside, inside);
      return {
        type: 'success',
        preview,
        resultado: simplified,
        radical: simplified,
        decimal: decStr,
        comprobacion,
        explicacion: `Se extrae el mayor cuadrado perfecto: ${n} = ${outside}² · ${inside}, por eso √${n} = ${simplified}.`,
      };
    }
  }

  return {
    type: 'success',
    preview,
    resultado: decStr,
    decimal: decStr,
    comprobacion,
    explicacion: `La raíz cuadrada de ${n} no es entera, por eso se muestra una aproximación decimal.`,
  };
}

function computeSimplify(numStr: string): CalcResult {
  const raw = numStr.trim().replace(/^√/, '').replace(/^sqrt\s*\(/i, '').replace(/\)\s*$/, '');
  if (!raw) return { type: 'error', preview: '√?', resultado: '', explicacion: 'Introduce un número para simplificar.' };

  const n = safeParseNum(raw);
  if (n === null || !isFinite(n)) return { type: 'error', preview: `√${raw}`, resultado: '', explicacion: 'No se pudo interpretar el número.' };
  if (n < 0) return { type: 'error', preview: `√(${n})`, resultado: '', explicacion: 'No hay resultado real para la raíz cuadrada de un número negativo.' };

  const preview = `√${n}`;
  const r = Math.sqrt(n);
  const decStr = parseFloat(r.toFixed(10)).toString();

  if (Number.isInteger(r)) {
    return { type: 'success', preview, resultado: String(Math.round(r)), comprobacion: `${Math.round(r)}² = ${n}`, explicacion: `${n} es un cuadrado perfecto. Su raíz cuadrada es ${Math.round(r)}, sin radical que simplificar.` };
  }

  if (!Number.isInteger(n)) {
    return { type: 'success', preview, resultado: preview, decimal: decStr, comprobacion: `${parseFloat(r.toFixed(6))}² ≈ ${n}`, explicacion: 'La simplificación funciona con números enteros positivos.' };
  }

  const { outside, inside } = simplifyRadical(Math.round(n));
  const comprobacion = `${parseFloat(r.toFixed(6))}² ≈ ${n}`;

  if (outside === 1) {
    return { type: 'success', preview, resultado: preview, decimal: decStr, comprobacion, explicacion: `${n} no tiene factores cuadrados perfectos. El radical no se puede simplificar más.` };
  }

  const simplified = radStr(outside, inside);
  return {
    type: 'success',
    preview,
    resultado: simplified,
    radical: simplified,
    decimal: decStr,
    comprobacion,
    explicacion: `Se extrae el mayor cuadrado perfecto: ${n} = ${outside}² · ${inside}, por eso √${n} = ${simplified}.`,
  };
}

function computeDecimal(numStr: string): CalcResult {
  const raw = numStr.trim().replace(/^√/, '');
  if (!raw) return { type: 'error', preview: '√?', resultado: '', explicacion: 'Introduce un número.' };

  const n = safeParseNum(raw);
  if (n === null) return { type: 'error', preview: '√?', resultado: '', explicacion: 'No se pudo interpretar el número. Usa un valor numérico válido.' };
  if (n < 0) return { type: 'error', preview: `√(${n})`, resultado: '', explicacion: 'No hay resultado real para la raíz cuadrada de un número negativo.' };

  const preview = `√${n}`;
  const r = Math.sqrt(n);
  const decStr = parseFloat(r.toFixed(10)).toString();
  const comprobacion = Number.isInteger(r)
    ? `${Math.round(r)}² = ${n}`
    : `${parseFloat(r.toFixed(6))}² ≈ ${n}`;
  const explicacion = Number.isInteger(r)
    ? `${n} es un cuadrado perfecto. La raíz cuadrada exacta es ${Math.round(r)}.`
    : `Resultado decimal de √${n} con diez cifras significativas.`;

  return { type: 'success', preview, resultado: decStr, decimal: decStr, comprobacion, explicacion };
}

function computeVerify(numStr: string, rootStr: string): CalcResult {
  if (!numStr.trim()) return { type: 'error', preview: '√?', resultado: '', explicacion: 'Introduce el número.' };
  if (!rootStr.trim()) return { type: 'error', preview: '√?', resultado: '', explicacion: 'Introduce la raíz propuesta para comprobar.' };

  const n = safeParseNum(numStr);
  const r = safeParseNum(rootStr);
  if (n === null) return { type: 'error', preview: '√?', resultado: '', explicacion: 'No se pudo interpretar el número. Usa un valor numérico válido.' };
  if (r === null) return { type: 'error', preview: `√${n}`, resultado: '', explicacion: 'No se pudo interpretar la raíz propuesta.' };

  const preview = `√${n}`;
  const square = r * r;
  const isCorrect = Math.abs(square - n) < 1e-9;

  return {
    type: isCorrect ? 'success' : 'incorrect',
    preview,
    resultado: isCorrect ? 'Correcto' : 'No coincide',
    comprobacion: `${r}² = ${parseFloat(square.toFixed(10))}`,
    explicacion: isCorrect
      ? `Correcto, porque ${r}² = ${n}.`
      : `No coincide. ${r}² = ${parseFloat(square.toFixed(10))}, no ${n}.`,
  };
}

// ── defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_RESULT: CalcResult = {
  type: 'success',
  preview: '√25',
  resultado: '5',
  comprobacion: '5² = 25',
  explicacion: 'La raíz cuadrada de 25 es exacta porque 25 es un cuadrado perfecto.',
};

const MODES: { id: Mode; label: string; btnLabel: string }[] = [
  { id: 'calcular',    label: 'Calcular √',   btnLabel: 'Calcular raíz cuadrada'    },
  { id: 'simplificar', label: 'Simplificar',  btnLabel: 'Simplificar raíz cuadrada' },
  { id: 'decimal',     label: 'Decimal',      btnLabel: 'Calcular decimal'           },
  { id: 'comprobar',   label: 'Comprobar',    btnLabel: 'Comprobar raíz'             },
];

const EXAMPLES: ExampleConfig[] = [
  { label: '√25',   mode: 'calcular',    num: '25'   },
  { label: '√72',   mode: 'calcular',    num: '72'   },
  { label: '√50',   mode: 'calcular',    num: '50'   },
  { label: '√2',    mode: 'decimal',     num: '2'    },
  { label: '√0.25', mode: 'calcular',    num: '0.25' },
  { label: '√144',  mode: 'calcular',    num: '144'  },
];

const inputCls = 'w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20';

// ── component ─────────────────────────────────────────────────────────────────

export function RaizCuadradaCalculator() {
  const [mode, setMode] = useState<Mode>('calcular');
  const [numInput, setNumInput] = useState('25');
  const [rootInput, setRootInput] = useState('7');
  const [verifyNum, setVerifyNum] = useState('49');
  const [result, setResult] = useState<CalcResult>(DEFAULT_RESULT);
  const [copied, setCopied] = useState(false);

  const livePreview = (() => {
    if (mode === 'comprobar') return `√${verifyNum || '?'}`;
    return `√${numInput || '?'}`;
  })();

  function handleCalculate() {
    if (mode === 'calcular') setResult(computeSqrt(numInput));
    else if (mode === 'simplificar') setResult(computeSimplify(numInput));
    else if (mode === 'decimal') setResult(computeDecimal(numInput));
    else setResult(computeVerify(verifyNum, rootInput));
  }

  function handleCopy() {
    if (result.resultado) {
      navigator.clipboard.writeText(result.resultado).catch(() => {});
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  function applyExample(ex: ExampleConfig) {
    setMode(ex.mode);
    setNumInput(ex.num);
    if (ex.mode === 'calcular') setResult(computeSqrt(ex.num));
    else if (ex.mode === 'simplificar') setResult(computeSimplify(ex.num));
    else setResult(computeDecimal(ex.num));
  }

  const activeMode = MODES.find((m) => m.id === mode)!;

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de raíz cuadrada
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Left: Input ── */}
          <div className="academic-card p-7">

            {/* Mode tabs */}
            <div className="mb-5 flex overflow-hidden rounded-lg border border-line" role="tablist" aria-label="Tipo de cálculo">
              {MODES.map((m) => (
                <button
                  key={m.id}
                  role="tab"
                  aria-selected={mode === m.id}
                  onClick={() => setMode(m.id)}
                  className={`flex-1 py-2 text-[10px] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal ${
                    mode === m.id ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* Inputs */}
            {(mode === 'calcular' || mode === 'simplificar' || mode === 'decimal') && (
              <div className="mb-4">
                <label htmlFor="raizc-num" className="mb-1.5 block text-sm font-semibold text-slate">
                  {mode === 'simplificar' ? 'Radical o número' : 'Número'}
                </label>
                <input
                  id="raizc-num"
                  type="text"
                  inputMode="decimal"
                  value={numInput}
                  onChange={(e) => setNumInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleCalculate(); }}
                  placeholder={mode === 'simplificar' ? '72' : mode === 'decimal' ? '2' : '25'}
                  className={inputCls}
                  autoComplete="off"
                />
                <p className="mt-1 text-xs text-muted">
                  {mode === 'simplificar'
                    ? 'Acepta: 72, √72, 50, 18. Para números enteros positivos.'
                    : 'Admite positivos, decimales y 0.'}
                </p>
              </div>
            )}

            {mode === 'comprobar' && (
              <div className="mb-4 space-y-4">
                <div>
                  <label htmlFor="raizc-verify-num" className="mb-1.5 block text-sm font-semibold text-slate">Número</label>
                  <input
                    id="raizc-verify-num"
                    type="text"
                    inputMode="decimal"
                    value={verifyNum}
                    onChange={(e) => setVerifyNum(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleCalculate(); }}
                    placeholder="49"
                    className={inputCls}
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="raizc-root" className="mb-1.5 block text-sm font-semibold text-slate">Raíz propuesta</label>
                  <input
                    id="raizc-root"
                    type="text"
                    inputMode="decimal"
                    value={rootInput}
                    onChange={(e) => setRootInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleCalculate(); }}
                    placeholder="7"
                    className={inputCls}
                    autoComplete="off"
                  />
                  <p className="mt-1 text-xs text-muted">Introduce el valor que propones como raíz cuadrada.</p>
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
                  setNumInput('25');
                  setRootInput('7');
                  setVerifyNum('49');
                  setResult(DEFAULT_RESULT);
                }}
                className="rounded-lg border border-line px-4 py-3 text-sm font-semibold text-muted transition-colors hover:border-line-2 hover:text-ink focus:outline-none"
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

          {/* ── Right: Result ── */}
          <div className="academic-card overflow-hidden" aria-live="polite" aria-label="Panel de resultado">

            <div className="border-b border-line px-7 py-4" style={{ background: '#F0FAF9' }}>
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado de la raíz cuadrada</p>
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
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">
                    {result.type === 'incorrect' ? 'Verificación' : 'Resultado'}
                  </p>
                  <div
                    className="rounded-xl px-5 py-4"
                    style={
                      result.type === 'incorrect'
                        ? { background: '#FFFBEB', border: '1px solid #FDE68A' }
                        : { background: '#F0FAF9', border: '1px solid #DDF3F0' }
                    }
                  >
                    <p
                      className="font-mono text-2xl font-bold"
                      style={{ color: result.type === 'incorrect' ? '#78350f' : '#0a3535' }}
                    >
                      {result.resultado}
                    </p>
                  </div>
                </div>

                {/* Radical simplificado */}
                {result.radical && (
                  <div className="px-7 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Radical simplificado</p>
                    <p className="mt-1 rounded-lg px-3 py-2 font-mono text-sm font-semibold text-deep-teal" style={{ background: '#EEF4F7' }}>
                      {result.radical}
                    </p>
                  </div>
                )}

                {/* Decimal */}
                {result.decimal && result.decimal !== result.resultado && (
                  <div className="px-7 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Resultado decimal</p>
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

                {/* Explanation */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Explicación</p>
                  <p className="text-xs leading-relaxed text-slate">{result.explicacion}</p>
                </div>

                {/* Copy */}
                <div className="flex flex-wrap gap-2 px-7 py-4">
                  <button
                    onClick={handleCopy}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
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
