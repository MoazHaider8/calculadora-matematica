const formulas = [
  { title: 'Fórmula principal',     formula: 'a² + b² = c²',      desc: 'El teorema de Pitágoras: la suma de cuadrados de catetos es igual al cuadrado de la hipotenusa.' },
  { title: 'Calcular hipotenusa',   formula: 'c = √(a² + b²)',    desc: 'Eleva al cuadrado los dos catetos, súmalos y aplica raíz cuadrada.' },
  { title: 'Calcular cateto A',     formula: 'a = √(c² - b²)',    desc: 'Resta el cuadrado del cateto conocido al cuadrado de la hipotenusa y aplica raíz cuadrada.' },
  { title: 'Calcular cateto B',     formula: 'b = √(c² - a²)',    desc: 'Mismo proceso que el cateto A pero despejando b.' },
  { title: 'Comprobación',          formula: 'a² + b² debe = c²', desc: 'Verifica que el resultado es correcto sustituyendo los tres lados en la fórmula original.' },
];

export function PitagorasFormulas() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="formulas-pit-heading">
      <div className="site-shell">
        <p className="eyebrow">Referencia</p>
        <h2 id="formulas-pit-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Fórmulas del teorema de Pitágoras
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {formulas.map(f => (
            <div
              key={f.title}
              className="overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div
                className="px-5 py-3 font-mono text-sm font-bold"
                style={{ background: '#0a3535', color: '#D8A31A' }}
                aria-hidden="true"
              >
                {f.formula}
              </div>
              <div className="px-5 py-4">
                <p className="text-sm font-bold text-ink">{f.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
