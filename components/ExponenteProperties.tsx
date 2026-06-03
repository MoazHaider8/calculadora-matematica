const props = [
  {
    name: 'Producto de potencias',
    formula: 'aᵐ · aⁿ = aᵐ⁺ⁿ',
    example: 'x² · x³ = x⁵',
    desc: 'Si la base es la misma, se suman los exponentes.',
  },
  {
    name: 'Cociente de potencias',
    formula: 'aᵐ / aⁿ = aᵐ⁻ⁿ',
    example: 'x⁵ / x² = x³',
    desc: 'Si la base es la misma, se restan los exponentes.',
  },
  {
    name: 'Potencia de una potencia',
    formula: '(aᵐ)ⁿ = aᵐⁿ',
    example: '(x²)³ = x⁶',
    desc: 'Se multiplican los exponentes.',
  },
  {
    name: 'Exponente negativo',
    formula: 'a⁻ⁿ = 1 / aⁿ',
    example: '2⁻³ = 1/8',
    desc: 'Un exponente negativo da el recíproco de la potencia.',
  },
  {
    name: 'Exponente cero',
    formula: 'a⁰ = 1',
    example: '5⁰ = 1',
    desc: 'Cualquier número distinto de cero elevado a 0 es igual a 1.',
  },
  {
    name: 'Exponente fraccionario',
    formula: 'a^(1/n) = ⁿ√a',
    example: '8^(1/3) = 2',
    desc: 'Un exponente fraccionario equivale a una raíz.',
  },
];

export function ExponenteProperties() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="props-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Referencia</p>
          <h2 id="props-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Propiedades de exponentes y potencias
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {props.map((p) => (
            <div key={p.name} className="academic-card p-5">
              <p className="mb-3 text-sm font-bold text-ink">{p.name}</p>
              <div className="mb-3 rounded-lg px-4 py-2.5" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                <p className="font-mono text-base font-semibold text-deep-teal">{p.formula}</p>
              </div>
              <p className="mb-2 font-mono text-sm text-slate">{p.example}</p>
              <p className="text-xs leading-relaxed text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
