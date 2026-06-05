import Link from 'next/link';

const chips = ['Uso educativo', 'Calculadoras online', 'Responsabilidad', 'Contenido', 'Transparencia'];

export function AvisoHero() {
  return (
    <section className="relative overflow-hidden bg-ocean" aria-label="Aviso Legal">
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
            <li style={{ color: '#DDF3F0' }}>Aviso Legal</li>
          </ol>
        </nav>

        <p className="eyebrow" style={{ color: '#D8A31A' }}>Información legal</p>

        <h1 className="mt-3 max-w-2xl text-[1.9rem] font-bold leading-tight text-white sm:text-[2.4rem] lg:text-[2.8rem]">
          Aviso Legal
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: '#DDF3F0' }}>
          Esta página recoge la información legal general sobre el uso de Calculadora Matemática, sus herramientas educativas, el contenido disponible, las limitaciones aplicables, los enlaces externos y la responsabilidad del usuario.
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
