const examples = [
  {
    n: '01',
    rule: 'Base 2',
    input: 'log₂(8)',
    result: '3',
    explanation: '2³ = 8. El exponente al que hay que elevar 2 para obtener 8 es 3.',
  },
  {
    n: '02',
    rule: 'Base 10',
    input: 'log₁₀(100)',
    result: '2',
    explanation: '10² = 100. El logaritmo común de 100 es 2.',
  },
  {
    n: '03',
    rule: 'Logaritmo natural',
    input: 'ln(e²)',
    result: '2',
    explanation: 'El logaritmo natural usa base e. ln(e^n) = n siempre que n sea real.',
  },
  {
    n: '04',
    rule: 'Base 3',
    input: 'log₃(81)',
    result: '4',
    explanation: '3⁴ = 81. El resultado es exacto porque 81 es una potencia exacta de 3.',
  },
  {
    n: '05',
    rule: 'Base 5',
    input: 'log₅(125)',
    result: '3',
    explanation: '5³ = 125. El resultado es 3 porque 5 elevado a 3 da exactamente 125.',
  },
];

export function LogaritmoExamples() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="examples-log-heading">
      <div className="site-shell">

        <div className="mb-7">
          <p className="eyebrow">Ejemplos</p>
          <h2 id="examples-log-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Ejemplos resueltos de logaritmos
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-soft">
            Cinco casos representativos con la base, el resultado y la comprobación.
          </p>
        </div>

        <div className="academic-card overflow-hidden">
          <div
            className="hidden grid-cols-12 gap-4 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-muted lg:grid"
            style={{ borderBottom: '1px solid #DDF3F0', background: '#F0FAF9' }}
          >
            <div className="col-span-1">#</div>
            <div className="col-span-3">Entrada</div>
            <div className="col-span-2">Resultado</div>
            <div className="col-span-6">Explicación</div>
          </div>

          <dl className="divide-y divide-line">
            {examples.map((ex) => (
              <div key={ex.n} className="grid items-start gap-x-4 gap-y-2 px-6 py-4 lg:grid-cols-12">
                <div className="flex items-center gap-3 lg:col-span-1 lg:block">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-heading text-xs font-bold"
                    style={{ background: '#DDF3F0', color: '#0f5c5c' }}
                    aria-hidden="true"
                  >
                    {ex.n}
                  </span>
                  <span className="text-xs font-semibold text-teal lg:hidden">{ex.rule}</span>
                </div>

                <dt className="lg:col-span-3">
                  <span className="mb-0.5 hidden text-[10px] font-bold uppercase tracking-widest text-muted lg:block">Entrada</span>
                  <span className="font-mono text-sm font-semibold text-ink">{ex.input}</span>
                </dt>

                <dd className="lg:col-span-2">
                  <span className="mb-0.5 hidden text-[10px] font-bold uppercase tracking-widest text-muted lg:block">Resultado</span>
                  <span className="font-mono text-sm font-bold text-deep-teal">{ex.result}</span>
                </dd>

                <dd className="lg:col-span-6">
                  <span className="mb-0.5 hidden text-[10px] font-bold uppercase tracking-widest text-muted lg:block">Explicación</span>
                  <span className="text-sm leading-relaxed text-slate">{ex.explanation}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </section>
  );
}
