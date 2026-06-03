'use client';

import { useState } from 'react';

type Mode = 'sumar' | 'restar' | 'multiplicar' | 'transpuesta' | 'escalar';

type CalcResult = {
  type: 'success' | 'error';
  operation: string;
  result?: number[][];
  dimInfo?: string;
  explanation: string;
  ejemplo?: string;
};

type ExampleConfig = {
  label: string;
  mode: Mode;
  matA: string[][];
  rowsA: number; colsA: number;
  matB?: string[][];
  rowsB?: number; colsB?: number;
  scalar?: string;
};

// ── helpers ────────────────────────────────────────────────────────────────────

function resizeMatrix(m: string[][], rows: number, cols: number): string[][] {
  return Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) => m[i]?.[j] ?? '0')
  );
}

function parseMatrix(m: string[][]): number[][] {
  return m.map(row => row.map(cell => Number(cell.trim())));
}

function hasEmpty(m: string[][]): boolean {
  return m.some(row => row.some(c => !c.trim()));
}

function hasInvalid(m: string[][]): boolean {
  return m.some(row => row.some(c => c.trim() !== '' && isNaN(Number(c.trim()))));
}

function fmtNum(n: number): string {
  if (Math.abs(n - Math.round(n)) < 1e-9) return String(Math.round(n));
  return parseFloat(n.toFixed(6)).toString();
}

function addMat(A: number[][], B: number[][]): number[][] {
  return A.map((row, i) => row.map((v, j) => v + B[i][j]));
}
function subMat(A: number[][], B: number[][]): number[][] {
  return A.map((row, i) => row.map((v, j) => v - B[i][j]));
}
function mulMat(A: number[][], B: number[][]): number[][] {
  const rA = A.length, cA = A[0].length, cB = B[0].length;
  return Array.from({ length: rA }, (_, i) =>
    Array.from({ length: cB }, (_, j) => {
      let s = 0; for (let k = 0; k < cA; k++) s += A[i][k] * B[k][j]; return s;
    })
  );
}
function transMat(A: number[][]): number[][] {
  return Array.from({ length: A[0].length }, (_, j) =>
    Array.from({ length: A.length }, (_, i) => A[i][j])
  );
}
function scalarMat(A: number[][], k: number): number[][] {
  return A.map(row => row.map(v => v * k));
}
function matToClip(m: number[][]): string {
  return '[' + m.map(r => '[' + r.map(fmtNum).join(', ') + ']').join(', ') + ']';
}

// ── defaults ─────────────────────────────────────────────────────────────────

const DEF_A: string[][] = [['1','2'],['3','4']];
const DEF_B: string[][] = [['5','6'],['7','8']];

const DEF_RESULT: CalcResult = {
  type: 'success',
  operation: 'A + B',
  result: [[6,8],[10,12]],
  dimInfo: 'A: 2 × 2   ·   B: 2 × 2   →   R: 2 × 2',
  explanation: 'Se suman los elementos que ocupan la misma posición en ambas matrices.',
};

const MODES: { id: Mode; label: string; btn: string }[] = [
  { id: 'sumar',       label: 'Sumar',       btn: 'Sumar matrices'          },
  { id: 'restar',      label: 'Restar',      btn: 'Restar matrices'         },
  { id: 'multiplicar', label: 'Multiplicar', btn: 'Multiplicar matrices'    },
  { id: 'transpuesta', label: 'Transpuesta', btn: 'Calcular transpuesta'    },
  { id: 'escalar',     label: 'Escalar',     btn: 'Multiplicar por escalar' },
];

const EXAMPLES: ExampleConfig[] = [
  { label: 'A + B 2×2', mode: 'sumar',       matA: DEF_A, rowsA:2, colsA:2, matB: DEF_B, rowsB:2, colsB:2 },
  { label: 'A - B 2×2', mode: 'restar',      matA: DEF_B, rowsA:2, colsA:2, matB: DEF_A, rowsB:2, colsB:2 },
  { label: 'A × B 2×2', mode: 'multiplicar', matA: DEF_A, rowsA:2, colsA:2, matB: [['2','0'],['1','2']], rowsB:2, colsB:2 },
  { label: 'Aᵀ 2×3',   mode: 'transpuesta', matA: [['1','2','3'],['4','5','6']], rowsA:2, colsA:3 },
  { label: '3A',        mode: 'escalar',     matA: DEF_A, rowsA:2, colsA:2, scalar: '3' },
];

