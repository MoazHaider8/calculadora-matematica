'use client';

import { useState } from 'react';

type Size = 2 | 3;

type CalcResult =
  | { type: 'invertible'; det: number; inverse: number[][]; verified: boolean }
  | { type: 'singular';   det: number }
  | { type: 'error';      msg: string };

type UIState =
  | { status: 'result'; data: CalcResult }
  | { status: 'validation'; msg: string }
  | { status: 'idle' };

type ExampleConfig = {
  label: string;
  size: Size;
  cells: string[][];
};

// ── math ──────────────────────────────────────────────────────────────────────

function fmtN(n: number): string {
  if (Math.abs(n - Math.round(n)) < 1e-9) return String(Math.round(n));
  return parseFloat(n.toFixed(6)).toString();
}

function det2(m: number[][]): number {
  return m[0][0] * m[1][1] - m[0][1] * m[1][0];
}

function detN(m: number[][]): number {
  const n = m.length;
  if (n === 2) return det2(m);
  let result = 0;
  for (let j = 0; j < n; j++) {
    const minor = m.slice(1).map(row => row.filter((_, ci) => ci !== j));
    result += (j % 2 === 0 ? 1 : -1) * m[0][j] * detN(minor);
  }
  return result;
}

function gaussJordanInverse(orig: number[][]): number[][] | null {
  const n = orig.length;
  const aug = orig.map((row, i) =>
    [...row, ...Array.from({ length: n }, (_, j) => i === j ? 1 : 0)]
  );

  for (let col = 0; col < n; col++) {
    let maxRow = col;
    for (let row = col + 1; row < n; row++) {
      if (Math.abs(aug[row][col]) > Math.abs(aug[maxRow][col])) maxRow = row;
    }
    [aug[col], aug[maxRow]] = [aug[maxRow], aug[col]];

    const pivot = aug[col][col];
    if (Math.abs(pivot) < 1e-10) return null;

    for (let j = 0; j < 2 * n; j++) aug[col][j] /= pivot;

    for (let row = 0; row < n; row++) {
      if (row === col) continue;
      const factor = aug[row][col];
      for (let j = 0; j < 2 * n; j++) aug[row][j] -= factor * aug[col][j];
    }
  }

  return aug.map(row => row.slice(n));
}

function matMul(A: number[][], B: number[][]): number[][] {
  const n = A.length;
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) =>
      A[i].reduce((s, _, k) => s + A[i][k] * B[k][j], 0)
    )
  );
}

function isIdentity(M: number[][]): boolean {
  return M.every((row, i) =>
    row.every((v, j) => Math.abs(v - (i === j ? 1 : 0)) < 1e-6)
  );
}

// ── input helpers ─────────────────────────────────────────────────────────────

function hasEmpty(cells: string[][]): boolean {
  return cells.some(row => row.some(c => !c.trim()));
}

function hasInvalid(cells: string[][]): boolean {
  return cells.some(row => row.some(c => c.trim() !== '' && isNaN(Number(c.trim()))));
}

function parseCells(cells: string[][]): number[][] {
  return cells.map(row => row.map(c => Number(c.trim())));
}

function resizeCells(cells: string[][], n: Size): string[][] {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => cells[i]?.[j] ?? '0')
  );
}

// ── compute ───────────────────────────────────────────────────────────────────

function compute(size: Size, cells: string[][]): UIState {
  if (hasEmpty(cells)) return { status: 'validation', msg: 'Completa todos los valores de la matriz.' };
  if (hasInvalid(cells)) return { status: 'validation', msg: 'Cada celda debe contener un número válido.' };

  const M = parseCells(cells);
  const d = detN(M);

  if (Math.abs(d) < 1e-9) {
    return { status: 'result', data: { type: 'singular', det: d } };
  }

  const inv = gaussJordanInverse(M);
  if (!inv) {
    return { status: 'result', data: { type: 'error', msg: 'No se pudo calcular la matriz inversa de forma confiable.' } };
  }

  const product = matMul(M, inv);
  const verified = isIdentity(product);

  return { status: 'result', data: { type: 'invertible', det: d, inverse: inv, verified } };
}

// ── defaults ──────────────────────────────────────────────────────────────────

const DEF_CELLS_2: string[][] = [['1','2'],['3','4']];
const DEF_STATE: UIState = compute(2, DEF_CELLS_2);

