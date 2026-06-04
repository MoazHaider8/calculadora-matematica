export function ReglaTresWhatIs() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="whatis-rt-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Conceptos clave</p>
            <h2 id="whatis-rt-heading" className="mt-2 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              Qué calcula esta herramienta
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {[
                ['Regla de tres',       'Método para encontrar un valor desconocido X a partir de tres valores conocidos.'],
                ['Proporción',          'Relación de igualdad entre dos razones: A/B = C/X.'],
                ['Relación directa',    'Ambas magnitudes aumentan o disminuyen a la vez.'],
                ['Relación inversa',    'Una magnitud aumenta mientras la otra disminuye.'],
                ['Producto cruzado',    'Permite despejar X multiplicando en diagonal.'],
                ['Procedimiento',       'Muestra los pasos de multiplicación y división.'],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: '#0a4f4d' }} aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-slate">
                    <strong className="text-ink">{title}:</strong>{' '}{desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="academic-card p-7">
            <p className="text-sm leading-relaxed text-slate">
              La regla de tres es uno de los métodos más utilizados para resolver problemas de proporcionalidad. Permite encontrar un valor desconocido cuando se conocen tres valores relacionados entre sí.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              En la regla de tres directa, si A corresponde a B, entonces C corresponde a X. La fórmula es X = B × C / A. En la regla de tres inversa, la relación es opuesta y la fórmula es X = A × B / C.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Esta herramienta no está diseñada para calcular porcentajes como descuentos o aumentos. Para ese tipo de cálculo, usa la calculadora de porcentajes.
            </p>
            <div
              className="mt-5 rounded-xl px-5 py-4 font-mono text-sm"
              style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              aria-hidden="true"
            >
              <p style={{ color: '#0a4f4d' }}>Directa:  X = B × C / A</p>
              <p className="mt-1" style={{ color: '#0a4f4d' }}>Inversa:  X = A × B / C</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
