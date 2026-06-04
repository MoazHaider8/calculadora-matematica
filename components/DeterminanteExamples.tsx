const examples = [
  {
    n: '1',
    label: 'Matriz 2×2',
    input: '[[1, 2], [3, 4]]',
    result: 'det(A) = −2',
    explanation: '1·4 − 2·3 = −2',
    singular: false,
  },
  {
    n: '2',
    label: 'Matriz 2×2 diagonal',
    input: '[[2, 0], [0, 2]]',
    result: 'det(A) = 4',
    explanation: '2·2 − 0·0 = 4',
    singular: false,
  },
  {
    n: '3',
    label: 'Matriz 3×3 (Sarrus)',
    input: '[[1, 2, 3], [0, 1, 4], [5, 6, 0]]',
    result: 'det(A) = 1',
    explanation: 'Expansión por primera fila. Resultado: 1·(−24) − 2·(−20) + 3·(−5) = 1',
    singular: false,
  },
  {
    n: '4',
    label: 'Matriz singular',
    input: '[[1, 2], [2, 4]]',
    result: 'det(A) = 0',
    explanation: '1·4 − 2·2 = 0. La segunda fila es múltiplo de la primera.',
    singular: true,
  },
  {
    n: '5',
    label: 'Matriz identidad 3×3',
    input: 'I₃ = [[1,0,0],[0,1,0],[0,0,1]]',
    result: 'det(I) = 1',
    explanation: 'El determinante de cualquier matriz identidad es siempre 1.',
    singular: false,
  },
];

export function DeterminanteExamples() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="examples-det-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Casos prácticos</p>
          <h2
            id="examples-det-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Ejemplos resueltos de determinantes
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

              <div className="flex flex-1 flex-col px-5 py-4 gap-3">
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Entrada</p>
                  <p className="font-mono text-xs" style={{ color: '#334e68' }}>{ex.input}</p>
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Resultado</p>
                  <span
                    className="inline-block rounded-lg px-3 py-1 font-mono text-sm font-bold"
                    style={
                      ex.singular
                        ? { background: '#FEF2F2', color: '#b91c1c' }
                        : { background: '#DDF3F0', color: '#0F5C5C' }
                    }
                  >
                    {ex.result}
                    {ex.singular && (
                      <span className="ml-2 text-[10px] uppercase tracking-wider">Singular</span>
                    )}
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
