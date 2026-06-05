'use client';

import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type ModeId = 'hipotenusa' | 'cateto-a' | 'cateto-b';
type Unit   = '' | 'mm' | 'cm' | 'm' | 'km';

// ── Formatting ────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  if (!isFinite(n)) return '?';
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(4)).toString();
}

function unitL(u: Unit): string { return u || 'unidades'; }

// ── Mode config ───────────────────────────────────────────────────────────────

interface InputDef { id: string; label: string; placeholder: string }

interface ModeCfg {
  label:       string;
  symbol:      string;
  inputs:      InputDef[];
  defaults:    Record<string, string>;
  preview:     string;
  buttonLabel: string;
}

const MODES: Record<ModeId, ModeCfg> = {
  hipotenusa: {
    label:       'Calcular hipotenusa',
    symbol:      'c',
    inputs: [
      { id: 'a', label: 'Cateto A', placeholder: '3' },
      { id: 'b', label: 'Cateto B', placeholder: '4' },
    ],
    defaults:    { a: '3', b: '4' },
    preview:     'a² + b² = c²  ·  c = √(a² + b²)',
    buttonLabel: 'hipotenusa',
  },
  'cateto-a': {
    label:       'Calcular cateto A',
    symbol:      'a',
    inputs: [
      { id: 'c', label: 'Hipotenusa', placeholder: '5' },
      { id: 'b', label: 'Cateto B',   placeholder: '4' },
    ],
    defaults:    { c: '5', b: '4' },
    preview:     'a² + b² = c²  ·  a = √(c² - b²)',
    buttonLabel: 'cateto A',
  },
  'cateto-b': {
    label:       'Calcular cateto B',
    symbol:      'b',
    inputs: [
      { id: 'c', label: 'Hipotenusa', placeholder: '13' },
      { id: 'a', label: 'Cateto A',   placeholder: '5'  },
    ],
    defaults:    { c: '13', a: '5' },
    preview:     'a² + b² = c²  ·  b = √(c² - a²)',
    buttonLabel: 'cateto B',
  },
};

const MODE_ORDER: ModeId[] = ['hipotenusa', 'cateto-a', 'cateto-b'];

// ── Result types ──────────────────────────────────────────────────────────────

interface PythagorasSuccess {
  type:           'success';
  mode:           ModeId;
  a:              number;
  b:              number;
  c:              number;
  resultLabel:    string;
  resultValue:    number;
  formula:        string;
  procedure:      string;
  verification:   string;
  interpretation: string;
}

type CalcResult = PythagorasSuccess | { type: 'error'; message: string };

// ── Calculation ────────────────────────────────────────────────────────────────

