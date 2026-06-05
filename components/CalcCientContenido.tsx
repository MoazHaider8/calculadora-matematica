import Link from 'next/link';

export function CalcCientContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Qué hace una calculadora científica?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Además de las cuatro operaciones básicas, calcula potencias, raíces, logaritmos, funciones trigonométricas y aplica automáticamente el orden correcto de las operaciones.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">2 + 3 × 4 = 14 (no 20)</p>
              <p className="mt-1 font-mono text-sm text-white/70">La multiplicación va antes que la suma (jerarquía)</p>
              <p className="mt-2 font-mono text-sm text-white">2⁵ = 32 | √81 = 9 | log(100) = 2</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Qué es una calculadora científica</h2>
          <p className="text-sm leading-relaxed text-slate">
            Una calculadora científica es una herramienta matemática que va más allá de sumar, restar, multiplicar y dividir. Tiene funciones para trabajar con álgebra, trigonometría, logaritmos y más.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            A diferencia de la calculadora básica, respeta la jerarquía de operaciones: primero paréntesis, luego potencias, luego multiplicaciones y divisiones, y por último sumas y restas.
          </p>
        </div>
      </section>

      {/* Orden de operaciones */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Orden de operaciones y paréntesis</h2>
          <p className="text-sm leading-relaxed text-slate">
            El orden de operaciones determina qué se calcula primero cuando hay varias operaciones en la misma expresión.
          </p>
          <div className="mt-4 space-y-3">
            {[
              { ex: '2 + 3 × 4', result: '= 2 + 12 = 14', note: 'La multiplicación va antes que la suma.' },
              { ex: '(2 + 3) × 4', result: '= 5 × 4 = 20', note: 'Los paréntesis se calculan primero.' },
              { ex: '10 − 2² + 1', result: '= 10 − 4 + 1 = 7', note: 'La potencia va antes que suma y resta.' },
            ].map(item => (
              <div key={item.ex} className="rounded-xl p-4" style={{ border: '1px solid #D7E2EA', background: '#fff' }}>
                <div className="rounded-lg px-3 py-2 mb-2" style={{ background: '#0a3535' }}>
                  <p className="font-mono text-xs text-white">{item.ex} {item.result}</p>
                </div>
                <p className="text-xs text-slate">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Potencias y raíces */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Potencias y raíces</h2>
          <p className="text-sm leading-relaxed text-slate">
            La tecla de potencia (xⁿ o ^) calcula cualquier potencia. La tecla de raíz cuadrada (√) o raíz n-ésima (ⁿ√) calcula raíces.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">2^5 = 2⁵ = 32</p>
            <p className="mt-1 font-mono text-sm text-white">3^4 = 3⁴ = 81</p>
            <p className="mt-1 font-mono text-sm text-white">√81 = 9 (porque 9² = 81)</p>
            <p className="mt-1 font-mono text-sm text-white">³√27 = 3 (porque 3³ = 27)</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            También puedes usar exponentes fraccionarios: 81^(1/2) = 9 es equivalente a √81.
          </p>
        </div>
      </section>

      {/* Logaritmos */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Logaritmos y exponentes</h2>
          <p className="text-sm leading-relaxed text-slate">
            La tecla log calcula el logaritmo en base 10. La tecla ln calcula el logaritmo natural (base e). La tecla 10ˣ y eˣ calculan las funciones exponenciales inversas.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">log(100) = 2 (porque 10² = 100)</p>
            <p className="mt-1 font-mono text-sm text-white">log(1000) = 3 (porque 10³ = 1000)</p>
            <p className="mt-1 font-mono text-sm text-white">ln(e) = 1</p>
            <p className="mt-1 font-mono text-sm text-white">10^2 = 100</p>
          </div>
        </div>
      </section>

      {/* Trigonometría básica */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Funciones trigonométricas básicas</h2>
          <p className="text-sm leading-relaxed text-slate">
            Las teclas sin, cos y tan calculan el seno, coseno y tangente de un ángulo. Antes de usarlas, verifica si la calculadora está en modo grados (DEG) o radianes (RAD).
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">sin(30°) = 0.5 (en modo grados)</p>
            <p className="mt-1 font-mono text-sm text-white">cos(60°) = 0.5</p>
            <p className="mt-1 font-mono text-sm text-white">tan(45°) = 1</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Si obtienes resultados inesperados con funciones trigonométricas, revisa que el modo sea el correcto. En radianes, sin(π/6) = 0.5, equivalente a sin(30°).
          </p>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes con la calculadora científica</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'No usar paréntesis', body: '2 + 3 × 4 no es lo mismo que (2 + 3) × 4. Si no usas paréntesis donde son necesarios, el resultado será incorrecto.' },
              { title: 'Modo grados vs radianes', body: 'Sin(30) en modo RAD no es 0.5. Asegúrate de estar en el modo correcto antes de calcular ángulos.' },
              { title: 'Confundir log y ln', body: 'log es base 10 y ln es base e. Son distintos. log(e) ≠ 1, pero ln(e) = 1.' },
              { title: 'Redondear en pasos intermedios', body: 'Si redondeas en cada paso, el error se acumula. Usa la calculadora hasta el final y redondea solo el resultado.' },
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
            Usa la{' '}
            <Link href="/calculadoras/aritmetica/calculadora-cientifica" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora científica online
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
