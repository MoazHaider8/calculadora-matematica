const examples = [
  {
    n: '01',
    rule: 'Regla de la potencia',
    input: '∫ x² dx',
    result: 'x³ / 3 + C',
    extra: null,
    explanation: 'Exponente 2 aumenta en 1, da x³, y se divide entre 3.',
  },
  {
    n: '02',
    rule: 'Integral del seno',
    input: '∫ sin(x) dx',
    result: '−cos(x) + C',
    extra: null,
    explanation: 'La antiderivada del seno es el coseno negativo.',
  },
  {
    n: '03',
    rule: 'Integral exponencial',
    input: '∫ eˣ dx',
    result: 'eˣ + C',
    extra: null,
    explanation: 'eˣ es su propia antiderivada.',
  },
  {
    n: '04',
    rule: 'Regla logarítmica',
    input: '∫ 1/x dx',
    result: 'ln|x| + C',
    extra: null,
    explanation: 'Caso n = −1. La antiderivada de 1/x es el logaritmo natural.',
  },
  {
    n: '05',
    rule: 'Integral definida',
    input: '∫₀¹ x² dx',
    result: '1/3',
    extra: '≈ 0.3333',
    explanation: 'Se evalúa x³/3 en los límites: (1³/3) − (0³/3) = 1/3.',
  },
];

export function IntegralExamples() {
  return (
    <section className="py-10 lg:py-14" style={{ background: '#EEF4F7' }} aria-labelledby="examples-heading">
      <div className="site-shell">

        <div className="mb-7">
          <p className="eyebrow">Ejemplos</p>
          <h2 id="examples-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Ejemplos resueltos de integrales
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-soft">
            Cinco casos representativos con la regla y el procedimiento utilizado.
          </p>
        </div>

        <div className="academic-card overflow-hidden">
          {/* Header row */}
          <div
            className="hidden grid-cols-12 gap-4 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-muted lg:grid"
            style={{ borderBottom: '1px solid #DDF3F0', background: '#F0FAF9' }}
          >
            <div className="col-span-1">#</div>
            <div className="col-span-3">Integral</div>
            <div className="col-span-3">Resultado</div>
            <div className="col-span-5">Explicación</div>
          </div>

          <dl className="divide-y divide-line">
            {examples.map((ex) => (
              <div key={ex.n} className="grid items-start gap-x-4 gap-y-2 px-6 py-4 lg:grid-cols-12">
                {/* Index + rule */}
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

                {/* Integral */}
                <dt className="lg:col-span-3">
                  <span className="mb-0.5 hidden text-[10px] font-bold uppercase tracking-widest text-muted lg:block">
                    Integral
                  </span>
                  <span className="font-mono text-sm font-semibold text-ink">{ex.input}</span>
                </dt>

                {/* Result */}
                <dd className="lg:col-span-3">
                  <span className="mb-0.5 hidden text-[10px] font-bold uppercase tracking-widest text-muted lg:block">
                    Resultado
                  </span>
                  <span className="font-mono text-sm font-bold text-deep-teal">
                    {ex.result}
                    {ex.extra && (
                      <span className="ml-2 text-xs font-normal text-muted">{ex.extra}</span>
                    )}
                  </span>
                </dd>

                {/* Explanation */}
                <dd className="lg:col-span-5">
                  <span className="mb-0.5 hidden text-[10px] font-bold uppercase tracking-widest text-muted lg:block">
                    Explicación
                  </span>
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
