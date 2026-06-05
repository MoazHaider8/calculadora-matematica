'use client';

import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type SolidId = 'cubo' | 'prisma' | 'cilindro' | 'cono' | 'esfera' | 'piramide' | 'prismaTriangular';
type Unit    = '' | 'mm' | 'cm' | 'm' | 'km';

// ── Formatting ────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  if (!isFinite(n)) return '?';
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(4)).toString();
}

function unitCu(u: Unit): string {
  if (!u) return 'unidades³';
  return `${u}³`;
}

// ── Solid config ──────────────────────────────────────────────────────────────

interface InputDef { id: string; label: string; placeholder: string }

interface SolidCfg {
  label:    string;
  symbol:   string;
  formula:  string;
  inputs:   InputDef[];
  defaults: Record<string, string>;
  compute:  (v: Record<string, number>) => number;
  proc:     (v: Record<string, number>) => string;
  interp:   (vol: number, u: Unit) => string;
}

const SOLIDS: Record<SolidId, SolidCfg> = {
  cubo: {
    label: 'Cubo', symbol: '⬛',
    formula: 'V = lado³',
    inputs:  [{ id: 'lado', label: 'Lado', placeholder: '4' }],
    defaults: { lado: '4' },
    compute: v => v.lado ** 3,
    proc:    v => `V = ${fmt(v.lado)}³ = ${fmt(v.lado ** 3)}`,
    interp:  (vol, u) => `El cubo ocupa un volumen de ${fmt(vol)} ${unitCu(u)}.`,
  },
  prisma: {
    label: 'Prisma rectangular', symbol: '📦',
    formula: 'V = largo × ancho × altura',
    inputs: [
      { id: 'largo',  label: 'Largo',  placeholder: '8' },
      { id: 'ancho',  label: 'Ancho',  placeholder: '5' },
      { id: 'altura', label: 'Altura', placeholder: '4' },
    ],
    defaults: { largo: '8', ancho: '5', altura: '4' },
    compute: v => v.largo * v.ancho * v.altura,
    proc:    v => `V = ${fmt(v.largo)} × ${fmt(v.ancho)} × ${fmt(v.altura)} = ${fmt(v.largo * v.ancho * v.altura)}`,
    interp:  (vol, u) => `El prisma rectangular ocupa un volumen de ${fmt(vol)} ${unitCu(u)}.`,
  },
  cilindro: {
    label: 'Cilindro', symbol: '🥫',
    formula: 'V = πr²h',
    inputs: [
      { id: 'radio',  label: 'Radio',  placeholder: '3'  },
      { id: 'altura', label: 'Altura', placeholder: '10' },
    ],
    defaults: { radio: '3', altura: '10' },
    compute: v => Math.PI * v.radio ** 2 * v.altura,
    proc:    v => `V = π × ${fmt(v.radio)}² × ${fmt(v.altura)} = π × ${fmt(v.radio ** 2 * v.altura)} ≈ ${fmt(Math.PI * v.radio ** 2 * v.altura)}`,
    interp:  (vol, u) => `El cilindro ocupa un volumen de ${fmt(vol)} ${unitCu(u)}.`,
  },
  cono: {
    label: 'Cono', symbol: '🍦',
    formula: 'V = πr²h / 3',
    inputs: [
      { id: 'radio',  label: 'Radio',  placeholder: '3' },
      { id: 'altura', label: 'Altura', placeholder: '9' },
    ],
    defaults: { radio: '3', altura: '9' },
    compute: v => Math.PI * v.radio ** 2 * v.altura / 3,
    proc:    v => `V = π × ${fmt(v.radio)}² × ${fmt(v.altura)} / 3 ≈ ${fmt(Math.PI * v.radio ** 2 * v.altura / 3)}`,
    interp:  (vol, u) => `El cono ocupa un volumen de ${fmt(vol)} ${unitCu(u)}.`,
  },
  esfera: {
    label: 'Esfera', symbol: '🌐',
    formula: 'V = 4/3 × πr³',
    inputs:  [{ id: 'radio', label: 'Radio', placeholder: '3' }],
    defaults: { radio: '3' },
    compute: v => (4 / 3) * Math.PI * v.radio ** 3,
    proc:    v => `V = 4/3 × π × ${fmt(v.radio)}³ = 4/3 × π × ${fmt(v.radio ** 3)} ≈ ${fmt((4 / 3) * Math.PI * v.radio ** 3)}`,
    interp:  (vol, u) => `La esfera ocupa un volumen de ${fmt(vol)} ${unitCu(u)}.`,
  },
  piramide: {
    label: 'Pirámide', symbol: '🔺',
    formula: 'V = área base × altura / 3',
    inputs: [
      { id: 'areaBase', label: 'Área de la base', placeholder: '30' },
      { id: 'altura',   label: 'Altura',          placeholder: '9'  },
    ],
    defaults: { areaBase: '30', altura: '9' },
    compute: v => v.areaBase * v.altura / 3,
    proc:    v => `V = ${fmt(v.areaBase)} × ${fmt(v.altura)} / 3 = ${fmt(v.areaBase * v.altura / 3)}`,
    interp:  (vol, u) => `La pirámide ocupa un volumen de ${fmt(vol)} ${unitCu(u)}.`,
  },
  prismaTriangular: {
    label: 'Prisma triangular', symbol: '📐',
    formula: 'V = (base × altura / 2) × longitud',
    inputs: [
      { id: 'base',      label: 'Base del triángulo',    placeholder: '6'  },
      { id: 'altTri',    label: 'Altura del triángulo',  placeholder: '4'  },
      { id: 'longitud',  label: 'Longitud del prisma',   placeholder: '10' },
    ],
    defaults: { base: '6', altTri: '4', longitud: '10' },
    compute: v => (v.base * v.altTri / 2) * v.longitud,
    proc:    v => `V = (${fmt(v.base)} × ${fmt(v.altTri)} / 2) × ${fmt(v.longitud)} = ${fmt(v.base * v.altTri / 2)} × ${fmt(v.longitud)} = ${fmt((v.base * v.altTri / 2) * v.longitud)}`,
    interp:  (vol, u) => `El prisma triangular ocupa un volumen de ${fmt(vol)} ${unitCu(u)}.`,
  },
};

