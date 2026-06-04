export function ReglaTresTypes() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="types-rt-heading">
      <div className="site-shell">
        <p className="eyebrow">Referencia</p>
        <h2 id="types-rt-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Regla de tres directa e inversa
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Directa */}
          <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid #D7E2EA' }}>
            <div className="px-6 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm font-bold" style={{ color: 'rgba(216,163,26,0.9)' }}>Regla directa</p>
              <p className="mt-1 font-mono text-xs" style={{ color: 'rgba(221,243,240,0.55)' }}>X = B × C / A</p>
            </div>
            <div className="px-6 py-5">
              <ul className="flex flex-col gap-2.5">
                {[
                  'Una magnitud aumenta y la otra también.',
                  'Ejemplo: 3 cuadernos cuestan 150.',
                  '5 cuadernos cuestan X = 250.',
                  'X = 150 × 5 / 3 = 250',
                  'Usado en precios, recetas y escalas.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#0a4f4d' }} aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-slate">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Inversa */}
          <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid #D7E2EA' }}>
            <div className="px-6 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm font-bold" style={{ color: 'rgba(216,163,26,0.9)' }}>Regla inversa</p>
              <p className="mt-1 font-mono text-xs" style={{ color: 'rgba(221,243,240,0.55)' }}>X = A × B / C</p>
            </div>
            <div className="px-6 py-5">
              <ul className="flex flex-col gap-2.5">
                {[
                  'Una magnitud aumenta y la otra disminuye.',
                  'Ejemplo: 4 trabajadores tardan 6 días.',
                  '8 trabajadores tardan X = 3 días.',
                  'X = 4 × 6 / 8 = 3',
                  'Usado en tiempos, velocidades y reparto.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#0a4f4d' }} aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-slate">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Producto cruzado */}
          <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid #D7E2EA' }}>
            <div className="px-6 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm font-bold" style={{ color: 'rgba(216,163,26,0.9)' }}>Producto cruzado</p>
              <p className="mt-1 font-mono text-xs" style={{ color: 'rgba(221,243,240,0.55)' }}>A / B = C / X</p>
            </div>
            <div className="px-6 py-5">
              <ul className="flex flex-col gap-2.5">
                {[
                  'Organiza la proporción de forma visual.',
                  'Se multiplican los valores en diagonal.',
                  'Ayuda a despejar el valor X.',
                  'Compatible con directa e inversa.',
                  'Facilita la comprobación del resultado.',
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
      </div>
    </section>
  );
}
