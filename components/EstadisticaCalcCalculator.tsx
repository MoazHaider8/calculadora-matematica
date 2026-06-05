'use client';

import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type StatSuccess = {
  type: 'success';
  values: number[];
  sorted: number[];
  count: number;
  sum: number;
  mean: number;
  median: number;
  modes: number[] | null;
  min: number;
  max: number;
  range: number;
  popVariance: number;
  popStdDev: number;
  sampleVariance: number | null;
  sampleStdDev: number | null;
  procedure: string[];
};
type StatResult = StatSuccess | { type: 'error'; message: string };

// ── Formatting ────────────────────────────────────────────────────────────────

function fmtNum(n: number): string {
  if (!isFinite(n)) return '?';
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(4)).toString();
}

// ── Calculation ────────────────────────────────────────────────────────────────

function computeStats(raw: string): StatResult {
  if (!raw.trim()) return { type: 'error', message: 'Introduce al menos un valor para calcular la estadística.' };

  const parts = raw.split(/[,\n;]+/).map(s => s.trim()).filter(s => s.length > 0);
  if (parts.length === 0) return { type: 'error', message: 'Introduce al menos un valor numérico.' };

  const values = parts.map(s => parseFloat(s));
  if (values.some(v => isNaN(v))) return { type: 'error', message: 'Cada dato debe ser un número válido.' };

  const sorted = [...values].sort((a, b) => a - b);
  const n = values.length;
  const sum = values.reduce((a, b) => a + b, 0);
  const mean = sum / n;

  // Median
  const median = n % 2 === 1
    ? sorted[Math.floor(n / 2)]
    : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;

  // Mode
  const freq: Record<string, number> = {};
  values.forEach(v => { const k = String(v); freq[k] = (freq[k] ?? 0) + 1; });
  const maxFreq = Math.max(...Object.values(freq));
  const modes: number[] | null = maxFreq > 1
    ? Object.keys(freq).filter(k => freq[k] === maxFreq).map(Number).sort((a, b) => a - b)
    : null;

  const min = sorted[0];
  const max = sorted[n - 1];
  const range = max - min;

  const squaredDiffs = values.map(v => (v - mean) ** 2);
  const sumSqDiffs = squaredDiffs.reduce((a, b) => a + b, 0);

  const popVariance = sumSqDiffs / n;
  const popStdDev = Math.sqrt(popVariance);

  const sampleVariance = n >= 2 ? sumSqDiffs / (n - 1) : null;
  const sampleStdDev = sampleVariance !== null ? Math.sqrt(sampleVariance) : null;

  const procedure: string[] = [
    `Media = ${fmtNum(sum)} ÷ ${n} = ${fmtNum(mean)}`,
    `Rango = ${fmtNum(max)} − ${fmtNum(min)} = ${fmtNum(range)}`,
    `Varianza pob. = Σ(x − ${fmtNum(mean)})² ÷ ${n} = ${fmtNum(popVariance)}`,
    `Desviación estándar = √${fmtNum(popVariance)} = ${fmtNum(popStdDev)}`,
  ];
  if (sampleVariance !== null) {
    procedure.push(`Varianza muestral = Σ(x − ${fmtNum(mean)})² ÷ ${n - 1} = ${fmtNum(sampleVariance)}`);
  }

  return { type: 'success', values, sorted, count: n, sum, mean, median, modes, min, max, range, popVariance, popStdDev, sampleVariance, sampleStdDev, procedure };
}

// ── Examples ──────────────────────────────────────────────────────────────────

const EXAMPLES = [
  { label: 'Datos básicos',     raw: '10, 8, 9, 7, 6' },
  { label: 'Con moda',          raw: '2, 4, 4, 6, 8'  },
  { label: 'Calificaciones',    raw: '85, 90, 78, 92, 88' },
  { label: 'Decimales',         raw: '2.5, 3.5, 4, 5' },
  { label: 'Valores negativos', raw: '-2, 4, 8, 10'   },
];

const DEF_RAW = '10, 8, 9, 7, 6';
const DEF_RESULT = computeStats(DEF_RAW);

// ── Component ─────────────────────────────────────────────────────────────────

function StatCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className="rounded-xl px-4 py-3"
      style={{ background: highlight ? '#0a3535' : '#F8FAFC', border: `1px solid ${highlight ? 'transparent' : '#D7E2EA'}` }}
    >
      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: highlight ? 'rgba(221,243,240,0.55)' : '#829ab1' }}>
        {label}
      </p>
      <p
        className="font-mono font-bold leading-none"
        style={{ color: highlight ? '#D8A31A' : '#102a43', fontSize: highlight ? '1.5rem' : '1.1rem' }}
      >
        {value}
      </p>
    </div>
  );
}

