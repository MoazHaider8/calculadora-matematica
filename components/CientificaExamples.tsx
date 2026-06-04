const examples = [
  {
    n:      '1',
    input:  'sin(30) + log(100)',
    result: '2.5',
    note:   'Grados',
    steps:  ['sin(30°) = 0.5', 'log(100) = 2', '0.5 + 2 = 2.5'],
    desc:   'En modo grados, sin(30) vale 0.5 y log(100) vale 2.',
  },
  {
    n:      '2',
    input:  '√144 + 2²',
    result: '16',
    note:   null,
    steps:  ['√144 = 12', '2² = 4', '12 + 4 = 16'],
    desc:   'La raíz cuadrada de 144 es 12 y dos al cuadrado es 4.',
  },
  {
    n:      '3',
    input:  'ln(e)',
    result: '1',
    note:   null,
    steps:  ['ln(e) = 1'],
    desc:   'El logaritmo natural de e es exactamente 1.',
  },
  {
    n:      '4',
    input:  'cos(60)',
    result: '0.5',
    note:   'Grados',
    steps:  ['cos(60°) = 0.5'],
    desc:   'En modo grados, el coseno de 60 es 0.5.',
  },
  {
    n:      '5',
    input:  '(2 + 3) × 4',
    result: '20',
    note:   null,
    steps:  ['2 + 3 = 5', '5 × 4 = 20'],
    desc:   'Los paréntesis se resuelven primero, cambiando el resultado respecto a 2 + 3 × 4 = 14.',
  },
];

export function CientificaExamples() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="examples-heading">
      <div className="site-shell">
        <p className="eyebrow">Práctica</p>
        <h2 id="examples-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Ejemplos resueltos de calculadora científica
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map(ex => (
            <article key={ex.n} className="academic-card p-5">
              <div className="mb-4 flex items-start gap-3">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: '#0a4f4d' }}
                  aria-hidden="true"
                >
                  {ex.n}
                </span>
                <div className="flex-1">
                  <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-muted">Entrada</p>
                  <p className="font-mono text-sm font-semibold text-ink">{ex.input}</p>
                  {ex.note && (
                    <span
                      className="mt-1 inline-block rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest"
                      style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                    >
                      {ex.note}
                    </span>
                  )}
                </div>
              </div>

              <div
                className="mb-4 rounded-xl px-4 py-3"
                style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              >
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#0a4f4d' }}>
                  Resultado
                </p>
                <p className="font-mono text-lg font-bold" style={{ color: '#0a4f4d' }}>
                  {ex.result}
                </p>
              </div>

              <div className="mb-3 flex flex-col gap-1">
                {ex.steps.map((s, i) => (
                  <p key={i} className="font-mono text-xs" style={{ color: '#334e68' }}>{s}</p>
                ))}
              </div>

              <p className="text-xs leading-relaxed text-slate">{ex.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
