export function PromedioSimplePonderado() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="simple-pond-heading">
      <div className="site-shell">
        <p className="eyebrow">Referencia</p>
        <h2 id="simple-pond-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Promedio simple y ponderado
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">

          <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid #D7E2EA' }}>
            <div className="px-6 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-base font-bold" style={{ color: 'rgba(216,163,26,0.9)' }}>Promedio simple</p>
              <p className="mt-1 font-mono text-xs" style={{ color: 'rgba(221,243,240,0.55)' }}>x̄ = (v1 + v2 + ... + vn) ÷ n</p>
            </div>
            <div className="px-6 py-5">
              <ul className="flex flex-col gap-2.5">
                {[
                  'Todos los valores contribuyen por igual.',
                  'Se suma el total y se divide entre la cantidad.',
                  'Ejemplo: (10 + 8 + 9 + 7) ÷ 4 = 8.5',
                  'Útil para notas con igual importancia.',
                  'Es el tipo de promedio más habitual en la escuela.',
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
              <p className="font-mono text-base font-bold" style={{ color: 'rgba(216,163,26,0.9)' }}>Promedio ponderado</p>
              <p className="mt-1 font-mono text-xs" style={{ color: 'rgba(221,243,240,0.55)' }}>x̄ = Σ(vi × pi) ÷ Σpi</p>
            </div>
            <div className="px-6 py-5">
              <ul className="flex flex-col gap-2.5">
                {[
                  'Algunos valores tienen mayor peso que otros.',
                  'Se multiplica cada valor por su peso antes de sumar.',
                  'Ejemplo: (80×30 + 90×70) ÷ 100 = 87',
                  'Útil cuando el examen final tiene mayor porcentaje.',
                  'Los pesos no necesitan sumar 100.',
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
            <strong>Cuándo elegir cada uno:</strong> usa el promedio simple cuando todas las notas o valores tienen la misma importancia. Usa el promedio ponderado cuando algunas evaluaciones cuentan más, como un examen final con el 60 % del peso total.
          </p>
        </div>
      </div>
    </section>
  );
}
