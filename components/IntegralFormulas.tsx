const formulas = [
  {
    name: 'Regla de la potencia',
    full: '∫ xⁿ dx = xⁿ⁺¹ / (n + 1) + C',
    note: 'Válida para n ≠ −1',
  },
  {
    name: 'Regla de la constante',
    full: '∫ a dx = a·x + C',
    note: 'a es cualquier constante',
  },
  {
    name: 'Integral exponencial',
    full: '∫ eˣ dx = eˣ + C',
    note: 'eˣ es su propia antiderivada',
  },
  {
    name: 'Integral del seno',
    full: '∫ sin(x) dx = −cos(x) + C',
    note: 'La antiderivada del seno es el coseno negativo',
  },
  {
    name: 'Integral del coseno',
    full: '∫ cos(x) dx = sin(x) + C',
    note: 'La antiderivada del coseno es el seno',
  },
  {
    name: 'Regla logarítmica',
    full: '∫ 1/x dx = ln|x| + C',
    note: 'Caso especial con n = −1',
  },
  {
    name: 'Raíz cuadrada',
    full: '∫ √x dx = (2/3)·x^(3/2) + C',
    note: 'Tratar como potencia fraccionaria x^(1/2)',
  },
  {
    name: 'Regla de la suma',
    full: '∫ [f + g] dx = ∫ f dx + ∫ g dx',
    note: 'La integral se distribuye sobre la suma',
  },
];

export function IntegralFormulas() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="formulas-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Referencia</p>
          <h2 id="formulas-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Fórmulas de integración más usadas
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-soft">
            Las reglas fundamentales que la calculadora aplica para resolver integrales.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {formulas.map((f) => (
            <div key={f.name} className="academic-card flex flex-col p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-teal">{f.name}</p>

              {/* The formula is the main visual element */}
              <div
                className="flex flex-1 items-center rounded-lg px-3 py-4"
                style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              >
                <p className="font-mono text-sm font-bold leading-snug text-deep-teal">
                  {f.full}
                </p>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-muted">{f.note}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
