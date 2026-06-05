const examples = [
  {
    id: 1,
    tag: 'Datos básicos',
    datos: '10, 8, 9, 7, 6',
    media: '8',
    varP: '2',
    varM: '2.5',
    explicacion: 'La media es 8. La suma de diferencias cuadradas es 10. Varianza pob. = 10/5 = 2, varianza muestral = 10/4 = 2.5.',
  },
  {
    id: 2,
    tag: 'Baja dispersión',
    datos: '8, 8, 9, 9, 10',
    media: '8.8',
    varP: '0.56',
    varM: '0.7',
    explicacion: 'Los valores están cerca de la media. La varianza es baja, lo que indica que el conjunto tiene poca variación.',
  },
  {
    id: 3,
    tag: 'Alta dispersión',
    datos: '2, 10, 18, 26, 34',
    media: '18',
    varP: '128',
    varM: '160',
    explicacion: 'Los valores están muy separados. La varianza es alta porque las diferencias respecto a la media son grandes.',
  },
  {
    id: 4,
    tag: 'Calificaciones',
    datos: '85, 90, 78, 92, 88',
    media: '86.6',
    varP: '22.64',
    varM: '28.3',
    explicacion: 'Calificaciones con varianza moderada. Hay diferencias entre notas, pero el conjunto no está muy disperso.',
  },
  {
    id: 5,
    tag: 'Decimales',
    datos: '2.5, 3.5, 4, 5',
    media: '3.75',
    varP: '0.8125',
    varM: '1.0833',
    explicacion: 'La calculadora admite valores decimales. La varianza se calcula con la misma fórmula y precisión.',
  },
];

export function VarianzaExamples() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="examples-var-heading">
      <div className="site-shell">
        <p className="eyebrow">Práctica</p>
        <h2 id="examples-var-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Ejemplos resueltos de varianza
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
                  <p className="mt-2 text-xs" style={{ color: '#829ab1' }}>Media = {ex.media}</p>
                </div>
                <div className="px-6 py-4" style={{ borderRight: '1px solid #EEF4F7' }}>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>Varianza</p>
                  <div className="flex flex-col gap-1">
                    <div>
                      <span className="font-mono text-xs font-semibold" style={{ color: '#829ab1' }}>&sigma;&sup2; = </span>
                      <span className="font-mono text-lg font-bold" style={{ color: '#0a4f4d' }}>{ex.varP}</span>
                    </div>
                    <div>
                      <span className="font-mono text-xs font-semibold" style={{ color: '#829ab1' }}>s&sup2; = </span>
                      <span className="font-mono text-lg font-bold" style={{ color: '#334e68' }}>{ex.varM}</span>
                    </div>
                  </div>
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
