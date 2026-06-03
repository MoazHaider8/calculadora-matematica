const tools = [
  {
    id: 'matrices',
    symbol: '[ ]',
    mathPreview: 'A + B',
    name: 'Calculadora de Matrices',
    explanation: 'Suma, resta y multiplica matrices de distintas dimensiones. Muestra el procedimiento y el resultado de cada operación.',
    useCase: 'Para realizar operaciones entre dos matrices de forma directa.',
    url: null,
  },
  {
    id: 'determinantes',
    symbol: 'det',
    mathPreview: 'det(A)',
    name: 'Calculadora de Determinantes',
    explanation: 'Calcula el determinante de una matriz cuadrada. Necesario para conocer si una matriz es invertible y para resolver sistemas lineales.',
    useCase: 'Para calcular el determinante de una matriz cuadrada de cualquier orden.',
    url: null,
  },
  {
    id: 'vectores',
    symbol: 'v',
    mathPreview: 'u · v',
    name: 'Calculadora de Vectores',
    explanation: 'Opera con vectores en dos y tres dimensiones. Calcula norma, suma, producto punto y producto vectorial.',
    useCase: 'Para trabajar con componentes, norma o el producto entre dos vectores.',
    url: null,
  },
  {
    id: 'sistemas-de-ecuaciones',
    symbol: 'Ax',
    mathPreview: 'Ax = b',
    name: 'Calculadora de Sistemas de Ecuaciones',
    explanation: 'Resuelve sistemas de ecuaciones lineales usando eliminación gaussiana o regla de Cramer. Muestra el procedimiento paso a paso.',
    useCase: 'Para resolver un sistema de ecuaciones lineales con dos o más incógnitas.',
    url: null,
  },
  {
    id: 'matriz-inversa',
    symbol: 'A⁻¹',
    mathPreview: 'A⁻¹',
    name: 'Calculadora de Matriz Inversa',
    explanation: 'Calcula la inversa de una matriz cuadrada usando el método de Gauss-Jordan. Verifica que el determinante no sea cero.',
    useCase: 'Para obtener la matriz inversa de una matriz cuadrada invertible.',
    url: null,
  },
];

export function MatVecTools() {
  return (
    <section className="py-14 lg:py-20 bg-white-soft" aria-labelledby="tools-matvec-heading">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* Left: sticky intro */}
          <div className="lg:col-span-4 lg:pt-1">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Herramientas disponibles</p>
              <h2
                id="tools-matvec-heading"
                className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
                style={{ color: '#102a43' }}
              >
                Herramientas de matrices y vectores disponibles
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#627d98' }}>
                Cada calculadora cubre una operación específica dentro del área de matrices y vectores. Las herramientas estarán disponibles próximamente.
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
                      <div
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold opacity-55"
                        style={{ background: '#D7E2EA', color: '#627d98', cursor: 'default' }}
                        aria-label="Calculadora de Matrices — próximamente"
                      >
                        Próximamente
                      </div>
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
