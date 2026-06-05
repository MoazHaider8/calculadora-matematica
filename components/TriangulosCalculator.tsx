'use client';

import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type ModeId = 'base-altura' | 'tres-lados' | 'dos-angulos' | 'equilatero';
type Unit   = '' | 'mm' | 'cm' | 'm' | 'km';

// ── Formatting ────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  if (!isFinite(n)) return '?';
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(4)).toString();
}

function unitSq(u: Unit): string { return u ? `${u}²` : 'unidades²'; }
function unitL(u: Unit): string  { return u ? u : 'unidades'; }

// ── Mode config ───────────────────────────────────────────────────────────────

interface InputDef { id: string; label: string; placeholder: string; suffix?: string }

interface ModeCfg {
  label:    string;
  symbol:   string;
  formula:  string;
  inputs:   InputDef[];
  defaults: Record<string, string>;
}

const MODES: Record<ModeId, ModeCfg> = {
  'base-altura': {
    label: 'Base y altura', symbol: '△',
    formula: 'A = base × altura / 2',
    inputs: [
      { id: 'base',   label: 'Base',   placeholder: '10' },
      { id: 'altura', label: 'Altura', placeholder: '6'  },
    ],
    defaults: { base: '10', altura: '6' },
  },
  'tres-lados': {
    label: 'Tres lados', symbol: 'abc',
    formula: 'A = √(s(s-a)(s-b)(s-c))',
    inputs: [
      { id: 'a', label: 'Lado a', placeholder: '5' },
      { id: 'b', label: 'Lado b', placeholder: '6' },
      { id: 'c', label: 'Lado c', placeholder: '7' },
    ],
    defaults: { a: '5', b: '6', c: '7' },
  },
  'dos-angulos': {
    label: 'Dos ángulos', symbol: '∠',
    formula: 'C = 180 - A - B',
    inputs: [
      { id: 'angA', label: 'Ángulo A', placeholder: '60', suffix: '°' },
      { id: 'angB', label: 'Ángulo B', placeholder: '40', suffix: '°' },
    ],
    defaults: { angA: '60', angB: '40' },
  },
  'equilatero': {
    label: 'Equilátero', symbol: '⬟',
    formula: 'A = √3 / 4 × lado²',
    inputs: [
      { id: 'lado', label: 'Lado', placeholder: '6' },
    ],
    defaults: { lado: '6' },
  },
};

const MODE_ORDER: ModeId[] = ['base-altura', 'tres-lados', 'dos-angulos', 'equilatero'];

// ── Result types ──────────────────────────────────────────────────────────────

type TriResult =
  | { type: 'success'; mode: ModeId; primary: string; extras: string[]; procedure: string; interpretation: string }
  | { type: 'error'; message: string };

// ── Calculation ────────────────────────────────────────────────────────────────

function triangleType(a: number, b: number, c: number): string {
  if (a === b && b === c) return 'Equilátero';
  if (a === b || b === c || a === c) return 'Isósceles';
  return 'Escaleno';
}

function isRightTriangle(a: number, b: number, c: number): boolean {
  const sides = [a, b, c].sort((x, y) => x - y);
  return Math.abs(sides[0] ** 2 + sides[1] ** 2 - sides[2] ** 2) < 1e-6;
}

