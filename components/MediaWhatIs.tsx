export function MediaWhatIs() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="whatis-media-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Concepto</p>
            <h2 id="whatis-media-heading" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              Qué calcula esta herramienta
            </h2>
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-slate">
              <p>
                La media aritmética es una medida de tendencia central que resume un conjunto de datos con un único valor representativo. Se obtiene sumando todos los valores y dividiendo entre la cantidad de datos.
              </p>
              <p>
                Esta calculadora acepta una lista de datos numéricos y calcula la media simple, que asigna el mismo peso a cada valor, o la media ponderada, donde cada valor puede tener un peso diferente según su importancia relativa.
              </p>
              <p>
                El resultado incluye la suma total, la cantidad de datos, el procedimiento paso a paso y una interpretación del valor obtenido. Esta herramienta se centra en la media, no en un resumen estadístico completo.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl px-6 py-5" style={{ background: '#0a3535' }}>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                Fórmulas
              </p>
              <div className="flex flex-col gap-2 font-mono text-sm" style={{ color: '#D8A31A' }}>
                <span>x&#x0304; = &Sigma;x / n</span>
                <span style={{ color: 'rgba(216,163,26,0.65)' }}>x&#x0304; = &Sigma;(x &times; peso) / &Sigma;pesos</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Símbolo',        value: 'x̄'       },
                { label: 'Suma',           value: 'Σx'       },
                { label: 'Cantidad',       value: 'n'        },
                { label: 'Medida',         value: 'tendencia central' },
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
