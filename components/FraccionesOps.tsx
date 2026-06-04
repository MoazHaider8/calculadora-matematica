const ops = [
  {
    id: 'add',
    formula: '1/2 + 3/4 = 5/4',
    label: 'Sumar fracciones',
    body: 'Se busca el mínimo común denominador y se suman los numeradores ajustados. El resultado se simplifica automáticamente.',
  },
  {
    id: 'subtract',
    formula: '3/4 − 1/2 = 1/4',
    label: 'Restar fracciones',
    body: 'Se usa el mínimo común denominador y se restan los numeradores ajustados. El resultado se simplifica si es posible.',
  },
  {
    id: 'multiply',
    formula: '2/3 × 3/5 = 2/5',
    label: 'Multiplicar fracciones',
    body: 'Se multiplican numeradores entre sí y denominadores entre sí. Luego se simplifica el resultado usando el MCD.',
  },
  {
    id: 'divide',
    formula: '3/4 ÷ 2/5 = 15/8',
    label: 'Dividir fracciones',
    body: 'Se multiplica la primera fracción por el recíproco de la segunda. La segunda fracción se invierte antes de multiplicar.',
  },
  {
    id: 'simplify',
    formula: '12/18 = 2/3',
    label: 'Simplificar fracciones',
    body: 'Se divide numerador y denominador entre el máximo común divisor. El resultado es la fracción irreducible equivalente.',
  },
  {
    id: 'convert',
    formula: '7/4 = 1 3/4 = 1.75',
    label: 'Convertir fracción',
    body: 'Muestra la fracción simplificada, su forma mixta con entero y fracción propia, el decimal y el porcentaje equivalente.',
  },
];

export function FraccionesOps() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="ops-frac-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Operaciones disponibles</p>
          <h2
            id="ops-frac-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Operaciones con fracciones
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Cada operación aplica la definición matemática exacta usando aritmética entera con numeradores y denominadores.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
