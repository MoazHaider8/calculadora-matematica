'use client';

import { useState } from 'react';

type Size = 2 | 3 | 4;

type CalcResult = {
  type: 'success' | 'error';
  det?: number;
  method?: string;
  calculation?: string;
  interpretation?: string;
  explanation: string;
};

type ExampleConfig = {
  label: string;
  size: Size;
  matrix: string[][];
};

// ── helpers ────────────────────────────────────────────────────────────────────

function fmtNum(n: number): string {
  if (Math.abs(n - Math.round(n)) < 1e-9) return String(Math.round(n));
  return parseFloat(n.toFixed(6)).toString();
}

function fmtParen(n: number): string {
  const s = fmtNum(n);
  return s.startsWith('-') ? `(${s})` : s;
}

function resizeSq(m: string[][], n: number): string[][] {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => m[i]?.[j] ?? '0')
  );
}

function hasEmpty(m: string[][]): boolean {
  return m.some(row => row.some(c => !c.trim()));
}

function hasInvalid(m: string[][]): boolean {
  return m.some(row => row.some(c => c.trim() !== '' && isNaN(Number(c.trim()))));
}

function parseMatrix(m: string[][]): number[][] {
  return m.map(row => row.map(c => Number(c.trim())));
}

function minorMatrix(m: number[][], row: number, col: number): number[][] {
  return m.filter((_, i) => i !== row).map(r => r.filter((_, j) => j !== col));
}

function det(m: number[][]): number {
  const n = m.length;
  if (n === 1) return m[0][0];
  if (n === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  let result = 0;
  for (let j = 0; j < n; j++) {
    result += (j % 2 === 0 ? 1 : -1) * m[0][j] * det(minorMatrix(m, 0, j));
  }
  return result;
}

function buildResult(m: number[][], size: Size): CalcResult {
  const d = det(m);
  const dFmt = fmtNum(d);
  const isZero = Math.abs(d) < 1e-9;
  const interpretation = isZero
    ? 'La matriz es singular. No tiene inversa.'
    : `El determinante no es cero. La matriz no es singular y tiene inversa.`;

  if (size === 2) {
    const [a, b] = [m[0][0], m[0][1]];
    const [c, dd] = [m[1][0], m[1][1]];
    return {
      type: 'success',
      det: d,
      method: 'Fórmula 2×2',
      calculation: `${fmtNum(a)}·${fmtNum(dd)} - ${fmtNum(b)}·${fmtNum(c)} = ${dFmt}`,
      interpretation,
      explanation: 'Se multiplica la diagonal principal y se resta el producto de la diagonal secundaria.',
    };
  }

  if (size === 3) {
    const M11 = m[1][1] * m[2][2] - m[1][2] * m[2][1];
    const M12 = m[1][0] * m[2][2] - m[1][2] * m[2][0];
    const M13 = m[1][0] * m[2][1] - m[1][1] * m[2][0];
    return {
      type: 'success',
      det: d,
      method: 'Regla de Sarrus (expansión por primera fila)',
      calculation: `${fmtNum(m[0][0])}·${fmtParen(M11)} - ${fmtNum(m[0][1])}·${fmtParen(M12)} + ${fmtNum(m[0][2])}·${fmtParen(M13)} = ${dFmt}`,
      interpretation,
      explanation: 'Se expande el determinante por la primera fila usando los tres menores 2×2 correspondientes.',
    };
  }

  return {
    type: 'success',
    det: d,
    method: 'Expansión por cofactores',
    calculation: `det(A 4×4) = ${dFmt}`,
    interpretation,
    explanation: 'Se calcula expandiendo el determinante por los cofactores de la primera fila.',
  };
}

// ── defaults ─────────────────────────────────────────────────────────────────

const DEF_MATRIX_3: string[][] = [['1','2','3'],['0','1','4'],['5','6','0']];

const DEF_RESULT: CalcResult = {
  type: 'success',
  det: 1,
  method: 'Regla de Sarrus (expansión por primera fila)',
  calculation: '1·(-24) - 2·(-20) + 3·(-5) = 1',
  interpretation: 'El determinante no es cero. La matriz no es singular y tiene inversa.',
  explanation: 'Se expande el determinante por la primera fila usando los tres menores 2×2 correspondientes.',
};

const EXAMPLES: ExampleConfig[] = [
  { label: '2×2 simple',   size: 2, matrix: [['1','2'],['3','4']] },
  { label: '3×3 Sarrus',   size: 3, matrix: DEF_MATRIX_3 },
  { label: '3×3 singular', size: 3, matrix: [['1','2','3'],['2','4','6'],['1','1','1']] },
  { label: '4×4',          size: 4, matrix: [['2','1','0','0'],['1','2','1','0'],['0','1','2','1'],['0','0','1','2']] },
  { label: 'Identidad',    size: 3, matrix: [['1','0','0'],['0','1','0'],['0','0','1']] },
];

const selCls = 'rounded border border-line bg-white px-2 py-1 text-[10px] font-semibold text-ink focus:border-teal focus:outline-none';

// ── sub-component ─────────────────────────────────────────────────────────────

function MatrixGrid({
  matrix, onCell, n,
}: {
  matrix: string[][];
  onCell: (i: number, j: number, v: string) => void;
  n: number;
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
              value={matrix[i]?.[j] ?? '0'}
              onChange={e => onCell(i, j, e.target.value)}
              aria-label={`Fila ${i + 1} columna ${j + 1}`}
              className="h-12 rounded-lg border border-line bg-white text-center font-mono text-base font-semibold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            />
          ))
        )}
      </div>
    </div>
  );
}

