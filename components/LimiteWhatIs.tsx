const entities = [
  'Límite bilateral', 'Límite lateral', 'Límite al infinito',
  'Tabla de valores', 'Indeterminación', 'Asíntota',
];

export function LimiteWhatIs() {
  return (
    <section className="py-10 lg:py-14" style={{ background: '#EEF4F7' }} aria-labelledby="whatis-limite-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="eyebrow">Sobre esta herramienta</p>
            <h2 id="whatis-limite-heading" className="mt-3 text-[1.6rem] font-bold leading-tight text-ink lg:text-[1.9rem]">
              Qué calcula esta herramienta
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {entities.map((e) => (
                <span key={e} className="rounded-full px-2.5 py-1 text-xs font-semibold" style={{ background: '#DDF3F0', color: '#0f5c5c' }}>
                  {e}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="academic-card p-7">
              <p className="text-sm leading-relaxed text-slate">
                La calculadora analiza el comportamiento de una función cuando su variable se acerca a un valor concreto.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                El <strong className="font-semibold text-ink">límite bilateral</strong> estudia la función desde ambos lados del punto indicado. Si la función se acerca al mismo valor tanto por la izquierda como por la derecha, ese valor es el límite.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Los <strong className="font-semibold text-ink">límites laterales</strong> analizan solo una dirección de aproximación. Son útiles cuando hay discontinuidades, saltos o asíntotas en el punto de análisis.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                El <strong className="font-semibold text-ink">límite al infinito</strong> estudia qué valor adopta la función cuando la variable crece o decrece sin límite. La herramienta también genera una <strong className="font-semibold text-ink">tabla de valores</strong> que muestra la aproximación numérica paso a paso. Cuando un límite bilateral no existe, la calculadora lo indica con claridad.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
