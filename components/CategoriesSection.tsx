import Link from 'next/link';
import { categories } from '@/lib/data';

function IconArrow() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
      <line x1="1.5" y1="5.5" x2="9.5" y2="5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <polyline points="6,2 9.5,5.5 6,9" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CategoriesSection() {
  return (
    <section className="border-b border-line bg-white-soft py-14 lg:py-20" aria-labelledby="categories-heading">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase text-teal">Áreas matemáticas</p>
          <h2 id="categories-heading" className="text-[2rem] text-ink lg:text-[2.625rem]">
            Explora calculadoras por tema
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat.slug}
              className="group flex flex-col rounded-lg border border-line bg-panel transition-all duration-150 hover:border-teal hover:bg-white-soft"
            >
              <div className="border-b border-line px-6 pb-5 pt-6">
                <div className="flex items-start justify-between gap-3">
                  <Link href={`/calculadoras/${cat.slug}/`} className="block">
                    <h3 className="text-[1.375rem] leading-snug text-ink transition-colors group-hover:text-teal">
                      {cat.name}
                    </h3>
                  </Link>
                  <span className="mt-1 shrink-0 whitespace-nowrap rounded bg-white-soft px-2 py-0.5 text-[0.65rem] font-semibold text-muted">
                    {cat.calculators.length} calculadoras
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-soft">{cat.description}</p>
              </div>

              <ul className="flex-1 space-y-1 px-6 py-4">
                {cat.calculators.map((calc) => (
                  <li key={calc.url}>
                    <Link
                      href={calc.url}
                      className="group/item flex items-center justify-between gap-2 py-1.5 text-sm text-slate-soft transition-colors hover:text-teal"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {calc.name}
                      </span>
                      <span className="shrink-0 text-muted transition-colors group-hover/item:text-teal">
                        <IconArrow />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="rounded-b-lg border-t border-line bg-white-soft px-6 py-4">
                <Link
                  href={`/calculadoras/${cat.slug}/`}
                  className="flex items-center gap-1.5 text-[0.8125rem] font-semibold text-teal transition-colors hover:text-deep-teal"
                >
                  Ver calculadoras de {cat.name.toLowerCase()}
                  <IconArrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
