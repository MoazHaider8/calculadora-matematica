const entities = [
  'Cálculo diferencial',
  'Cálculo integral',
  'Funciones',
  'Tasas de cambio',
  'Áreas bajo curvas',
];

export function CalculoWhatIs() {
  return (
    <section
      className="py-12 lg:py-16"
      style={{ background: '#EEF4F7' }}
      aria-labelledby="whatis-heading"
    >
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">

          {/* Left */}
          <div className="lg:col-span-4">
            <p className="eyebrow">Contexto matemático</p>
            <h2
              id="whatis-heading"
              className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
              style={{ color: '#102a43' }}
            >
              ¿Qué es el cálculo?
            </h2>
            <div className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: '#829ab1' }}>
                También cubre
              </p>
              <div className="flex flex-col gap-2">
                {entities.map((e) => (
                  <span
                    key={e}
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: '#0F5C5C' }}
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: '#D8A31A' }}
                      aria-hidden="true"
                    />
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: editorial text */}
          <div className="lg:col-span-8">
            <div
              className="rounded-2xl bg-white p-7"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
            >
              <p className="text-base leading-relaxed" style={{ color: '#334e68' }}>
                El cálculo es una rama de las matemáticas que estudia el cambio y la acumulación. Se divide en dos áreas principales: el cálculo diferencial, que analiza tasas de cambio e inclinaciones mediante derivadas, y el cálculo integral, que trabaja con áreas bajo curvas y acumulaciones mediante integrales.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#334e68' }}>
                Estas herramientas trabajan con funciones matemáticas y dependen del concepto de límite, que describe el comportamiento de una expresión cuando una variable se aproxima a un valor. Los logaritmos y los exponentes complementan este conjunto al permitir resolver ecuaciones que involucran potencias y crecimientos exponenciales.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#334e68' }}>
                El cálculo es fundamental en física, ingeniería, economía y cualquier disciplina que modele fenómenos variables o que requiera analizar el comportamiento de funciones continuas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
