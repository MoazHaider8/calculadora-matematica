'use client';

import { useState } from 'react';

type Mode = 'simple' | 'ponderado';
type WeightedRow = { value: string; weight: string };

// ── Formatting ─────────────────────────────────────────────────────────────────

function fmtNum(n: number): string {
  if (!isFinite(n)) return '?';
  if (Number.isInteger(n)) return String(n);
  // up to 4 decimal places, no trailing zeros
  return parseFloat(n.toFixed(4)).toString();
}

// ── Calculation ────────────────────────────────────────────────────────────────

type CalcResult =
  | { type: 'success'; mode: Mode; values: number[]; weights?: number[]; sum: number; count: number; average: number; procedure: string[]; interp: string }
  | { type: 'error'; message: string };

function computeSimple(raw: string): CalcResult {
  if (!raw.trim()) return { type: 'error', message: 'Introduce al menos un valor para calcular el promedio.' };
  const parts = raw.split(/[,\n;]+/).map(s => s.trim()).filter(s => s.length > 0);
  if (parts.length === 0) return { type: 'error', message: 'Introduce al menos un valor numérico.' };
  const values = parts.map(s => parseFloat(s));
  if (values.some(v => isNaN(v))) return { type: 'error', message: 'Cada valor debe ser un número válido. Revisa los datos ingresados.' };

  const sum     = values.reduce((a, b) => a + b, 0);
  const count   = values.length;
  const average = sum / count;

  const sumExpr = values.map(v => fmtNum(v)).join(' + ');
  const procedure: string[] = [
    `${sumExpr} = ${fmtNum(sum)}`,
    `${fmtNum(sum)} ÷ ${count} = ${fmtNum(average)}`,
  ];

  return {
    type: 'success', mode: 'simple', values, sum, count, average, procedure,
    interp: `El promedio de los ${count} valores ingresados es ${fmtNum(average)}.`,
  };
}

function computeWeighted(rows: WeightedRow[]): CalcResult {
  const active = rows.filter(r => r.value.trim() || r.weight.trim());
  if (active.length === 0) return { type: 'error', message: 'Introduce al menos un valor y su peso.' };

  const values: number[] = [];
  const weights: number[] = [];
  for (const row of active) {
    if (!row.value.trim()) return { type: 'error', message: 'Introduce el valor de cada fila.' };
    if (!row.weight.trim()) return { type: 'error', message: 'Introduce el peso de cada valor.' };
    const v = parseFloat(row.value);
    const w = parseFloat(row.weight);
    if (isNaN(v)) return { type: 'error', message: 'Cada valor debe ser un número válido.' };
    if (isNaN(w)) return { type: 'error', message: 'Cada peso debe ser un número válido.' };
    values.push(v);
    weights.push(w);
  }

  const sumW = weights.reduce((a, b) => a + b, 0);
  if (sumW === 0) return { type: 'error', message: 'La suma de los pesos no puede ser 0.' };

  const weightedSum = values.reduce((acc, v, i) => acc + v * weights[i], 0);
  const average     = weightedSum / sumW;

  const products  = values.map((v, i) => `${fmtNum(v)} × ${fmtNum(weights[i])}`).join(' + ');
  const procedure: string[] = [
    `(${products}) ÷ ${fmtNum(sumW)}`,
    `${fmtNum(weightedSum)} ÷ ${fmtNum(sumW)} = ${fmtNum(average)}`,
  ];

  return {
    type: 'success', mode: 'ponderado', values, weights, sum: weightedSum, count: values.length,
    average, procedure,
    interp: `El promedio ponderado es ${fmtNum(average)}. Los valores con mayor peso tienen más influencia en el resultado.`,
  };
}

// ── Formula preview ────────────────────────────────────────────────────────────

function buildSimplePreview(raw: string): string {
  const parts = raw.split(/[,\n;]+/).map(s => s.trim()).filter(s => s.length > 0 && !isNaN(parseFloat(s)));
  if (parts.length === 0) return '(v1 + v2 + ...) ÷ n';
  const n = parts.length;
  if (n > 5) return `(${parts[0]} + ${parts[1]} + ... + ${parts[n - 1]}) ÷ ${n}`;
  return `(${parts.join(' + ')}) ÷ ${n}`;
}

function buildWeightedPreview(rows: WeightedRow[]): string {
  const valid = rows.filter(r => r.value.trim() && r.weight.trim() && !isNaN(parseFloat(r.value)) && !isNaN(parseFloat(r.weight)));
  if (valid.length === 0) return '(v1×p1 + v2×p2) ÷ (p1+p2)';
  const parts  = valid.map(r => `${r.value}×${r.weight}`).join(' + ');
  const sumW   = valid.reduce((acc, r) => acc + parseFloat(r.weight), 0);
  return `(${parts}) ÷ ${fmtNum(sumW)}`;
}

