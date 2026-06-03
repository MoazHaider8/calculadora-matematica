import Link from 'next/link';

const tools = [
  {
    id: 'integrales',
    symbol: '∫',
    mathPreview: '∫ x² dx',
    name: 'Calculadora de Integrales',
    explanation: 'Resuelve integrales definidas e indefinidas aplicando las reglas de integración correspondientes y devuelve el resultado con el procedimiento completo.',
    useCase: 'Para calcular áreas bajo curvas y acumulaciones de cantidades.',
    url: '/calculadoras/calculo/calculadora-de-integrales/',
    ariaLabel: 'Ver calculadora de integrales',
  },
  {
    id: 'derivadas',
    symbol: "f'",
    mathPreview: 'd/dx (x²) = 2x',
    name: 'Calculadora de Derivadas',
    explanation: 'Obtiene la derivada de cualquier función e identifica la regla aplicada en cada paso: producto, cociente, cadena o derivadas básicas.',
    useCase: 'Para analizar tasas de cambio y pendientes de funciones.',
    url: '/calculadoras/calculo/calculadora-de-derivadas/',
    ariaLabel: 'Ver calculadora de derivadas',
  },
  {
    id: 'limites',
    symbol: 'lim',
    mathPreview: 'lim x→0  f(x)',
    name: 'Calculadora de Límites',
    explanation: 'Calcula el límite de una función cuando la variable se aproxima a un valor dado, incluyendo límites laterales y al infinito.',
    useCase: 'Para estudiar el comportamiento de funciones en puntos críticos o discontinuidades.',
    url: '/calculadoras/calculo/calculadora-de-limites/',
    ariaLabel: 'Ver calculadora de límites',
  },
  {
    id: 'logaritmos',
    symbol: 'log',
    mathPreview: 'log₁₀ (100) = 2',
    name: 'Calculadora de Logaritmos',
    explanation: 'Resuelve logaritmos en base natural (ln) y en base 10, simplifica expresiones logarítmicas y aplica las propiedades del logaritmo.',
    useCase: 'Para operar con exponentes y resolver ecuaciones logarítmicas.',
    url: '/calculadoras/calculo/calculadora-de-logaritmos/',
    ariaLabel: 'Ver calculadora de logaritmos',
  },
  {
    id: 'exponentes',
    symbol: 'xⁿ',
    mathPreview: '2⁵ = 32',
    name: 'Calculadora de Exponentes',
    explanation: 'Calcula potencias y expresiones exponenciales con resultados exactos o aproximados, incluyendo bases fraccionarias y exponentes negativos.',
    useCase: 'Para simplificar expresiones con potencias y trabajar con notación científica.',
    url: '/calculadoras/calculo/calculadora-de-exponentes/',
    ariaLabel: 'Ver calculadora de exponentes',
  },
];

function IconArrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <line x1="2" y1="6" x2="10.5" y2="6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <polyline points="7,2.5 10.5,6 7,9.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CalculoTools() {
  return (
    <section className="py-14 lg:py-20 bg-white-soft" aria-labelledby="tools-heading">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* Left: sticky intro */}
          <div className="lg:col-span-4 lg:pt-1">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Herramientas disponibles</p>
              <h2
                id="tools-heading"
                className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
                style={{ color: '#102a43' }}
              >
                Herramientas de cálculo disponibles
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#627d98' }}>
                Cada calculadora cubre una operación específica dentro del área de cálculo diferencial e integral.
              </p>
              <div
                className="mt-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-bold"
                style={{ background: '#DDF3F0', color: '#0F5C5C' }}
              >
                5 herramientas
              </div>
            </div>
          </div>

          {/* Right: tool cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {tools.map((tool) => (
                <article
                  key={tool.id}
                  id={`herramienta-${tool.id}`}
                  className="directory-card flex flex-col overflow-hidden rounded-2xl bg-white"
                  style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 14px rgba(16,42,67,0.06)' }}
                >
                  {/* Formula preview strip */}
                  <div
                    className="px-5 py-3 font-mono text-sm"
                    style={{ background: '#0a3535', color: 'rgba(216,163,26,0.82)' }}
                    aria-hidden="true"
                  >
                    {tool.mathPreview}
                  </div>

                  {/* Card header */}
                  <div
                    className="flex items-center gap-3 px-5 py-4"
                    style={{ borderBottom: '1px solid #EEF4F7', background: '#F8FAFC' }}
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold"
                      style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                    >
                      {tool.symbol}
                    </div>
                    <h3 className="text-base font-bold leading-snug" style={{ color: '#102a43' }}>
                      {tool.name}
                    </h3>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col px-5 py-4">
                    <p className="flex-1 text-sm leading-relaxed" style={{ color: '#334e68' }}>
                      {tool.explanation}
                    </p>
                    <p className="mt-3 text-xs font-semibold italic" style={{ color: '#829ab1' }}>
                      {tool.useCase}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="px-5 pb-5 pt-3">
                    <Link
                      href={tool.url}
                      aria-label={tool.ariaLabel}
                      className="flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                      style={{ background: '#0F5C5C' }}
                    >
                      Ver calculadora
                      <IconArrow />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
