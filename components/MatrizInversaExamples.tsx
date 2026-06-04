const examples = [
  {
    n: '1',
    label: 'Inversa 2×2',
    input: 'A = [[1, 2], [3, 4]]',
    result: 'A⁻¹ = [[-2, 1], [1.5, -0.5]]',
    badge: 'Invertible',
    badgeBg: '#DDF3F0',
    badgeColor: '#0F5C5C',
    explanation: 'det(A) = -2, por eso la matriz es invertible.',
  },
  {
    n: '2',
    label: 'Matriz escala 2×2',
    input: 'A = [[2, 0], [0, 2]]',
    result: 'A⁻¹ = [[0.5, 0], [0, 0.5]]',
    badge: 'Invertible',
    badgeBg: '#DDF3F0',
    badgeColor: '#0F5C5C',
    explanation: 'La matriz escala por 2, su inversa escala por 1/2.',
  },
  {
    n: '3',
    label: 'Matriz singular 2×2',
    input: 'A = [[1, 2], [2, 4]]',
    result: 'No tiene inversa',
    badge: 'Singular',
    badgeBg: 'rgba(185,28,28,0.08)',
    badgeColor: '#b91c1c',
    explanation: 'det(A) = 0, la segunda fila es múltiplo de la primera.',
  },
  {
    n: '4',
    label: 'Matriz identidad',
    input: 'A = I₃',
    result: 'A⁻¹ = I₃',
    badge: 'Invertible',
    badgeBg: '#DDF3F0',
    badgeColor: '#0F5C5C',
    explanation: 'La inversa de la matriz identidad es la misma identidad.',
  },
  {
    n: '5',
    label: 'Inversa 3×3',
    input: 'A = [[1,2,3],[0,1,4],[5,6,0]]',
    result: 'A⁻¹ = [[-24,18,5],[20,-15,-4],[-5,4,1]]',
    badge: 'Invertible',
    badgeBg: '#DDF3F0',
    badgeColor: '#0F5C5C',
    explanation: 'det(A) = 1, se obtiene con Gauss Jordan.',
  },
];

export function MatrizInversaExamples() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="examples-inv-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Casos prácticos</p>
          <h2
            id="examples-inv-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Ejemplos resueltos de matriz inversa
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
                    className="inline-block rounded-lg px-3 py-1 font-mono text-xs font-bold"
                    style={{ background: ex.badgeBg, color: ex.badgeColor }}
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
