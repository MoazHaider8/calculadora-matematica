import Link from 'next/link';
import { categories } from '@/lib/data';

const categorySymbols: Record<string, string> = {
  calculo: '∫',
  algebra: 'x²',
  'matrices-y-vectores': '[ ]',
  aritmetica: '%',
  estadistica: 'σ',
  geometria: '△',
};

const categoryAccents: Record<string, string> = {
  calculo: '#0F5C5C',
  algebra: '#147c7c',
  'matrices-y-vectores': '#0a4040',
  aritmetica: '#147c7c',
  estadistica: '#0F5C5C',
  geometria: '#0a4040',
};

function IconArrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <line x1="2" y1="6" x2="10.5" y2="6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <polyline points="7,2.5 10.5,6 7,9.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CalcCategoryExplorer() {
  return (
    <section className="py-10 lg:py-14 bg-white-soft" aria-labelledby="explorer-heading" id="categorias">
      <div className="site-shell">

        <div className="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Explorar por categoría</p>
            <h2
              id="explorer-heading"
              className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.4rem]"
              style={{ color: '#102a43' }}
            >
              Seis áreas matemáticas, treinta herramientas
            </h2>
          </div>
          <p className="text-base leading-relaxed lg:text-right" style={{ color: '#627d98' }}>
            Cada categoría agrupa calculadoras relacionadas por tema para facilitar la búsqueda y la navegación.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const accent = categoryAccents[cat.slug] ?? '#0F5C5C';
            const symbol = categorySymbols[cat.slug] ?? '∑';

            return (
              <article
                key={cat.slug}
                id={`categoria-${cat.slug}`}
                className="directory-card flex flex-col rounded-2xl bg-white"
                style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 16px rgba(16,42,67,0.06)' }}
                aria-labelledby={`exp-${cat.slug}`}
              >
                {/* Card header */}
                <div className="flex items-center gap-4 rounded-t-2xl px-5 py-4" style={{ borderBottom: '1px solid #EEF4F7' }}>
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-mono text-base font-bold"
                    style={{ background: '#DDF3F0', color: accent }}
                  >
                    {symbol}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2
                      id={`exp-${cat.slug}`}
                      className="text-lg font-bold leading-snug"
                      style={{ color: '#102a43' }}
                    >
                      {cat.name}
                    </h2>
                    <p className="text-xs font-semibold" style={{ color: '#829ab1' }}>
                      {cat.calculators.length} calculadoras
                    </p>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold"
                    style={{ background: '#DDF3F0', color: accent }}
                  >
                    {cat.calculators.length}
                  </span>
                </div>

                {/* Description */}
                <p className="px-5 pt-4 text-sm leading-relaxed" style={{ color: '#627d98' }}>
                  {cat.description}
                </p>

                {/* Calculator links */}
                <ul className="flex-1 px-5 pt-3">
                  {cat.calculators.map((calc) => (
                    <li key={calc.url}>
                      <Link
                        href={calc.url}
                        className="flex items-center justify-between gap-2 border-b py-2.5 text-sm font-medium transition-colors hover:text-teal last:border-0"
                        style={{ color: '#334e68', borderColor: '#EEF4F7' }}
                      >
                        <span>{calc.name}</span>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="shrink-0 opacity-25 transition-opacity hover:opacity-100" style={{ color: '#147c7c' }}>
                          <line x1="1.5" y1="5" x2="8.5" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                          <polyline points="5.5,2 8.5,5 5.5,8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Footer CTA */}
                <div className="px-5 pb-5 pt-4">
                  <Link
                    href={`/calculadoras/${cat.slug}/`}
                    className="flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-md"
                    style={{ background: accent }}
                  >
                    <span>Ver todas las calculadoras de {cat.name}</span>
                    <IconArrow />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
