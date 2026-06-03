import Link from 'next/link';
import { categories } from '@/lib/data';

// ── Left side icons ──────────────────────────────────────────────────────────

function IconFormula() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4c-1 0-2 .8-2.2 1.8L2 10h4" />
      <path d="M9 4h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9" />
      <line x1="5" y1="14" x2="17" y2="14" />
      <line x1="5" y1="18" x2="13" y2="18" />
    </svg>
  );
}

function IconSteps() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="4 6 8 10 4 14" />
      <line x1="11" y1="10" x2="18" y2="10" />
      <line x1="11" y1="6" x2="18" y2="6" />
      <line x1="11" y1="14" x2="18" y2="14" />
    </svg>
  );
}

function IconSpanish() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="M3 11h16" />
      <path d="M11 3c-2.5 3-4 5-4 8s1.5 5 4 8" />
      <path d="M11 3c2.5 3 4 5 4 8s-1.5 5-4 8" />
    </svg>
  );
}

function IconOrganized() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="12" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="12" width="7" height="7" rx="1" />
      <rect x="12" y="12" width="7" height="7" rx="1" />
    </svg>
  );
}

const features = [
  {
    icon: <IconFormula />,
    title: 'Fórmulas incluidas',
    description: 'Cada calculadora muestra las fórmulas que aplica para que puedas revisar el procedimiento matemático.',
  },
  {
    icon: <IconSteps />,
    title: 'Pasos detallados',
    description: 'Los resultados se presentan con el proceso completo para verificar cálculos y estudiar el método.',
  },
  {
    icon: <IconSpanish />,
    title: 'Contenido en español',
    description: 'Todas las herramientas, instrucciones y resultados están escritos en español.',
  },
  {
    icon: <IconOrganized />,
    title: 'Organizado por área',
    description: 'Las calculadoras están agrupadas en seis áreas matemáticas para facilitar la búsqueda.',
  },
];

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
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

          {/* ── Left: content ─────────────────────────────────────────────── */}
          <div>
            <p className="eyebrow">6 áreas matemáticas</p>
            <h2
              id="areas-heading"
              className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.5rem]"
              style={{ color: '#102a43' }}
            >
              Calculadoras matemáticas organizadas por área
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed" style={{ color: '#334e68' }}>
              Este índice agrupa herramientas matemáticas por cálculo, álgebra, matrices y vectores,
              aritmética, estadística y geometría para encontrar la herramienta correcta sin buscar en un listado genérico.
            </p>

            {/* 2x2 feature grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div
                    className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold" style={{ color: '#102a43' }}>{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: '#627d98' }}>{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/categorias"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: '#0F5C5C' }}
            >
              Ver todas las categorías
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <line x1="2" y1="6" x2="10.5" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <polyline points="7,2.5 10.5,6 7,9.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* ── Right: visual panel ────────────────────────────────────────── */}
          <div className="relative">

            {/* Decorative dot grid — top right corner, like reference */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-6 h-28 w-28 opacity-40"
              style={{
                backgroundImage: 'radial-gradient(circle, #147c7c 1.5px, transparent 1.5px)',
                backgroundSize: '12px 12px',
              }}
            />

            {/* Main large card — math areas list */}
            <div
              className="relative z-10 overflow-hidden rounded-2xl"
              style={{
                background: 'linear-gradient(145deg, #0a4040 0%, #0f5c5c 60%, #147c7c 100%)',
                boxShadow: '0 24px 60px rgba(15,92,92,0.35)',
              }}
            >
              {/* Card inner grid pattern */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px),' +
                    'linear-gradient(180deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              <div className="relative px-7 pb-6 pt-7">
                <p className="mb-5 text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(221,243,240,0.65)' }}>
                  Áreas disponibles en la plataforma
                </p>

                <div className="space-y-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/calculadoras/${cat.slug}/`}
                      className="group flex items-center gap-4 rounded-xl px-4 py-3.5 transition-all duration-150 hover:bg-white/10"
                    >
                      {/* Symbol badge */}
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold"
                        style={{ background: 'rgba(255,255,255,0.12)', color: '#DDF3F0' }}
                      >
                        {mathSymbols[cat.slug]}
                      </div>

                      {/* Name + count */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-white">{cat.name}</p>
                        <p className="text-xs" style={{ color: 'rgba(221,243,240,0.6)' }}>
                          {cat.calculators.length} calculadoras
                        </p>
                      </div>

                      {/* Arrow */}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                        className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                        style={{ color: '#DDF3F0' }}
                      >
                        <line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <polyline points="8,3 12,7 8,11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stats card — overlapping bottom-right like reference photos */}
            <div
              className="absolute -bottom-5 -left-5 z-20 rounded-2xl bg-white px-5 py-4"
              style={{
                boxShadow: '0 12px 36px rgba(16,42,67,0.14)',
                border: '1px solid #D7E2EA',
                minWidth: '190px',
              }}
            >
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#147c7c' }}>
                Plataforma
              </p>
              <p className="mt-1.5 text-2xl font-bold" style={{ color: '#102a43' }}>30+</p>
              <p className="text-xs font-semibold" style={{ color: '#627d98' }}>
                calculadoras en español
              </p>
              <div className="mt-2.5 flex gap-1.5">
                {['Cálculo', 'Álgebra', 'Aritmética'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                    style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
