import Link from 'next/link';

function IconArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <line x1="2" y1="6.5" x2="11" y2="6.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <polyline points="7.5,3 11,6.5 7.5,10" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CtaBand() {
  return (
    <section className="bg-page px-4 py-10" aria-label="Acceso al directorio completo">
      <div className="site-shell overflow-hidden rounded-lg bg-deep-teal text-white-soft shadow-[0_20px_50px_rgba(7,59,58,0.18)]">
        <div className="math-pattern grid grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-12 md:px-10 lg:px-12">
          <div className="md:col-span-8">
            <p className="mb-3 text-sm font-bold text-gold">Directorio académico</p>
            <h2 className="text-[2rem] leading-tight text-white-soft lg:text-[2.75rem]">
              Todo tu trabajo matemático, en una plataforma clara.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-teal-soft">
              Encuentra la herramienta adecuada, revisa el procedimiento y vuelve al índice cuando necesites comparar
              operaciones.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              href="/calculadoras"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-black text-ink transition-colors hover:bg-[#e6b636]"
            >
              Explorar calculadoras
              <IconArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
