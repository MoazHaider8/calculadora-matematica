'use client';

import { useState, useCallback } from 'react';

// ── Safe expression evaluator ─────────────────────────────────────────────────

type AngleMode = 'grados' | 'radianes';

function toRad(x: number, mode: AngleMode): number {
  return mode === 'grados' ? (x * Math.PI) / 180 : x;
}

function fromRad(x: number, mode: AngleMode): number {
  return mode === 'grados' ? (x * 180) / Math.PI : x;
}

type Token =
  | { type: 'NUMBER'; value: number }
  | { type: 'PLUS' | 'MINUS' | 'MUL' | 'DIV' | 'POW' | 'LPAREN' | 'RPAREN' | 'EOF' }
  | { type: 'FUNC'; name: string };

class Lexer {
  private pos = 0;
  constructor(private input: string) {}
  private peek(): string { return this.input[this.pos] ?? ''; }
  private consume(): string { return this.input[this.pos++] ?? ''; }
  private skipSpaces() { while (this.pos < this.input.length && this.input[this.pos] === ' ') this.pos++; }

  tokenize(): Token[] {
    const tokens: Token[] = [];
    while (this.pos < this.input.length) {
      this.skipSpaces();
      if (this.pos >= this.input.length) break;
      const ch = this.peek();

      if (/[0-9.]/.test(ch)) {
        let num = '';
        while (this.pos < this.input.length && /[0-9.]/.test(this.peek())) num += this.consume();
        if (this.peek() === 'e' && /[0-9+\-]/.test(this.input[this.pos + 1] ?? '')) {
          num += this.consume();
          if (this.peek() === '+' || this.peek() === '-') num += this.consume();
          while (this.pos < this.input.length && /[0-9]/.test(this.peek())) num += this.consume();
        }
        tokens.push({ type: 'NUMBER', value: parseFloat(num) });
        continue;
      }

      if (/[a-zA-Zπ]/.test(ch)) {
        let word = '';
        while (this.pos < this.input.length && /[a-zA-Z0-9π]/.test(this.peek())) word += this.consume();
        if (word === 'π' || word === 'pi') { tokens.push({ type: 'NUMBER', value: Math.PI }); continue; }
        if (word === 'e')                   { tokens.push({ type: 'NUMBER', value: Math.E });  continue; }
        const FUNCS = ['sin','cos','tan','asin','acos','atan','log','ln','sqrt','abs'];
        if (FUNCS.includes(word)) { tokens.push({ type: 'FUNC', name: word }); continue; }
        throw new Error(`Función desconocida: ${word}`);
      }

      if (ch === '+') { this.consume(); tokens.push({ type: 'PLUS' }); continue; }
      if (ch === '-') { this.consume(); tokens.push({ type: 'MINUS' }); continue; }
      if (ch === '*') { this.consume(); tokens.push({ type: 'MUL' }); continue; }
      if (ch === '/') { this.consume(); tokens.push({ type: 'DIV' }); continue; }
      if (ch === '^') { this.consume(); tokens.push({ type: 'POW' }); continue; }
      if (ch === '(') { this.consume(); tokens.push({ type: 'LPAREN' }); continue; }
      if (ch === ')') { this.consume(); tokens.push({ type: 'RPAREN' }); continue; }
      throw new Error(`Carácter no reconocido: ${ch}`);
    }
    tokens.push({ type: 'EOF' });
    return tokens;
  }
}

class Parser {
  private pos = 0;
  constructor(private tokens: Token[], private mode: AngleMode) {}
  private peek(): Token { return this.tokens[this.pos]; }
  private consume(): Token { return this.tokens[this.pos++]; }

  parse(): number {
    const val = this.parseExpr();
    if (this.peek().type !== 'EOF') throw new Error('Expresión inválida');
    return val;
  }

  private parseExpr(): number {
    let left = this.parseTerm();
    while (this.peek().type === 'PLUS' || this.peek().type === 'MINUS') {
      const op = this.consume().type;
      const right = this.parseTerm();
      left = op === 'PLUS' ? left + right : left - right;
    }
    return left;
  }

