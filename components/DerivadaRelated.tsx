import Link from 'next/link';

// Existing routes get href. Pages not yet built are Próximamente (href: null).
const related = [
  {
    label: 'Calculadora de Integrales',
    category: 'Cálculo',
    desc: 'Calcula integrales definidas e indefinidas. Operación inversa a la derivación.',
    href: '/calculadoras/calculo/calculadora-de-integrales',
  },
  {
    label: 'Calculadora de Límites',
    category: 'Cálculo',
    desc: 'Analiza el valor al que se aproxima una función cuando su variable tiende a un punto.',
    href: '/calculadoras/calculo/calculadora-de-limites',
  },
  {
    label: 'Calculadora de Logaritmos',
    category: 'Cálculo',
    desc: 'Calcula logaritmos en base 10, base e y bases personalizadas.',
    href: '/calculadoras/calculo/calculadora-de-logaritmos',
  },
  {
    label: 'Calculadora de Exponentes',
    category: 'Cálculo',
    desc: 'Resuelve operaciones con potencias y exponentes de forma exacta.',
    href: '/calculadoras/calculo/calculadora-de-exponentes',
  },
  {
    label: 'Calculadora Científica',
    category: 'Aritmética',
    desc: 'Operaciones científicas completas incluyendo funciones trigonométricas y exponenciales.',
    href: null,
  },
  {
    label: 'Calculadora de Ecuaciones',
    category: 'Álgebra',
    desc: 'Resuelve ecuaciones algebraicas y muestra los pasos del procedimiento.',
    href: null,
  },
  {
    label: 'Ver todas las calculadoras de cálculo',
    category: 'Categoría',
    desc: 'Explora las cinco herramientas disponibles en la categoría de cálculo.',
    href: '/calculadoras/calculo',
  },
];

export function DerivadaRelated() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="related-deriv-heading">
      <div className="site-shell">

        <div className="mb-7">
          <p className="eyebrow">Herramientas relacionadas</p>
          <h2 id="related-deriv-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Calculadoras relacionadas
          </h2>
        </div>

        <div className="academic-card divide-y divide-line overflow-hidden">
          {related.map((r) => {
            const inner = (
              <>
                <div className="mt-0.5 shrink-0">
                  <span
                    className="inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                    style={{ background: '#DDF3F0', color: '#0f5c5c' }}
                  >
                    {r.category}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-ink">{r.label}</p>
                  <p className="mt-0.5 text-xs text-muted">{r.desc}</p>
                </div>
                <div className="shrink-0">
                  {r.href ? (
                    <span className="text-teal" aria-hidden="true">›</span>
                  ) : (
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                      style={{ background: '#FFF4CC', color: '#b58000' }}
                    >
                      Próximamente
                    </span>
                  )}
                </div>
              </>
            );

            return r.href ? (
              <Link
                key={r.label}
                href={r.href}
                className="flex items-start gap-4 px-6 py-4 transition-colors hover:bg-aqua-soft"
              >
                {inner}
              </Link>
            ) : (
              <div
                key={r.label}
                className="flex items-start gap-4 px-6 py-4 opacity-70"
                aria-label={`${r.label} — próximamente`}
              >
                {inner}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
