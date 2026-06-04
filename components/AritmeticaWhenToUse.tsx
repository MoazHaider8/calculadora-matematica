const rows = [
  {
    need: 'Resolver operaciones con funciones, raíces o logaritmos',
    tool: 'Calculadora Científica',
    toolId: 'cientifica',
  },
  {
    need: 'Calcular descuentos, aumentos o variaciones porcentuales',
    tool: 'Calculadora de Porcentajes',
    toolId: 'porcentajes',
  },
  {
    need: 'Sumar, restar, multiplicar o simplificar fracciones',
    tool: 'Calculadora de Fracciones',
    toolId: 'fracciones',
  },
  {
    need: 'Calcular la media de notas, datos o valores',
    tool: 'Calculadora de Promedio',
    toolId: 'promedio',
  },
  {
    need: 'Resolver proporciones directas o inversas',
    tool: 'Calculadora de Regla de Tres',
    toolId: 'regla-de-tres',
  },
];

export function AritmeticaWhenToUse() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="when-arit-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Guía de selección</p>
          <h2
            id="when-arit-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            ¿Cuándo utilizar cada herramienta?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Cada calculadora está pensada para un tipo específico de operación aritmética. Esta tabla te ayuda a elegir la herramienta correcta según tu necesidad.
          </p>
        </div>

        <div
          className="overflow-hidden rounded-2xl bg-white"
          style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
        >
          {/* Header */}
          <div
            className="hidden sm:grid grid-cols-2 gap-4 px-6 py-3"
            style={{ background: '#0a3535', gridTemplateColumns: '1fr 1fr' }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.65)' }}>
              Necesidad
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.65)' }}>
              Herramienta recomendada
            </p>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.toolId}
              className="grid grid-cols-1 gap-2 px-6 py-4 sm:grid-cols-2 sm:gap-6 sm:items-center"
              style={{ borderBottom: i < rows.length - 1 ? '1px solid #EEF4F7' : 'none' }}
            >
              <p className="text-sm leading-relaxed" style={{ color: '#334e68' }}>
                {row.need}
              </p>
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0" style={{ color: '#D8A31A' }}>
                  <polyline points="2,6 10,6 7,3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="7,9 10,6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <a
                  href={`#herramienta-${row.toolId}`}
                  className="text-sm font-bold transition-colors hover:text-teal"
                  style={{ color: '#102a43' }}
                >
                  {row.tool}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
