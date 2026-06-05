'use client';

import { useState } from 'react';

type Mode = 'simple' | 'complementaria' | 'union' | 'interseccion' | 'alMenosUno';

// ── Formatting ────────────────────────────────────────────────────────────────

function fmtProb(n: number): string {
  if (!isFinite(n)) return '?';
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(4)).toString();
}

function fmtPct(n: number): string {
  const pct = n * 100;
  return Number.isInteger(pct) ? `${pct}%` : `${parseFloat(pct.toFixed(2))}%`;
}

function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }

function simplifyFrac(num: number, den: number): string {
  if (den === 0) return '?';
  const g = gcd(Math.abs(num), Math.abs(den));
  return g === den / g ? `${num / g}` : `${num / g}/${den / g}`;
}

// ── Calculation ────────────────────────────────────────────────────────────────

type ProbResult =
  | { type: 'success'; mode: Mode; prob: number; pct: string; frac?: string; formula: string; calc: string; interp: string }
  | { type: 'error'; message: string };

function parseP(v: string, label: string): number | string {
  if (!v.trim()) return `Introduce el valor de ${label}.`;
  const n = parseFloat(v);
  if (isNaN(n)) return `${label} debe ser un número válido.`;
  if (n < 0 || n > 1) return `La probabilidad de ${label} debe estar entre 0 y 1.`;
  return n;
}

function computeSimple(fav: string, pos: string): ProbResult {
  if (!fav.trim() || !pos.trim()) return { type: 'error', message: 'Introduce todos los valores necesarios.' };
  const f = parseFloat(fav), p = parseFloat(pos);
  if (isNaN(f) || isNaN(p)) return { type: 'error', message: 'Cada valor debe ser un número válido.' };
  if (p <= 0)  return { type: 'error', message: 'Los casos posibles deben ser mayores que 0.' };
  if (f < 0)   return { type: 'error', message: 'Los casos favorables no pueden ser negativos.' };
  if (f > p)   return { type: 'error', message: 'Los casos favorables no pueden ser mayores que los casos posibles.' };
  const prob = f / p;
  return {
    type: 'success', mode: 'simple', prob, pct: fmtPct(prob),
    frac: simplifyFrac(f, p),
    formula: `P(A) = ${fav} / ${pos}`,
    calc:    `P(A) = ${f} / ${p} = ${fmtProb(prob)}`,
    interp:  `La probabilidad del evento es ${fav} de cada ${pos} casos posibles.`,
  };
}

function computeComplementaria(paStr: string): ProbResult {
  const pa = parseP(paStr, 'P(A)');
  if (typeof pa === 'string') return { type: 'error', message: pa };
  const prob = 1 - pa;
  return {
    type: 'success', mode: 'complementaria', prob, pct: fmtPct(prob),
    formula: 'P(no A) = 1 − P(A)',
    calc:    `P(no A) = 1 − ${paStr} = ${fmtProb(prob)}`,
    interp:  `Si P(A) es ${fmtProb(pa)}, la probabilidad de que A no ocurra es ${fmtProb(prob)}.`,
  };
}

function computeUnion(paStr: string, pbStr: string, pintStr: string): ProbResult {
  const pa = parseP(paStr, 'P(A)');
  if (typeof pa === 'string') return { type: 'error', message: pa };
  const pb = parseP(pbStr, 'P(B)');
  if (typeof pb === 'string') return { type: 'error', message: pb };
  const pint = parseP(pintStr, 'P(A ∩ B)');
  if (typeof pint === 'string') return { type: 'error', message: pint };
  if (pint > pa) return { type: 'error', message: 'La intersección no puede ser mayor que P(A).' };
  if (pint > pb) return { type: 'error', message: 'La intersección no puede ser mayor que P(B).' };
  const prob = pa + pb - pint;
  if (prob < 0 || prob > 1) return { type: 'error', message: 'Los valores ingresados generan una probabilidad fuera del rango 0 a 1.' };
  return {
    type: 'success', mode: 'union', prob, pct: fmtPct(prob),
    formula: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',
    calc:    `P(A ∪ B) = ${paStr} + ${pbStr} − ${pintStr} = ${fmtProb(prob)}`,
    interp:  `La probabilidad de que ocurra A o B (o ambos) es ${fmtProb(prob)}.`,
  };
}

