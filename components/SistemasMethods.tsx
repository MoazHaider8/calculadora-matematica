const methods = [
  {
    id: 'sustitucion',
    formula: 'Despejar y sustituir',
    label: 'Sustitución',
    body: 'Se despeja una variable en una ecuación y se sustituye en la otra. Útil en sistemas pequeños donde los coeficientes son simples.',
  },
  {
    id: 'eliminacion',
    formula: 'Combinar ecuaciones',
    label: 'Eliminación',
    body: 'Se suman o restan múltiplos de ecuaciones para eliminar una variable y reducir el sistema paso a paso.',
  },
  {
    id: 'aumentada',
    formula: '[A | b]',
    label: 'Matriz aumentada',
    body: 'Se organizan los coeficientes y términos independientes en una matriz para aplicar operaciones de fila de forma sistemática.',
  },
  {
    id: 'gauss',
    formula: 'Pivoteo + reducción',
    label: 'Eliminación gaussiana',
    body: 'Método matricial que reduce el sistema a forma escalonada. Detecta solución única, sin solución o infinitas soluciones. Es el método que utiliza esta calculadora.',
  },
  {
    id: 'comprobacion',
    formula: 'Ax = b',
    label: 'Comprobación',
    body: 'Se sustituyen los valores obtenidos en las ecuaciones originales para verificar que se satisfacen. Confirma que la solución es correcta.',
  },
];

export function SistemasMethods() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="methods-sis-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Procedimientos</p>
          <h2
            id="methods-sis-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Métodos para resolver sistemas
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Existen varios métodos para resolver sistemas de ecuaciones lineales. La calculadora usa eliminación gaussiana por su fiabilidad numérica.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((m) => (
            <div
              key={m.id}
              className="overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              <div className="px-5 py-3" style={{ background: '#0a3535' }} aria-hidden="true">
                <p className="font-mono text-sm font-semibold" style={{ color: 'rgba(216,163,26,0.85)' }}>
                  {m.formula}
                </p>
              </div>
              <div className="px-5 py-4">
                <p className="mb-1 text-sm font-bold" style={{ color: '#102a43' }}>{m.label}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#627d98' }}>{m.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
