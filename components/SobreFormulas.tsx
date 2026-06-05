export function SobreFormulas() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="formulas-heading">
      <div className="site-shell">
        <p className="eyebrow">Metodología</p>
        <h2 id="formulas-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Cómo usamos fórmulas y resultados
        </h2>
        <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
          <p>
            Las calculadoras de este sitio aplican fórmulas matemáticas estándar. Muchas herramientas muestran la fórmula utilizada, la sustitución de valores y el resultado final para que puedas verificar el procedimiento.
          </p>
          <p>
            Antes de calcular, algunas herramientas validan que los valores introducidos sean coherentes con la operación. Si un valor no es válido, se muestra un mensaje de error en español.
          </p>
          <p>
            Los resultados están diseñados para uso educativo y práctico. Para decisiones académicas o profesionales que requieran alta precisión, te recomendamos verificar los resultados con fuentes adicionales o con tu docente.
          </p>
        </div>
      </div>
    </section>
  );
}
