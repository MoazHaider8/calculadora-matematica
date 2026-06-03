export function EcuacionWhatIs() {
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="whatis-eq-heading">
      <div className="site-shell">
        <div className="mb-6">
          <p className="eyebrow">Descripción</p>
          <h2 id="whatis-eq-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Qué calcula esta herramienta
          </h2>
        </div>
        <div className="academic-card max-w-2xl p-6">
          <p className="text-sm leading-relaxed text-slate">
            Esta calculadora resuelve ecuaciones algebraicas encontrando el valor de la incógnita que hace verdadera la igualdad. Una ecuación es una expresión que establece que dos lados son iguales, y la variable o incógnita es el valor desconocido que se busca. Las ecuaciones lineales contienen la variable de primer grado y suelen tener una solución. Las ecuaciones cuadráticas contienen la variable de segundo grado y pueden tener dos soluciones, una solución doble o ninguna solución real. La calculadora muestra la solución y una comprobación que verifica el resultado sustituyendo el valor obtenido en la ecuación original.
          </p>
        </div>
      </div>
    </section>
  );
}
