const examples = [
  {
    entrada: '2⁵',
    resultado: '32',
    explicacion: '2 × 2 × 2 × 2 × 2 = 32',
  },
  {
    entrada: '10³',
    resultado: '1000',
    explicacion: '10 × 10 × 10 = 1000',
  },
  {
    entrada: '2⁻³',
    resultado: '1/8 = 0.125',
    explicacion: 'Un exponente negativo convierte la potencia en recíproco: 1/2³ = 1/8.',
  },
  {
    entrada: '4^(1/2)',
    resultado: '2',
    explicacion: 'Un exponente 1/2 equivale a la raíz cuadrada: √4 = 2.',
  },
  {
    entrada: 'x² · x³',
    resultado: 'x⁵',
    explicacion: 'Se suman los exponentes porque la base es la misma: 2 + 3 = 5.',
  },
  {
    entrada: 'x⁵ / x²',
    resultado: 'x³',
    explicacion: 'Se restan los exponentes porque la base es la misma: 5 - 2 = 3.',
  },
];

export function ExponenteExamples() {
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="examples-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Práctica</p>
          <h2 id="examples-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Ejemplos resueltos de exponentes
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
