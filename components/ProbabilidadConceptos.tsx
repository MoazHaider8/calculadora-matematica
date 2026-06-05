const conceptos = [
  {
    symbol: 'P(A)',
    title: 'Probabilidad simple',
    formula: 'P(A) = favorables / posibles',
    desc: 'Calcula la probabilidad de un evento a partir del número de casos favorables y el total de casos posibles. El resultado es un valor entre 0 y 1.',
  },
  {
    symbol: "P(A')",
    title: 'Probabilidad complementaria',
    formula: "P(A') = 1 − P(A)",
    desc: 'El complemento de un evento A es la probabilidad de que A no ocurra. La suma de un evento y su complemento siempre es 1.',
  },
  {
    symbol: 'P(A∪B)',
    title: 'Unión de eventos',
    formula: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',
    desc: 'Calcula la probabilidad de que ocurra A, B o ambos. Se resta la intersección para evitar contarla dos veces.',
  },
  {
    symbol: 'P(A∩B)',
    title: 'Intersección de eventos',
    formula: 'P(A ∩ B) = P(A) × P(B)',
    desc: 'Calcula la probabilidad de que ocurran A y B simultáneamente. Esta fórmula es válida para eventos independientes.',
  },
  {
    symbol: '1−(1−p)ⁿ',
    title: 'Al menos uno en n intentos',
    formula: 'P = 1 − (1 − p)^n',
    desc: 'Calcula la probabilidad de que un evento con probabilidad p ocurra al menos una vez en n intentos independientes.',
  },
];

export function ProbabilidadConceptos() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="conceptos-prob-heading">
      <div className="site-shell">
        <p className="eyebrow">Métodos</p>
        <h2 id="conceptos-prob-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Tipos de probabilidad que calcula esta herramienta
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conceptos.map(c => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 14px rgba(16,42,67,0.05)' }}
            >
              <div
                className="px-5 py-3 font-mono text-sm"
                style={{ background: '#0a3535', color: 'rgba(216,163,26,0.85)' }}
                aria-hidden="true"
              >
                {c.formula}
              </div>
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ borderBottom: '1px solid #EEF4F7', background: '#F8FAFC' }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold"
                  style={{ background: '#DDF3F0', color: '#147c7c' }}
                  aria-hidden="true"
                >
                  {c.symbol}
                </div>
                <h3 className="text-sm font-bold leading-snug" style={{ color: '#102a43' }}>{c.title}</h3>
              </div>
              <div className="flex-1 px-5 py-4">
                <p className="text-sm leading-relaxed" style={{ color: '#334e68' }}>{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
