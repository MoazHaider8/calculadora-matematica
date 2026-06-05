'use client';

import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type InputMode = 'radio' | 'diametro' | 'circunferencia' | 'area';
type Unit      = '' | 'mm' | 'cm' | 'm' | 'km';

// ── Formatting ────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  if (!isFinite(n)) return '?';
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(4)).toString();
}

function unitL(u: Unit): string  { return u || 'unidades'; }
function unitSq(u: Unit): string { return u ? `${u}²` : 'unidades²'; }

// ── Result types ──────────────────────────────────────────────────────────────

interface CircleSuccess {
  type:           'success';
  mode:           InputMode;
  radio:          number;
  diametro:       number;
  circunferencia: number;
  area:           number;
  formulas:       string[];
  procedure:      string;
  interpretation: string;
}

type CalcResult = CircleSuccess | { type: 'error'; message: string };

// ── Calculation ────────────────────────────────────────────────────────────────

function calculate(mode: InputMode, raw: string, unit: Unit): CalcResult {
  const trimmed = raw.trim();
  if (!trimmed) return { type: 'error', message: 'Introduce un valor para calcular el círculo.' };
  const val = parseFloat(trimmed);
  if (isNaN(val)) return { type: 'error', message: 'El valor debe ser un número válido.' };
  if (val <= 0)   return { type: 'error', message: 'El valor debe ser mayor que 0.' };

  let r: number, d: number, c: number, a: number;
  let formulas: string[];
  let procedure: string;
  let interpretation: string;

  if (mode === 'radio') {
    r = val;
    d = 2 * r;
    c = 2 * Math.PI * r;
    a = Math.PI * r ** 2;
    formulas    = ['d = 2r', 'C = 2πr', 'A = πr²'];
    procedure   = `d = 2 × ${fmt(r)} = ${fmt(d)}\nC = 2 × π × ${fmt(r)} ≈ ${fmt(c)}\nA = π × ${fmt(r)}² ≈ ${fmt(a)}`;
    interpretation = `El círculo tiene radio ${fmt(r)} ${unitL(unit)} y una superficie aproximada de ${fmt(a)} ${unitSq(unit)}.`;
  } else if (mode === 'diametro') {
    d = val;
    r = d / 2;
    c = Math.PI * d;
    a = Math.PI * r ** 2;
    formulas    = ['r = d / 2', 'C = πd', 'A = π(d / 2)²'];
    procedure   = `r = ${fmt(d)} / 2 = ${fmt(r)}\nC = π × ${fmt(d)} ≈ ${fmt(c)}\nA = π × ${fmt(r)}² ≈ ${fmt(a)}`;
    interpretation = `El círculo tiene diámetro ${fmt(d)} ${unitL(unit)}, radio ${fmt(r)} ${unitL(unit)} y una circunferencia de ${fmt(c)} ${unitL(unit)}.`;
  } else if (mode === 'circunferencia') {
    c = val;
    r = c / (2 * Math.PI);
    d = c / Math.PI;
    a = Math.PI * r ** 2;
    formulas    = ['r = C / 2π', 'd = C / π', 'A = πr²'];
    procedure   = `r = ${fmt(c)} / (2π) ≈ ${fmt(r)}\nd = ${fmt(c)} / π ≈ ${fmt(d)}\nA = π × ${fmt(r)}² ≈ ${fmt(a)}`;
    interpretation = `A partir de la circunferencia de ${fmt(c)} ${unitL(unit)}, el radio del círculo es aproximadamente ${fmt(r)} ${unitL(unit)}.`;
  } else {
    a = val;
    r = Math.sqrt(a / Math.PI);
    d = 2 * r;
    c = 2 * Math.PI * r;
    formulas    = ['r = √(A / π)', 'd = 2r', 'C = 2πr'];
    procedure   = `r = √(${fmt(a)} / π) ≈ ${fmt(r)}\nd = 2 × ${fmt(r)} ≈ ${fmt(d)}\nC = 2 × π × ${fmt(r)} ≈ ${fmt(c)}`;
    interpretation = `El círculo con área ${fmt(a)} ${unitSq(unit)} tiene un radio aproximado de ${fmt(r)} ${unitL(unit)}.`;
  }

  if (!isFinite(r) || !isFinite(d) || !isFinite(c) || !isFinite(a)) {
    return { type: 'error', message: 'No se pudo calcular el círculo de forma confiable.' };
  }

  return { type: 'success', mode, radio: r, diametro: d, circunferencia: c, area: a, formulas, procedure, interpretation };
}

