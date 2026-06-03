const ops = [
  { name: 'Simplificar polinomio',  formula: '3x² + 2x - x² + 5x = 2x² + 7x', desc: 'Reduce términos semejantes y ordena el polinomio por grado.' },
  { name: 'Sumar polinomios',        formula: '(x² + 2x + 1) + (x + 3) = x² + 3x + 4', desc: 'Combina los términos de ambos polinomios.' },
  { name: 'Multiplicar polinomios',  formula: '(x + 2)(x + 3) = x² + 5x + 6', desc: 'Aplica la propiedad distributiva y reduce términos.' },
  { name: 'Factorizar polinomio',    formula: 'x² + 5x + 6 = (x + 2)(x + 3)', desc: 'Escribe el polinomio como producto de factores.' },
  { name: 'Evaluar polinomio',       formula: 'P(2) = x² + 3x + 2 → P(2) = 12', desc: 'Sustituye la variable y calcula el resultado numérico.' },
  { name: 'Analizar polinomio',      formula: 'x³ - 2x² + x - 5 → grado 3', desc: 'Muestra grado, término principal, coeficientes y forma estándar.' },
];

export function PolinomioOperations() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="ops-pol-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Referencia</p>
          <h2 id="ops-pol-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Operaciones con polinomios
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
