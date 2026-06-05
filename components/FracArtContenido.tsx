import Link from 'next/link';

export function FracArtContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Cómo se suman y restan fracciones?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Si los denominadores son iguales, suma o resta los numeradores directamente. Si son distintos, busca el mínimo común múltiplo, convierte las fracciones y luego opera.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">Igual denominador: a/c ± b/c = (a ± b) / c</p>
              <p className="mt-2 font-mono text-sm text-white">Distinto denominador:</p>
              <p className="mt-1 font-mono text-sm text-white/70">1. Calcula el MCM de los denominadores</p>
              <p className="mt-1 font-mono text-sm text-white/70">2. Convierte cada fracción al nuevo denominador</p>
              <p className="mt-1 font-mono text-sm text-white/70">3. Suma o resta los numeradores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partes de una fracción */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Partes de una fracción</h2>
          <p className="text-sm leading-relaxed text-slate">
            Una fracción tiene dos partes: el numerador (arriba) indica cuántas partes se toman, y el denominador (abajo) indica en cuántas partes se divide el total.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">3/4 → numerador: 3, denominador: 4</p>
            <p className="mt-1 font-mono text-sm text-white/70">Significa "3 partes de un total dividido en 4"</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            La fracción 1/2 es lo mismo que 2/4 o 3/6. Son fracciones equivalentes. Antes de operar, a veces conviene simplificar.
          </p>
        </div>
      </section>

      {/* Igual denominador */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Fracciones con el mismo denominador</h2>
          <p className="text-sm leading-relaxed text-slate">
            Cuando los denominadores son iguales, el denominador del resultado es el mismo. Solo operas con los numeradores.
          </p>
          <div className="mt-4 space-y-3">
            {[
              { op: 'Suma', ex: '1/4 + 2/4 = (1+2)/4 = 3/4', note: 'El denominador se mantiene.' },
              { op: 'Resta', ex: '5/6 − 1/6 = (5−1)/6 = 4/6 = 2/3', note: 'Simplifica el resultado: 4/6 = 2/3.' },
            ].map(item => (
              <div key={item.op} className="rounded-xl p-4" style={{ border: '1px solid #D7E2EA', background: '#fff' }}>
                <p className="font-bold text-sm text-ink mb-1">{item.op}</p>
                <div className="rounded-lg px-3 py-2" style={{ background: '#0a3535' }}>
                  <p className="font-mono text-xs text-white">{item.ex}</p>
                </div>
                <p className="mt-2 text-xs text-slate">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinto denominador */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Fracciones con distinto denominador</h2>
          <p className="text-sm leading-relaxed text-slate">
            Cuando los denominadores son distintos, no puedes operar directamente. Primero debes encontrar el mínimo común múltiplo (MCM) de los dos denominadores y convertir cada fracción.
          </p>
          <div className="mt-4 space-y-4">
            {[
              {
                title: 'Ejemplo: 1/2 + 1/3',
                steps: [
                  'MCM de 2 y 3 = 6',
                  '1/2 = 3/6 (multiplica numerador y denominador por 3)',
                  '1/3 = 2/6 (multiplica numerador y denominador por 2)',
                  '3/6 + 2/6 = 5/6',
                ],
                result: '1/2 + 1/3 = 5/6',
              },
              {
                title: 'Ejemplo: 3/4 − 1/2',
                steps: [
                  'MCM de 4 y 2 = 4',
                  '3/4 ya tiene denominador 4',
                  '1/2 = 2/4',
                  '3/4 − 2/4 = 1/4',
                ],
                result: '3/4 − 1/2 = 1/4',
              },
            ].map(item => (
              <div key={item.title} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="font-bold text-sm text-ink mb-3">{item.title}</p>
                <ol className="space-y-1 mb-3">
                  {item.steps.map((s, i) => (
                    <li key={i} className="text-xs text-slate flex gap-2">
                      <span className="font-bold" style={{ color: '#147c7c' }}>{i + 1}.</span> {s}
                    </li>
                  ))}
                </ol>
                <div className="rounded-lg px-3 py-2" style={{ background: '#0a3535' }}>
                  <p className="font-mono text-xs text-white">{item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplificar */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Cómo simplificar el resultado</h2>
          <p className="text-sm leading-relaxed text-slate">
            Una fracción está simplificada cuando numerador y denominador no tienen ningún factor común distinto de 1.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            Para simplificar, divide ambos por su máximo común divisor (MCD).
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">6/9 → MCD(6,9) = 3 → 6÷3 / 9÷3 = 2/3</p>
            <p className="mt-1 font-mono text-sm text-white">4/8 → MCD(4,8) = 4 → 4÷4 / 8÷4 = 1/2</p>
            <p className="mt-1 font-mono text-sm text-white">5/7 → MCD(5,7) = 1 → ya está simplificada</p>
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes con fracciones</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Sumar los denominadores', body: '1/2 + 1/3 no es 2/5. El denominador no se suma. Hay que encontrar el MCM y convertir.' },
              { title: 'No simplificar el resultado', body: 'Si el resultado es 4/6, debes simplificar a 2/3. Deja siempre la fracción en su forma más sencilla.' },
              { title: 'Calcular el MCM incorrectamente', body: 'El MCM de 4 y 6 es 12, no 24. Busca el menor múltiplo común, no el producto de los denominadores.' },
              { title: 'Olvidar ajustar el numerador', body: 'Al convertir 1/2 a denominador 6, el numerador también cambia: 1/2 = 3/6. No solo cambies el denominador.' },
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
            Opera con fracciones usando la{' '}
            <Link href="/calculadoras/aritmetica/calculadora-de-fracciones" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de fracciones
            </Link>{' '}
            o explora{' '}
            <Link href="/calculadoras/aritmetica" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              todas las calculadoras de aritmética
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
