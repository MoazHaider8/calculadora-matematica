export function PorcentajesWhatIs() {
  return (
    <section className="bg-white py-10 lg:py-12" aria-labelledby="whatis-pct-heading">
      <div className="site-shell">
        <div className="mx-auto max-w-2xl">
          <div className="academic-card p-6">
            <p className="eyebrow">Sobre esta herramienta</p>
            <h2
              id="whatis-pct-heading"
              className="mt-3 text-[1.35rem] font-bold leading-snug"
              style={{ color: '#102a43' }}
            >
              Qué calcula esta herramienta
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: '#334e68' }}>
              <p>
                Esta calculadora resuelve seis tipos de cálculos con <strong>porcentajes</strong>. Un porcentaje expresa una cantidad como parte de cien y se usa para comparar proporciones, calcular precios con descuento, estimar aumentos y analizar variaciones entre valores.
              </p>
              <p>
                Las operaciones disponibles son: obtener el <strong>porcentaje de un número</strong> (25% de 200 = 50), calcular <strong>qué porcentaje</strong> representa una parte respecto al total, aplicar un <strong>aumento porcentual</strong>, aplicar un <strong>descuento</strong>, calcular el <strong>cambio porcentual</strong> entre dos valores y encontrar el <strong>total</strong> cuando se conoce la parte y el porcentaje.
              </p>
              <p>
                Cada resultado incluye la fórmula exacta y una interpretación en texto. Esta herramienta se centra en porcentajes; para operar fracciones usa la Calculadora de Fracciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
