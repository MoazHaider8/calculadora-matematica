import Link from 'next/link';

const topics = [
  {
    slug: 'calculo',
    name: 'Cálculo',
    symbol: '∫',
    body: 'Las calculadoras de cálculo cubren integrales definidas e indefinidas, derivadas de funciones, límites, logaritmos y exponentes. La calculadora de integrales devuelve el resultado con el procedimiento de integración. La de derivadas identifica la regla aplicada en cada paso. Los logaritmos trabajan en base natural y base 10. Estas operaciones forman parte del análisis matemático y aparecen en física, ingeniería y ciencias exactas.',
    url: '/calculadoras/calculo/',
    tools: ['Integrales', 'Derivadas', 'Límites', 'Logaritmos', 'Exponentes'],
  },
  {
    slug: 'algebra',
    name: 'Álgebra',
    symbol: 'x²',
    body: 'Las calculadoras de álgebra resuelven ecuaciones lineales y cuadráticas, simplifican polinomios, calculan raíces y factorizan expresiones. La calculadora algebraica acepta expresiones con variables y devuelve formas simplificadas. Para ecuaciones con una o dos incógnitas, el resultado incluye los pasos del procedimiento. Son útiles en álgebra elemental, álgebra lineal y cursos de matemáticas de bachillerato y universidad.',
    url: '/calculadoras/algebra/',
    tools: ['Ecuaciones', 'Algebraica', 'Polinomios', 'Raíces', 'Raíz cuadrada'],
  },
  {
    slug: 'matrices-y-vectores',
    name: 'Matrices y vectores',
    symbol: '[ ]',
    body: 'Las calculadoras de matrices y vectores operan con estructuras de datos en filas y columnas. Permiten sumar y multiplicar matrices, calcular el determinante, obtener la matriz inversa y resolver sistemas de ecuaciones lineales. Los vectores tienen herramientas para módulo, dirección y producto escalar. Estas operaciones aparecen en álgebra lineal, cálculo multivariable y física computacional.',
    url: '/calculadoras/matrices-y-vectores/',
    tools: ['Matrices', 'Determinantes', 'Vectores', 'Sistemas', 'Matriz inversa'],
  },
  {
    slug: 'aritmetica',
    name: 'Aritmética',
    symbol: '%',
    body: 'La sección de aritmética reúne las calculadoras de uso más frecuente. La científica trabaja con funciones trigonométricas, logaritmos y exponentes. La de fracciones suma, resta, multiplica y divide con simplificación automática. La de porcentajes calcula aumentos, descuentos y variaciones. La de promedio obtiene la media aritmética. La de regla de tres resuelve proporciones directas e inversas.',
    url: '/calculadoras/aritmetica/',
    tools: ['Fracciones', 'Porcentajes', 'Científica', 'Regla de tres', 'Promedio'],
  },
  {
    slug: 'estadistica',
    name: 'Estadística',
    symbol: 'σ',
    body: 'Las calculadoras de estadística procesan conjuntos de datos y devuelven medidas descriptivas. La de media obtiene el promedio aritmético. La de varianza mide la dispersión respecto a la media. La de desviación estándar expresa esa dispersión en las mismas unidades que los datos. La de probabilidad trabaja con eventos simples y compuestos. Permiten comprobar cálculos y revisar el procedimiento estadístico.',
    url: '/calculadoras/estadistica/',
    tools: ['Estadística', 'Probabilidad', 'Desviación estándar', 'Media', 'Varianza'],
  },
  {
    slug: 'geometria',
    name: 'Geometría',
    symbol: '△',
    body: 'Las calculadoras de geometría cubren figuras planas y sólidos tridimensionales. La de área trabaja con rectángulos, triángulos y círculos. La de volumen calcula el espacio de prismas, cilindros, esferas y conos. La de triángulos resuelve a partir de lados y ángulos. La de Pitágoras obtiene el lado desconocido de un triángulo rectángulo. La de círculos calcula radio, diámetro, área y perímetro.',
    url: '/calculadoras/geometria/',
    tools: ['Área', 'Volumen', 'Triángulos', 'Círculos', 'Pitágoras'],
  },
];

export function CalcTopicOverview() {
  return (
    <section
      aria-labelledby="topics-heading"
      style={{ backgroundColor: '#102a43' }}
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px),' +
            'linear-gradient(180deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="site-shell relative py-10 lg:py-14">

        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow" style={{ color: '#D8A31A' }}>Referencia matemática</p>
            <h2
              id="topics-heading"
              className="mt-3 text-[1.9rem] font-bold leading-tight text-white lg:text-[2.5rem]"
            >
              Áreas matemáticas disponibles en la plataforma
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed lg:text-right" style={{ color: 'rgba(221,243,240,0.55)' }}>
            Descripción de cada área y las operaciones que cubre.
          </p>
        </div>

        <div className="h-px mb-0" style={{ background: 'rgba(255,255,255,0.1)' }} />

        {topics.map((topic, index) => (
          <article
            key={topic.slug}
            className="group border-b py-7 lg:py-9"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-10">

              {/* Left: number + name + tags */}
              <div className="lg:col-span-4">
                <div className="flex items-start gap-4">
                  <span
                    className="font-mono text-[2.8rem] font-bold leading-none tabular-nums lg:text-[3.2rem]"
                    style={{ color: 'rgba(216,163,26,0.22)' }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="pt-1">
                    <div
                      className="mb-1.5 font-mono text-base font-bold"
                      style={{ color: 'rgba(221,243,240,0.35)' }}
                      aria-hidden="true"
                    >
                      {topic.symbol}
                    </div>
                    <h3 className="text-xl font-bold text-white lg:text-2xl">{topic.name}</h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {topic.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded px-2 py-0.5 text-xs font-semibold"
                          style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(221,243,240,0.65)' }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: body + link */}
              <div className="lg:col-span-8 lg:pt-1">
                <p className="text-sm leading-relaxed lg:text-base" style={{ color: 'rgba(221,243,240,0.72)' }}>
                  {topic.body}
                </p>
                <Link
                  href={topic.url}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-white"
                  style={{ color: '#DDF3F0' }}
                >
                  Ver calculadoras de {topic.name}
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                    <line x1="1.5" y1="5.5" x2="9.5" y2="5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    <polyline points="6,2 9.5,5.5 6,9" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

            </div>
          </article>
        ))}

      </div>
    </section>
  );
}
