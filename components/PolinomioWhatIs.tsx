export function PolinomioWhatIs() {
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="whatis-pol-heading">
      <div className="site-shell">
        <div className="mb-6">
          <p className="eyebrow">Descripción</p>
          <h2 id="whatis-pol-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Qué calcula esta herramienta
          </h2>
        </div>
        <div className="academic-card max-w-2xl p-6">
          <p className="text-sm leading-relaxed text-slate">
            Esta calculadora trabaja específicamente con polinomios. Un polinomio es una expresión algebraica formada por términos con variables elevadas a potencias enteras no negativas. Cada término tiene un coeficiente y un grado, y el grado del polinomio es el mayor exponente presente. La herramienta permite simplificar un polinomio reduciendo términos semejantes, sumar, restar y multiplicar dos polinomios, factorizar expresiones polinómicas en casos comunes, evaluar el polinomio para un valor concreto de la variable y analizar el polinomio mostrando su forma estándar, grado, término principal, coeficiente principal y término independiente.
          </p>
        </div>
      </div>
    </section>
  );
}
