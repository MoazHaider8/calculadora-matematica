import Link from 'next/link';

export function MatInvArtContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Qué es la matriz inversa?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              La matriz inversa de A (escrita A⁻¹) es la que cumple A × A⁻¹ = I, donde I es la matriz identidad. Solo existe si det(A) ≠ 0.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">A = [[2 1],[5 3]]</p>
              <p className="mt-1 font-mono text-sm text-white/70">det(A) = 2×3 − 1×5 = 1</p>
              <p className="mt-2 font-mono text-sm text-white">A⁻¹ = [[3 −1],[−5 2]]</p>
              <p className="mt-2 font-mono text-sm text-white/70">Verificación: A × A⁻¹ = [[1 0],[0 1]] ✓</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cuándo existe */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Cuándo existe la matriz inversa</h2>
          <p className="text-sm leading-relaxed text-slate">
            La inversa existe solo para matrices cuadradas cuyo determinante es distinto de cero. Si det(A) = 0, la matriz es singular y no tiene inversa.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Tiene inversa', ex: 'A = [[2 1],[5 3]]\ndet = 1 ≠ 0 ✓', color: '#DDF3F0' },
              { title: 'No tiene inversa', ex: 'B = [[4 2],[2 1]]\ndet = 4−4 = 0 ✗', color: '#FFF3CD' },
            ].map(item => (
              <div key={item.title} className="rounded-2xl p-4" style={{ border: '1px solid #D7E2EA', background: item.color }}>
                <p className="font-bold text-sm text-ink mb-2">{item.title}</p>
                <pre className="font-mono text-xs text-slate whitespace-pre">{item.ex}</pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fórmula 2×2 */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Fórmula para matrices 2×2</h2>
          <p className="text-sm leading-relaxed text-slate">
            Para una matriz 2×2, la inversa se calcula con una fórmula directa: se intercambian a y d, se cambian los signos de b y c, y se divide todo por el determinante.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">A = [[a b],[c d]]</p>
            <p className="mt-2 font-mono text-sm text-white">A⁻¹ = (1/det) × [[d −b],[−c a]]</p>
            <p className="mt-3 font-mono text-sm text-white/70">A = [[3 2],[1 1]] → det = 3−2 = 1</p>
            <p className="mt-1 font-mono text-sm text-white/70">A⁻¹ = 1/1 × [[1 −2],[−1 3]] = [[1 −2],[−1 3]]</p>
          </div>
        </div>
      </section>

      {/* Método Gauss-Jordan */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Método de Gauss-Jordan para matrices 3×3</h2>
          <p className="text-sm leading-relaxed text-slate">
            Para matrices 3×3 o mayores se usa el método de Gauss-Jordan: se forma la matriz aumentada [A | I] y se aplican operaciones elementales de fila hasta convertir A en I. Lo que quede en el lado derecho es A⁻¹.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white/70">Paso 1: Escribe [A | I]</p>
            <p className="font-mono text-sm text-white/70">Paso 2: Aplica operaciones de fila para convertir A en I</p>
            <p className="font-mono text-sm text-white/70">Paso 3: El lado derecho ya es A⁻¹</p>
            <p className="mt-2 font-mono text-sm text-white">Si llegas a una fila de ceros en A → no tiene inversa</p>
          </div>
        </div>
      </section>

      {/* Para qué sirve */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Para qué se usa la matriz inversa</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { use: 'Resolver sistemas de ecuaciones', desc: 'Si Ax = b, entonces x = A⁻¹b. La inversa permite resolver el sistema multiplicando por ella.' },
              { use: 'Transformaciones inversas', desc: 'Si A representa una rotación o escala, A⁻¹ deshace esa transformación.' },
              { use: 'Criptografía', desc: 'Algunos cifrados matriciales usan la inversa para descifrar el mensaje original.' },
              { use: 'Regresión lineal', desc: 'La fórmula de mínimos cuadrados usa la inversa de (XᵀX) para ajustar modelos.' },
            ].map(item => (
              <div key={item.use} className="rounded-2xl bg-white p-4" style={{ border: '1px solid #D7E2EA' }}>
                <p className="font-bold text-sm text-ink mb-1">{item.use}</p>
                <p className="text-xs text-slate">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes con la matriz inversa</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Calcular la inversa sin verificar el determinante', body: 'Si det = 0, la inversa no existe. Calcularlo primero evita un trabajo innecesario.' },
              { title: 'Confundir 1/A con A⁻¹', body: 'La inversa de una matriz no es dividir cada elemento por sí mismo. Es una operación matricial específica.' },
              { title: 'Olvidar que A·A⁻¹ = I, no A⁻¹·A = A', body: 'La multiplicación matricial no es conmutativa en general, pero A·A⁻¹ = A⁻¹·A = I es una excepción válida.' },
              { title: 'Aplicar la fórmula 2×2 a matrices 3×3', body: 'La fórmula [[d −b],[−c a]]/det solo vale para 2×2. Para 3×3 usa Gauss-Jordan o adjunta/determinante.' },
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
            Calcula la inversa con la{' '}
            <Link href="/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de matriz inversa
            </Link>{' '}
            o explora{' '}
            <Link href="/calculadoras/matrices-y-vectores" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              todas las calculadoras de matrices y vectores
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
