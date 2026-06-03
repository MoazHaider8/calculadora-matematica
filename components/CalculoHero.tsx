import Link from 'next/link';

const quickLinks = [
  { label: 'Integrales', anchor: '#herramienta-integrales' },
  { label: 'Derivadas',  anchor: '#herramienta-derivadas'  },
  { label: 'Límites',    anchor: '#herramienta-limites'    },
  { label: 'Logaritmos', anchor: '#herramienta-logaritmos' },
  { label: 'Exponentes', anchor: '#herramienta-exponentes' },
];

const stats = [
  { value: '5',    label: 'herramientas especializadas' },
  { value: '6',    label: 'conceptos cubiertos'         },
  { value: '100%', label: 'contenido en español'        },
];

export function CalculoHero() {
  return (
    <section className="relative overflow-hidden bg-ocean" aria-label="Cálculo">
      <div className="absolute inset-0 math-pattern opacity-30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-white-soft" aria-hidden="true" />

      <div className="site-shell relative py-10 lg:py-14">

        {/* Breadcrumb — improved visibility */}
        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-white hover:underline underline-offset-2"
                style={{ color: 'rgba(221,243,240,0.75)' }}
              >
                Inicio
              </Link>
            </li>
            <li aria-hidden="true" style={{ color: 'rgba(221,243,240,0.35)' }}>&rsaquo;</li>
            <li>
              <Link
                href="/calculadoras"
                className="transition-colors hover:text-white hover:underline underline-offset-2"
                style={{ color: 'rgba(221,243,240,0.75)' }}
              >
                Calculadoras
              </Link>
            </li>
            <li aria-hidden="true" style={{ color: 'rgba(221,243,240,0.35)' }}>&rsaquo;</li>
            <li style={{ color: '#DDF3F0' }}>Cálculo</li>
          </ol>
        </nav>

        <p className="eyebrow" style={{ color: '#D8A31A' }}>Categoría matemática</p>

        <h1 className="mt-3 max-w-2xl text-[1.9rem] font-bold leading-tight text-white sm:text-[2.4rem] lg:text-[2.8rem]">
          Calculadoras de cálculo organizadas por tema
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: '#DDF3F0' }}>
          Cinco herramientas para resolver integrales, obtener derivadas, calcular límites y operar con logaritmos y exponentes.
        </p>

        {/* Quick-jump chips */}
        <div className="mt-7 flex flex-wrap gap-2">
          {quickLinks.map((t) => (
            <Link
              key={t.anchor}
              href={t.anchor}
              className="rounded-lg border px-3.5 py-2 text-sm font-semibold transition-colors hover:border-gold hover:text-gold"
              style={{ borderColor: 'rgba(221,243,240,0.25)', color: '#DDF3F0' }}
            >
              {t.label}
            </Link>
          ))}
        </div>

        {/* Stats row — improved */}
        <div className="mt-8 flex flex-wrap gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className="font-heading text-2xl font-bold text-white"
              >
                {s.value}
              </p>
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
