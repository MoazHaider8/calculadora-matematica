import Link from 'next/link';

const rows = [
  {
    index: '01',
    situation: 'Resolver una integral definida o indefinida',
    tool: 'Calculadora de Integrales',
    url: '/calculadoras/calculo/calculadora-de-integrales/',
  },
  {
    index: '02',
    situation: 'Derivar una función o calcular su pendiente',
    tool: 'Calculadora de Derivadas',
    url: '/calculadoras/calculo/calculadora-de-derivadas/',
  },
  {
    index: '03',
    situation: 'Analizar el comportamiento de una función en un punto',
    tool: 'Calculadora de Límites',
    url: '/calculadoras/calculo/calculadora-de-limites/',
  },
  {
    index: '04',
    situation: 'Resolver una ecuación con logaritmos o simplificar expresiones logarítmicas',
    tool: 'Calculadora de Logaritmos',
    url: '/calculadoras/calculo/calculadora-de-logaritmos/',
  },
  {
    index: '05',
    situation: 'Calcular potencias o simplificar expresiones con exponentes',
    tool: 'Calculadora de Exponentes',
    url: '/calculadoras/calculo/calculadora-de-exponentes/',
  },
];

export function CalculoWhenToUse() {
  return (
    <section
      className="py-12 lg:py-16 bg-white-soft"
      aria-labelledby="when-heading"
    >
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Guía de uso</p>
          <h2
            id="when-heading"
            className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
            style={{ color: '#102a43' }}
          >
            ¿Cuándo utilizar cada herramienta?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Cada calculadora responde a un tipo de operación concreto. Esta tabla indica cuál usar según la situación.
          </p>
        </div>

        {/* Table header */}
        <div
          className="hidden grid-cols-12 gap-4 rounded-t-xl px-5 py-3 sm:grid"
          style={{ background: '#EEF4F7', borderBottom: '1px solid #D7E2EA' }}
        >
          <span className="col-span-1 text-xs font-bold uppercase tracking-wider" style={{ color: '#829ab1' }}>#</span>
          <span className="col-span-6 text-xs font-bold uppercase tracking-wider" style={{ color: '#829ab1' }}>Situación</span>
          <span className="col-span-5 text-xs font-bold uppercase tracking-wider" style={{ color: '#829ab1' }}>Herramienta recomendada</span>
        </div>

        {/* Rows */}
        <div
          className="overflow-hidden rounded-b-xl sm:rounded-t-none rounded-xl sm:rounded-t-none"
          style={{ border: '1px solid #D7E2EA', borderTop: 'none' }}
        >
          {rows.map((row, i) => (
            <div
              key={row.index}
              className="grid grid-cols-1 gap-3 px-5 py-4 sm:grid-cols-12 sm:items-center sm:gap-4"
              style={{
                borderBottom: i < rows.length - 1 ? '1px solid #EEF4F7' : 'none',
                background: i % 2 === 0 ? '#ffffff' : '#FAFCFD',
              }}
            >
              <span className="font-mono text-xs font-bold sm:col-span-1" style={{ color: '#D8A31A' }}>
                {row.index}
              </span>
              <p className="text-sm leading-relaxed sm:col-span-6" style={{ color: '#334e68' }}>
                {row.situation}
              </p>
              <div className="sm:col-span-5">
                <Link
                  href={row.url}
                  className="inline-flex items-center gap-2 text-sm font-bold transition-colors hover:opacity-75"
                  style={{ color: '#0F5C5C' }}
                >
                  {row.tool}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <line x1="1.5" y1="5" x2="8.5" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    <polyline points="5.5,2 8.5,5 5.5,8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