const SOLID_ORDER: SolidId[] = ['cubo', 'prisma', 'cilindro', 'cono', 'esfera', 'piramide', 'prismaTriangular'];

// ── Calculation ────────────────────────────────────────────────────────────────

type VolResult =
  | { type: 'success'; solid: SolidId; volume: number; procedure: string; interpretation: string }
  | { type: 'error'; message: string };

function computeVol(solid: SolidId, vals: Record<string, string>, unit: Unit): VolResult {
  const cfg = SOLIDS[solid];
  const parsed: Record<string, number> = {};
  for (const inp of cfg.inputs) {
    if (!vals[inp.id]?.trim()) return { type: 'error', message: 'Introduce todos los valores necesarios.' };
    const n = parseFloat(vals[inp.id]);
    if (isNaN(n)) return { type: 'error', message: 'Cada medida debe ser un número válido.' };
    if (n <= 0)   return { type: 'error', message: 'Las medidas deben ser mayores que 0.' };
    parsed[inp.id] = n;
  }
  const volume = cfg.compute(parsed);
  if (!isFinite(volume)) return { type: 'error', message: 'No se pudo calcular el volumen de forma confiable.' };
  return {
    type: 'success',
    solid,
    volume,
    procedure:     cfg.proc(parsed),
    interpretation: cfg.interp(volume, unit),
  };
}

// ── Examples ──────────────────────────────────────────────────────────────────

const EXAMPLES: { label: string; solid: SolidId; vals: Record<string, string>; unit: Unit }[] = [
  { label: 'Prisma 8×5×4',       solid: 'prisma',           vals: { largo: '8', ancho: '5', altura: '4' },       unit: 'cm' },
  { label: 'Cubo lado 4',         solid: 'cubo',             vals: { lado: '4' },                                  unit: 'cm' },
  { label: 'Cilindro r3 h10',     solid: 'cilindro',         vals: { radio: '3', altura: '10' },                   unit: 'cm' },
  { label: 'Cono r3 h9',          solid: 'cono',             vals: { radio: '3', altura: '9' },                    unit: 'm'  },
  { label: 'Esfera radio 3',      solid: 'esfera',           vals: { radio: '3' },                                 unit: 'cm' },
  { label: 'Pirámide base 30 h9', solid: 'piramide',         vals: { areaBase: '30', altura: '9' },                unit: 'cm' },
  { label: 'Prisma triangular',   solid: 'prismaTriangular', vals: { base: '6', altTri: '4', longitud: '10' },     unit: 'cm' },
];

