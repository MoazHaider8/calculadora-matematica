const formulas = [
  {
    name: 'Regla de la potencia',
    full: "d/dx(xⁿ) = n · xⁿ⁻¹",
    note: 'Válida para cualquier exponente n',
  },
  {
    name: 'Regla de la constante',
    full: 'd/dx(c) = 0',
    note: 'La derivada de cualquier constante es cero',
  },
  {
    name: 'Regla de la suma',
    full: "d/dx[f + g] = f' + g'",
    note: 'La derivada se distribuye sobre la suma',
  },
  {
    name: 'Regla del producto',
    full: "d/dx[f · g] = f'g + fg'",
    note: 'Usado cuando dos funciones se multiplican',
  },
  {
    name: 'Regla del cociente',
    full: "d/dx[f/g] = (f'g − fg') / g²",
    note: 'Usado cuando una función divide a otra',
  },
  {
    name: 'Regla de la cadena',
    full: "d/dx[f(g(x))] = f'(g(x)) · g'(x)",
    note: 'Para funciones compuestas',
  },
  {
    name: 'Derivada exponencial',
    full: 'd/dx(eˣ) = eˣ',
    note: 'eˣ es su propia derivada',
  },
  {
    name: 'Derivada logarítmica',
    full: 'd/dx[ln(x)] = 1/x',
    note: 'Solo válida para x > 0',
  },
];

export function DerivadaFormulas() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="formulas-deriv-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Referencia</p>
          <h2 id="formulas-deriv-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Reglas de derivación más usadas
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-soft">
            Las reglas que la calculadora aplica para obtener derivadas simbólicas.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {formulas.map((f) => (
            <div key={f.name} className="academic-card flex flex-col p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-teal">{f.name}</p>
              <div
                className="flex flex-1 items-center rounded-lg px-3 py-4"
                style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              >
                <p className="font-mono text-sm font-bold leading-snug text-deep-teal">{f.full}</p>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">{f.note}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
