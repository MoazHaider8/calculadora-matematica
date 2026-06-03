import Link from 'next/link';
import { megaMenuCategories, popularChips } from '@/lib/data';

function IconArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <line x1="2" y1="6.5" x2="11" y2="6.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <polyline points="7.5,3 11,6.5 7.5,10" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" aria-hidden="true">
      <circle cx="8.4" cy="8.4" r="5.1" stroke="currentColor" strokeWidth="1.6" />
      <line x1="12.2" y1="12.2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const finderGroups = [
  {
    label: 'Cálculo',
    slug: 'calculo',
    items: ['Integrales', 'Derivadas', 'Límites'],
  },
  {
    label: 'Álgebra',
    slug: 'algebra',
    items: ['Ecuaciones', 'Polinomios', 'Raíces'],
  },
  {
    label: 'Aritmética',
    slug: 'aritmetica',
    items: ['Fracciones', 'Porcentajes', 'Promedios'],
  },
];

const heroStats = [
  { value: '30+', label: 'calculadoras' },
  { value: '6', label: 'áreas matemáticas' },
  { value: 'ES', label: 'contenido en español' },
];

export function Hero() {
  const totalCalculators = megaMenuCategories.reduce((count, cat) => count + cat.calculators.length, 0);

  return (
    <section className="relative overflow-hidden bg-ocean text-white-soft" aria-label="Sección principal">
      <div className="absolute inset-0 math-pattern opacity-40" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-page" aria-hidden="true" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden text-white-soft/8">
        <span className="absolute left-[9%] top-[15%] font-heading text-[3rem] lg:text-[4rem]">∫</span>
        <span className="absolute right-[14%] top-[18%] font-heading text-[2.5rem] lg:text-[3.5rem]">π</span>
        <span className="absolute left-[12%] bottom-[24%] font-heading text-[2.8rem] lg:text-[3.8rem]">Σ</span>
        <span className="absolute right-[20%] bottom-[22%] font-heading text-[2.3rem] lg:text-[3.1rem]">√</span>
        <span className="absolute right-[8%] top-[46%] font-heading text-[2.1rem] lg:text-[2.9rem]">Δ</span>
      </div>

      <div className="site-shell relative grid grid-cols-1 items-start gap-10 pb-16 pt-8 lg:grid-cols-12 lg:pb-20 lg:pt-10">
        <div className="lg:col-span-7">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-gold">
            <span className="h-2 w-2 rounded-full bg-gold" />
            Calculadoras matemáticas en español
          </p>

          <h1 className="max-w-[680px] text-[2rem] leading-[1.1] text-white-soft sm:text-[2.6rem] lg:text-[3.1rem]">
            Calculadoras matemáticas online para resolver operaciones con claridad
          </h1>

          <p className="mt-4 max-w-[560px] text-base leading-relaxed text-teal-soft">
            Explora calculadoras online y herramientas matemáticas en español para trabajar con integrales, derivadas,
            ecuaciones, matrices, fracciones, porcentajes, probabilidad, área y volumen.
          </p>

          <form action="/buscar" className="mt-6 max-w-[580px]" role="search">
            <label htmlFor="hero-search" className="sr-only">
              Buscar calculadoras
            </label>
            <div className="flex flex-col overflow-hidden rounded-lg bg-white-soft shadow-[0_18px_40px_rgba(7,30,43,0.26)] sm:flex-row">
              <div className="flex min-w-0 flex-1 items-center gap-3 px-5 py-4 text-muted">
                <IconSearch />
                <input
                  id="hero-search"
                  name="q"
                  type="search"
                  placeholder="Buscar integrales, porcentajes o matrices"
                  className="min-w-0 flex-1 bg-transparent text-base text-ink placeholder:text-muted outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-4 text-sm font-black text-ink transition-colors hover:bg-[#e6b636]"
              >
                Buscar
                <IconArrow />
              </button>
            </div>
          </form>

          <div className="mt-5 flex flex-wrap gap-2">
            {popularChips.map((chip) => (
              <Link
                key={chip.url}
                href={chip.url}
                className="rounded-lg border border-teal bg-dark-teal px-3.5 py-2 text-sm font-semibold text-white-soft transition-colors hover:border-gold hover:text-gold"
              >
                {chip.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="academic-card overflow-hidden">
            <div className="border-b border-line bg-aqua-soft px-5 py-4">
              <p className="eyebrow">Buscador académico</p>
              <h2 className="mt-1.5 text-xl text-ink">Elige por área o por operación</h2>
            </div>

            <div className="px-5 py-4">
              <div className="grid grid-cols-3 gap-2 border-b border-line pb-4">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-xl text-deep-teal">{stat.value}</p>
                    <p className="mt-0.5 text-xs font-semibold leading-snug text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4">
                {finderGroups.slice(0, 2).map((group) => (
                  <div key={group.label} className="rounded-lg border border-line bg-white-soft p-3">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-heading text-base text-ink">{group.label}</p>
                      <Link href={`/calculadoras/${group.slug}/`} className="text-xs font-bold text-teal">
                        Ver área
                      </Link>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="rounded bg-panel px-2 py-0.5 text-xs font-semibold text-slate-soft">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-line bg-panel px-5 py-3.5">
              <Link href="/calculadoras" className="inline-flex items-center gap-2 rounded-lg bg-deep-teal px-4 py-2.5 text-sm font-bold text-white-soft transition-colors hover:bg-teal">
                Explorar todo el directorio
                <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
