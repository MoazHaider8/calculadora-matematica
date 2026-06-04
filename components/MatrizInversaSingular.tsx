const cols = [
  {
    title: 'Matriz invertible',
    badge: 'Tiene inversa',
    badgeBg: '#DDF3F0',
    badgeColor: '#0F5C5C',
    bg: '#F0FAF9',
    border: '#A8DFDA',
    accent: '#0F5C5C',
    formula: 'det(A) ≠ 0',
    points: [
      'Su determinante es distinto de cero.',
      'Existe una única matriz A⁻¹ tal que A · A⁻¹ = I.',
      'Sus filas y columnas son linealmente independientes.',
      'Se puede usar para resolver sistemas de ecuaciones lineales.',
    ],
  },
  {
    title: 'Matriz singular',
    badge: 'Sin inversa',
    badgeBg: 'rgba(185,28,28,0.08)',
    badgeColor: '#b91c1c',
    bg: '#FFF8F8',
    border: 'rgba(185,28,28,0.2)',
    accent: '#b91c1c',
    formula: 'det(A) = 0',
    points: [
      'Su determinante es igual a cero.',
      'No existe ninguna matriz inversa A⁻¹.',
      'Al menos una fila o columna depende linealmente de otra.',
      'No se puede usar para resolver sistemas de ecuaciones con solución única.',
    ],
  },
];

export function MatrizInversaSingular() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="singular-inv-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Tipos de matrices</p>
          <h2
            id="singular-inv-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Matriz invertible y matriz singular
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            El determinante determina si una matriz tiene inversa. Esta calculadora detecta ambos casos automáticamente.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
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
                <div className="mb-3 flex items-center gap-2">
                  <p className="text-sm font-bold" style={{ color: c.accent }}>{c.title}</p>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: c.badgeBg, color: c.badgeColor }}
                  >
                    {c.badge}
                  </span>
                </div>
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