  private parseTerm(): number {
    let left = this.parsePower();
    while (this.peek().type === 'MUL' || this.peek().type === 'DIV') {
      const op = this.consume().type;
      const right = this.parsePower();
      if (op === 'DIV') {
        if (right === 0) throw new Error('DIV_ZERO');
        left = left / right;
      } else {
        left = left * right;
      }
    }
    return left;
  }

  private parsePower(): number {
    const base = this.parseUnary();
    if (this.peek().type === 'POW') {
      this.consume();
      return Math.pow(base, this.parsePower());
    }
    return base;
  }

  private parseUnary(): number {
    if (this.peek().type === 'MINUS') { this.consume(); return -this.parsePrimary(); }
    if (this.peek().type === 'PLUS')  { this.consume(); return this.parsePrimary(); }
    return this.parsePrimary();
  }

  private parsePrimary(): number {
    const tok = this.peek();
    if (tok.type === 'NUMBER') { this.consume(); return tok.value; }

    if (tok.type === 'FUNC') {
      this.consume();
      if (this.peek().type !== 'LPAREN') throw new Error('Se esperaba ( después de función');
      this.consume();
      const arg = this.parseExpr();
      if (this.peek().type !== 'RPAREN') throw new Error('UNBALANCED_PAREN');
      this.consume();
      return this.applyFunc(tok.name, arg);
    }

    if (tok.type === 'LPAREN') {
      this.consume();
      const val = this.parseExpr();
      if (this.peek().type !== 'RPAREN') throw new Error('UNBALANCED_PAREN');
      this.consume();
      return val;
    }

    throw new Error('Expresión inválida');
  }

  private applyFunc(name: string, arg: number): number {
    switch (name) {
      case 'sin': return Math.sin(toRad(arg, this.mode));
      case 'cos': return Math.cos(toRad(arg, this.mode));
      case 'tan': {
        const r = toRad(arg, this.mode);
        if (Math.abs(Math.cos(r)) < 1e-14) throw new Error('Tangente indefinida para este ángulo.');
        return Math.tan(r);
      }
      case 'asin': {
        if (arg < -1 || arg > 1) throw new Error('El argumento de asin debe estar entre -1 y 1.');
        return fromRad(Math.asin(arg), this.mode);
      }
      case 'acos': {
        if (arg < -1 || arg > 1) throw new Error('El argumento de acos debe estar entre -1 y 1.');
        return fromRad(Math.acos(arg), this.mode);
      }
      case 'atan':  return fromRad(Math.atan(arg), this.mode);
      case 'log':   if (arg <= 0) throw new Error('LOG_NEGATIVE'); return Math.log10(arg);
      case 'ln':    if (arg <= 0) throw new Error('LOG_NEGATIVE'); return Math.log(arg);
      case 'sqrt':  if (arg < 0)  throw new Error('SQRT_NEGATIVE'); return Math.sqrt(arg);
      case 'abs':   return Math.abs(arg);
      default: throw new Error(`Función no reconocida: ${name}`);
    }
  }
}

function evaluate(expr: string, mode: AngleMode): { ok: true; value: number } | { ok: false; message: string } {
  try {
    if (!expr.trim()) return { ok: false, message: 'Introduce una expresión para calcular.' };
    const tokens = new Lexer(expr.trim()).tokenize();
    const value  = new Parser(tokens, mode).parse();
    if (!isFinite(value) || isNaN(value)) throw new Error('OVERFLOW');
    return { ok: true, value };
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : '';
    if (msg === 'DIV_ZERO')           return { ok: false, message: 'No se puede dividir entre 0.' };
    if (msg === 'LOG_NEGATIVE')       return { ok: false, message: 'El logaritmo solo está definido para valores positivos.' };
    if (msg === 'SQRT_NEGATIVE')      return { ok: false, message: 'La raíz cuadrada de un número negativo no tiene resultado real.' };
    if (msg === 'UNBALANCED_PAREN')   return { ok: false, message: 'Revisa los paréntesis de la expresión.' };
    if (msg === 'OVERFLOW')           return { ok: false, message: 'El resultado es demasiado grande o indefinido.' };
    if (msg.startsWith('Tangente'))   return { ok: false, message: msg };
    if (msg.startsWith('El argumento')) return { ok: false, message: msg };
    return { ok: false, message: 'No se pudo interpretar la expresión.' };
  }
}

