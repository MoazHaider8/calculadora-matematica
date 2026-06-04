'use client';

import { useState } from 'react';

type Mode = 'add' | 'subtract' | 'multiply' | 'divide' | 'simplify' | 'convert';

type CalcResult =
  | {
      type: 'success';
      opLabel: string;
      simplified: string;
      mixed: string | null;
      decimal: string;
      percent?: string;
      steps: string[];
    }
  | { type: 'error'; message: string };

type ExampleConfig = {
  label: string;
  mode: Mode;
  nA: string; dA: string;
  nB: string; dB: string;
};

// ── exact integer math ────────────────────────────────────────────────────────

function gcd(a: number, b: number): number {
  a = Math.abs(a); b = Math.abs(b);
  while (b !== 0) { [a, b] = [b, a % b]; }
  return a === 0 ? 1 : a;
}

function lcmOf(a: number, b: number): number {
  return Math.abs(a * b) / gcd(Math.abs(a), Math.abs(b));
}

function simplifyFrac(num: number, den: number): [number, number] {
  if (den < 0) { num = -num; den = -den; }
  if (num === 0) return [0, 1];
  const g = gcd(Math.abs(num), den);
  return [num / g, den / g];
}

function fmtFrac(num: number, den: number): string {
  if (den === 1) return String(num);
  return `${num}/${den}`;
}

function fmtDecimal(num: number, den: number): string {
  const d = num / den;
  if (Number.isInteger(d)) return String(d);
  return parseFloat(d.toFixed(8)).toString();
}

function fmtMixed(num: number, den: number): string | null {
  if (den === 1) return null;
  const absNum = Math.abs(num);
  if (absNum < den) return null;
  const whole = Math.trunc(num / den);
  const rem = absNum % den;
  if (rem === 0) return null;
  return `${whole} ${rem}/${den}`;
}

// ── compute ───────────────────────────────────────────────────────────────────

