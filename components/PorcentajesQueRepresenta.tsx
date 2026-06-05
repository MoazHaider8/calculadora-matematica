export function PorcentajesQueRepresenta() {
  return (
    <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="que-representa-h">
      <div className="site-shell">
        <h2 id="que-representa-h" className="mb-2 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Cómo saber qué porcentaje representa un número
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate max-w-2xl">
          A veces el problema es al revés: tienes una parte y un total, y quieres saber qué porcentaje representa esa parte sobre el total.
        </p>

        <div className="grid gap-5 lg:grid-cols-2 max-w-3xl">

          <div className="rounded-2xl bg-white p-6" style={{ border: '1px solid #D7E2EA' }}>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>
              Fórmula
            </p>
            <div className="overflow-x-auto rounded-xl px-5 py-4 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              porcentaje = parte / total × 100
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6" style={{ border: '1px solid #D7E2EA' }}>
            <p className="mb-3 text-sm font-bold text-ink">Ejemplo: ¿Qué porcentaje es 30 de 150?</p>
            <div className="overflow-x-auto rounded-xl px-4 py-3 font-mono text-sm" style={{ background: '#DDF3F0', color: '#0a3535' }}>
              <p>30 / 150 × 100</p>
              <p>= 0.20 × 100</p>
              <p>= <strong style={{ color: '#147c7c' }}>20%</strong></p>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate">
              Este tipo de cálculo es habitual en notas, estadísticas y comparaciones donde quieres expresar una parte como proporción del total.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
