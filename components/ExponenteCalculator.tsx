'use client';

import { useState, useCallback, useRef } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type CalcMode = 'power' | 'simplify' | 'fractional' | 'scientific';

interface PowerResult {
  mode: 'power';
  expression: string;
  result: string;
  decimal: string;
  isExact: boolean;
  explanation: string;
  verification: string;
  property: string;
}

interface SimplifyResult {
  mode: 'simplify';
  input: string;
  result: string;
  property: string;
  propertyName: string;
  explanation: string;
}

interface FractionalResult {
  mode: 'fractional';
  expression: string;
  result: string;
  decimal: string;
  isExact: boolean;
  rootDescription: string;
  explanation: string;
}

interface ScientificResult {
  mode: 'scientific';
  original: string;
  coefficient: string;
  exponent: number;
  display: string;
  explanation: string;
}

type CalcResult = PowerResult | SimplifyResult | FractionalResult | ScientificResult;

// ─── Static data ──────────────────────────────────────────────────────────────

const MODE_LABELS: Record<CalcMode, string> = {
  power: 'Calcular potencia',
  simplify: 'Simplificar expresión',
  fractional: 'Exponente fraccionario',
  scientific: 'Notación científica',
};

const SUP: Record<string, string> = {
  '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵',
  '6':'⁶','7':'⁷','8':'⁸','9':'⁹','-':'⁻',
};

function supStr(s: string): string {
  return String(s).split('').map(c => SUP[c] ?? c).join('');
}

function formatDecimal(n: number): string {
  if (!isFinite(n)) return String(n);
  if (Math.abs(n - Math.round(n)) < 1e-9) return String(Math.round(n));
  return parseFloat(n.toFixed(10)).toString();
}

// Safe numeric parser — no eval
function safeParseNum(raw: string): number | null {
  const s = raw.trim()
    .replace(/π/g, String(Math.PI))
    .replace(/\bpi\b/gi, String(Math.PI));

  const n = Number(s);
  if (!isNaN(n) && isFinite(n)) return n;

  if (s === 'e') return Math.E;

  // e^n
  const eMatch = s.match(/^e\^(-?[\d.]+)$/i);
  if (eMatch) return Math.pow(Math.E, parseFloat(eMatch[1]));

  // sqrt(n)
  const sqrtMatch = s.match(/^sqrt\((-?[\d.]+)\)$/i);
  if (sqrtMatch) {
    const v = parseFloat(sqrtMatch[1]);
    return v >= 0 ? Math.sqrt(v) : null;
  }

  // fraction like 1/3
  const fracMatch = s.match(/^(-?[\d.]+)\s*\/\s*(-?[\d.]+)$/);
  if (fracMatch) {
    const num = parseFloat(fracMatch[1]);
    const den = parseFloat(fracMatch[2]);
    if (den !== 0) return num / den;
  }

  return null;
}

// Build superscript display for an exponent string
function buildExpDisplay(base: string, exp: string): string {
  const bLabel = base || 'a';
  const eLabel = exp || 'n';
  return `${bLabel}${supStr(eLabel)}`;
}

// ─── Computation helpers ───────────────────────────────────────────────────────

