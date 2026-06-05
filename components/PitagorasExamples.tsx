const examples = [
  {
    heading: 'Catetos 3 y 4',
    given: [{ label: 'Cateto A', value: '3' }, { label: 'Cateto B', value: '4' }],
    result: { label: 'Hipotenusa', value: '5' },
    procedure: 'c = √(3² + 4²)\nc = √(9 + 16)\nc = √25\nc = 5',
    verification: '3² + 4² = 5²\n9 + 16 = 25',
  },
  {
    heading: 'Catetos 5 y 12',
    given: [{ label: 'Cateto A', value: '5' }, { label: 'Cateto B', value: '12' }],
    result: { label: 'Hipotenusa', value: '13' },
    procedure: 'c = √(5² + 12²)\nc = √(25 + 144)\nc = √169\nc = 13',
    verification: '5² + 12² = 13²\n25 + 144 = 169',
  },
  {
    heading: 'Hipotenusa 5, cateto B 4',
    given: [{ label: 'Hipotenusa', value: '5' }, { label: 'Cateto B', value: '4' }],
    result: { label: 'Cateto A', value: '3' },
    procedure: 'a = √(5² - 4²)\na = √(25 - 16)\na = √9\na = 3',
    verification: '3² + 4² = 5²\n9 + 16 = 25',
  },
  {
    heading: 'Hipotenusa 13, cateto A 5',
    given: [{ label: 'Hipotenusa', value: '13' }, { label: 'Cateto A', value: '5' }],
    result: { label: 'Cateto B', value: '12' },
    procedure: 'b = √(13² - 5²)\nb = √(169 - 25)\nb = √144\nb = 12',
    verification: '5² + 12² = 13²\n25 + 144 = 169',
  },
  {
    heading: 'Catetos 2.5 y 6 (decimal)',
    given: [{ label: 'Cateto A', value: '2.5' }, { label: 'Cateto B', value: '6' }],
    result: { label: 'Hipotenusa', value: '6.5' },
    procedure: 'c = √(2.5² + 6²)\nc = √(6.25 + 36)\nc = √42.25\nc = 6.5',
    verification: '2.5² + 6² = 6.5²\n6.25 + 36 = 42.25',
  },
];

export function PitagorasExamples() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="examples-pit-heading">
      <div className="site-shell">
        <p className="eyebrow">Práctica</p>
        <h2 id="examples-pit-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Ejemplos resueltos de Pitágoras
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
                  {ex.heading}
                </span>
                <span
                  className="ml-2 rounded-md px-2 py-0.5 text-[10px] font-bold"
                  style={{ background: 'rgba(221,243,240,0.12)', color: 'rgba(221,243,240,0.7)' }}
                >
                  Ej. {i + 1}
                </span>
              </div>
              <div className="px-5 py-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Datos</p>
                <ul className="mb-3 space-y-1">
                  {ex.given.map(g => (
                    <li key={g.label} className="flex justify-between text-xs">
                      <span className="text-slate">{g.label}</span>
                      <span className="font-mono font-bold text-ink">{g.value}</span>
                    </li>
                  ))}
                </ul>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Resultado</p>
                <p className="mb-3 font-mono text-sm font-bold text-ink">
                  {ex.result.label} = {ex.result.value}
                </p>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Procedimiento</p>
                <pre className="mb-3 whitespace-pre-wrap font-mono text-xs" style={{ color: '#627d98' }}>{ex.procedure}</pre>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Comprobación</p>
                <pre className="whitespace-pre-wrap font-mono text-xs" style={{ color: '#627d98' }}>{ex.verification}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
