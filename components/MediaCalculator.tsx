'use client';

import { useState } from 'react';

type Mode = 'simple' | 'ponderada';

// ── Formatting ────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  if (!isFinite(n)) return '?';
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(4)).toString();
}

// ── Simple mean ───────────────────────────────────────────────────────────────

type SimpleResult =
  | { type: 'success'; mode: 'simple'; values: number[]; sum: number; count: number; mean: number; procedure: string[] }
  | { type: 'error'; message: string };

function computeSimple(raw: string): SimpleResult {
  if (!raw.trim()) return { type: 'error', message: 'Introduce al menos un valor para calcular la media.' };
  const parts = raw.split(/[,\n;]+/).map(s => s.trim()).filter(s => s.length > 0);
  if (parts.length === 0) return { type: 'error', message: 'Introduce al menos un valor numérico.' };
  const values = parts.map(s => parseFloat(s));
  if (values.some(v => isNaN(v))) return { type: 'error', message: 'Cada dato debe ser un número válido.' };
  const sum = values.reduce((a, b) => a + b, 0);
  const count = values.length;
  const mean = sum / count;
  const procedure = [
    `${values.map(fmt).join(' + ')} = ${fmt(sum)}`,
    `${fmt(sum)} ÷ ${count} = ${fmt(mean)}`,
  ];
  return { type: 'success', mode: 'simple', values, sum, count, mean, procedure };
}

// ── Weighted mean ─────────────────────────────────────────────────────────────

type WRow = { value: string; weight: string };

type WeightedResult =
  | { type: 'success'; mode: 'ponderada'; rows: { v: number; w: number }[]; weightedSum: number; totalWeight: number; mean: number; procedure: string[] }
  | { type: 'error'; message: string };

function computeWeighted(rows: WRow[]): WeightedResult {
  if (rows.length === 0) return { type: 'error', message: 'Introduce al menos un valor para calcular la media.' };
  const parsed: { v: number; w: number }[] = [];
  for (const row of rows) {
    if (!row.value.trim() || !row.weight.trim()) return { type: 'error', message: 'Introduce el valor y el peso de cada fila.' };
    const v = parseFloat(row.value);
    const w = parseFloat(row.weight);
    if (isNaN(v)) return { type: 'error', message: 'Cada valor debe ser un número válido.' };
    if (isNaN(w)) return { type: 'error', message: 'Cada peso debe ser un número válido.' };
    parsed.push({ v, w });
  }
  const totalWeight = parsed.reduce((a, r) => a + r.w, 0);
  if (totalWeight === 0) return { type: 'error', message: 'La suma de los pesos no puede ser 0.' };
  const weightedSum = parsed.reduce((a, r) => a + r.v * r.w, 0);
  const mean = weightedSum / totalWeight;
  const numeratorStr = parsed.map(r => `(${fmt(r.v)} × ${fmt(r.w)})`).join(' + ');
  const procedure = [
    `${numeratorStr} = ${fmt(weightedSum)}`,
    `${fmt(weightedSum)} ÷ ${fmt(totalWeight)} = ${fmt(mean)}`,
  ];
  return { type: 'success', mode: 'ponderada', rows: parsed, weightedSum, totalWeight, mean, procedure };
}

// ── Default state ─────────────────────────────────────────────────────────────

const DEF_RAW = '10, 8, 9, 7, 6';
const DEF_SIMPLE = computeSimple(DEF_RAW);
const DEF_ROWS: WRow[] = [{ value: '80', weight: '30' }, { value: '90', weight: '70' }];
const DEF_WEIGHTED = computeWeighted(DEF_ROWS);

// ── Simple examples ───────────────────────────────────────────────────────────

const SIMPLE_EXAMPLES = [
  { label: 'Datos básicos',      raw: '10, 8, 9, 7, 6'     },
  { label: 'Calificaciones',     raw: '85, 90, 78, 92, 88' },
  { label: 'Decimales',          raw: '2.5, 3.5, 4, 5'     },
  { label: 'Valores negativos',  raw: '-2, 4, 8, 10'       },
];

const WEIGHTED_EXAMPLE_ROWS: WRow[] = [{ value: '80', weight: '30' }, { value: '90', weight: '70' }];

