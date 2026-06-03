export function EcuacionComparison() {
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="comparison-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Comparativa</p>
          <h2 id="comparison-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Ecuaciones lineales y cuadráticas
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
                ax+b
              </div>
              <h3 className="text-base font-bold text-ink">Ecuaciones lineales</h3>
            </div>
            <div className="mb-4 rounded-lg px-4 py-3 font-mono text-sm font-semibold text-deep-teal" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
              ax + b = c
            </div>
            <ul className="space-y-2 text-sm text-slate">
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Contienen la variable de primer grado.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Generalmente tienen una única solución.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Se resuelven despejando la variable.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Ejemplo: 2x + 3 = 7 → x = 2</li>
            </ul>
          </div>
          <div className="academic-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold text-white"
                style={{ background: '#0A4F4D' }}
                aria-hidden="true"
              >
                ax²
              </div>
              <h3 className="text-base font-bold text-ink">Ecuaciones cuadráticas</h3>
            </div>
            <div className="mb-4 rounded-lg px-4 py-3 font-mono text-sm font-semibold text-deep-teal" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
              ax² + bx + c = 0
            </div>
            <ul className="space-y-2 text-sm text-slate">
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Contienen la variable de segundo grado.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Pueden tener dos soluciones, una solución doble o ninguna solución real.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Se resuelven con factorización o la fórmula general.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Ejemplo: x² - 5x + 6 = 0 → x = 2, x = 3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
