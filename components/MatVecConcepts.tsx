const concepts = [
  {
    symbol: '[ ]',
    name: 'Matrices',
    description: 'Una matriz es una tabla de números organizados en filas y columnas. Se identifica por sus dimensiones (m × n) y permite representar transformaciones lineales y sistemas de ecuaciones.',
    relatedTool: 'Calculadora de Matrices',
  },
  {
    symbol: 'v',
    name: 'Vectores',
    description: 'Un vector es una lista ordenada de números que representa una magnitud con dirección. Puede entenderse como una matriz de una sola columna o fila, y tiene norma y dirección.',
    relatedTool: 'Calculadora de Vectores',
  },
  {
    symbol: 'det',
    name: 'Determinante',
    description: 'El determinante es un valor escalar asociado a una matriz cuadrada. Indica si la matriz es invertible, cuánto escala el área o volumen una transformación lineal y sirve para resolver sistemas con la regla de Cramer.',
    relatedTool: 'Calculadora de Determinantes',
  },
  {
    symbol: 'A⁻¹',
    name: 'Matriz inversa',
    description: 'La matriz inversa de A es aquella que cumple A · A⁻¹ = I. Solo existe cuando el determinante es distinto de cero. Es útil para resolver sistemas lineales y componer transformaciones.',
    relatedTool: 'Calculadora de Matriz Inversa',
  },
  {
    symbol: 'Ax',
    name: 'Sistema lineal',
    description: 'Un sistema de ecuaciones lineales puede escribirse como Ax = b, donde A es la matriz de coeficientes, x el vector de incógnitas y b el vector de resultados. Se resuelve por eliminación gaussiana u otros métodos.',
    relatedTool: 'Calculadora de Sistemas de Ecuaciones',
  },
  {
    symbol: 'm×n',
    name: 'Dimensiones',
    description: 'La dimensión de una matriz (m × n) indica el número de filas y columnas. Las dimensiones determinan qué operaciones son posibles: por ejemplo, solo se pueden multiplicar matrices A(m×k) y B(k×n).',
    relatedTool: 'Calculadora de Matrices',
  },
];

export function MatVecConcepts() {
  return (
    <section
      className="py-12 lg:py-16"
      style={{ background: '#EEF4F7' }}
      aria-labelledby="concepts-matvec-heading"
    >
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Conceptos clave</p>
          <h2
            id="concepts-matvec-heading"
            className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
            style={{ color: '#102a43' }}
          >
            Conceptos de matrices y vectores incluidos
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Las herramientas de esta categoría cubren estos conceptos fundamentales de álgebra lineal.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl bg-white p-5"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold"
                  style={{ background: '#DDF3F0', color: '#147c7c' }}
                  aria-hidden="true"
                >
                  {c.symbol}
                </div>
                <h3 className="text-base font-bold" style={{ color: '#102a43' }}>{c.name}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#334e68' }}>{c.description}</p>
              <div className="mt-4 border-t pt-3" style={{ borderColor: '#EEF4F7' }}>
                <p className="text-xs font-semibold" style={{ color: '#829ab1' }}>
                  Herramienta relacionada:
                  <span className="ml-1" style={{ color: '#0F5C5C' }}>{c.relatedTool}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
