const examples = [
  {
    entrada: '2x + 3 = 7',
    resultado: 'x = 2',
    explicacion: 'Se resta 3 en ambos lados (2x = 4) y se divide entre 2.',
  },
  {
    entrada: '3x - 9 = 0',
    resultado: 'x = 3',
    explicacion: 'Se suma 9 en ambos lados (3x = 9) y se divide entre 3.',
  },
  {
    entrada: 'x/2 + 4 = 10',
    resultado: 'x = 12',
    explicacion: 'Se resta 4 en ambos lados (x/2 = 6) y se multiplica por 2.',
  },
  {
    entrada: 'x² - 5x + 6 = 0',
    resultado: 'x = 2, x = 3',
    explicacion: 'Ecuación cuadrática con D = 1. Dos soluciones reales distintas: x = 2 y x = 3.',
  },
  {
    entrada: 'x² + 2x + 1 = 0',
    resultado: 'x = -1',
    explicacion: 'Ecuación cuadrática con D = 0. Solución doble: x = -1.',
  },
];

export function EcuacionExamples() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="examples-eq-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Práctica</p>
          <h2 id="examples-eq-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Ejemplos resueltos de ecuaciones
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
