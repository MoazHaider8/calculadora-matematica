import Link from 'next/link';
import { categories } from '@/lib/data';

function shortName(name: string): string {
  return name
    .replace('Calculadora de ', '')
    .replace('Calculadora del ', '')
    .replace('Calculadora ', '');
}

const categoryMeta: Record<string, { symbol: string; accent: string; wide: boolean }> = {
  calculo:             { symbol: '∫',    accent: '#0F5C5C', wide: true  },
  algebra:             { symbol: 'x²',   accent: '#147c7c', wide: false },
  'matrices-y-vectores':{ symbol: '[ ]', accent: '#0a4040', wide: false },
  aritmetica:          { symbol: '%',    accent: '#147c7c', wide: false },
  estadistica:         { symbol: 'σ',    accent: '#0F5C5C', wide: false },
  geometria:           { symbol: '△',    accent: '#0a4040', wide: true  },
};

export function DirectorySection() {
  const total = categories.reduce((n, c) => n + c.calculators.length, 0);

  return (
    <section
      className="bg-white-soft py-12 lg:py-16"
      aria-labelledby="directory-heading"
      id="directorio"
    >
      <div className="site-shell">

        {/* ── Header ────────────────────────────────────────────────────── */}
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Índice completo</p>
            <h2
              id="directory-heading"
              className="mt-3 text-[1.9rem] font-bold leading-tight lg:text-[2.5rem]"
              style={{ color: '#102a43' }}
            >
              Directorio de calculadoras matemáticas
            </h2>
          </div>
          <p className="shrink-0 text-sm font-semibold" style={{ color: '#829ab1' }}>
            {total} herramientas &middot; {categories.length} áreas
          </p>
        </div>

        {/* ── Bento grid ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const meta = categoryMeta[cat.slug] ?? { symbol: '∑', accent: '#147c7c', wide: false };
            const isWide = meta.wide;

            return (
              <article
                key={cat.slug}
                aria-labelledby={`dir-${cat.slug}`}
                className={`directory-card flex flex-col rounded-2xl bg-white ${isWide ? 'sm:col-span-2' : ''}`}
                style={{
                  border: '1px solid #D7E2EA',
                  boxShadow: '0 2px 16px rgba(16,42,67,0.06)',
                }}
              >
                {/* Card header */}
                <div className="flex items-start gap-4 p-5 pb-4">
                  {/* Symbol badge */}
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold"
                    style={{ background: '#DDF3F0', color: meta.accent }}
                  >
                    {meta.symbol}
                  </div>

                  <div className="flex-1 min-w-0 pt-0.5">
                    <Link
                      id={`dir-${cat.slug}`}
                      href={`/calculadoras/${cat.slug}/`}
                      className="block text-base font-bold leading-snug transition-colors hover:text-teal"
                      style={{ color: '#102a43' }}
                    >
                      {cat.name}
                    </Link>
                    <p className="mt-0.5 text-xs font-semibold" style={{ color: '#829ab1' }}>
                      {cat.calculators.length} calculadoras
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-5" style={{ height: '1px', background: '#EEF4F7' }} />

                {/* Wide card: description + chip grid */}
                {isWide ? (
                  <div className="flex flex-1 flex-col p-5 pt-4">
                    <p className="mb-4 text-sm leading-relaxed" style={{ color: '#627d98' }}>
                      {cat.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.calculators.map((calc) => (
                        <Link
                          key={calc.url}
                          href={calc.url}
                          className="rounded-full border px-3 py-1.5 text-xs font-semibold transition-all hover:border-teal hover:bg-teal hover:text-white"
                          style={{
                            borderColor: '#D7E2EA',
                            color: '#334e68',
                            background: '#F8FAFC',
                          }}
                        >
                          {shortName(calc.name)}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Narrow card: simple link list */
                  <ul className="flex-1 divide-y px-5" style={{ borderColor: '#EEF4F7' }}>
                    {cat.calculators.map((calc) => (
                      <li key={calc.url}>
                        <Link
                          href={calc.url}
                          className="flex items-center justify-between gap-2 py-2.5 text-sm font-medium transition-colors hover:text-teal"
                          style={{ color: '#334e68' }}
                        >
                          <span>{shortName(calc.name)}</span>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="shrink-0 opacity-30 transition-opacity group-hover:opacity-100" style={{ color: '#147c7c' }}>
                            <line x1="1.5" y1="5" x2="8.5" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                            <polyline points="5.5,2 8.5,5 5.5,8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Card footer */}
                <div
                  className="mx-5 flex items-center justify-between py-3.5"
                  style={{ borderTop: '1px solid #EEF4F7' }}
                >
                  <Link
                    href={`/calculadoras/${cat.slug}/`}
                    className="text-sm font-bold transition-colors hover:opacity-80"
                    style={{ color: meta.accent }}
                  >
                    Ver área &rarr;
                  </Link>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-bold"
                    style={{ background: '#DDF3F0', color: meta.accent }}
                  >
                    {cat.calculators.length}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
