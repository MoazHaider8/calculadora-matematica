const concepts = [
  {
    sym: 'c',
    title: 'Hipotenusa',
    points: [
      'Lado más largo del triángulo rectángulo.',
      'Está siempre frente al ángulo recto.',
      'Se representa como c en la fórmula.',
    ],
  },
  {
    sym: 'a, b',
    title: 'Catetos',
    points: [
      'Los dos lados que forman el ángulo recto.',
      'Se representan como a y b.',
      'Sus cuadrados se suman para obtener c².',
    ],
  },
  {
    sym: '90°',
    title: 'Triángulo rectángulo',
    points: [
      'Tiene un ángulo interior de exactamente 90°.',
      'Es el único tipo de triángulo donde aplica Pitágoras.',
      'Los catetos son los lados que encierran el ángulo recto.',
    ],
  },
];

export function PitagorasConcepts() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="concepts-pit-heading">
      <div className="site-shell">
        <p className="eyebrow">Conceptos</p>
        <h2 id="concepts-pit-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Hipotenusa y catetos
        </h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {concepts.map(c => (
            <div
              key={c.sym}
              className="rounded-2xl bg-white p-5"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl font-mono text-xs font-bold"
                style={{ background: '#DDF3F0', color: '#147c7c' }}
                aria-hidden="true"
              >
                {c.sym}
              </div>
              <p className="mb-2 text-sm font-bold text-ink">{c.title}</p>
              <ul className="space-y-1">
                {c.points.map(p => (
                  <li key={p} className="flex gap-1.5 text-xs leading-relaxed text-slate">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
