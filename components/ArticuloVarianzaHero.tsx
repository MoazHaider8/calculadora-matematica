import Link from 'next/link';

const chips = ['Varianza', 'Desviación estándar', 'Dispersión', 'Poblacional', 'Muestral'];

export function ArticuloVarianzaHero() {
  return (
    <section className="relative overflow-hidden bg-ocean" aria-label="Varianza y desviación estándar: diferencia y ejemplos">
      <div className="absolute inset-0 math-pattern opacity-30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-page" aria-hidden="true" />
      <div className="site-shell relative py-10 lg:py-14">
        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
            <li><Link href="/" style={{ color: 'rgba(221,243,240,0.75)' }} className="transition-colors hover:text-white hover:underline underline-offset-2">Inicio</Link></li>
            <li aria-hidden="true" style={{ color: 'rgba(221,243,240,0.35)' }}>&rsaquo;</li>
            <li><Link href="/blog" style={{ color: 'rgba(221,243,240,0.75)' }} className="transition-colors hover:text-white hover:underline underline-offset-2">Blog</Link></li>
            <li aria-hidden="true" style={{ color: 'rgba(221,243,240,0.35)' }}>&rsaquo;</li>
            <li style={{ color: '#DDF3F0' }}>Varianza y desviación estándar</li>
          </ol>
        </nav>
        <p className="eyebrow" style={{ color: '#D8A31A' }}>Estadística</p>
        <h1 className="mt-3 max-w-2xl text-[1.9rem] font-bold leading-tight text-white sm:text-[2.4rem] lg:text-[2.8rem]">
          Varianza y desviación estándar: diferencia y ejemplos
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: '#DDF3F0' }}>
          La varianza y la desviación estándar miden la dispersión de los datos respecto a la media. Este artículo explica qué calcula cada una, en qué se diferencian, cuándo usar cada medida y cómo interpretarlas con ejemplos paso a paso.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map(chip => (
            <span key={chip} className="rounded-lg border px-3.5 py-2 text-sm font-semibold" style={{ borderColor: 'rgba(221,243,240,0.25)', color: '#DDF3F0' }}>{chip}</span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-5">
          <span className="text-xs font-semibold" style={{ color: 'rgba(221,243,240,0.55)' }}>Tiempo de lectura: <span className="font-bold" style={{ color: '#DDF3F0' }}>6 minutos</span></span>
          <span className="text-xs font-semibold" style={{ color: 'rgba(221,243,240,0.55)' }}>Nivel: <span className="font-bold" style={{ color: '#DDF3F0' }}>Intermedio</span></span>
        </div>
        <div className="mt-7">
          <Link href="/calculadoras/estadistica/calculadora-de-desviacion-estandar" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-gold">
            Usar calculadora de desviación estándar &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
