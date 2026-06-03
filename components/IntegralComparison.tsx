const indefinitePoints = [
  'No tiene límites de integración',
  'Devuelve una función, no un número',
  'Siempre incluye la constante de integración C',
  'Representa la familia completa de antiderivadas',
  'Ejemplo: ∫ x² dx = x³/3 + C',
];

const definitePoints = [
  'Tiene límite inferior y límite superior',
  'Devuelve un valor numérico o exacto',
  'No incluye la constante de integración C',
  'Puede representar el área bajo la curva entre los límites',
  'Ejemplo: ∫₀¹ x² dx = 1/3',
];

export function IntegralComparison() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="comparison-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Diferencias clave</p>
          <h2 id="comparison-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Diferencia entre integral definida e indefinida
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Indefinite */}
          <div className="academic-card overflow-hidden">
            <div className="px-6 py-4" style={{ background: '#F0FAF9', borderBottom: '1px solid #DDF3F0' }}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-lg font-bold"
                  style={{ background: '#DDF3F0', color: '#0f5c5c' }}
                >
                  ∫
                </span>
                <p className="font-heading text-base font-bold text-ink">Integral indefinida</p>
              </div>
            </div>
            <ul className="divide-y divide-line px-6">
              {indefinitePoints.map((p) => (
                <li key={p} className="flex items-start gap-3 py-3.5">
                  <span className="mt-0.5 text-teal" aria-hidden="true">›</span>
                  <span className="text-sm leading-relaxed text-slate">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Definite */}
          <div className="academic-card overflow-hidden">
            <div className="px-6 py-4" style={{ background: '#FFF4CC', borderBottom: '1px solid #F5DFA0' }}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-lg font-bold"
                  style={{ background: '#fff4cc', color: '#b58000', border: '1.5px solid #F5DFA0' }}
                >
                  ∫ₐᵇ
                </span>
                <p className="font-heading text-base font-bold text-ink">Integral definida</p>
              </div>
            </div>
            <ul className="divide-y divide-line px-6">
              {definitePoints.map((p) => (
                <li key={p} className="flex items-start gap-3 py-3.5">
                  <span className="mt-0.5 text-gold" aria-hidden="true">›</span>
                  <span className="text-sm leading-relaxed text-slate">{p}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* FTC note */}
        <div
          className="mt-6 rounded-xl px-6 py-4"
          style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
        >
          <p className="text-sm leading-relaxed text-slate">
            <strong className="font-semibold text-ink">Teorema fundamental del cálculo: </strong>
            La relación entre ambos tipos se establece mediante este teorema, que conecta la derivación y la integración como operaciones inversas. Si F(x) es la antiderivada de f(x), entonces ∫ₐᵇ f(x) dx = F(b) − F(a).
          </p>
        </div>

      </div>
    </section>
  );
}
