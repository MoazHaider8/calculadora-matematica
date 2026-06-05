const tipos = [
  {
    name:   'Equilátero',
    symbol: '△',
    color:  '#DDF3F0',
    tcolor: '#0F5C5C',
    props: [
      'Tres lados iguales',
      'Tres ángulos iguales (60°)',
      'Ejemplo: 6, 6, 6',
    ],
  },
  {
    name:   'Isósceles',
    symbol: '△',
    color:  '#FFF4CC',
    tcolor: '#b58000',
    props: [
      'Dos lados iguales',
      'Dos ángulos iguales en la base',
      'Ejemplo: 5, 5, 8',
    ],
  },
  {
    name:   'Escaleno',
    symbol: '△',
    color:  '#F0FAF9',
    tcolor: '#147c7c',
    props: [
      'Todos los lados diferentes',
      'Todos los ángulos diferentes',
      'Ejemplo: 5, 6, 7',
    ],
  },
  {
    name:   'Rectángulo',
    symbol: '∟',
    color:  '#F8FAFC',
    tcolor: '#334e68',
    props: [
      'Tiene un ángulo de 90°',
      'Relacionado con el teorema de Pitágoras',
      'Calculadora de Pitágoras (próximamente)',
    ],
  },
];

export function TriangulosTipos() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="tipos-tri-heading">
      <div className="site-shell">
        <p className="eyebrow">Clasificación</p>
        <h2 id="tipos-tri-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Tipos de triángulos
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tipos.map(t => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: '1px solid #EEF4F7' }}>
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold"
                  style={{ background: t.color, color: t.tcolor }}
                  aria-hidden="true"
                >
                  {t.symbol}
                </span>
                <h3 className="text-sm font-bold text-ink">{t.name}</h3>
              </div>
              <ul className="flex flex-1 flex-col gap-2 px-5 py-4">
                {t.props.map(p => (
                  <li key={p} className="flex items-start gap-2 text-xs leading-relaxed text-slate">
                    <span className="mt-0.5 shrink-0 text-teal" aria-hidden="true">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