export function EstadisticaCalcCalculator() {
  const [raw,    setRaw]    = useState(DEF_RAW);
  const [result, setResult] = useState<StatResult>(DEF_RESULT);
  const [copied, setCopied] = useState<'resumen' | 'datos' | null>(null);

  function handleCalc() { setResult(computeStats(raw)); }

  function handleReset() { setRaw(DEF_RAW); setResult(computeStats(DEF_RAW)); }

  function applyExample(ex: { label: string; raw: string }) {
    setRaw(ex.raw); setResult(computeStats(ex.raw));
  }

  function copyText(type: 'resumen' | 'datos') {
    if (result.type !== 'success') return;
    const text = type === 'datos'
      ? result.values.join(', ')
      : [
          `Cantidad: ${result.count}`,
          `Suma: ${fmtNum(result.sum)}`,
          `Media: ${fmtNum(result.mean)}`,
          `Mediana: ${fmtNum(result.median)}`,
          `Moda: ${result.modes ? result.modes.map(fmtNum).join(', ') : 'Sin moda'}`,
          `Mínimo: ${fmtNum(result.min)}`,
          `Máximo: ${fmtNum(result.max)}`,
          `Rango: ${fmtNum(result.range)}`,
          `Varianza pob.: ${fmtNum(result.popVariance)}`,
          `Desv. estándar pob.: ${fmtNum(result.popStdDev)}`,
          result.sampleVariance !== null ? `Varianza muestral: ${fmtNum(result.sampleVariance)}` : '',
          result.sampleStdDev !== null   ? `Desv. estándar muestral: ${fmtNum(result.sampleStdDev)}` : '',
        ].filter(Boolean).join('\n');
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  const parsedChips = raw
    .split(/[,\n;]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0 && !isNaN(parseFloat(s)));

  const ok = result.type === 'success';

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">
        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de estadística
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-6">

            {/* Label + textarea */}
            <div className="mb-3">
              <label htmlFor="datos-input" className="mb-1.5 block text-xs font-bold text-ink">
                Datos del conjunto (separados por coma o por línea)
              </label>
              <textarea
                id="datos-input"
                value={raw}
                onChange={e => setRaw(e.target.value)}
                rows={4}
                placeholder="10, 8, 9, 7, 6"
                className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3 font-mono text-sm text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                aria-label="Lista de datos para el análisis estadístico"
              />
            </div>

            {/* Compact "datos leídos" row */}
            {parsedChips.length > 0 && (
              <div
                className="mb-4 flex items-center gap-2 rounded-lg px-3 py-2"
                style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              >
                <span
                  className="shrink-0 text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: '#0a4f4d' }}
                >
                  Datos leídos ({parsedChips.length}):
                </span>
                <span className="min-w-0 truncate font-mono text-xs font-semibold" style={{ color: '#0a4f4d' }}>
                  {parsedChips.length <= 8
                    ? parsedChips.join(', ')
                    : `${parsedChips.slice(0, 6).join(', ')} ... (${parsedChips.length} valores)`}
                </span>
              </div>
            )}

            {/* Compact formula strip */}
            <div
              className="mb-5 rounded-xl px-4 py-3"
              style={{ background: '#0a3535' }}
            >
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-xs" style={{ color: 'rgba(216,163,26,0.8)' }}>
                <span>x̄ = Σx / n</span>
                <span style={{ color: 'rgba(221,243,240,0.2)' }}>·</span>
                <span>σ² = Σ(x − x̄)² / n</span>
                <span style={{ color: 'rgba(221,243,240,0.2)' }}>·</span>
                <span>σ = √σ²</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCalc}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                style={{ background: '#D8A31A' }}
              >
                Calcular estadística
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resumen estadístico</p>
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

                {/* Sorted data */}
                <div className="px-7 py-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Datos ordenados</p>
                  <p className="break-all font-mono text-xs font-semibold" style={{ color: '#334e68' }}>
                    {result.sorted.map(fmtNum).join(' , ')}
                  </p>
                </div>

                {/* Resumen */}
                <div className="px-7 py-4">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">Resumen</p>
                  <div className="grid grid-cols-2 gap-2">
                    <StatCard label="Cantidad" value={String(result.count)} />
                    <StatCard label="Suma" value={fmtNum(result.sum)} />
                  </div>
                </div>

                {/* Tendencia central */}
                <div className="px-7 py-4">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">Tendencia central</p>
                  <div className="grid grid-cols-1 gap-2">
                    <StatCard label="Media" value={fmtNum(result.mean)} highlight />
                    <div className="grid grid-cols-2 gap-2">
                      <StatCard label="Mediana" value={fmtNum(result.median)} />
                      <StatCard
                        label={result.modes && result.modes.length > 1 ? 'Moda (múltiple)' : 'Moda'}
                        value={result.modes ? result.modes.map(fmtNum).join(', ') : 'Sin moda'}
                      />
                    </div>
                  </div>
                </div>

                {/* Dispersión */}
                <div className="px-7 py-4">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">Dispersión y rango</p>
                  <div className="grid grid-cols-2 gap-2">
                    <StatCard label="Mínimo"  value={fmtNum(result.min)} />
                    <StatCard label="Máximo"  value={fmtNum(result.max)} />
                    <StatCard label="Rango"   value={fmtNum(result.range)} />
                    <StatCard label="Var. pob." value={fmtNum(result.popVariance)} />
                    <StatCard label="σ pob."   value={fmtNum(result.popStdDev)} />
                    {result.sampleVariance !== null ? (
                      <StatCard label="Var. muestral" value={fmtNum(result.sampleVariance)} />
                    ) : (
                      <div className="rounded-xl border border-dashed border-line px-4 py-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Var. muestral</p>
                        <p className="mt-1 text-[10px] text-muted">Mínimo 2 valores</p>
                      </div>
                    )}
                    {result.sampleStdDev !== null ? (
                      <StatCard label="σ muestral" value={fmtNum(result.sampleStdDev)} />
                    ) : (
                      <div className="rounded-xl border border-dashed border-line px-4 py-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted">σ muestral</p>
                        <p className="mt-1 text-[10px] text-muted">Mínimo 2 valores</p>
                      </div>
                    )}
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

                {/* Copy */}
                <div className="flex flex-wrap gap-2 px-7 py-4">
                  <button
                    onClick={() => copyText('resumen')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                    aria-live="polite"
                  >
                    {copied === 'resumen' ? '✓ Resultado copiado' : 'Copiar resumen'}
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
