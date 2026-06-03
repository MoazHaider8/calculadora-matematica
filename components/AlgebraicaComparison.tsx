export function AlgebraicaComparison() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="comp-alg-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Conceptos clave</p>
          <h2 id="comp-alg-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Simplificar, expandir y factorizar
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">

          <div className="academic-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold text-white" style={{ background: '#0A4F4D' }} aria-hidden="true">
                4x
              </div>
              <h3 className="text-base font-bold text-ink">Simplificar</h3>
            </div>
            <div className="mb-4 rounded-lg px-4 py-3 font-mono text-sm font-semibold text-deep-teal" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
              2x + 3x - x = 4x
            </div>
            <ul className="space-y-2 text-sm text-slate">
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Reduce términos semejantes.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Conserva una expresión equivalente.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Hace la expresión más compacta.</li>
            </ul>
          </div>

          <div className="academic-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold text-white" style={{ background: '#0A4F4D' }} aria-hidden="true">
                x²+
              </div>
              <h3 className="text-base font-bold text-ink">Expandir</h3>
            </div>
            <div className="mb-4 rounded-lg px-4 py-3 font-mono text-sm font-semibold text-deep-teal" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
              2(x+4) = 2x+8
            </div>
            <ul className="space-y-2 text-sm text-slate">
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Elimina paréntesis.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Aplica la propiedad distributiva.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Convierte productos en sumas.</li>
            </ul>
          </div>

          <div className="academic-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold text-white" style={{ background: '#0A4F4D' }} aria-hidden="true">
                (x)(x)
              </div>
              <h3 className="text-base font-bold text-ink">Factorizar</h3>
            </div>
            <div className="mb-4 rounded-lg px-4 py-3 font-mono text-sm font-semibold text-deep-teal" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
              x²+5x+6 = (x+2)(x+3)
            </div>
            <ul className="space-y-2 text-sm text-slate">
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Escribe la expresión como producto.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Ayuda a reconocer raíces y estructuras.</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />Facilita otros cálculos algebraicos.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
