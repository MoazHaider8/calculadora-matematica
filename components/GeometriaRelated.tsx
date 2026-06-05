import Link from 'next/link';

const related = [
  { name: 'Directorio de Calculadoras',         desc: 'Todas las categorías matemáticas en un solo lugar.',                  url: '/calculadoras',                                          live: true },
  { name: 'Calculadoras de Aritmética',          desc: 'Fracciones, porcentajes, promedio, regla de tres y científica.',      url: '/calculadoras/aritmetica',                               live: true },
  { name: 'Calculadoras de Álgebra',             desc: 'Ecuaciones, polinomios, raíces y herramientas algebraicas.',          url: '/calculadoras/algebra',                                  live: true },
  { name: 'Calculadoras de Cálculo',             desc: 'Derivadas, integrales, límites, logaritmos y exponentes.',            url: '/calculadoras/calculo',                                  live: true },
  { name: 'Calculadoras de Matrices y Vectores', desc: 'Matrices, determinantes, vectores y sistemas de ecuaciones.',         url: '/calculadoras/matrices-y-vectores',                      live: true },
  { name: 'Calculadoras de Estadística',         desc: 'Probabilidad, media, varianza y desviación estándar.',                url: '/calculadoras/estadistica',                              live: true },
  { name: 'Calculadora de Raíz Cuadrada',        desc: 'Calcula raíces cuadradas con procedimiento y explicación.',           url: '/calculadoras/algebra/calculadora-de-raiz-cuadrada',     live: true },
  { name: 'Calculadora de Exponentes',           desc: 'Potencias y exponentes con resultado y procedimiento.',               url: '/calculadoras/calculo/calculadora-de-exponentes',         live: true },
];

export function GeometriaRelated() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="related-geo-heading">
      <div className="site-shell">
        <p className="eyebrow">Otras herramientas</p>
        <h2
          id="related-geo-heading"
          className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]"
        >
          Calculadoras relacionadas
        </h2>

        <div
          className="overflow-hidden rounded-2xl bg-white"
          style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
        >
          {related.map((item, i) => (
            <div
              key={item.name}
              className="flex items-center gap-4 px-5 py-4"
              style={{ borderBottom: i < related.length - 1 ? '1px solid #EEF4F7' : 'none' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0" style={{ color: '#D8A31A' }}>
                <line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <polyline points="8,3 12,7 8,11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {item.live ? (
                    <Link href={item.url} className="text-sm font-bold transition-colors hover:text-teal" style={{ color: '#102a43' }}>
                      {item.name}
                    </Link>
                  ) : (
                    <span className="text-sm font-bold" style={{ color: '#829ab1' }}>{item.name}</span>
                  )}
                  {!item.live && (
                    <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider" style={{ background: '#FFF4CC', color: '#b58000' }}>
                      Próximamente
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs leading-relaxed" style={{ color: '#829ab1' }}>{item.desc}</p>
              </div>

              {item.live && (
                <Link href={item.url} className="shrink-0 text-xs font-bold transition-colors hover:text-deep-teal" style={{ color: '#147c7c' }} aria-label={`Abrir ${item.name}`}>
                  Abrir &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
