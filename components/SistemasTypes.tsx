const types = [
  {
    title: 'Sistema compatible determinado',
    badge: 'Solución única',
    badgeBg: '#DDF3F0',
    badgeColor: '#0F5C5C',
    bg: '#F0FAF9',
    border: '#A8DFDA',
    accent: '#0F5C5C',
    example: 'x = 2, y = 1',
    points: [
      'Tiene una única solución.',
      'Las ecuaciones se cruzan en un punto.',
      'El determinante de la matriz de coeficientes es distinto de cero.',
    ],
  },
  {
    title: 'Sistema incompatible',
    badge: 'Sin solución',
    badgeBg: 'rgba(185,28,28,0.08)',
    badgeColor: '#b91c1c',
    bg: '#FFF8F8',
    border: 'rgba(185,28,28,0.2)',
    accent: '#b91c1c',
    example: 'x + y = 2  /  x + y = 5',
    points: [
      'No tiene ninguna solución.',
      'Las ecuaciones son contradictorias entre sí.',
      'Puede representar rectas o planos paralelos.',
    ],
  },
  {
    title: 'Sistema compatible indeterminado',
    badge: 'Infinitas soluciones',
    badgeBg: '#FFF4CC',
    badgeColor: '#b58000',
    bg: '#FFFDF0',
    border: 'rgba(181,128,0,0.2)',
    accent: '#b58000',
    example: 'x + y = 2  /  2x + 2y = 4',
    points: [
      'Tiene infinitas soluciones.',
      'Una ecuación depende linealmente de otra.',
      'Representa ecuaciones redundantes o coincidentes.',
    ],
  },
];

export function SistemasTypes() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="types-sis-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Clasificación</p>
          <h2
            id="types-sis-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Tipos de sistemas de ecuaciones
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Un sistema lineal puede tener una solución, ninguna solución o infinitas soluciones. Esta calculadora detecta los tres casos.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {types.map((t) => (
            <div
              key={t.title}
              className="overflow-hidden rounded-2xl"
              style={{ background: t.bg, border: `1px solid ${t.border}` }}
            >
              <div className="px-6 py-3" style={{ background: '#0a3535' }} aria-hidden="true">
                <span
                  className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: t.badgeBg, color: t.badgeColor }}
                >
                  {t.badge}
                </span>
              </div>
              <div className="px-6 py-5">
                <p className="mb-1 font-mono text-xs text-muted">{t.example}</p>
                <p className="mb-3 text-sm font-bold" style={{ color: t.accent }}>{t.title}</p>
                <ul className="space-y-2">
                  {t.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm" style={{ color: '#334e68' }}>
                      <span
                        className="mt-0.5 h-4 w-4 shrink-0 rounded-full text-center text-[10px] font-bold leading-4"
                        style={{ background: t.accent, color: '#fff' }}
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
