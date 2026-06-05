export function VarianzaWhatIs() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="whatis-var-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Concepto</p>
            <h2 id="whatis-var-heading" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              Qué calcula esta herramienta
            </h2>
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-slate">
              <p>
                La varianza mide la dispersión cuadrática de un conjunto de datos respecto a su media. Se obtiene calculando la media, restando cada valor a esa media, elevando la diferencia al cuadrado y promediando los resultados.
              </p>
              <p>
                Esta calculadora acepta una lista de datos numéricos y calcula la varianza poblacional, que divide entre n, y la varianza muestral, que divide entre n−1 para estimar la dispersión de una población a partir de una muestra.
              </p>
              <p>
                El resultado incluye la media, las diferencias cuadradas, la suma de diferencias cuadradas, la varianza y la desviación estándar relacionada como valor de apoyo. La página se centra en la varianza, no en un resumen estadístico completo.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl px-6 py-5" style={{ background: '#0a3535' }}>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                Fórmulas
              </p>
              <div className="flex flex-col gap-2 font-mono text-sm" style={{ color: '#D8A31A' }}>
                <span>&sigma;&sup2; = &Sigma;(x &minus; &mu;)&sup2; / n</span>
                <span style={{ color: 'rgba(216,163,26,0.65)' }}>s&sup2; = &Sigma;(x &minus; x&#x0304;)&sup2; / (n&minus;1)</span>
                <span style={{ color: 'rgba(216,163,26,0.45)' }}>x&#x0304; = &Sigma;x / n</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Símbolo pob.',     value: 'σ²'    },
                { label: 'Símbolo muestral', value: 's²'    },
                { label: 'Divisor pob.',     value: 'n'     },
                { label: 'Divisor muestral', value: 'n − 1' },
              ].map(item => (
                <div
                  key={item.label}
                  className="rounded-xl px-4 py-3"
                  style={{ background: '#F8FAFC', border: '1px solid #D7E2EA' }}
                >
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>{item.label}</p>
                  <p className="font-mono text-base font-bold" style={{ color: '#102a43' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