const EXAMPLES: ExampleConfig[] = [
  { label: '2×2 invertible', size: 2, cells: [['1','2'],['3','4']] },
  { label: '2×2 singular',   size: 2, cells: [['1','2'],['2','4']] },
  { label: '3×3 invertible', size: 3, cells: [['1','2','3'],['0','1','4'],['5','6','0']] },
  { label: 'Identidad 3×3',  size: 3, cells: [['1','0','0'],['0','1','0'],['0','0','1']] },
];

// ── MatrixGrid (input) ────────────────────────────────────────────────────────

function MatrixGrid({
  cells, n, onChange,
}: {
  cells: string[][];
  n: Size;
  onChange: (i: number, j: number, v: string) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <div
        className="inline-grid gap-2"
        style={{ gridTemplateColumns: `repeat(${n}, 64px)` }}
        role="group"
        aria-label="Cuadrícula de la matriz"
      >
        {Array.from({ length: n }, (_, i) =>
          Array.from({ length: n }, (_, j) => (
            <input
              key={`${i}-${j}`}
              type="text"
              inputMode="decimal"
              value={cells[i]?.[j] ?? '0'}
              onChange={e => onChange(i, j, e.target.value)}
              aria-label={`Fila ${i + 1} columna ${j + 1}`}
              className="h-14 w-full rounded-xl border border-line bg-white text-center font-mono text-base font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            />
          ))
        )}
      </div>
    </div>
  );
}

// ── InverseDisplay (result) ───────────────────────────────────────────────────

