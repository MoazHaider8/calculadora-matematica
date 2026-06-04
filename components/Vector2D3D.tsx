const cols = [
  {
    title: 'Vectores 2D',
    formula: '(x, y)',
    bg: '#F0FAF9',
    border: '#A8DFDA',
    accent: '#0F5C5C',
    points: [
      'Tienen dos componentes: x e y.',
      'Se representan en el plano cartesiano.',
      'Admiten suma, resta, producto punto, norma, vector unitario y ángulo.',
      'El producto cruz no está definido para vectores 2D.',
    ],
  },
  {
    title: 'Vectores 3D',
    formula: '(x, y, z)',
    bg: '#EEF4F7',
    border: '#B8CFE0',
    accent: '#334e68',
    points: [
      'Tienen tres componentes: x, y y z.',
      'Se representan en el espacio tridimensional.',
      'Admiten todas las operaciones, incluido el producto cruz.',
      'El producto cruz devuelve un vector perpendicular a los dos originales.',
    ],
  },
];

export function Vector2D3D() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="dim-vec-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Dimensiones</p>
          <h2
            id="dim-vec-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Vectores 2D y 3D
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            La dimensión del vector determina qué operaciones están disponibles y cómo se representan las componentes.
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
                <p className="mb-4 text-sm font-bold" style={{ color: c.accent }}>{c.title}</p>
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
