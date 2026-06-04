const cols = [
  {
    title: 'Porcentaje de un valor',
    formula: '25% de 200 = 50',
    bg: '#F0FAF9',
    border: '#A8DFDA',
    accent: '#0F5C5C',
    points: [
      'Calcula una parte de un número.',
      'Ejemplo: 25% de 200 equivale a 50.',
      'Se usa para obtener el valor de una proporción.',
    ],
  },
  {
    title: 'Descuento',
    formula: '200 − 20% = 160',
    bg: '#EEF4F7',
    border: '#B8CFE0',
    accent: '#334e68',
    points: [
      'Resta un porcentaje del precio original.',
      'Ejemplo: 20% de descuento sobre 200 es 160.',
      'Se usa para calcular precios con rebaja o reducción.',
    ],
  },
  {
    title: 'Aumento',
    formula: '200 + 15% = 230',
    bg: '#FFFDF0',
    border: 'rgba(181,128,0,0.2)',
    accent: '#b58000',
    points: [
      'Suma un porcentaje al valor base.',
      'Ejemplo: 15% de aumento sobre 200 es 230.',
      'Se usa para calcular precios con IVA o salarios revisados.',
    ],
  },
  {
    title: 'Cambio porcentual',
    formula: '80 → 100 = +25%',
    bg: '#F8F0FA',
    border: 'rgba(100,60,160,0.15)',
    accent: '#5a3e9a',
    points: [
      'Compara valor inicial y final.',
      'Positivo indica aumento, negativo indica disminución.',
      'Ejemplo: de 80 a 100 es un aumento del 25%.',
    ],
  },
];

export function PorcentajesComparison() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="comp-pct-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Casos de uso</p>
          <h2
            id="comp-pct-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Porcentajes, descuentos y aumentos
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Cada tipo de cálculo tiene un uso específico. Esta sección explica cuándo usar cada uno.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {cols.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden rounded-2xl"
              style={{ background: c.bg, border: `1px solid ${c.border}` }}
            >
              <div className="px-6 py-3" style={{ background: '#0a3535' }} aria-hidden="true">
                <p className="font-mono text-sm font-semibold" style={{ color: 'rgba(216,163,26,0.85)' }}>
                  {c.formula}
                </p>
              </div>
              <div className="px-6 py-5">
                <p className="mb-3 text-sm font-bold" style={{ color: c.accent }}>{c.title}</p>
                <ul className="space-y-2.5">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm" style={{ color: '#334e68' }}>
                      <span
                        className="mt-0.5 h-4 w-4 shrink-0 rounded-full text-center text-[10px] font-bold leading-4"
                        style={{ background: c.accent, color: '#fff' }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
