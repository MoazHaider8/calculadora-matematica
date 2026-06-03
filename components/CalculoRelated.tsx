import Link from 'next/link';

const related = [
  {
    name: 'Calculadora científica',
    category: 'Aritmética',
    description: 'Trigonometría, logaritmos y exponentes en una sola herramienta.',
    url: '/calculadoras/aritmetica/calculadora-cientifica/',
  },
  {
    name: 'Calculadora de ecuaciones',
    category: 'Álgebra',
    description: 'Resuelve ecuaciones lineales y cuadráticas con los pasos del procedimiento.',
    url: '/calculadoras/algebra/calculadora-de-ecuaciones/',
  },
  {
    name: 'Calculadora algebraica',
    category: 'Álgebra',
    description: 'Simplifica expresiones algebraicas y factoriza polinomios.',
    url: '/calculadoras/algebra/calculadora-algebraica/',
  },
  {
    name: 'Calculadora de matrices',
    category: 'Matrices y vectores',
    description: 'Suma, multiplicación, determinante y matriz inversa.',
    url: '/calculadoras/matrices-y-vectores/calculadora-de-matrices/',
  },
  {
    name: 'Calculadora de sistemas de ecuaciones',
    category: 'Matrices y vectores',
    description: 'Resuelve sistemas lineales mediante eliminación y sustitución.',
    url: '/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones/',
  },
];

export function CalculoRelated() {
  return (
    <section className="py-12 lg:py-16 bg-white-soft" aria-labelledby="related-heading">
      <div className="site-shell">

        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Otras herramientas</p>
            <h2
              id="related-heading"
              className="mt-2 text-[1.5rem] font-bold leading-tight lg:text-[1.8rem]"
              style={{ color: '#102a43' }}
            >
              Calculadoras relacionadas
            </h2>
          </div>
          <p className="text-xs font-semibold" style={{ color: '#829ab1' }}>
            Herramientas de otras categorías que complementan el trabajo en cálculo
          </p>
        </div>

        {/* Compact divider list */}
        <div
          className="overflow-hidden rounded-2xl bg-white"
          style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
        >
          {related.map((item, i) => (
            <div
              key={item.url}
              className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-aqua-soft"
              style={{ borderBottom: i < related.length - 1 ? '1px solid #EEF4F7' : 'none' }}
            >
              {/* Arrow indicator */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="shrink-0 transition-transform group-hover:translate-x-0.5"
                style={{ color: '#D8A31A' }}
              >
                <line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <polyline points="8,3 12,7 8,11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={item.url}
                    className="text-sm font-bold transition-colors hover:text-teal"
                    style={{ color: '#102a43' }}
                  >
                    {item.name}
                  </Link>
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  >
                    {item.category}
                  </span>
                </div>
                <p className="mt-0.5 text-xs leading-relaxed" style={{ color: '#829ab1' }}>
                  {item.description}
                </p>
              </div>

              {/* Link arrow */}
              <Link
                href={item.url}
                className="shrink-0 text-xs font-bold transition-colors hover:text-deep-teal"
                style={{ color: '#147c7c' }}
                aria-label={`Abrir ${item.name}`}
              >
                Abrir &rarr;
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
