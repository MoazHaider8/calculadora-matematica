export function EstadisticaCalcPoblMuestra() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="pob-muestra-ec-heading">
      <div className="site-shell">
        <p className="eyebrow">Referencia</p>
        <h2 id="pob-muestra-ec-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Población y muestra
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">

          <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid #D7E2EA' }}>
            <div className="px-6 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-base font-bold" style={{ color: 'rgba(216,163,26,0.9)' }}>Población</p>
              <p className="mt-1 font-mono text-xs" style={{ color: 'rgba(221,243,240,0.55)' }}>σ² = Σ(x − x̄)² / n</p>
            </div>
            <div className="px-6 py-5">
              <ul className="flex flex-col gap-2.5">
                {[
                  'Usa todos los datos del conjunto disponible.',
                  'La varianza divide entre n (total de datos).',
                  'Adecuada cuando el conjunto está completo.',
                  'Ejemplo: todas las notas de un examen de clase.',
                  'La desviación estándar poblacional se denota σ.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#0a4f4d' }} aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-slate">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid #D7E2EA' }}>
            <div className="px-6 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-base font-bold" style={{ color: 'rgba(216,163,26,0.9)' }}>Muestra</p>
              <p className="mt-1 font-mono text-xs" style={{ color: 'rgba(221,243,240,0.55)' }}>s² = Σ(x − x̄)² / (n − 1)</p>
            </div>
            <div className="px-6 py-5">
              <ul className="flex flex-col gap-2.5">
                {[
                  'Usa una parte representativa de los datos.',
                  'La varianza divide entre n − 1 (corrección de Bessel).',
                  'Adecuada cuando los datos son un subconjunto.',
                  'Ejemplo: muestra de precios tomada de un mercado.',
                  'Requiere al menos 2 valores para calcularse.',
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
            <strong>Cuándo elegir cada una:</strong> si tienes todos los datos posibles del fenómeno que estudias, usa la versión poblacional. Si tus datos son una muestra y quieres estimar la varianza real de la población, usa la versión muestral.
          </p>
        </div>
      </div>
    </section>
  );
}
