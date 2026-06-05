const tipos = [
  {
    symbol: 'x̄',
    label: 'Media simple',
    formula: 'x̄ = Σx / n',
    points: [
      'Todos los datos tienen el mismo peso.',
      'Se calcula sumando los valores y dividiendo entre la cantidad.',
      'Es la forma más común de calcular la media aritmética.',
      'Se usa cuando ningún dato tiene más importancia que otro.',
    ],
    dark: true,
  },
  {
    symbol: 'x̄w',
    label: 'Media ponderada',
    formula: 'x̄ = Σ(x × peso) / Σpesos',
    points: [
      'Cada valor puede tener un peso diferente.',
      'Los valores con mayor peso influyen más en el resultado.',
      'Los pesos no necesitan sumar 100.',
      'Se usa en notas con créditos, encuestas y análisis con prioridades.',
    ],
    dark: false,
  },
];

export function MediaTipos() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="tipos-media-heading">
      <div className="site-shell">
        <p className="eyebrow">Modos</p>
        <h2 id="tipos-media-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Media simple y media ponderada
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {tipos.map(t => (
            <article
              key={t.label}
              className="overflow-hidden rounded-2xl"
              style={{
                border: `1px solid ${t.dark ? 'transparent' : '#D7E2EA'}`,
                boxShadow: '0 2px 14px rgba(16,42,67,0.06)',
              }}
            >
              <div
                className="px-5 py-3 font-mono text-sm"
                style={{ background: '#0a3535', color: 'rgba(216,163,26,0.85)' }}
                aria-hidden="true"
              >
                {t.formula}
              </div>
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ borderBottom: '1px solid #EEF4F7', background: '#F8FAFC' }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold"
                  style={{ background: '#DDF3F0', color: '#147c7c' }}
                  aria-hidden="true"
                >
                  {t.symbol}
                </div>
                <h3 className="text-sm font-bold leading-snug" style={{ color: '#102a43' }}>{t.label}</h3>
              </div>
              <div className="flex-1 px-5 py-4">
                <ul className="flex flex-col gap-2">
                  {t.points.map(pt => (
                    <li key={pt} className="flex gap-2 text-sm leading-relaxed text-slate">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#147c7c' }} aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
