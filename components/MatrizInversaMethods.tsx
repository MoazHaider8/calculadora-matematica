const methods = [
  {
    id: 'formula2x2',
    formula: 'A⁻¹ = 1/det · [[d,−b],[−c,a]]',
    label: 'Fórmula 2×2',
    body: 'Se intercambian los elementos de la diagonal principal, se cambian los signos de los elementos fuera de la diagonal, y se divide todo entre el determinante.',
  },
  {
    id: 'gaussjordan',
    formula: '[A | I]  →  [I | A⁻¹]',
    label: 'Gauss Jordan',
    body: 'Se construye la matriz aumentada con A a la izquierda y la identidad a la derecha. Se aplican operaciones de fila hasta que la izquierda sea la identidad. La parte derecha resultante es A⁻¹.',
  },
  {
    id: 'determinante',
    formula: 'det(A) ≠ 0',
    label: 'Determinante',
    body: 'Antes de calcular la inversa, se verifica el determinante. Si det(A) = 0 la matriz es singular y no tiene inversa. Si det(A) ≠ 0 la matriz es invertible.',
  },
  {
    id: 'verificacion',
    formula: 'A · A⁻¹ = I',
    label: 'Verificación',
    body: 'Al multiplicar la matriz original por su inversa el resultado debe ser la matriz identidad. Esta comprobación confirma que el cálculo es correcto.',
  },
  {
    id: 'identidad',
    formula: 'diag(1,1,...,1)',
    label: 'Matriz identidad',
    body: 'La matriz identidad tiene unos en la diagonal principal y ceros en el resto. Es el elemento neutro en la multiplicación de matrices, equivalente al 1 en los números.',
  },
];

export function MatrizInversaMethods() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="methods-inv-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Procedimientos</p>
          <h2
            id="methods-inv-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Métodos para hallar la matriz inversa
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Existen varios métodos para calcular A⁻¹. La calculadora usa la fórmula directa para 2×2 y Gauss Jordan para 3×3.
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
