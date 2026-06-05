import Link from 'next/link';

export function DetsArtContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Qué es el determinante de una matriz?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              El determinante es un número asociado a una matriz cuadrada. Indica si la matriz tiene inversa (det ≠ 0) y mide el factor de escala de la transformación que representa.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">Matriz 2×2: A = [[a b],[c d]]</p>
              <p className="mt-2 font-mono text-sm text-white">det(A) = a×d − b×c</p>
              <p className="mt-2 font-mono text-sm text-white/70">A = [[3 1],[2 4]] → det = 3×4 − 1×2 = 10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Para qué sirve */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Para qué sirve el determinante</h2>
          <p className="text-sm leading-relaxed text-slate">
            El determinante tiene varios usos concretos en álgebra lineal y geometría:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              'Determinar si una matriz tiene inversa: la tiene si y solo si det ≠ 0.',
              'Resolver sistemas de ecuaciones por la regla de Cramer.',
              'Calcular el área de un paralelogramo a partir de sus vectores.',
              'Comprobar si dos vectores son paralelos (det = 0 significa que son linealmente dependientes).',
            ].map(item => (
              <li key={item} className="flex gap-2 text-sm text-slate">
                <span style={{ color: '#D8A31A' }}>•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Determinante 2×2 */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Cómo calcular el determinante 2×2</h2>
          <p className="text-sm leading-relaxed text-slate">
            Para una matriz 2×2, multiplica los elementos de la diagonal principal y réstale el producto de la diagonal secundaria.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">det[[a b],[c d]] = a·d − b·c</p>
          </div>
          <div className="mt-4 space-y-3">
            {[
              { mat: '[[2 3],[1 4]]', calc: 'det = 2×4 − 3×1 = 8 − 3 = 5', result: '5' },
              { mat: '[[5 0],[3 2]]', calc: 'det = 5×2 − 0×3 = 10 − 0 = 10', result: '10' },
              { mat: '[[4 2],[2 1]]', calc: 'det = 4×1 − 2×2 = 4 − 4 = 0', result: '0 → sin inversa' },
            ].map(item => (
              <div key={item.mat} className="rounded-xl p-4" style={{ border: '1px solid #D7E2EA', background: '#fff' }}>
                <p className="font-mono text-xs text-slate mb-2">{item.mat}</p>
                <div className="rounded-lg px-3 py-2" style={{ background: '#0a3535' }}>
                  <p className="font-mono text-xs text-white">{item.calc}</p>
                </div>
                <div className="mt-2 rounded-lg px-3 py-1" style={{ background: '#DDF3F0' }}>
                  <p className="font-mono text-xs font-bold" style={{ color: '#0a3535' }}>det = {item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Determinante 3×3 */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Cómo calcular el determinante 3×3</h2>
          <p className="text-sm leading-relaxed text-slate">
            Para matrices 3×3 se usa la regla de Sarrus o la expansión por cofactores. La regla de Sarrus copia las dos primeras columnas a la derecha y suma diagonales descendentes menos diagonales ascendentes.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">A = [[1 2 3],[4 5 6],[7 8 9]]</p>
            <p className="mt-2 font-mono text-sm text-white/70">Diagonales ↘: 1·5·9 + 2·6·7 + 3·4·8 = 45+84+96 = 225</p>
            <p className="mt-1 font-mono text-sm text-white/70">Diagonales ↗: 3·5·7 + 1·6·8 + 2·4·9 = 105+48+72 = 225</p>
            <p className="mt-2 font-mono text-sm text-white">det = 225 − 225 = 0</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            det = 0 significa que las filas son linealmente dependientes y la matriz no tiene inversa.
          </p>
        </div>
      </section>

      {/* Propiedades */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Propiedades del determinante</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { prop: 'det(A·B) = det(A)·det(B)', desc: 'El determinante del producto es el producto de los determinantes.' },
              { prop: 'det(Aᵀ) = det(A)', desc: 'La matriz transpuesta tiene el mismo determinante.' },
              { prop: 'Fila de ceros → det = 0', desc: 'Si una fila o columna es toda ceros, el determinante es 0.' },
              { prop: 'Intercambiar filas → signo cambia', desc: 'Intercambiar dos filas multiplica el determinante por −1.' },
            ].map(item => (
              <div key={item.prop} className="rounded-2xl bg-white p-4" style={{ border: '1px solid #D7E2EA' }}>
                <p className="font-mono text-xs font-bold mb-1" style={{ color: '#147c7c' }}>{item.prop}</p>
                <p className="text-xs text-slate">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes con determinantes</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Calcular en matrices no cuadradas', body: 'El determinante solo existe para matrices cuadradas (2×2, 3×3, etc.). Una matriz 2×3 no tiene determinante.' },
              { title: 'Confundir diagonal principal y secundaria', body: 'En det[[a b],[c d]], el producto principal es a·d y el secundario es b·c. No los intercambies.' },
              { title: 'Pensar que det = 0 es un error', body: 'No es un error de cálculo. Significa que la matriz es singular: no tiene inversa y el sistema asociado no tiene solución única.' },
              { title: 'Aplicar la regla 2×2 a matrices 3×3', body: 'La fórmula a·d − b·c es solo para 2×2. Para 3×3 usa Sarrus o la expansión por cofactores.' },
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
            Calcula determinantes con la{' '}
            <Link href="/calculadoras/matrices-y-vectores/calculadora-de-determinantes" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de determinantes
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
