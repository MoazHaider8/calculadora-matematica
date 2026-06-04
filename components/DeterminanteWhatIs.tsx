export function DeterminanteWhatIs() {
  return (
    <section className="bg-white py-10 lg:py-12" aria-labelledby="whatis-det-heading">
      <div className="site-shell">
        <div className="mx-auto max-w-2xl">
          <div className="academic-card p-6">
            <p className="eyebrow">Sobre esta herramienta</p>
            <h2
              id="whatis-det-heading"
              className="mt-3 text-[1.35rem] font-bold leading-snug"
              style={{ color: '#102a43' }}
            >
              Qué calcula esta herramienta
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: '#334e68' }}>
              <p>
                Esta calculadora obtiene el <strong>determinante</strong> de una matriz cuadrada. El
                determinante es un valor escalar asociado a toda matriz cuadrada que proporciona
                información sobre sus propiedades algebraicas.
              </p>
              <p>
                La herramienta admite matrices de <strong>2×2, 3×3 y 4×4</strong>. Para cada tamaño
                aplica el método más adecuado: fórmula directa para 2×2, regla de Sarrus para 3×3 y
                expansión por cofactores para 4×4.
              </p>
              <p>
                El resultado incluye el valor de <strong>det(A)</strong>, el método utilizado y la
                interpretación: si el determinante es cero, la matriz es <strong>singular</strong> y
                no tiene inversa. Si no lo es, la matriz tiene inversa y sus filas o columnas son
                linealmente independientes.
              </p>
              <p>
                Esta herramienta se centra en <strong>determinantes</strong>. Para operaciones
                generales con matrices consulta la Calculadora de Matrices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