function computeResult(mode: Mode, nA: number, dA: number, nB: number, dB: number): CalcResult {
  switch (mode) {
    case 'add':
    case 'subtract': {
      const lcd = lcmOf(dA, dB);
      const mA = lcd / dA;
      const mB = lcd / dB;
      const newNA = nA * mA;
      const newNB = nB * mB;
      const rawNum = mode === 'add' ? newNA + newNB : newNA - newNB;
      const [sn, sd] = simplifyFrac(rawNum, lcd);
      const op = mode === 'add' ? '+' : '−';
      const steps: string[] = [];
      if (dA !== dB) {
        steps.push(`LCD(${dA}, ${dB}) = ${lcd}`);
        if (mA !== 1) steps.push(`${nA}/${dA} = ${newNA}/${lcd}`);
        if (mB !== 1) steps.push(`${nB}/${dB} = ${newNB}/${lcd}`);
        steps.push(`${newNA}/${lcd} ${op} ${newNB}/${lcd} = ${rawNum}/${lcd}`);
      } else {
        steps.push(`Mismo denominador ${dA}. ${nA} ${op} ${nB} = ${rawNum}`);
      }
      if (Math.abs(rawNum) !== Math.abs(sn) || lcd !== sd) {
        steps.push(`MCD(${Math.abs(rawNum)}, ${lcd}) = ${gcd(Math.abs(rawNum), lcd)} → ${fmtFrac(sn, sd)}`);
      }
      return {
        type: 'success',
        opLabel: `${fmtFrac(nA, dA)} ${op} ${fmtFrac(nB, dB)}`,
        simplified: fmtFrac(sn, sd),
        mixed: fmtMixed(sn, sd),
        decimal: fmtDecimal(sn, sd),
        steps,
      };
    }
    case 'multiply': {
      const rawNum = nA * nB;
      const rawDen = dA * dB;
      const [sn, sd] = simplifyFrac(rawNum, rawDen);
      const steps = [
        `${nA} × ${nB} = ${rawNum} (numeradores)`,
        `${dA} × ${dB} = ${rawDen} (denominadores)`,
      ];
      if (rawNum !== sn || rawDen !== sd) {
        steps.push(`MCD(${Math.abs(rawNum)}, ${rawDen}) = ${gcd(Math.abs(rawNum), rawDen)} → ${fmtFrac(sn, sd)}`);
      }
      return {
        type: 'success',
        opLabel: `${fmtFrac(nA, dA)} × ${fmtFrac(nB, dB)}`,
        simplified: fmtFrac(sn, sd),
        mixed: fmtMixed(sn, sd),
        decimal: fmtDecimal(sn, sd),
        steps,
      };
    }
    case 'divide': {
      if (nB === 0) {
        return { type: 'error', message: 'No se puede dividir entre una fracción igual a 0.' };
      }
      const rawNum = nA * dB;
      const rawDen = dA * nB;
      if (rawDen === 0) return { type: 'error', message: 'No se puede dividir entre una fracción igual a 0.' };
      const [sn, sd] = simplifyFrac(rawNum, rawDen);
      const steps = [
        `Recíproco de ${fmtFrac(nB, dB)} = ${fmtFrac(dB, nB)}`,
        `${fmtFrac(nA, dA)} × ${fmtFrac(dB, nB)} = ${rawNum}/${rawDen}`,
      ];
      if (rawNum !== sn || Math.abs(rawDen) !== sd) {
        steps.push(`Simplificado: ${fmtFrac(sn, sd)}`);
      }
      return {
        type: 'success',
        opLabel: `${fmtFrac(nA, dA)} ÷ ${fmtFrac(nB, dB)}`,
        simplified: fmtFrac(sn, sd),
        mixed: fmtMixed(sn, sd),
        decimal: fmtDecimal(sn, sd),
        steps,
      };
    }
    case 'simplify': {
      const [sn, sd] = simplifyFrac(nA, dA);
      const g = gcd(Math.abs(nA), dA);
      const steps = [
        `MCD(${Math.abs(nA)}, ${dA}) = ${g}`,
        `${nA} ÷ ${g} = ${sn}`,
        `${dA} ÷ ${g} = ${sd}`,
      ];
      return {
        type: 'success',
        opLabel: `Simplificar ${fmtFrac(nA, dA)}`,
        simplified: fmtFrac(sn, sd),
        mixed: fmtMixed(sn, sd),
        decimal: fmtDecimal(sn, sd),
        steps,
      };
    }
    case 'convert': {
      const [sn, sd] = simplifyFrac(nA, dA);
      const dec = sn / sd;
      const pct = parseFloat((dec * 100).toFixed(6));
      const steps = [
        `Fracción simplificada: ${fmtFrac(sn, sd)}`,
        `Decimal: ${fmtDecimal(sn, sd)}`,
        `Porcentaje: ${Number.isInteger(pct) ? pct : parseFloat(pct.toFixed(4))}%`,
      ];
      const mx = fmtMixed(sn, sd);
      if (mx) steps.splice(1, 0, `Fracción mixta: ${mx}`);
      return {
        type: 'success',
        opLabel: `Convertir ${fmtFrac(nA, dA)}`,
        simplified: fmtFrac(sn, sd),
        mixed: mx,
        decimal: fmtDecimal(sn, sd),
        percent: `${Number.isInteger(pct) ? pct : parseFloat(pct.toFixed(4))}%`,
        steps,
      };
    }
  }
}

function compute(mode: Mode, nA: string, dA: string, nB: string, dB: string): CalcResult {
  const needsB = mode !== 'simplify' && mode !== 'convert';

  // Validate A
  if (!nA.trim()) return { type: 'error', message: 'Introduce el numerador.' };
  if (!dA.trim()) return { type: 'error', message: 'Introduce el denominador.' };
  if (!/^-?\d+$/.test(nA.trim())) return { type: 'error', message: 'El numerador debe ser un número entero válido.' };
  if (!/^-?\d+$/.test(dA.trim())) return { type: 'error', message: 'El denominador debe ser un número entero válido.' };
  if (parseInt(dA) === 0) return { type: 'error', message: 'El denominador no puede ser 0.' };

  // Validate B if needed
  if (needsB) {
    if (!nB.trim()) return { type: 'error', message: 'Introduce el numerador de la segunda fracción.' };
    if (!dB.trim()) return { type: 'error', message: 'Introduce el denominador de la segunda fracción.' };
    if (!/^-?\d+$/.test(nB.trim())) return { type: 'error', message: 'El numerador de la segunda fracción debe ser un número entero válido.' };
    if (!/^-?\d+$/.test(dB.trim())) return { type: 'error', message: 'El denominador de la segunda fracción debe ser un número entero válido.' };
    if (parseInt(dB) === 0) return { type: 'error', message: 'El denominador de la segunda fracción no puede ser 0.' };
  }

  return computeResult(mode, parseInt(nA), parseInt(dA), parseInt(nB), parseInt(dB));
}

// ── constants ─────────────────────────────────────────────────────────────────

const MODES: { id: Mode; label: string }[] = [
  { id: 'add',      label: 'Sumar'        },
  { id: 'subtract', label: 'Restar'       },
  { id: 'multiply', label: 'Multiplicar'  },
  { id: 'divide',   label: 'Dividir'      },
  { id: 'simplify', label: 'Simplificar'  },
  { id: 'convert',  label: 'Convertir'    },
];

