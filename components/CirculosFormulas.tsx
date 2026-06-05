const formulas = [
  { title: 'Diámetro',                   formula: 'd = 2r',       desc: 'El diámetro equivale al doble del radio.' },
  { title: 'Radio desde diámetro',       formula: 'r = d / 2',    desc: 'Divide el diámetro entre dos para obtener el radio.' },
  { title: 'Circunferencia',             formula: 'C = 2πr',      desc: 'Longitud del contorno del círculo.' },
  { title: 'Radio desde circunferencia', formula: 'r = C / 2π',   desc: 'Divide la circunferencia entre 2π.' },
  { title: 'Área',                       formula: 'A = πr²',      desc: 'Superficie interior del círculo.' },
  { title: 'Radio desde área',           formula: 'r = √(A / π)', desc: 'Raíz cuadrada del cociente de área y π.' },
];

export function CirculosFormulas() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="formulas-circ-heading">
      <div className="site-shell">
        <p className="eyebrow">Referencia</p>
        <h2 id="formulas-circ-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Fórmulas de círculo incluidas
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
