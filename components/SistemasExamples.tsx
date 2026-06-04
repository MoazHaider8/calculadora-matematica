const examples = [
  {
    n: '1',
    label: 'Sistema 2×2 con solución única',
    system: ['2x + y = 5', 'x − y = 1'],
    result: 'x = 2, y = 1',
    badge: 'Solución única',
    badgeColor: '#0F5C5C',
    badgeBg: '#DDF3F0',
    explanation: 'La solución satisface ambas ecuaciones: 2(2)+1=5 y 2−1=1.',
  },
  {
    n: '2',
    label: 'Sistema sin solución',
    system: ['x + y = 2', 'x + y = 5'],
    result: 'Sin solución',
    badge: 'Incompatible',
    badgeColor: '#b91c1c',
    badgeBg: 'rgba(185,28,28,0.08)',
    explanation: 'Las ecuaciones son paralelas y no tienen punto de intersección.',
  },
  {
    n: '3',
    label: 'Sistema con infinitas soluciones',
    system: ['x + y = 2', '2x + 2y = 4'],
    result: 'Infinitas soluciones',
    badge: 'Indeterminado',
    badgeColor: '#b58000',
    badgeBg: '#FFF4CC',
    explanation: 'La segunda ecuación es múltiplo de la primera: representa la misma recta.',
  },
  {
    n: '4',
    label: 'Sistema 3×3 con solución única',
    system: ['x + y + z = 6', '2x − y + z = 3', 'x + 2y + 3z = 14'],
    result: 'x = 1, y = 2, z = 3',
    badge: 'Solución única',
    badgeColor: '#0F5C5C',
    badgeBg: '#DDF3F0',
    explanation: 'Verificación: 1+2+3=6, 2−2+3=3, 1+4+9=14.',
  },
  {
    n: '5',
    label: 'Sistema 2×2 con solución decimal',
    system: ['3x + 2y = 12', 'x − y = 1'],
    result: 'x = 2.8, y = 1.8',
    badge: 'Solución única',
    badgeColor: '#0F5C5C',
    badgeBg: '#DDF3F0',
    explanation: 'Verificación: 3(2.8)+2(1.8)=12 y 2.8−1.8=1.',
  },
];

export function SistemasExamples() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="examples-sis-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Casos prácticos</p>
          <h2
            id="examples-sis-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Ejemplos resueltos de sistemas de ecuaciones
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex) => (
            <article
              key={ex.n}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              <div
                className="flex items-center gap-3 px-5 py-3"
                style={{ background: '#F0FAF9', borderBottom: '1px solid #D7E2EA' }}
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-bold text-xs"
                  style={{ background: '#0a3535', color: '#D8A31A' }}
                  aria-hidden="true"
                >
                  {ex.n}
                </span>
                <p className="text-xs font-bold" style={{ color: '#102a43' }}>{ex.label}</p>
              </div>

              <div className="flex flex-1 flex-col gap-3 px-5 py-4">
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Sistema</p>
                  {ex.system.map((eq, i) => (
                    <p key={i} className="font-mono text-xs" style={{ color: '#334e68' }}>{eq}</p>
                  ))}
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Resultado</p>
                  <span
                    className="inline-block rounded-lg px-3 py-1 font-mono text-xs font-bold"
                    style={{ background: ex.badgeBg, color: ex.badgeColor }}
                  >
                    {ex.result}
                  </span>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">Explicación</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#627d98' }}>{ex.explanation}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
