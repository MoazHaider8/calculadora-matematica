const examples = [
  {
    n: '1',
    label: 'Porcentaje de un número',
    input: '25% de 200',
    result: '50',
    explanation: '200 × 25 / 100 = 50.',
  },
  {
    n: '2',
    label: 'Qué porcentaje representa',
    input: '50 de 200',
    result: '25%',
    explanation: '50 / 200 × 100 = 25%.',
  },
  {
    n: '3',
    label: 'Precio con descuento',
    input: '200 con 20% de descuento',
    result: '160',
    explanation: 'El descuento es 40. Precio final: 200 − 40 = 160.',
  },
  {
    n: '4',
    label: 'Aumento porcentual',
    input: '200 aumentado en 15%',
    result: '230',
    explanation: 'El aumento es 30. Valor final: 200 + 30 = 230.',
  },
  {
    n: '5',
    label: 'Cambio porcentual',
    input: '80 a 100',
    result: '+25%',
    explanation: '(100 − 80) / 80 × 100 = 25%. El valor aumentó un 25%.',
  },
];

export function PorcentajesExamples() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="examples-pct-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Casos prácticos</p>
          <h2
            id="examples-pct-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Ejemplos resueltos de porcentajes
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex) => (
            <article
              key={ex.n}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              <div
                className="flex items-center gap-3 px-5 py-3"
                style={{ background: '#F0FAF9', borderBottom: '1px solid #D7E2EA' }}
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-bold text-xs"
                  style={{ background: '#0a3535', color: '#D8A31A' }}
                  aria-hidden="true"
                >
                  {ex.n}
                </span>
                <p className="text-xs font-bold" style={{ color: '#102a43' }}>{ex.label}</p>
              </div>

              <div className="flex flex-1 flex-col gap-3 px-5 py-4">
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Entrada</p>
                  <p className="font-mono text-sm font-semibold" style={{ color: '#334e68' }}>{ex.input}</p>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Resultado</p>
                  <span
                    className="inline-block rounded-lg px-3 py-1 font-mono text-sm font-bold"
                    style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  >
                    {ex.result}
                  </span>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Explicación</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#627d98' }}>{ex.explanation}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