const PRESETS = [[2,2],[2,3],[3,2],[3,3]] as const;

const selCls = 'rounded border border-line bg-white px-2 py-1 text-[10px] font-semibold text-ink focus:border-teal focus:outline-none';
const inputCls = 'w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20';

// ── sub-components ─────────────────────────────────────────────────────────────

function MatrixHeader({
  label, rows, cols, onRows, onCols, onPreset,
}: {
  label: string; rows: number; cols: number;
  onRows: (n: number) => void; onCols: (n: number) => void;
  onPreset: (r: number, c: number) => void;
}) {
  return (
    <div className="mb-3">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <p className="text-xs font-bold uppercase tracking-widest text-muted">Matriz {label}</p>
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-xs font-bold"
            style={{ background: '#DDF3F0', color: '#0F5C5C' }}
          >
            {rows} × {cols}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          {PRESETS.map(([r, c]) => (
            <button
              key={`${r}x${c}`}
              onClick={() => onPreset(r, c)}
              className={`rounded px-2 py-1 text-[10px] font-bold transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-teal ${
                rows === r && cols === c
                  ? 'bg-deep-teal text-white'
                  : 'bg-panel text-muted hover:bg-aqua-soft hover:text-deep-teal'
              }`}
              aria-label={`Dimensión ${r}×${c} para Matriz ${label}`}
              aria-pressed={rows === r && cols === c}
            >
              {r}×{c}
            </button>
          ))}
          <span className="mx-0.5 text-[10px] text-muted" aria-hidden="true">·</span>
          <select value={rows} onChange={e => onRows(+e.target.value)} className={selCls} aria-label={`Filas de Matriz ${label}`}>
            {[1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          <span className="text-[10px] text-muted">×</span>
          <select value={cols} onChange={e => onCols(+e.target.value)} className={selCls} aria-label={`Columnas de Matriz ${label}`}>
            {[1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}

function MatrixGrid({
  prefix, matrix, onCell, rows, cols,
}: {
  prefix: string; matrix: string[][];
  onCell: (i: number, j: number, v: string) => void;
  rows: number; cols: number;
}) {
  return (
    <div className="overflow-x-auto">
      <div
        className="inline-grid gap-2"
        style={{ gridTemplateColumns: `repeat(${cols}, 64px)` }}
        role="group"
        aria-label={`Cuadrícula Matriz ${prefix}`}
      >
        {Array.from({ length: rows }, (_, i) =>
          Array.from({ length: cols }, (_, j) => (
            <input
              key={`${i}-${j}`}
              type="text"
              inputMode="decimal"
              value={matrix[i]?.[j] ?? '0'}
              onChange={e => onCell(i, j, e.target.value)}
              aria-label={`Matriz ${prefix} fila ${i + 1} columna ${j + 1}`}
              className="h-12 rounded-lg border border-line bg-white text-center font-mono text-base font-semibold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            />
          ))
        )}
      </div>
    </div>
  );
}

function MatrixResult({ matrix }: { matrix: number[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl p-5" style={{ background: '#0a3535' }}>
      <div
        className="inline-block"
        style={{
          borderLeft: '3px solid rgba(216,163,26,0.65)',
          borderRight: '3px solid rgba(216,163,26,0.65)',
          paddingLeft: '18px',
          paddingRight: '18px',
        }}
      >
        {matrix.map((row, i) => (
          <div key={i} className="flex gap-6 py-1.5">
            {row.map((val, j) => (
              <span
                key={j}
                className="min-w-[44px] text-center font-mono text-xl font-bold"
                style={{ color: '#D8A31A' }}
              >
                {fmtNum(val)}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── main component ─────────────────────────────────────────────────────────────

export function MatricesCalculator() {
  const [mode, setMode] = useState<Mode>('sumar');
  const [rowsA, setRowsA] = useState(2);
  const [colsA, setColsA] = useState(2);
  const [rowsB, setRowsB] = useState(2);
  const [colsB, setColsB] = useState(2);
  const [matA, setMatA] = useState<string[][]>(DEF_A);
  const [matB, setMatB] = useState<string[][]>(DEF_B);
  const [scalar, setScalar] = useState('3');
  const [result, setResult] = useState<CalcResult>(DEF_RESULT);
  const [copied, setCopied] = useState(false);

  const needsB = mode === 'sumar' || mode === 'restar' || mode === 'multiplicar';
  const activeMode = MODES.find(m => m.id === mode)!;

  const preview = (() => {
    if (mode === 'sumar') return 'A + B';
    if (mode === 'restar') return 'A - B';
    if (mode === 'multiplicar') return 'A × B';
    if (mode === 'transpuesta') return 'Aᵀ';
    return `${scalar.trim() || 'k'}A`;
  })();

  // ── dimension handlers ──────────────────────────────────────────────────────

  function changeRowsA(r: number) {
    setRowsA(r); setMatA(p => resizeMatrix(p, r, colsA));
    if (mode === 'sumar' || mode === 'restar') { setRowsB(r); setMatB(p => resizeMatrix(p, r, colsB)); }
  }
  function changeColsA(c: number) {
    setColsA(c); setMatA(p => resizeMatrix(p, rowsA, c));
    if (mode === 'sumar' || mode === 'restar') { setColsB(c); setMatB(p => resizeMatrix(p, rowsB, c)); }
    else if (mode === 'multiplicar') { setRowsB(c); setMatB(p => resizeMatrix(p, c, colsB)); }
  }
  function changeRowsB(r: number) { setRowsB(r); setMatB(p => resizeMatrix(p, r, colsB)); }
  function changeColsB(c: number) { setColsB(c); setMatB(p => resizeMatrix(p, rowsB, c)); }

  function presetA(r: number, c: number) {
    setRowsA(r); setColsA(c); setMatA(p => resizeMatrix(p, r, c));
    if (mode === 'sumar' || mode === 'restar') { setRowsB(r); setColsB(c); setMatB(p => resizeMatrix(p, r, c)); }
    else if (mode === 'multiplicar') { setRowsB(c); setMatB(p => resizeMatrix(p, c, colsB)); }
  }
  function presetB(r: number, c: number) { setRowsB(r); setColsB(c); setMatB(p => resizeMatrix(p, r, c)); }

  function updateA(i: number, j: number, v: string) {
    setMatA(p => p.map((row, ri) => ri === i ? row.map((c, ci) => ci === j ? v : c) : row));
  }
  function updateB(i: number, j: number, v: string) {
    setMatB(p => p.map((row, ri) => ri === i ? row.map((c, ci) => ci === j ? v : c) : row));
  }

  function changeMode(m: Mode) {
    setMode(m);
    if (m === 'sumar' || m === 'restar') {
      setRowsB(rowsA); setColsB(colsA); setMatB(p => resizeMatrix(p, rowsA, colsA));
    } else if (m === 'multiplicar') {
      setRowsB(colsA); setMatB(p => resizeMatrix(p, colsA, colsB));
    }
  }

  // ── calculate ───────────────────────────────────────────────────────────────

  function handleCalculate() {
    if (hasEmpty(matA)) {
      setResult({ type: 'error', operation: preview, explanation: 'Completa todos los valores de la matriz.' });
      return;
    }
    if (hasInvalid(matA)) {
      setResult({ type: 'error', operation: preview, explanation: 'Cada celda debe contener un número válido.' });
      return;
    }
    const A = parseMatrix(matA);

    if (mode === 'transpuesta') {
      const T = transMat(A);
      setResult({ type: 'success', operation: 'Aᵀ', result: T, dimInfo: `A: ${rowsA} × ${colsA}   →   Aᵀ: ${colsA} × ${rowsA}`, explanation: 'Las filas de A se convierten en columnas de la transpuesta.' });
      return;
    }

    if (mode === 'escalar') {
      const k = Number(scalar.trim());
      if (!scalar.trim() || isNaN(k)) {
        setResult({ type: 'error', operation: preview, explanation: 'El escalar debe ser un número válido.' });
        return;
      }
      const S = scalarMat(A, k);
      setResult({ type: 'success', operation: `${fmtNum(k)}A`, result: S, dimInfo: `Matriz: ${rowsA} × ${colsA}`, explanation: `Cada elemento de la matriz se multiplica por ${fmtNum(k)}.` });
      return;
    }

    if (hasEmpty(matB)) {
      setResult({ type: 'error', operation: preview, explanation: 'Completa todos los valores de la matriz.' });
      return;
    }
    if (hasInvalid(matB)) {
      setResult({ type: 'error', operation: preview, explanation: 'Cada celda debe contener un número válido.' });
      return;
    }
    const B = parseMatrix(matB);

    if (mode === 'sumar' || mode === 'restar') {
      if (rowsA !== rowsB || colsA !== colsB) {
        setResult({ type: 'error', operation: preview, explanation: 'Para sumar o restar matrices, ambas deben tener las mismas dimensiones.' });
        return;
      }
      const R = mode === 'sumar' ? addMat(A, B) : subMat(A, B);
      setResult({
        type: 'success',
        operation: mode === 'sumar' ? 'A + B' : 'A - B',
        result: R,
        dimInfo: `A: ${rowsA} × ${colsA}   ·   B: ${rowsB} × ${colsB}   →   R: ${rowsA} × ${colsA}`,
        explanation: mode === 'sumar'
          ? 'Se suman los elementos que ocupan la misma posición en ambas matrices.'
          : 'Se restan los elementos que ocupan la misma posición en ambas matrices.',
      });
      return;
    }

    if (mode === 'multiplicar') {
      if (colsA !== rowsB) {
        setResult({ type: 'error', operation: 'A × B', explanation: 'Para multiplicar matrices, el número de columnas de A debe coincidir con el número de filas de B.' });
        return;
      }
      const R = mulMat(A, B);
      const ex11 = A[0].map((v, k) => `${fmtNum(v)}·${fmtNum(B[k][0])}`).join(' + ');
      setResult({
        type: 'success',
        operation: 'A × B',
        result: R,
        dimInfo: `A: ${rowsA} × ${colsA}   ·   B: ${rowsB} × ${colsB}   →   R: ${rowsA} × ${colsB}`,
        explanation: 'Cada elemento se obtiene multiplicando la fila de A por la columna de B correspondiente.',
        ejemplo: `Elemento (1,1): ${ex11} = ${fmtNum(R[0][0])}`,
      });
      return;
    }
  }

  // ── copy ────────────────────────────────────────────────────────────────────

  function handleCopy() {
    if (result.type === 'success' && result.result) {
      navigator.clipboard.writeText(matToClip(result.result)).catch(() => {});
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  // ── examples ────────────────────────────────────────────────────────────────

  function applyExample(ex: ExampleConfig) {
    changeMode(ex.mode);
    setRowsA(ex.rowsA); setColsA(ex.colsA); setMatA(ex.matA);
    if (ex.matB && ex.rowsB !== undefined && ex.colsB !== undefined) {
      setRowsB(ex.rowsB); setColsB(ex.colsB); setMatB(ex.matB);
    }
    if (ex.scalar !== undefined) setScalar(ex.scalar);

    const A = parseMatrix(ex.matA);
    if (ex.mode === 'transpuesta') {
      const T = transMat(A);
      setResult({ type: 'success', operation: 'Aᵀ', result: T, dimInfo: `A: ${ex.rowsA} × ${ex.colsA}   →   Aᵀ: ${ex.colsA} × ${ex.rowsA}`, explanation: 'Las filas de A se convierten en columnas de la transpuesta.' });
      return;
    }
    if (ex.mode === 'escalar' && ex.scalar) {
      const k = Number(ex.scalar);
      setResult({ type: 'success', operation: `${k}A`, result: scalarMat(A, k), dimInfo: `Matriz: ${ex.rowsA} × ${ex.colsA}`, explanation: `Cada elemento se multiplica por ${k}.` });
      return;
    }
    if (!ex.matB || ex.rowsB === undefined || ex.colsB === undefined) return;
    const B = parseMatrix(ex.matB);
    if (ex.mode === 'sumar') {
      setResult({ type: 'success', operation: 'A + B', result: addMat(A, B), dimInfo: `A: ${ex.rowsA} × ${ex.colsA}   ·   B: ${ex.rowsB} × ${ex.colsB}   →   R: ${ex.rowsA} × ${ex.colsA}`, explanation: 'Se suman los elementos que ocupan la misma posición en ambas matrices.' });
    } else if (ex.mode === 'restar') {
      setResult({ type: 'success', operation: 'A - B', result: subMat(A, B), dimInfo: `A: ${ex.rowsA} × ${ex.colsA}   ·   B: ${ex.rowsB} × ${ex.colsB}   →   R: ${ex.rowsA} × ${ex.colsA}`, explanation: 'Se restan los elementos que ocupan la misma posición en ambas matrices.' });
    } else if (ex.mode === 'multiplicar' && ex.colsA === ex.rowsB) {
      const R = mulMat(A, B);
      const ex11 = A[0].map((v, k) => `${fmtNum(v)}·${fmtNum(B[k][0])}`).join(' + ');
      setResult({ type: 'success', operation: 'A × B', result: R, dimInfo: `A: ${ex.rowsA} × ${ex.colsA}   ·   B: ${ex.rowsB} × ${ex.colsB}   →   R: ${ex.rowsA} × ${ex.colsB}`, explanation: 'Cada elemento se obtiene multiplicando la fila de A por la columna de B correspondiente.', ejemplo: `Elemento (1,1): ${ex11} = ${fmtNum(R[0][0])}` });
    }
  }

  function handleReset() {
    setMode('sumar'); setRowsA(2); setColsA(2); setRowsB(2); setColsB(2);
    setMatA(DEF_A); setMatB(DEF_B); setScalar('3'); setResult(DEF_RESULT);
  }

  // ── render ──────────────────────────────────────────────────────────────────

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de matrices
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-7">

            {/* Mode tabs */}
            <div className="mb-6 flex overflow-hidden rounded-lg border border-line" role="tablist" aria-label="Operación con matrices">
              {MODES.map(m => (
                <button
                  key={m.id}
                  role="tab"
                  aria-selected={mode === m.id}
                  onClick={() => changeMode(m.id)}
                  className={`flex-1 py-2 text-[10px] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal ${
                    mode === m.id ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* Matrix A */}
            <div className="mb-6">
              <MatrixHeader
                label="A" rows={rowsA} cols={colsA}
                onRows={changeRowsA} onCols={changeColsA}
                onPreset={presetA}
              />
              <MatrixGrid prefix="A" matrix={matA} onCell={updateA} rows={rowsA} cols={colsA} />
            </div>

            {/* Matrix B */}
            {needsB && (
              <div className="mb-6">
                <MatrixHeader
                  label="B" rows={rowsB} cols={colsB}
                  onRows={changeRowsB} onCols={changeColsB}
                  onPreset={presetB}
                />
                <MatrixGrid prefix="B" matrix={matB} onCell={updateB} rows={rowsB} cols={colsB} />
                {mode === 'multiplicar' && (
                  <p className="mt-2 text-[10px] font-semibold" style={{ color: colsA === rowsB ? '#0F5C5C' : '#b91c1c' }}>
                    Condición: columnas de A ({colsA}) = filas de B ({rowsB})
                    {colsA === rowsB ? ' ✓' : ' — ajusta las dimensiones'}
                  </p>
                )}
              </div>
            )}

            {/* Scalar */}
            {mode === 'escalar' && (
              <div className="mb-6">
                <label htmlFor="mat-scalar" className="mb-1.5 block text-sm font-semibold text-slate">Escalar</label>
                <input
                  id="mat-scalar"
                  type="text"
                  inputMode="decimal"
                  value={scalar}
                  onChange={e => setScalar(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') handleCalculate(); }}
                  placeholder="3"
                  className={inputCls}
                  autoComplete="off"
                />
              </div>
            )}

            {/* Operation preview — dark teal, prominent */}
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
                {activeMode.btn}
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
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal focus:outline-none"
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado de la operación</p>
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

                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Operación</p>
                  <p className="font-mono text-sm font-semibold text-slate">{result.operation}</p>
                </div>

                {/* Result matrix — dominant */}
                <div className="px-7 py-6">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">Matriz resultado</p>
                  {result.result && <MatrixResult matrix={result.result} />}
                </div>

                {result.dimInfo && (
                  <div className="px-7 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Dimensiones</p>
                    <p className="font-mono text-xs text-slate">{result.dimInfo}</p>
                  </div>
                )}

                {result.ejemplo && (
                  <div className="px-7 py-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Cálculo de ejemplo</p>
                    <p className="mt-1 rounded-lg px-3 py-2 font-mono text-xs" style={{ background: '#EEF4F7', color: '#334e68' }}>
                      {result.ejemplo}
                    </p>
                  </div>
                )}

                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Explicación</p>
                  <p className="text-xs leading-relaxed text-slate">{result.explanation}</p>
                </div>

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
