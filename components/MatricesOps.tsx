const ops = [
  { formula: 'A + B',      name: 'Suma de matrices',         explanation: 'Los elementos de igual posición se suman. Requiere que A y B tengan las mismas dimensiones.' },
  { formula: 'A - B',      name: 'Resta de matrices',        explanation: 'Los elementos de igual posición se restan. Requiere que A y B tengan las mismas dimensiones.' },
  { formula: 'A × B',      name: 'Multiplicación de matrices', explanation: 'El elemento (i,j) es el producto de la fila i de A por la columna j de B. Requiere que cols(A) = filas(B).' },
  { formula: 'Aᵀ',         name: 'Matriz transpuesta',       explanation: 'Las filas de A se convierten en columnas. Una matriz m×n se convierte en n×m.' },
  { formula: 'kA',         name: 'Multiplicación por escalar', explanation: 'Cada elemento de la matriz se multiplica por el número k. Funciona con cualquier dimensión.' },
  { formula: 'A(m×n)·B(n×p)', name: 'Dimensiones compatibles', explanation: 'Para multiplicar A(m×n) × B(n×p), el número de columnas de A debe coincidir con el de filas de B. El resultado es m×p.' },
];

export function MatricesOps() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="ops-matrices-heading">
      <div className="site-shell">
        <p className="eyebrow">Referencia</p>
        <h2
          id="ops-matrices-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Operaciones con matrices
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ops.map((op) => (
            <div
              key={op.name}
              className="overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              <div
                className="px-5 py-4 font-mono text-base font-bold"
                style={{ background: '#0a3535', color: 'rgba(216,163,26,0.88)' }}
                aria-hidden="true"
              >
                {op.formula}
              </div>
              <div className="px-5 py-4">
                <h3 className="mb-2 text-sm font-bold" style={{ color: '#102a43' }}>{op.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#627d98' }}>{op.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