function compute(mode: ModeId, vals: Record<string, string>, unit: Unit): TriResult {
  const cfg = MODES[mode];

  // Parse all inputs
  const parsed: Record<string, number> = {};
  for (const inp of cfg.inputs) {
    if (!vals[inp.id]?.trim()) return { type: 'error', message: 'Introduce todos los valores necesarios.' };
    const n = parseFloat(vals[inp.id]);
    if (isNaN(n)) return { type: 'error', message: 'Cada medida debe ser un número válido.' };
    parsed[inp.id] = n;
  }

  if (mode === 'base-altura') {
    const { base, altura } = parsed;
    if (base <= 0 || altura <= 0) return { type: 'error', message: 'Las medidas deben ser mayores que 0.' };
    const area = base * altura / 2;
    return {
      type: 'success', mode,
      primary: `Área = ${fmt(area)} ${unitSq(unit)}`,
      extras:  [],
      procedure:     `A = ${fmt(base)} × ${fmt(altura)} / 2 = ${fmt(area)}`,
      interpretation: `El triángulo tiene una superficie de ${fmt(area)} ${unitSq(unit)}.`,
    };
  }

  if (mode === 'tres-lados') {
    const { a, b, c } = parsed;
    if (a <= 0 || b <= 0 || c <= 0) return { type: 'error', message: 'Las medidas deben ser mayores que 0.' };
    if (a + b <= c || a + c <= b || b + c <= a)
      return { type: 'error', message: 'Los lados ingresados no forman un triángulo válido.' };
    const P = a + b + c;
    const s = P / 2;
    const areaVal = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    if (!isFinite(areaVal)) return { type: 'error', message: 'No se pudo calcular el triángulo de forma confiable.' };
    const tipo = triangleType(a, b, c);
    const right = isRightTriangle(a, b, c) ? ' · Rectángulo' : '';
    const extras = [
      `Perímetro = ${fmt(P)} ${unitL(unit)}`,
      `Semiperímetro = ${fmt(s)} ${unitL(unit)}`,
      `Tipo = ${tipo}${right}`,
    ];
    return {
      type: 'success', mode,
      primary: `Área = ${fmt(areaVal)} ${unitSq(unit)}`,
      extras,
      procedure: `P = ${fmt(a)} + ${fmt(b)} + ${fmt(c)} = ${fmt(P)}\ns = ${fmt(P)} / 2 = ${fmt(s)}\nA = √(${fmt(s)} × ${fmt(s - a)} × ${fmt(s - b)} × ${fmt(s - c)}) ≈ ${fmt(areaVal)}`,
      interpretation: `El triángulo ${tipo.toLowerCase()} tiene un perímetro de ${fmt(P)} ${unitL(unit)} y un área de ${fmt(areaVal)} ${unitSq(unit)}.`,
    };
  }

  if (mode === 'dos-angulos') {
    const { angA, angB } = parsed;
    if (angA <= 0 || angB <= 0) return { type: 'error', message: 'Los ángulos deben ser mayores que 0.' };
    if (angA + angB >= 180) return { type: 'error', message: 'La suma de los ángulos debe ser menor que 180°.' };
    const angC = 180 - angA - angB;
    return {
      type: 'success', mode,
      primary: `Ángulo C = ${fmt(angC)}°`,
      extras:  [`Suma = ${fmt(angA)} + ${fmt(angB)} + ${fmt(angC)} = 180°`],
      procedure: `C = 180 - ${fmt(angA)} - ${fmt(angB)} = ${fmt(angC)}`,
      interpretation: `El tercer ángulo del triángulo mide ${fmt(angC)}°. La suma de los tres ángulos es 180°.`,
    };
  }

  // equilatero
  const { lado } = parsed;
  if (lado <= 0) return { type: 'error', message: 'Las medidas deben ser mayores que 0.' };
  const P = 3 * lado;
  const h = Math.sqrt(3) / 2 * lado;
  const area = Math.sqrt(3) / 4 * lado ** 2;
  return {
    type: 'success', mode,
    primary: `Área = ${fmt(area)} ${unitSq(unit)}`,
    extras: [
      `Perímetro = ${fmt(P)} ${unitL(unit)}`,
      `Altura = ${fmt(h)} ${unitL(unit)}`,
    ],
    procedure: `P = 3 × ${fmt(lado)} = ${fmt(P)}\nh = √3 / 2 × ${fmt(lado)} ≈ ${fmt(h)}\nA = √3 / 4 × ${fmt(lado)}² ≈ ${fmt(area)}`,
    interpretation: `El triángulo equilátero de lado ${fmt(lado)} ${unitL(unit)} tiene un área de ${fmt(area)} ${unitSq(unit)}.`,
  };
}

// ── Examples ──────────────────────────────────────────────────────────────────

const EXAMPLES: { label: string; mode: ModeId; vals: Record<string, string>; unit: Unit }[] = [
  { label: 'Base 10 altura 6',     mode: 'base-altura', vals: { base: '10', altura: '6' }, unit: 'cm' },
  { label: 'Lados 5, 6, 7',        mode: 'tres-lados',  vals: { a: '5', b: '6', c: '7' }, unit: 'cm' },
  { label: 'Ángulos 60° y 40°',    mode: 'dos-angulos', vals: { angA: '60', angB: '40' }, unit: 'cm' },
  { label: 'Equilátero lado 6',    mode: 'equilatero',  vals: { lado: '6' },              unit: 'cm' },
  { label: 'Isósceles 5, 5, 8',    mode: 'tres-lados',  vals: { a: '5', b: '5', c: '8' }, unit: 'cm' },
];

const UNITS: { id: Unit; label: string }[] = [
  { id: '',   label: 'Sin unidad' },
  { id: 'mm', label: 'mm'        },
  { id: 'cm', label: 'cm'        },
  { id: 'm',  label: 'm'         },
  { id: 'km', label: 'km'        },
];

// ── Default ───────────────────────────────────────────────────────────────────

