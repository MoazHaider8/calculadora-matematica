import Link from 'next/link';

const conceptos = [
  {
    symbol: 'x̄',
    title: 'Media',
    items: [
      'Término estadístico preciso para el valor central calculado.',
      'Suma de valores dividida entre la cantidad.',
      'Se usa en análisis de datos y estadística descriptiva.',
      'Puede verse afectada por valores extremos altos o bajos.',
    ],
  },
  {
    symbol: 'Prom',
    title: 'Promedio',
    items: [
      'Palabra común para referirse a la media aritmética.',
      'Se usa en contextos cotidianos: notas, calificaciones, valores.',
      'El cálculo es idéntico al de la media simple.',
      null, // link inserted separately
    ],
    link: { href: '/calculadoras/aritmetica/calculadora-de-promedio', label: 'Calculadora de Promedio' },
  },
  {
    symbol: 'TC',
    title: 'Tendencia central',
    items: [
      'Conjunto de medidas que resumen un conjunto con un solo valor.',
      'Incluye media, mediana y moda.',
      'La media es la más usada, pero la mediana es más robusta ante extremos.',
      'La moda indica el valor más frecuente.',
    ],
  },
];

export function MediaTendencia() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="tendencia-media-heading">
      <div className="site-shell">
        <p className="eyebrow">Contexto</p>
        <h2 id="tendencia-media-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Media, promedio y tendencia central
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conceptos.map(c => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
            >
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ borderBottom: '1px solid #EEF4F7', background: '#F8FAFC' }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold"
                  style={{ background: '#DDF3F0', color: '#147c7c' }}
                  aria-hidden="true"
                >
                  {c.symbol}
                </div>
                <h3 className="text-sm font-bold leading-snug" style={{ color: '#102a43' }}>{c.title}</h3>
              </div>
              <div className="flex flex-1 flex-col px-5 py-4">
                <ul className="flex flex-1 flex-col gap-2">
                  {c.items.filter(Boolean).map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#147c7c' }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                {c.link && (
                  <div className="mt-4 border-t pt-3" style={{ borderColor: '#EEF4F7' }}>
                    <Link
                      href={c.link.href}
                      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition-colors hover:opacity-90"
                      style={{ background: '#D8A31A', color: '#fff' }}
                    >
                      {c.link.label} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
