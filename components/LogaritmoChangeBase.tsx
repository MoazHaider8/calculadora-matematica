const steps = [
  {
    step: '01',
    label: 'Fórmula general',
    formula: 'log_b(a) = ln(a) / ln(b)',
    note: 'Se puede calcular cualquier logaritmo usando logaritmos naturales.',
  },
  {
    step: '02',
    label: 'Ejemplo: log₂(8)',
    formula: 'log₂(8) = ln(8) / ln(2)',
    note: 'Se dividen los logaritmos naturales del argumento y la base.',
  },
  {
    step: '03',
    label: 'Valores numéricos',
    formula: 'ln(8) ≈ 2.0794 · ln(2) ≈ 0.6931',
    note: 'El logaritmo natural de 8 dividido entre el logaritmo natural de 2.',
  },
  {
    step: '04',
    label: 'Resultado',
    formula: '2.0794 / 0.6931 = 3',
    note: 'El resultado es exactamente 3 porque 2³ = 8.',
  },
];

export function LogaritmoChangeBase() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="cambio-base-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Fórmula clave</p>
          <h2 id="cambio-base-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Fórmula de cambio de base
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-soft">
            Permite calcular logaritmos con cualquier base usando logaritmos naturales o comunes.
          </p>
        </div>

        {/* Main formula */}
        <div className="mb-8 rounded-2xl p-6" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-teal">Fórmula principal</p>
          <p className="font-mono text-xl font-bold text-deep-teal">log_b(a) = ln(a) / ln(b)</p>
          <p className="mt-2 text-sm text-slate">
            El logaritmo de a en base b es igual al logaritmo natural de a dividido entre el logaritmo natural de b.
          </p>
        </div>

        {/* Step-by-step example */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="academic-card p-5">
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{ background: '#DDF3F0', color: '#0f5c5c' }}
                >
                  {s.step}
                </span>
                <p className="text-xs font-bold text-teal uppercase tracking-wide">{s.label}</p>
              </div>
              <div className="rounded-lg px-3 py-2 my-2" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                <p className="font-mono text-sm font-bold text-deep-teal">{s.formula}</p>
              </div>
              <p className="text-xs leading-relaxed text-muted">{s.note}</p>
            </div>
          ))}
        </div>

        {/* Alternative with log10 */}
        <div className="mt-6 rounded-xl px-6 py-4" style={{ background: '#EEF4F7', border: '1px solid #d7e2ea' }}>
          <p className="mb-1 text-xs font-bold text-ink">Fórmula alternativa con base 10</p>
          <p className="font-mono text-sm text-slate">log_b(a) = log₁₀(a) / log₁₀(b)</p>
          <p className="mt-1 text-xs text-muted">
            También se puede usar log₁₀ en lugar de ln. El resultado es el mismo.
          </p>
        </div>

      </div>
    </section>
  );
}
