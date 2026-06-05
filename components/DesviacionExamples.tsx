const examples = [
  {
    id: 1,
    datos: '10, 8, 9, 7, 6',
    media: '8',
    sigmaP: '1.4142',
    sigmaM: '1.5811',
    varP: '2',
    varM: '2.5',
    explicacion: 'La media es 8. La varianza poblacional es 2 y la muestral es 2.5. La desviación estándar es la raíz cuadrada de la varianza.',
    tag: 'Datos básicos',
  },
  {
    id: 2,
    datos: '8, 8, 9, 9, 10',
    media: '8.8',
    sigmaP: '0.7483',
    sigmaM: '0.8367',
    varP: '',
    varM: '',
    explicacion: 'Los valores están concentrados cerca de la media. La desviación estándar es baja, lo que indica poca dispersión.',
    tag: 'Dispersión baja',
  },
  {
    id: 3,
    datos: '2, 10, 18, 26, 34',
    media: '18',
    sigmaP: '11.3137',
    sigmaM: '12.6491',
    varP: '',
    varM: '',
    explicacion: 'Los valores están muy separados entre sí. La desviación estándar es alta, lo que refleja la gran variación del conjunto.',
    tag: 'Dispersión alta',
  },
  {
    id: 4,
    datos: '85, 90, 78, 92, 88',
    media: '86.6',
    sigmaP: '4.7497',
    sigmaM: '5.3132',
    varP: '',
    varM: '',
    explicacion: 'Calificaciones con dispersión moderada. La media es 86.6 y la desviación estándar indica la variación típica respecto a ese valor.',
    tag: 'Calificaciones',
  },
  {
    id: 5,
    datos: '2.5, 3.5, 4, 5',
    media: '3.75',
    sigmaP: '0.9014',
    sigmaM: '1.0408',
    varP: '',
    varM: '',
    explicacion: 'La calculadora admite valores decimales. El resultado se muestra con la precisión necesaria sin redondeos prematuros.',
    tag: 'Decimales',
  },
];

export function DesviacionExamples() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="examples-desv-heading">
      <div className="site-shell">
        <p className="eyebrow">Práctica</p>
        <h2 id="examples-desv-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Ejemplos resueltos de desviación estándar
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
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>Resultado</p>
                  <div className="flex flex-col gap-1">
                    <div>
                      <span className="font-mono text-xs font-semibold" style={{ color: '#829ab1' }}>σ = </span>
                      <span className="font-mono text-lg font-bold" style={{ color: '#0a4f4d' }}>{ex.sigmaP}</span>
                    </div>
                    <div>
                      <span className="font-mono text-xs font-semibold" style={{ color: '#829ab1' }}>s = </span>
                      <span className="font-mono text-lg font-bold" style={{ color: '#334e68' }}>{ex.sigmaM}</span>
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
