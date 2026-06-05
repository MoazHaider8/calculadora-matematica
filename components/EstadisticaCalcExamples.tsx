const examples = [
  {
    n:     '1',
    title: 'Datos básicos',
    data:  '10, 8, 9, 7, 6',
    results: [
      { label: 'Media', value: '8' },
      { label: 'Mediana', value: '8' },
      { label: 'Rango', value: '4' },
    ],
    desc:  'Los cinco valores suman 40. La media y la mediana coinciden, lo que indica una distribución simétrica.',
  },
  {
    n:     '2',
    title: 'Con moda',
    data:  '2, 4, 4, 6, 8',
    results: [
      { label: 'Media', value: '4.8' },
      { label: 'Mediana', value: '4' },
      { label: 'Moda', value: '4' },
    ],
    desc:  'El valor 4 se repite dos veces, lo que lo convierte en la moda. La media es ligeramente superior a la mediana.',
  },
  {
    n:     '3',
    title: 'Calificaciones',
    data:  '85, 90, 78, 92, 88',
    results: [
      { label: 'Media', value: '86.6' },
      { label: 'Mínimo', value: '78' },
      { label: 'Máximo', value: '92' },
    ],
    desc:  'Cinco calificaciones con una media de 86.6. El rango de 14 puntos indica variación moderada entre ellas.',
  },
  {
    n:     '4',
    title: 'Valores decimales',
    data:  '2.5, 3.5, 4, 5',
    results: [
      { label: 'Media', value: '3.75' },
      { label: 'Rango', value: '2.5' },
      { label: 'Suma', value: '15' },
    ],
    desc:  'La calculadora admite valores decimales. La suma es 15 y la media resultante es 3.75.',
  },
  {
    n:     '5',
    title: 'Valores negativos',
    data:  '-2, 4, 8, 10',
    results: [
      { label: 'Media', value: '5' },
      { label: 'Rango', value: '12' },
      { label: 'Mínimo', value: '-2' },
    ],
    desc:  'El valor negativo desplaza la media. El rango es 12, desde -2 hasta 10.',
  },
];

export function EstadisticaCalcExamples() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="examples-ec-heading">
      <div className="site-shell">
        <p className="eyebrow">Práctica</p>
        <h2 id="examples-ec-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Ejemplos resueltos de estadística
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
                  <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-muted">Datos</p>
                  <p className="font-mono text-sm font-semibold text-ink">{ex.data}</p>
                </div>
              </div>

              <div
                className="mb-4 rounded-xl px-4 py-3"
                style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              >
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {ex.results.map(r => (
                    <div key={r.label}>
                      <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: '#0a4f4d' }}>{r.label}</p>
                      <p className="font-mono text-base font-bold" style={{ color: '#0a4f4d' }}>{r.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs leading-relaxed text-slate">{ex.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
