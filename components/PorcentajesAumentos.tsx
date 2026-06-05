export function PorcentajesAumentos() {
  return (
    <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="aumentos-h">
      <div className="site-shell">
        <h2 id="aumentos-h" className="mb-2 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Cómo calcular aumentos porcentuales
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate max-w-2xl">
          Calcular un aumento funciona igual que un descuento, pero en lugar de restar el resultado al valor inicial, lo sumas.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 max-w-2xl">
          <div className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Paso 1</p>
            <div className="overflow-x-auto rounded-lg px-4 py-3 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              aumento = valor × porcentaje / 100
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Paso 2</p>
            <div className="overflow-x-auto rounded-lg px-4 py-3 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              valor final = valor + aumento
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-xl rounded-2xl bg-white p-6" style={{ border: '1px solid #D7E2EA' }}>
          <p className="mb-3 text-sm font-bold text-ink">Ejemplo: un precio de 500 sube un 12%</p>
          <div className="overflow-x-auto rounded-xl px-5 py-4 font-mono text-sm" style={{ background: '#DDF3F0', color: '#0a3535' }}>
            <p>500 × 12 / 100 = 60</p>
            <p>500 + 60 = <strong style={{ color: '#147c7c' }}>560</strong></p>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate">
            El aumento es 60. El valor final es 560. Este cálculo se usa cuando sube un precio, crece un sueldo, aumenta una cuota o cualquier valor que se incrementa en un porcentaje.
          </p>
        </div>

      </div>
    </section>
  );
}
