import Link from 'next/link';

export interface UseCase {
  situation: string;
  tool: string;
  href: string;
}

interface Props {
  headingId: string;
  rows: UseCase[];
}

export function HubWhenToUse({ headingId, rows }: Props) {
  return (
    <section className="py-12 lg:py-16 bg-white-soft" aria-labelledby={headingId}>
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Guía de uso</p>
          <h2
            id={headingId}
            className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
            style={{ color: '#0a3535' }}
          >
            Cuándo usar cada calculadora
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Elige la herramienta según el tipo de operación que necesitas resolver.
          </p>
        </div>

        {/* Table header — desktop only */}
        <div
          className="hidden grid-cols-12 gap-4 rounded-t-xl px-5 py-3 sm:grid"
          style={{ background: '#EEF4F7', borderBottom: '1px solid #D7E2EA' }}
        >
          <span className="col-span-1 text-xs font-bold uppercase tracking-wider" style={{ color: '#829ab1' }}>#</span>
          <span className="col-span-6 text-xs font-bold uppercase tracking-wider" style={{ color: '#829ab1' }}>Si necesitas</span>
          <span className="col-span-5 text-xs font-bold uppercase tracking-wider" style={{ color: '#829ab1' }}>Herramienta recomendada</span>
        </div>

        {/* Rows */}
        <div
          className="overflow-hidden rounded-xl sm:rounded-t-none"
          style={{ border: '1px solid #D7E2EA', borderTop: 'none' }}
        >
          {rows.map((row, i) => (
            <div
              key={row.href}
              className="grid grid-cols-1 gap-3 px-5 py-4 sm:grid-cols-12 sm:items-center sm:gap-4"
              style={{
                borderBottom: i < rows.length - 1 ? '1px solid #EEF4F7' : 'none',
                background: i % 2 === 0 ? '#ffffff' : '#FAFCFD',
              }}
            >
              <span className="font-mono text-xs font-bold sm:col-span-1" style={{ color: '#D8A31A' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm leading-relaxed sm:col-span-6" style={{ color: '#334e68' }}>
                {row.situation}
              </p>
              <div className="sm:col-span-5">
                <Link
                  href={row.href}
                  className="inline-flex items-center gap-2 text-sm font-bold transition-colors hover:opacity-75"
                  style={{ color: '#0F5C5C' }}
                >
                  {row.tool}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <line x1="1.5" y1="5" x2="8.5" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    <polyline points="5.5,2 8.5,5 5.5,8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
