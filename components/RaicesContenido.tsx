import Link from 'next/link';

export function RaicesContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Qué es una raíz?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              La raíz n-ésima de un número a es el valor que, elevado a la potencia n, da como resultado a.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">√9 = 3 porque 3² = 9</p>
              <p className="mt-1 font-mono text-sm text-white">³√27 = 3 porque 3³ = 27</p>
              <p className="mt-1 font-mono text-sm text-white">⁴√16 = 2 porque 2⁴ = 16</p>
            </div>
            <div className="mt-3 rounded-xl px-5 py-3" style={{ background: '#DDF3F0' }}>
              <p className="text-sm font-semibold" style={{ color: '#0a3535' }}>
                Notación equivalente: √a = a^(1/2), ³√a = a^(1/3)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Raíz cuadrada */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Raíz cuadrada</h2>
          <p className="text-sm leading-relaxed text-slate">
            La raíz cuadrada de un número positivo a es el valor positivo que, al cuadrado, da a. Se escribe √a o a^(1/2).
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Los cuadrados perfectos tienen raíz cuadrada exacta. Si el número no es un cuadrado perfecto, la raíz es irracional.
          </p>
          <div className="mt-5 grid gap-3 grid-cols-2 sm:grid-cols-3">
            {[
              { n: '√1 = 1', exact: true },
              { n: '√4 = 2', exact: true },
              { n: '√9 = 3', exact: true },
              { n: '√16 = 4', exact: true },
              { n: '√25 = 5', exact: true },
              { n: '√2 ≈ 1.414', exact: false },
              { n: '√3 ≈ 1.732', exact: false },
              { n: '√5 ≈ 2.236', exact: false },
              { n: '√7 ≈ 2.646', exact: false },
            ].map(item => (
              <div
                key={item.n}
                className="rounded-xl px-3 py-2 text-center font-mono text-xs font-bold"
                style={{ background: item.exact ? '#DDF3F0' : '#fff', border: '1px solid #D7E2EA', color: item.exact ? '#0a3535' : '#627d98' }}
              >
                {item.n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplificar radicales */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Cómo simplificar radicales</h2>
          <p className="text-sm leading-relaxed text-slate">
            Para simplificar un radical, se factoriza el número dentro buscando cuadrados perfectos que se puedan sacar fuera.
          </p>
          <div className="mt-4 space-y-4">
            {[
              {
                problem: 'Simplifica √72',
                steps: ['72 = 36 · 2', '√72 = √36 · √2', '= 6√2'],
              },
              {
                problem: 'Simplifica √50',
                steps: ['50 = 25 · 2', '√50 = √25 · √2', '= 5√2'],
              },
              {
                problem: 'Simplifica √12',
                steps: ['12 = 4 · 3', '√12 = √4 · √3', '= 2√3'],
              },
            ].map(item => (
              <div key={item.problem} className="rounded-2xl p-4" style={{ border: '1px solid #D7E2EA', background: '#fff' }}>
                <p className="font-bold text-sm text-ink mb-2">{item.problem}</p>
                <div className="rounded-lg px-4 py-2" style={{ background: '#0a3535' }}>
                  {item.steps.map((s, i) => (
                    <p key={i} className="font-mono text-xs text-white mt-0.5">{s}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operaciones con radicales */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Operaciones con radicales</h2>
          <div className="space-y-4">
            {[
              {
                op: 'Multiplicación',
                formula: '√a · √b = √(a·b)',
                ex: '√3 · √12 = √36 = 6',
              },
              {
                op: 'División',
                formula: '√a / √b = √(a/b)',
                ex: '√50 / √2 = √25 = 5',
              },
              {
                op: 'Suma (mismos radicales)',
                formula: 'a√c + b√c = (a+b)√c',
                ex: '3√2 + 5√2 = 8√2',
              },
            ].map(item => (
              <div key={item.op} className="rounded-2xl bg-white p-4" style={{ border: '1px solid #D7E2EA' }}>
                <p className="font-bold text-sm text-ink">{item.op}</p>
                <div className="mt-2 rounded-lg px-4 py-2" style={{ background: '#0a3535' }}>
                  <p className="font-mono text-xs text-white">{item.formula}</p>
                  <p className="mt-1 font-mono text-xs text-white/70">{item.ex}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate">
            Solo puedes sumar radicales que tengan el mismo número bajo el símbolo de raíz. √2 + √3 no se puede simplificar.
          </p>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes con raíces y radicales</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Sumar radicales distintos', body: '√2 + √3 ≠ √5. Solo se pueden sumar radicales con el mismo número bajo la raíz.' },
              { title: '√(a + b) = √a + √b', body: 'Falso. √(9 + 16) = √25 = 5, pero √9 + √16 = 3 + 4 = 7. Son distintos.' },
              { title: 'Ignorar raíces negativas', body: 'La raíz cuadrada de un número negativo no tiene resultado real. √−4 no existe en los reales.' },
              { title: 'No simplificar antes de calcular', body: '√72 es mejor simplificarlo a 6√2 que calcularlo directamente, sobre todo en álgebra.' },
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
            Calcula raíces con la{' '}
            <Link href="/calculadoras/algebra/calculadora-de-raices" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de raíces
            </Link>{' '}
            o la{' '}
            <Link href="/calculadoras/algebra/calculadora-de-raiz-cuadrada" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de raíz cuadrada
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
