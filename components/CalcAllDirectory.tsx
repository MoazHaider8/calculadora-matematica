import Link from 'next/link';
import { categories } from '@/lib/data';

function shortName(name: string): string {
  return name
    .replace('Calculadora de ', '')
    .replace('Calculadora del ', '')
    .replace('Calculadora ', '');
}

const categorySymbols: Record<string, string> = {
  calculo: '∫',
  algebra: 'x²',
  'matrices-y-vectores': '[ ]',
  aritmetica: '%',
  estadistica: 'σ',
  geometria: '△',
};

export function CalcAllDirectory() {
  const total = categories.reduce((n, c) => n + c.calculators.length, 0);

  return (
    <section
      className="py-10 lg:py-14"
      style={{ background: '#ffffff' }}
      aria-labelledby="all-calc-heading"
      id="todas"
    >
      <div className="site-shell">

        {/* Header */}
        <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Índice completo</p>
            <h2
              id="all-calc-heading"
              className="mt-3 text-[1.9rem] font-bold leading-tight lg:text-[2.5rem]"
              style={{ color: '#102a43' }}
            >
              Todas las calculadoras
            </h2>
          </div>
          <p className="shrink-0 text-sm font-semibold tabular-nums" style={{ color: '#829ab1' }}>
            {total} herramientas &middot; {categories.length} áreas
          </p>
        </div>

        {/* Thin gold header line */}
        <div className="mb-0 mt-6 h-px" style={{ background: 'linear-gradient(90deg, #D8A31A 80px, #D7E2EA 80px)' }} />

        {/* Index rows */}
        <div>
          {categories.map((cat, index) => (
            <article
              key={cat.slug}
              className="group"
              aria-labelledby={`idx-${cat.slug}`}
            >
              {/* Desktop row */}
              <div className="hidden items-start gap-6 py-6 lg:flex">

                {/* Number */}
                <span
                  className="w-9 shrink-0 pt-0.5 font-mono text-sm font-bold tabular-nums"
                  style={{ color: '#D8A31A' }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Symbol + Category */}
                <div className="w-48 shrink-0">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold"
                      style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                    >
                      {categorySymbols[cat.slug]}
                    </span>
                    <Link
                      id={`idx-${cat.slug}`}
                      href={`/calculadoras/${cat.slug}/`}
                      className="text-base font-bold leading-snug transition-colors hover:text-teal"
                      style={{ color: '#102a43' }}
                    >
                      {cat.name}
                    </Link>
                  </div>
                  <p className="mt-1 pl-10 text-xs font-semibold" style={{ color: '#829ab1' }}>
                    {cat.calculators.length} herramientas
                  </p>
                </div>

                {/* Calculator links — inline with dots */}
                <div className="flex flex-1 flex-wrap items-center gap-x-1 gap-y-2">
                  {cat.calculators.map((calc, i) => (
                    <span key={calc.url} className="flex items-center gap-1">
                      <Link
                        href={calc.url}
                        className="text-sm font-medium transition-colors hover:text-teal"
                        style={{ color: '#334e68' }}
                      >
                        {shortName(calc.name)}
                      </Link>
                      {i < cat.calculators.length - 1 && (
                        <span style={{ color: '#C8D7E1' }} aria-hidden="true">&middot;</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Ver área CTA */}
                <Link
                  href={`/calculadoras/${cat.slug}/`}
                  className="shrink-0 text-sm font-bold opacity-0 transition-all group-hover:opacity-100"
                  style={{ color: '#0F5C5C' }}
                >
                  Ver área &rarr;
                </Link>
              </div>

              {/* Mobile row */}
              <div className="py-6 lg:hidden">
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-xs font-bold tabular-nums"
                    style={{ color: '#D8A31A' }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded font-mono text-xs font-bold"
                    style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  >
                    {categorySymbols[cat.slug]}
                  </span>
                  <Link
                    href={`/calculadoras/${cat.slug}/`}
                    className="text-base font-bold transition-colors hover:text-teal"
                    style={{ color: '#102a43' }}
                  >
                    {cat.name}
                  </Link>
                  <span className="ml-auto text-xs font-semibold" style={{ color: '#829ab1' }}>
                    {cat.calculators.length}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5 pl-[3.25rem]">
                  {cat.calculators.map((calc) => (
                    <Link
                      key={calc.url}
                      href={calc.url}
                      className="rounded-full border px-2.5 py-1 text-xs font-medium transition-colors hover:border-teal hover:text-teal"
                      style={{ borderColor: '#D7E2EA', color: '#334e68' }}
                    >
                      {shortName(calc.name)}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Row divider */}
              <div className="h-px" style={{ background: '#EEF4F7' }} />
            </article>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-8 text-center">
          <Link
            href="#categorias"
            className="inline-flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-75"
            style={{ color: '#0F5C5C' }}
          >
            Explorar por categoría con descripción completa &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
