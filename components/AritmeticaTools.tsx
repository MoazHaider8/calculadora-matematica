import Link from 'next/link';

const tools = [
  {
    id: 'cientifica',
    symbol: 'sin',
    mathPreview: 'sin(x), log(x), √x',
    name: 'Calculadora Científica',
    explanation: 'Resuelve operaciones con funciones trigonométricas, logaritmos, exponentes y raíces. Cubre los cálculos habituales en ciencias y matemáticas avanzadas.',
    useCase: 'Para operaciones con funciones, raíces o logaritmos que van más allá de la aritmética básica.',
    url: '/calculadoras/aritmetica/calculadora-cientifica',
  },
  {
    id: 'porcentajes',
    symbol: '%',
    mathPreview: '25% de 200',
    name: 'Calculadora de Porcentajes',
    explanation: 'Calcula porcentajes, descuentos, aumentos y variaciones porcentuales. Muestra el procedimiento y el resultado en valor absoluto y en tanto por ciento.',
    useCase: 'Para calcular descuentos en precios, aumentos salariales o variaciones porcentuales.',
    url: '/calculadoras/aritmetica/calculadora-de-porcentajes',
  },
  {
    id: 'fracciones',
    symbol: 'a/b',
    mathPreview: '1/2 + 3/4',
    name: 'Calculadora de Fracciones',
    explanation: 'Suma, resta, multiplica y divide fracciones. Simplifica el resultado y muestra el mínimo común denominador y la fracción equivalente.',
    useCase: 'Para sumar, restar o simplificar fracciones con distinto denominador.',
    url: '/calculadoras/aritmetica/calculadora-de-fracciones',
  },
  {
    id: 'promedio',
    symbol: 'x̄',
    mathPreview: '(8 + 9 + 10) / 3',
    name: 'Calculadora de Promedio',
    explanation: 'Calcula la media aritmética de un conjunto de valores. Acepta cualquier cantidad de números y muestra el proceso de cálculo.',
    useCase: 'Para calcular la media de notas, datos numéricos o cualquier conjunto de valores.',
    url: '/calculadoras/aritmetica/calculadora-de-promedio',
  },
  {
    id: 'regla-de-tres',
    symbol: '∝',
    mathPreview: 'a:b = c:x',
    name: 'Calculadora de Regla de Tres',
    explanation: 'Resuelve proporciones directas e inversas mediante la regla de tres simple. Calcula el valor desconocido a partir de tres valores conocidos.',
    useCase: 'Para resolver proporciones directas cuando se conocen tres valores y se busca el cuarto.',
    url: '/calculadoras/aritmetica/calculadora-de-regla-de-tres',
  },
];

export function AritmeticaTools() {
  return (
    <section className="py-14 lg:py-20 bg-white-soft" aria-labelledby="tools-aritmetica-heading">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* Left: sticky intro */}
          <div className="lg:col-span-4 lg:pt-1">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Herramientas disponibles</p>
              <h2
                id="tools-aritmetica-heading"
                className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
                style={{ color: '#102a43' }}
              >
                Herramientas de aritmética disponibles
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#627d98' }}>
                Cada calculadora cubre un tipo de operación aritmética específica. Elige la herramienta que necesitas.
              </p>
              <div
                className="mt-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-bold"
                style={{ background: '#DDF3F0', color: '#0F5C5C' }}
              >
                5 herramientas
              </div>
            </div>
          </div>

          {/* Right: flagship + 2×2 grid */}
          <div className="lg:col-span-8 flex flex-col gap-6">

            {/* Flagship */}
            {(() => {
              const tool = tools[0];
              return (
                <article
                  key={tool.id}
                  id={`herramienta-${tool.id}`}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white sm:flex-row"
                  style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 14px rgba(16,42,67,0.06)' }}
                >
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
                          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold transition-colors hover:opacity-90"
                          style={{ background: '#D8A31A', color: '#fff' }}
                        >
                          Ver calculadora &rarr;
                        </Link>
                      ) : (
                        <div
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold opacity-55"
                          style={{ background: '#D7E2EA', color: '#627d98', cursor: 'default' }}
                          aria-label={`${tool.name} — próximamente`}
                        >
                          Próximamente
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })()}

            {/* 2×2 grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                      aria-hidden="true"
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
                    {tool.url ? (
                      <Link
                        href={tool.url}
                        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold transition-colors hover:opacity-90"
                        style={{ background: '#D8A31A', color: '#fff' }}
                      >
                        Ver calculadora &rarr;
                      </Link>
                    ) : (
                      <div
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold opacity-55"
                        style={{ background: '#D7E2EA', color: '#627d98', cursor: 'default' }}
                        aria-label={`${tool.name} — próximamente`}
                      >
                        Próximamente
                      </div>
                    )}
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
