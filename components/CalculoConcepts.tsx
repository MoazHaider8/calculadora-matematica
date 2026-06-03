import Link from 'next/link';

const concepts = [
  {
    symbol: 'f(x)',
    name: 'Funciones',
    explanation: 'Expresión matemática que asigna un valor de salida a cada valor de entrada. Es la base del cálculo diferencial e integral.',
    url: null,
  },
  {
    symbol: '∫',
    name: 'Integrales',
    explanation: 'Herramienta del cálculo integral para calcular áreas bajo curvas y acumular cantidades a lo largo de un intervalo.',
    url: '/calculadoras/calculo/calculadora-de-integrales/',
  },
  {
    symbol: "f'",
    name: 'Derivadas',
    explanation: 'Medida de la tasa de cambio instantánea de una función respecto a su variable. Fundamental en el cálculo diferencial.',
    url: '/calculadoras/calculo/calculadora-de-derivadas/',
  },
  {
    symbol: 'lim',
    name: 'Límites',
    explanation: 'Valor al que se aproxima una función cuando su variable tiende a un punto determinado. Fundamento del cálculo moderno.',
    url: '/calculadoras/calculo/calculadora-de-limites/',
  },
  {
    symbol: 'log',
    name: 'Logaritmos',
    explanation: 'Operación inversa de la potenciación. Permite resolver ecuaciones exponenciales y trabajar con escalas no lineales.',
    url: '/calculadoras/calculo/calculadora-de-logaritmos/',
  },
  {
    symbol: 'xⁿ',
    name: 'Exponentes',
    explanation: 'Expresan la multiplicación repetida de una base por sí misma. Aparecen en crecimientos y decaimientos exponenciales.',
    url: '/calculadoras/calculo/calculadora-de-exponentes/',
  },
];

export function CalculoConcepts() {
  return (
    <section
      className="py-12 lg:py-16"
      style={{ background: '#f8fafc' }}
      aria-labelledby="concepts-heading"
    >
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Conceptos clave</p>
          <h2
            id="concepts-heading"
            className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
            style={{ color: '#102a43' }}
          >
            Conceptos de cálculo incluidos
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((c) => (
            <article
              key={c.name}
              className="flex flex-col rounded-2xl bg-white p-5"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              {/* Gold top accent */}
              <div className="mb-4 h-0.5 w-8 rounded-full" style={{ background: '#D8A31A' }} />

              <div className="mb-3 flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold"
                  style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                >
                  {c.symbol}
                </span>
                <h3 className="text-base font-bold" style={{ color: '#102a43' }}>{c.name}</h3>
              </div>

              <p className="flex-1 text-sm leading-relaxed" style={{ color: '#627d98' }}>
                {c.explanation}
              </p>

              {c.url && (
                <Link
                  href={c.url}
                  className="mt-4 text-sm font-bold transition-opacity hover:opacity-75"
                  style={{ color: '#0F5C5C' }}
                >
                  Abrir calculadora &rarr;
                </Link>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
