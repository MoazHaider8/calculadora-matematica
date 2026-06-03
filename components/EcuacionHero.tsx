import Link from 'next/link';

const chips = [
  'Ecuaciones lineales',
  'Ecuaciones cuadráticas',
  'Variable editable',
  'Comprobación',
  'Pasos visibles',
];

const stats = [
  { value: '2',    label: 'tipos principales' },
  { value: '5',    label: 'ejemplos resueltos' },
  { value: '100%', label: 'en español'          },
];

export function EcuacionHero() {
  return (
    <section className="relative overflow-hidden bg-ocean" aria-label="Calculadora de ecuaciones">
      <div className="absolute inset-0 math-pattern opacity-30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-page" aria-hidden="true" />

      <div className="site-shell relative py-10 lg:py-14">

        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
            <li>
              <Link href="/" className="transition-colors hover:text-white hover:underline underline-offset-2" style={{ color: 'rgba(221,243,240,0.75)' }}>
                Inicio
              </Link>
            </li>
            <li aria-hidden="true" style={{ color: 'rgba(221,243,240,0.35)' }}>&rsaquo;</li>
            <li>
              <Link href="/calculadoras" className="transition-colors hover:text-white hover:underline underline-offset-2" style={{ color: 'rgba(221,243,240,0.75)' }}>
                Calculadoras
              </Link>
            </li>
            <li aria-hidden="true" style={{ color: 'rgba(221,243,240,0.35)' }}>&rsaquo;</li>
            <li>
              <Link href="/calculadoras/algebra" className="transition-colors hover:text-white hover:underline underline-offset-2" style={{ color: 'rgba(221,243,240,0.75)' }}>
                Álgebra
              </Link>
            </li>
            <li aria-hidden="true" style={{ color: 'rgba(221,243,240,0.35)' }}>&rsaquo;</li>
            <li style={{ color: '#DDF3F0' }}>Calculadora de Ecuaciones</li>
          </ol>
        </nav>

        <p className="eyebrow" style={{ color: '#D8A31A' }}>Calculadora de álgebra</p>

        <h1 className="mt-3 max-w-2xl text-[1.9rem] font-bold leading-tight text-white sm:text-[2.4rem] lg:text-[2.8rem]">
          Calculadora de ecuaciones online
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: '#DDF3F0' }}>
          Resuelve ecuaciones lineales y cuadráticas, elige la variable, revisa la solución, consulta una explicación del procedimiento y comprueba el resultado.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{ background: 'rgba(221,243,240,0.12)', color: '#DDF3F0', border: '1px solid rgba(221,243,240,0.2)' }}
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-2xl font-bold text-white">{s.value}</p>
              <p className="mt-0.5 text-xs font-semibold" style={{ color: 'rgba(221,243,240,0.55)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
