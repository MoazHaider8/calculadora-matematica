'use client';

import { useState } from 'react';

type Mode = 'add' | 'subtract' | 'dot' | 'cross' | 'norm' | 'unit' | 'angle';
type Dim  = 2 | 3;

type CalcResult = {
  type: 'success' | 'error';
  operationLabel?: string;
  resultLabel?: string;
  calculation?: string;
  explanation?: string;
  message: string;
};

type ExampleConfig = {
  label: string;
  mode: Mode;
  dim: Dim;
  a: string[];
  b: string[];
};

// ── helpers ────────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  if (Math.abs(n - Math.round(n)) < 1e-9) return String(Math.round(n));
  return parseFloat(n.toFixed(6)).toString();
}

function fmtVec(v: number[]): string {
  return `(${v.map(fmt).join(', ')})`;
}

function parseVec(strs: string[]): number[] | null {
  const nums = strs.map(s => Number(s.trim()));
  if (nums.some(n => isNaN(n))) return null;
  return nums;
}

function hasEmpty(strs: string[]): boolean {
  return strs.some(s => !s.trim());
}

function hasInvalid(strs: string[]): boolean {
  return strs.some(s => s.trim() !== '' && isNaN(Number(s.trim())));
}

function norm(v: number[]): number {
  return Math.sqrt(v.reduce((acc, c) => acc + c * c, 0));
}

function dot(a: number[], b: number[]): number {
  return a.reduce((acc, _, i) => acc + a[i] * b[i], 0);
}

