import Link from 'next/link';

export function ArticuloEcLinCuadHero() {
  return (
    <section className="bg-ocean pt-10 pb-12 lg:pt-14 lg:pb-16">
      <div className="site-shell">
        <nav aria-label="Ruta de navegación" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/70">
            <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li aria-hidden="true" className="text-white/40">/</li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li aria-hidden="true" className="text-white/40">/</li>
            <li className="text-white/90">Ecuaciones lineales y cuadráticas</li>
          </ol>
        </nav>

        <p
          className="mb-3 inline-block rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest"
          style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
        >
          Álgebra
        </p>

        <h1 className="mt-2 text-[1.85rem] font-extrabold leading-tight text-white lg:text-[2.4rem]">
          Ecuaciones lineales y cuadráticas: diferencias
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
          La principal diferencia es el grado: la ecuación lineal tiene grado 1 y una sola solución; la cuadrática tiene grado 2 y puede tener hasta dos soluciones reales.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {['Grado 1 vs grado 2', 'Número de soluciones', 'Fórmula cuadrática', 'Discriminante'].map(chip => (
              <span
                key={chip}
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}
              >
                {chip}
              </span>
            ))}
          </div>
          <span className="text-xs text-white/50">8 min de lectura</span>
        </div>

        <div className="mt-7">
          <Link
            href="/calculadoras/algebra/calculadora-de-ecuaciones"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-opacity hover:opacity-90"
            style={{ background: '#D8A31A', color: '#fff' }}
          >
            Calculadora de ecuaciones &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
