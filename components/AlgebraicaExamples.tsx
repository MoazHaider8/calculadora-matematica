const examples = [
  {
    entrada: '2x + 3x - x',
    resultado: '4x',
    explicacion: 'Se reducen términos semejantes: 2 + 3 - 1 = 4 coeficientes de x.',
  },
  {
    entrada: '(x + 2)(x + 3)',
    resultado: 'x² + 5x + 6',
    explicacion: 'Se aplica la propiedad distributiva: x·x + x·3 + 2·x + 2·3.',
  },
  {
    entrada: 'x² + 5x + 6',
    resultado: '(x + 2)(x + 3)',
    explicacion: 'Se factoriza buscando dos números que sumen 5 y multipliquen 6.',
  },
  {
    entrada: 'x² - 1',
    resultado: '(x - 1)(x + 1)',
    explicacion: 'Es una diferencia de cuadrados: a² - b² = (a-b)(a+b).',
  },
  {
    entrada: 'x² + 3x con x = 2',
    resultado: '10',
    explicacion: 'Se sustituye x = 2: 2² + 3·2 = 4 + 6 = 10.',
  },
];

export function AlgebraicaExamples() {
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="examples-alg-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Práctica</p>
          <h2 id="examples-alg-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Ejemplos resueltos de expresiones algebraicas
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex, i) => (
            <div key={i} className="academic-card p-5">
              <div className="mb-3 flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  style={{ background: '#0A4F4D' }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Entrada</p>
                  <p className="font-mono text-base font-semibold text-ink">{ex.entrada}</p>
                </div>
              </div>
              <div className="mb-3 rounded-lg px-4 py-2.5" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                <p className="font-mono text-lg font-bold text-deep-teal">{ex.resultado}</p>
              </div>
              <p className="text-xs leading-relaxed text-slate">{ex.explicacion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
