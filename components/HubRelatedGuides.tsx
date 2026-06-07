import Link from 'next/link';

export interface Guide {
  href: string;
  category: string;
  title: string;
  description: string;
}

interface Props {
  headingId: string;
  guides: Guide[];
}

export function HubRelatedGuides({ headingId, guides }: Props) {
  return (
    <section className="py-12 lg:py-16 bg-white-soft" aria-labelledby={headingId}>
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Artículos del blog</p>
          <h2
            id={headingId}
            className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
            style={{ color: '#0a3535' }}
          >
            Guías relacionadas
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Lee estas guías para entender los conceptos detrás de cada calculadora.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              aria-label={`Leer: ${guide.title}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-[#D7E2EA] transition-all hover:border-[#147c7c] hover:shadow-md"
            >
              {/* Category pill */}
              <div className="flex items-center gap-2 px-5 pt-4">
                <span
                  className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                >
                  {guide.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-5 py-4">
                <h3
                  className="text-sm font-bold leading-snug transition-colors group-hover:text-[#147c7c]"
                  style={{ color: '#0a3535' }}
                >
                  {guide.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: '#627d98' }}>
                  {guide.description}
                </p>
              </div>

              {/* CTA */}
              <div className="px-5 pb-5 pt-1">
                <span
                  className="text-xs font-bold transition-colors group-hover:opacity-75"
                  style={{ color: '#D8A31A' }}
                  aria-hidden="true"
                >
                  Leer guía &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
