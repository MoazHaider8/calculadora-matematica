const tools = [
  {
    id:          'area',
    symbol:      'A',
    mathPreview: 'A = b × h  ·  A = πr²',
    name:        'Calculadora de Área',
    explanation: 'Calcula áreas de figuras planas como cuadrados, rectángulos, triángulos, círculos y otras formas comunes.',
    useCase:     'Úsala cuando necesitas conocer la superficie de una figura.',
    url:         null,
  },
  {
    id:          'volumen',
    symbol:      'V',
    mathPreview: 'V = l × w × h',
    name:        'Calculadora de Volumen',
    explanation: 'Calcula volúmenes de cuerpos geométricos como cubos, prismas, cilindros, conos y esferas.',
    useCase:     'Úsala cuando necesitas medir el espacio que ocupa un cuerpo.',
    url:         null,
  },
  {
    id:          'triangulos',
    symbol:      '△',
    mathPreview: 'A = b × h / 2',
    name:        'Calculadora de Triángulos',
    explanation: 'Resuelve medidas de triángulos, área, perímetro, lados, ángulos y relaciones básicas según los datos disponibles.',
    useCase:     'Úsala para trabajar con lados, altura, área o perímetro de triángulos.',
    url:         null,
  },
  {
    id:          'circulos',
    symbol:      'π',
    mathPreview: 'A = πr²  ·  C = 2πr',
    name:        'Calculadora de Círculos',
    explanation: 'Calcula área, circunferencia, diámetro y radio de un círculo usando las fórmulas principales.',
    useCase:     'Úsala cuando tienes radio, diámetro o circunferencia.',
    url:         null,
  },
  {
    id:          'pitagoras',
    symbol:      'c²',
    mathPreview: 'a² + b² = c²',
    name:        'Calculadora de Pitágoras',
    explanation: 'Calcula hipotenusa o catetos de un triángulo rectángulo usando el teorema de Pitágoras.',
    useCase:     'Úsala cuando trabajas con triángulos rectángulos.',
    url:         null,
  },
];

export function GeometriaTools() {
  return (
    <section className="py-14 lg:py-20 bg-white-soft" aria-labelledby="tools-geo-heading">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* Left: sticky intro */}
          <div className="lg:col-span-4 lg:pt-1">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Herramientas disponibles</p>
              <h2
                id="tools-geo-heading"
                className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
                style={{ color: '#102a43' }}
              >
                Herramientas de geometría disponibles
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#627d98' }}>
                Cada calculadora cubre una operación geométrica específica. Elige la herramienta que necesitas según la figura o el cálculo.
              </p>
              <div
                className="mt-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-bold"
                style={{ background: '#DDF3F0', color: '#0F5C5C' }}
              >
                5 herramientas
              </div>
              <div
                className="mt-3 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-bold"
                style={{ background: '#FFF4CC', color: '#b58000' }}
              >
                Próximamente
              </div>
            </div>
          </div>

          {/* Right: flagship + 2×2 grid */}
          <div className="lg:col-span-8 flex flex-col gap-6">

            {/* Flagship — Calculadora de Área */}
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
                    <p className="font-mono text-sm font-semibold leading-snug" style={{ color: 'rgba(216,163,26,0.85)' }}>
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
                        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold opacity-60"
                        style={{ background: '#D7E2EA', color: '#627d98', cursor: 'default' }}
                        aria-label={`${tool.name} — próximamente`}
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
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold opacity-60"
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
