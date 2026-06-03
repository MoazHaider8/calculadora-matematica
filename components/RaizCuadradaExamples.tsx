const examples = [
  { entrada: '√25',       resultado: '5',             explicacion: '5² = 25. El 25 es un cuadrado perfecto.' },
  { entrada: '√49',       resultado: '7',             explicacion: '7² = 49. El 49 es un cuadrado perfecto.' },
  { entrada: '√72',       resultado: '6√2',           explicacion: '72 = 36 · 2, por eso √72 = 6√2.' },
  { entrada: '√2',        resultado: '≈ 1.4142135624', explicacion: 'No es cuadrado perfecto, por eso se muestra decimal.' },
  { entrada: '√0.25',     resultado: '0.5',           explicacion: '0.5² = 0.25.' },
];

export function RaizCuadradaExamples() {
  return (
    <section className="bg-panel py-8 lg:py-12" aria-labelledby="examples-raizc-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Práctica</p>
          <h2 id="examples-raizc-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Ejemplos resueltos de raíz cuadrada
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
                  <p className="font-mono text-sm font-semibold text-ink">{ex.entrada}</p>
                </div>
              </div>
              <div
                className="mb-3 rounded-lg px-4 py-2.5"
                style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              >
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
