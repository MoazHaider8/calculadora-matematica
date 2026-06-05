'use client';

import { useState } from 'react';

type CalcType = 'ambas' | 'poblacional' | 'muestral';

// ── Formatting ────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  if (!isFinite(n)) return '?';
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(4)).toString();
}

// ── Calculation ────────────────────────────────────────────────────────────────

type DesviacionSuccess = {
  type: 'success';
  values: number[];
  n: number;
  sum: number;
  mean: number;
  sumSqDiffs: number;
  popVariance: number;
  popStdDev: number;
  sampleVariance: number | null;
  sampleStdDev: number | null;
  procedure: string[];
};

type DesviacionResult = DesviacionSuccess | { type: 'error'; message: string };

function compute(raw: string): DesviacionResult {
  if (!raw.trim()) return { type: 'error', message: 'Introduce al menos un valor para calcular la desviación estándar.' };
  const parts = raw.split(/[,\n;]+/).map(s => s.trim()).filter(s => s.length > 0);
  if (parts.length === 0) return { type: 'error', message: 'Introduce al menos un valor numérico.' };
  const values = parts.map(s => parseFloat(s));
  if (values.some(v => isNaN(v))) return { type: 'error', message: 'Cada dato debe ser un número válido.' };

  const n = values.length;
  const sum = values.reduce((a, b) => a + b, 0);
  const mean = sum / n;
  const squaredDiffs = values.map(v => (v - mean) ** 2);
  const sumSqDiffs = squaredDiffs.reduce((a, b) => a + b, 0);
  const popVariance = sumSqDiffs / n;
  const popStdDev = Math.sqrt(popVariance);
  const sampleVariance = n >= 2 ? sumSqDiffs / (n - 1) : null;
  const sampleStdDev = sampleVariance !== null ? Math.sqrt(sampleVariance) : null;

  const procedure: string[] = [
    `Media = ${fmt(sum)} ÷ ${n} = ${fmt(mean)}`,
    `Σ(x − μ)² = ${fmt(sumSqDiffs)}`,
    `Varianza pob. = ${fmt(sumSqDiffs)} ÷ ${n} = ${fmt(popVariance)}`,
    `σ = √${fmt(popVariance)} = ${fmt(popStdDev)}`,
  ];
  if (sampleVariance !== null && sampleStdDev !== null) {
    procedure.push(`Varianza muestral = ${fmt(sumSqDiffs)} ÷ ${n - 1} = ${fmt(sampleVariance)}`);
    procedure.push(`s = √${fmt(sampleVariance)} = ${fmt(sampleStdDev)}`);
  }

  return { type: 'success', values, n, sum, mean, sumSqDiffs, popVariance, popStdDev, sampleVariance, sampleStdDev, procedure };
}

// ── Examples ──────────────────────────────────────────────────────────────────

const EXAMPLES = [
  { label: 'Datos básicos',       raw: '10, 8, 9, 7, 6'     },
  { label: 'Dispersión baja',     raw: '8, 8, 9, 9, 10'     },
  { label: 'Dispersión alta',     raw: '2, 10, 18, 26, 34'  },
  { label: 'Calificaciones',      raw: '85, 90, 78, 92, 88' },
  { label: 'Decimales',           raw: '2.5, 3.5, 4, 5'     },
];

const DEF_RAW = '10, 8, 9, 7, 6';
const DEF_RESULT = compute(DEF_RAW);

const TYPE_LABELS: { id: CalcType; label: string; symbol: string }[] = [
  { id: 'ambas',      label: 'Ambas',      symbol: 'σ & s' },
  { id: 'poblacional', label: 'Población', symbol: 'σ'     },
  { id: 'muestral',   label: 'Muestra',   symbol: 's'     },
];

// ── Small result card ─────────────────────────────────────────────────────────

function StatCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className="rounded-xl px-4 py-3"
      style={{
        background: highlight ? '#0a3535' : '#F8FAFC',
        border: `1px solid ${highlight ? 'transparent' : '#D7E2EA'}`,
      }}
    >
      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: highlight ? 'rgba(221,243,240,0.5)' : '#829ab1' }}>
        {label}
      </p>
      <p
        className="font-mono font-bold leading-none"
        style={{ color: highlight ? '#D8A31A' : '#102a43', fontSize: highlight ? '1.6rem' : '1.1rem' }}
      >
        {value}
      </p>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export function DesviacionCalculator() {
  const [raw,      setRaw]      = useState(DEF_RAW);
  const [calcType, setCalcType] = useState<CalcType>('ambas');
  const [result,   setResult]   = useState<DesviacionResult>(DEF_RESULT);
  const [copied,   setCopied]   = useState<'resultado' | 'datos' | null>(null);

  function handleCalc() { setResult(compute(raw)); }

  function handleReset() {
    setRaw(DEF_RAW);
    setCalcType('ambas');
    setResult(compute(DEF_RAW));
  }

  function applyExample(ex: { raw: string }) {
    setRaw(ex.raw);
    setResult(compute(ex.raw));
  }

  function copyText(type: 'resultado' | 'datos') {
    if (result.type !== 'success') return;
    let text = '';
    if (type === 'datos') {
      text = result.values.join(', ');
    } else {
      const lines = [
        `Media: ${fmt(result.mean)}`,
        `Varianza pob.: ${fmt(result.popVariance)}`,
        `Desviación estándar pob.: ${fmt(result.popStdDev)}`,
      ];
      if (result.sampleVariance !== null) lines.push(`Varianza muestral: ${fmt(result.sampleVariance)}`);
      if (result.sampleStdDev !== null)   lines.push(`Desviación estándar muestral: ${fmt(result.sampleStdDev)}`);
      text = lines.join('\n');
    }
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  const parsedChips = raw
    .split(/[,\n;]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0 && !isNaN(parseFloat(s)));

  const ok = result.type === 'success';
  const showPop = calcType === 'ambas' || calcType === 'poblacional';
  const showSam = calcType === 'ambas' || calcType === 'muestral';

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">
        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de desviación estándar
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-6">

            {/* Type selector */}
            <div className="mb-5">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Tipo de cálculo</p>
              <div className="grid grid-cols-3 gap-1" role="tablist" aria-label="Tipo de desviación estándar">
                {TYPE_LABELS.map(t => (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={calcType === t.id}
                    onClick={() => setCalcType(t.id)}
                    className={`rounded-lg px-2 py-2.5 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      calcType === t.id ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                    }`}
                  >
                    <span className="block">{t.label}</span>
                    <span className="mt-0.5 block font-mono text-[10px] opacity-70">{t.symbol}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Data input */}
            <div className="mb-3">
              <label htmlFor="datos-desv-input" className="mb-1.5 block text-xs font-bold text-ink">
                Datos del conjunto (separados por coma o por línea)
              </label>
              <textarea
                id="datos-desv-input"
                value={raw}
                onChange={e => setRaw(e.target.value)}
                rows={4}
                placeholder="10, 8, 9, 7, 6"
                className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3 font-mono text-sm text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                aria-label="Lista de datos para calcular la desviación estándar"
              />
            </div>

            {/* Parsed chips */}
            {parsedChips.length > 0 && (
              <div
                className="mb-4 flex items-center gap-2 rounded-lg px-3 py-2"
                style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              >
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#0a4f4d' }}>
                  Datos ({parsedChips.length}):
                </span>
                <span className="min-w-0 truncate font-mono text-xs font-semibold" style={{ color: '#0a4f4d' }}>
                  {parsedChips.length <= 8
                    ? parsedChips.join(', ')
                    : `${parsedChips.slice(0, 6).join(', ')} ... (${parsedChips.length} valores)`}
                </span>
              </div>
            )}

            {/* Formula preview */}
            <div
              className="mb-5 rounded-xl px-4 py-3"
              style={{ background: '#0a3535' }}
            >
              <p className="mb-2 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                Fórmulas
              </p>
              <div className="flex flex-col gap-1.5 font-mono text-xs" style={{ color: 'rgba(216,163,26,0.85)' }}>
                {(showPop) && <span>&sigma; = &radic;(&Sigma;(x &minus; &mu;)&sup2; / n)</span>}
                {(showSam) && <span style={{ color: showPop ? 'rgba(216,163,26,0.6)' : 'rgba(216,163,26,0.85)' }}>s = &radic;(&Sigma;(x &minus; x&#x0304;)&sup2; / (n&minus;1))</span>}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCalc}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                style={{ background: '#D8A31A' }}
              >
                Calcular desviación estándar
              </button>
              <button
                onClick={handleReset}
                className="rounded-lg border border-line px-4 py-3 text-sm font-semibold text-muted transition-colors hover:text-ink focus:outline-none"
              >
                Limpiar
              </button>
            </div>

            {/* Example chips */}
            <div className="mt-4 border-t border-line pt-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Ejemplos rápidos</p>
              <div className="flex flex-wrap gap-1.5">
                {EXAMPLES.map(ex => (
                  <button
                    key={ex.label}
                    onClick={() => applyExample(ex)}
                    className="min-h-[32px] rounded-md border border-line px-2.5 py-1 text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal focus:outline-none"
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado de desviación estándar</p>
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

                {/* Mean */}
                <div className="px-7 py-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Media</p>
                  <p className="font-mono text-xl font-bold" style={{ color: '#102a43' }}>
                    x&#x0304; = {fmt(result.mean)}
                  </p>
                </div>

                {/* Primary results */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">Desviación estándar</p>
                  <div className="grid gap-3">
                    {showPop && (
                      <StatCard
                        label="Poblacional (σ)"
                        value={fmt(result.popStdDev)}
                        highlight
                      />
                    )}
                    {showSam && (
                      result.sampleStdDev !== null ? (
                        <StatCard
                          label="Muestral (s)"
                          value={fmt(result.sampleStdDev)}
                          highlight={!showPop}
                        />
                      ) : (
                        <div
                          className="rounded-xl border border-dashed border-line px-4 py-3"
                          style={{ background: '#F8FAFC' }}
                        >
                          <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Muestral (s)</p>
                          <p className="mt-1 text-xs text-muted">Se necesitan al menos 2 valores para calcular la desviación estándar muestral.</p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Variance */}
                <div className="px-7 py-4">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">Varianza</p>
                  <div className="grid grid-cols-2 gap-2">
                    {showPop && <StatCard label="Varianza pob." value={fmt(result.popVariance)} />}
                    {showSam && result.sampleVariance !== null && (
                      <StatCard label="Varianza muestral" value={fmt(result.sampleVariance)} />
                    )}
                  </div>
                </div>

                {/* Summary row */}
                <div className="px-7 py-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Resumen</p>
                  <div className="grid grid-cols-2 gap-2">
                    <StatCard label="Cantidad (n)" value={String(result.n)} />
                    <StatCard label="Suma" value={fmt(result.sum)} />
                  </div>
                </div>

                {/* Procedure */}
                <div className="px-7 py-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Procedimiento</p>
                  <div className="flex flex-col gap-1">
                    {result.procedure.map((step, i) => (
                      <p key={i} className="break-all font-mono text-xs" style={{ color: '#334e68' }}>{step}</p>
                    ))}
                  </div>
                </div>

                {/* Interpretation */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Interpretación</p>
                  <p className="text-sm leading-relaxed text-slate">
                    {result.popStdDev === 0
                      ? 'Todos los datos son iguales. La desviación estándar es 0, no hay dispersión.'
                      : result.popStdDev < 2
                      ? 'La desviación estándar es baja. Los datos están concentrados cerca de la media.'
                      : 'La desviación estándar indica la dispersión típica de cada dato respecto a la media.'}
                  </p>
                </div>

                {/* Copy */}
                <div className="flex flex-wrap gap-2 px-7 py-4">
                  <button
                    onClick={() => copyText('resultado')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                    aria-live="polite"
                  >
                    {copied === 'resultado' ? '✓ Resultado copiado' : 'Copiar resultado'}
                  </button>
                  <button
                    onClick={() => copyText('datos')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                  >
                    {copied === 'datos' ? '✓ Datos copiados' : 'Copiar datos'}
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