// ── Example chips ─────────────────────────────────────────────────────────────

type Example =
  | { label: string; mode: 'simple'; raw: string }
  | { label: string; mode: 'ponderado'; rows: WeightedRow[] };

const EXAMPLES: Example[] = [
  { label: 'Notas básicas',   mode: 'simple',    raw:  '10, 8, 9, 7' },
  { label: 'Calificaciones',  mode: 'simple',    raw:  '85, 90, 78, 92' },
  { label: 'Decimales',       mode: 'simple',    raw:  '2.5, 3.5, 4' },
  { label: 'Temperaturas',    mode: 'simple',    raw:  '18, 20, 22, 21' },
  { label: 'Ponderado',       mode: 'ponderado', rows: [{ value: '80', weight: '30' }, { value: '90', weight: '70' }] },
];

// ── Default state ─────────────────────────────────────────────────────────────

const DEF_RAW  = '10, 8, 9, 7';
const DEF_ROWS: WeightedRow[] = [{ value: '80', weight: '30' }, { value: '90', weight: '70' }];
const DEF_RESULT = computeSimple(DEF_RAW);

// ── Component ─────────────────────────────────────────────────────────────────

export function PromedioCalculator() {
  const [mode,   setMode]   = useState<Mode>('simple');
  const [raw,    setRaw]    = useState(DEF_RAW);
  const [rows,   setRows]   = useState<WeightedRow[]>(DEF_ROWS);
  const [result, setResult] = useState<CalcResult>(DEF_RESULT);
  const [copied, setCopied] = useState<'result' | 'proc' | null>(null);

  function handleCalc() {
    setResult(mode === 'simple' ? computeSimple(raw) : computeWeighted(rows));
  }

  function handleReset() {
    setMode('simple'); setRaw(DEF_RAW); setRows(DEF_ROWS);
    setResult(computeSimple(DEF_RAW));
  }

  function applyExample(ex: Example) {
    setMode(ex.mode);
    if (ex.mode === 'simple') {
      setRaw(ex.raw); setResult(computeSimple(ex.raw));
    } else {
      setRows(ex.rows); setResult(computeWeighted(ex.rows));
    }
  }

  function addRow() { setRows(prev => [...prev, { value: '', weight: '' }]); }
  function removeRow(i: number) { setRows(prev => prev.filter((_, idx) => idx !== i)); }
  function updateRow(i: number, field: keyof WeightedRow, val: string) {
    setRows(prev => prev.map((r, idx) => idx === i ? { ...r, [field]: val } : r));
  }

  function copyText(type: 'result' | 'proc') {
    if (result.type !== 'success') return;
    const text = type === 'result'
      ? `Promedio = ${fmtNum(result.average)}`
      : result.procedure.join('\n');
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  const preview = mode === 'simple' ? buildSimplePreview(raw) : buildWeightedPreview(rows);

  // Parsed chips for simple mode
  const parsedChips = raw
    .split(/[,\n;]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0 && !isNaN(parseFloat(s)))
    .map(s => parseFloat(s));

  const ok = result.type === 'success';

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de promedio
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-7">

            {/* Mode tabs */}
            <div className="mb-6">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Tipo de promedio</p>
              <div className="flex overflow-hidden rounded-lg border border-line" role="tablist" aria-label="Tipo de promedio">
                {(['simple', 'ponderado'] as Mode[]).map(m => (
                  <button
                    key={m}
                    role="tab"
                    aria-selected={mode === m}
                    onClick={() => setMode(m)}
                    className={`flex-1 py-3 text-sm font-bold capitalize transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      mode === m ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                    }`}
                  >
                    {m === 'simple' ? 'Promedio simple' : 'Promedio ponderado'}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-slate">
                {mode === 'simple'
                  ? 'Todos los valores tienen el mismo peso en el resultado.'
                  : 'Cada valor tiene un peso diferente que influye en el resultado.'}
              </p>
            </div>

            {mode === 'simple' ? (
              <>
                {/* Simple: textarea */}
                <div className="mb-4">
                  <label htmlFor="valores-input" className="mb-1.5 block text-xs font-bold text-ink">
                    Valores (separados por coma o por línea)
                  </label>
                  <textarea
                    id="valores-input"
                    value={raw}
                    onChange={e => setRaw(e.target.value)}
                    rows={4}
                    placeholder="10, 8, 9, 7"
                    className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3 font-mono text-sm text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    aria-label="Lista de valores para calcular el promedio"
                  />
                </div>

                {/* Parsed chips */}
                {parsedChips.length > 0 && (
                  <div className="mb-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">
                      Valores detectados ({parsedChips.length})
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {parsedChips.map((v, i) => (
                        <span
                          key={i}
                          className="inline-block rounded-md px-2.5 py-1 font-mono text-xs font-bold"
                          style={{ background: '#F0FAF9', border: '1px solid #DDF3F0', color: '#0a4f4d' }}
                        >
                          {fmtNum(v)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Weighted: rows */}
                <div className="mb-4">
                  <div className="mb-2 grid grid-cols-[1fr_1fr_auto] gap-2">
                    <p className="text-xs font-bold text-ink">Valor</p>
                    <p className="text-xs font-bold text-ink">Peso</p>
                    <span className="w-7" />
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
                          aria-label={`Valor ${i + 1}`}
                          className="h-10 w-full rounded-lg border border-line bg-white px-3 font-mono text-sm font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                        />
                        <input
                          type="text"
                          inputMode="decimal"
                          value={row.weight}
                          onChange={e => updateRow(i, 'weight', e.target.value)}
                          placeholder="30"
                          aria-label={`Peso del valor ${i + 1}`}
                          className="h-10 w-full rounded-lg border border-line bg-white px-3 font-mono text-sm font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                        />
                        <button
                          onClick={() => removeRow(i)}
                          disabled={rows.length <= 1}
                          aria-label={`Eliminar fila ${i + 1}`}
                          className="flex h-10 w-7 items-center justify-center rounded-lg text-muted transition-colors hover:text-red-500 disabled:opacity-30 focus:outline-none"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={addRow}
                    className="mt-2 rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-deep-teal focus:outline-none"
                  >
                    + Añadir valor
                  </button>
                  <p className="mt-2 text-[10px] text-muted">
                    Los pesos se usan como proporciones. No es necesario que sumen 100.
                  </p>
                </div>
              </>
            )}

            {/* Formula preview */}
            <div className="mb-6 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                Fórmula
              </p>
              <p className="break-all font-mono text-base font-bold" style={{ color: '#D8A31A' }}>
                {preview}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCalc}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                style={{ background: '#D8A31A' }}
              >
                {mode === 'simple' ? 'Calcular promedio' : 'Calcular promedio ponderado'}
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
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal focus:outline-none"
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado del promedio</p>
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

                {/* Values */}
                <div className="px-7 py-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Valores ingresados</p>
                  <div className="flex flex-wrap gap-1.5">
                    {result.values.map((v, i) => (
                      <span
                        key={i}
                        className="inline-block rounded-md px-2.5 py-1 font-mono text-xs font-bold"
                        style={{ background: '#EEF4F7', color: '#334e68' }}
                      >
                        {fmtNum(v)}{result.weights ? ` (×${fmtNum(result.weights[i])})` : ''}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sum + Count */}
                {result.mode === 'simple' && (
                  <div className="flex flex-wrap gap-4 px-7 py-4">
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Suma total</p>
                      <span className="inline-block rounded-lg px-3 py-1.5 font-mono text-base font-bold" style={{ background: '#EEF4F7', color: '#334e68' }}>
                        {fmtNum(result.sum)}
                      </span>
                    </div>
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Cantidad de valores</p>
                      <span className="inline-block rounded-lg px-3 py-1.5 font-mono text-base font-bold" style={{ background: '#EEF4F7', color: '#334e68' }}>
                        {result.count}
                      </span>
                    </div>
                  </div>
                )}

                {/* Average — dominant */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">
                    {result.mode === 'simple' ? 'Promedio' : 'Promedio ponderado'}
                  </p>
                  <div className="rounded-xl px-6 py-5" style={{ background: '#0a3535' }}>
                    <span className="font-mono text-4xl font-bold" style={{ color: '#D8A31A' }}>
                      {fmtNum(result.average)}
                    </span>
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
                  <p className="text-sm leading-relaxed text-slate">{result.interp}</p>
                </div>

                {/* Copy */}
                <div className="flex flex-wrap gap-2 px-7 py-4">
                  <button
                    onClick={() => copyText('result')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                    aria-live="polite"
                  >
                    {copied === 'result' ? '✓ Resultado copiado' : 'Copiar resultado'}
                  </button>
                  <button
                    onClick={() => copyText('proc')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                  >
                    {copied === 'proc' ? '✓ Procedimiento copiado' : 'Copiar procedimiento'}
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
