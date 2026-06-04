const examples = [
  {
    n:      '1',
    type:   'Directa',
    title:  '3 cuadernos cuestan 150',
    result: 'X = 250',
    formula:'X = 150 × 5 / 3',
    steps:  ['150 × 5 = 750', '750 ÷ 3 = 250'],
    desc:   'Si 3 cuadernos cuestan 150, 5 cuadernos cuestan 250. Las magnitudes (cantidad y precio) aumentan juntas.',
  },
  {
    n:      '2',
    type:   'Inversa',
    title:  '4 trabajadores tardan 6 días',
    result: 'X = 3',
    formula:'X = 4 × 6 / 8',
    steps:  ['4 × 6 = 24', '24 ÷ 8 = 3'],
    desc:   'Si 4 trabajadores tardan 6 días, 8 trabajadores tardan 3 días. Al aumentar trabajadores, el tiempo disminuye.',
  },
  {
    n:      '3',
    type:   'Directa',
    title:  '2 litros rinden 500 ml',
    result: 'X = 1250',
    formula:'X = 500 × 5 / 2',
    steps:  ['500 × 5 = 2500', '2500 ÷ 2 = 1250'],
    desc:   'Si 2 litros producen 500 ml de mezcla, 5 litros producen 1250 ml. Relación directa entre cantidad e ingrediente.',
  },
  {
    n:      '4',
    type:   'Inversa',
    title:  'A 60 km/h se tarda 4 horas',
    result: 'X = 3',
    formula:'X = 60 × 4 / 80',
    steps:  ['60 × 4 = 240', '240 ÷ 80 = 3'],
    desc:   'A 60 km/h se tarda 4 horas en recorrer una distancia. A 80 km/h se tarda 3 horas. Velocidad y tiempo son inversamente proporcionales.',
  },
  {
    n:      '5',
    type:   'Directa',
    title:  '8 ejercicios valen 40 puntos',
    result: 'X = 60',
    formula:'X = 40 × 12 / 8',
    steps:  ['40 × 12 = 480', '480 ÷ 8 = 60'],
    desc:   'Si 8 ejercicios valen 40 puntos, 12 ejercicios valen 60 puntos. Proporción directa entre número de ejercicios y puntos.',
  },
];

export function ReglaTresExamples() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="examples-rt-heading">
      <div className="site-shell">
        <p className="eyebrow">Práctica</p>
        <h2 id="examples-rt-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Ejemplos resueltos de regla de tres
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map(ex => (
            <article key={ex.n} className="academic-card p-5">
              <div className="mb-4 flex items-start gap-3">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: '#0a4f4d' }}
                  aria-hidden="true"
                >
                  {ex.n}
                </span>
                <div className="flex-1">
                  <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-muted">Situación</p>
                  <p className="text-sm font-semibold text-ink">{ex.title}</p>
                  <span
                    className="mt-1 inline-block rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest"
                    style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  >
                    {ex.type}
                  </span>
                </div>
              </div>

              <div
                className="mb-4 rounded-xl px-4 py-3"
                style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              >
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#0a4f4d' }}>
                  Resultado
                </p>
                <p className="font-mono text-lg font-bold" style={{ color: '#0a4f4d' }}>{ex.result}</p>
              </div>

              <p className="mb-2 font-mono text-xs font-semibold text-slate">{ex.formula}</p>
              <div className="mb-3 flex flex-col gap-1">
                {ex.steps.map((s, i) => (
                  <p key={i} className="font-mono text-xs" style={{ color: '#334e68' }}>{s}</p>
                ))}
              </div>
              <p className="text-xs leading-relaxed text-slate">{ex.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
