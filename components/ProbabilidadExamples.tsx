const examples = [
  {
    id: 1,
    type: 'Probabilidad simple',
    entrada: '3 casos favorables de 10 posibles',
    formula: 'P(A) = 3 / 10',
    resultado: '0.3',
    pct: '30%',
    explicacion: 'Si hay 3 casos favorables de 10 posibles, la probabilidad es 3/10 = 0.3.',
  },
  {
    id: 2,
    type: 'Complemento',
    entrada: 'P(A) = 0.7',
    formula: "P(A') = 1 − 0.7",
    resultado: '0.3',
    pct: '30%',
    explicacion: 'Si la probabilidad de que ocurra A es 0.7, la probabilidad de que no ocurra es 1 − 0.7 = 0.3.',
  },
  {
    id: 3,
    type: 'Unión de eventos',
    entrada: 'P(A) = 0.4, P(B) = 0.3, P(A ∩ B) = 0.1',
    formula: 'P(A ∪ B) = 0.4 + 0.3 − 0.1',
    resultado: '0.6',
    pct: '60%',
    explicacion: 'Se suman las probabilidades y se resta la intersección para no contarla dos veces.',
  },
  {
    id: 4,
    type: 'Intersección (eventos independientes)',
    entrada: 'P(A) = 0.5, P(B) = 0.4',
    formula: 'P(A ∩ B) = 0.5 × 0.4',
    resultado: '0.2',
    pct: '20%',
    explicacion: 'Para eventos independientes, la probabilidad de que ocurran los dos es el producto de sus probabilidades.',
  },
  {
    id: 5,
    type: 'Al menos uno en 3 intentos',
    entrada: 'p = 0.2, n = 3',
    formula: 'P = 1 − (1 − 0.2)^3',
    resultado: '0.488',
    pct: '48.8%',
    explicacion: 'Con probabilidad 0.2 por intento y 3 intentos, hay un 48.8% de probabilidad de que ocurra al menos una vez.',
  },
];

export function ProbabilidadExamples() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="examples-prob-heading">
      <div className="site-shell">
        <p className="eyebrow">Práctica</p>
        <h2 id="examples-prob-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Ejemplos resueltos de probabilidad
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
                <h3 className="text-sm font-bold" style={{ color: '#102a43' }}>{ex.type}</h3>
              </div>
              <div className="grid gap-0 sm:grid-cols-3">
                <div className="px-6 py-4" style={{ borderRight: '1px solid #EEF4F7' }}>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>Entrada</p>
                  <p className="text-sm font-semibold text-ink">{ex.entrada}</p>
                  <p className="mt-2 font-mono text-xs" style={{ color: '#334e68' }}>{ex.formula}</p>
                </div>
                <div className="px-6 py-4" style={{ borderRight: '1px solid #EEF4F7' }}>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>Resultado</p>
                  <p className="font-mono text-2xl font-bold" style={{ color: '#0a4f4d' }}>{ex.resultado}</p>
                  <span
                    className="mt-1 inline-block rounded-md px-2 py-0.5 font-mono text-xs font-bold"
                    style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  >
                    {ex.pct}
                  </span>
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