function computeInterseccion(paStr: string, pbStr: string): ProbResult {
  const pa = parseP(paStr, 'P(A)');
  if (typeof pa === 'string') return { type: 'error', message: pa };
  const pb = parseP(pbStr, 'P(B)');
  if (typeof pb === 'string') return { type: 'error', message: pb };
  const prob = pa * pb;
  return {
    type: 'success', mode: 'interseccion', prob, pct: fmtPct(prob),
    formula: 'P(A ∩ B) = P(A) × P(B)',
    calc:    `P(A ∩ B) = ${paStr} × ${pbStr} = ${fmtProb(prob)}`,
    interp:  `Dado que A y B son independientes, la probabilidad de que ambos ocurran es ${fmtProb(prob)}.`,
  };
}

function computeAlMenosUno(pStr: string, nStr: string): ProbResult {
  const p = parseP(pStr, 'p');
  if (typeof p === 'string') return { type: 'error', message: p };
  if (!nStr.trim()) return { type: 'error', message: 'Introduce el número de intentos.' };
  const n = parseInt(nStr);
  if (isNaN(n) || n < 1 || !Number.isInteger(n)) return { type: 'error', message: 'El número de intentos debe ser un entero positivo.' };
  const prob = 1 - Math.pow(1 - p, n);
  return {
    type: 'success', mode: 'alMenosUno', prob, pct: fmtPct(prob),
    formula: 'P(al menos uno) = 1 − (1 − p)^n',
    calc:    `P(al menos uno) = 1 − (1 − ${pStr})^${n} = ${fmtProb(prob)}`,
    interp:  `Con probabilidad ${fmtProb(p)} por intento y ${n} intentos, la probabilidad de al menos uno es ${fmtProb(prob)}.`,
  };
}

// ── Examples ──────────────────────────────────────────────────────────────────

type ExDef = { label: string; mode: Mode; fav?: string; pos?: string; pa?: string; pb?: string; pint?: string; p?: string; n?: string };

const EXAMPLES: ExDef[] = [
  { label: '3 de 10',     mode: 'simple',        fav: '3',   pos: '10' },
  { label: 'P(no A)',     mode: 'complementaria', pa: '0.3'  },
  { label: 'Unión',       mode: 'union',          pa: '0.4', pb: '0.3', pint: '0.1' },
  { label: 'Intersección', mode: 'interseccion',  pa: '0.5', pb: '0.4' },
  { label: 'Al menos uno', mode: 'alMenosUno',    p:  '0.2', n: '3'    },
];

const DEF_RESULT = computeSimple('3', '10');

// ── Formula preview ───────────────────────────────────────────────────────────

function buildPreview(mode: Mode, fav: string, pos: string, pa: string, pb: string, pint: string, p: string, n: string): string {
  switch (mode) {
    case 'simple':        return `P(A) = ${fav || '?'} / ${pos || '?'}`;
    case 'complementaria': return `P(no A) = 1 − ${pa || 'P(A)'}`;
    case 'union':         return `P(A ∪ B) = ${pa || 'P(A)'} + ${pb || 'P(B)'} − ${pint || 'P(A∩B)'}`;
    case 'interseccion':  return `P(A ∩ B) = ${pa || 'P(A)'} × ${pb || 'P(B)'}`;
    case 'alMenosUno':    return `P(al menos uno) = 1 − (1 − ${p || 'p'})^${n || 'n'}`;
  }
}

// ── Result symbol ─────────────────────────────────────────────────────────────

const RESULT_LABEL: Record<Mode, string> = {
  simple:         'P(A)',
  complementaria: 'P(no A)',
  union:          'P(A ∪ B)',
  interseccion:   'P(A ∩ B)',
  alMenosUno:     'P(al menos uno)',
};

const CALC_BTN: Record<Mode, string> = {
  simple:         'Calcular probabilidad',
  complementaria: 'Calcular complemento',
  union:          'Calcular unión',
  interseccion:   'Calcular intersección',
  alMenosUno:     'Calcular al menos uno',
};

const MODE_LABELS: { id: Mode; label: string }[] = [
  { id: 'simple',         label: 'Simple'      },
  { id: 'complementaria', label: 'Complemento' },
  { id: 'union',          label: 'Unión'       },
  { id: 'interseccion',   label: 'Intersección' },
  { id: 'alMenosUno',     label: 'Al menos uno' },
];

// ── Component ─────────────────────────────────────────────────────────────────

