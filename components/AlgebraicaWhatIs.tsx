export function AlgebraicaWhatIs() {
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="whatis-alg-heading">
      <div className="site-shell">
        <div className="mb-6">
          <p className="eyebrow">Descripción</p>
          <h2 id="whatis-alg-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Qué calcula esta herramienta
          </h2>
        </div>
        <div className="academic-card max-w-2xl p-6">
          <p className="text-sm leading-relaxed text-slate">
            Esta calculadora trabaja con expresiones algebraicas. Una expresión algebraica combina variables, coeficientes y operaciones sin necesidad de un signo de igualdad. La herramienta admite cuatro operaciones: simplificación, que reduce términos semejantes con la misma parte variable; expansión, que aplica la propiedad distributiva para eliminar paréntesis; factorización básica, que escribe la expresión como producto de factores; y evaluación, que sustituye la variable por un valor numérico y calcula el resultado. Esta herramienta está diseñada para trabajar con expresiones, no para resolver ecuaciones. Si necesitas encontrar el valor de una incógnita, usa la calculadora de ecuaciones.
          </p>
        </div>
      </div>
    </section>
  );
}