// ── main component ─────────────────────────────────────────────────────────────

export function DeterminanteCalculator() {
  const [size, setSize] = useState<Size>(3);
  const [matrix, setMatrix] = useState<string[][]>(DEF_MATRIX_3);
  const [result, setResult] = useState<CalcResult>(DEF_RESULT);
  const [copied, setCopied] = useState(false);

  function changeSize(n: Size) {
    setSize(n);
    setMatrix(prev => resizeSq(prev, n));
  }

  function updateCell(i: number, j: number, v: string) {
    setMatrix(prev => prev.map((row, ri) => ri === i ? row.map((c, ci) => ci === j ? v : c) : row));
  }

  function handleCalculate() {
    if (hasEmpty(matrix)) {
      setResult({ type: 'error', explanation: 'Completa todos los valores de la matriz.' });
      return;
    }
    if (hasInvalid(matrix)) {
      setResult({ type: 'error', explanation: 'Cada celda debe contener un número válido.' });
      return;
    }
    setResult(buildResult(parseMatrix(matrix), size));
  }

  function handleCopy() {
    if (result.type === 'success' && result.det !== undefined) {
      navigator.clipboard.writeText(fmtNum(result.det)).catch(() => {});
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  function applyExample(ex: ExampleConfig) {
    setSize(ex.size);
    setMatrix(ex.matrix);
    const m = parseMatrix(ex.matrix);
    setResult(buildResult(m, ex.size));
  }

  function handleReset() {
    setSize(3); setMatrix(DEF_MATRIX_3); setResult(DEF_RESULT);
  }

  const preview = `det(A ${size}×${size})`;
  const isZeroResult = result.type === 'success' && result.det !== undefined && Math.abs(result.det) < 1e-9;

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de determinantes
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-7">

            {/* Size selector */}
            <div className="mb-6">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Tamaño de la matriz</p>
              <div className="flex overflow-hidden rounded-lg border border-line" role="tablist" aria-label="Tamaño de la matriz cuadrada">
                {([2, 3, 4] as Size[]).map(s => (
                  <button
                    key={s}
                    role="tab"
                    aria-selected={size === s}
                    onClick={() => changeSize(s)}
                    className={`flex-1 py-2.5 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal ${
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Matriz A</p>
              <span
                className="rounded-full px-2.5 py-0.5 font-mono text-xs font-bold"
                style={{ background: '#DDF3F0', color: '#0F5C5C' }}
              >
                {size} × {size}
              </span>
            </div>

            {/* Matrix grid */}
            <div className="mb-6">
              <MatrixGrid matrix={matrix} onCell={updateCell} n={size} />
            </div>

            {/* Operation preview */}
            <div className="mb-6 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.6)' }}>
                Vista previa
              </p>
              <p className="font-mono text-2xl font-bold" style={{ color: '#D8A31A' }}>
                {preview}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCalculate}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none"
                style={{ background: '#D8A31A' }}
              >
                Calcular determinante
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado del determinante</p>
            </div>

            {result.type === 'error' ? (
              <div className="mx-7 mt-5 flex gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3" role="alert">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5zm0 6.5a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z" />
                </svg>
                <p className="text-sm text-red-700">{result.explanation}</p>
              </div>
            ) : (
              <div className="divide-y divide-line">

                {/* Operation */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Operación</p>
                  <p className="font-mono text-sm font-semibold text-slate">det(A {size}×{size})</p>
                </div>

                {/* Determinant — single large number, very dominant */}
                <div className="px-7 py-6">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">det(A)</p>
                  <div className="flex items-center gap-4 rounded-xl px-6 py-6" style={{ background: '#0a3535' }}>
                    <span
                      className="font-mono text-5xl font-bold"
                      style={{ color: isZeroResult ? 'rgba(216,163,26,0.6)' : '#D8A31A' }}
                    >
                      {result.det !== undefined ? fmtNum(result.det) : '?'}
                    </span>
                    {isZeroResult && (
                      <span
                        className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                        style={{ background: 'rgba(185,28,28,0.15)', color: '#fca5a5', border: '1px solid rgba(185,28,28,0.3)' }}
                      >
                        Singular
                      </span>
                    )}
                  </div>
                </div>

                {/* Method */}
                {result.method && (
                  <div className="px-7 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Método utilizado</p>
                    <span
                      className="inline-block rounded-lg px-3 py-1.5 font-mono text-xs font-bold"
                      style={{ background: '#EEF4F7', color: '#334e68' }}
                    >
                      {result.method}
                    </span>
                  </div>
                )}

                {/* Calculation */}
                {result.calculation && (
                  <div className="px-7 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Cálculo</p>
                    <p className="mt-1 overflow-x-auto rounded-lg px-3 py-2.5 font-mono text-xs" style={{ background: '#EEF4F7', color: '#334e68' }}>
                      {result.calculation}
                    </p>
                  </div>
                )}

                {/* Interpretation */}
                {result.interpretation && (
                  <div className="px-7 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Interpretación</p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: isZeroResult ? '#b91c1c' : '#0F5C5C' }}
                    >
                      {result.interpretation}
                    </p>
                  </div>
                )}

                {/* Explanation */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Explicación</p>
                  <p className="text-xs leading-relaxed text-slate">{result.explanation}</p>
                </div>

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
