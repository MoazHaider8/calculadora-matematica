'use client';

import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type ShapeId = 'cuadrado' | 'rectangulo' | 'triangulo' | 'circulo' | 'trapecio' | 'paralelogramo' | 'rombo';
type Unit    = '' | 'mm' | 'cm' | 'm' | 'km';

// ── Formatting ────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  if (!isFinite(n)) return '?';
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(4)).toString();
}

function unitSq(u: Unit): string {
  if (!u) return 'unidades²';
  return `${u}²`;
}

// ── Shape config ──────────────────────────────────────────────────────────────

interface InputDef { id: string; label: string; placeholder: string }

interface ShapeCfg {
  label:    string;
  symbol:   string;
  formula:  string;
  inputs:   InputDef[];
  defaults: Record<string, string>;
  compute:  (v: Record<string, number>) => number;
  proc:     (v: Record<string, number>) => string;
  interp:   (area: number, u: Unit) => string;
}

const SHAPES: Record<ShapeId, ShapeCfg> = {
  cuadrado: {
    label: 'Cuadrado', symbol: '□',
    formula: 'A = lado²',
    inputs:  [{ id: 'lado', label: 'Lado', placeholder: '6' }],
    defaults: { lado: '6' },
    compute: v => v.lado ** 2,
    proc:    v => `A = ${fmt(v.lado)}² = ${fmt(v.lado ** 2)}`,
    interp:  (a, u) => `El cuadrado tiene una superficie de ${fmt(a)} ${unitSq(u)}.`,
  },
  rectangulo: {
    label: 'Rectángulo', symbol: '▭',
    formula: 'A = base × altura',
    inputs:  [{ id: 'base', label: 'Base', placeholder: '8' }, { id: 'altura', label: 'Altura', placeholder: '5' }],
    defaults: { base: '8', altura: '5' },
    compute: v => v.base * v.altura,
    proc:    v => `A = ${fmt(v.base)} × ${fmt(v.altura)} = ${fmt(v.base * v.altura)}`,
    interp:  (a, u) => `El rectángulo tiene una superficie de ${fmt(a)} ${unitSq(u)}.`,
  },
  triangulo: {
    label: 'Triángulo', symbol: '△',
    formula: 'A = base × altura / 2',
    inputs:  [{ id: 'base', label: 'Base', placeholder: '10' }, { id: 'altura', label: 'Altura', placeholder: '6' }],
    defaults: { base: '10', altura: '6' },
    compute: v => v.base * v.altura / 2,
    proc:    v => `A = ${fmt(v.base)} × ${fmt(v.altura)} / 2 = ${fmt(v.base * v.altura / 2)}`,
    interp:  (a, u) => `El triángulo tiene una superficie de ${fmt(a)} ${unitSq(u)}.`,
  },
  circulo: {
    label: 'Círculo', symbol: '○',
    formula: 'A = πr²',
    inputs:  [{ id: 'radio', label: 'Radio', placeholder: '4' }],
    defaults: { radio: '4' },
    compute: v => Math.PI * v.radio ** 2,
    proc:    v => `A = π × ${fmt(v.radio)}² = π × ${fmt(v.radio ** 2)} ≈ ${fmt(Math.PI * v.radio ** 2)}`,
    interp:  (a, u) => `El círculo tiene una superficie de ${fmt(a)} ${unitSq(u)}.`,
  },
  trapecio: {
    label: 'Trapecio', symbol: '⌂',
    formula: 'A = (B + b) × h / 2',
    inputs: [
      { id: 'baseM', label: 'Base mayor (B)', placeholder: '10' },
      { id: 'basem', label: 'Base menor (b)', placeholder: '6'  },
      { id: 'altura', label: 'Altura (h)',    placeholder: '4'  },
    ],
    defaults: { baseM: '10', basem: '6', altura: '4' },
    compute: v => (v.baseM + v.basem) * v.altura / 2,
    proc:    v => `A = (${fmt(v.baseM)} + ${fmt(v.basem)}) × ${fmt(v.altura)} / 2 = ${fmt((v.baseM + v.basem) * v.altura / 2)}`,
    interp:  (a, u) => `El trapecio tiene una superficie de ${fmt(a)} ${unitSq(u)}.`,
  },
  paralelogramo: {
    label: 'Paralelogramo', symbol: '▱',
    formula: 'A = base × altura',
    inputs:  [{ id: 'base', label: 'Base', placeholder: '9' }, { id: 'altura', label: 'Altura', placeholder: '4' }],
    defaults: { base: '9', altura: '4' },
    compute: v => v.base * v.altura,
    proc:    v => `A = ${fmt(v.base)} × ${fmt(v.altura)} = ${fmt(v.base * v.altura)}`,
    interp:  (a, u) => `El paralelogramo tiene una superficie de ${fmt(a)} ${unitSq(u)}.`,
  },
  rombo: {
    label: 'Rombo', symbol: '◇',
    formula: 'A = D × d / 2',
    inputs: [
      { id: 'diagM', label: 'Diagonal mayor (D)', placeholder: '12' },
      { id: 'diagm', label: 'Diagonal menor (d)', placeholder: '8'  },
    ],
    defaults: { diagM: '12', diagm: '8' },
    compute: v => v.diagM * v.diagm / 2,
    proc:    v => `A = ${fmt(v.diagM)} × ${fmt(v.diagm)} / 2 = ${fmt(v.diagM * v.diagm / 2)}`,
    interp:  (a, u) => `El rombo tiene una superficie de ${fmt(a)} ${unitSq(u)}.`,
  },
};

