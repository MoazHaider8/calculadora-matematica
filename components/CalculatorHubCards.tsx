import Link from 'next/link';

export interface HubCard {
  name: string;
  description: string;
  preview: string;
  href: string;
}

interface Props {
  headingId: string;
  heading: string;
  intro: string;
  cards: HubCard[];
}

export function CalculatorHubCards({ headingId, heading, intro, cards }: Props) {
  return (
    <section className="bg-white py-14 lg:py-20" aria-labelledby={headingId}>
      <div className="site-shell">
        <div className="mb-10">
          <h2
            id={headingId}
            className="text-[1.75rem] font-bold leading-tight lg:text-[2rem]"
            style={{ color: '#0a3535' }}
          >
            {heading}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              aria-label={`Abrir ${card.name}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-[#D7E2EA] transition-all hover:border-[#147c7c] hover:shadow-md"
            >
              {/* Formula preview strip */}
              <div
                className="px-5 py-3 font-mono text-sm"
                style={{ background: '#0a3535', color: 'rgba(216,163,26,0.9)' }}
                aria-hidden="true"
              >
                {card.preview}
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col px-5 py-4">
                <h3
                  className="text-base font-bold leading-snug transition-colors group-hover:text-[#147c7c]"
                  style={{ color: '#0a3535' }}
                >
                  {card.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: '#334e68' }}>
                  {card.description}
                </p>
              </div>

              {/* CTA */}
              <div className="px-5 pb-5 pt-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold text-white"
                  style={{ background: '#D8A31A' }}
                  aria-hidden="true"
                >
                  Usar calculadora
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <line x1="1.5" y1="5" x2="8.5" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    <polyline points="5.5,2 8.5,5 5.5,8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
