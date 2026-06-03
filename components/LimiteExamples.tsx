const examples = [
  {
    n: '01',
    rule: 'Forma indeterminada',
    input: 'lim x→2 (x² - 4)/(x - 2)',
    result: '4',
    explanation: 'La sustitución directa da 0/0. Al simplificar, (x²-4)/(x-2) = x+2. Sustituyendo x = 2: resultado = 4.',
  },
  {
    n: '02',
    rule: 'Límite trigonométrico',
    input: 'lim x→0 sin(x)/x',
    result: '1',
    explanation: 'Límite fundamental del cálculo. La función se acerca a 1 desde ambos lados cuando x tiende a 0.',
  },
  {
    n: '03',
    rule: 'Límite al infinito',
    input: 'lim x→∞ 1/x',
    result: '0',
    explanation: 'A medida que x crece sin límite, 1/x se acerca a 0 sin llegar a alcanzarlo.',
  },
  {
    n: '04',
    rule: 'Límite bilateral no existe',
    input: 'lim x→0 1/x',
    result: 'No existe',
    explanation: 'Desde la izquierda, 1/x tiende a -∞. Desde la derecha, tiende a +∞. Como los lados difieren, el límite bilateral no existe.',
  },
  {
    n: '05',
    rule: 'Forma indeterminada',
    input: 'lim x→1 (x² - 1)/(x - 1)',
    result: '2',
    explanation: 'Al simplificar: (x²-1)/(x-1) = x+1. Sustituyendo x = 1: resultado = 2.',
  },
];

export function LimiteExamples() {
  return (
    <section className="py-10 lg:py-14" style={{ background: '#EEF4F7' }} aria-labelledby="examples-limite-heading">
      <div className="site-shell">

        <div className="mb-7">
          <p className="eyebrow">Ejemplos</p>
          <h2 id="examples-limite-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Ejemplos resueltos de límites
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-soft">
            Cinco casos representativos con el método y procedimiento utilizado.
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