function computePower(baseStr: string, expStr: string): PowerResult {
  const baseNum = safeParseNum(baseStr);
  const expNum = safeParseNum(expStr);

  if (baseNum === null) throw new Error('BASE');
  if (expNum === null) throw new Error('EXP');

  const raw = Math.pow(baseNum, expNum);
  if (!isFinite(raw)) throw new Error('OVERFLOW');

  const isExact = Math.abs(raw - Math.round(raw)) < 1e-9;
  const result = formatDecimal(raw);
  const decimal = isExact ? '' : parseFloat(raw.toFixed(6)).toString();

  const expDisplay = buildExpDisplay(baseStr, expStr);

  let explanation = '';
  let verification = '';
  let property = '';

  if (expNum === 0) {
    explanation = `Cualquier número elevado a 0 es igual a 1.`;
    property = 'a⁰ = 1';
    verification = `${expDisplay} = 1`;
  } else if (expNum < 0) {
    const posExp = Math.abs(expNum);
    const posResult = Math.pow(baseNum, posExp);
    const posStr = formatDecimal(posResult);
    explanation = `Un exponente negativo convierte la potencia en su recíproco. ${baseStr}${supStr(expStr)} = 1 / ${baseStr}${supStr(String(posExp))}.`;
    property = 'a⁻ⁿ = 1 / aⁿ';
    verification = `1 / ${posStr} = ${result}`;
  } else if (Number.isInteger(expNum) && expNum > 0 && expNum <= 5) {
    const parts = Array(expNum).fill(baseStr).join(' × ');
    explanation = `${expDisplay} significa multiplicar ${baseStr} por sí mismo ${expNum} ${expNum === 1 ? 'vez' : 'veces'}.`;
    property = 'aⁿ = a × a × ... × a (n veces)';
    verification = `${parts} = ${result}`;
  } else if (!Number.isInteger(expNum)) {
    explanation = `Un exponente decimal equivale a una raíz. ${expDisplay} se calcula como la raíz correspondiente de ${baseStr}.`;
    property = 'a^(m/n) = ⁿ√(aᵐ)';
    verification = `${expDisplay} = ${result}`;
  } else {
    explanation = `${expDisplay} significa ${baseStr} elevado a la potencia ${expStr}.`;
    property = 'aⁿ (potencia)';
    verification = `${expDisplay} = ${result}`;
  }

  return { mode: 'power', expression: expDisplay, result, decimal, isExact, explanation, verification, property };
}

// Simplification patterns — safe regex, no eval
const SIMPLIFY_RULES: Array<{
  pattern: RegExp;
  name: string;
  property: string;
  apply: (m: RegExpMatchArray) => string | null;
}> = [
  {
    // (x^m)^n => x^(m*n)
    pattern: /^\(([a-z])\^(-?\d+)\)\^(-?\d+)$/i,
    name: 'Potencia de una potencia',
    property: '(aᵐ)ⁿ = aᵐⁿ',
    apply: (m) => {
      const base = m[1], em = parseInt(m[2]), en = parseInt(m[3]);
      return `${base}^${em * en}`;
    },
  },
  {
    // x^m * x^n => x^(m+n)
    pattern: /^([a-z])\^(-?\d+)\s*\*\s*\1\^(-?\d+)$/i,
    name: 'Producto de potencias',
    property: 'aᵐ · aⁿ = aᵐ⁺ⁿ',
    apply: (m) => {
      const base = m[1], em = parseInt(m[2]), en = parseInt(m[3]);
      return `${base}^${em + en}`;
    },
  },
  {
    // x^m / x^n => x^(m-n)
    pattern: /^([a-z])\^(-?\d+)\s*\/\s*\1\^(-?\d+)$/i,
    name: 'Cociente de potencias',
    property: 'aᵐ / aⁿ = aᵐ⁻ⁿ',
    apply: (m) => {
      const base = m[1], em = parseInt(m[2]), en = parseInt(m[3]);
      return `${base}^${em - en}`;
    },
  },
  {
    // a^m * a^n (same base letter repeated)
    pattern: /^([a-z])\^(-?\d+)\s*\*\s*([a-z])\^(-?\d+)$/i,
    name: 'Producto de potencias',
    property: 'aᵐ · aⁿ = aᵐ⁺ⁿ',
    apply: (m) => {
      if (m[1].toLowerCase() !== m[3].toLowerCase()) return null;
      const base = m[1], em = parseInt(m[2]), en = parseInt(m[4]);
      return `${base}^${em + en}`;
    },
  },
];

