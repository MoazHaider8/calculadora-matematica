import Link from 'next/link';
import { categories } from '@/lib/data';

const mathSymbols: Record<string, string> = {
  calculo: '∫',
  algebra: 'x²',
  'matrices-y-vectores': '[ ]',
  aritmetica: '%',
  estadistica: 'σ',
  geometria: '△',
};

export function AreasSection() {
  return (
    <section className="section-pad bg-white-soft" aria-labelledby="areas-heading">
      <div className="site-shell">
        <div className="mb-10">
          <p className="eyebrow">6 áreas matemáticas</p>
          <h2
            id="areas-heading"
            className="mt-3 text-[1.75rem] font-bold leading-tight lg:text-[2.4rem]"
            style={{ color: '#102a43' }}
          >
            Calculadoras por área matemática
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: '#334e68' }}>
            Herramientas organizadas en cálculo, álgebra, matrices, aritmética, estadística y geometría para encontrar lo que necesitas sin navegar por un listado genérico.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/calculadoras/${cat.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#D7E2EA] bg-white p-6 transition-all hover:border-[#147c7c] hover:shadow-md"
              aria-label={`Ver calculadoras de ${cat.name}`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold"
                  style={{ background: '#0a3535', color: 'rgba(216,163,26,0.9)' }}
                  aria-hidden="true"
                >
                  {mathSymbols[cat.slug]}
                </div>
                <div>
                  <h3
                    className="text-base font-bold leading-snug transition-colors group-hover:text-[#147c7c]"
                    style={{ color: '#102a43' }}
                  >
                    {cat.name}
                  </h3>
                  <p className="text-xs font-semibold" style={{ color: '#829ab1' }}>
                    {cat.calculators.length} calculadoras
                  </p>
                </div>
              </div>
              <p className="flex-1 text-sm leading-relaxed" style={{ color: '#627d98' }}>
                {cat.description}
              </p>
              <div
                className="mt-4 flex items-center gap-1.5 text-xs font-bold"
                style={{ color: '#147c7c' }}
                aria-hidden="true"
              >
                Explorar área
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <line x1="1.5" y1="5" x2="8.5" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  <polyline
                    points="5.5,2 8.5,5 5.5,8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/calculadoras"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: '#0F5C5C' }}
          >
            Ver todas las calculadoras
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <line x1="2" y1="6" x2="10.5" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <polyline
                points="7,2.5 10.5,6 7,9.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