const SHAPE_ORDER: ShapeId[] = ['cuadrado', 'rectangulo', 'triangulo', 'circulo', 'trapecio', 'paralelogramo', 'rombo'];

// ── Calculation ────────────────────────────────────────────────────────────────

type AreaResult =
  | { type: 'success'; shape: ShapeId; area: number; procedure: string; interpretation: string }
  | { type: 'error'; message: string };

function computeArea(shape: ShapeId, vals: Record<string, string>, unit: Unit): AreaResult {
  const cfg = SHAPES[shape];
  const parsed: Record<string, number> = {};
  for (const inp of cfg.inputs) {
    if (!vals[inp.id]?.trim()) return { type: 'error', message: 'Introduce todos los valores necesarios.' };
    const n = parseFloat(vals[inp.id]);
    if (isNaN(n)) return { type: 'error', message: 'Cada medida debe ser un número válido.' };
    if (n <= 0)   return { type: 'error', message: 'Las medidas deben ser mayores que 0.' };
    parsed[inp.id] = n;
  }
  const area = cfg.compute(parsed);
  if (!isFinite(area)) return { type: 'error', message: 'No se pudo calcular el área de forma confiable.' };
  return {
    type: 'success',
    shape,
    area,
    procedure:     cfg.proc(parsed),
    interpretation: cfg.interp(area, unit),
  };
}

// ── Examples ──────────────────────────────────────────────────────────────────

const EXAMPLES: { label: string; shape: ShapeId; vals: Record<string, string>; unit: Unit }[] = [
  { label: 'Rectángulo 8×5', shape: 'rectangulo',   vals: { base: '8', altura: '5' },             unit: 'cm' },
  { label: 'Cuadrado lado 6', shape: 'cuadrado',    vals: { lado: '6' },                           unit: 'cm' },
  { label: 'Triángulo 10×6',  shape: 'triangulo',   vals: { base: '10', altura: '6' },             unit: 'cm' },
  { label: 'Círculo radio 4', shape: 'circulo',     vals: { radio: '4' },                          unit: 'm'  },
  { label: 'Trapecio 10,6,4', shape: 'trapecio',    vals: { baseM: '10', basem: '6', altura: '4' }, unit: 'cm' },
  { label: 'Rombo 12,8',      shape: 'rombo',       vals: { diagM: '12', diagm: '8' },             unit: 'cm' },
];

const UNITS: { id: Unit; label: string }[] = [
  { id: '',   label: 'Sin unidad' },
  { id: 'mm', label: 'mm'        },
  { id: 'cm', label: 'cm'        },
  { id: 'm',  label: 'm'         },
  { id: 'km', label: 'km'        },
];

// ── Default state ─────────────────────────────────────────────────────────────

const DEF_SHAPE: ShapeId = 'rectangulo';
const DEF_UNIT: Unit     = 'cm';
const DEF_VALS           = { ...SHAPES[DEF_SHAPE].defaults };
const DEF_RESULT         = computeArea(DEF_SHAPE, DEF_VALS, DEF_UNIT);

// ── Component ─────────────────────────────────────────────────────────────────

