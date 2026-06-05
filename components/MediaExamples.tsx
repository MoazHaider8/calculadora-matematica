const examples = [
  {
    id: 1,
    tag: 'Datos básicos',
    datos: '10, 8, 9, 7, 6',
    resultado: '8',
    formula: 'x̄ = 40 / 5',
    proc: '10 + 8 + 9 + 7 + 6 = 40 · 40 ÷ 5 = 8',
    explicacion: 'Se suman los 5 valores (suma = 40) y se divide entre la cantidad de datos (5). La media es 8.',
  },
  {
    id: 2,
    tag: 'Calificaciones',
    datos: '85, 90, 78, 92, 88',
    resultado: '86.6',
    formula: 'x̄ = 433 / 5',
    proc: '85 + 90 + 78 + 92 + 88 = 433 · 433 ÷ 5 = 86.6',
    explicacion: 'La media de las calificaciones es 86.6. Representa el rendimiento promedio del conjunto.',
  },
  {
    id: 3,
    tag: 'Decimales',
    datos: '2.5, 3.5, 4, 5',
    resultado: '3.75',
    formula: 'x̄ = 15 / 4',
    proc: '2.5 + 3.5 + 4 + 5 = 15 · 15 ÷ 4 = 3.75',
    explicacion: 'La calculadora admite decimales. La suma es 15 y la media es 3.75.',
  },
  {
    id: 4,
    tag: 'Valores negativos',
    datos: '-2, 4, 8, 10',
    resultado: '5',
    formula: 'x̄ = 20 / 4',
    proc: '-2 + 4 + 8 + 10 = 20 · 20 ÷ 4 = 5',
    explicacion: 'Los valores negativos se incluyen sin problema. La suma es 20 y la media es 5.',
  },
  {
    id: 5,
    tag: 'Media ponderada',
    datos: '80 (peso 30), 90 (peso 70)',
    resultado: '87',
    formula: 'x̄ = (80×30 + 90×70) / (30+70)',
    proc: '(2400 + 6300) ÷ 100 = 87',
    explicacion: 'El valor 90 con peso 70 influye más que 80 con peso 30. La media ponderada es 87.',
  },
];

export function MediaExamples() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="examples-media-heading">
      <div className="site-shell">
        <p className="eyebrow">Práctica</p>
        <h2 id="examples-media-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Ejemplos resueltos de media
        </h2>
        <div className="flex flex-col gap-5">
          {examples.map(ex => (
            <article
              key={ex.id}
              className="overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 1px 8px rgba(16,42,67,0.05)' }}
            >
              <div
                className="flex items-center gap-3 px-6 py-4"
                style={{ background: '#F8FAFC', borderBottom: '1px solid #EEF4F7' }}
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold"
                  style={{ background: '#0a3535', color: '#D8A31A' }}
                  aria-hidden="true"
                >
                  {ex.id}
                </span>
                <h3 className="text-sm font-bold" style={{ color: '#102a43' }}>{ex.tag}</h3>
              </div>
              <div className="grid gap-0 sm:grid-cols-3">
                <div className="px-6 py-4" style={{ borderRight: '1px solid #EEF4F7' }}>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>Datos</p>
                  <p className="font-mono text-sm font-semibold text-ink">{ex.datos}</p>
                  <p className="mt-2 font-mono text-xs" style={{ color: '#829ab1' }}>{ex.formula}</p>
                </div>
                <div className="px-6 py-4" style={{ borderRight: '1px solid #EEF4F7' }}>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>Media</p>
                  <p className="font-mono text-2xl font-bold" style={{ color: '#0a4f4d' }}>x&#x0304; = {ex.resultado}</p>
                  <p className="mt-2 font-mono text-[10px]" style={{ color: '#829ab1' }}>{ex.proc}</p>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>Explicación</p>
                  <p className="text-sm leading-relaxed text-slate">{ex.explicacion}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
