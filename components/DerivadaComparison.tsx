const firstPoints = [
  'Mide la tasa de cambio instantánea de la función',
  'Indica la pendiente en cada punto de la curva',
  'Se usa para calcular la recta tangente',
  'Permite identificar dónde la función crece o decrece',
  "Notación: f'(x) o dy/dx",
];

const secondPoints = [
  'Mide cómo cambia la primera derivada',
  'Permite analizar la concavidad de la función',
  'Ayuda a identificar máximos, mínimos y puntos de inflexión',
  "Si f''(x) > 0, la curva es cóncava hacia arriba",
  "Notación: f''(x) o d²y/dx²",
];

export function DerivadaComparison() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="comparison-deriv-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Diferencias clave</p>
          <h2 id="comparison-deriv-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Primera derivada y segunda derivada
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="academic-card overflow-hidden">
            <div className="px-6 py-4" style={{ background: '#F0FAF9', borderBottom: '1px solid #DDF3F0' }}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-base font-bold"
                  style={{ background: '#DDF3F0', color: '#0f5c5c' }}
                >
                  f'
                </span>
                <p className="font-heading text-base font-bold text-ink">Primera derivada</p>
              </div>
            </div>
            <ul className="divide-y divide-line px-6">
              {firstPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 py-3.5">
                  <span className="mt-0.5 text-teal" aria-hidden="true">›</span>
                  <span className="text-sm leading-relaxed text-slate">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="academic-card overflow-hidden">
            <div className="px-6 py-4" style={{ background: '#FFF4CC', borderBottom: '1px solid #F5DFA0' }}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-base font-bold"
                  style={{ background: '#fff4cc', color: '#b58000', border: '1.5px solid #F5DFA0' }}
                >
                  f''
                </span>
                <p className="font-heading text-base font-bold text-ink">Segunda derivada</p>
              </div>
            </div>
            <ul className="divide-y divide-line px-6">
              {secondPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 py-3.5">
                  <span className="mt-0.5 text-gold" aria-hidden="true">›</span>
                  <span className="text-sm leading-relaxed text-slate">{p}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div
          className="mt-6 rounded-xl px-6 py-4"
          style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
        >
          <p className="text-sm leading-relaxed text-slate">
            <strong className="font-semibold text-ink">Relación entre órdenes: </strong>
            La segunda derivada es la derivada de la primera. Si f'(x) = 3x², entonces f''(x) = 6x. Cada derivada de orden superior se obtiene derivando el resultado de la anterior.
          </p>
        </div>

      </div>
    </section>
  );
}
