import Link from 'next/link';

export function SistemasArtContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Cómo se resuelve un sistema de ecuaciones?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Un sistema de ecuaciones se resuelve encontrando los valores que satisfacen todas las ecuaciones a la vez. Los tres métodos principales son sustitución, igualación y reducción (eliminación).
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">Sistema: x + y = 5</p>
              <p className="font-mono text-sm text-white">         2x − y = 1</p>
              <p className="mt-2 font-mono text-sm text-white/70">Suma ambas: 3x = 6 → x = 2</p>
              <p className="mt-1 font-mono text-sm text-white/70">2 + y = 5 → y = 3</p>
              <p className="mt-2 font-mono text-sm text-white">Solución: (x=2, y=3)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Qué es un sistema de ecuaciones</h2>
          <p className="text-sm leading-relaxed text-slate">
            Un sistema de ecuaciones es un conjunto de dos o más ecuaciones con las mismas incógnitas. La solución es el conjunto de valores que satisface todas las ecuaciones simultáneamente.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Los sistemas más comunes son los de 2×2 (dos ecuaciones con dos incógnitas) y los de 3×3 (tres ecuaciones con tres incógnitas). La solución puede ser un punto, una recta (infinitas soluciones) o no existir.
          </p>
        </div>
      </section>

      {/* Método de sustitución */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Método de sustitución</h2>
          <p className="text-sm leading-relaxed text-slate">
            Despeja una incógnita en una ecuación y sustitúyela en la otra. Así reduces el sistema a una sola ecuación con una incógnita.
          </p>
          <div className="mt-4 rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
            <p className="font-bold text-sm text-ink mb-3">Ejemplo: x + y = 5 y 2x − y = 1</p>
            <ol className="space-y-2">
              {[
                'De la primera: y = 5 − x',
                'Sustituye en la segunda: 2x − (5−x) = 1',
                '2x − 5 + x = 1 → 3x = 6 → x = 2',
                'Sustituye x=2: y = 5 − 2 = 3',
              ].map((s, i) => (
                <li key={i} className="text-xs text-slate flex gap-2">
                  <span className="font-bold" style={{ color: '#147c7c' }}>{i + 1}.</span> {s}
                </li>
              ))}
            </ol>
            <div className="mt-3 rounded-lg px-3 py-2" style={{ background: '#DDF3F0' }}>
              <p className="font-mono text-xs font-bold" style={{ color: '#0a3535' }}>Solución: x = 2, y = 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Método de reducción */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Método de reducción (eliminación)</h2>
          <p className="text-sm leading-relaxed text-slate">
            Suma o resta las ecuaciones para eliminar una incógnita. A veces hay que multiplicar una ecuación antes de sumarlas para que los coeficientes se anulen.
          </p>
          <div className="mt-4 rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
            <p className="font-bold text-sm text-ink mb-3">Ejemplo: 3x + 2y = 12 y x − 2y = 4</p>
            <ol className="space-y-2">
              {[
                'Los coeficientes de y son +2 y −2: se cancelan al sumar.',
                '(3x + 2y) + (x − 2y) = 12 + 4',
                '4x = 16 → x = 4',
                'Sustituye x=4: 3×4 + 2y = 12 → 2y = 0 → y = 0',
              ].map((s, i) => (
                <li key={i} className="text-xs text-slate flex gap-2">
                  <span className="font-bold" style={{ color: '#147c7c' }}>{i + 1}.</span> {s}
                </li>
              ))}
            </ol>
            <div className="mt-3 rounded-lg px-3 py-2" style={{ background: '#DDF3F0' }}>
              <p className="font-mono text-xs font-bold" style={{ color: '#0a3535' }}>Solución: x = 4, y = 0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de sistemas */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Tipos de sistemas según sus soluciones</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { name: 'Compatible determinado', desc: 'Tiene exactamente una solución. Las rectas se cortan en un punto.', ex: 'x=2, y=3' },
              { name: 'Compatible indeterminado', desc: 'Tiene infinitas soluciones. Las ecuaciones representan la misma recta.', ex: 'x + y = 5 es múltiplo de 2x + 2y = 10' },
              { name: 'Incompatible', desc: 'No tiene solución. Las rectas son paralelas y no se cortan.', ex: 'x + y = 3 y x + y = 7' },
            ].map(t => (
              <div key={t.name} className="rounded-2xl bg-white p-4" style={{ border: '1px solid #D7E2EA' }}>
                <p className="font-bold text-sm text-ink mb-1">{t.name}</p>
                <p className="text-xs text-slate mb-2">{t.desc}</p>
                <p className="font-mono text-xs" style={{ color: '#147c7c' }}>{t.ex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes con sistemas de ecuaciones</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'No verificar la solución', body: 'Siempre sustituye los valores encontrados en ambas ecuaciones originales. Un error de cálculo puede dar una solución incorrecta.' },
              { title: 'Olvidar el signo al sustituir', body: 'Si y = 5 − x y x = 2, entonces y = 5 − 2 = 3, no 5 + 2. Respeta el signo del término que despejas.' },
              { title: 'Multiplicar solo una ecuación', body: 'Al multiplicar para eliminar una variable, multiplica todos los términos de la ecuación, no solo los que te interesan.' },
              { title: 'Confundir sistema incompatible con error propio', body: 'Si llegas a 0 = 5, no hay solución. No busques el error: el sistema es incompatible.' },
            ].map(card => (
              <div key={card.title} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="mb-2 font-bold text-sm" style={{ color: '#147c7c' }}>{card.title}</p>
                <p className="text-xs leading-relaxed text-slate">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="site-shell max-w-3xl">
          <p className="text-sm text-slate">
            Resuelve sistemas con la{' '}
            <Link href="/calculadoras/algebra/calculadora-de-sistemas-de-ecuaciones" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de sistemas de ecuaciones
            </Link>{' '}
            o explora{' '}
            <Link href="/calculadoras/algebra" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              todas las calculadoras de álgebra
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
