import Link from 'next/link';

const chips = ['Uso del sitio', 'Calculadoras online', 'Contenido educativo', 'Responsabilidad', 'Transparencia'];

export function TerminosHero() {
  return (
    <section className="relative overflow-hidden bg-ocean" aria-label="Términos y Condiciones">
      <div className="absolute inset-0 math-pattern opacity-30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-page" aria-hidden="true" />

      <div className="site-shell relative py-10 lg:py-14">

        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
            <li>
              <Link href="/" className="transition-colors hover:text-white hover:underline underline-offset-2" style={{ color: 'rgba(221,243,240,0.75)' }}>
                Inicio
              </Link>
            </li>
            <li aria-hidden="true" style={{ color: 'rgba(221,243,240,0.35)' }}>&rsaquo;</li>
            <li style={{ color: '#DDF3F0' }}>Términos y Condiciones</li>
          </ol>
        </nav>

        <p className="eyebrow" style={{ color: '#D8A31A' }}>Términos de uso</p>

        <h1 className="mt-3 max-w-2xl text-[1.9rem] font-bold leading-tight text-white sm:text-[2.4rem] lg:text-[2.8rem]">
          Términos y Condiciones
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: '#DDF3F0' }}>
          Esta página describe los términos para usar Calculadora Matemática, incluyendo las herramientas de cálculo, el contenido educativo, la responsabilidad del usuario, las limitaciones de los resultados y el uso general del sitio.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map(chip => (
            <span
              key={chip}
              className="rounded-lg border px-3.5 py-2 text-sm font-semibold"
              style={{ borderColor: 'rgba(221,243,240,0.25)', color: '#DDF3F0' }}
            >
              {chip}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
