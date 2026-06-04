export function SistemasWhatIs() {
  return (
    <section className="bg-white py-10 lg:py-12" aria-labelledby="whatis-sis-heading">
      <div className="site-shell">
        <div className="mx-auto max-w-2xl">
          <div className="academic-card p-6">
            <p className="eyebrow">Sobre esta herramienta</p>
            <h2
              id="whatis-sis-heading"
              className="mt-3 text-[1.35rem] font-bold leading-snug"
              style={{ color: '#102a43' }}
            >
              Qué calcula esta herramienta
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: '#334e68' }}>
              <p>
                Esta calculadora resuelve <strong>sistemas de ecuaciones lineales</strong> con dos o tres incógnitas. Un sistema de ecuaciones es un conjunto de ecuaciones que comparten las mismas <strong>variables</strong>, y la solución es el conjunto de valores que satisface todas las ecuaciones simultáneamente.
              </p>
              <p>
                La herramienta admite sistemas <strong>2×2</strong> (dos ecuaciones, dos variables x e y) y sistemas <strong>3×3</strong> (tres ecuaciones, tres variables x, y y z). Introduce los <strong>coeficientes</strong> y los <strong>términos independientes</strong>, y la calculadora aplica <strong>eliminación gaussiana</strong> para encontrar la solución.
              </p>
              <p>
                El resultado puede ser una <strong>solución única</strong>, ninguna solución (sistema incompatible) o infinitas soluciones (sistema indeterminado). Esta herramienta resuelve sistemas, no ecuaciones individuales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
