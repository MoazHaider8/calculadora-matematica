const types = [
  {
    symbol: 'ax+b=c',
    name: 'Ecuación lineal',
    desc: 'Contiene la variable de primer grado. Generalmente tiene una única solución.',
    example: '2x + 3 = 7',
    result: 'x = 2',
    available: true,
  },
  {
    symbol: 'ax²+bx+c=0',
    name: 'Ecuación cuadrática',
    desc: 'Contiene la variable de segundo grado. Puede tener dos soluciones, una o ninguna real.',
    example: 'x² - 5x + 6 = 0',
    result: 'x = 2, x = 3',
    available: true,
  },
  {
    symbol: '2×2',
    name: 'Sistema 2×2',
    desc: 'Dos ecuaciones con dos incógnitas (x e y). Se resuelve por sustitución o eliminación.',
    example: '2x + y = 5 / x - y = 1',
    result: 'x = 2, y = 1',
    available: true,
  },
];

export function EcuacionTypes() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="types-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Tipos disponibles</p>
          <h2 id="types-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Tipos de ecuaciones que puedes resolver
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {types.map((t) => (
            <div key={t.name} className="academic-card p-5">
              <div className="mb-3 rounded-lg px-4 py-2.5" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                <p className="font-mono text-sm font-semibold text-deep-teal">{t.symbol}</p>
              </div>
              <p className="mb-2 text-sm font-bold text-ink">{t.name}</p>
              <p className="mb-3 text-xs leading-relaxed text-slate">{t.desc}</p>
              <div className="rounded-lg border border-line px-3 py-2">
                <p className="font-mono text-xs text-slate">{t.example}</p>
                <p className="mt-1 font-mono text-xs font-bold text-deep-teal">{t.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
