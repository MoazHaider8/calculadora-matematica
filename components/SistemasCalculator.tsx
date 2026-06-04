'use client';

import { useState } from 'react';

type Size = 2 | 3;

type SolveResult =
  | { type: 'unique';    values: number[]; verification: string[] }
  | { type: 'no_solution' }
  | { type: 'infinite'  }
  | { type: 'error';    msg: string };

type CalcState =
  | { status: 'success'; result: SolveResult }
  | { status: 'error';   message: string }
  | { status: 'idle' };

type ExampleConfig = {
  label: string;
  size: Size;
  aug: string[][];
};

// ── math helpers ───────────────────────────────────────────────────────────────

function fmtN(n: number): string {
  if (Math.abs(n - Math.round(n)) < 1e-9) return String(Math.round(n));
  return parseFloat(n.toFixed(6)).toString();
}

function gaussElim(orig: number[][]): SolveResult {
  const n = orig.length;
  const A = orig.map(row => [...row]);

  for (let col = 0; col < n; col++) {
    let maxRow = col;
    for (let row = col + 1; row < n; row++) {
      if (Math.abs(A[row][col]) > Math.abs(A[maxRow][col])) maxRow = row;
    }
    [A[col], A[maxRow]] = [A[maxRow], A[col]];

    const pivot = A[col][col];
    if (Math.abs(pivot) < 1e-10) continue;

    for (let row = col + 1; row < n; row++) {
      const factor = A[row][col] / pivot;
      for (let j = col; j <= n; j++) {
        A[row][j] -= factor * A[col][j];
      }
    }
  }

  for (let row = 0; row < n; row++) {
    const allZero = A[row].slice(0, n).every(c => Math.abs(c) < 1e-9);
    if (allZero) {
      return Math.abs(A[row][n]) > 1e-9 ? { type: 'no_solution' } : { type: 'infinite' };
    }
  }

  const x = new Array(n).fill(0);
  for (let row = n - 1; row >= 0; row--) {
    x[row] = A[row][n];
    for (let col = row + 1; col < n; col++) x[row] -= A[row][col] * x[col];
    if (Math.abs(A[row][row]) < 1e-10) {
      return { type: 'error', msg: 'No se pudo resolver el sistema de forma confiable.' };
    }
    x[row] /= A[row][row];
  }

  return { type: 'unique', values: x, verification: [] };
}

function buildVerification(orig: number[][], values: number[], vars: string[]): string[] {
  return orig.map((row, ri) => {
    const lhs = row.slice(0, -1).map((c, i) => {
      const v = c * values[i];
      const vFmt = fmtN(Math.abs(v));
      const sign = v < 0 ? (i === 0 ? '−' : ' − ') : (i === 0 ? '' : ' + ');
      return `${sign}${vFmt}`;
    }).join('');
    const rhs = fmtN(row[row.length - 1]);
    const computed = fmtN(row.slice(0, -1).reduce((s, c, i) => s + c * values[i], 0));
    return `Ec. ${ri + 1}: ${lhs} = ${computed} (esperado ${rhs})`;
  });
}

// ── equation preview ──────────────────────────────────────────────────────────

function fmtTerm(c: number, varName: string, first: boolean): string {
  if (Math.abs(c) < 1e-9) return '';
  const absC = Math.abs(c);
  const neg = c < 0;
  const prefix = neg ? (first ? '−' : ' − ') : (first ? '' : ' + ');
  const coefStr = absC === 1 ? '' : fmtN(absC);
  return `${prefix}${coefStr}${varName}`;
}

function buildEqn(row: string[], vars: string[]): string {
  const n = vars.length;
  let parts: string[] = [];
  let first = true;
  for (let i = 0; i < n; i++) {
    const c = parseFloat(row[i]);
    if (isNaN(c)) continue;
    const t = fmtTerm(c, vars[i], first);
    if (t) { parts.push(t); first = false; }
  }
  const rhs = row[n];
  const rhsNum = parseFloat(rhs);
  if (parts.length === 0) parts = ['0'];
  return `${parts.join('')} = ${isNaN(rhsNum) ? '?' : fmtN(rhsNum)}`;
}

// ── grid helpers ──────────────────────────────────────────────────────────────

const DEF_AUG_2: string[][] = [['2','1','5'],['1','-1','1']];
const DEF_AUG_3: string[][] = [['1','1','1','6'],['2','-1','1','3'],['1','2','3','14']];

const VARS: Record<Size, string[]> = { 2: ['x','y'], 3: ['x','y','z'] };

const EXAMPLES: ExampleConfig[] = [
  { label: '2×2 solución única',       size: 2, aug: [['2','1','5'],['1','-1','1']] },
  { label: '2×2 sin solución',         size: 2, aug: [['1','1','2'],['1','1','5']] },
  { label: '2×2 infinitas soluciones', size: 2, aug: [['1','1','2'],['2','2','4']] },
  { label: '3×3 solución única',       size: 3, aug: [['1','1','1','6'],['2','-1','1','3'],['1','2','3','14']] },
];

