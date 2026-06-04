const examples = [
  {
    n:      '1',
    type:   'Simple',
    title:  'Notas básicas',
    values: '10, 8, 9, 7',
    result: '8.5',
    steps:  ['10 + 8 + 9 + 7 = 34', '34 ÷ 4 = 8.5'],
    desc:   'La suma de las cuatro notas es 34. Al dividir entre 4 se obtiene el promedio 8.5.',
  },
  {
    n:      '2',
    type:   'Simple',
    title:  'Calificaciones escolares',
    values: '85, 90, 78, 92',
    result: '86.25',
    steps:  ['85 + 90 + 78 + 92 = 345', '345 ÷ 4 = 86.25'],
    desc:   'Cuatro calificaciones con suma de 345. El promedio es 86.25 puntos.',
  },
  {
    n:      '3',
    type:   'Simple',
    title:  'Valores decimales',
    values: '2.5, 3.5, 4',
    result: '3.3333',
    steps:  ['2.5 + 3.5 + 4 = 10', '10 ÷ 3 = 3.3333'],
    desc:   'La suma de los tres valores es 10. El promedio es 3.3333 (período de 3).',
  },
  {
    n:      '4',
    type:   'Simple',
    title:  'Temperaturas diarias',
    values: '18, 20, 22, 21',
    result: '20.25',
    steps:  ['18 + 20 + 22 + 21 = 81', '81 ÷ 4 = 20.25'],
    desc:   'Cuatro temperaturas registradas durante la semana. El promedio diario es 20.25 °C.',
  },
  {
    n:      '5',
    type:   'Ponderado',
    title:  'Nota final con pesos distintos',
    values: '80 (peso 30), 90 (peso 70)',
    result: '87',
    steps:  ['(80×30 + 90×70) ÷ 100', '(2400 + 6300) ÷ 100 = 87'],
    desc:   'El segundo valor tiene más peso. Su influencia es mayor en el resultado final.',
  },
];

export function PromedioExamples() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="examples-prom-heading">
      <div className="site-shell">
        <p className="eyebrow">Práctica</p>
        <h2 id="examples-prom-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Ejemplos resueltos de promedio
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
                  <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-muted">Valores</p>
                  <p className="font-mono text-sm font-semibold text-ink">{ex.values}</p>
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
                  Promedio
                </p>
                <p className="font-mono text-lg font-bold" style={{ color: '#0a4f4d' }}>{ex.result}</p>
              </div>

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
