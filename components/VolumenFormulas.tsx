const formulas = [
  { symbol: '⬛', shape: 'Cubo',               formula: 'V = lado³',                    vars: 'lado'                                     },
  { symbol: '📦', shape: 'Prisma rectangular', formula: 'V = largo × ancho × altura',   vars: 'largo, ancho, altura'                     },
  { symbol: '🥫', shape: 'Cilindro',           formula: 'V = πr²h',                     vars: 'radio, altura'                            },
  { symbol: '🍦', shape: 'Cono',               formula: 'V = πr²h / 3',                 vars: 'radio, altura'                            },
  { symbol: '🌐', shape: 'Esfera',             formula: 'V = 4/3 × πr³',               vars: 'radio'                                    },
  { symbol: '🔺', shape: 'Pirámide',           formula: 'V = área base × altura / 3',   vars: 'área de la base, altura'                  },
  { symbol: '📐', shape: 'Prisma triangular',  formula: 'V = (base × altura / 2) × L',  vars: 'base triángulo, altura triángulo, longitud' },
];

export function VolumenFormulas() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="formulas-vol-heading">
      <div className="site-shell">
        <p className="eyebrow">Referencia</p>
        <h2 id="formulas-vol-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Fórmulas de volumen incluidas
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {formulas.map(f => (
            <article
              key={f.shape}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              <div
                className="px-5 py-3 font-mono text-sm font-semibold"
                style={{ background: '#0a3535', color: 'rgba(216,163,26,0.85)' }}
                aria-hidden="true"
              >
                {f.formula}
              </div>
              <div
                className="flex items-center gap-3 px-5 py-3"
                style={{ borderBottom: '1px solid #EEF4F7', background: '#F8FAFC' }}
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base"
                  style={{ background: '#DDF3F0', color: '#147c7c' }}
                  aria-hidden="true"
                >
                  {f.symbol}
                </div>
                <h3 className="text-sm font-bold" style={{ color: '#102a43' }}>{f.shape}</h3>
              </div>
              <div className="px-5 py-3">
                <p className="text-[11px] text-muted">Datos: {f.vars}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
