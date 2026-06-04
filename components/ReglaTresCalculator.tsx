'use client';

import { useState } from 'react';

type Mode = 'directa' | 'inversa';

type CalcResult =
  | {
      type: 'success';
      mode: Mode;
      a: string; b: string; c: string;
      x: string;
      formula: string;
      step1: string;
      step2: string;
      interp: string;
    }
  | { type: 'error'; message: string };

// ── Calculation logic ─────────────────────────────────────────────────────────

function fmtNum(n: number): string {
  if (!isFinite(n)) return '?';
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(8)).toString();
}

function compute(mode: Mode, aStr: string, bStr: string, cStr: string): CalcResult {
  if (!aStr.trim() || !bStr.trim() || !cStr.trim()) {
    return { type: 'error', message: 'Introduce todos los valores para calcular.' };
  }
  const a = parseFloat(aStr);
  const b = parseFloat(bStr);
  const c = parseFloat(cStr);
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return { type: 'error', message: 'Cada valor debe ser un número válido.' };
  }
  if (a === 0) {
    return { type: 'error', message: 'El valor A no puede ser 0.' };
  }
  if (mode === 'inversa' && c === 0) {
    return { type: 'error', message: 'El valor C no puede ser 0 en regla de tres inversa.' };
  }

  let x: number;
  let formula: string;
  let step1: string;
  let step2: string;
  let interp: string;

  if (mode === 'directa') {
    x = (b * c) / a;
    const prod = fmtNum(b * c);
    formula = `X = ${fmtNum(b)} × ${fmtNum(c)} / ${fmtNum(a)}`;
    step1   = `${fmtNum(b)} × ${fmtNum(c)} = ${prod}`;
    step2   = `${prod} ÷ ${fmtNum(a)} = ${fmtNum(x)}`;
    interp  = `Si ${fmtNum(a)} unidades equivalen a ${fmtNum(b)}, entonces ${fmtNum(c)} unidades equivalen a ${fmtNum(x)}.`;
  } else {
    x = (a * b) / c;
    const prod = fmtNum(a * b);
    formula = `X = ${fmtNum(a)} × ${fmtNum(b)} / ${fmtNum(c)}`;
    step1   = `${fmtNum(a)} × ${fmtNum(b)} = ${prod}`;
    step2   = `${prod} ÷ ${fmtNum(c)} = ${fmtNum(x)}`;
    interp  = `Cuando una magnitud aumenta, la otra disminuye proporcionalmente: X = ${fmtNum(x)}.`;
  }

  return {
    type: 'success', mode, a: fmtNum(a), b: fmtNum(b), c: fmtNum(c),
    x: fmtNum(x), formula, step1, step2, interp,
  };
}

// ── Example chips ─────────────────────────────────────────────────────────────

type Example = { label: string; mode: Mode; a: string; b: string; c: string };

const EXAMPLES: Example[] = [
  { label: 'Precio directo',      mode: 'directa',  a: '3',  b: '150', c: '5'  },
  { label: 'Trabajadores inversa', mode: 'inversa',  a: '4',  b: '6',   c: '8'  },
  { label: 'Receta directa',       mode: 'directa',  a: '2',  b: '500', c: '5'  },
  { label: 'Velocidad inversa',    mode: 'inversa',  a: '60', b: '4',   c: '80' },
  { label: 'Escuela directa',      mode: 'directa',  a: '8',  b: '40',  c: '12' },
];

const DEF = EXAMPLES[0];
const DEF_RESULT = compute(DEF.mode, DEF.a, DEF.b, DEF.c);

// ── Component ─────────────────────────────────────────────────────────────────

