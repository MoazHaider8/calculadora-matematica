const formulas = [
  {
    name:    'Área con base y altura',
    formula: 'A = base × altura / 2',
    inputs:  'base, altura',
    symbol:  'A',
  },
  {
    name:    'Perímetro',
    formula: 'P = a + b + c',
    inputs:  'tres lados',
    symbol:  'P',
  },
  {
    name:    'Semiperímetro',
    formula: 's = P / 2',
    inputs:  'perímetro',
    symbol:  's',
  },
  {
    name:    'Fórmula de Herón',
    formula: 'A = √(s(s-a)(s-b)(s-c))',
    inputs:  'semiperímetro, lados',
    symbol:  '√',
  },
  {
    name:    'Suma de ángulos',
    formula: 'A + B + C = 180°',
    inputs:  'dos ángulos',
    symbol:  '∠',
  },
  {
    name:    'Triángulo equilátero',
    formula: 'A = √3 / 4 × lado²',
    inputs:  'un lado',
    symbol:  '⬟',
  },
];

export function TriangulosFormulas() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="formulas-tri-heading">
      <div className="site-shell">
        <p className="eyebrow">Referencia</p>
        <h2 id="formulas-tri-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Fórmulas de triángulos incluidas
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {formulas.map(f => (
            <div
              key={f.name}
              className="flex flex-col rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div
                className="flex items-center gap-3 rounded-t-2xl px-5 py-3"
                style={{ background: '#0a3535' }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold"
                  style={{ background: 'rgba(221,243,240,0.12)', color: '#DDF3F0' }}
                  aria-hidden="true"
                >
                  {f.symbol}
                </span>
                <p className="text-sm font-bold" style={{ color: '#DDF3F0' }}>{f.name}</p>
              </div>
              <div className="flex flex-1 flex-col px-5 py-4">
                <p className="break-all font-mono text-sm font-bold text-ink">{f.formula}</p>
                <p className="mt-2 text-xs text-muted">Requiere: {f.inputs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
