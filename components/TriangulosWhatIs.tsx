export function TriangulosWhatIs() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="whatis-tri-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

          <div>
            <p className="eyebrow">Sobre esta herramienta</p>
            <h2 id="whatis-tri-heading" className="mt-2 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              Qué calcula esta herramienta
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate">
              <p>
                Esta calculadora permite trabajar con triángulos de cuatro formas diferentes. Con la base y la altura se obtiene el área directamente. Con los tres lados se calcula el área usando la fórmula de Herón, el perímetro, el semiperímetro y el tipo de triángulo según sus lados.
              </p>
              <p>
                Si se conocen dos ángulos internos, la calculadora determina el tercer ángulo a partir de la propiedad de que la suma de los ángulos de un triángulo siempre es 180°. El modo de triángulo equilátero calcula el perímetro, la altura y el área usando únicamente la longitud del lado.
              </p>
              <p>
                Esta página se enfoca en triángulos. Para calcular áreas de varias figuras planas a la vez, usa la calculadora de área. Para cuerpos geométricos, usa la calculadora de volumen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { sym: 'A', label: 'Área', desc: 'Superficie del triángulo en unidades cuadradas' },
              { sym: 'P', label: 'Perímetro', desc: 'Suma de los tres lados del triángulo' },
              { sym: '∠', label: 'Ángulos', desc: 'Tercer ángulo a partir de dos conocidos' },
              { sym: 's', label: 'Semiperímetro', desc: 'Mitad del perímetro, usado en la fórmula de Herón' },
            ].map(item => (
              <div
                key={item.label}
                className="rounded-xl p-4"
                style={{ background: '#F8FAFC', border: '1px solid #D7E2EA' }}
              >
                <div
                  className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg font-mono text-sm font-bold"
                  style={{ background: '#DDF3F0', color: '#147c7c' }}
                  aria-hidden="true"
                >
                  {item.sym}
                </div>
                <p className="text-xs font-bold text-ink">{item.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
