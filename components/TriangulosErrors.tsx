const errors = [
  {
    title: 'Lados que no forman un triángulo',
    desc:  'Para que tres lados formen un triángulo, la suma de dos lados cualesquiera debe ser mayor que el tercer lado.',
  },
  {
    title: 'Olvidar dividir entre 2 en el área',
    desc:  'El área del triángulo es base × altura dividido entre 2. Sin esa división el resultado es el área de un rectángulo.',
  },
  {
    title: 'Confundir altura con lado inclinado',
    desc:  'La altura es la distancia perpendicular desde la base hasta el vértice opuesto, no el lado inclinado del triángulo.',
  },
  {
    title: 'Ángulos que superan 180°',
    desc:  'La suma de los tres ángulos internos de un triángulo siempre es exactamente 180°. Dos ángulos no pueden sumar 180° o más.',
  },
  {
    title: 'Unidades cuadradas en lados',
    desc:  'Los lados y la altura se miden en unidades lineales (cm, m). El área se expresa en unidades cuadradas (cm², m²).',
  },
  {
    title: 'Tratar cualquier triángulo como rectángulo',
    desc:  'No todo triángulo tiene un ángulo de 90°. Solo el triángulo rectángulo cumple la relación a² + b² = c².',
  },
];

export function TriangulosErrors() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="errors-tri-heading">
      <div className="site-shell">
        <p className="eyebrow">Errores frecuentes</p>
        <h2 id="errors-tri-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Errores comunes al calcular triángulos
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {errors.map(e => (
            <div
              key={e.title}
              className="rounded-2xl bg-white px-5 py-5"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div className="mb-2 flex items-start gap-2">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: '#cc3d3d' }}
                  aria-hidden="true"
                >
                  !
                </span>
                <p className="text-sm font-bold text-ink">{e.title}</p>
              </div>
              <p className="text-xs leading-relaxed text-slate">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
