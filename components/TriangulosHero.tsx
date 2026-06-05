import Link from 'next/link';

const chips = ['Área', 'Perímetro', 'Lados', 'Ángulos', 'Herón'];
const stats = [
  { value: '4',    label: 'modos de cálculo'     },
  { value: '5',    label: 'ejemplos resueltos'   },
  { value: '100%', label: 'contenido en español' },
];

export function TriangulosHero() {
  return (
    <section className="relative overflow-hidden bg-ocean" aria-label="Calculadora de triángulos online">
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
              <Link href="/calculadoras/geometria" className="transition-colors hover:text-white hover:underline underline-offset-2" style={{ color: 'rgba(221,243,240,0.75)' }}>
                Geometría
              </Link>
            </li>
            <li aria-hidden="true" style={{ color: 'rgba(221,243,240,0.35)' }}>&rsaquo;</li>
            <li style={{ color: '#DDF3F0' }}>Calculadora de Triángulos</li>
          </ol>
        </nav>

        <p className="eyebrow" style={{ color: '#D8A31A' }}>Calculadora de geometría</p>

        <h1 className="mt-3 max-w-2xl text-[1.9rem] font-bold leading-tight text-white sm:text-[2.4rem] lg:text-[2.8rem]">
          Calculadora de triángulos online
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: '#DDF3F0' }}>
          Calcula área, perímetro, tercer ángulo, tipo de triángulo y medidas básicas usando base y altura, tres lados, dos ángulos o las fórmulas del triángulo equilátero.
        </p>

        <div
          className="mt-6 inline-flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl px-4 py-3 font-mono text-sm"
          style={{ background: 'rgba(10,53,53,0.55)', border: '1px solid rgba(221,243,240,0.12)' }}
          aria-hidden="true"
        >
          <span style={{ color: 'rgba(216,163,26,0.85)' }}>A = b &times; h / 2</span>
          <span style={{ color: 'rgba(221,243,240,0.25)' }}>·</span>
          <span style={{ color: 'rgba(216,163,26,0.85)' }}>A = &radic;(s(s-a)(s-b)(s-c))</span>
          <span style={{ color: 'rgba(221,243,240,0.25)' }}>·</span>
          <span style={{ color: 'rgba(216,163,26,0.85)' }}>A + B + C = 180°</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map(chip => (
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
          {stats.map(s => (
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
