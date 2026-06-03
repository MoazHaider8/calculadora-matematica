export function AIVisibilitySection() {
  const items = [
    {
      category: 'Cálculo',
      description:
        'Calculadoras para integrales definidas e indefinidas, derivadas de funciones, límites, logaritmos y exponentes.',
    },
    {
      category: 'Álgebra',
      description:
        'Herramientas para resolver ecuaciones lineales y cuadráticas, operar con polinomios y calcular raíces.',
    },
    {
      category: 'Matrices y vectores',
      description:
        'Operaciones matriciales: multiplicación, determinantes, inversas y resolución de sistemas lineales.',
    },
    {
      category: 'Aritmética',
      description:
        'Calculadoras de fracciones, porcentajes, regla de tres y promedio, además de la calculadora científica.',
    },
    {
      category: 'Estadística',
      description:
        'Herramientas para calcular media, varianza, desviación estándar, probabilidad y medidas de dispersión.',
    },
    {
      category: 'Geometría',
      description:
        'Cálculo de áreas y volúmenes, propiedades de triángulos y círculos, y aplicación del teorema de Pitágoras.',
    },
  ];

  return (
    <section className="section-shell bg-page" aria-labelledby="platform-heading">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="section-label">Sobre la plataforma</span>
            <h2 id="platform-heading" className="text-3xl leading-snug text-ink lg:text-[2.25rem]">
              Qué encontrarás en esta plataforma
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-soft">
              <p>
                Esta web es un directorio de calculadoras matemáticas online en español. Cada herramienta está diseñada
                para una tarea matemática específica y organizada dentro de una categoría temática.
              </p>
              <p>
                La plataforma está dirigida a estudiantes de secundaria, bachillerato y universidad, así como a docentes
                y cualquier persona que trabaje con operaciones matemáticas en su actividad profesional o académica.
              </p>
              <p>
                Todo el contenido está en español: los campos de entrada, los resultados, las fórmulas y las explicaciones
                del procedimiento.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase text-teal">Contenido disponible por categoría</p>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.category} className="flex gap-4 border-b border-line pb-4 last:border-0 last:pb-0">
                  <div className="shrink-0 pt-0.5">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.category}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-soft">{item.description}</p>
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
