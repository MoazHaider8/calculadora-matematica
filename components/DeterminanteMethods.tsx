const methods = [
  {
    id: 'formula2',
    label: 'Fórmula 2×2',
    formula: 'det(A) = ad − bc',
    body: 'Para matrices 2×2 se multiplica la diagonal principal y se resta el producto de la diagonal secundaria.',
  },
  {
    id: 'sarrus',
    label: 'Regla de Sarrus',
    formula: 'Expansión 3×3',
    body: 'Para matrices 3×3 se expande por la primera fila usando los tres menores 2×2. Esta técnica es equivalente a la regla de Sarrus.',
  },
  {
    id: 'cofactores',
    label: 'Expansión por cofactores',
    formula: 'det(A) = Σ aᵢⱼ · Cᵢⱼ',
    body: 'Para matrices 4×4 se descompone el determinante en menores de orden inferior. Cada menor se multiplica por su cofactor y el signo correspondiente.',
  },
  {
    id: 'singular',
    label: 'Determinante cero',
    formula: 'det(A) = 0',
    body: 'Si el determinante es cero la matriz es singular: no tiene inversa y sus filas o columnas son linealmente dependientes.',
  },
];

export function DeterminanteMethods() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="methods-det-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Métodos de cálculo</p>
          <h2
            id="methods-det-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Métodos para calcular determinantes
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            El método varía según el tamaño de la matriz. Esta calculadora aplica el método correcto de forma automática.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {methods.map((m) => (
            <div
              key={m.id}
              className="overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              <div
                className="px-5 py-3"
                style={{ background: '#0a3535' }}
                aria-hidden="true"
              >
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
