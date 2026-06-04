export function FraccionesWhatIs() {
  return (
    <section className="bg-white py-10 lg:py-12" aria-labelledby="whatis-frac-heading">
      <div className="site-shell">
        <div className="mx-auto max-w-2xl">
          <div className="academic-card p-6">
            <p className="eyebrow">Sobre esta herramienta</p>
            <h2
              id="whatis-frac-heading"
              className="mt-3 text-[1.35rem] font-bold leading-snug"
              style={{ color: '#102a43' }}
            >
              Qué calcula esta herramienta
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: '#334e68' }}>
              <p>
                Esta calculadora trabaja con <strong>fracciones</strong>: expresiones formadas por un <strong>numerador</strong> y un <strong>denominador</strong> que representan una parte de un entero o una relación entre dos cantidades.
              </p>
              <p>
                La herramienta permite realizar seis operaciones: <strong>suma</strong> y <strong>resta</strong> de fracciones con denominador común o distinto, <strong>multiplicación</strong> de numeradores y denominadores, <strong>división</strong> mediante el recíproco, <strong>simplificación</strong> usando el máximo común divisor y <strong>conversión</strong> a fracción mixta y decimal.
              </p>
              <p>
                Cada resultado incluye la <strong>fracción simplificada</strong>, la <strong>fracción mixta</strong> cuando el numerador es mayor que el denominador, el <strong>resultado decimal</strong> y los pasos del procedimiento. Esta herramienta se centra en fracciones, no en porcentajes como operación principal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
