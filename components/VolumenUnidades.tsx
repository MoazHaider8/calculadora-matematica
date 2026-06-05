const cols = [
  {
    title: 'Unidad lineal',
    symbol: 'cm',
    items: [
      'Se usa para medir lados, radios, altura, largo o ancho.',
      'Ejemplos: cm, m, mm, km.',
      'Es la medida que introduces como dato en la calculadora.',
    ],
    dark: false,
  },
  {
    title: 'Unidad cúbica',
    symbol: 'cm³',
    items: [
      'Se usa para expresar el volumen de un cuerpo geométrico.',
      'Ejemplos: cm³, m³, mm³, km³.',
      'Si introduces medidas en cm, el volumen se muestra en cm³.',
    ],
    dark: true,
  },
  {
    title: 'Volumen',
    symbol: 'V',
    items: [
      'Mide el espacio que ocupa un cuerpo en tres dimensiones.',
      'Siempre se expresa en unidades cúbicas.',
      'No debe confundirse con el área, que mide superficie en 2D.',
    ],
    dark: false,
  },
];

export function VolumenUnidades() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="unidades-vol-heading">
      <div className="site-shell">
        <p className="eyebrow">Unidades</p>
        <h2 id="unidades-vol-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Volumen y unidades cúbicas
        </h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {cols.map(c => (
            <article
              key={c.title}
              className="overflow-hidden rounded-2xl"
              style={{
                background: c.dark ? '#0a3535' : '#F8FAFC',
                border: c.dark ? '1px solid transparent' : '1px solid #D7E2EA',
                boxShadow: '0 2px 12px rgba(16,42,67,0.06)',
              }}
            >
              <div className="flex items-center gap-3 px-6 py-5">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-mono text-lg font-bold"
                  style={{ background: 'rgba(221,243,240,0.12)', color: c.dark ? '#D8A31A' : '#147c7c' }}
                  aria-hidden="true"
                >
                  {c.symbol}
                </div>
                <h3 className="text-sm font-bold" style={{ color: c.dark ? '#DDF3F0' : '#102a43' }}>{c.title}</h3>
              </div>
              <div className="px-6 pb-6">
                <ul className="flex flex-col gap-2">
                  {c.items.map(pt => (
                    <li key={pt} className="flex gap-2 text-sm leading-relaxed" style={{ color: c.dark ? 'rgba(221,243,240,0.8)' : '#334e68' }}>
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: c.dark ? '#D8A31A' : '#147c7c' }} aria-hidden="true" />
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
