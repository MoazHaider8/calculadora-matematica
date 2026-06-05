const concepts = [
  {
    sym: 'r',
    title: 'Radio',
    points: [
      'Distancia del centro al borde del círculo.',
      'Sirve como base para calcular diámetro, circunferencia y área.',
      'Es la mitad del diámetro.',
    ],
  },
  {
    sym: 'd',
    title: 'Diámetro',
    points: [
      'Mide de borde a borde pasando por el centro.',
      'Equivale al doble del radio: d = 2r.',
      'Es la cuerda más larga del círculo.',
    ],
  },
  {
    sym: 'C',
    title: 'Circunferencia',
    points: [
      'Contorno o perímetro del círculo.',
      'Se calcula con la fórmula C = 2πr.',
      'Se expresa en unidades lineales como cm o m.',
    ],
  },
  {
    sym: 'A',
    title: 'Área',
    points: [
      'Superficie interior del círculo.',
      'Se calcula con la fórmula A = πr².',
      'Se expresa en unidades cuadradas como cm² o m².',
    ],
  },
];

export function CirculosConcepts() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="concepts-circ-heading">
      <div className="site-shell">
        <p className="eyebrow">Conceptos</p>
        <h2 id="concepts-circ-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Radio, diámetro, área y circunferencia
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {concepts.map(c => (
            <div
              key={c.sym}
              className="rounded-2xl bg-white p-5"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl font-mono text-sm font-bold"
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