export function ReglaTresCalculator() {
  const [mode,   setMode]   = useState<Mode>(DEF.mode);
  const [a,      setA]      = useState(DEF.a);
  const [b,      setB]      = useState(DEF.b);
  const [c,      setC]      = useState(DEF.c);
  const [result, setResult] = useState<CalcResult>(DEF_RESULT);
  const [copied, setCopied] = useState<'result' | 'formula' | null>(null);

  function handleCalc() { setResult(compute(mode, a, b, c)); }

  function handleReset() {
    setMode('directa'); setA('3'); setB('150'); setC('5');
    setResult(compute('directa', '3', '150', '5'));
  }

  function applyExample(ex: Example) {
    setMode(ex.mode); setA(ex.a); setB(ex.b); setC(ex.c);
    setResult(compute(ex.mode, ex.a, ex.b, ex.c));
  }

  function handleCopy(type: 'result' | 'formula') {
    if (result.type !== 'success') return;
    const text = type === 'result' ? `X = ${result.x}` : result.formula;
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  // Live proportion preview
  const aDisp = a || 'A';
  const bDisp = b || 'B';
  const cDisp = c || 'C';
  const fPreview = mode === 'directa'
    ? `X = ${bDisp} × ${cDisp} / ${aDisp}`
    : `X = ${aDisp} × ${bDisp} / ${cDisp}`;

  const ok = result.type === 'success';

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de regla de tres
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-7">

            {/* Mode tabs */}
            <div className="mb-6">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Tipo de relación</p>
              <div
                className="flex overflow-hidden rounded-lg border border-line"
                role="tablist"
                aria-label="Tipo de regla de tres"
              >
                {(['directa', 'inversa'] as Mode[]).map(m => (
                  <button
                    key={m}
                    role="tab"
                    aria-selected={mode === m}
                    onClick={() => setMode(m)}
                    className={`flex-1 py-3 text-sm font-bold capitalize transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      mode === m ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                    }`}
                  >
                    {m === 'directa' ? 'Directa' : 'Inversa'}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-slate">
                {mode === 'directa'
                  ? 'Las dos magnitudes aumentan o disminuyen a la vez.'
                  : 'Una magnitud aumenta y la otra disminuye proporcionalmente.'}
              </p>
            </div>

            {/* Inputs */}
            <div className="mb-5 grid grid-cols-3 gap-4">
              {[
                { id: 'val-a', label: 'Valor A', hint: 'Primer valor conocido',   value: a, setter: setA },
                { id: 'val-b', label: 'Valor B', hint: 'Resultado relacionado',   value: b, setter: setB },
                { id: 'val-c', label: 'Valor C', hint: 'Nuevo valor',             value: c, setter: setC },
              ].map(({ id, label, hint, value, setter }) => (
                <div key={id}>
                  <label htmlFor={id} className="mb-1 block text-xs font-bold text-ink">
                    {label}
                  </label>
                  <input
                    id={id}
                    type="text"
                    inputMode="decimal"
                    value={value}
                    onChange={e => setter(e.target.value)}
                    placeholder="0"
                    className="h-12 w-full rounded-xl border border-line bg-white px-3 text-center font-mono text-lg font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    aria-label={`${label} — ${hint}`}
                  />
                  <p className="mt-1 text-center text-[10px] leading-tight text-muted">{hint}</p>
                </div>
              ))}
            </div>

            {/* Proportion preview */}
            <div
              className="mb-6 rounded-xl px-5 py-4"
              style={{ background: '#0a3535' }}
            >
              <p className="mb-2 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                Proporción
              </p>
              <div className="mb-1.5 flex items-center gap-6 font-mono text-sm" style={{ color: 'rgba(221,243,240,0.7)' }}>
                <span>{aDisp} &rarr; {bDisp}</span>
                <span style={{ color: 'rgba(221,243,240,0.3)' }}>·</span>
                <span>{cDisp} &rarr; X</span>
              </div>
              <p className="font-mono text-base font-bold" style={{ color: '#D8A31A' }}>
                {fPreview}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCalc}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                style={{ background: '#D8A31A' }}
              >
                {mode === 'directa' ? 'Calcular regla directa' : 'Calcular regla inversa'}
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado de la proporción</p>
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

                {/* Tipo */}
                <div className="px-7 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Tipo de cálculo</p>
                  <span
                    className="inline-block rounded-md px-2.5 py-1 text-xs font-bold"
                    style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  >
                    Regla de tres {result.mode}
                  </span>
                </div>

                {/* Proportion display */}
                <div className="px-7 py-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Valores ingresados</p>
                  <div className="flex flex-wrap gap-x-8 gap-y-1 font-mono text-sm text-slate">
                    <span>{result.a} &rarr; {result.b}</span>
                    <span>{result.c} &rarr; X</span>
                  </div>
                </div>

                {/* Result X — dominant */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                  <div className="rounded-xl px-6 py-5" style={{ background: '#0a3535' }}>
                    <p className="mb-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                      Valor X — valor desconocido
                    </p>
                    <span className="font-mono text-4xl font-bold" style={{ color: '#D8A31A' }}>
                      {ok ? result.x : '?'}
                    </span>
                  </div>
                </div>

                {/* Formula */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Fórmula</p>
                  <p className="font-mono text-sm font-semibold text-ink">{ok ? result.formula : '—'}</p>
                </div>

                {/* Steps */}
                <div className="px-7 py-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Procedimiento</p>
                  <div className="flex flex-col gap-1">
                    {ok && <>
                      <p className="font-mono text-xs" style={{ color: '#334e68' }}>{result.step1}</p>
                      <p className="font-mono text-xs" style={{ color: '#334e68' }}>{result.step2}</p>
                    </>}
                  </div>
                </div>

                {/* Interpretation */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Interpretación</p>
                  <p className="text-sm leading-relaxed text-slate">{ok ? result.interp : '—'}</p>
                </div>

                {/* Copy */}
                <div className="flex flex-wrap gap-2 px-7 py-4">
                  <button
                    onClick={() => handleCopy('result')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                    aria-live="polite"
                  >
                    {copied === 'result' ? '✓ Resultado copiado' : 'Copiar resultado'}
                  </button>
                  <button
                    onClick={() => handleCopy('formula')}
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
