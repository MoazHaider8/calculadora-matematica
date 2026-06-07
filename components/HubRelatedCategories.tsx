import Link from 'next/link';

const CATEGORIES = [
  {
    id: 'todas',
    name: 'Todas las calculadoras',
    href: '/calculadoras',
    description: 'Ver todas las categorías disponibles',
  },
  {
    id: 'calculo',
    name: 'Calculadoras de Cálculo',
    href: '/calculadoras/calculo',
    description: 'Integrales, derivadas, límites, logaritmos y exponentes',
  },
  {
    id: 'algebra',
    name: 'Calculadoras de Álgebra',
    href: '/calculadoras/algebra',
    description: 'Ecuaciones, polinomios, raíces y expresiones algebraicas',
  },
  {
    id: 'matrices-y-vectores',
    name: 'Calculadoras de Matrices y Vectores',
    href: '/calculadoras/matrices-y-vectores',
    description: 'Matrices, determinantes, vectores e inversas',
  },
  {
    id: 'aritmetica',
    name: 'Calculadoras de Aritmética',
    href: '/calculadoras/aritmetica',
    description: 'Fracciones, porcentajes, promedios y proporciones',
  },
  {
    id: 'estadistica',
    name: 'Calculadoras de Estadística',
    href: '/calculadoras/estadistica',
    description: 'Media, varianza, probabilidad y análisis de datos',
  },
  {
    id: 'geometria',
    name: 'Calculadoras de Geometría',
    href: '/calculadoras/geometria',
    description: 'Área, volumen, triángulos y figuras geométricas',
  },
] as const;

interface Props {
  current: 'calculo' | 'algebra' | 'matrices-y-vectores' | 'aritmetica' | 'estadistica' | 'geometria';
}

export function HubRelatedCategories({ current }: Props) {
  return (
    <section className="py-12 lg:py-16" style={{ background: '#EEF4F7' }} aria-labelledby="other-cats-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Explorar más</p>
          <h2
            id="other-cats-heading"
            className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
            style={{ color: '#0a3535' }}
          >
            Otras categorías de calculadoras
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Explora otras áreas matemáticas con herramientas especializadas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((cat) => {
            const isCurrent = cat.id === current;
            if (isCurrent) {
              return (
                <div
                  key={cat.id}
                  className="flex flex-col rounded-2xl bg-white p-5"
                  style={{ border: '2px solid #D8A31A', boxShadow: '0 2px 10px rgba(216,163,26,0.1)' }}
                  aria-current="page"
                >
                  <span
                    className="mb-2 inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: '#FFF4CC', color: '#b58000', width: 'fit-content' }}
                  >
                    Categoría actual
                  </span>
                  <p className="text-sm font-bold leading-snug" style={{ color: '#0a3535' }}>
                    {cat.name}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: '#829ab1' }}>
                    {cat.description}
                  </p>
                </div>
              );
            }
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group flex flex-col rounded-2xl bg-white p-5 border border-[#D7E2EA] transition-all hover:border-[#147c7c] hover:shadow-md"
              >
                <p className="text-sm font-bold leading-snug transition-colors group-hover:text-[#147c7c]" style={{ color: '#0a3535' }}>
                  {cat.name}
                </p>
                <p className="mt-1 flex-1 text-xs leading-relaxed" style={{ color: '#829ab1' }}>
                  {cat.description}
                </p>
                <span
                  className="mt-3 text-xs font-bold transition-colors group-hover:opacity-75"
                  style={{ color: '#147c7c' }}
                  aria-hidden="true"
                >
                  Ver calculadoras &rarr;
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