function calculate(mode: ModeId, vals: Record<string, string>, unit: Unit): CalcResult {
  const cfg = MODES[mode];

  for (const inp of cfg.inputs) {
    if (!vals[inp.id]?.trim()) return { type: 'error', message: 'Introduce todos los valores necesarios.' };
    const n = parseFloat(vals[inp.id]);
    if (isNaN(n)) return { type: 'error', message: 'Cada lado debe ser un número válido.' };
    if (n <= 0)   return { type: 'error', message: 'Los lados deben ser mayores que 0.' };
  }

  const approx = (n: number) => Number.isInteger(n) ? '=' : '≈';

  if (mode === 'hipotenusa') {
    const a   = parseFloat(vals.a);
    const b   = parseFloat(vals.b);
    const cSq = a * a + b * b;
    const c   = Math.sqrt(cSq);
    if (!isFinite(c)) return { type: 'error', message: 'No se pudo calcular el lado faltante de forma confiable.' };

    const procedure = [
      `c = √(${fmt(a)}² + ${fmt(b)}²)`,
      `c = √(${fmt(a * a)} + ${fmt(b * b)})`,
      `c = √${fmt(cSq)}`,
      `c ${approx(c)} ${fmt(c)}`,
    ].join('\n');

    const verification = [
      `${fmt(a)}² + ${fmt(b)}² = ${fmt(c)}²`,
      `${fmt(a * a)} + ${fmt(b * b)} = ${fmt(cSq)}`,
    ].join('\n');

    return {
      type: 'success', mode, a, b, c,
      resultLabel:    'Hipotenusa',
      resultValue:    c,
      formula:        'c = √(a² + b²)',
      procedure,
      verification,
      interpretation: `La hipotenusa del triángulo rectángulo ${approx(c) === '=' ? 'es' : 'es aproximadamente'} ${fmt(c)} ${unitL(unit)}.`,
    };
  }

  if (mode === 'cateto-a') {
    const c = parseFloat(vals.c);
    const b = parseFloat(vals.b);
    if (c <= b) return { type: 'error', message: 'La hipotenusa debe ser mayor que el cateto conocido.' };
    const aSq = c * c - b * b;
    if (aSq < 0) return { type: 'error', message: 'La hipotenusa debe ser mayor que el cateto conocido.' };
    const a = Math.sqrt(aSq);
    if (!isFinite(a)) return { type: 'error', message: 'No se pudo calcular el lado faltante de forma confiable.' };

    const procedure = [
      `a = √(${fmt(c)}² - ${fmt(b)}²)`,
      `a = √(${fmt(c * c)} - ${fmt(b * b)})`,
      `a = √${fmt(aSq)}`,
      `a ${approx(a)} ${fmt(a)}`,
    ].join('\n');

    const verification = [
      `${fmt(a)}² + ${fmt(b)}² = ${fmt(c)}²`,
      `${fmt(a * a)} + ${fmt(b * b)} = ${fmt(c * c)}`,
    ].join('\n');

    return {
      type: 'success', mode, a, b, c,
      resultLabel:    'Cateto A',
      resultValue:    a,
      formula:        'a = √(c² - b²)',
      procedure,
      verification,
      interpretation: `El cateto A del triángulo rectángulo ${approx(a) === '=' ? 'mide' : 'mide aproximadamente'} ${fmt(a)} ${unitL(unit)}.`,
    };
  }

  // cateto-b
  const c = parseFloat(vals.c);
  const a = parseFloat(vals.a);
  if (c <= a) return { type: 'error', message: 'La hipotenusa debe ser mayor que el cateto conocido.' };
  const bSq = c * c - a * a;
  if (bSq < 0) return { type: 'error', message: 'La hipotenusa debe ser mayor que el cateto conocido.' };
  const b = Math.sqrt(bSq);
  if (!isFinite(b)) return { type: 'error', message: 'No se pudo calcular el lado faltante de forma confiable.' };

  const procedure = [
    `b = √(${fmt(c)}² - ${fmt(a)}²)`,
    `b = √(${fmt(c * c)} - ${fmt(a * a)})`,
    `b = √${fmt(bSq)}`,
    `b ${approx(b)} ${fmt(b)}`,
  ].join('\n');

  const verification = [
    `${fmt(a)}² + ${fmt(b)}² = ${fmt(c)}²`,
    `${fmt(a * a)} + ${fmt(b * b)} = ${fmt(c * c)}`,
  ].join('\n');

  return {
    type: 'success', mode, a, b, c,
    resultLabel:    'Cateto B',
    resultValue:    b,
    formula:        'b = √(c² - a²)',
    procedure,
    verification,
    interpretation: `El cateto B del triángulo rectángulo ${approx(b) === '=' ? 'mide' : 'mide aproximadamente'} ${fmt(b)} ${unitL(unit)}.`,
  };
}

// ── Input rows helper ─────────────────────────────────────────────────────────

function getInputRows(res: PythagorasSuccess, unit: Unit) {
  const U = unitL(unit);
  if (res.mode === 'hipotenusa') return [
    { label: 'Cateto A', value: `${fmt(res.a)} ${U}` },
    { label: 'Cateto B', value: `${fmt(res.b)} ${U}` },
  ];
  if (res.mode === 'cateto-a') return [
    { label: 'Hipotenusa', value: `${fmt(res.c)} ${U}` },
    { label: 'Cateto B',   value: `${fmt(res.b)} ${U}` },
  ];
  return [
    { label: 'Hipotenusa', value: `${fmt(res.c)} ${U}` },
    { label: 'Cateto A',   value: `${fmt(res.a)} ${U}` },
  ];
}

// ── Examples ──────────────────────────────────────────────────────────────────

const EXAMPLES: { label: string; mode: ModeId; vals: Record<string, string>; unit: Unit }[] = [
  { label: '3, 4, c',   mode: 'hipotenusa', vals: { a: '3', b: '4'  }, unit: 'cm' },
  { label: '5, 12, c',  mode: 'hipotenusa', vals: { a: '5', b: '12' }, unit: 'cm' },
  { label: 'c 5, b 4',  mode: 'cateto-a',   vals: { c: '5', b: '4'  }, unit: 'cm' },
  { label: 'c 13, a 5', mode: 'cateto-b',   vals: { c: '13', a: '5' }, unit: 'cm' },
  { label: 'Decimal',   mode: 'hipotenusa', vals: { a: '2.5', b: '6' }, unit: 'cm' },
];

const UNITS: { id: Unit; label: string }[] = [
  { id: '',   label: 'Sin unidad' },
  { id: 'mm', label: 'mm'        },
  { id: 'cm', label: 'cm'        },
  { id: 'm',  label: 'm'         },
  { id: 'km', label: 'km'        },
];

// ── Default state ─────────────────────────────────────────────────────────────

const DEF_MODE: ModeId            = 'hipotenusa';
const DEF_UNIT: Unit              = 'cm';
const DEF_VALS                    = { ...MODES[DEF_MODE].defaults };
const DEF_RESULT                  = calculate(DEF_MODE, DEF_VALS, DEF_UNIT);