function resizeAug(aug: string[][], n: Size): string[][] {
  const cols = n + 1;
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: cols }, (_, j) => aug[i]?.[j] ?? '0')
  );
}

function hasEmpty(aug: string[][]): boolean {
  return aug.some(row => row.some(c => !c.trim()));
}

function hasInvalid(aug: string[][]): boolean {
  return aug.some(row => row.some(c => c.trim() !== '' && isNaN(Number(c.trim()))));
}

function parseAug(aug: string[][]): number[][] {
  return aug.map(row => row.map(c => Number(c.trim())));
}

function solve(size: Size, aug: string[][]): CalcState {
  if (hasEmpty(aug)) return { status: 'error', message: 'Completa todos los coeficientes del sistema.' };
  if (hasInvalid(aug)) return { status: 'error', message: 'Cada coeficiente debe contener un número válido.' };
  const nums = parseAug(aug);
  const res = gaussElim(nums);
  if (res.type === 'unique') {
    const vars = VARS[size];
    const v = buildVerification(nums, res.values, vars);
    return { status: 'success', result: { ...res, verification: v } };
  }
  return { status: 'success', result: res };
}

const DEF_STATE: CalcState = solve(2, DEF_AUG_2);

// ── CoeffCell ─────────────────────────────────────────────────────────────────

function CoeffCell({ value, onChange, label }: { value: string; onChange: (v: string) => void; label: string }) {
  return (
    <input
      type="text"
      inputMode="decimal"
      value={value}
      onChange={e => onChange(e.target.value)}
      aria-label={label}
      className="h-12 w-16 rounded-lg border border-line bg-white text-center font-mono text-base font-semibold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
    />
  );
}

// ── main component ─────────────────────────────────────────────────────────────

