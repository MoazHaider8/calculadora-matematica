import Link from 'next/link';

const comparison = [
  {
    symbol: 'σ²',
    title: 'Varianza',
    points: [
      'Mide la dispersión cuadrática respecto a la media.',
      'Usa diferencias elevadas al cuadrado, por lo que amplifica valores extremos.',
      'Sus unidades son el cuadrado de las del conjunto de datos.',
      'Es el resultado principal de esta calculadora.',
    ],
    dark: false,
  },
  {
    symbol: 'σ',
    title: 'Desviación estándar',
    points: [
      'Es la raíz cuadrada de la varianza.',
      'Se interpreta en las mismas unidades que los datos originales.',
      'Es más fácil de comunicar e interpretar directamente.',
      'Tiene su propia calculadora dedicada en este sitio.',
    ],
    dark: true,
    link: {
      href: '/calculadoras/estadistica/calculadora-de-desviacion-estandar',
      label: 'Calculadora de Desviación Estándar',
    },
  },
];

export function VarianzaDesviacion() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="desv-var-heading">
      <div className="site-shell">
        <p className="eyebrow">Relación</p>
        <h2 id="desv-var-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Varianza y desviación estándar
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {comparison.map(c => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-2xl"
              style={{
                background: c.dark ? '#0a3535' : '#F8FAFC',
                border: c.dark ? '1px solid transparent' : '1px solid #D7E2EA',
                boxShadow: '0 2px 12px rgba(16,42,67,0.06)',
              }}
            >
              <div className="flex items-center gap-3 px-6 py-5">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-mono text-xl font-bold"
                  style={{ background: 'rgba(221,243,240,0.12)', color: c.dark ? '#D8A31A' : '#147c7c' }}
                  aria-hidden="true"
                >
                  {c.symbol}
                </div>
                <h3 className="text-base font-bold" style={{ color: c.dark ? '#DDF3F0' : '#102a43' }}>{c.title}</h3>
              </div>
              <div className="flex flex-1 flex-col px-6 pb-6">
                <ul className="flex flex-1 flex-col gap-2">
                  {c.points.map(pt => (
                    <li key={pt} className="flex gap-2 text-sm leading-relaxed" style={{ color: c.dark ? 'rgba(221,243,240,0.8)' : '#334e68' }}>
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: c.dark ? '#D8A31A' : '#147c7c' }}
                        aria-hidden="true"
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
                {c.link && (
                  <div className="mt-5 border-t pt-4" style={{ borderColor: 'rgba(221,243,240,0.15)' }}>
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
