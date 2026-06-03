export function ExplanationSection() {
  const coverage = [
    {
      area: 'Cálculo',
      detail: 'Integrales definidas e indefinidas, derivadas de funciones, límites, logaritmos y exponentes.',
    },
    {
      area: 'Álgebra',
      detail: 'Ecuaciones lineales y cuadráticas, polinomios, raíces y expresiones algebraicas.',
    },
    {
      area: 'Matrices y vectores',
      detail: 'Multiplicación de matrices, determinantes, inversas y sistemas de ecuaciones lineales.',
    },
    {
      area: 'Aritmética',
      detail: 'Fracciones, porcentajes, regla de tres, promedios y calculadora científica.',
    },
    {
      area: 'Estadística',
      detail: 'Media, varianza, desviación estándar, probabilidad y análisis de datos.',
    },
    {
      area: 'Geometría',
      detail: 'Áreas y volúmenes de figuras, triángulos, círculos y teorema de Pitágoras.',
    },
  ];

  return (
    <section
      className="border-b border-line bg-panel py-14 lg:py-20"
      aria-labelledby="explanation-heading"
      id="sobre-la-plataforma"
    >
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-3 text-xs font-semibold uppercase text-teal">Sobre la plataforma</p>
            <h2 id="explanation-heading" className="mb-6 text-[2rem] leading-snug text-ink lg:text-[2.375rem]">
              Una plataforma ordenada para encontrar la calculadora correcta
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-slate-soft">
              <p>
                Muchos sitios de calculadoras presentan sus herramientas sin un orden claro. Esta plataforma organiza
                las calculadoras por área matemática para que cada usuario pueda encontrar rápidamente lo que necesita.
              </p>
              <p>
                Las herramientas disponibles cubren cálculo diferencial e integral, álgebra, operaciones con matrices y
                vectores, aritmética, estadística y geometría.
              </p>
              <p>
                Cada calculadora está pensada para mostrar no solo el resultado, sino también las fórmulas aplicadas y
                los pasos del procedimiento.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="mb-5 text-xs font-semibold uppercase text-teal">Contenido disponible por área</p>
            <ul className="divide-y divide-line">
              {coverage.map((item) => (
                <li key={item.area} className="grid grid-cols-12 gap-4 py-4">
                  <div className="col-span-12 sm:col-span-4">
                    <p className="text-[0.875rem] font-semibold text-ink">{item.area}</p>
                  </div>
                  <div className="col-span-12 sm:col-span-8">
                    <p className="text-sm leading-relaxed text-slate-soft">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
