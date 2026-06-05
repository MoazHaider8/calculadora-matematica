const tipos = [
  {
    symbol: 'σ',
    label: 'Poblacional',
    divisor: 'n',
    points: [
      'Se usa cuando el conjunto de datos es completo.',
      'Divide entre n (todos los datos disponibles).',
      'Adecuada para censos o datos exhaustivos.',
      'Fórmula: σ = √(Σ(x − μ)² / n)',
    ],
    bg: '#0a3535',
    fg: '#DDF3F0',
    accent: '#D8A31A',
  },
  {
    symbol: 's',
    label: 'Muestral',
    divisor: 'n − 1',
    points: [
      'Se usa cuando los datos son una muestra de una población mayor.',
      'Divide entre n − 1 para corregir el sesgo de estimación.',
      'Adecuada en investigaciones con datos parciales.',
      'Fórmula: s = √(Σ(x − x̄)² / (n−1))',
    ],
    bg: '#F8FAFC',
    fg: '#102a43',
    accent: '#147c7c',
  },
];

export function DesviacionTipos() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="tipos-desv-heading">
      <div className="site-shell">
        <p className="eyebrow">Diferencias</p>
        <h2 id="tipos-desv-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Desviación estándar muestral y poblacional
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {tipos.map(t => (
            <article
              key={t.label}
              className="overflow-hidden rounded-2xl"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 14px rgba(16,42,67,0.06)' }}
            >
              <div
                className="flex items-center gap-4 px-6 py-5"
                style={{ background: t.bg }}
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-mono text-2xl font-bold"
                  style={{ background: 'rgba(221,243,240,0.12)', color: t.accent }}
                >
                  {t.symbol}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.5)' }}>Tipo</p>
                  <p className="text-lg font-bold" style={{ color: t === tipos[0] ? '#DDF3F0' : '#102a43' }}>{t.label}</p>
                  <p className="font-mono text-xs" style={{ color: t.accent }}>Divisor: {t.divisor}</p>
                </div>
              </div>
              <div className="px-6 py-5">
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

        <p className="mt-6 rounded-xl px-5 py-4 text-sm leading-relaxed text-slate" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
          Ambos tipos miden la dispersión, pero usan divisores diferentes. La desviación muestral con n&minus;1 produce una estimación sin sesgo cuando los datos representan una parte de una población mayor.
        </p>
      </div>
    </section>
  );
}
