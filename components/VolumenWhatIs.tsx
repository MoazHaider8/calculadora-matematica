export function VolumenWhatIs() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="whatis-vol-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Concepto</p>
            <h2 id="whatis-vol-heading" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              Qué calcula esta herramienta
            </h2>
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-slate">
              <p>
                El volumen mide el <strong>espacio que ocupa un cuerpo geométrico</strong> en tres dimensiones. Se expresa en <strong>unidades cúbicas</strong> como cm³, m³ o mm³.
              </p>
              <p>
                Esta calculadora obtiene el volumen de siete sólidos geométricos: <strong>cubo</strong> (lado), <strong>prisma rectangular</strong> (largo, ancho y altura), <strong>cilindro</strong> (radio y altura), <strong>cono</strong> (radio y altura), <strong>esfera</strong> (radio), <strong>pirámide</strong> (área de la base y altura) y <strong>prisma triangular</strong> (base, altura del triángulo y longitud).
              </p>
              <p>
                Esta herramienta calcula volúmenes de cuerpos geométricos. No calcula áreas de figuras planas ni resuelve geometría de triángulos o círculos de forma independiente.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl px-6 py-5" style={{ background: '#0a3535' }}>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.45)' }}>
                Fórmulas principales
              </p>
              <div className="flex flex-col gap-2 font-mono text-sm" style={{ color: '#D8A31A' }}>
                <span>V = l &times; w &times; h</span>
                <span style={{ color: 'rgba(216,163,26,0.7)' }}>V = &pi;r&sup2;h</span>
                <span style={{ color: 'rgba(216,163,26,0.55)' }}>V = 4/3 &times; &pi;r&sup3;</span>
                <span style={{ color: 'rgba(216,163,26,0.45)' }}>V = &Aacute;_base &times; h / 3</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Cuerpos',   value: '7'           },
                { label: 'Resultado', value: 'cm³, m³...'  },
                { label: 'Entrada',   value: 'medidas'     },
                { label: 'Tipo',      value: 'sólido / 3D' },
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
