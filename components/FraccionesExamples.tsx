const examples = [
  {
    n: '1',
    label: 'Suma con distinto denominador',
    input: '1/2 + 3/4',
    result: '5/4 = 1 1/4',
    extra: 'Decimal: 1.25',
    explanation: 'Se usa denominador común 4. 1/2 = 2/4, luego 2/4 + 3/4 = 5/4.',
  },
  {
    n: '2',
    label: 'Resta de fracciones',
    input: '3/4 − 1/2',
    result: '1/4',
    extra: 'Decimal: 0.25',
    explanation: '1/2 se convierte en 2/4. Luego 3/4 − 2/4 = 1/4.',
  },
  {
    n: '3',
    label: 'Multiplicación y simplificación',
    input: '2/3 × 3/5',
    result: '2/5',
    extra: 'Decimal: 0.4',
    explanation: '2×3=6, 3×5=15. La fracción 6/15 se simplifica por MCD=3 a 2/5.',
  },
  {
    n: '4',
    label: 'División por recíproco',
    input: '3/4 ÷ 2/5',
    result: '15/8 = 1 7/8',
    extra: 'Decimal: 1.875',
    explanation: 'Se multiplica 3/4 por el recíproco de 2/5, que es 5/2. Resultado: 15/8.',
  },
  {
    n: '5',
    label: 'Simplificación por MCD',
    input: '12/18',
    result: '2/3',
    extra: 'Decimal: 0.667',
    explanation: 'MCD(12, 18) = 6. Se divide numerador y denominador entre 6.',
  },
];

export function FraccionesExamples() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="examples-frac-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Casos prácticos</p>
          <h2
            id="examples-frac-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Ejemplos resueltos de fracciones
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
                  <p className="mt-1 font-mono text-xs text-muted">{ex.extra}</p>
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