function computeSimplify(expr: string): SimplifyResult {
  const clean = expr.trim().replace(/\s+/g, '');

  for (const rule of SIMPLIFY_RULES) {
    const match = clean.match(rule.pattern);
    if (match) {
      const rawResult = rule.apply(match);
      if (rawResult === null) continue;

      // Format result nicely
      const [resBase, resExp] = rawResult.split('^');
      const expNum = parseInt(resExp);
      const displayResult = expNum === 1 ? resBase : `${resBase}${supStr(resExp)}`;

      // Build input display
      const inputDisplay = expr.replace(/\*/g, ' · ').replace(/\^(-?\d+)/g, (_, e) => supStr(e)).replace(/\(([^)]+)\)/g, (_, inner) => `(${inner})`);

      return {
        mode: 'simplify',
        input: inputDisplay,
        result: displayResult,
        property: rule.property,
        propertyName: rule.name,
        explanation: `Se aplicó la regla de ${rule.name.toLowerCase()}: ${rule.property}.`,
      };
    }
  }

  throw new Error('UNSUPPORTED');
}

function computeFractional(baseStr: string, numStr: string, denStr: string): FractionalResult {
  const baseNum = safeParseNum(baseStr);
  const num = parseInt(numStr);
  const den = parseInt(denStr);

  if (baseNum === null) throw new Error('BASE');
  if (isNaN(num)) throw new Error('NUM');
  if (isNaN(den) || den === 0) throw new Error('DEN');

  const raw = Math.pow(baseNum, num / den);
  if (!isNaN(raw) && !isFinite(raw)) throw new Error('OVERFLOW');
  if (isNaN(raw)) throw new Error('DOMAIN');

  const isExact = Math.abs(raw - Math.round(raw)) < 1e-9;
  const result = formatDecimal(raw);
  const decimal = isExact ? '' : parseFloat(raw.toFixed(6)).toString();

  const expression = `${baseStr}^(${num}/${den})`;
  let rootDescription = '';
  let explanation = '';

  if (num === 1) {
    const rootName = den === 2 ? 'cuadrada' : den === 3 ? 'cúbica' : `${den}`;
    rootDescription = den === 2 ? `√${baseStr}` : den === 3 ? `∛${baseStr}` : `${den}√${baseStr}`;
    explanation = `Un exponente 1/${den} equivale a la raíz ${den === 2 ? 'cuadrada' : den === 3 ? 'cúbica' : `de índice ${den}`} de la base. ${expression} = ${rootDescription} = ${result}.`;
  } else {
    rootDescription = `${den}√(${baseStr}^${num})`;
    explanation = `${expression} equivale a la raíz de índice ${den} de ${baseStr} elevado a ${num}: ${rootDescription}.`;
  }

  return { mode: 'fractional', expression, result, decimal, isExact, rootDescription, explanation };
}

function computeScientific(numStr: string): ScientificResult {
  const n = safeParseNum(numStr);
  if (n === null || n === 0) throw new Error('INVALID');
  if (!isFinite(n)) throw new Error('INVALID');

  const sign = n < 0 ? '-' : '';
  const abs = Math.abs(n);
  const exp = Math.floor(Math.log10(abs));
  const coef = abs / Math.pow(10, exp);
  const coefStr = parseFloat(coef.toFixed(10)).toString();
  const expStr = String(exp);

  const display = `${sign}${coefStr} × 10${supStr(expStr)}`;
  const explanation = exp >= 0
    ? `El número ${numStr} se expresa moviendo la coma decimal ${exp} posición${exp === 1 ? '' : 'es'} hacia la izquierda.`
    : `El número ${numStr} se expresa moviendo la coma decimal ${Math.abs(exp)} posición${Math.abs(exp) === 1 ? '' : 'es'} hacia la derecha.`;

  return { mode: 'scientific', original: numStr, coefficient: `${sign}${coefStr}`, exponent: exp, display, explanation };
}

// ─── Component ────────────────────────────────────────────────────────────────

