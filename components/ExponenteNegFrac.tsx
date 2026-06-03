export function ExponenteNegFrac() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="negfrac-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Conceptos clave</p>
          <h2 id="negfrac-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Exponentes negativos y fraccionarios
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="academic-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold text-white"
                style={{ background: '#0A4F4D' }}
                aria-hidden="true"
              >
                a⁻ⁿ
              </div>
              <h3 className="text-base font-bold text-ink">Exponentes negativos</h3>
            </div>
            <div className="mb-4 rounded-lg px-4 py-3 font-mono text-sm font-semibold text-deep-teal" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
              a⁻ⁿ = 1 / aⁿ
            </div>
            <ul className="space-y-2 text-sm text-slate">
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Convierten la potencia en su recíproco.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />2⁻³ = 1/8 = 0.125</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Se usan para expresar cantidades pequeñas.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Son la base de la notación científica con exponentes negativos.</li>
            </ul>
          </div>
          <div className="academic-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold text-white"
                style={{ background: '#0A4F4D' }}
                aria-hidden="true"
              >
                a^½
              </div>
              <h3 className="text-base font-bold text-ink">Exponentes fraccionarios</h3>
            </div>
            <div className="mb-4 rounded-lg px-4 py-3 font-mono text-sm font-semibold text-deep-teal" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
              a^(1/n) = ⁿ√a
            </div>
            <ul className="space-y-2 text-sm text-slate">
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Representan raíces.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />4^(1/2) = √4 = 2</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />8^(1/3) = ∛8 = 2</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Conectan potencias y radicales en un solo concepto.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
