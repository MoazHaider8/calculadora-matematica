const entities = ['Integral indefinida', 'Integral definida', 'Antiderivada', 'Constante C', 'Área bajo la curva', 'Límite inferior', 'Límite superior'];

export function IntegralWhatIs() {
  return (
    <section className="py-10 lg:py-14" style={{ background: '#EEF4F7' }} aria-labelledby="whatis-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="eyebrow">Sobre esta herramienta</p>
            <h2 id="whatis-heading" className="mt-3 text-[1.6rem] font-bold leading-tight text-ink lg:text-[1.9rem]">
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
                La calculadora resuelve dos tipos de integrales: indefinidas y definidas.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Una <strong className="font-semibold text-ink">integral indefinida</strong> devuelve la antiderivada de una función, es decir, la familia de funciones cuya derivada es la expresión ingresada. El resultado siempre incluye la constante de integración C, que representa un valor arbitrario desconocido.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Una <strong className="font-semibold text-ink">integral definida</strong> utiliza un límite inferior y un límite superior para calcular un valor numérico o exacto. Cuando la función representa una curva sobre el eje x, este valor corresponde al área bajo la curva entre los dos límites dados.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                La herramienta acepta expresiones con potencias, funciones trigonométricas, la función exponencial, logaritmos y raíces. Para integrales definidas con límites finitos, también muestra la aproximación decimal del resultado.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
