export function VectorWhatIs() {
  return (
    <section className="bg-white py-10 lg:py-12" aria-labelledby="whatis-vec-heading">
      <div className="site-shell">
        <div className="mx-auto max-w-2xl">
          <div className="academic-card p-6">
            <p className="eyebrow">Sobre esta herramienta</p>
            <h2
              id="whatis-vec-heading"
              className="mt-3 text-[1.35rem] font-bold leading-snug"
              style={{ color: '#102a43' }}
            >
              Qué calcula esta herramienta
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: '#334e68' }}>
              <p>
                Esta calculadora opera con <strong>vectores</strong> en 2D y 3D. Un vector es un objeto matemático definido por sus <strong>componentes</strong>: dos valores (x, y) en el plano o tres valores (x, y, z) en el espacio.
              </p>
              <p>
                La herramienta permite realizar siete operaciones: <strong>suma</strong> y <strong>resta</strong> de vectores, <strong>producto punto</strong> (que devuelve un escalar), <strong>producto cruz</strong> (exclusivo para 3D, devuelve un vector perpendicular), <strong>norma o magnitud</strong>, <strong>vector unitario</strong> y <strong>ángulo entre vectores</strong>.
              </p>
              <p>
                Cada operación incluye el cálculo breve y una explicación del procedimiento. Esta herramienta se centra en <strong>operaciones vectoriales</strong>. Para operaciones con matrices utiliza la Calculadora de Matrices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