export function ProbabilidadCalculator() {
  const [mode,   setMode]   = useState<Mode>('simple');
  const [fav,    setFav]    = useState('3');
  const [pos,    setPos]    = useState('10');
  const [pa,     setPa]     = useState('0.3');
  const [pb,     setPb]     = useState('');
  const [pint,   setPint]   = useState('');
  const [p,      setP]      = useState('0.2');
  const [n,      setN]      = useState('3');
  const [result, setResult] = useState<ProbResult>(DEF_RESULT);
  const [copied, setCopied] = useState<'result' | 'formula' | null>(null);

  function handleCalc() {
    switch (mode) {
      case 'simple':         setResult(computeSimple(fav, pos));            break;
      case 'complementaria': setResult(computeComplementaria(pa));          break;
      case 'union':          setResult(computeUnion(pa, pb, pint));         break;
      case 'interseccion':   setResult(computeInterseccion(pa, pb));        break;
      case 'alMenosUno':     setResult(computeAlMenosUno(p, n));            break;
    }
  }

  function handleReset() {
    setMode('simple'); setFav('3'); setPos('10'); setPa('0.3'); setPb(''); setPint(''); setP('0.2'); setN('3');
    setResult(computeSimple('3', '10'));
  }

  function applyExample(ex: ExDef) {
    setMode(ex.mode);
    if (ex.fav  !== undefined) setFav(ex.fav);
    if (ex.pos  !== undefined) setPos(ex.pos);
    if (ex.pa   !== undefined) setPa(ex.pa);
    if (ex.pb   !== undefined) setPb(ex.pb);
    if (ex.pint !== undefined) setPint(ex.pint);
    if (ex.p    !== undefined) setP(ex.p);
    if (ex.n    !== undefined) setN(ex.n);
    // auto-calculate
    setTimeout(() => {
      switch (ex.mode) {
        case 'simple':         setResult(computeSimple(ex.fav ?? fav, ex.pos ?? pos));                         break;
        case 'complementaria': setResult(computeComplementaria(ex.pa ?? pa));                                  break;
        case 'union':          setResult(computeUnion(ex.pa ?? pa, ex.pb ?? pb, ex.pint ?? pint));             break;
        case 'interseccion':   setResult(computeInterseccion(ex.pa ?? pa, ex.pb ?? pb));                       break;
        case 'alMenosUno':     setResult(computeAlMenosUno(ex.p ?? p, ex.n ?? n));                             break;
      }
    }, 0);
  }

  function copyText(type: 'result' | 'formula') {
    if (result.type !== 'success') return;
    const text = type === 'result'
      ? `${RESULT_LABEL[result.mode]} = ${fmtProb(result.prob)} (${result.pct})`
      : result.formula;
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  const preview = buildPreview(mode, fav, pos, pa, pb, pint, p, n);
  const ok = result.type === 'success';

  const probInput = (id: string, label: string, hint: string, value: string, setter: (v: string) => void) => (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-bold text-ink">{label}</label>
      <input
        id={id} type="text" inputMode="decimal" value={value}
        onChange={e => setter(e.target.value)}
        placeholder="0.0"
        className="h-11 w-full rounded-xl border border-line bg-white px-3 font-mono text-sm font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
        aria-label={label}
      />
      <p className="mt-1 text-[10px] text-muted">{hint}</p>
    </div>
  );

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">
        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de probabilidad
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Input panel ── */}
          <div className="academic-card p-6">

            {/* Mode tabs */}
            <div className="mb-5">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Tipo de cálculo</p>
              <div
                className="grid gap-1"
                style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
                role="tablist"
                aria-label="Tipo de probabilidad"
              >
                {MODE_LABELS.map(m => (
                  <button
                    key={m.id}
                    role="tab"
                    aria-selected={mode === m.id}
                    onClick={() => setMode(m.id)}
                    className={`rounded-lg px-1 py-2.5 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      mode === m.id ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mode-specific inputs */}
            <div className="mb-4 flex flex-col gap-3">
              {mode === 'simple' && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="fav-input" className="mb-1 block text-xs font-bold text-ink">Casos favorables</label>
                      <input id="fav-input" type="text" inputMode="numeric" value={fav} onChange={e => setFav(e.target.value)} placeholder="3"
                        className="h-11 w-full rounded-xl border border-line bg-white px-3 text-center font-mono text-lg font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                        aria-label="Casos favorables" />
                    </div>
                    <div>
                      <label htmlFor="pos-input" className="mb-1 block text-xs font-bold text-ink">Casos posibles</label>
                      <input id="pos-input" type="text" inputMode="numeric" value={pos} onChange={e => setPos(e.target.value)} placeholder="10"
                        className="h-11 w-full rounded-xl border border-line bg-white px-3 text-center font-mono text-lg font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                        aria-label="Casos posibles" />
                    </div>
                  </div>
                </>
              )}
              {mode === 'complementaria' && probInput('pa-comp', 'P(A)', 'Valor entre 0 y 1', pa, setPa)}
              {mode === 'union' && (
                <>
                  {probInput('pa-union', 'P(A)', 'Valor entre 0 y 1', pa, setPa)}
                  {probInput('pb-union', 'P(B)', 'Valor entre 0 y 1', pb, setPb)}
                  {probInput('pint-union', 'P(A ∩ B)', 'Intersección entre 0 y 1', pint, setPint)}
                </>
              )}
              {mode === 'interseccion' && (
                <>
                  {probInput('pa-int', 'P(A)', 'Valor entre 0 y 1', pa, setPa)}
                  {probInput('pb-int', 'P(B)', 'Valor entre 0 y 1', pb, setPb)}
                  <p className="text-[10px] text-muted">Solo válido para eventos independientes.</p>
                </>
              )}
              {mode === 'alMenosUno' && (
                <>
                  {probInput('p-alm', 'Probabilidad por intento (p)', 'Valor entre 0 y 1', p, setP)}
                  <div>
                    <label htmlFor="n-alm" className="mb-1 block text-xs font-bold text-ink">Número de intentos (n)</label>
                    <input id="n-alm" type="text" inputMode="numeric" value={n} onChange={e => setN(e.target.value)} placeholder="3"
                      className="h-11 w-full rounded-xl border border-line bg-white px-3 font-mono text-sm font-bold text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                      aria-label="Número de intentos" />
                    <p className="mt-1 text-[10px] text-muted">Entero positivo.</p>
                  </div>
                </>
              )}
            </div>

            {/* Formula preview */}
            <div className="mb-5 rounded-xl px-4 py-3" style={{ background: '#0a3535' }}>
              <p className="mb-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                Fórmula
              </p>
              <p className="break-all font-mono text-sm font-bold" style={{ color: '#D8A31A' }}>
                {preview}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleCalc}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                style={{ background: '#D8A31A' }}
              >
                {CALC_BTN[mode]}
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
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado de probabilidad</p>
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
                    {MODE_LABELS.find(m => m.id === result.mode)?.label}
                  </span>
                </div>

                {/* Result — dominant */}
                <div className="px-7 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                  <div className="rounded-xl px-6 py-5" style={{ background: '#0a3535' }}>
                    <p className="mb-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                      {RESULT_LABEL[result.mode]}
                    </p>
                    <span className="font-mono text-4xl font-bold" style={{ color: '#D8A31A' }}>
                      {fmtProb(result.prob)}
                    </span>
                  </div>
                </div>

                {/* Percentage + fraction row */}
                <div className="flex flex-wrap gap-4 px-7 py-4">
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Porcentaje</p>
                    <span
                      className="inline-block rounded-lg px-3 py-1.5 font-mono text-base font-bold"
                      style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                    >
                      {result.pct}
                    </span>
                  </div>
                  {result.frac && (
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Fracción</p>
                      <span
                        className="inline-block rounded-lg px-3 py-1.5 font-mono text-base font-bold"
                        style={{ background: '#EEF4F7', color: '#334e68' }}
                      >
                        {result.frac}
                      </span>
                    </div>
                  )}
                </div>

                {/* Formula + calc */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Fórmula</p>
                  <p className="mb-1 font-mono text-sm font-semibold text-ink">{result.formula}</p>
                  <p className="font-mono text-xs" style={{ color: '#334e68' }}>{result.calc}</p>
                </div>

                {/* Interpretation */}
                <div className="px-7 py-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Interpretación</p>
                  <p className="text-sm leading-relaxed text-slate">{result.interp}</p>
                </div>

                {/* Copy */}
                <div className="flex flex-wrap gap-2 px-7 py-4">
                  <button
                    onClick={() => copyText('result')}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                    aria-live="polite"
                  >
                    {copied === 'result' ? '✓ Resultado copiado' : 'Copiar resultado'}
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
