export function EstadisticaWhatIs() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="whatis-est-heading">
      <div className="site-shell">
        <div className="mx-auto max-w-2xl">
          <div className="academic-card p-6">
            <p className="eyebrow">Sobre esta categoría</p>
            <h2
              id="whatis-est-heading"
              className="mt-3 text-[1.35rem] font-bold leading-snug"
              style={{ color: '#102a43' }}
            >
              ¿Qué incluye la estadística?
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: '#334e68' }}>
              <p>
                La <strong>estadística</strong> es la rama de las matemáticas que estudia la recopilación, organización y análisis de <strong>conjuntos de datos</strong>. Permite resumir información numérica y extraer conclusiones a partir de ella.
              </p>
              <p>
                Las <strong>medidas de tendencia central</strong> incluyen la <strong>media</strong>, que es el promedio del conjunto; la <strong>mediana</strong>, que es el valor central de la lista ordenada; y la <strong>moda</strong>, el valor que aparece con mayor frecuencia.
              </p>
              <p>
                Las <strong>medidas de dispersión</strong> como la <strong>varianza</strong> y la <strong>desviación estándar</strong> indican cuánto se alejan los datos de la media. Una varianza alta significa datos más dispersos; una varianza baja indica que los valores se agrupan cerca del promedio.
              </p>
              <p>
                Estas herramientas son útiles para analizar datos escolares, científicos, económicos o de cualquier área que trabaje con valores numéricos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
