const ops = [
  {
    id: 'add',
    formula: 'A + B',
    label: 'Suma de vectores',
    body: 'Se suman las componentes correspondientes. Requiere vectores del mismo número de dimensiones.',
  },
  {
    id: 'subtract',
    formula: 'A − B',
    label: 'Resta de vectores',
    body: 'Se restan las componentes correspondientes. El resultado tiene la misma dimensión que los vectores originales.',
  },
  {
    id: 'dot',
    formula: 'A · B',
    label: 'Producto punto',
    body: 'Se multiplican componentes correspondientes y se suman los productos. El resultado es un número escalar.',
  },
  {
    id: 'cross',
    formula: 'A × B',
    label: 'Producto cruz',
    body: 'Se calcula un vector perpendicular a los dos vectores originales. Solo válido para vectores 3D.',
  },
  {
    id: 'norm',
    formula: '||A||',
    label: 'Norma o magnitud',
    body: 'Se obtiene la raíz cuadrada de la suma de cuadrados de las componentes. Siempre es un valor no negativo.',
  },
  {
    id: 'unit',
    formula: 'û = A / ||A||',
    label: 'Vector unitario',
    body: 'Se divide el vector entre su magnitud. El resultado tiene la misma dirección que el original y norma igual a 1.',
  },
  {
    id: 'angle',
    formula: 'cos(θ) = (A·B) / (||A||·||B||)',
    label: 'Ángulo entre vectores',
    body: 'Se calcula usando el producto punto y las normas de ambos vectores. El resultado se expresa en grados.',
  },
];

export function VectorOps() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="ops-vec-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Operaciones disponibles</p>
          <h2
            id="ops-vec-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Operaciones con vectores
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Cada operación trabaja con las componentes del vector y aplica la definición matemática correspondiente.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ops.map((op) => (
            <div
              key={op.id}
              className="overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              <div className="px-5 py-3" style={{ background: '#0a3535' }} aria-hidden="true">
                <p className="font-mono text-sm font-semibold" style={{ color: 'rgba(216,163,26,0.85)' }}>
                  {op.formula}
                </p>
              </div>
              <div className="px-5 py-4">
                <p className="mb-1 text-sm font-bold" style={{ color: '#102a43' }}>{op.label}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#627d98' }}>{op.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