// ── Component ─────────────────────────────────────────────────────────────────

export function PitagorasCalculator() {
  const [mode,   setMode]   = useState<ModeId>(DEF_MODE);
  const [vals,   setVals]   = useState<Record<string, string>>(DEF_VALS);
  const [unit,   setUnit]   = useState<Unit>(DEF_UNIT);
  const [result, setResult] = useState<CalcResult>(DEF_RESULT);
  const [copied, setCopied] = useState<'resultado' | 'formula' | null>(null);

  const cfg = MODES[mode];

  function handleModeChange(m: ModeId) {
    setMode(m);
    setVals({ ...MODES[m].defaults });
    setResult(calculate(m, MODES[m].defaults, unit));
  }

  function handleCalc()  { setResult(calculate(mode, vals, unit)); }

  function handleReset() {
    setMode(DEF_MODE);
    setVals(DEF_VALS);
    setUnit(DEF_UNIT);
    setResult(calculate(DEF_MODE, DEF_VALS, DEF_UNIT));
  }

  function applyExample(ex: typeof EXAMPLES[0]) {
    setMode(ex.mode);
    setVals({ ...ex.vals });
    setUnit(ex.unit);
    setResult(calculate(ex.mode, ex.vals, ex.unit));
  }

  function updateVal(id: string, v: string) {
    setVals(prev => ({ ...prev, [id]: v }));
  }

  function copyText(type: 'resultado' | 'formula') {
    if (result.type !== 'success') return;
    const text = type === 'resultado'
      ? `${result.resultLabel} = ${fmt(result.resultValue)} ${unitL(unit)}`
      : result.formula;
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">
        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de Pitágoras
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-6">

            {/* Mode selector */}
            <div className="mb-5">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Modo de cálculo</p>
              <div className="grid grid-cols-3 gap-1.5" role="tablist" aria-label="Selecciona el modo de cálculo">
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
                    <span className="block text-base leading-none" aria-hidden="true">{MODES[m].symbol}</span>
                    <span className="mt-0.5 block leading-tight">{MODES[m].label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic inputs */}
            <div className="mb-4 flex flex-col gap-3">
              {cfg.inputs.map(inp => (
                <div key={inp.id}>
                  <label htmlFor={`pit-${inp.id}`} className="mb-1 block text-xs font-bold text-ink">
                    {inp.label}
                  </label>
                  <input
                    id={`pit-${inp.id}`}
                    type="text"
                    inputMode="decimal"
                    value={vals[inp.id] ?? ''}
                    onChange={e => updateVal(inp.id, e.target.value)}
                    placeholder={inp.placeholder}
                    className="h-11 w-full rounded-xl border border-line bg-white px-3 text-center font-mono text-lg font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    aria-label={inp.label}
                  />
                </div>
              ))}
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
                Fórmula
              </p>
              <p className="break-all font-mono text-sm font-bold" style={{ color: '#D8A31A' }}>
                {cfg.preview}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCalc}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                style={{ background: '#D8A31A' }}
              >
                Calcular {cfg.buttonLabel}
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado de Pitágoras</p>
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

                {/* Mode badge */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Modo</p>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-bold"
                    style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  >
                    {MODES[result.mode].symbol} {MODES[result.mode].label}
                  </span>
                </div>

                {/* Input values used */}
                <div className="px-7 py-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Valores ingresados</p>
                  <ul className="space-y-1">
                    {getInputRows(result, unit).map(row => (
                      <li key={row.label} className="flex items-baseline justify-between gap-2">
                        <span className="text-xs text-slate">{row.label}</span>
                        <span className="font-mono text-sm font-bold text-ink">{row.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formula */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Fórmula</p>
                  <p className="font-mono text-sm font-semibold text-ink">{result.formula}</p>
                </div>

                {/* Primary result */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                  <div className="rounded-xl px-6 py-5" style={{ background: '#0a3535' }}>
                    <p className="mb-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                      {result.resultLabel}
                    </p>
                    <p className="break-all font-mono text-2xl font-bold" style={{ color: '#D8A31A' }}>
                      {fmt(result.resultValue)} {unitL(unit)}
                    </p>
                  </div>
                </div>

                {/* Procedure */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Procedimiento</p>
                  <pre className="whitespace-pre-wrap break-all font-mono text-xs" style={{ color: '#334e68' }}>{result.procedure}</pre>
                </div>

                {/* Verification */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Comprobación</p>
                  <pre className="whitespace-pre-wrap font-mono text-xs" style={{ color: '#334e68' }}>{result.verification}</pre>
                </div>

                {/* Interpretation */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Interpretación</p>
                  <p className="text-sm leading-relaxed text-slate">{result.interpretation}</p>
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
                    onClick={() => copyText('formula')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                  >
                    {copied === 'formula' ? '✓ Fórmula copiada' : 'Copiar fórmula'}
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