const OP_LABELS: Record<Mode, string> = {
  add: '+', subtract: '−', multiply: '×', divide: '÷',
  simplify: '', convert: '',
};

const BTN_LABELS: Record<Mode, string> = {
  add:      'Sumar fracciones',
  subtract: 'Restar fracciones',
  multiply: 'Multiplicar fracciones',
  divide:   'Dividir fracciones',
  simplify: 'Simplificar fracción',
  convert:  'Convertir fracción',
};

const NEEDS_B: Mode[] = ['add', 'subtract', 'multiply', 'divide'];

const EXAMPLES: ExampleConfig[] = [
  { label: '1/2 + 3/4',  mode: 'add',      nA: '1', dA: '2', nB: '3', dB: '4' },
  { label: '3/4 − 1/2',  mode: 'subtract', nA: '3', dA: '4', nB: '1', dB: '2' },
  { label: '2/3 × 3/5',  mode: 'multiply', nA: '2', dA: '3', nB: '3', dB: '5' },
  { label: '3/4 ÷ 2/5',  mode: 'divide',   nA: '3', dA: '4', nB: '2', dB: '5' },
  { label: '12/18',       mode: 'simplify', nA: '12', dA: '18', nB: '1', dB: '1' },
  { label: '7/4',         mode: 'convert',  nA: '7', dA: '4', nB: '1', dB: '1' },
];

const DEF: ExampleConfig = EXAMPLES[0];
const DEF_RESULT = compute(DEF.mode, DEF.nA, DEF.dA, DEF.nB, DEF.dB);

// ── FractionInput ─────────────────────────────────────────────────────────────

function FractionInput({
  label, num, den, onNum, onDen,
}: {
  label: string;
  num: string;
  den: string;
  onNum: (v: string) => void;
  onDen: (v: string) => void;
}) {
  const baseId = label.replace(/\s/g, '-').toLowerCase();
  return (
    <div
      className="rounded-xl p-4"
      style={{ background: '#F8FAFC', border: '1px solid #D7E2EA' }}
    >
      <p className="mb-3 text-sm font-bold" style={{ color: '#102a43' }}>{label}</p>
      <div className="flex flex-col items-center gap-1.5 w-fit">
        <div>
          <label htmlFor={`${baseId}-num`} className="sr-only">{label} numerador</label>
          <input
            id={`${baseId}-num`}
            type="text"
            inputMode="numeric"
            value={num}
            onChange={e => onNum(e.target.value)}
            aria-label={`${label} numerador`}
            className="h-12 w-24 rounded-xl border border-line bg-white text-center font-mono text-lg font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          />
        </div>
        <div className="w-24 border-t-2" style={{ borderColor: '#102a43' }} aria-hidden="true" />
        <div>
          <label htmlFor={`${baseId}-den`} className="sr-only">{label} denominador</label>
          <input
            id={`${baseId}-den`}
            type="text"
            inputMode="numeric"
            value={den}
            onChange={e => onDen(e.target.value)}
            aria-label={`${label} denominador`}
            className="h-12 w-24 rounded-xl border border-line bg-white text-center font-mono text-lg font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          />
        </div>
        <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted">Numerador / Denominador</p>
      </div>
    </div>
  );
}

// ── main component ─────────────────────────────────────────────────────────────

