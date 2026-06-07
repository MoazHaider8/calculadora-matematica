import Link from 'next/link';

export interface Concept {
  formula: string;
  name: string;
  explanation: string;
  href: string;
}

interface Props {
  headingId: string;
  concepts: Concept[];
}

export function HubConcepts({ headingId, concepts }: Props) {
  return (
    <section
      className="py-12 lg:py-16"
      style={{ background: '#f8fafc' }}
      aria-labelledby={headingId}
    >
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Conceptos clave</p>
          <h2
            id={headingId}
            className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
            style={{ color: '#0a3535' }}
          >
            Conceptos y fórmulas principales
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Cada concepto corresponde a una calculadora de esta categoría.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((c) => (
            <article
              key={c.name}
              className="flex flex-col rounded-2xl bg-white p-5"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              <div className="mb-4 h-0.5 w-8 rounded-full" style={{ background: '#D8A31A' }} />

              <div className="mb-3 flex items-center gap-3">
                <span
                  className="flex h-9 shrink-0 items-center justify-center rounded-lg px-2 font-mono text-xs font-bold"
                  style={{ background: '#0a3535', color: 'rgba(216,163,26,0.9)', minWidth: '2.25rem' }}
                >
                  {c.formula}
                </span>
                <h3 className="text-base font-bold leading-snug" style={{ color: '#0a3535' }}>{c.name}</h3>
              </div>

              <p className="flex-1 text-sm leading-relaxed" style={{ color: '#627d98' }}>
                {c.explanation}
              </p>

              <Link
                href={c.href}
                className="mt-4 text-sm font-bold transition-opacity hover:opacity-75"
                style={{ color: '#147c7c' }}
              >
                Abrir calculadora &rarr;
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
