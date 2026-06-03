import Link from 'next/link';
import { categories } from '@/lib/data';
import { CalcSearchBox } from '@/components/CalcSearchBox';

const categorySymbols: Record<string, string> = {
  calculo: '∫',
  algebra: 'x²',
  'matrices-y-vectores': '[ ]',
  aritmetica: '%',
  estadistica: 'σ',
  geometria: '△',
};

export function CalcDirectoryHero() {
  const total = categories.reduce((n, c) => n + c.calculators.length, 0);

  return (
    <section
      className="relative overflow-hidden bg-ocean"
      aria-label="Directorio de calculadoras"
    >
      <div className="absolute inset-0 math-pattern opacity-30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-white-soft" aria-hidden="true" />

      <div className="site-shell relative grid grid-cols-1 items-start gap-10 pb-10 pt-7 lg:grid-cols-12 lg:pb-12 lg:pt-9">

        {/* Left column */}
        <div className="lg:col-span-7">
          <nav aria-label="Migas de pan" className="mb-5">
            <ol className="flex items-center gap-2 text-xs font-semibold" style={{ color: 'rgba(221,243,240,0.6)' }}>
              <li><Link href="/" className="transition-colors hover:text-white">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li style={{ color: '#DDF3F0' }}>Calculadoras</li>
            </ol>
          </nav>

          <p className="eyebrow" style={{ color: '#D8A31A' }}>Directorio matemático</p>

          <h1 className="mt-3 text-[1.9rem] font-bold leading-tight text-white sm:text-[2.4rem] lg:text-[2.8rem]">
            Explora todas las calculadoras por categoría
          </h1>

          <p className="mt-4 max-w-[520px] text-base leading-relaxed" style={{ color: '#DDF3F0' }}>
            Navega por seis áreas matemáticas, explora cada categoría y localiza la calculadora que necesitas para tu operación.
          </p>

          {/* Live search */}
          <div className="mt-7">
            <CalcSearchBox />
          </div>

          <p className="mt-3 text-xs font-semibold" style={{ color: 'rgba(221,243,240,0.5)' }}>
            Escribe una operación: integrales, matrices, porcentajes
          </p>
        </div>

        {/* Right column — stats + category nav */}
        <div className="lg:col-span-5">
          <div className="academic-card overflow-hidden">
            <div className="border-b border-line bg-aqua-soft px-5 py-4">
              <p className="eyebrow">Índice del directorio</p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  { value: String(total), label: 'calculadoras' },
                  { value: String(categories.length), label: 'categorías' },
                  { value: 'ES', label: 'en español' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-2xl font-bold text-deep-teal">{stat.value}</p>
                    <p className="mt-0.5 text-xs font-semibold text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-5 py-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted">Ir a categoría</p>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`#categoria-${cat.slug}`}
                    className="flex items-center gap-2.5 rounded-lg border border-line bg-white-soft px-3 py-2.5 text-sm font-semibold text-slate transition-colors hover:border-teal hover:bg-aqua-soft hover:text-teal"
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded font-mono text-[10px] font-bold"
                      style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                    >
                      {categorySymbols[cat.slug]}
                    </span>
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
