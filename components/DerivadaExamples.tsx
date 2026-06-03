const examples = [
  {
    n: '01',
    rule: 'Regla de la potencia',
    input: 'd/dx(x²)',
    result: '2x',
    extra: null,
    explanation: 'El exponente 2 pasa a multiplicar y se reduce en 1. Resultado: 2 · x^1 = 2x.',
  },
  {
    n: '02',
    rule: 'Derivada del seno',
    input: 'd/dx(sin(x))',
    result: 'cos(x)',
    extra: null,
    explanation: 'La derivada del seno es el coseno. Verificación: d/dx[cos(x)] = −sin(x).',
  },
  {
    n: '03',
    rule: 'Derivada exponencial',
    input: 'd/dx(eˣ)',
    result: 'eˣ',
    extra: null,
    explanation: 'La función eˣ es su propia derivada. Esta es la propiedad característica de la exponencial natural.',
  },
  {
    n: '04',
    rule: 'Derivada logarítmica',
    input: 'd/dx(ln(x))',
    result: '1/x',
    extra: null,
    explanation: 'La derivada del logaritmo natural es 1/x. Solo válida para x > 0.',
  },
  {
    n: '05',
    rule: 'Regla de la suma + evaluación',
    input: 'f(x) = x³ + 2x',
    result: "f'(x) = 3x² + 2",
    extra: "f'(2) = 14",
    explanation: 'Se deriva cada término por separado. En x = 2: 3(4) + 2 = 14.',
  },
];

export function DerivadaExamples() {
  return (
    <section className="py-10 lg:py-14" style={{ background: '#EEF4F7' }} aria-labelledby="examples-deriv-heading">
      <div className="site-shell">

        <div className="mb-7">
          <p className="eyebrow">Ejemplos</p>
          <h2 id="examples-deriv-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Ejemplos resueltos de derivadas
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-soft">
            Cinco casos representativos con la regla y el procedimiento aplicado.
          </p>
        </div>

        <div className="academic-card overflow-hidden">
          <div
            className="hidden grid-cols-12 gap-4 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-muted lg:grid"
            style={{ borderBottom: '1px solid #DDF3F0', background: '#F0FAF9' }}
          >
            <div className="col-span-1">#</div>
            <div className="col-span-3">Entrada</div>
            <div className="col-span-3">Resultado</div>
            <div className="col-span-5">Explicación</div>
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

                <dd className="lg:col-span-3">
                  <span className="mb-0.5 hidden text-[10px] font-bold uppercase tracking-widest text-muted lg:block">Resultado</span>
                  <span className="font-mono text-sm font-bold text-deep-teal">
                    {ex.result}
                    {ex.extra && (
                      <span className="ml-2 block text-xs font-normal text-gold sm:inline">{ex.extra}</span>
                    )}
                  </span>
                </dd>

                <dd className="lg:col-span-5">
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