const POWER_EXAMPLES = [
  { display: '2⁵', base: '2', exp: '5' },
  { display: '10³', base: '10', exp: '3' },
  { display: '2⁻³', base: '2', exp: '-3' },
  { display: '4^(1/2)', base: '4', exp: '0.5' },
  { display: '(-2)²', base: '-2', exp: '2' },
  { display: '5⁰', base: '5', exp: '0' },
];

const SIMPLIFY_EXAMPLES = [
  { display: 'x² · x³', expr: 'x^2 * x^3' },
  { display: 'x⁵ / x²', expr: 'x^5 / x^2' },
  { display: '(x²)³', expr: '(x^2)^3' },
  { display: 'a² · a⁴', expr: 'a^2 * a^4' },
];

const FRACTIONAL_EXAMPLES = [
  { display: '8^(1/3)', base: '8', num: '1', den: '3' },
  { display: '4^(1/2)', base: '4', num: '1', den: '2' },
  { display: '27^(2/3)', base: '27', num: '2', den: '3' },
];

const SCIENTIFIC_EXAMPLES = [
  { display: '1 000 000', num: '1000000' },
  { display: '0.001', num: '0.001' },
  { display: '299 792 458', num: '299792458' },
  { display: '0.0000045', num: '0.0000045' },
];

