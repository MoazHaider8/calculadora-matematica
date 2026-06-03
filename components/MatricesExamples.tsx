const examples = [
  {
    entrada: 'A = [[1,2],[3,4]]  B = [[5,6],[7,8]]',
    resultado: 'A + B = [[6,8],[10,12]]',
    explicacion: 'Se suman los elementos en la misma posición: 1+5=6, 2+6=8, 3+7=10, 4+8=12.',
  },
  {
    entrada: 'A = [[5,6],[7,8]]  B = [[1,2],[3,4]]',
    resultado: 'A - B = [[4,4],[4,4]]',
    explicacion: 'Se restan los elementos en la misma posición: 5-1=4, 6-2=4, 7-3=4, 8-4=4.',
  },
  {
    entrada: 'A = [[1,2],[3,4]]  B = [[2,0],[1,2]]',
    resultado: 'A × B = [[4,4],[10,8]]',
    explicacion: 'Elemento (1,1): 1·2 + 2·1 = 4. Elemento (2,2): 3·0 + 4·2 = 8.',
  },
  {
    entrada: 'A = [[1,2,3],[4,5,6]]',
    resultado: 'Aᵀ = [[1,4],[2,5],[3,6]]',
    explicacion: 'La matriz 2×3 se convierte en 3×2: las filas pasan a ser columnas.',
  },
  {
    entrada: 'k = 3   A = [[1,2],[3,4]]',
    resultado: '3A = [[3,6],[9,12]]',
    explicacion: 'Cada elemento se multiplica por 3: 1·3=3, 2·3=6, 3·3=9, 4·3=12.',
  },
];

export function MatricesExamples() {
  return (
    <section className="bg-panel py-8 lg:py-12" aria-labelledby="examples-matrices-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Práctica</p>
          <h2 id="examples-matrices-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Ejemplos resueltos de matrices
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex, i) => (
            <div key={i} className="academic-card p-5">
              <div className="mb-3 flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  style={{ background: '#0A4F4D' }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Entrada</p>
                  <p className="font-mono text-xs font-semibold text-ink leading-relaxed">{ex.entrada}</p>
                </div>
              </div>
              <div
                className="mb-3 rounded-lg px-4 py-2.5"
                style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-teal">Resultado</p>
                <p className="font-mono text-sm font-bold text-deep-teal">{ex.resultado}</p>
              </div>
              <p className="text-xs leading-relaxed text-slate">{ex.explicacion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
