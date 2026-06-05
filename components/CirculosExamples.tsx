const examples = [
  {
    input: { label: 'Radio', value: '4', unit: 'cm' },
    results: [
      { label: 'Diámetro',       value: '8 cm'          },
      { label: 'Circunferencia', value: '≈ 25.1327 cm'  },
      { label: 'Área',           value: '≈ 50.2655 cm²' },
    ],
    procedure: 'd = 2 × 4 = 8\nC = 2 × π × 4 ≈ 25.1327\nA = π × 4² ≈ 50.2655',
  },
  {
    input: { label: 'Diámetro', value: '10', unit: 'cm' },
    results: [
      { label: 'Radio',          value: '5 cm'          },
      { label: 'Circunferencia', value: '≈ 31.4159 cm'  },
      { label: 'Área',           value: '≈ 78.5398 cm²' },
    ],
    procedure: 'r = 10 / 2 = 5\nC = π × 10 ≈ 31.4159\nA = π × 5² ≈ 78.5398',
  },
  {
    input: { label: 'Circunferencia', value: '25.1327', unit: 'cm' },
    results: [
      { label: 'Radio',          value: '≈ 4 cm'         },
      { label: 'Diámetro',       value: '≈ 8 cm'         },
      { label: 'Área',           value: '≈ 50.2655 cm²'  },
    ],
    procedure: 'r = 25.1327 / (2π) ≈ 4\nd = 25.1327 / π ≈ 8\nA = π × 4² ≈ 50.2655',
  },
  {
    input: { label: 'Área', value: '50.2655', unit: 'cm²' },
    results: [
      { label: 'Radio',          value: '≈ 4 cm'        },
      { label: 'Diámetro',       value: '≈ 8 cm'        },
      { label: 'Circunferencia', value: '≈ 25.1327 cm'  },
    ],
    procedure: 'r = √(50.2655 / π) ≈ 4\nd = 2 × 4 ≈ 8\nC = 2 × π × 4 ≈ 25.1327',
  },
  {
    input: { label: 'Radio', value: '7.5', unit: 'cm' },
    results: [
      { label: 'Diámetro',       value: '15 cm'          },
      { label: 'Circunferencia', value: '≈ 47.1239 cm'   },
      { label: 'Área',           value: '≈ 176.7146 cm²' },
    ],
    procedure: 'd = 2 × 7.5 = 15\nC = 2 × π × 7.5 ≈ 47.1239\nA = π × 7.5² ≈ 176.7146',
  },
];

export function CirculosExamples() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="examples-circ-heading">
      <div className="site-shell">
        <p className="eyebrow">Práctica</p>
        <h2 id="examples-circ-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Ejemplos resueltos de círculos
        </h2>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {examples.map((ex, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div className="flex items-center justify-between px-5 py-3" style={{ background: '#0a3535' }}>
                <span className="font-mono text-sm font-bold" style={{ color: '#D8A31A' }}>
                  {ex.input.label} = {ex.input.value} {ex.input.unit}
                </span>
                <span
                  className="ml-2 rounded-md px-2 py-0.5 text-[10px] font-bold"
                  style={{ background: 'rgba(221,243,240,0.12)', color: 'rgba(221,243,240,0.7)' }}
                >
                  Ej. {i + 1}
                </span>
              </div>
              <div className="px-5 py-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Resultados</p>
                <ul className="mb-3 space-y-1">
                  {ex.results.map(r => (
                    <li key={r.label} className="flex justify-between text-xs">
                      <span className="text-slate">{r.label}</span>
                      <span className="font-mono font-bold text-ink">{r.value}</span>
                    </li>
                  ))}
                </ul>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Procedimiento</p>
                <pre className="whitespace-pre-wrap font-mono text-xs" style={{ color: '#627d98' }}>{ex.procedure}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
