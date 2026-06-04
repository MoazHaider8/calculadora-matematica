'use client';

import { useState } from 'react';

type Mode = 'percent_of' | 'what_percent' | 'increase' | 'discount' | 'change' | 'find_total';

type CalcResult =
  | { type: 'success'; headline: string; secondary: string[]; formula: string; interpretation: string }
  | { type: 'error'; message: string };

type ExampleConfig = { label: string; mode: Mode; a: string; b: string };

// ── format helper ─────────────────────────────────────────────────────────────

function fmt(n: number): string {
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(8)).toString();
}

// ── compute ───────────────────────────────────────────────────────────────────

function computeResult(mode: Mode, a: number, b: number): CalcResult {
  switch (mode) {
    case 'percent_of': {
      // a% of b
      const result = b * a / 100;
      return {
        type: 'success',
        headline: fmt(result),
        secondary: [],
        formula: `${fmt(b)} × ${fmt(a)} / 100 = ${fmt(result)}`,
        interpretation: `El ${fmt(a)}% de ${fmt(b)} es ${fmt(result)}.`,
      };
    }
    case 'what_percent': {
      // a is what % of b
      if (b === 0) return { type: 'error', message: 'El total no puede ser 0.' };
      const pct = a / b * 100;
      return {
        type: 'success',
        headline: `${fmt(pct)}%`,
        secondary: [],
        formula: `${fmt(a)} / ${fmt(b)} × 100 = ${fmt(pct)}%`,
        interpretation: `${fmt(a)} representa el ${fmt(pct)}% de ${fmt(b)}.`,
      };
    }
    case 'increase': {
      // base a, increase by b%
      const amount = a * b / 100;
      const final = a + amount;
      return {
        type: 'success',
        headline: fmt(final),
        secondary: [`Aumento: ${fmt(amount)}`],
        formula: `${fmt(a)} + ${fmt(a)} × ${fmt(b)} / 100 = ${fmt(final)}`,
        interpretation: `${fmt(a)} aumentado un ${fmt(b)}% es ${fmt(final)}.`,
      };
    }
    case 'discount': {
      // price a, discount b%
      const discount = a * b / 100;
      const final = a - discount;
      return {
        type: 'success',
        headline: fmt(final),
        secondary: [`Descuento: ${fmt(discount)}`],
        formula: `${fmt(a)} - ${fmt(a)} × ${fmt(b)} / 100 = ${fmt(final)}`,
        interpretation: `${fmt(a)} con un ${fmt(b)}% de descuento es ${fmt(final)}.`,
      };
    }
    case 'change': {
      // from a to b
      if (a === 0) return { type: 'error', message: 'El valor inicial no puede ser 0 para calcular cambio porcentual.' };
      const change = (b - a) / a * 100;
      let interp: string;
      if (Math.abs(change) < 1e-9) interp = 'No hubo cambio porcentual.';
      else if (change > 0) interp = `El valor aumentó un ${fmt(change)}%.`;
      else interp = `El valor disminuyó un ${fmt(Math.abs(change))}%.`;
      return {
        type: 'success',
        headline: `${change >= 0 ? '+' : ''}${fmt(change)}%`,
        secondary: [`Valor inicial: ${fmt(a)}`, `Valor final: ${fmt(b)}`],
        formula: `(${fmt(b)} - ${fmt(a)}) / ${fmt(a)} × 100 = ${fmt(change)}%`,
        interpretation: interp,
      };
    }
    case 'find_total': {
      // a is b% of X
      if (b === 0) return { type: 'error', message: 'El porcentaje no puede ser 0 para encontrar el total.' };
      const total = a / b * 100;
      return {
        type: 'success',
        headline: fmt(total),
        secondary: [],
        formula: `${fmt(a)} ÷ ${fmt(b)} × 100 = ${fmt(total)}`,
        interpretation: `${fmt(a)} es el ${fmt(b)}% de ${fmt(total)}.`,
      };
    }
  }
}

function compute(mode: Mode, rawA: string, rawB: string): CalcResult {
  if (!rawA.trim()) return { type: 'error', message: 'Introduce un valor para calcular.' };
  if (!rawB.trim()) return { type: 'error', message: 'Introduce un valor para calcular.' };
  const a = parseFloat(rawA);
  const b = parseFloat(rawB);
  if (isNaN(a)) return { type: 'error', message: 'El primer valor debe ser un número válido.' };
  if (isNaN(b)) return { type: 'error', message: 'El segundo valor debe ser un número válido.' };
  return computeResult(mode, a, b);
}

// ── constants ─────────────────────────────────────────────────────────────────

const MODES: { id: Mode; label: string }[] = [
  { id: 'percent_of',  label: '% de número'     },
  { id: 'what_percent', label: 'Qué % es'       },
  { id: 'increase',    label: 'Aumento'          },
  { id: 'discount',    label: 'Descuento'        },
  { id: 'change',      label: 'Cambio %'         },
  { id: 'find_total',  label: 'Encontrar total'  },
];

const MODE_CONFIG: Record<Mode, { labelA: string; labelB: string; phA: string; phB: string; btn: string }> = {
  percent_of:   { labelA: 'Porcentaje (%)', labelB: 'Número',              phA: '25',  phB: '200', btn: 'Calcular porcentaje'  },
  what_percent: { labelA: 'Parte',          labelB: 'Total',               phA: '50',  phB: '200', btn: 'Calcular porcentaje'  },
  increase:     { labelA: 'Valor base',     labelB: 'Porcentaje de aumento (%)', phA: '200', phB: '15', btn: 'Calcular aumento' },
  discount:     { labelA: 'Precio original', labelB: 'Descuento (%)',      phA: '200', phB: '20', btn: 'Calcular descuento'    },
  change:       { labelA: 'Valor inicial',  labelB: 'Valor final',         phA: '80',  phB: '100', btn: 'Calcular cambio'      },
  find_total:   { labelA: 'Parte',          labelB: 'Porcentaje (%)',      phA: '50',  phB: '25', btn: 'Encontrar total'       },
};

