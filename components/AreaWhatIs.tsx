export function AreaWhatIs() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="whatis-area-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Concepto</p>
            <h2 id="whatis-area-heading" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              Qué calcula esta herramienta
            </h2>
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-slate">
              <p>
                El área mide la <strong>superficie</strong> de una figura plana. Se expresa en <strong>unidades cuadradas</strong> como cm², m² o mm². Esta calculadora obtiene el área de siete figuras geométricas comunes a partir de sus medidas básicas.
              </p>
              <p>
                Las figuras disponibles son: <strong>cuadrado</strong> (lado), <strong>rectángulo</strong> (base y altura), <strong>triángulo</strong> (base y altura), <strong>círculo</strong> (radio), <strong>trapecio</strong> (base mayor, base menor y altura), <strong>paralelogramo</strong> (base y altura) y <strong>rombo</strong> (diagonales).
              </p>
              <p>
                Esta herramienta calcula áreas de figuras planas. No calcula volúmenes de cuerpos tridimensionales, ni resuelve triángulos con ángulos o lados desconocidos.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl px-6 py-5" style={{ background: '#0a3535' }}>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                Fórmulas principales
              </p>
              <div className="flex flex-col gap-2 font-mono text-sm" style={{ color: '#D8A31A' }}>
                <span>A = lado&sup2;</span>
                <span style={{ color: 'rgba(216,163,26,0.7)' }}>A = base &times; altura</span>
                <span style={{ color: 'rgba(216,163,26,0.55)' }}>A = &pi;r&sup2;</span>
                <span style={{ color: 'rgba(216,163,26,0.45)' }}>A = D &times; d / 2</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Figuras',    value: '7'            },
                { label: 'Resultado',  value: 'en cm², m²...' },
                { label: 'Entrada',    value: 'medidas'      },
                { label: 'Tipo',       value: 'plana / 2D'   },
              ].map(item => (
                <div
                  key={item.label}
                  className="rounded-xl px-4 py-3"
                  style={{ background: '#F8FAFC', border: '1px solid #D7E2EA' }}
                >
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>{item.label}</p>
                  <p className="font-mono text-sm font-bold" style={{ color: '#102a43' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
