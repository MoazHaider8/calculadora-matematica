import Link from 'next/link';

const topics = [
  {
    name: 'Cálculo',
    slug: 'calculo',
    body: 'El cálculo diferencial e integral es una de las ramas más utilizadas en matemáticas avanzadas. Las herramientas de esta categoría resuelven integrales definidas e indefinidas, calculan derivadas, determinan límites y trabajan con logaritmos y exponentes.',
  },
  {
    name: 'Álgebra',
    slug: 'algebra',
    body: 'El álgebra es el lenguaje común de casi todas las ramas de las matemáticas. Las calculadoras algebraicas permiten resolver ecuaciones, operar con polinomios, factorizar expresiones y encontrar raíces.',
  },
  {
    name: 'Matrices y vectores',
    slug: 'matrices-y-vectores',
    body: 'Las matrices y los vectores son herramientas del álgebra lineal. Esta categoría incluye calculadoras para multiplicar matrices, calcular determinantes, obtener inversas y resolver sistemas lineales.',
  },
  {
    name: 'Aritmética',
    slug: 'aritmetica',
    body: 'La aritmética cubre operaciones fundamentales: fracciones, porcentajes, proporciones y promedios. Incluye también la calculadora científica para operaciones más completas.',
  },
  {
    name: 'Estadística',
    slug: 'estadistica',
    body: 'La estadística permite describir conjuntos de datos y calcular probabilidades. Estas herramientas ayudan a obtener media, varianza, desviación estándar y otras medidas frecuentes.',
  },
  {
    name: 'Geometría',
    slug: 'geometria',
    body: 'La geometría trabaja con propiedades y medidas de figuras en el plano y en el espacio: áreas, volúmenes, triángulos, círculos y el teorema de Pitágoras.',
  },
];

function IconArrow() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
      <line x1="1.5" y1="5.5" x2="9.5" y2="5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <polyline points="6,2 9.5,5.5 6,9" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AuthoritySection() {
  return (
    <section className="border-b border-line bg-white-soft py-14 lg:py-20" aria-labelledby="authority-heading">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase text-teal">Por área matemática</p>
          <h2 id="authority-heading" className="text-[2rem] text-ink lg:text-[2.625rem]">
            Temas matemáticos más consultados
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-soft">
            Cada área matemática tiene sus propias herramientas. Aquí encontrarás qué tipo de operaciones resuelve cada
            categoría y para qué situaciones son más útiles.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article key={topic.slug} className="flex flex-col">
              <div className="mb-4 h-[2px] w-10 bg-gold" />
              <h3 className="mb-3 text-[1.25rem] text-ink">{topic.name}</h3>
              <p className="flex-1 text-sm leading-[1.75] text-slate-soft">{topic.body}</p>
              <div className="mt-5 border-t border-line pt-4">
                <Link
                  href={`/calculadoras/${topic.slug}/`}
                  className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-teal transition-colors hover:text-deep-teal"
                >
                  Calculadoras de {topic.name.toLowerCase()}
                  <IconArrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
