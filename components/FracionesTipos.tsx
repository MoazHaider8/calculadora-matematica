const types = [
  {
    title: 'Fracción propia',
    formula: '3/4',
    bg: '#F0FAF9',
    border: '#A8DFDA',
    accent: '#0F5C5C',
    points: [
      'El numerador es menor que el denominador.',
      'Representa un valor entre 0 y 1.',
      'Ejemplo: 3/4 representa tres cuartos de un entero.',
    ],
  },
  {
    title: 'Fracción impropia',
    formula: '5/4',
    bg: '#EEF4F7',
    border: '#B8CFE0',
    accent: '#334e68',
    points: [
      'El numerador es mayor o igual que el denominador.',
      'Representa un valor igual o mayor que 1.',
      'Se puede convertir a fracción mixta: 5/4 = 1 1/4.',
    ],
  },
  {
    title: 'Fracción mixta',
    formula: '1 1/4',
    bg: '#FFFDF0',
    border: 'rgba(181,128,0,0.2)',
    accent: '#b58000',
    points: [
      'Combina un número entero y una fracción propia.',
      'Facilita la lectura de fracciones impropias.',
      'Ejemplo: 1 1/4 equivale a 5/4.',
    ],
  },
];

export function FracionesTipos() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="tipos-frac-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Tipos</p>
          <h2
            id="tipos-frac-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Fracciones propias, impropias y mixtas
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Los resultados de esta calculadora incluyen forma mixta cuando el numerador es mayor que el denominador.
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
                <p className="font-mono text-sm font-semibold" style={{ color: 'rgba(216,163,26,0.85)' }}>
                  {t.formula}
                </p>
              </div>
              <div className="px-6 py-5">
                <p className="mb-3 text-sm font-bold" style={{ color: t.accent }}>{t.title}</p>
                <ul className="space-y-2.5">
                  {t.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm" style={{ color: '#334e68' }}>
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
