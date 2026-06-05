const comparison = [
  {
    title: 'Varianza',
    symbol: 'σ²',
    points: [
      'Mide la dispersión cuadrática respecto a la media.',
      'Sus unidades están al cuadrado respecto a los datos.',
      'Puede ser difícil de interpretar directamente.',
      'Se usa como paso intermedio para calcular la desviación estándar.',
    ],
    bg: '#F8FAFC',
    border: '#D7E2EA',
    color: '#102a43',
    accent: '#147c7c',
  },
  {
    title: 'Desviación estándar',
    symbol: 'σ',
    points: [
      'Es la raíz cuadrada de la varianza.',
      'Se expresa en las mismas unidades que los datos.',
      'Es más fácil de interpretar y comunicar.',
      'Mide la distancia típica de cada dato respecto a la media.',
    ],
    bg: '#0a3535',
    border: 'transparent',
    color: '#DDF3F0',
    accent: '#D8A31A',
  },
];

export function DesviacionVarianza() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="varianza-desv-heading">
      <div className="site-shell">
        <p className="eyebrow">Relación</p>
        <h2 id="varianza-desv-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Varianza y desviación estándar
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {comparison.map(c => (
            <article
              key={c.title}
              className="overflow-hidden rounded-2xl px-6 py-6"
              style={{ background: c.bg, border: `1px solid ${c.border}`, boxShadow: '0 2px 12px rgba(16,42,67,0.06)' }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-mono text-xl font-bold"
                  style={{ background: 'rgba(221,243,240,0.12)', color: c.accent }}
                >
                  {c.symbol}
                </div>
                <h3 className="text-base font-bold" style={{ color: c.color }}>{c.title}</h3>
              </div>
              <ul className="flex flex-col gap-2">
                {c.points.map(pt => (
                  <li key={pt} className="flex gap-2 text-sm leading-relaxed" style={{ color: c.color, opacity: c.bg === '#0a3535' ? 0.85 : 1 }}>
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: c.accent }} aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-6 rounded-xl px-5 py-4 text-sm leading-relaxed text-slate" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
          Esta calculadora muestra la varianza como valor de apoyo. Para un análisis dedicado de la varianza, habrá una calculadora específica disponible próximamente.
        </p>
      </div>
    </section>
  );
}