function cross(a: number[], b: number[]): number[] {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function resizeVec(v: string[], n: Dim): string[] {
  if (v.length === n) return v;
  if (n === 3) return [...v, '0'];
  return v.slice(0, 2);
}

// ── compute ────────────────────────────────────────────────────────────────────

function compute(mode: Mode, dim: Dim, rawA: string[], rawB: string[]): CalcResult {
  if (mode === 'cross' && dim === 2) {
    return { type: 'error', message: 'El producto cruz se calcula con vectores 3D.' };
  }

  const needsB = mode === 'add' || mode === 'subtract' || mode === 'dot' || mode === 'cross' || mode === 'angle';

  if (hasEmpty(rawA) || (needsB && hasEmpty(rawB))) {
    return { type: 'error', message: 'Completa todas las componentes del vector.' };
  }
  if (hasInvalid(rawA) || (needsB && hasInvalid(rawB))) {
    return { type: 'error', message: 'Cada componente debe contener un número válido.' };
  }

  const a = parseVec(rawA);
  const b = needsB ? parseVec(rawB) : null;
  if (!a || (needsB && !b)) {
    return { type: 'error', message: 'No se pudo calcular la operación de forma confiable.' };
  }

  const na = norm(a);
  const dimLabel = dim === 2 ? '2D' : '3D';
  const aLabel = fmtVec(a);

  switch (mode) {
    case 'add': {
      const res = a.map((_, i) => a[i] + b![i]);
      const calc = dim === 2
        ? `(${fmt(a[0])} + ${fmt(b![0])}, ${fmt(a[1])} + ${fmt(b![1])})`
        : `(${fmt(a[0])} + ${fmt(b![0])}, ${fmt(a[1])} + ${fmt(b![1])}, ${fmt(a[2])} + ${fmt(b![2])})`;
      return {
        type: 'success',
        operationLabel: `A + B  [${dimLabel}]`,
        resultLabel: fmtVec(res),
        calculation: `${calc} = ${fmtVec(res)}`,
        explanation: 'Se suman las componentes correspondientes de ambos vectores.',
        message: fmtVec(res),
      };
    }
    case 'subtract': {
      const res = a.map((_, i) => a[i] - b![i]);
      const calc = dim === 2
        ? `(${fmt(a[0])} − ${fmt(b![0])}, ${fmt(a[1])} − ${fmt(b![1])})`
        : `(${fmt(a[0])} − ${fmt(b![0])}, ${fmt(a[1])} − ${fmt(b![1])}, ${fmt(a[2])} − ${fmt(b![2])})`;
      return {
        type: 'success',
        operationLabel: `A − B  [${dimLabel}]`,
        resultLabel: fmtVec(res),
        calculation: `${calc} = ${fmtVec(res)}`,
        explanation: 'Se restan las componentes correspondientes de ambos vectores.',
        message: fmtVec(res),
      };
    }
    case 'dot': {
      const d = dot(a, b!);
      const terms = a.map((_, i) => `${fmt(a[i])}·${fmt(b![i])}`).join(' + ');
      return {
        type: 'success',
        operationLabel: `A · B  [${dimLabel}]`,
        resultLabel: fmt(d),
        calculation: `${terms} = ${fmt(d)}`,
        explanation: 'Se multiplican las componentes correspondientes y se suman los productos.',
        message: fmt(d),
      };
    }
    case 'cross': {
      const res = cross(a, b!);
      return {
        type: 'success',
        operationLabel: 'A × B  [3D]',
        resultLabel: fmtVec(res),
        calculation: `(${fmt(a[1])}·${fmt(b![2])} − ${fmt(a[2])}·${fmt(b![1])}, ${fmt(a[2])}·${fmt(b![0])} − ${fmt(a[0])}·${fmt(b![2])}, ${fmt(a[0])}·${fmt(b![1])} − ${fmt(a[1])}·${fmt(b![0])}) = ${fmtVec(res)}`,
        explanation: 'El resultado es un vector perpendicular a A y a B.',
        message: fmtVec(res),
      };
    }
    case 'norm': {
      const n = na;
      const squares = a.map(c => `${fmt(c)}²`).join(' + ');
      return {
        type: 'success',
        operationLabel: `||A||  [${dimLabel}]`,
        resultLabel: fmt(n),
        calculation: `√(${squares}) = ${fmt(n)}`,
        explanation: 'Se obtiene la raíz cuadrada de la suma de cuadrados de las componentes.',
        message: fmt(n),
      };
    }
    case 'unit': {
      if (na < 1e-12) {
        return { type: 'error', message: 'No se puede obtener vector unitario de un vector cero.' };
      }
      const u = a.map(c => c / na);
      return {
        type: 'success',
        operationLabel: `û  [${dimLabel}]`,
        resultLabel: fmtVec(u),
        calculation: `${aLabel} / ${fmt(na)} = ${fmtVec(u)}`,
        explanation: 'Se divide cada componente entre la magnitud del vector.',
        message: fmtVec(u),
      };
    }
    case 'angle': {
      const nb = norm(b!);
      if (na < 1e-12 || nb < 1e-12) {
        return { type: 'error', message: 'No se puede calcular el ángulo si uno de los vectores es cero.' };
      }
      const cosTheta = Math.max(-1, Math.min(1, dot(a, b!) / (na * nb)));
      const deg = Math.acos(cosTheta) * (180 / Math.PI);
      const degFmt = parseFloat(deg.toFixed(4));
      return {
        type: 'success',
        operationLabel: `θ(A, B)  [${dimLabel}]`,
        resultLabel: `${degFmt}°`,
        calculation: `cos(θ) = (A · B) / (||A|| · ||B||) = ${fmt(dot(a, b!))} / (${fmt(na)} · ${fmt(nb)}) = ${fmt(cosTheta)}`,
        explanation: 'Se usa el producto punto y las normas de ambos vectores para obtener el ángulo en grados.',
        message: `${degFmt}°`,
      };
    }
  }
}

// ── constants ─────────────────────────────────────────────────────────────────

const MODES: { id: Mode; label: string }[] = [
  { id: 'add',      label: 'Sumar'           },
  { id: 'subtract', label: 'Restar'          },
  { id: 'dot',      label: 'Prod. punto'     },
  { id: 'cross',    label: 'Prod. cruz'      },
  { id: 'norm',     label: 'Norma'           },
  { id: 'unit',     label: 'Vec. unitario'   },
  { id: 'angle',    label: 'Ángulo'          },
];

const PREVIEW_LABELS: Record<Mode, string> = {
  add:      'A + B',
  subtract: 'A − B',
  dot:      'A · B',
  cross:    'A × B',
  norm:     '||A||',
  unit:     'û = A / ||A||',
  angle:    'θ(A, B)',
};

const BUTTON_LABELS: Record<Mode, string> = {
  add:      'Sumar vectores',
  subtract: 'Restar vectores',
  dot:      'Calcular producto punto',
  cross:    'Calcular producto cruz',
  norm:     'Calcular norma',
  unit:     'Calcular vector unitario',
  angle:    'Calcular ángulo',
};

const NEEDS_B: Mode[] = ['add', 'subtract', 'dot', 'cross', 'angle'];

const EXAMPLES: ExampleConfig[] = [
  { label: 'A + B 2D',   mode: 'add',      dim: 2, a: ['2','3'],     b: ['4','1']     },
  { label: 'A − B 2D',   mode: 'subtract', dim: 2, a: ['5','4'],     b: ['2','1']     },
  { label: 'A · B',      mode: 'dot',      dim: 2, a: ['2','3'],     b: ['4','1']     },
  { label: 'A × B 3D',   mode: 'cross',    dim: 3, a: ['1','2','3'], b: ['4','5','6'] },
  { label: '||A||',      mode: 'norm',     dim: 2, a: ['3','4'],     b: ['0','0']     },
  { label: 'Ángulo 90°', mode: 'angle',    dim: 2, a: ['1','0'],     b: ['0','1']     },
];

const DEF_A_2D: string[] = ['2', '3'];
const DEF_B_2D: string[] = ['4', '1'];
const DEF_RESULT: CalcResult = compute('add', 2, DEF_A_2D, DEF_B_2D);

// ── VectorInput ───────────────────────────────────────────────────────────────

function VectorInput({
  label, values, onChange, dim,
}: {
  label: string;
  values: string[];
  onChange: (i: number, v: string) => void;
  dim: Dim;
}) {
  const axes = dim === 2 ? ['x', 'y'] : ['x', 'y', 'z'];
  return (
    <div
      className="rounded-xl p-4"
      style={{ background: '#F8FAFC', border: '1px solid #D7E2EA' }}
    >
      {/* Label row */}
      <div className="mb-3 flex items-center gap-2.5">
        <p className="text-sm font-bold" style={{ color: '#102a43' }}>{label}</p>
        <span
          className="rounded-full px-2.5 py-0.5 font-mono text-xs font-bold"
          style={{ background: '#DDF3F0', color: '#0F5C5C' }}
        >
          {dim}D
        </span>
      </div>
      {/* Cell row */}
      <div className="flex gap-3">
        {axes.map((axis, i) => (
          <div key={axis} className="flex flex-col items-center gap-1.5">
            <label
              htmlFor={`${label.replace(' ', '-')}-${axis}`}
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#627d98' }}
            >
              {axis}
            </label>
            <input
              id={`${label.replace(' ', '-')}-${axis}`}
              type="text"
              inputMode="decimal"
              value={values[i] ?? '0'}
              onChange={e => onChange(i, e.target.value)}
              aria-label={`${label} componente ${axis}`}
              className="h-14 w-20 rounded-xl border border-line bg-white text-center font-mono text-lg font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── main component ─────────────────────────────────────────────────────────────

export function VectorCalculator() {
  const [mode, setMode]     = useState<Mode>('add');
  const [dim, setDim]       = useState<Dim>(2);
  const [vecA, setVecA]     = useState<string[]>(DEF_A_2D);
  const [vecB, setVecB]     = useState<string[]>(DEF_B_2D);
  const [result, setResult] = useState<CalcResult>(DEF_RESULT);
  const [copied, setCopied] = useState(false);

  const needsB = NEEDS_B.includes(mode);

  function handleDim(d: Dim) {
    setDim(d);
    setVecA(prev => resizeVec(prev, d));
    setVecB(prev => resizeVec(prev, d));
  }

  function handleMode(m: Mode) {
    if (m === 'cross' && dim === 2) {
      setMode(m);
      setDim(3);
      setVecA(prev => resizeVec(prev, 3));
      setVecB(prev => resizeVec(prev, 3));
      return;
    }
    setMode(m);
  }

  function updateA(i: number, v: string) {
    setVecA(prev => prev.map((c, ci) => ci === i ? v : c));
  }

  function updateB(i: number, v: string) {
    setVecB(prev => prev.map((c, ci) => ci === i ? v : c));
  }

  function handleCalculate() {
    setResult(compute(mode, dim, vecA, vecB));
  }

  function handleReset() {
    setMode('add'); setDim(2);
    setVecA(DEF_A_2D); setVecB(DEF_B_2D);
    setResult(DEF_RESULT);
  }

  function applyExample(ex: ExampleConfig) {
    setMode(ex.mode); setDim(ex.dim);
    setVecA(ex.a); setVecB(ex.b);
    setResult(compute(ex.mode, ex.dim, ex.a, ex.b));
  }

  function handleCopy() {
    if (result.type === 'success') {
      navigator.clipboard.writeText(result.message).catch(() => {});
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de vectores
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-7">

            {/* Mode tabs */}
            <div className="mb-6">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Operación</p>
              <div
                className="grid gap-1"
                style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
                role="tablist"
                aria-label="Operación vectorial"
              >
                {MODES.map(m => (
                  <button
                    key={m.id}
                    role="tab"
                    aria-selected={mode === m.id}
                    onClick={() => handleMode(m.id)}
                    className={`rounded-lg py-2.5 px-1 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      mode === m.id ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dimension selector — full width, more prominent */}
            <div className="mb-6">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Dimensión</p>
              <div
                className="flex overflow-hidden rounded-xl border-2"
                style={{ borderColor: '#D7E2EA' }}
                role="group"
                aria-label="Dimensión de los vectores"
              >
                {([2, 3] as Dim[]).map(d => (
                  <button
                    key={d}
                    onClick={() => handleDim(d)}
                    aria-pressed={dim === d}
                    className={`flex-1 py-3 text-base font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal ${
                      dim === d ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                    }`}
                  >
                    {d}D
                  </button>
                ))}
              </div>
            </div>

            {/* Vector inputs — each in its own bordered card */}
            <div className="mb-6 flex flex-col gap-4">
              <VectorInput label="Vector A" values={vecA} onChange={updateA} dim={dim} />
              {needsB && (
                <VectorInput label="Vector B" values={vecB} onChange={updateB} dim={dim} />
              )}
            </div>

            {/* Operation preview */}
            <div className="mb-6 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.6)' }}>
                Vista previa
              </p>
              <p className="font-mono text-2xl font-bold" style={{ color: '#D8A31A' }}>
                {PREVIEW_LABELS[mode]}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCalculate}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none"
                style={{ background: '#D8A31A' }}
              >
                {BUTTON_LABELS[mode]}
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado del vector</p>
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

                {/* Operation label */}
                {result.operationLabel && (
                  <div className="px-7 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Operación</p>
                    <p className="font-mono text-sm font-semibold text-slate">{result.operationLabel}</p>
                  </div>
                )}

                {/* Result — large and dominant */}
                <div className="px-7 py-6">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                  <div className="flex items-center gap-4 rounded-xl px-6 py-6" style={{ background: '#0a3535' }}>
                    <span
                      className="font-mono font-bold break-all leading-tight"
                      style={{
                        color: '#D8A31A',
                        fontSize: result.resultLabel && result.resultLabel.length > 14 ? '1.5rem' : '2.5rem',
                      }}
                    >
                      {result.resultLabel ?? result.message}
                    </span>
                  </div>
                </div>

                {/* Calculation */}
                {result.calculation && (
                  <div className="px-7 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Cálculo</p>
                    <p className="mt-1 overflow-x-auto rounded-lg px-3 py-2.5 font-mono text-xs" style={{ background: '#EEF4F7', color: '#334e68' }}>
                      {result.calculation}
                    </p>
                  </div>
                )}

                {/* Explanation */}
                {result.explanation && (
                  <div className="px-7 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Explicación</p>
                    <p className="text-sm leading-relaxed text-slate">{result.explanation}</p>
                  </div>
                )}

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
