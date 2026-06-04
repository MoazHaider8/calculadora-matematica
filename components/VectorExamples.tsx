const examples = [
  {
    n: '1',
    label: 'Suma de vectores',
    input: 'A = (2, 3)  ·  B = (4, 1)',
    result: 'A + B = (6, 4)',
    explanation: 'Se suman las componentes: (2 + 4, 3 + 1) = (6, 4).',
  },
  {
    n: '2',
    label: 'Resta de vectores',
    input: 'A = (5, 4)  ·  B = (2, 1)',
    result: 'A − B = (3, 3)',
    explanation: 'Se restan las componentes: (5 − 2, 4 − 1) = (3, 3).',
  },
  {
    n: '3',
    label: 'Producto punto',
    input: 'A = (2, 3)  ·  B = (4, 1)',
    result: 'A · B = 11',
    explanation: '2·4 + 3·1 = 8 + 3 = 11.',
  },
  {
    n: '4',
    label: 'Norma de un vector',
    input: 'A = (3, 4)',
    result: '||A|| = 5',
    explanation: '√(3² + 4²) = √(9 + 16) = √25 = 5.',
  },
  {
    n: '5',
    label: 'Producto cruz 3D',
    input: 'A = (1, 2, 3)  ·  B = (4, 5, 6)',
    result: 'A × B = (−3, 6, −3)',
    explanation: 'Resultado perpendicular a A y B. Componente x: 2·6 − 3·5 = −3.',
  },
];

export function VectorExamples() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="examples-vec-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Casos prácticos</p>
          <h2
            id="examples-vec-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Ejemplos resueltos de vectores
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
                  <p className="font-mono text-xs" style={{ color: '#334e68' }}>{ex.input}</p>
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