function InverseDisplay({ matrix, n }: { matrix: number[][]; n: number }) {
  return (
    <div className="overflow-x-auto">
      <div
        className="inline-grid gap-2 rounded-xl px-5 py-4"
        style={{ gridTemplateColumns: `repeat(${n}, minmax(64px,1fr))`, background: '#0a3535' }}
        aria-label="Matriz inversa resultado"
      >
        {matrix.map((row, i) =>
          row.map((val, j) => (
            <div
              key={`${i}-${j}`}
              className="text-center font-mono text-base font-bold"
              style={{ color: '#D8A31A' }}
            >
              {fmtN(val)}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// ── main component ─────────────────────────────────────────────────────────────

export function MatrizInversaCalculator() {
  const [size, setSize]   = useState<Size>(2);
  const [cells, setCells] = useState<string[][]>(DEF_CELLS_2);
  const [ui, setUi]       = useState<UIState>(DEF_STATE);
  const [copied, setCopied] = useState(false);

  function changeSize(n: Size) {
    setSize(n);
    setCells(prev => resizeCells(prev, n));
  }

  function updateCell(i: number, j: number, v: string) {
    setCells(prev => prev.map((row, ri) => ri === i ? row.map((c, ci) => ci === j ? v : c) : row));
  }

  function handleCalculate() {
    setUi(compute(size, cells));
  }

  function handleReset() {
    const def = size === 2 ? DEF_CELLS_2 : [['1','0','0'],['0','1','0'],['0','0','1']];
    setCells(def);
    setUi(compute(size, def));
  }

  function applyExample(ex: ExampleConfig) {
    setSize(ex.size);
    setCells(ex.cells);
    setUi(compute(ex.size, ex.cells));
  }

  function handleCopy() {
    if (ui.status === 'result' && ui.data.type === 'invertible') {
      const txt = ui.data.inverse.map(row => row.map(fmtN).join('  ')).join('\n');
      navigator.clipboard.writeText(txt).catch(() => {});
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const result = ui.status === 'result' ? ui.data : null;
  const isInvertible = result?.type === 'invertible';
  const isSingular   = result?.type === 'singular';

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de matriz inversa
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-7">

            {/* Size selector */}
            <div className="mb-6">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Tamaño de la matriz</p>
              <div
                className="flex overflow-hidden rounded-xl border-2"
                style={{ borderColor: '#D7E2EA' }}
                role="group"
                aria-label="Tamaño de la matriz cuadrada"
              >
                {([2, 3] as Size[]).map(s => (
                  <button
                    key={s}
                    onClick={() => changeSize(s)}
                    aria-pressed={size === s}
                    className={`flex-1 py-3 text-base font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal ${
                      size === s ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                    }`}
                  >
                    {s}×{s}
                  </button>
                ))}
              </div>
            </div>

            {/* Matrix label + badge */}
            <div className="mb-3 flex items-center gap-2">
              <p className="text-sm font-bold" style={{ color: '#102a43' }}>Matriz A</p>
              <span
                className="rounded-full px-2.5 py-0.5 font-mono text-xs font-bold"
                style={{ background: '#DDF3F0', color: '#0F5C5C' }}
              >
                {size} × {size}
              </span>
            </div>

            {/* Grid */}
            <div className="mb-5">
              <MatrixGrid cells={cells} n={size} onChange={updateCell} />
            </div>

            {/* Preview */}
            <div className="mb-6 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.6)' }}>
                Vista previa
              </p>
              <p className="font-mono text-2xl font-bold" style={{ color: '#D8A31A' }}>
                A⁻¹  ({size}×{size})
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCalculate}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none"
                style={{ background: '#D8A31A' }}
              >
                Calcular matriz inversa
              </button>
              <button
                onClick={handleReset}
                className="rounded-lg border border-line px-4 py-3 text-sm font-semibold text-muted transition-colors hover:border-line-2 hover:text-ink focus:outline-none"
              >
                Limpiar
              </button>
            </div>

            {/* Examples */}
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado — Matriz A⁻¹</p>
            </div>

            {ui.status === 'validation' ? (
              <div className="mx-7 mt-5 flex gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3" role="alert">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5zm0 6.5a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z" />
                </svg>
                <p className="text-sm text-red-700">{ui.msg}</p>
              </div>
            ) : ui.status === 'idle' ? null : (
              <div className="divide-y divide-line">

                {/* Determinant */}
                <div className="px-7 py-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Determinante</p>
                  <div className="flex items-center gap-3">
                    <span
                      className="rounded-lg px-3 py-1.5 font-mono text-base font-bold"
                      style={{
                        background: isSingular ? 'rgba(185,28,28,0.08)' : '#DDF3F0',
                        color: isSingular ? '#b91c1c' : '#0F5C5C',
                      }}
                    >
                      det(A) = {result && 'det' in result ? fmtN(result.det) : '0'}
                    </span>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: isSingular ? 'rgba(185,28,28,0.08)' : '#DDF3F0',
                        color: isSingular ? '#b91c1c' : '#0F5C5C',
                      }}
                    >
                      {isSingular ? 'Singular' : 'Invertible'}
                    </span>
                  </div>
                </div>

                {/* Inverse matrix result */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">
                    {isSingular ? 'Resultado' : 'Matriz A⁻¹'}
                  </p>

                  {isInvertible && result.type === 'invertible' ? (
                    <InverseDisplay matrix={result.inverse} n={size} />
                  ) : isSingular ? (
                    <div
                      className="rounded-xl px-6 py-5"
                      style={{ background: 'rgba(185,28,28,0.06)', border: '1px solid rgba(185,28,28,0.2)' }}
                    >
                      <p className="font-mono text-base font-bold" style={{ color: '#b91c1c' }}>
                        La matriz no tiene inversa.
                      </p>
                    </div>
                  ) : result?.type === 'error' ? (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3" role="alert">
                      <p className="text-sm text-red-700">{result.msg}</p>
                    </div>
                  ) : null}
                </div>

                {/* Method */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Método utilizado</p>
                  <span
                    className="inline-block rounded-lg px-3 py-1.5 font-mono text-xs font-bold"
                    style={{ background: '#EEF4F7', color: '#334e68' }}
                  >
                    {size === 2 ? 'Fórmula de matriz 2×2' : 'Gauss Jordan'}
                  </span>
                </div>

                {/* Verification */}
                {isInvertible && result.type === 'invertible' && (
                  <div className="px-7 py-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Verificación</p>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-semibold" style={{ color: '#334e68' }}>
                        A · A⁻¹ = I
                      </span>
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-bold"
                        style={{ background: result.verified ? '#DDF3F0' : '#FFF4CC', color: result.verified ? '#0F5C5C' : '#b58000' }}
                      >
                        {result.verified ? '✓ Verificado' : 'Aproximado'}
                      </span>
                    </div>
                  </div>
                )}

                {/* Interpretation */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Interpretación</p>
                  <p
                    className="text-sm font-semibold leading-relaxed"
                    style={{ color: isSingular ? '#b91c1c' : '#0F5C5C' }}
                  >
                    {isInvertible
                      ? 'La matriz es invertible porque su determinante no es cero. Al multiplicarla por su inversa se obtiene la matriz identidad.'
                      : isSingular
                        ? 'La matriz es singular porque su determinante es cero. No tiene inversa.'
                        : ''}
                  </p>
                </div>

                {/* Copy */}
                {isInvertible && (
                  <div className="flex flex-wrap gap-2 px-7 py-4">
                    <button
                      onClick={handleCopy}
                      className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                      aria-live="polite"
                    >
                      {copied ? '✓ Resultado copiado' : 'Copiar resultado'}
                    </button>
                  </div>
                )}

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
