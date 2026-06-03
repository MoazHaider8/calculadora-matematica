const entities = ['Matrices', 'Vectores', 'Determinantes', 'Sistemas lineales', 'Matriz inversa', 'Álgebra lineal'];

export function MatVecWhatIs() {
  return (
    <section className="py-12 lg:py-16 bg-white" aria-labelledby="whatis-matvec-heading">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="eyebrow">Descripción</p>
            <h2
              id="whatis-matvec-heading"
              className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
              style={{ color: '#102a43' }}
            >
              ¿Qué son las matrices y los vectores?
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-4">
              <p className="text-base leading-relaxed" style={{ color: '#334e68' }}>
                Una matriz es una tabla de números organizados en filas y columnas. Los vectores son casos especiales de matrices con una sola fila o columna. Estas estructuras son fundamentales en álgebra lineal y permiten representar transformaciones, sistemas de ecuaciones y datos multidimensionales.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#334e68' }}>
                Esta categoría reúne herramientas para trabajar con la calculadora de matrices para operar entre matrices, la calculadora de determinantes para obtener el valor escalar que resume una matriz cuadrada, la calculadora de vectores para trabajar con componentes y productos, la calculadora de sistemas de ecuaciones para resolver Ax = b, y la calculadora de matriz inversa para encontrar A⁻¹.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#334e68' }}>
                Las herramientas de esta sección son útiles en álgebra lineal, física, ingeniería y ciencias de datos.
              </p>
            </div>

            <div
              className="mt-6 grid grid-cols-2 gap-3 rounded-xl p-4 sm:grid-cols-3"
              style={{ background: '#F0FAF8', border: '1px solid #B2E5DC' }}
            >
              {entities.map((e) => (
                <div key={e} className="text-center">
                  <p className="text-xs font-bold" style={{ color: '#0F5C5C' }}>{e}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