// ── Result card ───────────────────────────────────────────────────────────────

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
        style={{ color: highlight ? '#D8A31A' : '#102a43', fontSize: highlight ? '2rem' : '1.15rem' }}
      >
        {value}
      </p>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export function MediaCalculator() {
  const [mode,        setMode]        = useState<Mode>('simple');
  const [raw,         setRaw]         = useState(DEF_RAW);
  const [rows,        setRows]        = useState<WRow[]>(DEF_ROWS);
  const [simpleRes,   setSimpleRes]   = useState<SimpleResult>(DEF_SIMPLE);
  const [weightedRes, setWeightedRes] = useState<WeightedResult>(DEF_WEIGHTED);
  const [copied,      setCopied]      = useState<'resultado' | 'procedimiento' | null>(null);

  // ── actions ──

  function handleCalc() {
    if (mode === 'simple') setSimpleRes(computeSimple(raw));
    else setWeightedRes(computeWeighted(rows));
  }

  function handleReset() {
    if (mode === 'simple') { setRaw(DEF_RAW); setSimpleRes(computeSimple(DEF_RAW)); }
    else { setRows(DEF_ROWS); setWeightedRes(computeWeighted(DEF_ROWS)); }
  }

  function applySimpleExample(ex: { raw: string }) {
    setRaw(ex.raw);
    setSimpleRes(computeSimple(ex.raw));
  }

  function applyWeightedExample() {
    setRows(WEIGHTED_EXAMPLE_ROWS);
    setWeightedRes(computeWeighted(WEIGHTED_EXAMPLE_ROWS));
  }

  function addRow() { setRows(r => [...r, { value: '', weight: '' }]); }

  function removeRow(i: number) {
    setRows(r => r.filter((_, idx) => idx !== i));
  }

  function updateRow(i: number, field: 'value' | 'weight', v: string) {
    setRows(r => r.map((row, idx) => idx === i ? { ...row, [field]: v } : row));
  }

  function copyText(type: 'resultado' | 'procedimiento') {
    let text = '';
    if (mode === 'simple' && simpleRes.type === 'success') {
      text = type === 'resultado'
        ? `Media = ${fmt(simpleRes.mean)}`
        : simpleRes.procedure.join('\n');
    } else if (mode === 'ponderada' && weightedRes.type === 'success') {
      text = type === 'resultado'
        ? `Media ponderada = ${fmt(weightedRes.mean)}`
        : weightedRes.procedure.join('\n');
    }
    if (!text) return;
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  // ── derived ──

  const parsedChips = raw.split(/[,\n;]+/).map(s => s.trim()).filter(s => s.length > 0 && !isNaN(parseFloat(s)));
  const result = mode === 'simple' ? simpleRes : weightedRes;
  const ok = result.type === 'success';

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">
        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de media
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-6">

            {/* Mode selector */}
            <div className="mb-5">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Tipo de cálculo</p>
              <div className="grid grid-cols-2 gap-1" role="tablist" aria-label="Tipo de media">
                {(['simple', 'ponderada'] as Mode[]).map(m => (
                  <button
                    key={m}
                    role="tab"
                    aria-selected={mode === m}
                    onClick={() => setMode(m)}
                    className={`rounded-lg px-2 py-2.5 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      mode === m ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                    }`}
                  >
                    {m === 'simple' ? 'Media simple' : 'Media ponderada'}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Simple mode input ── */}
            {mode === 'simple' && (
              <>
                <div className="mb-3">
                  <label htmlFor="datos-media-input" className="mb-1.5 block text-xs font-bold text-ink">
                    Datos del conjunto (separados por coma o por línea)
                  </label>
                  <textarea
                    id="datos-media-input"
                    value={raw}
                    onChange={e => setRaw(e.target.value)}
                    rows={4}
                    placeholder="10, 8, 9, 7, 6"
                    className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3 font-mono text-sm text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    aria-label="Lista de datos para calcular la media"
                  />
                </div>

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
              </>
            )}

            {/* ── Weighted mode input ── */}
            {mode === 'ponderada' && (
              <div className="mb-4">
                <div className="mb-2 grid grid-cols-[1fr_1fr_auto] gap-2">
                  <p className="text-xs font-bold text-ink">Valor</p>
                  <p className="text-xs font-bold text-ink">Peso</p>
                  <span />
                </div>
                <div className="flex flex-col gap-2">
                  {rows.map((row, i) => (
                    <div key={i} className="grid grid-cols-[1fr_1fr_auto] items-center gap-2">
                      <input
                        type="text"
                        inputMode="decimal"
                        value={row.value}
                        onChange={e => updateRow(i, 'value', e.target.value)}
                        placeholder="80"
                        className="h-10 rounded-xl border border-line bg-white px-3 font-mono text-sm font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                        aria-label={`Valor ${i + 1}`}
                      />
                      <input
                        type="text"
                        inputMode="decimal"
                        value={row.weight}
                        onChange={e => updateRow(i, 'weight', e.target.value)}
                        placeholder="30"
                        className="h-10 rounded-xl border border-line bg-white px-3 font-mono text-sm font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                        aria-label={`Peso ${i + 1}`}
                      />
                      <button
                        onClick={() => removeRow(i)}
                        disabled={rows.length <= 2}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-red-300 hover:text-red-500 focus:outline-none disabled:opacity-30"
                        aria-label={`Eliminar fila ${i + 1}`}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={addRow}
                  className="mt-2 rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                >
                  + Añadir fila
                </button>
                <p className="mt-1.5 text-[10px] text-muted">Los pesos no necesitan sumar 100.</p>
              </div>
            )}

            {/* Formula preview */}
            <div className="mb-5 rounded-xl px-4 py-3" style={{ background: '#0a3535' }}>
              <p className="mb-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>Fórmula</p>
              <p className="font-mono text-sm font-bold" style={{ color: '#D8A31A' }}>
                {mode === 'simple'
                  ? 'x̄ = Σx / n'
                  : 'x̄ = Σ(x × peso) / Σpesos'}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCalc}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                style={{ background: '#D8A31A' }}
              >
                {mode === 'simple' ? 'Calcular media' : 'Calcular media ponderada'}
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
                {mode === 'simple' ? (
                  SIMPLE_EXAMPLES.map(ex => (
                    <button
                      key={ex.label}
                      onClick={() => applySimpleExample(ex)}
                      className="min-h-[32px] rounded-md border border-line px-2.5 py-1 text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal focus:outline-none"
                      aria-label={`Ejemplo: ${ex.label}`}
                    >
                      {ex.label}
                    </button>
                  ))
                ) : (
                  <button
                    onClick={applyWeightedExample}
                    className="min-h-[32px] rounded-md border border-line px-2.5 py-1 text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal focus:outline-none"
                  >
                    80 peso 30, 90 peso 70
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* ── Result panel ── */}
          <div className="academic-card overflow-hidden" aria-live="polite">

            <div className="border-b border-line px-7 py-4" style={{ background: '#F0FAF9' }}>
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>
                {mode === 'simple' ? 'Resultado de media' : 'Resultado de media ponderada'}
              </p>
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

                {/* Primary result */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">
                    {mode === 'simple' ? 'Media' : 'Media ponderada'}
                  </p>
                  <StatCard
                    label={mode === 'simple' ? 'x̄' : 'x̄ ponderada'}
                    value={fmt(result.mean)}
                    highlight
                  />
                </div>

                {/* Supporting values */}
                <div className="px-7 py-4">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">Valores de apoyo</p>
                  {mode === 'simple' && result.mode === 'simple' ? (
                    <div className="grid grid-cols-2 gap-2">
                      <StatCard label="Suma" value={fmt(result.sum)} />
                      <StatCard label="Cantidad (n)" value={String(result.count)} />
                    </div>
                  ) : result.mode === 'ponderada' ? (
                    <div className="grid grid-cols-2 gap-2">
                      <StatCard label="Suma ponderada" value={fmt(result.weightedSum)} />
                      <StatCard label="Suma de pesos" value={fmt(result.totalWeight)} />
                    </div>
                  ) : null}
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
                    {mode === 'simple'
                      ? `La media del conjunto es ${fmt(result.mean)}. Representa el valor central cuando todos los datos tienen el mismo peso.`
                      : `La media ponderada es ${fmt(result.mean)}. Los valores con mayor peso influyen más en el resultado final.`}
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
                    onClick={() => copyText('procedimiento')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                  >
                    {copied === 'procedimiento' ? '✓ Copiado' : 'Copiar procedimiento'}
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
