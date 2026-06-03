const naturalPoints = [
  'Usa base e (número de Euler, ≈ 2.71828)',
  'Se escribe ln(x)',
  'Aparece en cálculo, integrales y modelos de crecimiento',
  'ln(e) = 1 y ln(1) = 0',
  'La derivada de ln(x) es 1/x',
];

const commonPoints = [
  'Usa base 10',
  'Se escribe log(x) o log₁₀(x)',
  'Se usa en escalas decimales, decibelios y pH',
  'log₁₀(10) = 1 y log₁₀(100) = 2',
  'Es el logaritmo estándar en muchas calculadoras',
];

const customPoints = [
  'Permite usar cualquier base válida',
  'La base debe ser positiva y diferente de 1',
  'Se calcula con la fórmula de cambio de base',
  'Se usa para analizar potencias en bases específicas',
  'Ejemplo: log₂(8) = 3 porque 2³ = 8',
];

export function LogaritmoComparison() {
  return (
    <section className="py-10 lg:py-14" style={{ background: '#EEF4F7' }} aria-labelledby="comparison-log-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Tipos de logaritmo</p>
          <h2 id="comparison-log-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Logaritmo natural, común y personalizado
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Natural */}
          <div className="academic-card overflow-hidden">
            <div className="px-5 py-4" style={{ background: '#F0FAF9', borderBottom: '1px solid #DDF3F0' }}>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold" style={{ background: '#DDF3F0', color: '#0f5c5c' }}>
                  ln
                </span>
                <p className="font-heading text-sm font-bold text-ink">Logaritmo natural</p>
              </div>
            </div>
            <ul className="divide-y divide-line px-5">
              {naturalPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 py-3">
                  <span className="mt-0.5 text-teal" aria-hidden="true">›</span>
                  <span className="text-sm leading-relaxed text-slate">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Common */}
          <div className="academic-card overflow-hidden">
            <div className="px-5 py-4" style={{ background: '#FFF4CC', borderBottom: '1px solid #F5DFA0' }}>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold" style={{ background: '#fff4cc', color: '#b58000', border: '1.5px solid #F5DFA0' }}>
                  log
                </span>
                <p className="font-heading text-sm font-bold text-ink">Logaritmo común</p>
              </div>
            </div>
            <ul className="divide-y divide-line px-5">
              {commonPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 py-3">
                  <span className="mt-0.5 text-gold" aria-hidden="true">›</span>
                  <span className="text-sm leading-relaxed text-slate">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Custom */}
          <div className="academic-card overflow-hidden">
            <div className="px-5 py-4" style={{ background: '#EEF4F7', borderBottom: '1px solid #d7e2ea' }}>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold" style={{ background: '#DDF3F0', color: '#0f5c5c' }}>
                  log_b
                </span>
                <p className="font-heading text-sm font-bold text-ink">Base personalizada</p>
              </div>
            </div>
            <ul className="divide-y divide-line px-5">
              {customPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 py-3">
                  <span className="mt-0.5 text-muted" aria-hidden="true">›</span>
                  <span className="text-sm leading-relaxed text-slate">{p}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
