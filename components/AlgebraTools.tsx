import Link from 'next/link';

const tools = [
  {
    id: 'ecuaciones',
    symbol: '=',
    mathPreview: '2x + 3 = 7',
    name: 'Calculadora de Ecuaciones',
    explanation: 'Resuelve ecuaciones lineales y cuadráticas, muestra los pasos del procedimiento y verifica la solución sustituyendo el resultado.',
    useCase: 'Para despejar variables y resolver ecuaciones con una o dos incógnitas.',
    url: '/calculadoras/algebra/calculadora-de-ecuaciones',
  },
  {
    id: 'algebraica',
    symbol: 'x²',
    mathPreview: 'x² + 3x + 2',
    name: 'Calculadora Algebraica',
    explanation: 'Simplifica, expande y factoriza expresiones algebraicas. Trabaja con variables, coeficientes y operaciones simbólicas.',
    useCase: 'Para simplificar expresiones antes de resolver una ecuación o para factorizar polinomios.',
    url: '/calculadoras/algebra/calculadora-algebraica',
  },
  {
    id: 'polinomios',
    symbol: 'p(x)',
    mathPreview: 'x³ - 2x² + x',
    name: 'Calculadora de Polinomios',
    explanation: 'Opera con polinomios: suma, resta, multiplicación y división. Evalúa el polinomio en un punto y calcula el grado.',
    useCase: 'Para trabajar con expresiones polinómicas de grado mayor que dos.',
    url: '/calculadoras/algebra/calculadora-de-polinomios',
  },
  {
    id: 'raices',
    symbol: '√x',
    mathPreview: 'x² - 5x + 6 = 0',
    name: 'Calculadora de Raíces',
    explanation: 'Calcula las raíces de expresiones algebraicas y polinomios. Aplica la fórmula cuadrática y factorización donde corresponde.',
    useCase: 'Para encontrar los valores de x que hacen cero una expresión o polinomio.',
    url: null,
  },
  {
    id: 'raiz-cuadrada',
    symbol: '√',
    mathPreview: '√25 = 5',
    name: 'Calculadora de Raíz Cuadrada',
    explanation: 'Calcula la raíz cuadrada exacta o aproximada de cualquier número. Simplifica radicales y trabaja con raíces de expresiones.',
    useCase: 'Para obtener la raíz cuadrada de un número o simplificar una expresión con radicales.',
    url: null,
  },
];

export function AlgebraTools() {
  return (
    <section className="py-14 lg:py-20 bg-white-soft" aria-labelledby="tools-algebra-heading">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* Left: sticky intro */}
          <div className="lg:col-span-4 lg:pt-1">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Herramientas disponibles</p>
              <h2
                id="tools-algebra-heading"
                className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
                style={{ color: '#102a43' }}
              >
                Herramientas de álgebra disponibles
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#627d98' }}>
                Cada calculadora cubre una operación específica dentro del área de álgebra. Las herramientas estarán disponibles próximamente.
              </p>
              <div
                className="mt-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-bold"
                style={{ background: '#DDF3F0', color: '#0F5C5C' }}
              >
                5 herramientas
              </div>
            </div>
          </div>

          {/* Right: tool cards — flagship (first) full-width, 4 remaining in 2×2 */}
          <div className="lg:col-span-8 flex flex-col gap-5">

            {/* Flagship card — full width */}
            {(() => {
              const tool = tools[0];
              return (
                <article
                  key={tool.id}
                  id={`herramienta-${tool.id}`}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white sm:flex-row"
                  style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 14px rgba(16,42,67,0.06)' }}
                >
                  {/* Left: dark preview panel */}
                  <div
                    className="flex w-full shrink-0 flex-col items-start justify-center px-6 py-6 sm:w-44"
                    style={{ background: '#0a3535' }}
                    aria-hidden="true"
                  >
                    <div
                      className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl font-mono text-base font-bold"
                      style={{ background: 'rgba(221,243,240,0.12)', color: '#DDF3F0' }}
                    >
                      {tool.symbol}
                    </div>
                    <p className="font-mono text-base font-semibold" style={{ color: 'rgba(216,163,26,0.85)' }}>
                      {tool.mathPreview}
                    </p>
                  </div>

                  {/* Right: content */}
                  <div className="flex flex-1 flex-col">
                    <div className="flex-1 px-6 py-5">
                      <h3 className="text-base font-bold" style={{ color: '#102a43' }}>{tool.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: '#334e68' }}>{tool.explanation}</p>
                      <p className="mt-2 text-xs font-semibold italic" style={{ color: '#829ab1' }}>{tool.useCase}</p>
                    </div>
                    <div className="border-t px-6 pb-5 pt-4" style={{ borderColor: '#EEF4F7' }}>
                      {tool.url ? (
                        <Link
                          href={tool.url}
                          className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90"
                          style={{ background: '#0F5C5C' }}
                        >
                          Ver calculadora
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                            <line x1="1.5" y1="5" x2="8.5" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                            <polyline points="5.5,2 8.5,5 5.5,8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      ) : (
                        <div
                          className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold opacity-60"
                          style={{ background: '#D7E2EA', color: '#627d98', cursor: 'default' }}
                        >
                          Próximamente
                          <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide" style={{ background: '#FFF4CC', color: '#b58000' }}>En desarrollo</span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })()}

            {/* Remaining 4 in 2×2 grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {tools.slice(1).map((tool) => (
                <article
                  key={tool.id}
                  id={`herramienta-${tool.id}`}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white"
                  style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 14px rgba(16,42,67,0.06)' }}
                >
                  <div
                    className="px-5 py-3 font-mono text-sm"
                    style={{ background: '#0a3535', color: 'rgba(216,163,26,0.82)' }}
                    aria-hidden="true"
                  >
                    {tool.mathPreview}
                  </div>
                  <div
                    className="flex items-center gap-3 px-5 py-4"
                    style={{ borderBottom: '1px solid #EEF4F7', background: '#F8FAFC' }}
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold"
                      style={{ background: '#DDF3F0', color: '#147c7c' }}
                    >
                      {tool.symbol}
                    </div>
                    <h3 className="text-sm font-bold leading-snug" style={{ color: '#102a43' }}>{tool.name}</h3>
                  </div>
                  <div className="flex flex-1 flex-col px-5 py-4">
                    <p className="flex-1 text-sm leading-relaxed" style={{ color: '#334e68' }}>{tool.explanation}</p>
                    <p className="mt-3 text-xs font-semibold italic" style={{ color: '#829ab1' }}>{tool.useCase}</p>
                  </div>
                  <div className="px-5 pb-4 pt-2">
                    <div
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold opacity-55"
                      style={{ background: '#D7E2EA', color: '#627d98', cursor: 'default' }}
                      aria-label={`${tool.name} — próximamente`}
                    >
                      Próximamente
                    </div>
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
