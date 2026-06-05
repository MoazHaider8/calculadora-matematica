import Link from 'next/link';

export function DesvEstContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Qué significa la desviación estándar?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              La desviación estándar mide cuánto se alejan los datos de su media. Si σ es pequeña, los datos están concentrados. Si σ es grande, los datos están dispersos.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">σ = √[ Σ(xᵢ − μ)² / N ]</p>
              <p className="mt-2 font-mono text-sm text-white/70">Datos: 8, 9, 9, 10, 9 → Media: 9 → σ ≈ 0.63</p>
              <p className="mt-1 font-mono text-sm text-white/70">Datos: 2, 10, 18, 26, 34 → Media: 18 → σ ≈ 11.31</p>
            </div>
            <div className="mt-3 rounded-xl px-5 py-3" style={{ background: '#DDF3F0' }}>
              <p className="text-sm font-semibold" style={{ color: '#0a3535' }}>
                Primer conjunto: datos concentrados. Segundo: muy dispersos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué significa */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Qué significa la desviación estándar</h2>
          <p className="text-sm leading-relaxed text-slate">
            La desviación estándar responde a la pregunta: en promedio, ¿cuánto se separa cada dato de la media? Si tienes un conjunto de notas con media 7 y desviación estándar 0.5, la mayoría de las notas están entre 6.5 y 7.5.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Se expresa en las mismas unidades que los datos. Si los datos son calificaciones sobre 10, la desviación estándar también está en puntos. Eso la hace más interpretable que la varianza, que trabaja con unidades al cuadrado.
          </p>
        </div>
      </section>

      {/* Desviación baja */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Desviación estándar baja</h2>
          <p className="text-sm leading-relaxed text-slate">
            Un valor bajo de σ indica que los datos son homogéneos: están muy cerca de la media y hay poca variación entre ellos.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">Notas: 8, 8, 9, 9, 10</p>
            <p className="mt-1 font-mono text-sm text-white/70">Media: 8.8</p>
            <p className="mt-1 font-mono text-sm text-white/70">Diferencias²: 0.64 + 0.64 + 0.04 + 0.04 + 1.44 = 2.8</p>
            <p className="mt-2 font-mono text-sm text-white">σ = √(2.8/5) = √0.56 ≈ 0.75</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Las notas están todas entre 8 y 10. Una desviación de 0.75 sobre una media de 8.8 es muy baja: el rendimiento es bastante uniforme.
          </p>
        </div>
      </section>

      {/* Desviación alta */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Desviación estándar alta</h2>
          <p className="text-sm leading-relaxed text-slate">
            Un valor alto de σ indica que los datos están dispersos: hay valores muy distintos entre sí, alejados de la media.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">Datos: 2, 10, 18, 26, 34</p>
            <p className="mt-1 font-mono text-sm text-white/70">Media: 18</p>
            <p className="mt-1 font-mono text-sm text-white/70">Diferencias²: 256 + 64 + 0 + 64 + 256 = 640</p>
            <p className="mt-2 font-mono text-sm text-white">σ = √(640/5) = √128 ≈ 11.31</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Una desviación de 11.31 sobre una media de 18 es muy alta. Los datos van de 2 a 34, una dispersión muy grande.
          </p>
        </div>
      </section>

      {/* Interpretar junto a la media */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Cómo interpretarla junto a la media</h2>
          <p className="text-sm leading-relaxed text-slate">
            La desviación estándar no se interpreta de forma aislada. Lo que importa es la relación entre σ y la media. Una σ de 5 puede ser baja si la media es 1000, pero muy alta si la media es 10.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            El coeficiente de variación (CV = σ/μ × 100) normaliza esta relación. Un CV menor del 15% suele indicar poca dispersión. Un CV mayor del 30% indica dispersión alta.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Precios de un producto', body: 'Media: 50 €, σ = 2 €. CV = 4%. Los precios varían muy poco entre tiendas.' },
              { title: 'Salarios en un sector', body: 'Media: 2000 €, σ = 800 €. CV = 40%. Hay mucha diferencia entre los distintos salarios.' },
            ].map(item => (
              <div key={item.title} className="rounded-2xl p-4" style={{ border: '1px solid #D7E2EA', background: '#fff' }}>
                <p className="font-bold text-sm text-ink mb-1">{item.title}</p>
                <p className="text-xs text-slate leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes al interpretar la desviación estándar</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Pensar que alta siempre es mala', body: 'Depende del contexto. En calificaciones, alta dispersión puede indicar diferencias de nivel. En biología, puede reflejar variedad natural.' },
              { title: 'Confundir varianza y desviación', body: 'La varianza es σ². La desviación estándar es √σ². Son distintas. La desviación es más interpretable por estar en las mismas unidades.' },
              { title: 'Interpretar sin conocer la media', body: 'Una desviación de 10 no dice nada sin saber si la media es 12 o 1000. Siempre analiza ambos valores juntos.' },
              { title: 'Olvidar la diferencia s vs σ', body: 'Si los datos son una muestra, calcula s (divisor n−1). Si son la población completa, calcula σ (divisor N).' },
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
            Calcula la desviación estándar con la{' '}
            <Link href="/calculadoras/estadistica/calculadora-de-desviacion-estandar" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de desviación estándar
            </Link>{' '}
            o explora{' '}
            <Link href="/calculadoras/estadistica" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              todas las calculadoras de estadística
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
