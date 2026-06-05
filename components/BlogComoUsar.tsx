export function BlogComoUsar() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="como-usar-heading">
      <div className="site-shell">
        <p className="eyebrow">Metodología</p>
        <h2 id="como-usar-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Cómo usar el blog con las calculadoras
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Los artículos del blog explican conceptos, fórmulas y ejemplos con pasos claros. Las calculadoras del sitio resuelven el cálculo de forma directa. Ambas herramientas funcionan de forma complementaria.
            </p>
            <p>
              Puedes leer un artículo para entender cómo funciona un tipo de cálculo, por ejemplo cómo se calcula un porcentaje o cuál es la fórmula del área de un triángulo, y luego usar la calculadora correspondiente para resolver tu caso concreto.
            </p>
            <p>
              Cada artículo incluirá un enlace a la calculadora más relacionada, para que puedas pasar del concepto al resultado sin buscar en otro sitio.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div
              className="rounded-2xl p-5"
              style={{ background: '#0a3535', border: '1px solid rgba(221,243,240,0.1)' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>Blog</p>
              <p className="mt-1.5 text-base font-bold text-white">Aprender</p>
              <p className="mt-1 text-xs leading-relaxed" style={{ color: 'rgba(221,243,240,0.65)' }}>
                Conceptos, fórmulas, ejemplos y pasos explicados para entender el procedimiento.
              </p>
            </div>
            <div
              className="rounded-2xl p-5"
              style={{ background: '#0a3535', border: '1px solid rgba(221,243,240,0.1)' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>Calculadoras</p>
              <p className="mt-1.5 text-base font-bold text-white">Calcular</p>
              <p className="mt-1 text-xs leading-relaxed" style={{ color: 'rgba(221,243,240,0.65)' }}>
                Introduce tus valores y obtén el resultado con la fórmula aplicada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
