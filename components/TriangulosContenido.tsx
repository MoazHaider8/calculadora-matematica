import Link from 'next/link';

export function TriangulosContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Cuáles son los tipos de triángulos?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Por sus lados: equilátero (los tres iguales), isósceles (dos iguales) y escaleno (todos distintos). Por sus ángulos: acutángulo, rectángulo y obtusángulo.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">Área = (base × altura) / 2</p>
              <p className="mt-1 font-mono text-sm text-white">Perímetro = a + b + c</p>
              <p className="mt-1 font-mono text-sm text-white">Suma de ángulos = 180°</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clasificación por lados */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Clasificación por sus lados</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                name: 'Equilátero',
                body: 'Los tres lados miden lo mismo. Los tres ángulos son iguales: 60° cada uno.',
                example: 'Lados: 5, 5, 5',
              },
              {
                name: 'Isósceles',
                body: 'Dos lados son iguales y el tercero es diferente. Los ángulos de la base son iguales.',
                example: 'Lados: 5, 5, 3',
              },
              {
                name: 'Escaleno',
                body: 'Los tres lados miden diferente. Los tres ángulos son distintos.',
                example: 'Lados: 3, 4, 6',
              },
            ].map(t => (
              <div key={t.name} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="mb-2 font-bold text-sm text-ink">{t.name}</p>
                <p className="text-xs leading-relaxed text-slate">{t.body}</p>
                <p className="mt-2 font-mono text-xs" style={{ color: '#147c7c' }}>{t.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clasificación por ángulos */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Clasificación por sus ángulos</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                name: 'Acutángulo',
                body: 'Los tres ángulos son menores de 90°. Es el caso más común en triángulos con lados similares.',
                example: 'Ángulos: 60°, 70°, 50°',
              },
              {
                name: 'Rectángulo',
                body: 'Uno de los ángulos mide exactamente 90°. El lado opuesto al ángulo recto es la hipotenusa.',
                example: 'Ángulos: 90°, 45°, 45°',
              },
              {
                name: 'Obtusángulo',
                body: 'Uno de los ángulos mide más de 90°. Solo puede haber un ángulo obtuso por triángulo.',
                example: 'Ángulos: 110°, 40°, 30°',
              },
            ].map(t => (
              <div key={t.name} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="mb-2 font-bold text-sm text-ink">{t.name}</p>
                <p className="text-xs leading-relaxed text-slate">{t.body}</p>
                <p className="mt-2 font-mono text-xs" style={{ color: '#147c7c' }}>{t.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fórmulas */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Fórmulas del triángulo</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Área',
                formula: 'A = (b × h) / 2',
                ex: 'Base = 8, altura = 5 → A = (8 × 5) / 2 = 20',
                note: 'La altura es perpendicular a la base, no el lado inclinado.',
              },
              {
                title: 'Perímetro',
                formula: 'P = a + b + c',
                ex: 'Lados 3, 4, 5 → P = 3 + 4 + 5 = 12',
                note: 'La suma de todos los lados.',
              },
              {
                title: 'Triángulo rectángulo (Pitágoras)',
                formula: 'c² = a² + b²',
                ex: 'a = 3, b = 4 → c² = 9 + 16 = 25 → c = 5',
                note: 'Solo aplica cuando hay un ángulo de 90°.',
              },
              {
                title: 'Área con fórmula de Herón',
                formula: 'A = √(s(s−a)(s−b)(s−c)) donde s = (a+b+c)/2',
                ex: 'Lados 3, 4, 5 → s = 6 → A = √(6·3·2·1) = √36 = 6',
                note: 'Útil cuando no se conoce la altura.',
              },
            ].map(item => (
              <div key={item.title} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="font-bold text-sm text-ink mb-2">{item.title}</p>
                <div className="rounded-lg px-4 py-2" style={{ background: '#0a3535' }}>
                  <p className="font-mono text-xs text-white">{item.formula}</p>
                  <p className="mt-1 font-mono text-xs text-white/70">{item.ex}</p>
                </div>
                <p className="mt-2 text-xs text-slate">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes con triángulos</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Usar el lado inclinado como altura', body: 'La altura del triángulo es la línea perpendicular a la base, no el lado oblicuo.' },
              { title: 'Usar Pitágoras en cualquier triángulo', body: 'El teorema de Pitágoras solo aplica en triángulos rectángulos. Para los demás, se usa la ley de cosenos.' },
              { title: 'Confundir ángulo obtuso con dos ángulos', body: 'Un triángulo solo puede tener un ángulo mayor de 90°, porque la suma total es siempre 180°.' },
              { title: 'Calcular el perímetro como si fuera área', body: 'El perímetro suma los tres lados. El área usa base y altura. Son cálculos distintos con unidades distintas.' },
            ].map(card => (
              <div key={card.title} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="mb-2 font-bold text-sm" style={{ color: '#147c7c' }}>{card.title}</p>
                <p className="text-xs leading-relaxed text-slate">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-soft py-8">
        <div className="site-shell max-w-3xl">
          <p className="text-sm text-slate">
            Calcula con la{' '}
            <Link href="/calculadoras/geometria/calculadora-de-triangulos" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de triángulos
            </Link>{' '}
            o revisa las{' '}
            <Link href="/blog/formulas-de-area" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              fórmulas de área
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
