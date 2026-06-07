const values = [
  {
    sym: 'C',
    title: 'Claridad',
    desc: 'Las explicaciones deben ser fáciles de seguir. Cada herramienta muestra el resultado y, siempre que es posible, el procedimiento paso a paso.',
  },
  {
    sym: 'P',
    title: 'Precisión',
    desc: 'Las calculadoras aplican fórmulas matemáticas estándar y validan los valores de entrada para evitar resultados incorrectos.',
  },
  {
    sym: 'O',
    title: 'Organización',
    desc: 'Las herramientas están agrupadas por tema matemático para que puedas encontrar lo que necesitas sin buscar en listas largas.',
  },
  {
    sym: 'A',
    title: 'Accesibilidad',
    desc: 'Las páginas están diseñadas para funcionar bien en móvil y escritorio, con formularios accesibles y texto legible.',
  },
];

export function SobreEnfoque() {
  return (
    <section className="bg-white py-8 lg:py-11" aria-labelledby="enfoque-heading">
      <div className="site-shell">
        <p className="eyebrow">Valores</p>
        <h2 id="enfoque-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Nuestro enfoque
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(v => (
            <div
              key={v.title}
              className="rounded-2xl bg-white p-5"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl font-mono text-sm font-bold"
                style={{ background: '#DDF3F0', color: '#147c7c' }}
                aria-hidden="true"
              >
                {v.sym}
              </div>
              <p className="text-sm font-bold text-ink">{v.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
