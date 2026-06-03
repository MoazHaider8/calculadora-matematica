const entities = ['Primera derivada', 'Segunda derivada', 'Orden superior', 'Variable', 'Pendiente', 'Recta tangente', 'Evaluación en un punto'];

export function DerivadaWhatIs() {
  return (
    <section className="py-10 lg:py-14" style={{ background: '#EEF4F7' }} aria-labelledby="whatis-deriv-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="eyebrow">Sobre esta herramienta</p>
            <h2 id="whatis-deriv-heading" className="mt-3 text-[1.6rem] font-bold leading-tight text-ink lg:text-[1.9rem]">
              Qué calcula esta herramienta
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {entities.map((e) => (
                <span
                  key={e}
                  className="rounded-full px-2.5 py-1 text-xs font-semibold"
                  style={{ background: '#DDF3F0', color: '#0f5c5c' }}
                >
                  {e}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="academic-card p-7">
              <p className="text-sm leading-relaxed text-slate">
                La calculadora obtiene la derivada simbólica de una función respecto a la variable que elijas.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                La <strong className="font-semibold text-ink">primera derivada</strong> mide la tasa de cambio instantánea de una función en cada punto. Geométricamente, representa la pendiente de la recta tangente a la curva en ese punto.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                La <strong className="font-semibold text-ink">segunda derivada</strong> mide cómo cambia la primera derivada y permite analizar la concavidad de la función, así como identificar máximos, mínimos y puntos de inflexión.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Con la opción de <strong className="font-semibold text-ink">evaluación en un punto</strong>, la calculadora sustituye la variable por el valor indicado y devuelve el resultado numérico. Si la función es diferenciable en ese punto, también puede calcular la <strong className="font-semibold text-ink">recta tangente</strong> con su ecuación simplificada.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