export function SistemasCalculator() {
  const [size, setSize]   = useState<Size>(2);
  const [aug, setAug]     = useState<string[][]>(DEF_AUG_2);
  const [calc, setCalc]   = useState<CalcState>(DEF_STATE);
  const [copied, setCopied] = useState(false);

  const vars = VARS[size];

  function changeSize(n: Size) {
    setSize(n);
    setAug(resizeAug(aug, n));
  }

  function updateCell(row: number, col: number, v: string) {
    setAug(prev => prev.map((r, ri) => ri === row ? r.map((c, ci) => ci === col ? v : c) : r));
  }

  function handleSolve() {
    setCalc(solve(size, aug));
  }

  function handleReset() {
    const defAug = size === 2 ? DEF_AUG_2 : DEF_AUG_3;
    setSize(size); setAug(defAug); setCalc(solve(size, defAug));
  }

  function applyExample(ex: ExampleConfig) {
    setSize(ex.size); setAug(ex.aug); setCalc(solve(ex.size, ex.aug));
  }

  function handleCopy() {
    if (calc.status === 'success' && calc.result.type === 'unique') {
      const txt = calc.result.values.map((v, i) => `${vars[i]} = ${fmtN(v)}`).join('\n');
      navigator.clipboard.writeText(txt).catch(() => {});
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const result = calc.status === 'success' ? calc.result : null;
  const isUnique = result?.type === 'unique';
  const isNoSol = result?.type === 'no_solution';
  const isInfinite = result?.type === 'infinite';

  // Build equation preview and augmented matrix preview from current aug
  const eqnPreview = aug.map(row => buildEqn(row, vars));

  const augPreview = aug.map(row => {
    const coeffs = row.slice(0, size).map(c => {
      const n = parseFloat(c);
      return isNaN(n) ? '?' : fmtN(n);
    });
    const rhs = parseFloat(row[size]);
    return `[${coeffs.join('  ')}  |  ${isNaN(rhs) ? '?' : fmtN(rhs)}]`;
  });

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de sistemas de ecuaciones
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-7">

            {/* Size selector */}
            <div className="mb-6">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Tamaño del sistema</p>
              <div
                className="flex overflow-hidden rounded-xl border-2"
                style={{ borderColor: '#D7E2EA' }}
                role="group"
                aria-label="Tamaño del sistema de ecuaciones"
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

            {/* Coefficient grid */}
            <div className="mb-5">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">Coeficientes</p>

              {/* Column headers */}
              <div className="mb-1 overflow-x-auto">
                <div
                  className="inline-grid items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted"
                  style={{ gridTemplateColumns: `repeat(${size}, 64px) 24px 64px` }}
                >
                  {vars.map(v => <span key={v} className="text-center">{v}</span>)}
                  <span className="text-center">=</span>
                  <span className="text-center">RHS</span>
                </div>
              </div>

              {/* Grid rows */}
              <div className="overflow-x-auto">
                <div className="flex flex-col gap-2">
                  {aug.map((row, ri) => (
                    <div
                      key={ri}
                      className="inline-grid items-center gap-2"
                      style={{ gridTemplateColumns: `repeat(${size}, 64px) 24px 64px` }}
                    >
                      {row.slice(0, size).map((cell, ci) => (
                        <CoeffCell
                          key={ci}
                          value={cell}
                          onChange={v => updateCell(ri, ci, v)}
                          label={`Fila ${ri + 1} coeficiente ${vars[ci]}`}
                        />
                      ))}
                      <span className="text-center font-mono font-bold text-muted">=</span>
                      <CoeffCell
                        value={row[size]}
                        onChange={v => updateCell(ri, size, v)}
                        label={`Fila ${ri + 1} término independiente`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Equation preview */}
            <div className="mb-5 rounded-xl px-4 py-3" style={{ background: '#F0FAF9', border: '1px solid #A8DFDA' }}>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#0F5C5C' }}>
                Vista previa
              </p>
              <div className="flex flex-col gap-0.5">
                {eqnPreview.map((eq, i) => (
                  <p key={i} className="font-mono text-sm font-semibold" style={{ color: '#102a43' }}>
                    {eq}
                  </p>
                ))}
              </div>
            </div>

            {/* Matrix preview */}
            <div className="mb-6 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.6)' }}>
                Matriz aumentada [A|b]
              </p>
              <div className="flex flex-col gap-0.5">
                {augPreview.map((line, i) => (
                  <p key={i} className="font-mono text-sm font-semibold" style={{ color: '#D8A31A' }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleSolve}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none"
                style={{ background: '#D8A31A' }}
              >
                Resolver sistema
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado del sistema</p>
            </div>

            {calc.status === 'error' ? (
              <div className="mx-7 mt-5 flex gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3" role="alert">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5zm0 6.5a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z" />
                </svg>
                <p className="text-sm text-red-700">{calc.message}</p>
              </div>
            ) : calc.status === 'idle' ? null : (
              <div className="divide-y divide-line">

                {/* Sistema */}
                <div className="px-7 py-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Sistema ingresado</p>
                  <div className="flex flex-col gap-0.5">
                    {eqnPreview.map((eq, i) => (
                      <p key={i} className="font-mono text-xs text-slate">{eq}</p>
                    ))}
                  </div>
                </div>

                {/* Solution — dominant */}
                <div className="px-7 py-6">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">
                    {isUnique ? 'Solución' : 'Resultado'}
                  </p>

                  {isUnique && result.type === 'unique' ? (
                    <div className="rounded-xl px-6 py-5" style={{ background: '#0a3535' }}>
                      {result.values.map((v, i) => (
                        <p key={i} className="font-mono text-3xl font-bold leading-tight" style={{ color: '#D8A31A' }}>
                          {vars[i]} = {fmtN(v)}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div
                      className="rounded-xl px-6 py-5"
                      style={{ background: isNoSol ? 'rgba(185,28,28,0.08)' : '#0a3535', border: isNoSol ? '1px solid rgba(185,28,28,0.25)' : 'none' }}
                    >
                      <p
                        className="font-mono text-base font-bold"
                        style={{ color: isNoSol ? '#b91c1c' : '#D8A31A' }}
                      >
                        {isNoSol ? 'El sistema no tiene solución.' : 'El sistema tiene infinitas soluciones.'}
                      </p>
                    </div>
                  )}
                </div>

                {/* Method */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Método utilizado</p>
                  <span
                    className="inline-block rounded-lg px-3 py-1.5 font-mono text-xs font-bold"
                    style={{ background: '#EEF4F7', color: '#334e68' }}
                  >
                    Eliminación gaussiana
                  </span>
                </div>

                {/* Verification */}
                {isUnique && result.type === 'unique' && result.verification.length > 0 && (
                  <div className="px-7 py-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Comprobación</p>
                    <div className="flex flex-col gap-1">
                      {result.verification.map((v, i) => (
                        <p key={i} className="font-mono text-xs" style={{ color: '#334e68' }}>{v}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Interpretation */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Interpretación</p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: isNoSol ? '#b91c1c' : isInfinite ? '#b58000' : '#0F5C5C' }}
                  >
                    {isUnique
                      ? 'El sistema tiene una única solución. Las ecuaciones determinan un solo punto de intersección.'
                      : isNoSol
                        ? 'El sistema es incompatible. Las ecuaciones no comparten ninguna solución.'
                        : 'El sistema es indeterminado. Una ecuación depende de otra y hay infinitas soluciones.'}
                  </p>
                </div>

                {/* Copy */}
                {isUnique && (
                  <div className="flex flex-wrap gap-2 px-7 py-4">
                    <button
                      onClick={handleCopy}
                      className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                      aria-live="polite"
                    >
                      {copied ? '✓ Resultado copiado' : 'Copiar solución'}
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
