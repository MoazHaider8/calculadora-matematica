const cols = [
  {
    title: 'Determinante distinto de cero',
    accent: '#0F5C5C',
    bg: '#F0FAF9',
    border: '#A8DFDA',
    points: [
      'La matriz no es singular.',
      'Tiene inversa si es cuadrada.',
      'Sus filas y columnas son linealmente independientes.',
      'El sistema Ax = b tiene solución única.',
    ],
  },
  {
    title: 'Determinante igual a cero',
    accent: '#b91c1c',
    bg: '#FEF2F2',
    border: '#FECACA',
    points: [
      'La matriz es singular.',
      'No tiene inversa.',
      'Al menos dos filas o columnas son linealmente dependientes.',
      'El sistema Ax = b puede no tener solución única.',
    ],
  },
];

export function DetermInanteSingular() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="singular-det-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Interpretación del resultado</p>
          <h2
            id="singular-det-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Determinante cero y matriz singular
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            El signo y valor del determinante determinan si la matriz tiene inversa y si el sistema asociado tiene solución única.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cols.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl p-6"
              style={{ background: c.bg, border: `1px solid ${c.border}` }}
            >
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
          ))}
        </div>

      </div>
    </section>
  );
}
