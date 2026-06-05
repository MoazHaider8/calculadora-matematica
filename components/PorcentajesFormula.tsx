const miniEjemplos = [
  { expr: '10% de 80',  calc: '80 × 10 / 100',  result: '8'  },
  { expr: '25% de 200', calc: '200 × 25 / 100', result: '50' },
  { expr: '50% de 60',  calc: '60 × 50 / 100',  result: '30' },
];

export function PorcentajesFormula() {
  return (
    <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="formula-h">
      <div className="site-shell">
        <h2 id="formula-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Fórmula básica del porcentaje
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">

          <div className="rounded-2xl bg-white p-6" style={{ border: '1px solid #D7E2EA' }}>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>
              Para encontrar un porcentaje de una cantidad
            </p>
            <div className="overflow-x-auto rounded-xl px-5 py-4 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              resultado = cantidad × porcentaje / 100
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate">
              Usas esta fórmula cuando tienes un total y quieres saber cuánto corresponde a ese porcentaje. Por ejemplo, el 10% de 80.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6" style={{ border: '1px solid #D7E2EA' }}>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>
              Para saber qué porcentaje representa una parte
            </p>
            <div className="overflow-x-auto rounded-xl px-5 py-4 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              porcentaje = parte / total × 100
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate">
              Usas esta fórmula cuando tienes una parte y un total, y quieres saber qué proporción representa esa parte.
            </p>
          </div>

        </div>

        <div className="mt-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>
            Ejemplos rápidos
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {miniEjemplos.map(e => (
              <div key={e.expr} className="rounded-xl bg-white px-5 py-4" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-xs font-bold text-ink">{e.expr}</p>
                <p className="mt-1 font-mono text-xs" style={{ color: '#627d98' }}>{e.calc}</p>
                <p className="mt-1.5 font-mono text-sm font-bold" style={{ color: '#147c7c' }}>= {e.result}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
