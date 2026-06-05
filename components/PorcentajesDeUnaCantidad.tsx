const steps = [
  { n: '1', title: 'Escribe la cantidad total',               val: '240'         },
  { n: '2', title: 'Escribe el porcentaje',                   val: '15'          },
  { n: '3', title: 'Multiplica cantidad por porcentaje',      val: '240 × 15 = 3600' },
  { n: '4', title: 'Divide el resultado entre 100',           val: '3600 / 100 = 36' },
];

export function PorcentajesDeUnaCantidad() {
  return (
    <section className="bg-white py-8 lg:py-10" aria-labelledby="de-una-cantidad-h">
      <div className="site-shell">
        <h2 id="de-una-cantidad-h" className="mb-2 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Cómo calcular el porcentaje de una cantidad
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate max-w-2xl">
          Cuando tienes un total y quieres saber cuánto representa un porcentaje de ese total, el procedimiento siempre sigue los mismos cuatro pasos.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(s => (
            <div key={s.n} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full font-mono text-sm font-bold text-white"
                style={{ background: '#147c7c' }}
              >
                {s.n}
              </span>
              <p className="mt-3 text-sm font-bold text-ink">{s.title}</p>
              <p className="mt-1 font-mono text-xs" style={{ color: '#147c7c' }}>{s.val}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-xl rounded-2xl bg-white p-6" style={{ border: '1px solid #D7E2EA' }}>
          <p className="mb-3 text-sm font-bold text-ink">Ejemplo completo: ¿Cuánto es el 15% de 240?</p>
          <div className="overflow-x-auto rounded-xl px-5 py-4 font-mono text-sm" style={{ background: '#DDF3F0', color: '#0a3535' }}>
            <p>240 × 15 = 3600</p>
            <p>3600 / 100 = 36</p>
          </div>
          <p className="mt-3 text-sm font-bold text-ink">
            El 15% de 240 es <span style={{ color: '#147c7c' }}>36</span>.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate">
            Este cálculo sirve para descuentos, impuestos, comisiones o cualquier situación donde necesitas una parte de un total.
          </p>
        </div>

      </div>
    </section>
  );
}
