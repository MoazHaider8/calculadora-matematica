import Link from 'next/link';

const guides = [
  {
    slug: '/blog/que-es-una-integral',
    category: 'Cálculo',
    title: 'Qué es una integral y cómo calcularla',
    description:
      'Aprende qué es una integral definida e indefinida, para qué sirve y cómo aplicar las reglas de integración más usadas.',
  },
  {
    slug: '/blog/como-resolver-ecuaciones',
    category: 'Álgebra',
    title: 'Cómo resolver ecuaciones paso a paso',
    description:
      'Aprende cómo resolver ecuaciones lineales y cuadráticas con pasos, ejemplos, comprobación y errores comunes.',
  },
  {
    slug: '/blog/que-es-una-matriz',
    category: 'Matrices',
    title: 'Qué es una matriz y cómo operarla',
    description:
      'Entiende qué es una matriz, cómo se representa, qué tipos existen y cómo se realizan las operaciones fundamentales.',
  },
  {
    slug: '/blog/como-calcular-porcentajes',
    category: 'Aritmética',
    title: 'Cómo calcular porcentajes paso a paso',
    description:
      'Aprende a calcular porcentajes de una cantidad, variaciones, aumentos, descuentos y proporciones con ejemplos.',
  },
  {
    slug: '/blog/media-mediana-moda-diferencias',
    category: 'Estadística',
    title: 'Media, mediana y moda: diferencias y ejemplos',
    description:
      'Conoce la diferencia entre media, mediana y moda, cuándo usar cada medida y ejemplos claros de tendencia central.',
  },
  {
    slug: '/blog/formulas-de-area',
    category: 'Geometría',
    title: 'Fórmulas de área de figuras geométricas',
    description:
      'Repasa fórmulas de área para cuadrado, rectángulo, triángulo, círculo, trapecio, rombo y paralelogramo con ejemplos.',
  },
];

export function BlogPreviewSection() {
  return (
    <section
      className="py-14 lg:py-20"
      style={{ background: '#EEF4F7' }}
      aria-labelledby="blog-preview-heading"
    >
      <div className="site-shell">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Guías matemáticas</p>
            <h2
              id="blog-preview-heading"
              className="mt-3 text-[1.75rem] font-bold leading-tight lg:text-[2.4rem]"
              style={{ color: '#102a43' }}
            >
              Aprende con nuestras guías de matemáticas
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: '#334e68' }}>
              Artículos que explican conceptos, fórmulas y procedimientos para complementar el uso de las calculadoras.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: '#0a3535' }}
          >
            Ver todas las guías
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <line x1="2" y1="5.5" x2="9" y2="5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <polyline
                points="6,2.5 9,5.5 6,8.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={guide.slug}
              aria-label={`Leer: ${guide.title}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#D7E2EA] bg-white transition-all hover:border-[#147c7c] hover:shadow-md"
            >
              <div className="flex flex-1 flex-col px-5 py-5">
                <span
                  className="inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold"
                  style={{ background: '#DDF3F0', color: '#0a3535' }}
                >
                  {guide.category}
                </span>
                <h3
                  className="mt-3 text-base font-bold leading-snug transition-colors group-hover:text-[#147c7c]"
                  style={{ color: '#0a3535' }}
                >
                  {guide.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: '#334e68' }}>
                  {guide.description}
                </p>
              </div>
              <div className="px-5 pb-5 pt-1">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold"
                  style={{ color: '#147c7c' }}
                  aria-hidden="true"
                >
                  Leer guía
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <line x1="1.5" y1="5" x2="8.5" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    <polyline
                      points="5.5,2 8.5,5 5.5,8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
