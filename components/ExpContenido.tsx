import Link from 'next/link';

export function ExpContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Cuáles son las reglas de los exponentes?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Las siete reglas principales cubren multiplicación, división, potencia de potencia, exponente cero, exponente negativo, exponente fraccionario y distribución.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">aᵐ · aⁿ = aᵐ⁺ⁿ</p>
              <p className="mt-1 font-mono text-sm text-white">aᵐ / aⁿ = aᵐ⁻ⁿ</p>
              <p className="mt-1 font-mono text-sm text-white">(aᵐ)ⁿ = aᵐ·ⁿ</p>
              <p className="mt-1 font-mono text-sm text-white">a⁰ = 1 (a ≠ 0)</p>
              <p className="mt-1 font-mono text-sm text-white">a⁻ⁿ = 1/aⁿ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Las siete reglas */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Las reglas de exponentes explicadas</h2>
          <div className="space-y-4">
            {[
              {
                rule: 'Producto de potencias (misma base)',
                formula: 'aᵐ · aⁿ = aᵐ⁺ⁿ',
                ex: '2³ · 2⁴ = 2⁷ = 128',
                note: 'Se suman los exponentes cuando la base es la misma.',
              },
              {
                rule: 'Cociente de potencias (misma base)',
                formula: 'aᵐ / aⁿ = aᵐ⁻ⁿ',
                ex: '5⁶ / 5² = 5⁴ = 625',
                note: 'Se restan los exponentes cuando la base es la misma.',
              },
              {
                rule: 'Potencia de una potencia',
                formula: '(aᵐ)ⁿ = aᵐ·ⁿ',
                ex: '(3²)⁴ = 3⁸ = 6561',
                note: 'Se multiplican los exponentes.',
              },
              {
                rule: 'Exponente cero',
                formula: 'a⁰ = 1 (a ≠ 0)',
                ex: '7⁰ = 1, (−4)⁰ = 1',
                note: 'Cualquier número no nulo elevado a 0 es 1.',
              },
              {
                rule: 'Exponente negativo',
                formula: 'a⁻ⁿ = 1 / aⁿ',
                ex: '2⁻³ = 1/2³ = 1/8 = 0.125',
                note: 'El exponente negativo indica el recíproco.',
              },
              {
                rule: 'Exponente fraccionario',
                formula: 'a^(1/n) = ⁿ√a',
                ex: '8^(1/3) = ³√8 = 2',
                note: 'Un exponente fraccionario es una raíz.',
              },
              {
                rule: 'Potencia de un producto',
                formula: '(ab)ⁿ = aⁿ · bⁿ',
                ex: '(2·3)² = 2² · 3² = 4 · 9 = 36',
                note: 'El exponente se distribuye sobre el producto.',
              },
            ].map(item => (
              <div key={item.rule} className="rounded-2xl bg-white p-4" style={{ border: '1px solid #D7E2EA' }}>
                <div className="flex flex-wrap items-start gap-4">
                  <div className="flex-1">
                    <p className="font-bold text-sm text-ink">{item.rule}</p>
                    <p className="mt-0.5 text-xs text-slate">{item.note}</p>
                  </div>
                  <div className="rounded-lg px-4 py-2 shrink-0" style={{ background: '#0a3535' }}>
                    <p className="font-mono text-xs text-white">{item.formula}</p>
                    <p className="mt-0.5 font-mono text-xs text-white/70">{item.ex}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ejemplos combinados */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Ejemplos con varias reglas a la vez</h2>
          <div className="space-y-4">
            {[
              {
                problem: 'Simplifica: (x³ · x²) / x⁴',
                steps: ['x³ · x² = x⁵ (suma de exponentes)', 'x⁵ / x⁴ = x¹ = x (resta de exponentes)'],
                result: 'x',
              },
              {
                problem: 'Calcula: (2x²)³',
                steps: ['2³ · (x²)³ (distribución)', '= 8 · x⁶ (potencia de potencia)'],
                result: '8x⁶',
              },
            ].map(item => (
              <div key={item.problem} className="rounded-2xl p-5" style={{ border: '1px solid #D7E2EA', background: '#fff' }}>
                <p className="font-bold text-sm text-ink mb-3">{item.problem}</p>
                <div className="rounded-lg px-4 py-3" style={{ background: '#0a3535' }}>
                  {item.steps.map(s => (
                    <p key={s} className="font-mono text-xs text-white/80 mt-0.5">{s}</p>
                  ))}
                  <p className="mt-2 font-mono text-sm text-white font-bold">Resultado: {item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes con exponentes</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Sumar exponentes sin misma base', body: '2³ · 3² no es 6⁵. La regla de producto solo aplica cuando la base es igual.' },
              { title: 'Confundir x² + x² con x⁴', body: 'x² + x² = 2x², no x⁴. La suma de términos iguales no multiplica el exponente.' },
              { title: 'Olvidar que a⁰ = 1', body: 'El resultado no es cero. Cualquier número elevado a 0 (excepto el 0 mismo) es 1.' },
              { title: 'Distribuir exponentes en sumas', body: '(a + b)² ≠ a² + b². La potencia de una suma requiere desarrollar con el binomio.' },
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
            Calcula potencias con la{' '}
            <Link href="/calculadoras/calculo/calculadora-de-exponentes" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de exponentes
            </Link>{' '}
            o explora{' '}
            <Link href="/calculadoras/calculo" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              todas las calculadoras de cálculo
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