export function ExponenteCalculator() {
  const autoRan = useRef(false);

  const [calcMode, setCalcMode] = useState<CalcMode>('power');
  // Mode 1 — power
  const [base, setBase] = useState('2');
  const [exp, setExp] = useState('5');
  // Mode 2 — simplify
  const [simplifyExpr, setSimplifyExpr] = useState('');
  // Mode 3 — fractional
  const [fracBase, setFracBase] = useState('8');
  const [fracNum, setFracNum] = useState('1');
  const [fracDen, setFracDen] = useState('3');
  // Mode 4 — scientific
  const [sciNum, setSciNum] = useState('');

  const [result, setResult] = useState<CalcResult | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [copiedResult, setCopiedResult] = useState(false);
  const [copiedExpr, setCopiedExpr] = useState(false);

  const runCalculate = useCallback((
    mode: CalcMode,
    b: string, e: string,
    sExpr: string,
    fBase: string, fNum: string, fDen: string,
    sci: string,
  ) => {
    setErrMsg(null);
    try {
      if (mode === 'power') {
        if (!b.trim()) { setErrMsg('Introduce una base.'); return; }
        if (!e.trim()) { setErrMsg('Introduce un exponente.'); return; }
        const expNum = safeParseNum(e);
        if (safeParseNum(b) === null) { setErrMsg('No se pudo interpretar la base. Usa números o expresiones válidas.'); return; }
        if (expNum === null) { setErrMsg('No se pudo interpretar el exponente. Usa números o fracciones válidas.'); return; }
        setResult(computePower(b, e));
      } else if (mode === 'simplify') {
        if (!sExpr.trim()) { setErrMsg('Introduce una expresión con exponentes.'); return; }
        try {
          setResult(computeSimplify(sExpr));
        } catch {
          setErrMsg('No se pudo simplificar esta expresión de forma confiable. Prueba con una expresión más simple.');
        }
      } else if (mode === 'fractional') {
        if (!fBase.trim()) { setErrMsg('Introduce una base.'); return; }
        if (!fNum.trim()) { setErrMsg('Introduce el numerador del exponente.'); return; }
        if (!fDen.trim()) { setErrMsg('Introduce el denominador del exponente.'); return; }
        if (parseInt(fDen) === 0) { setErrMsg('El denominador del exponente no puede ser 0.'); return; }
        try {
          setResult(computeFractional(fBase, fNum, fDen));
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : '';
          if (msg === 'DEN') setErrMsg('El denominador del exponente no puede ser 0.');
          else if (msg === 'DOMAIN') setErrMsg('No se puede calcular esta potencia para los valores introducidos.');
          else setErrMsg('No se pudo calcular la potencia de forma confiable.');
        }
      } else {
        if (!sci.trim()) { setErrMsg('Introduce un número válido para convertirlo a notación científica.'); return; }
        try {
          setResult(computeScientific(sci));
        } catch {
          setErrMsg('Introduce un número válido para convertirlo a notación científica.');
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : '';
      if (msg === 'BASE') setErrMsg('No se pudo interpretar la base. Usa números o expresiones válidas.');
      else if (msg === 'EXP') setErrMsg('No se pudo interpretar el exponente. Usa números o fracciones válidas.');
      else setErrMsg('No se pudo calcular la potencia de forma confiable.');
    }
  }, []);

  // Auto-calculate 2^5 = 32 on mount
  if (!autoRan.current) {
    autoRan.current = true;
    setResult(computePower('2', '5'));
  }

  const calculate = useCallback(() => {
    runCalculate(calcMode, base, exp, simplifyExpr, fracBase, fracNum, fracDen, sciNum);
  }, [calcMode, base, exp, simplifyExpr, fracBase, fracNum, fracDen, sciNum, runCalculate]);

  const handleReset = () => {
    setBase('2'); setExp('5');
    setSimplifyExpr('');
    setFracBase('8'); setFracNum('1'); setFracDen('3');
    setSciNum('');
    setErrMsg(null);
    setResult(computePower('2', '5'));
  };

  const copyText = (text: string, which: 'result' | 'expr') => {
    navigator.clipboard.writeText(text).catch(() => {});
    if (which === 'result') { setCopiedResult(true); setTimeout(() => setCopiedResult(false), 2000); }
    else { setCopiedExpr(true); setTimeout(() => setCopiedExpr(false), 2000); }
  };

  // Live preview
  const previewText = (() => {
    if (calcMode === 'power') {
      const b = base || 'a';
      const e = exp || 'n';
      return buildExpDisplay(b, e);
    }
    if (calcMode === 'simplify') return simplifyExpr.replace(/\*/g, ' · ').replace(/\^(-?\d+)/g, (_, e) => supStr(e)) || 'a^m · a^n';
    if (calcMode === 'fractional') {
      const b = fracBase || 'a';
      const n = fracNum || 'm';
      const d = fracDen || 'n';
      return `${b}^(${n}/${d})`;
    }
    return sciNum ? `${sciNum} en notación científica` : '1 × 10ⁿ';
  })();

  const inputClass = "w-full rounded-lg border border-line bg-white px-4 py-3 font-mono text-base text-ink placeholder:text-muted-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20";

  return (
    <section id="calculadora" className="bg-page py-10 lg:py-14">
      <div className="site-shell">

        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora de exponentes y potencias
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* ── Left: Input panel ── */}
          <div className="academic-card p-6">

            {/* Mode tabs */}
            <div className="mb-5 flex overflow-hidden rounded-lg border border-line" role="tablist" aria-label="Modo de cálculo">
              {(Object.keys(MODE_LABELS) as CalcMode[]).map((m) => (
                <button
                  key={m}
                  role="tab"
                  aria-selected={calcMode === m}
                  onClick={() => { setCalcMode(m); setResult(null); setErrMsg(null); }}
                  className={`flex-1 py-2 text-[11px] font-semibold transition-colors ${
                    calcMode === m ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                  }`}
                >
                  {MODE_LABELS[m]}
                </button>
              ))}
            </div>

            {/* ── MODE 1: Power ── */}
            {calcMode === 'power' && (
              <>
                <div className="mb-4 grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="exp-base" className="mb-1.5 block text-sm font-semibold text-slate">Base</label>
                    <input
                      id="exp-base"
                      type="text"
                      value={base}
                      onChange={(e) => { setBase(e.target.value); setErrMsg(null); }}
                      onKeyDown={(e) => e.key === 'Enter' && calculate()}
                      placeholder="2"
                      className={inputClass}
                      autoComplete="off"
                      spellCheck={false}
                    />
                  </div>
                  <div>
                    <label htmlFor="exp-exp" className="mb-1.5 block text-sm font-semibold text-slate">Exponente</label>
                    <input
                      id="exp-exp"
                      type="text"
                      value={exp}
                      onChange={(e) => { setExp(e.target.value); setErrMsg(null); }}
                      onKeyDown={(e) => e.key === 'Enter' && calculate()}
                      placeholder="5"
                      className={inputClass}
                      autoComplete="off"
                      spellCheck={false}
                    />
                  </div>
                </div>
                <p className="mb-4 text-xs text-muted">Acepta: números, decimales, negativos (ej. -3), fracciones (ej. 1/2), pi, e, sqrt(16)</p>
              </>
            )}

            {/* ── MODE 2: Simplify ── */}
            {calcMode === 'simplify' && (
              <div className="mb-4">
                <label htmlFor="exp-simplify" className="mb-1.5 block text-sm font-semibold text-slate">Expresión con exponentes</label>
                <input
                  id="exp-simplify"
                  type="text"
                  value={simplifyExpr}
                  onChange={(e) => { setSimplifyExpr(e.target.value); setErrMsg(null); }}
                  onKeyDown={(e) => e.key === 'Enter' && calculate()}
                  placeholder="x^2 * x^3"
                  className={inputClass}
                  autoComplete="off"
                  spellCheck={false}
                />
                <div className="mt-2 rounded-lg px-3 py-2 text-xs text-slate" style={{ background: '#F0FAF9' }}>
                  <p className="font-semibold text-teal mb-1">Patrones admitidos</p>
                  <p>x^2 * x^3 · x^5 / x^2 · (x^2)^3 · a^2 * a^4</p>
                </div>
              </div>
            )}

            {/* ── MODE 3: Fractional ── */}
            {calcMode === 'fractional' && (
              <>
                <div className="mb-4">
                  <label htmlFor="frac-base" className="mb-1.5 block text-sm font-semibold text-slate">Base</label>
                  <input
                    id="frac-base"
                    type="text"
                    value={fracBase}
                    onChange={(e) => { setFracBase(e.target.value); setErrMsg(null); }}
                    onKeyDown={(e) => e.key === 'Enter' && calculate()}
                    placeholder="8"
                    className={inputClass}
                    autoComplete="off"
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="frac-num" className="mb-1.5 block text-sm font-semibold text-slate">Numerador</label>
                    <input
                      id="frac-num"
                      type="text"
                      value={fracNum}
                      onChange={(e) => { setFracNum(e.target.value); setErrMsg(null); }}
                      onKeyDown={(e) => e.key === 'Enter' && calculate()}
                      placeholder="1"
                      className={inputClass}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="frac-den" className="mb-1.5 block text-sm font-semibold text-slate">Denominador</label>
                    <input
                      id="frac-den"
                      type="text"
                      value={fracDen}
                      onChange={(e) => { setFracDen(e.target.value); setErrMsg(null); }}
                      onKeyDown={(e) => e.key === 'Enter' && calculate()}
                      placeholder="3"
                      className={inputClass}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <p className="mb-4 text-xs text-muted">Calcula {fracBase || 'a'}^({fracNum || 'm'}/{fracDen || 'n'}) — equivale a la raíz de índice {fracDen || 'n'} de {fracBase || 'a'}.</p>
              </>
            )}

            {/* ── MODE 4: Scientific ── */}
            {calcMode === 'scientific' && (
              <div className="mb-4">
                <label htmlFor="sci-num" className="mb-1.5 block text-sm font-semibold text-slate">Número</label>
                <input
                  id="sci-num"
                  type="text"
                  value={sciNum}
                  onChange={(e) => { setSciNum(e.target.value); setErrMsg(null); }}
                  onKeyDown={(e) => e.key === 'Enter' && calculate()}
                  placeholder="1000000"
                  className={inputClass}
                  autoComplete="off"
                  spellCheck={false}
                />
                <p className="mt-1 text-xs text-muted">Admite números grandes y pequeños, positivos o negativos.</p>
              </div>
            )}

            {/* Preview */}
            <div className="mb-5 rounded-lg px-4 py-3" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }} aria-label="Vista previa">
              <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-teal">Vista previa</p>
              <p className="font-mono text-base font-semibold text-deep-teal">{previewText}</p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button
                onClick={calculate}
                className="flex-1 rounded-lg py-3 text-sm font-bold text-white"
                style={{ background: '#D8A31A' }}
              >
                {MODE_LABELS[calcMode]}
              </button>
              <button
                onClick={handleReset}
                className="rounded-lg border border-line px-4 py-3 text-sm font-semibold text-muted transition-colors hover:border-line-2 hover:text-ink"
              >
                Limpiar
              </button>
            </div>

            {/* Example chips */}
            <div className="mt-5 border-t border-line pt-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Ejemplos rápidos</p>
              <div className="flex flex-wrap gap-1.5">
                {calcMode === 'power' && POWER_EXAMPLES.map((ex) => (
                  <button
                    key={ex.display}
                    onClick={() => { setBase(ex.base); setExp(ex.exp); setErrMsg(null); setResult(null); }}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal"
                  >
                    {ex.display}
                  </button>
                ))}
                {calcMode === 'simplify' && SIMPLIFY_EXAMPLES.map((ex) => (
                  <button
                    key={ex.display}
                    onClick={() => { setSimplifyExpr(ex.expr); setErrMsg(null); setResult(null); }}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal"
                  >
                    {ex.display}
                  </button>
                ))}
                {calcMode === 'fractional' && FRACTIONAL_EXAMPLES.map((ex) => (
                  <button
                    key={ex.display}
                    onClick={() => { setFracBase(ex.base); setFracNum(ex.num); setFracDen(ex.den); setErrMsg(null); setResult(null); }}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal"
                  >
                    {ex.display}
                  </button>
                ))}
                {calcMode === 'scientific' && SCIENTIFIC_EXAMPLES.map((ex) => (
                  <button
                    key={ex.display}
                    onClick={() => { setSciNum(ex.num); setErrMsg(null); setResult(null); }}
                    className="min-h-[36px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal"
                  >
                    {ex.display}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Result panel ── */}
          <div className="academic-card overflow-hidden" aria-live="polite" aria-label="Panel de resultado">
            <div className="border-b border-line px-6 py-4">
              <p className="text-sm font-bold text-ink">Resultado</p>
            </div>

            {errMsg && (
              <div className="mx-6 mt-5 flex gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3" role="alert">
                <span className="mt-0.5 shrink-0 text-red-400" aria-hidden="true">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5zm0 6.5a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z" />
                  </svg>
                </span>
                <p className="text-sm text-red-700">{errMsg}</p>
              </div>
            )}

            {!result && !errMsg && (
              <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: '#F0FAF9' }} aria-hidden="true">
                  <span className="font-mono text-xl font-bold text-deep-teal">aⁿ</span>
                </div>
                <p className="text-sm font-semibold text-slate">Introduce los valores y pulsa calcular</p>
                <p className="mt-1 text-xs text-muted">El resultado aparecerá aquí</p>
              </div>
            )}

            {result && result.mode === 'power' && (
              <div className="divide-y divide-line">
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Expresión ingresada</p>
                  <p className="font-mono text-sm text-slate">{result.expression}</p>
                </div>
                <div className="px-6 py-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                    <p className="font-mono text-2xl font-bold text-deep-teal">{result.result}</p>
                    {!result.isExact && result.decimal && (
                      <p className="mt-1 text-xs text-muted">≈ {result.decimal}</p>
                    )}
                  </div>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Comprobación</p>
                  <p className="font-mono text-sm font-semibold text-ink">{result.verification}</p>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Propiedad aplicada</p>
                  <p className="mt-1 rounded-lg px-3 py-2 font-mono text-sm" style={{ background: '#EEF4F7', color: '#334e68' }}>
                    {result.property}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate">{result.explanation}</p>
                </div>
                <div className="flex flex-wrap gap-2 px-6 py-4">
                  <button onClick={() => copyText(result.result, 'result')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal" aria-label="Copiar resultado">
                    {copiedResult ? '✓ Resultado copiado' : 'Copiar resultado'}
                  </button>
                  <button onClick={() => copyText(result.expression, 'expr')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal" aria-label="Copiar expresión">
                    {copiedExpr ? '✓ Expresión copiada' : 'Copiar expresión'}
                  </button>
                </div>
              </div>
            )}

            {result && result.mode === 'simplify' && (
              <div className="divide-y divide-line">
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Expresión ingresada</p>
                  <p className="font-mono text-sm text-slate">{result.input}</p>
                </div>
                <div className="px-6 py-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado simplificado</p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                    <p className="font-mono text-2xl font-bold text-deep-teal">{result.result}</p>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Propiedad aplicada</p>
                  <p className="text-sm font-bold text-ink">{result.propertyName}</p>
                  <p className="mt-1.5 rounded-lg px-3 py-2 font-mono text-sm" style={{ background: '#EEF4F7', color: '#334e68' }}>
                    {result.property}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate">{result.explanation}</p>
                </div>
                <div className="flex flex-wrap gap-2 px-6 py-4">
                  <button onClick={() => copyText(result.result, 'result')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">
                    {copiedResult ? '✓ Resultado copiado' : 'Copiar resultado'}
                  </button>
                </div>
              </div>
            )}

            {result && result.mode === 'fractional' && (
              <div className="divide-y divide-line">
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Expresión ingresada</p>
                  <p className="font-mono text-sm text-slate">{result.expression}</p>
                </div>
                <div className="px-6 py-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                    <p className="font-mono text-2xl font-bold text-deep-teal">{result.result}</p>
                    {!result.isExact && result.decimal && (
                      <p className="mt-1 text-xs text-muted">≈ {result.decimal}</p>
                    )}
                  </div>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Equivalencia en raíz</p>
                  <p className="font-mono text-base font-semibold text-ink">{result.rootDescription}</p>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Explicación</p>
                  <p className="text-xs leading-relaxed text-slate">{result.explanation}</p>
                </div>
                <div className="flex flex-wrap gap-2 px-6 py-4">
                  <button onClick={() => copyText(result.result, 'result')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">
                    {copiedResult ? '✓ Resultado copiado' : 'Copiar resultado'}
                  </button>
                  <button onClick={() => copyText(result.expression, 'expr')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">
                    {copiedExpr ? '✓ Expresión copiada' : 'Copiar expresión'}
                  </button>
                </div>
              </div>
            )}

            {result && result.mode === 'scientific' && (
              <div className="divide-y divide-line">
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Número original</p>
                  <p className="font-mono text-sm text-slate">{result.original}</p>
                </div>
                <div className="px-6 py-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-teal">Notación científica</p>
                  <div className="rounded-xl px-5 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                    <p className="font-mono text-2xl font-bold text-deep-teal">{result.display}</p>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Componentes</p>
                  <p className="text-xs text-slate">Coeficiente: <span className="font-mono font-semibold text-ink">{result.coefficient}</span></p>
                  <p className="mt-1 text-xs text-slate">Exponente de 10: <span className="font-mono font-semibold text-ink">{result.exponent}</span></p>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Explicación</p>
                  <p className="text-xs leading-relaxed text-slate">{result.explanation}</p>
                </div>
                <div className="flex flex-wrap gap-2 px-6 py-4">
                  <button onClick={() => copyText(result.display, 'result')} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal">
                    {copiedResult ? '✓ Resultado copiado' : 'Copiar resultado'}
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