// ── Mode config ───────────────────────────────────────────────────────────────

const MODE_ORDER: InputMode[] = ['radio', 'diametro', 'circunferencia', 'area'];

const MODE_LABELS: Record<InputMode, string> = {
  radio:          'Con radio',
  diametro:       'Con diámetro',
  circunferencia: 'Con circunferencia',
  area:           'Con área',
};

const MODE_SYMBOLS: Record<InputMode, string> = {
  radio:          'r',
  diametro:       'd',
  circunferencia: 'C',
  area:           'A',
};

const MODE_DEFAULTS: Record<InputMode, string> = {
  radio:          '4',
  diametro:       '10',
  circunferencia: '25.1327',
  area:           '50.2655',
};

const FORMULA_PREVIEW: Record<InputMode, string> = {
  radio:          'd = 2r  ·  C = 2πr  ·  A = πr²',
  diametro:       'r = d/2  ·  C = πd  ·  A = π(d/2)²',
  circunferencia: 'r = C/2π  ·  d = C/π  ·  A = πr²',
  area:           'r = √(A/π)  ·  d = 2r  ·  C = 2πr',
};

// ── Examples ──────────────────────────────────────────────────────────────────

const EXAMPLES: { label: string; mode: InputMode; value: string; unit: Unit }[] = [
  { label: 'Radio 4',        mode: 'radio',          value: '4',       unit: 'cm' },
  { label: 'Diámetro 10',   mode: 'diametro',       value: '10',      unit: 'cm' },
  { label: 'Circunf. 25.13', mode: 'circunferencia', value: '25.1327', unit: 'cm' },
  { label: 'Área 50.27',    mode: 'area',            value: '50.2655', unit: 'cm' },
  { label: 'Radio 7.5',     mode: 'radio',           value: '7.5',     unit: 'cm' },
];

const UNITS: { id: Unit; label: string }[] = [
  { id: '',   label: 'Sin unidad' },
  { id: 'mm', label: 'mm'        },
  { id: 'cm', label: 'cm'        },
  { id: 'm',  label: 'm'         },
  { id: 'km', label: 'km'        },
];

// ── Default state ─────────────────────────────────────────────────────────────

const DEF_MODE: InputMode = 'radio';
const DEF_VALUE           = '4';
const DEF_UNIT: Unit      = 'cm';
const DEF_RESULT          = calculate(DEF_MODE, DEF_VALUE, DEF_UNIT);

// ── Component ─────────────────────────────────────────────────────────────────