const UNITS: { id: Unit; label: string }[] = [
  { id: '',   label: 'Sin unidad' },
  { id: 'mm', label: 'mm'        },
  { id: 'cm', label: 'cm'        },
  { id: 'm',  label: 'm'         },
  { id: 'km', label: 'km'        },
];

// ── Default state ─────────────────────────────────────────────────────────────

const DEF_SOLID: SolidId = 'prisma';
const DEF_UNIT: Unit     = 'cm';
const DEF_VALS           = { ...SOLIDS[DEF_SOLID].defaults };
const DEF_RESULT         = computeVol(DEF_SOLID, DEF_VALS, DEF_UNIT);

// ── Component ─────────────────────────────────────────────────────────────────

export function VolumenCalculator() {
  const [solid,  setSolid]  = useState<SolidId>(DEF_SOLID);
  const [vals,   setVals]   = useState<Record<string, string>>(DEF_VALS);
  const [unit,   setUnit]   = useState<Unit>(DEF_UNIT);
  const [result, setResult] = useState<VolResult>(DEF_RESULT);
  const [copied, setCopied] = useState<'resultado' | 'formula' | null>(null);

  const cfg = SOLIDS[solid];

  function handleSolidChange(s: SolidId) {
    setSolid(s);
    setVals({ ...SOLIDS[s].defaults });
    setResult(computeVol(s, SOLIDS[s].defaults, unit));
  }

  function handleCalc() { setResult(computeVol(solid, vals, unit)); }

  function handleReset() {
    setSolid(DEF_SOLID); setVals(DEF_VALS); setUnit(DEF_UNIT);
    setResult(computeVol(DEF_SOLID, DEF_VALS, DEF_UNIT));
  }

  function applyExample(ex: typeof EXAMPLES[0]) {
    setSolid(ex.solid); setVals({ ...ex.vals }); setUnit(ex.unit);
    setResult(computeVol(ex.solid, ex.vals, ex.unit));
  }

  function updateVal(id: string, v: string) { setVals(prev => ({ ...prev, [id]: v })); }

  function copyText(type: 'resultado' | 'formula') {
    if (result.type !== 'success') return;
    const text = type === 'resultado'
      ? `${cfg.label}: Volumen = ${fmt(result.volume)} ${unitCu(unit)}`
      : cfg.formula;
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  function buildPreview(): string {
    const allFilled = cfg.inputs.every(inp => vals[inp.id]?.trim() && !isNaN(parseFloat(vals[inp.id])));
    if (!allFilled) return cfg.formula;
    const v: Record<string, number> = {};
    cfg.inputs.forEach(inp => { v[inp.id] = parseFloat(vals[inp.id]); });
    return cfg.proc(v);
  }

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">
        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de volumen
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-6">

            {/* Solid selector */}
            <div className="mb-5">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Cuerpo geométrico</p>
              <div
                className="grid gap-1"
                style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
                role="tablist"
                aria-label="Selecciona el cuerpo geométrico"
              >
                {SOLID_ORDER.map(s => (
                  <button
                    key={s}
                    role="tab"
                    aria-selected={solid === s}
                    onClick={() => handleSolidChange(s)}
                    className={`rounded-lg px-1 py-2 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      solid === s ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                    }`}
                  >
                    <span className="block text-base leading-none" aria-hidden="true">{SOLIDS[s].symbol}</span>
                    <span className="mt-0.5 block text-[10px] leading-tight">{SOLIDS[s].label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic inputs */}
            <div className="mb-4 flex flex-col gap-3">
              {cfg.inputs.map(inp => (
                <div key={inp.id}>
                  <label htmlFor={`vinput-${inp.id}`} className="mb-1 block text-xs font-bold text-ink">
                    {inp.label}
                  </label>
                  <input
                    id={`vinput-${inp.id}`}
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
                Calcular volumen
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado de volumen</p>
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

                {/* Solid badge */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Cuerpo</p>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-bold"
                    style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  >
                    {cfg.symbol} {cfg.label}
                  </span>
                </div>

                {/* Primary result */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">Volumen</p>
                  <div className="rounded-xl px-6 py-5" style={{ background: '#0a3535' }}>
                    <p className="mb-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>V</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-4xl font-bold" style={{ color: '#D8A31A' }}>
                        {fmt(result.volume)}
                      </span>
                      <span className="font-mono text-base font-bold" style={{ color: 'rgba(216,163,26,0.65)' }}>
                        {unitCu(unit)}
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
