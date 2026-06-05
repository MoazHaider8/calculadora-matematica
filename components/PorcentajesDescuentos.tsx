export function PorcentajesDescuentos() {
  return (
    <section className="bg-white py-8 lg:py-10" aria-labelledby="descuentos-h">
      <div className="site-shell">
        <h2 id="descuentos-h" className="mb-2 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Cómo calcular descuentos
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate max-w-2xl">
          Para calcular un descuento necesitas dos pasos: primero calculas el valor del descuento, luego se lo restas al precio original.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 max-w-2xl">
          <div className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Paso 1</p>
            <div className="overflow-x-auto rounded-lg px-4 py-3 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              descuento = precio × porcentaje / 100
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Paso 2</p>
            <div className="overflow-x-auto rounded-lg px-4 py-3 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              precio final = precio - descuento
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-xl rounded-2xl bg-white p-6" style={{ border: '1px solid #D7E2EA' }}>
          <p className="mb-3 text-sm font-bold text-ink">Ejemplo: una camiseta de 200 con 25% de descuento</p>
          <div className="overflow-x-auto rounded-xl px-5 py-4 font-mono text-sm" style={{ background: '#DDF3F0', color: '#0a3535' }}>
            <p>200 × 25 / 100 = 50</p>
            <p>200 - 50 = <strong style={{ color: '#147c7c' }}>150</strong></p>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate">
            El descuento es 50. El precio final que pagas es 150.
          </p>
        </div>

      </div>
    </section>
  );
}