export function AreaCalculator() {
  const [shape,  setShape]  = useState<ShapeId>(DEF_SHAPE);
  const [vals,   setVals]   = useState<Record<string, string>>(DEF_VALS);
  const [unit,   setUnit]   = useState<Unit>(DEF_UNIT);
  const [result, setResult] = useState<AreaResult>(DEF_RESULT);
  const [copied, setCopied] = useState<'resultado' | 'formula' | null>(null);

  const cfg = SHAPES[shape];

  function handleShapeChange(s: ShapeId) {
    setShape(s);
    setVals({ ...SHAPES[s].defaults });
    setResult(computeArea(s, SHAPES[s].defaults, unit));
  }

  function handleCalc() {
    setResult(computeArea(shape, vals, unit));
  }

  function handleReset() {
    setShape(DEF_SHAPE);
    setVals(DEF_VALS);
    setUnit(DEF_UNIT);
    setResult(computeArea(DEF_SHAPE, DEF_VALS, DEF_UNIT));
  }

  function applyExample(ex: typeof EXAMPLES[0]) {
    setShape(ex.shape);
    setVals({ ...ex.vals });
    setUnit(ex.unit);
    setResult(computeArea(ex.shape, ex.vals, ex.unit));
  }

  function updateVal(id: string, v: string) {
    setVals(prev => ({ ...prev, [id]: v }));
  }

  function copyText(type: 'resultado' | 'formula') {
    if (result.type !== 'success') return;
    const text = type === 'resultado'
      ? `${cfg.label}: Área = ${fmt(result.area)} ${unitSq(unit)}`
      : cfg.formula;
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  // Build live formula preview with values substituted where possible
  function buildPreview(): string {
    const allFilled = cfg.inputs.every(inp => vals[inp.id]?.trim() && !isNaN(parseFloat(vals[inp.id])));
    if (!allFilled) return cfg.formula;
    const v: Record<string, number> = {};
    cfg.inputs.forEach(inp => { v[inp.id] = parseFloat(vals[inp.id]); });
    return cfg.proc(v);
  }

  const ok = result.type === 'success';

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">
        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de área
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-6">

            {/* Shape selector */}
            <div className="mb-5">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Figura geométrica</p>
              <div
                className="grid gap-1"
                style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
                role="tablist"
                aria-label="Selecciona la figura"
              >
                {SHAPE_ORDER.map(s => (
                  <button
                    key={s}
                    role="tab"
                    aria-selected={shape === s}
                    onClick={() => handleShapeChange(s)}
                    className={`rounded-lg px-1 py-2 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      shape === s ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                    }`}
                  >
                    <span className="block text-base leading-none" aria-hidden="true">{SHAPES[s].symbol}</span>
                    <span className="mt-0.5 block text-[10px] leading-tight">{SHAPES[s].label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic inputs */}
            <div className="mb-4 flex flex-col gap-3">
              {cfg.inputs.map(inp => (
                <div key={inp.id}>
                  <label htmlFor={`input-${inp.id}`} className="mb-1 block text-xs font-bold text-ink">
                    {inp.label}
                  </label>
                  <input
                    id={`input-${inp.id}`}
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
              <p className="mb-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>Fórmula</p>
              <p className="break-all font-mono text-sm font-bold" style={{ color: '#D8A31A' }}>
                {buildPreview()}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCalc}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                style={{ background: '#D8A31A' }}
              >
                Calcular área
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado de área</p>
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

                {/* Figure */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Figura</p>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-bold"
                    style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  >
                    {cfg.symbol} {cfg.label}
                  </span>
                </div>

                {/* Primary result */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">Área</p>
                  <div className="rounded-xl px-6 py-5" style={{ background: '#0a3535' }}>
                    <p className="mb-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                      A
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-4xl font-bold" style={{ color: '#D8A31A' }}>
                        {fmt(result.area)}
                      </span>
                      <span className="font-mono text-base font-bold" style={{ color: 'rgba(216,163,26,0.65)' }}>
                        {unitSq(unit)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Formula */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Fórmula</p>
                  <p className="font-mono text-sm font-semibold text-ink">{cfg.formula}</p>
                </div>

                {/* Procedure */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Procedimiento</p>
                  <p className="break-all font-mono text-xs" style={{ color: '#334e68' }}>{result.procedure}</p>
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
