export function PorcentajesDisminuciones() {
  return (
    <section className="bg-white py-8 lg:py-10" aria-labelledby="disminuciones-h">
      <div className="site-shell">
        <h2 id="disminuciones-h" className="mb-2 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Cómo calcular disminuciones porcentuales
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate max-w-2xl">
          Una disminución porcentual se calcula igual que un descuento: calculas la cantidad que baja y la restas al valor inicial. La diferencia es el contexto: un descuento se aplica a precios, pero una disminución puede referirse a cualquier tipo de valor, como ventas, temperatura o consumo.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 max-w-2xl">
          <div className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Paso 1</p>
            <div className="overflow-x-auto rounded-lg px-4 py-3 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              disminución = valor × porcentaje / 100
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Paso 2</p>
            <div className="overflow-x-auto rounded-lg px-4 py-3 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              valor final = valor - disminución
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-xl rounded-2xl bg-white p-6" style={{ border: '1px solid #D7E2EA' }}>
          <p className="mb-3 text-sm font-bold text-ink">Ejemplo: un valor de 800 baja un 15%</p>
          <div className="overflow-x-auto rounded-xl px-5 py-4 font-mono text-sm" style={{ background: '#DDF3F0', color: '#0a3535' }}>
            <p>800 × 15 / 100 = 120</p>
            <p>800 - 120 = <strong style={{ color: '#147c7c' }}>680</strong></p>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate">
            La cantidad que disminuye es 120. El valor final es 680.
          </p>
        </div>

      </div>
    </section>
  );
}
