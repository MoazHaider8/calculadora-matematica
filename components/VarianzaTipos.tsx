const tipos = [
  {
    symbol: 'σ²',
    label: 'Poblacional',
    divisor: 'n',
    points: [
      'Se usa cuando el conjunto de datos es completo.',
      'Divide la suma de diferencias cuadradas entre n.',
      'Adecuada para censos o datos exhaustivos.',
      'Fórmula: σ² = Σ(x − μ)² / n',
    ],
    dark: true,
  },
  {
    symbol: 's²',
    label: 'Muestral',
    divisor: 'n − 1',
    points: [
      'Se usa cuando los datos son una muestra de una población mayor.',
      'Divide entre n − 1 para corregir el sesgo de estimación.',
      'Adecuada en investigaciones con datos parciales.',
      'Fórmula: s² = Σ(x − x̄)² / (n−1)',
    ],
    dark: false,
  },
];

export function VarianzaTipos() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="tipos-var-heading">
      <div className="site-shell">
        <p className="eyebrow">Diferencias</p>
        <h2 id="tipos-var-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Varianza muestral y poblacional
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {tipos.map(t => (
            <article
              key={t.label}
              className="overflow-hidden rounded-2xl"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 14px rgba(16,42,67,0.06)' }}
            >
              <div
                className="px-5 py-3 font-mono text-sm"
                style={{ background: '#0a3535', color: 'rgba(216,163,26,0.85)' }}
                aria-hidden="true"
              >
                {t.points[3]}
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
                <div>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: '#102a43' }}>{t.label}</h3>
                  <p className="font-mono text-[10px]" style={{ color: '#147c7c' }}>Divisor: {t.divisor}</p>
                </div>
              </div>
              <div className="flex-1 px-5 py-4">
                <ul className="flex flex-col gap-2">
                  {t.points.slice(0, 3).map(pt => (
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

        <p className="mt-6 rounded-xl px-5 py-4 text-sm leading-relaxed text-slate" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
          Ambas miden la dispersión cuadrática respecto a la media. La varianza muestral usa n&minus;1 para producir una estimación sin sesgo cuando los datos representan una parte de una población mayor.
        </p>
      </div>
    </section>
  );
}
