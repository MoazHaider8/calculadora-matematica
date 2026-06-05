import Link from 'next/link';

export function BlogArchiveHero() {
  return (
    <section className="bg-ocean pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-shell">
        <nav aria-label="Ruta de navegación" className="mb-8 flex items-center gap-2 text-xs text-white/60">
          <Link href="/" className="transition-colors hover:text-white/90">Inicio</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-white/90">Blog</span>
        </nav>

        <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
          Blog
        </p>
        <h1 className="mb-4 text-[2rem] font-bold tracking-tight text-white lg:text-[2.75rem]">
          Blog de matemáticas
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-white/75">
          Lee guías claras sobre aritmética, álgebra, cálculo, estadística, geometría, matrices y vectores. Cada artículo explica conceptos, fórmulas y ejemplos de forma práctica.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {['30 artículos', '6 áreas matemáticas', 'Guías en español'].map(chip => (
            <span
              key={chip}
              className="rounded-full border border-white/25 px-3.5 py-1.5 text-xs font-semibold text-white/80"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
