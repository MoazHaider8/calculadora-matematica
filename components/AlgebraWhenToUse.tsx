const rows = [
  {
    index: '01',
    situation: 'Resolver una ecuación lineal o cuadrática',
    tool: 'Calculadora de Ecuaciones',
    url: null,
  },
  {
    index: '02',
    situation: 'Simplificar o factorizar expresiones algebraicas',
    tool: 'Calculadora Algebraica',
    url: null,
  },
  {
    index: '03',
    situation: 'Trabajar con polinomios de grado mayor que dos',
    tool: 'Calculadora de Polinomios',
    url: null,
  },
  {
    index: '04',
    situation: 'Calcular las raíces de una expresión algebraica',
    tool: 'Calculadora de Raíces',
    url: null,
  },
  {
    index: '05',
    situation: 'Obtener la raíz cuadrada exacta o aproximada de un número',
    tool: 'Calculadora de Raíz Cuadrada',
    url: null,
  },
];

export function AlgebraWhenToUse() {
  return (
    <section className="py-12 lg:py-16 bg-white-soft" aria-labelledby="when-algebra-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Guía de uso</p>
          <h2
            id="when-algebra-heading"
            className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
            style={{ color: '#102a43' }}
          >
            ¿Cuándo utilizar cada herramienta?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Cada calculadora responde a un tipo de operación algebraica concreto. Esta tabla indica cuál usar según la situación.
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
                <span
                  className="inline-flex items-center gap-2 text-sm font-bold"
                  style={{ color: '#829ab1' }}
                  aria-label={`${row.tool} — próximamente`}
                >
                  {row.tool}
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                    style={{ background: '#FFF4CC', color: '#b58000' }}
                  >
                    Próximamente
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
