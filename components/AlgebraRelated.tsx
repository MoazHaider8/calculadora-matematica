import Link from 'next/link';

const related = [
  {
    name: 'Calculadoras de Cálculo',
    category: 'Categoría',
    description: 'Integrales, derivadas, límites, logaritmos y exponentes.',
    url: '/calculadoras/calculo',
  },
  {
    name: 'Calculadora de Exponentes',
    category: 'Cálculo',
    description: 'Calcula potencias, exponentes negativos y fraccionarios.',
    url: '/calculadoras/calculo/calculadora-de-exponentes',
  },
  {
    name: 'Calculadora de Logaritmos',
    category: 'Cálculo',
    description: 'Logaritmos en base 10, base e y bases personalizadas.',
    url: '/calculadoras/calculo/calculadora-de-logaritmos',
  },
  {
    name: 'Calculadora de Derivadas',
    category: 'Cálculo',
    description: 'Derivada simbólica de funciones algebraicas y trigonométricas.',
    url: '/calculadoras/calculo/calculadora-de-derivadas',
  },
  {
    name: 'Calculadora Científica',
    category: 'Aritmética',
    description: 'Operaciones científicas completas incluyendo potencias y raíces.',
    url: null,
  },
];

export function AlgebraRelated() {
  return (
    <section className="py-10 lg:py-12 bg-white-soft" aria-labelledby="related-algebra-heading">
      <div className="site-shell">

        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Otras herramientas</p>
            <h2
              id="related-algebra-heading"
              className="mt-2 text-[1.5rem] font-bold leading-tight lg:text-[1.8rem]"
              style={{ color: '#102a43' }}
            >
              Calculadoras relacionadas
            </h2>
          </div>
          <p className="text-xs font-semibold" style={{ color: '#829ab1' }}>
            Herramientas de otras categorías que complementan el trabajo en álgebra
          </p>
        </div>

        <div
          className="overflow-hidden rounded-2xl bg-white"
          style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
        >
          {related.map((item, i) => (
            <div
              key={item.name}
              className="flex items-center gap-4 px-5 py-4 transition-colors"
              style={{
                borderBottom: i < related.length - 1 ? '1px solid #EEF4F7' : 'none',
              }}
            >
              <svg
                width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
                className="shrink-0"
                style={{ color: '#D8A31A' }}
              >
                <line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <polyline points="8,3 12,7 8,11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  {item.url ? (
                    <Link
                      href={item.url}
                      className="text-sm font-bold transition-colors hover:text-teal"
                      style={{ color: '#102a43' }}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="text-sm font-bold" style={{ color: '#829ab1' }}>{item.name}</span>
                  )}
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  >
                    {item.category}
                  </span>
                  {!item.url && (
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: '#FFF4CC', color: '#b58000' }}
                    >
                      Próximamente
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs leading-relaxed" style={{ color: '#829ab1' }}>
                  {item.description}
                </p>
              </div>

              {item.url && (
                <Link
                  href={item.url}
                  className="shrink-0 text-xs font-bold transition-colors hover:text-deep-teal"
                  style={{ color: '#147c7c' }}
                  aria-label={`Abrir ${item.name}`}
                >
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
