export function ProbabilidadWhatIs() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="whatis-prob-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Concepto</p>
            <h2 id="whatis-prob-heading" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              Qué calcula esta herramienta
            </h2>
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-slate">
              <p>
                La probabilidad mide la posibilidad de que ocurra un evento. Se expresa como un valor entre 0 y 1, donde 0 indica que el evento es imposible y 1 que es seguro.
              </p>
              <p>
                Esta calculadora trabaja con probabilidades básicas de eventos discretos. Puedes calcular la probabilidad simple de un evento a partir de casos favorables y posibles, obtener el complemento de un evento, combinar dos eventos con unión o intersección, o calcular la probabilidad de que algo ocurra al menos una vez en varios intentos.
              </p>
              <p>
                El resultado se muestra en formato decimal, porcentaje y fracción simplificada cuando corresponde. La herramienta aplica fórmulas estándar del cálculo de probabilidades y explica el método utilizado en cada caso.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div
              className="rounded-2xl px-6 py-5"
              style={{ background: '#0a3535' }}
            >
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                Fórmulas principales
              </p>
              <div className="flex flex-col gap-2 font-mono text-sm" style={{ color: '#D8A31A' }}>
                <span>P(A) = casos favorables / casos posibles</span>
                <span style={{ color: 'rgba(216,163,26,0.6)' }}>P(A&#x2019;) = 1 &minus; P(A)</span>
                <span style={{ color: 'rgba(216,163,26,0.6)' }}>P(A &cup; B) = P(A) + P(B) &minus; P(A &cap; B)</span>
                <span style={{ color: 'rgba(216,163,26,0.6)' }}>P(A &cap; B) = P(A) &times; P(B)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Rango válido', value: '0 a 1' },
                { label: 'Evento seguro', value: 'P = 1' },
                { label: 'Evento imposible', value: 'P = 0' },
                { label: 'Complemento', value: 'P + P&#x2019; = 1' },
              ].map(item => (
                <div
                  key={item.label}
                  className="rounded-xl px-4 py-3"
                  style={{ background: '#F8FAFC', border: '1px solid #D7E2EA' }}
                >
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>{item.label}</p>
                  <p className="font-mono text-base font-bold" style={{ color: '#102a43' }} dangerouslySetInnerHTML={{ __html: item.value }} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