export function FraccionesCalculator() {
  const [mode, setMode]   = useState<Mode>(DEF.mode);
  const [nA, setNA]       = useState(DEF.nA);
  const [dA, setDA]       = useState(DEF.dA);
  const [nB, setNB]       = useState(DEF.nB);
  const [dB, setDB]       = useState(DEF.dB);
  const [result, setResult] = useState<CalcResult>(DEF_RESULT);
  const [copied, setCopied] = useState(false);

  const needsB = NEEDS_B.includes(mode);

  function buildPreview(): string {
    const fA = `${nA || '?'}/${dA || '?'}`;
    const fB = `${nB || '?'}/${dB || '?'}`;
    if (mode === 'simplify') return `${fA}  →  simplificar`;
    if (mode === 'convert')  return `${fA}  →  convertir`;
    return `${fA}  ${OP_LABELS[mode]}  ${fB}`;
  }

  function handleCalc() {
    setResult(compute(mode, nA, dA, nB, dB));
  }

  function handleReset() {
    setMode('add'); setNA('1'); setDA('2'); setNB('3'); setDB('4');
    setResult(compute('add', '1', '2', '3', '4'));
  }

  function applyExample(ex: ExampleConfig) {
    setMode(ex.mode); setNA(ex.nA); setDA(ex.dA); setNB(ex.nB); setDB(ex.dB);
    setResult(compute(ex.mode, ex.nA, ex.dA, ex.nB, ex.dB));
  }

  function handleCopy() {
    if (result.type === 'success') {
      navigator.clipboard.writeText(result.simplified).catch(() => {});
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const ok = result.type === 'success';

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de fracciones
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-7">

            {/* Mode tabs */}
            <div className="mb-6">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Operación</p>
              <div
                className="grid gap-1"
                style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
                role="tablist"
                aria-label="Operación con fracciones"
              >
                {MODES.map(m => (
                  <button
                    key={m.id}
                    role="tab"
                    aria-selected={mode === m.id}
                    onClick={() => setMode(m.id)}
                    className={`rounded-lg py-2.5 px-1 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      mode === m.id ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Fraction inputs */}
            <div className="mb-5 flex flex-wrap items-center gap-4">
              <FractionInput label="Fracción A" num={nA} den={dA} onNum={setNA} onDen={setDA} />
              {needsB && (
                <>
                  <span className="text-2xl font-bold text-muted" aria-hidden="true">
                    {OP_LABELS[mode]}
                  </span>
                  <FractionInput label="Fracción B" num={nB} den={dB} onNum={setNB} onDen={setDB} />
                </>
              )}
            </div>

            {/* Formula preview */}
            <div className="mb-6 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.6)' }}>
                Vista previa
              </p>
              <p className="font-mono text-xl font-bold" style={{ color: '#D8A31A' }}>
                {buildPreview()}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCalc}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none"
                style={{ background: '#D8A31A' }}
              >
                {BTN_LABELS[mode]}
              </button>
              <button
                onClick={handleReset}
                className="rounded-lg border border-line px-4 py-3 text-sm font-semibold text-muted transition-colors hover:border-line-2 hover:text-ink focus:outline-none"
              >
                Limpiar
              </button>
            </div>

            {/* Example chips */}
            <div className="mt-5 border-t border-line pt-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Ejemplos rápidos</p>
              <div className="flex flex-wrap gap-1.5">
                {EXAMPLES.map(ex => (
                  <button
                    key={ex.label}
                    onClick={() => applyExample(ex)}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal focus:outline-none"
                    aria-label={`Ejemplo: ${ex.label}`}
                  >
                    {ex.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* ── Result panel ── */}
          <div className="academic-card overflow-hidden" aria-live="polite">

            <div className="border-b border-line px-7 py-4" style={{ background: '#F0FAF9' }}>
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado de la operación</p>
            </div>

            {result.type === 'error' ? (
              <div className="mx-7 mt-5 flex gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3" role="alert">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5zm0 6.5a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z" />
                </svg>
                <p className="text-sm text-red-700">{result.message}</p>
              </div>
            ) : (
              <div className="divide-y divide-line">

                {/* Operation */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Operación</p>
                  <p className="font-mono text-sm font-semibold text-slate">{result.opLabel}</p>
                </div>

                {/* Simplified result — dominant */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado simplificado</p>
                  <div className="rounded-xl px-6 py-5" style={{ background: '#0a3535' }}>
                    <span className="font-mono text-4xl font-bold" style={{ color: '#D8A31A' }}>
                      {result.simplified}
                    </span>
                  </div>
                </div>

                {/* Mixed + Decimal row */}
                <div className="flex flex-wrap gap-4 px-7 py-4">
                  {result.mixed && (
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Fracción mixta</p>
                      <span
                        className="inline-block rounded-lg px-3 py-1.5 font-mono text-base font-bold"
                        style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                      >
                        {result.mixed}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Decimal</p>
                    <span
                      className="inline-block rounded-lg px-3 py-1.5 font-mono text-base font-bold"
                      style={{ background: '#EEF4F7', color: '#334e68' }}
                    >
                      {result.decimal}
                    </span>
                  </div>
                  {result.percent && mode === 'convert' && (
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Porcentaje</p>
                      <span
                        className="inline-block rounded-lg px-3 py-1.5 font-mono text-base font-bold"
                        style={{ background: '#EEF4F7', color: '#334e68' }}
                      >
                        {result.percent}
                      </span>
                    </div>
                  )}
                </div>

                {/* Steps */}
                {result.steps.length > 0 && (
                  <div className="px-7 py-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Procedimiento</p>
                    <div className="flex flex-col gap-1">
                      {result.steps.map((step, i) => (
                        <p key={i} className="font-mono text-xs" style={{ color: '#334e68' }}>
                          {step}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

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
