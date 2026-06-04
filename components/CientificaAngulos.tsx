export function CientificaAngulos() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="angulos-heading">
      <div className="site-shell">
        <p className="eyebrow">Referencia</p>
        <h2 id="angulos-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Grados y radianes
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">

          <div
            className="overflow-hidden rounded-2xl"
            style={{ border: '1px solid #D7E2EA' }}
          >
            <div
              className="px-6 py-4"
              style={{ background: '#0a3535', borderBottom: '1px solid rgba(221,243,240,0.12)' }}
            >
              <p className="font-mono text-base font-bold" style={{ color: 'rgba(216,163,26,0.9)' }}>Grados °</p>
            </div>
            <div className="px-6 py-5">
              <ul className="flex flex-col gap-2.5">
                {[
                  'Se usan con medidas como 30°, 45° y 60°.',
                  'sin(30°) = 0.5',
                  'cos(60°) = 0.5',
                  'tan(45°) = 1',
                  'Modo predeterminado en esta calculadora.',
                  'Útil en tareas escolares y trigonometría básica.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#0a4f4d' }} aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-slate">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-2xl"
            style={{ border: '1px solid #D7E2EA' }}
          >
            <div
              className="px-6 py-4"
              style={{ background: '#0a3535', borderBottom: '1px solid rgba(221,243,240,0.12)' }}
            >
              <p className="font-mono text-base font-bold" style={{ color: 'rgba(216,163,26,0.9)' }}>Radianes rad</p>
            </div>
            <div className="px-6 py-5">
              <ul className="flex flex-col gap-2.5">
                {[
                  'Se usan con la constante π.',
                  'sin(π/2) = 1',
                  'cos(π) = -1',
                  'tan(π/4) = 1',
                  'Comunes en cálculo y matemáticas avanzadas.',
                  'Para usarlos, cambia el modo a Radianes antes de calcular.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#0a4f4d' }} aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-slate">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <div
          className="mt-6 rounded-2xl px-6 py-5"
          style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
        >
          <p className="text-sm leading-relaxed" style={{ color: '#0a4f4d' }}>
            <strong>Importante:</strong> el modo angular solo afecta a las funciones sin, cos y tan. Logaritmos, potencias, raíces y operaciones básicas no cambian con el modo.
          </p>
        </div>
      </div>
    </section>
  );
}