function fmtResult(n: number): string {
  if (Number.isInteger(n) && Math.abs(n) < 1e15) return String(n);
  const s = parseFloat(n.toPrecision(10));
  if (Math.abs(s) >= 1e10 || (Math.abs(s) < 1e-6 && s !== 0)) return s.toExponential(6);
  return String(s);
}

function displayify(raw: string): string {
  return raw.replace(/\*/g, '×').replace(/\//g, '÷').replace(/sqrt\(/g, '√(').replace(/\bpi\b/g, 'π');
}

// ── Button layout ─────────────────────────────────────────────────────────────

type BtnStyle = 'number' | 'sci' | 'op' | 'action' | 'danger' | 'equals';
type CalcBtn = { label: string; value?: string; action: 'append' | 'clear' | 'del' | 'equals' | 'negate'; style: BtnStyle };

const SCI_ROW: CalcBtn[] = [
  { label: 'sin',  value: 'sin(',  action: 'append', style: 'sci' },
  { label: 'cos',  value: 'cos(',  action: 'append', style: 'sci' },
  { label: 'tan',  value: 'tan(',  action: 'append', style: 'sci' },
  { label: 'log',  value: 'log(',  action: 'append', style: 'sci' },
  { label: 'ln',   value: 'ln(',   action: 'append', style: 'sci' },
  { label: '√',    value: 'sqrt(', action: 'append', style: 'sci' },
  { label: 'x²',   value: '^2',    action: 'append', style: 'sci' },
  { label: 'xʸ',   value: '^',     action: 'append', style: 'sci' },
  { label: 'π',    value: 'π',     action: 'append', style: 'sci' },
  { label: 'e',    value: 'e',     action: 'append', style: 'sci' },
];

const MAIN_ROWS: CalcBtn[] = [
  { label: 'AC',  action: 'clear',  style: 'danger'  },
  { label: 'DEL', action: 'del',    style: 'danger'  },
  { label: '(',   value: '(',       action: 'append', style: 'op' },
  { label: ')',   value: ')',       action: 'append', style: 'op' },
  { label: '7',   value: '7',       action: 'append', style: 'number' },
  { label: '8',   value: '8',       action: 'append', style: 'number' },
  { label: '9',   value: '9',       action: 'append', style: 'number' },
  { label: '÷',   value: '/',       action: 'append', style: 'op' },
  { label: '4',   value: '4',       action: 'append', style: 'number' },
  { label: '5',   value: '5',       action: 'append', style: 'number' },
  { label: '6',   value: '6',       action: 'append', style: 'number' },
  { label: '×',   value: '*',       action: 'append', style: 'op' },
  { label: '1',   value: '1',       action: 'append', style: 'number' },
  { label: '2',   value: '2',       action: 'append', style: 'number' },
  { label: '3',   value: '3',       action: 'append', style: 'number' },
  { label: '−',   value: '-',       action: 'append', style: 'op' },
  { label: '0',   value: '0',       action: 'append', style: 'number' },
  { label: '.',   value: '.',       action: 'append', style: 'number' },
  { label: '+/−', action: 'negate', style: 'op'      },
  { label: '+',   value: '+',       action: 'append', style: 'op' },
  { label: '=',   action: 'equals', style: 'equals'  },
];

const EXAMPLES = [
  { label: 'sin(30)+log(100)', expr: 'sin(30)+log(100)' },
  { label: '√144+2^2',         expr: 'sqrt(144)+2^2'    },
  { label: 'ln(e)',             expr: 'ln(e)'            },
  { label: 'cos(60)',           expr: 'cos(60)'          },
  { label: '2^3+5',             expr: '2^3+5'            },
  { label: '(2+3)×4',          expr: '(2+3)*4'          },
];

type HistEntry = { expr: string; result: string };

const DEF_EXPR   = 'sin(30)+log(100)';
const DEF_MODE: AngleMode = 'grados';
const DEF_EVAL   = evaluate(DEF_EXPR, DEF_MODE);
const DEF_RESULT = DEF_EVAL.ok ? fmtResult(DEF_EVAL.value) : '2.5';

// ── Component ─────────────────────────────────────────────────────────────────

export function CientificaCalculator() {
  const [expr,      setExpr]      = useState(DEF_EXPR);
  const [result,    setResult]    = useState(DEF_RESULT);
  const [error,     setError]     = useState<string | null>(null);
  const [hasResult, setHasResult] = useState(true);
  const [mode,      setMode]      = useState<AngleMode>(DEF_MODE);
  const [history,   setHistory]   = useState<HistEntry[]>([{ expr: DEF_EXPR, result: DEF_RESULT }]);
  const [copied,    setCopied]    = useState<'result' | 'expr' | null>(null);

  const runCalc = useCallback((expression: string, angleMode: AngleMode) => {
    if (!expression.trim()) {
      setError('Introduce una expresión para calcular.');
      setResult(''); setHasResult(false); return;
    }
    const res = evaluate(expression, angleMode);
    if (res.ok) {
      const fmt = fmtResult(res.value);
      setResult(fmt); setError(null); setHasResult(true);
      setHistory(prev => {
        const next: HistEntry = { expr: expression, result: fmt };
        return [next, ...prev.filter(h => h.expr !== expression)].slice(0, 8);
      });
    } else {
      setError(res.message); setResult(''); setHasResult(false);
    }
  }, []);

  function handleBtn(btn: CalcBtn) {
    if (btn.action === 'clear') {
      setExpr(''); setResult(''); setError(null); setHasResult(false); return;
    }
    if (btn.action === 'del') {
      setExpr(p => p.slice(0, -1)); setHasResult(false); return;
    }
    if (btn.action === 'negate') {
      setExpr(p => p.startsWith('-') ? p.slice(1) : '-' + p); setHasResult(false); return;
    }
    if (btn.action === 'equals') { runCalc(expr, mode); return; }
    if (btn.action === 'append') {
      setExpr(p => p + (btn.value ?? '')); setHasResult(false);
    }
  }

  function applyExample(ex: { label: string; expr: string }) {
    setExpr(ex.expr); setError(null); setHasResult(false);
    runCalc(ex.expr, mode);
  }

  function handleMode(m: AngleMode) { setMode(m); setHasResult(false); }

  function copyText(type: 'result' | 'expr') {
    navigator.clipboard.writeText(type === 'result' ? result : expr).catch(() => {});
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  const disp = displayify(expr);

  const btnClass = (btn: CalcBtn) => {
    const base = 'rounded-lg py-3.5 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal';
    switch (btn.style) {
      case 'equals':  return `${base} text-white hover:opacity-90`;
      case 'danger':  return `${base} border border-line text-red-500 hover:bg-red-50 focus-visible:ring-red-400`;
      case 'op':      return `${base} border border-line bg-panel text-slate hover:border-teal hover:text-deep-teal`;
      case 'sci':     return `${base} border border-line bg-panel text-slate hover:border-teal hover:bg-aqua-soft hover:text-deep-teal`;
      default:        return `${base} border border-line bg-white text-ink hover:bg-panel`;
    }
  };

  return (
    <section id="calculadora" className="bg-page py-12 lg:py-16">
      <div className="site-shell">
        <p className="eyebrow">Herramienta de cálculo</p>
        <h2 className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.9rem]">
          Calculadora científica
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ── Keypad panel ── */}
          <div className="academic-card p-5">

            {/* Angle mode toggle */}
            <div className="mb-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Modo angular</p>
              <div className="flex overflow-hidden rounded-lg border border-line" role="group" aria-label="Modo angular">
                {(['grados', 'radianes'] as AngleMode[]).map(m => (
                  <button
                    key={m}
                    onClick={() => handleMode(m)}
                    aria-pressed={mode === m}
                    className={`flex-1 py-2.5 text-xs font-bold capitalize transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      mode === m ? 'bg-deep-teal text-white' : 'bg-panel text-muted hover:text-ink'
                    }`}
                  >
                    {m === 'grados' ? 'Grados' : 'Radianes'}
                  </button>
                ))}
              </div>
            </div>

            {/* Expression display */}
            <div
              className="mb-4 rounded-xl px-4 py-3"
              style={{ background: '#0a3535', minHeight: '72px' }}
            >
              <p className="mb-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                Expresión
              </p>
              <p
                className="break-all font-mono text-lg font-semibold leading-tight"
                style={{ color: disp ? '#D8A31A' : 'rgba(216,163,26,0.3)', minHeight: '1.75rem' }}
                aria-label="Expresión actual"
              >
                {disp || '0'}
              </p>
            </div>

            {/* Scientific functions row */}
            <div className="mb-3 grid grid-cols-5 gap-1">
              {SCI_ROW.map(btn => (
                <button
                  key={btn.label}
                  onClick={() => handleBtn(btn)}
                  aria-label={btn.label}
                  className={btnClass(btn)}
                  style={{ fontSize: '0.7rem', paddingTop: '0.6rem', paddingBottom: '0.6rem' }}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Main keypad — 4 columns, last row has = spanning no extra (5th button) */}
            <div className="grid grid-cols-4 gap-1">
              {MAIN_ROWS.map((btn, i) => (
                <button
                  key={`${btn.label}-${i}`}
                  onClick={() => handleBtn(btn)}
                  aria-label={btn.label}
                  className={btnClass(btn)}
                  style={btn.style === 'equals' ? { background: '#D8A31A' } : undefined}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Example chips */}
            <div className="mt-4 border-t border-line pt-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Ejemplos rápidos</p>
              <div className="flex flex-wrap gap-1.5">
                {EXAMPLES.map(ex => (
                  <button
                    key={ex.label}
                    onClick={() => applyExample(ex)}
                    className="min-h-[32px] rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-deep-teal focus:outline-none"
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

            <div className="border-b border-line px-6 py-4" style={{ background: '#F0FAF9' }}>
              <p className="text-sm font-bold" style={{ color: '#0a4f4d' }}>Resultado</p>
            </div>

            {error ? (
              <div className="mx-6 mt-5 flex gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3" role="alert">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5zm0 6.5a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z" />
                </svg>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            ) : (
              <div className="divide-y divide-line">

                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Expresión</p>
                  <p className="break-all font-mono text-sm font-semibold text-slate">{disp || '—'}</p>
                </div>

                <div className="px-6 py-3">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Modo angular</p>
                  <span
                    className="inline-block rounded-md px-2.5 py-1 text-xs font-bold"
                    style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  >
                    {mode === 'grados' ? 'Grados' : 'Radianes'}
                  </span>
                </div>

                <div className="px-6 py-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                  {hasResult && result ? (
                    <div className="rounded-xl px-6 py-5" style={{ background: '#0a3535' }}>
                      <span className="font-mono text-4xl font-bold" style={{ color: '#D8A31A' }}>
                        {result}
                      </span>
                    </div>
                  ) : (
                    <div className="rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
                      <span className="font-mono text-base" style={{ color: 'rgba(216,163,26,0.35)' }}>
                        Pulsa = para calcular
                      </span>
                    </div>
                  )}
                </div>

                {hasResult && result && (
                  <div className="flex flex-wrap gap-2 px-6 py-4">
                    <button
                      onClick={() => copyText('result')}
                      className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                      aria-live="polite"
                    >
                      {copied === 'result' ? '✓ Resultado copiado' : 'Copiar resultado'}
                    </button>
                    <button
                      onClick={() => copyText('expr')}
                      className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus:outline-none"
                    >
                      {copied === 'expr' ? '✓ Expresión copiada' : 'Copiar expresión'}
                    </button>
                  </div>
                )}

                {history.length > 0 && (
                  <div className="px-6 py-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Historial</p>
                      <button
                        onClick={() => setHistory([])}
                        className="text-[10px] font-semibold text-muted transition-colors hover:text-red-500 focus:outline-none"
                      >
                        Borrar historial
                      </button>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {history.map((h, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setExpr(h.expr);
                            setResult(h.result);
                            setHasResult(true);
                            setError(null);
                          }}
                          className="flex items-center justify-between rounded-lg border border-line px-3 py-2 text-left transition-colors hover:border-teal hover:bg-aqua-soft focus:outline-none"
                        >
                          <span className="max-w-[60%] truncate font-mono text-xs text-slate">
                            {displayify(h.expr)}
                          </span>
                          <span className="font-mono text-xs font-bold" style={{ color: '#0a4f4d' }}>
                            {h.result}
                          </span>
                        </button>
                      ))}
                    </div>
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
