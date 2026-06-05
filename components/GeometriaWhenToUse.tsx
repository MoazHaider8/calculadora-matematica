const rows = [
  { need: 'Calcular la superficie de una figura plana',                        tool: 'Calculadora de Área'       },
  { need: 'Calcular el espacio que ocupa un cuerpo geométrico',                tool: 'Calculadora de Volumen'    },
  { need: 'Resolver lados, perímetro o área de triángulos',                    tool: 'Calculadora de Triángulos' },
  { need: 'Calcular radio, diámetro, área o circunferencia de un círculo',     tool: 'Calculadora de Círculos'   },
  { need: 'Encontrar hipotenusa o cateto en un triángulo rectángulo',          tool: 'Calculadora de Pitágoras'  },
];

export function GeometriaWhenToUse() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="when-geo-heading">
      <div className="site-shell">
        <p className="eyebrow">Guía de uso</p>
        <h2
          id="when-geo-heading"
          className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]"
        >
          ¿Cuándo utilizar cada herramienta?
        </h2>

        {/* Desktop table */}
        <div className="hidden overflow-hidden rounded-2xl lg:block" style={{ border: '1px solid #D7E2EA' }}>
          <table className="w-full text-sm" aria-label="Guía de uso de calculadoras de geometría">
            <thead>
              <tr style={{ background: '#0a3535' }}>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.7)' }}>
                  Necesito
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(221,243,240,0.7)' }}>
                  Herramienta recomendada
                </th>
              </tr>
            </thead>
            <tbody className="divide-y bg-white" style={{ borderColor: '#EEF4F7' }}>
              {rows.map((row, i) => (
                <tr key={i} className="transition-colors hover:bg-panel">
                  <td className="px-6 py-4 text-sm leading-relaxed" style={{ color: '#334e68' }}>
                    {row.need}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className="inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-bold"
                      style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                    >
                      {row.tool}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="flex flex-col gap-3 lg:hidden">
          {rows.map((row, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl bg-white"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div className="px-4 py-3" style={{ background: '#F0FAF9', borderBottom: '1px solid #DDF3F0' }}>
                <span className="text-xs font-bold" style={{ color: '#0F5C5C' }}>{row.tool}</span>
              </div>
              <p className="px-4 py-3 text-sm leading-relaxed" style={{ color: '#334e68' }}>{row.need}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
