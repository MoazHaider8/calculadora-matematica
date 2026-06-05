import Link from 'next/link';

export function MatrizArtContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Qué es una matriz?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Una matriz es una tabla de números organizados en filas y columnas. Se denota por su dimensión m×n, donde m es el número de filas y n el número de columnas.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">Matriz 2×3 (2 filas, 3 columnas):</p>
              <p className="mt-2 font-mono text-sm text-white">[ 1  2  3 ]</p>
              <p className="font-mono text-sm text-white">[ 4  5  6 ]</p>
              <p className="mt-2 font-mono text-sm text-white/70">Elemento a₁₂ = 2 (fila 1, columna 2)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Qué es una matriz</h2>
          <p className="text-sm leading-relaxed text-slate">
            Una matriz organiza datos en filas y columnas, como una tabla. Cada número dentro se llama elemento o entrada. Se identifica por su posición: a<sub>ij</sub> es el elemento de la fila i y la columna j.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Las matrices son una herramienta central del álgebra lineal. Se usan para resolver sistemas de ecuaciones, representar transformaciones geométricas, procesar imágenes digitales y modelar redes.
          </p>
        </div>
      </section>

      {/* Filas, columnas, dimensiones */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Filas, columnas y dimensiones</h2>
          <p className="text-sm leading-relaxed text-slate">
            La dimensión de una matriz se escribe m×n. Una matriz de 3 filas y 2 columnas es 3×2. El orden importa: 3×2 y 2×3 son matrices distintas.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Matriz 2×3', repr: '[ 1  2  3 ]\n[ 4  5  6 ]', note: '2 filas, 3 columnas' },
              { label: 'Matriz 3×2', repr: '[ 1  2 ]\n[ 3  4 ]\n[ 5  6 ]', note: '3 filas, 2 columnas' },
            ].map(item => (
              <div key={item.label} className="rounded-2xl p-4" style={{ border: '1px solid #D7E2EA', background: '#fff' }}>
                <p className="font-bold text-sm text-ink mb-2">{item.label}</p>
                <div className="rounded-lg px-3 py-2" style={{ background: '#0a3535' }}>
                  <pre className="font-mono text-xs text-white whitespace-pre">{item.repr}</pre>
                </div>
                <p className="mt-2 text-xs text-slate">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos básicos */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Tipos básicos de matrices</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Matriz cuadrada', def: 'Mismo número de filas y columnas (n×n).', ex: '2×2, 3×3' },
              { name: 'Matriz identidad', def: 'Diagonal principal con unos, resto ceros. Equivale al número 1.', ex: 'I = diag(1,1)' },
              { name: 'Matriz cero', def: 'Todos sus elementos son 0.', ex: '[ 0 0 ]\n[ 0 0 ]' },
              { name: 'Matriz fila', def: 'Una sola fila (1×n).', ex: '[ 3  5  2 ]' },
              { name: 'Matriz columna', def: 'Una sola columna (m×1).', ex: '[ 4 ]\n[ 7 ]' },
              { name: 'Matriz diagonal', def: 'Solo la diagonal principal tiene valores distintos de cero.', ex: 'diag(2, 5, 3)' },
            ].map(t => (
              <div key={t.name} className="rounded-2xl bg-white p-4" style={{ border: '1px solid #D7E2EA' }}>
                <p className="font-bold text-sm text-ink mb-1">{t.name}</p>
                <p className="text-xs text-slate">{t.def}</p>
                <p className="mt-1 font-mono text-xs" style={{ color: '#147c7c' }}>{t.ex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operaciones */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Operaciones con matrices</h2>
          <div className="space-y-4">
            {[
              {
                op: 'Suma de matrices',
                body: 'Deben tener la misma dimensión. Se suman los elementos correspondientes.',
                ex: '[ 1  2 ] + [ 3  4 ] = [ 4  6 ]\n[ 5  6 ]   [ 7  8 ]   [12 14 ]',
              },
              {
                op: 'Multiplicación por escalar',
                body: 'Multiplica todos los elementos de la matriz por ese número.',
                ex: '2 × [ 1  3 ] = [ 2  6 ]\n     [ 2  4 ]   [ 4  8 ]',
              },
              {
                op: 'Multiplicación de matrices',
                body: 'Solo es posible si el número de columnas de A es igual al número de filas de B. El resultado tiene las filas de A y las columnas de B.',
                ex: 'A (2×3) × B (3×2) = C (2×2) ✓\nA (2×3) × B (2×3) no es posible ✗',
              },
            ].map(item => (
              <div key={item.op} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="font-bold text-sm text-ink mb-1">{item.op}</p>
                <p className="text-xs text-slate mb-2">{item.body}</p>
                <div className="rounded-lg px-3 py-2" style={{ background: '#0a3535' }}>
                  <pre className="font-mono text-xs text-white whitespace-pre">{item.ex}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes con matrices</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Sumar matrices de distinta dimensión', body: 'No es posible sumar una matriz 2×2 con una 2×3. Las dimensiones deben ser idénticas.' },
              { title: 'Multiplicar en el orden incorrecto', body: 'A×B y B×A son generalmente distintos. La multiplicación de matrices no es conmutativa.' },
              { title: 'Confundir filas con columnas', body: 'Una matriz 3×2 tiene 3 filas y 2 columnas, no al revés. El primer número siempre indica las filas.' },
              { title: 'Creer que toda matriz tiene inversa', body: 'Solo las matrices cuadradas con determinante ≠ 0 tienen inversa. Las matrices rectangulares no tienen inversa.' },
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
            Opera con matrices usando la{' '}
            <Link href="/calculadoras/matrices-y-vectores/calculadora-de-matrices" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de matrices
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