export function CirculosCalculator() {
  const [mode,   setMode]   = useState<InputMode>(DEF_MODE);
  const [value,  setValue]  = useState(DEF_VALUE);
  const [unit,   setUnit]   = useState<Unit>(DEF_UNIT);
  const [result, setResult] = useState<CalcResult>(DEF_RESULT);
  const [copied, setCopied] = useState<'resultado' | 'formulas' | null>(null);

  function handleModeChange(m: InputMode) {
    const def = MODE_DEFAULTS[m];
    setMode(m);
    setValue(def);
    setResult(calculate(m, def, unit));
  }

  function handleCalc()  { setResult(calculate(mode, value, unit)); }

  function handleReset() {
    setMode(DEF_MODE);
    setValue(DEF_VALUE);
    setUnit(DEF_UNIT);
    setResult(calculate(DEF_MODE, DEF_VALUE, DEF_UNIT));
  }

  function applyExample(ex: typeof EXAMPLES[0]) {
    setMode(ex.mode);
    setValue(ex.value);
    setUnit(ex.unit);
    setResult(calculate(ex.mode, ex.value, ex.unit));
  }

  function copyText(type: 'resultado' | 'formulas') {
    if (result.type !== 'success') return;
    const text = type === 'resultado'
      ? `Radio = ${fmt(result.radio)} ${unitL(unit)}\nDiámetro = ${fmt(result.diametro)} ${unitL(unit)}\nCircunferencia ≈ ${fmt(result.circunferencia)} ${unitL(unit)}\nÁrea ≈ ${fmt(result.area)} ${unitSq(unit)}`
      : result.formulas.join('\n');
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">
        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de círculos
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-6">

            {/* Mode selector */}
            <div className="mb-5">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Tipo de entrada</p>
              <div className="grid grid-cols-2 gap-1.5" role="tablist" aria-label="Selecciona el tipo de entrada">
                {MODE_ORDER.map(m => (
                  <button
                    key={m}
                    role="tab"
                    aria-selected={mode === m}
                    onClick={() => handleModeChange(m)}
                    className={`rounded-lg px-2 py-2.5 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      mode === m ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                    }`}
                  >
                    <span className="block text-base leading-none" aria-hidden="true">{MODE_SYMBOLS[m]}</span>
                    <span className="mt-0.5 block leading-tight">{MODE_LABELS[m]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input value */}
            <div className="mb-4">
              <label htmlFor="circ-value" className="mb-1 block text-xs font-bold text-ink">
                {MODE_LABELS[mode]}
              </label>
              <input
                id="circ-value"
                type="text"
                inputMode="decimal"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={MODE_DEFAULTS[mode]}
                className="h-11 w-full rounded-xl border border-line bg-white px-3 text-center font-mono text-lg font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                aria-label={MODE_LABELS[mode]}
              />
            </div>

            {/* Unit selector */}
            <div className="mb-5">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Unidad</p>
              <div className="flex flex-wrap gap-1.5">
                {UNITS.map(u => (
                  <button
                    key={u.id}
                    onClick={() => setUnit(u.id)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      unit === u.id ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                    }`}
                    aria-pressed={unit === u.id}
                  >
                    {u.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Formula preview */}
            <div className="mb-5 rounded-xl px-4 py-3" style={{ background: '#0a3535' }}>
              <p className="mb-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                Fórmulas
              </p>
              <p className="break-all font-mono text-sm font-bold" style={{ color: '#D8A31A' }}>
                {FORMULA_PREVIEW[mode]}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCalc}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                style={{ background: '#D8A31A' }}
              >
                Calcular círculo
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado del círculo</p>
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

                {/* Type badge */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Tipo de entrada</p>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-bold"
                    style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  >
                    {MODE_SYMBOLS[result.mode]} {MODE_LABELS[result.mode]}
                  </span>
                </div>

                {/* Circle measurements */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">Medidas del círculo</p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
                    <dl className="space-y-2">
                      {[
                        { label: 'Radio',          val: `${fmt(result.radio)} ${unitL(unit)}`            },
                        { label: 'Diámetro',       val: `${fmt(result.diametro)} ${unitL(unit)}`         },
                        { label: 'Circunferencia', val: `≈ ${fmt(result.circunferencia)} ${unitL(unit)}` },
                        { label: 'Área',           val: `≈ ${fmt(result.area)} ${unitSq(unit)}`          },
                      ].map(row => (
                        <div key={row.label} className="flex items-baseline justify-between gap-2">
                          <dt className="text-xs font-semibold" style={{ color: 'rgba(221,243,240,0.55)' }}>{row.label}</dt>
                          <dd className="font-mono text-sm font-bold" style={{ color: '#D8A31A' }}>{row.val}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                {/* Formulas */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Fórmulas</p>
                  <ul className="space-y-1">
                    {result.formulas.map(f => (
                      <li key={f} className="font-mono text-sm font-semibold text-ink">{f}</li>
                    ))}
                  </ul>
                </div>

                {/* Procedure */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Procedimiento</p>
                  <pre className="whitespace-pre-wrap break-all font-mono text-xs" style={{ color: '#334e68' }}>{result.procedure}</pre>
                </div>

                {/* Interpretation */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Interpretación</p>
                  <p className="text-sm leading-relaxed text-slate">{result.interpretation}</p>
                </div>

                {/* Copy actions */}
                <div className="flex flex-wrap gap-2 px-7 py-4">
                  <button
                    onClick={() => copyText('resultado')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                    aria-live="polite"
                  >
                    {copied === 'resultado' ? '✓ Resultado copiado' : 'Copiar resultado'}
                  </button>
                  <button
                    onClick={() => copyText('formulas')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                  >
                    {copied === 'formulas' ? '✓ Fórmulas copiadas' : 'Copiar fórmulas'}
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
