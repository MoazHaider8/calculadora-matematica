const ops = [
  {
    name: 'Simplificar expresión',
    formula: '2x + 3x - x = 4x',
    desc: 'Combina términos semejantes para obtener una expresión más compacta.',
  },
  {
    name: 'Expandir expresión',
    formula: '(x + 2)(x + 3) = x² + 5x + 6',
    desc: 'Aplica la propiedad distributiva para eliminar paréntesis.',
  },
  {
    name: 'Factorizar expresión',
    formula: 'x² + 5x + 6 = (x + 2)(x + 3)',
    desc: 'Escribe la expresión como producto de factores cuando es posible.',
  },
  {
    name: 'Evaluar expresión',
    formula: 'x² + 3x con x = 2 → 10',
    desc: 'Sustituye la variable por un valor numérico y calcula el resultado.',
  },
];

export function AlgebraicaOperations() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="ops-alg-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Referencia</p>
          <h2 id="ops-alg-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Operaciones algebraicas disponibles
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {ops.map((op) => (
            <div key={op.name} className="academic-card p-5">
              <p className="mb-3 text-sm font-bold text-ink">{op.name}</p>
              <div className="mb-3 rounded-lg px-4 py-2.5" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                <p className="font-mono text-sm font-semibold text-deep-teal">{op.formula}</p>
              </div>
              <p className="text-xs leading-relaxed text-muted">{op.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
