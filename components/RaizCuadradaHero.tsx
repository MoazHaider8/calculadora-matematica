import Link from 'next/link';

const chips = [
  'Raíz cuadrada',
  'Resultado exacto',
  'Decimal',
  'Radical simplificado',
  'Comprobación',
];

const stats = [
  { value: '3',    label: 'formatos de resultado' },
  { value: '5',    label: 'ejemplos resueltos'    },
  { value: '100%', label: 'contenido en español'  },
];

export function RaizCuadradaHero() {
  return (
    <section className="relative overflow-hidden bg-ocean" aria-label="Calculadora de raíz cuadrada">
      <div className="absolute inset-0 math-pattern opacity-30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-white-soft" aria-hidden="true" />

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
            <li style={{ color: '#DDF3F0' }}>Calculadora de Raíz Cuadrada</li>
          </ol>
        </nav>

        <p className="eyebrow" style={{ color: '#D8A31A' }}>Calculadora de álgebra</p>

        <h1 className="mt-3 max-w-2xl text-[1.9rem] font-bold leading-tight text-white sm:text-[2.4rem] lg:text-[2.8rem]">
          Calculadora de raíz cuadrada online
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: '#DDF3F0' }}>
          Calcula la raíz cuadrada de un número, obtén el resultado exacto para cuadrados perfectos, consulta la aproximación decimal y verifica el resultado elevándolo al cuadrado.
        </p>

        <div
          className="mt-6 inline-flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl px-4 py-3 font-mono text-sm"
          style={{ background: 'rgba(10,53,53,0.55)', border: '1px solid rgba(221,243,240,0.12)' }}
          aria-hidden="true"
        >
          <span style={{ color: 'rgba(216,163,26,0.85)' }}>&#x221A;25 = 5</span>
          <span style={{ color: 'rgba(221,243,240,0.25)' }}>·</span>
          <span style={{ color: 'rgba(216,163,26,0.85)' }}>&#x221A;72 = 6&#x221A;2</span>
          <span style={{ color: 'rgba(221,243,240,0.25)' }}>·</span>
          <span style={{ color: 'rgba(216,163,26,0.85)' }}>&#x221A;2 &#x2248; 1.414</span>
          <span style={{ color: 'rgba(221,243,240,0.25)' }}>·</span>
          <span style={{ color: 'rgba(216,163,26,0.85)' }}>&#x221A;144 = 12</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-lg border px-3.5 py-2 text-sm font-semibold"
              style={{ borderColor: 'rgba(221,243,240,0.25)', color: '#DDF3F0' }}
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-2xl font-bold text-white">{s.value}</p>
              <p className="mt-0.5 text-xs font-semibold" style={{ color: 'rgba(221,243,240,0.55)' }}>{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