const DEF_MODE: ModeId          = 'base-altura';
const DEF_UNIT: Unit            = 'cm';
const DEF_VALS                  = { ...MODES[DEF_MODE].defaults };
const DEF_RESULT                = compute(DEF_MODE, DEF_VALS, DEF_UNIT);

// ── Component ─────────────────────────────────────────────────────────────────

export function TriangulosCalculator() {
  const [mode,   setMode]   = useState<ModeId>(DEF_MODE);
  const [vals,   setVals]   = useState<Record<string, string>>(DEF_VALS);
  const [unit,   setUnit]   = useState<Unit>(DEF_UNIT);
  const [result, setResult] = useState<TriResult>(DEF_RESULT);
  const [copied, setCopied] = useState<'resultado' | 'formula' | null>(null);

  const cfg = MODES[mode];

  function handleModeChange(m: ModeId) {
    setMode(m);
    setVals({ ...MODES[m].defaults });
    setResult(compute(m, MODES[m].defaults, unit));
  }

  function handleCalc() { setResult(compute(mode, vals, unit)); }

  function handleReset() {
    setMode(DEF_MODE);
    setVals(DEF_VALS);
    setUnit(DEF_UNIT);
    setResult(compute(DEF_MODE, DEF_VALS, DEF_UNIT));
  }

  function applyExample(ex: typeof EXAMPLES[0]) {
    setMode(ex.mode);
    setVals({ ...ex.vals });
    setUnit(ex.unit);
    setResult(compute(ex.mode, ex.vals, ex.unit));
  }

  function updateVal(id: string, v: string) {
    setVals(prev => ({ ...prev, [id]: v }));
  }

  function copyText(type: 'resultado' | 'formula') {
    if (result.type !== 'success') return;
    const text = type === 'resultado' ? result.primary : cfg.formula;
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  function buildPreview(): string {
    const allFilled = cfg.inputs.every(inp => vals[inp.id]?.trim() && !isNaN(parseFloat(vals[inp.id])));
    if (!allFilled) return cfg.formula;
    if (mode === 'base-altura') {
      const b = parseFloat(vals.base), h = parseFloat(vals.altura);
      return `A = ${fmt(b)} × ${fmt(h)} / 2 = ${fmt(b * h / 2)}`;
    }
    if (mode === 'dos-angulos') {
      const a = parseFloat(vals.angA), b = parseFloat(vals.angB);
      if (a + b < 180) return `C = 180 - ${fmt(a)} - ${fmt(b)} = ${fmt(180 - a - b)}`;
      return cfg.formula;
    }
    if (mode === 'equilatero') {
      const l = parseFloat(vals.lado);
      return `A = √3 / 4 × ${fmt(l)}² ≈ ${fmt(Math.sqrt(3) / 4 * l ** 2)}`;
    }
    return cfg.formula;
  }

  const ok = result.type === 'success';

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">
        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de triángulos
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-6">

            {/* Mode selector */}
            <div className="mb-5">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Tipo de cálculo</p>
              <div className="grid grid-cols-2 gap-1.5" role="tablist" aria-label="Selecciona el modo de cálculo">
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
                  <label htmlFor={`tri-${inp.id}`} className="mb-1 block text-xs font-bold text-ink">
                    {inp.label}{inp.suffix ? ` (${inp.suffix})` : ''}
                  </label>
                  <input
                    id={`tri-${inp.id}`}
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

            {/* Unit selector — hidden for angles mode */}
            {mode !== 'dos-angulos' && (
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
            )}

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
                Calcular triángulo
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado del triángulo</p>
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
                    {cfg.symbol} {cfg.label}
                  </span>
                </div>

                {/* Primary result */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado principal</p>
                  <div className="rounded-xl px-6 py-5" style={{ background: '#0a3535' }}>
                    <p className="mb-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                      {mode === 'dos-angulos' ? 'Ángulo C' : mode === 'equilatero' || mode === 'base-altura' ? 'Área' : 'Área (Herón)'}
                    </p>
                    <p className="break-all font-mono text-2xl font-bold" style={{ color: '#D8A31A' }}>
                      {result.primary}
                    </p>
                  </div>
                </div>

                {/* Extra results */}
                {result.extras.length > 0 && (
                  <div className="px-7 py-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Resultados adicionales</p>
                    <ul className="space-y-1.5">
                      {result.extras.map(e => (
                        <li key={e} className="font-mono text-sm font-semibold text-ink">{e}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Formula */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Fórmula</p>
                  <p className="font-mono text-sm font-semibold text-ink">{cfg.formula}</p>
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
