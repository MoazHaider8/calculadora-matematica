export function PromedioWhatIs() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="whatis-prom-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Conceptos clave</p>
            <h2 id="whatis-prom-heading" className="mt-2 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              Qué calcula esta herramienta
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {[
                ['Promedio simple',    'Suma de todos los valores dividida entre la cantidad de datos.'],
                ['Media aritmética',   'Nombre matemático del promedio simple.'],
                ['Suma total',         'Total de todos los valores ingresados.'],
                ['Cantidad de datos',  'Número de valores incluidos en el cálculo.'],
                ['Promedio ponderado', 'Cada valor tiene un peso diferente que afecta al resultado.'],
                ['Procedimiento',      'Muestra los pasos de suma y división para verificar el cálculo.'],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: '#0a4f4d' }} aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-slate">
                    <strong className="text-ink">{title}:</strong>{' '}{desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="academic-card p-7">
            <p className="text-sm leading-relaxed text-slate">
              Esta herramienta calcula el promedio de una lista de valores numéricos. Acepta números enteros, decimales y negativos separados por coma o por línea.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              El promedio simple es útil para calcular la media de notas escolares, temperaturas diarias, precios o cualquier conjunto de datos con igual importancia. El promedio ponderado sirve cuando algunos valores tienen más peso que otros, como en un examen final con mayor porcentaje.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Esta herramienta no está diseñada para análisis estadísticos completos como varianza, desviación estándar o mediana. Está enfocada en el cálculo del promedio.
            </p>
            <div
              className="mt-5 rounded-xl px-5 py-4 font-mono text-sm"
              style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              aria-hidden="true"
            >
              <p style={{ color: '#0a4f4d' }}>Simple:    (10 + 8 + 9 + 7) ÷ 4 = <strong>8.5</strong></p>
              <p className="mt-1" style={{ color: '#0a4f4d' }}>Ponderado: (80×30 + 90×70) ÷ 100 = <strong>87</strong></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
