const parts = [
  { symbol: 'aₙ',  name: 'Término',                desc: 'Cada parte separada por signo de suma o resta. Un polinomio de grado n tiene hasta n+1 términos.' },
  { symbol: 'n',   name: 'Coeficiente',             desc: 'Número que multiplica a la variable en cada término. En 3x², el coeficiente es 3.' },
  { symbol: 'xⁿ',  name: 'Grado',                   desc: 'Valor del mayor exponente del polinomio. En x³ - 2x² + x - 5, el grado es 3.' },
  { symbol: 'x',   name: 'Variable',                 desc: 'Letra que representa un valor. Las variables más comunes son x, y, a, b y t.' },
  { symbol: 'c',   name: 'Término independiente',    desc: 'Término sin variable. En x² + 3x + 2, el término independiente es 2.' },
  { symbol: 'P(x)','name': 'Forma estándar',          desc: 'Polinomio ordenado de mayor a menor grado: aₙxⁿ + ... + a₁x + a₀.' },
];

export function PolinomioParts() {
  return (
    <section className="bg-page py-8 lg:py-12" aria-labelledby="parts-pol-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Conceptos clave</p>
          <h2 id="parts-pol-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Partes de un polinomio
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {parts.map((p) => (
            <div key={p.name} className="academic-card p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold" style={{ background: '#DDF3F0', color: '#147c7c' }} aria-hidden="true">
                  {p.symbol}
                </div>
                <p className="text-sm font-bold text-ink">{p.name}</p>
              </div>
              <p className="text-xs leading-relaxed text-slate">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
