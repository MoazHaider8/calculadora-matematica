import Link from 'next/link';

export function LimitesContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Cómo se calcula un límite?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              El método más sencillo es la sustitución directa: sustituyes el valor de x y evalúas. Si el resultado es 0/0 u otra forma indeterminada, se usan otros métodos como factorización o la regla de L'Hôpital.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">lím(x→2) (x² − 4) / (x − 2)</p>
              <p className="mt-1 font-mono text-sm text-white/70">Sustituir da 0/0 → hay que factorizar</p>
              <p className="mt-2 font-mono text-sm text-white">= lím(x→2) (x+2)(x−2) / (x−2) = lím(x→2) (x+2) = 4</p>
            </div>
            <div className="mt-3 rounded-xl px-5 py-3" style={{ background: '#DDF3F0' }}>
              <p className="text-sm font-semibold" style={{ color: '#0a3535' }}>
                Resultado: el límite es 4
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es un límite */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Qué es un límite en cálculo</h2>
          <p className="text-sm leading-relaxed text-slate">
            El límite de una función f(x) cuando x se acerca a un valor c es el número al que se aproxima f(x) conforme x se acerca a c, sin que x llegue a valer c.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Se escribe: lím(x→c) f(x) = L
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Esto no dice qué vale f(c), sino hacia dónde va la función. Por eso los límites son fundamentales para entender discontinuidades, derivadas e integrales.
          </p>
        </div>
      </section>

      {/* Métodos para calcular límites */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Métodos para calcular límites</h2>
          <div className="space-y-5">
            {[
              {
                method: '1. Sustitución directa',
                body: 'Sustituye el valor de c en f(x). Si obtienes un número definido, ese es el límite.',
                ex: 'lím(x→3) (x² + 1) = 3² + 1 = 10',
              },
              {
                method: '2. Factorización',
                body: 'Cuando obtienes 0/0, factoriza numerador y denominador para cancelar el factor problemático.',
                ex: 'lím(x→2) (x²−4)/(x−2) = lím(x→2)(x+2) = 4',
              },
              {
                method: '3. Racionalización',
                body: 'Multiplica numerador y denominador por el conjugado para eliminar raíces en la forma indeterminada.',
                ex: 'lím(x→0) (√(x+1) − 1) / x = 1/2',
              },
              {
                method: '4. Regla de L\'Hôpital',
                body: 'Si el límite da 0/0 o ∞/∞, deriva numerador y denominador por separado y vuelve a evaluar.',
                ex: 'lím(x→0) sen(x)/x → deriva: cos(x)/1 → 1',
              },
            ].map(item => (
              <div key={item.method} className="rounded-2xl p-5" style={{ border: '1px solid #D7E2EA', background: '#fff' }}>
                <p className="font-bold text-sm text-ink mb-1">{item.method}</p>
                <p className="text-xs text-slate leading-relaxed">{item.body}</p>
                <div className="mt-3 rounded-lg px-4 py-2" style={{ background: '#0a3535' }}>
                  <p className="font-mono text-xs text-white">{item.ex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Límites laterales */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Límites laterales</h2>
          <p className="text-sm leading-relaxed text-slate">
            El límite por la izquierda (lím x→c⁻) analiza x cuando se aproxima a c desde valores menores. El límite por la derecha (lím x→c⁺) lo hace desde valores mayores.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Para que el límite exista, los dos límites laterales deben ser iguales. Si lím x→c⁻ f(x) ≠ lím x→c⁺ f(x), el límite no existe.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">f(x) = |x| / x</p>
            <p className="mt-1 font-mono text-sm text-white/70">lím x→0⁻ = −1</p>
            <p className="mt-1 font-mono text-sm text-white/70">lím x→0⁺ = +1</p>
            <p className="mt-2 font-mono text-sm text-white">Los límites son distintos → el límite en 0 no existe</p>
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes al calcular límites</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Confundir el límite con el valor', body: 'lím(x→2) f(x) puede ser 5 aunque f(2) esté indefinida o valga otro número.' },
              { title: 'No verificar 0/0 antes de factorizar', body: 'Factorizar siempre que haya cociente, no solo cuando da 0/0, puede dar errores.' },
              { title: 'Aplicar L\'Hôpital sin verificar', body: 'L\'Hôpital solo aplica a formas indeterminadas 0/0 o ∞/∞, no a cualquier cociente.' },
              { title: 'Ignorar límites en el infinito', body: 'lím(x→∞) (2x + 1)/x = 2, no 1. Divide numerador y denominador por la potencia mayor.' },
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
            Comprueba tus resultados con la{' '}
            <Link href="/calculadoras/calculo/calculadora-de-limites" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de límites
            </Link>{' '}
            o revisa más temas de{' '}
            <Link href="/calculadoras/calculo" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              cálculo
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
