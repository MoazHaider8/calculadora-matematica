export function EstadisticaCalcWhatIs() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="whatis-ec-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Conceptos clave</p>
            <h2 id="whatis-ec-heading" className="mt-2 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              Qué calcula esta herramienta
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {[
                ['Media',               'Valor representativo del conjunto: suma dividida entre la cantidad de datos.'],
                ['Mediana',             'Valor central de los datos cuando están ordenados.'],
                ['Moda',                'Valor o valores que aparecen con mayor frecuencia.'],
                ['Varianza y desviación estándar', 'Medidas de dispersión respecto a la media, en versión poblacional y muestral.'],
                ['Mínimo y máximo',     'Límites inferior y superior del conjunto.'],
                ['Rango',               'Diferencia entre el máximo y el mínimo.'],
                ['Cantidad y suma',     'Base del resumen: número de datos y total acumulado.'],
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
              Esta herramienta es una calculadora de estadística descriptiva de uso general. A diferencia de herramientas dedicadas a una sola medida, analiza el conjunto completo y entrega diez medidas en un solo cálculo.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Acepta cualquier lista de números: notas, temperaturas, precios, tiempos o cualquier dato numérico. Muestra las medidas de tendencia central (media, mediana, moda) y las medidas de dispersión (rango, varianza, desviación estándar) en versión poblacional y muestral.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Para calcular la probabilidad de un evento o estudiar una sola medida con más detalle, usa las calculadoras específicas de esta categoría cuando estén disponibles.
            </p>
            <div
              className="mt-5 rounded-xl px-5 py-4 font-mono text-sm"
              style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              aria-hidden="true"
            >
              <p style={{ color: '#0a4f4d' }}>Datos: 10, 8, 9, 7, 6</p>
              <p className="mt-1" style={{ color: '#0a4f4d' }}>Media = 8  ·  Mediana = 8  ·  Rango = 4</p>
              <p className="mt-1" style={{ color: '#0a4f4d' }}>σ pob. = 1.4142  ·  σ muestral = 1.5811</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
