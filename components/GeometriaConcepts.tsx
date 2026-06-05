const concepts = [
  {
    symbol: 'A',
    title: 'Área',
    desc: 'Mide la superficie de una figura plana. Se expresa en unidades al cuadrado como cm² o m².',
    tool: 'Calculadora de Área',
  },
  {
    symbol: 'V',
    title: 'Volumen',
    desc: 'Mide el espacio que ocupa un cuerpo tridimensional. Se expresa en unidades cúbicas como cm³ o m³.',
    tool: 'Calculadora de Volumen',
  },
  {
    symbol: '△',
    title: 'Figuras planas',
    desc: 'Formas en dos dimensiones como triángulos, rectángulos, círculos y polígonos. Tienen área y perímetro.',
    tool: 'Calculadora de Triángulos',
  },
  {
    symbol: '∎',
    title: 'Cuerpos geométricos',
    desc: 'Formas en tres dimensiones como cubos, cilindros, esferas y conos. Tienen volumen y superficie.',
    tool: 'Calculadora de Volumen',
  },
  {
    symbol: 'C',
    title: 'Perímetro y circunferencia',
    desc: 'El perímetro es la longitud del contorno de una figura. La circunferencia es el perímetro de un círculo.',
    tool: 'Calculadora de Círculos',
  },
  {
    symbol: 'c²',
    title: 'Teorema de Pitágoras',
    desc: 'Relaciona los lados de un triángulo rectángulo: a² + b² = c², donde c es la hipotenusa.',
    tool: 'Calculadora de Pitágoras',
  },
];

export function GeometriaConcepts() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="concepts-geo-heading">
      <div className="site-shell">
        <p className="eyebrow">Conceptos</p>
        <h2
          id="concepts-geo-heading"
          className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]"
        >
          Conceptos de geometría incluidos
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map(c => (
            <article
              key={c.title}
              className="flex flex-col rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
            >
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ borderBottom: '1px solid #EEF4F7', background: '#F8FAFC' }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold"
                  style={{ background: '#DDF3F0', color: '#147c7c' }}
                  aria-hidden="true"
                >
                  {c.symbol}
                </div>
                <h3 className="text-sm font-bold leading-snug" style={{ color: '#102a43' }}>{c.title}</h3>
              </div>
              <div className="flex flex-1 flex-col px-5 py-4">
                <p className="flex-1 text-sm leading-relaxed" style={{ color: '#334e68' }}>{c.desc}</p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>
                  {c.tool}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