const EXAMPLES: ExampleConfig[] = [
  { label: '25% de 200',    mode: 'percent_of',  a: '25',  b: '200' },
  { label: '50 de 200',     mode: 'what_percent', a: '50',  b: '200' },
  { label: '200 + 15%',     mode: 'increase',    a: '200', b: '15'  },
  { label: '200 − 20%',     mode: 'discount',    a: '200', b: '20'  },
  { label: '80 → 100',      mode: 'change',      a: '80',  b: '100' },
  { label: '50 es 25% de X', mode: 'find_total', a: '50',  b: '25'  },
];

const DEF = EXAMPLES[0];
const DEF_RESULT = compute(DEF.mode, DEF.a, DEF.b);

function buildPreview(mode: Mode, a: string, b: string): string {
  const aLabel = a || '?';
  const bLabel = b || '?';
  switch (mode) {
    case 'percent_of':   return `${aLabel}% de ${bLabel}`;
    case 'what_percent': return `${aLabel} de ${bLabel}`;
    case 'increase':     return `${aLabel} + ${bLabel}%`;
    case 'discount':     return `${aLabel} − ${bLabel}%`;
    case 'change':       return `${aLabel} → ${bLabel}`;
    case 'find_total':   return `${aLabel} es el ${bLabel}% de X`;
  }
}

// ── NumInput ──────────────────────────────────────────────────────────────────

function NumInput({ id, label, value, onChange, placeholder }: {
  id: string; label: string; value: string;
  onChange: (v: string) => void; placeholder: string;
}) {
  return (
    <div
      className="rounded-xl p-4"
      style={{ background: '#F8FAFC', border: '1px solid #D7E2EA' }}
    >
      <label htmlFor={id} className="mb-2 block text-sm font-bold" style={{ color: '#102a43' }}>
        {label}
      </label>
      <input
        id={id}
        type="text"
        inputMode="decimal"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-line bg-white px-3 font-mono text-lg font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
      />
    </div>
  );
}

// ── main component ─────────────────────────────────────────────────────────────

export function PorcentajesCalculator() {
  const [mode, setMode]     = useState<Mode>(DEF.mode);
  const [a, setA]           = useState(DEF.a);
  const [b, setB]           = useState(DEF.b);
  const [result, setResult] = useState<CalcResult>(DEF_RESULT);
  const [copied, setCopied] = useState(false);

  const cfg = MODE_CONFIG[mode];

  function handleCalc() {
    setResult(compute(mode, a, b));
  }

  function handleReset() {
    setMode('percent_of'); setA('25'); setB('200');
    setResult(compute('percent_of', '25', '200'));
  }

  function applyExample(ex: ExampleConfig) {
    setMode(ex.mode); setA(ex.a); setB(ex.b);
    setResult(compute(ex.mode, ex.a, ex.b));
  }

  function handleCopy() {
    if (result.type === 'success') {
      navigator.clipboard.writeText(result.headline).catch(() => {});
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
          Calculadora de porcentajes
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-7">

            {/* Mode tabs */}
            <div className="mb-6">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Tipo de cálculo</p>
              <div
                className="grid gap-1"
                style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
                role="tablist"
                aria-label="Tipo de cálculo porcentual"
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

            {/* Inputs */}
            <div className="mb-5 flex flex-col gap-3">
              <NumInput id="input-a" label={cfg.labelA} value={a} onChange={setA} placeholder={cfg.phA} />
              <NumInput id="input-b" label={cfg.labelB} value={b} onChange={setB} placeholder={cfg.phB} />
            </div>

            {/* Preview */}
            <div className="mb-6 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.6)' }}>
                Vista previa
              </p>
              <p className="font-mono text-xl font-bold" style={{ color: '#D8A31A' }}>
                {buildPreview(mode, a, b)}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCalc}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none"
                style={{ background: '#D8A31A' }}
              >
                {cfg.btn}
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado del cálculo</p>
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
                  <p className="font-mono text-sm font-semibold text-slate">{buildPreview(mode, a, b)}</p>
                </div>

                {/* Main result — dominant */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                  <div className="rounded-xl px-6 py-5" style={{ background: '#0a3535' }}>
                    <span className="font-mono text-4xl font-bold" style={{ color: '#D8A31A' }}>
                      {result.headline}
                    </span>
                  </div>
                </div>

                {/* Secondary values */}
                {result.secondary.length > 0 && (
                  <div className="flex flex-wrap gap-3 px-7 py-4">
                    {result.secondary.map((s, i) => (
                      <div key={i}>
                        <span
                          className="inline-block rounded-lg px-3 py-1.5 font-mono text-sm font-bold"
                          style={{ background: '#EEF4F7', color: '#334e68' }}
                        >
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Formula */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Fórmula</p>
                  <p className="font-mono text-xs" style={{ background: '#EEF4F7', color: '#334e68', borderRadius: '8px', padding: '10px 12px' }}>
                    {result.formula}
                  </p>
                </div>

                {/* Interpretation */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Interpretación</p>
                  <p className="text-sm font-semibold leading-relaxed" style={{ color: '#0F5C5C' }}>
                    {result.interpretation}
                  </p>
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
