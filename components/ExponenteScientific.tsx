const sciExamples = [
  { number: '1 000 000', result: '1 × 10⁶' },
  { number: '0.001', result: '1 × 10⁻³' },
  { number: '299 792 458', result: '2.99792458 × 10⁸' },
  { number: '0.0000045', result: '4.5 × 10⁻⁶' },
];

export function ExponenteScientific() {
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="sci-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Notación científica</p>
          <h2 id="sci-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Notación científica con potencias de 10
          </h2>
        </div>
        <div className="academic-card max-w-2xl p-6">
          <p className="mb-5 text-sm leading-relaxed text-slate">
            La notación científica expresa números muy grandes o muy pequeños usando potencias de 10. Se escribe como un coeficiente entre 1 y 10 multiplicado por una potencia de 10.
          </p>
          <div className="space-y-3">
            {sciExamples.map((ex) => (
              <div
                key={ex.number}
                className="flex items-center justify-between rounded-lg px-4 py-3"
                style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              >
                <span className="font-mono text-sm text-slate">{ex.number}</span>
                <span className="mx-3 text-muted">=</span>
                <span className="font-mono text-sm font-bold text-deep-teal">{ex.result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
