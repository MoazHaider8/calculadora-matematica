import Link from 'next/link';

export function EcLinCuadContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Cuál es la diferencia entre lineal y cuadrática?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              La ecuación lineal tiene grado 1 (la incógnita no está elevada a ninguna potencia). La cuadrática tiene grado 2 (hay un término x²). La lineal tiene una solución; la cuadrática puede tener 0, 1 o 2.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">Lineal: 2x + 3 = 7 → x = 2</p>
              <p className="mt-1 font-mono text-sm text-white">Cuadrática: x² − 5x + 6 = 0 → x = 2 o x = 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecuación lineal */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Qué es una ecuación lineal</h2>
          <p className="text-sm leading-relaxed text-slate">
            Una ecuación lineal tiene la forma ax + b = c, donde la incógnita x aparece con exponente 1. Su gráfica es una línea recta, de ahí el nombre.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Tiene exactamente una solución (salvo casos especiales donde no hay solución o hay infinitas, que ocurren en sistemas). Se resuelve despejando x con operaciones básicas.
          </p>
          <div className="mt-4 space-y-3">
            {[
              { eq: '2x + 3 = 7', solve: 'x = (7−3)/2 = 2' },
              { eq: '5x − 10 = 0', solve: 'x = 10/5 = 2' },
              { eq: '3x = −9', solve: 'x = −9/3 = −3' },
            ].map(item => (
              <div key={item.eq} className="rounded-xl px-4 py-3" style={{ border: '1px solid #D7E2EA', background: '#fff' }}>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-ink">{item.eq}</span>
                  <span className="text-xs text-slate">&rarr;</span>
                  <span className="font-mono text-sm" style={{ color: '#147c7c' }}>{item.solve}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecuación cuadrática */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Qué es una ecuación cuadrática</h2>
          <p className="text-sm leading-relaxed text-slate">
            Una ecuación cuadrática tiene la forma ax² + bx + c = 0, donde aparece x al cuadrado. Su gráfica es una parábola. Puede tener dos soluciones, una solución doble o ninguna solución real.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            El discriminante b² − 4ac determina el número de soluciones: positivo (2 soluciones), cero (1 solución), negativo (sin soluciones reales).
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">Fórmula: x = (−b ± √(b² − 4ac)) / (2a)</p>
            <p className="mt-2 font-mono text-sm text-white/70">x² − 5x + 6 = 0 → a=1, b=−5, c=6</p>
            <p className="mt-1 font-mono text-sm text-white/70">Discriminante: 25 − 24 = 1 → √1 = 1</p>
            <p className="mt-1 font-mono text-sm text-white">x = (5 ± 1) / 2 → x = 3 o x = 2</p>
          </div>
        </div>
      </section>

      {/* Diferencias */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Diferencias principales</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#DDF3F0' }}>
                  <th className="px-4 py-3 text-left font-bold text-ink">Característica</th>
                  <th className="px-4 py-3 text-left font-bold text-ink">Lineal</th>
                  <th className="px-4 py-3 text-left font-bold text-ink">Cuadrática</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { char: 'Grado', lin: '1', cuad: '2' },
                  { char: 'Forma general', lin: 'ax + b = c', cuad: 'ax² + bx + c = 0' },
                  { char: 'Soluciones', lin: 'Exactamente 1', cuad: '0, 1 o 2' },
                  { char: 'Gráfica', lin: 'Línea recta', cuad: 'Parábola' },
                  { char: 'Método de solución', lin: 'Despejar x', cuad: 'Factorización o fórmula' },
                ].map(row => (
                  <tr key={row.char} className="border-t" style={{ borderColor: '#EEF4F7' }}>
                    <td className="px-4 py-3 font-semibold text-sm text-ink">{row.char}</td>
                    <td className="px-4 py-3 text-xs text-slate">{row.lin}</td>
                    <td className="px-4 py-3 text-xs text-slate">{row.cuad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Tratar x² como si fuera x', body: 'x² − 4 = 0 no se resuelve como x = 4. Hay que despejar: x² = 4 → x = ±2.' },
              { title: 'Olvidar la solución negativa', body: 'Si x² = 9, hay dos soluciones: x = 3 y x = −3. Tanto 3² como (−3)² dan 9.' },
              { title: 'Confundir lineal con cuadrática', body: 'Si hay x² en la ecuación, es cuadrática. No la trates como lineal aunque parezca sencilla.' },
              { title: 'No comprobar la solución', body: 'Sustituye siempre las soluciones en la ecuación original para verificar que son correctas.' },
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
            Resuelve ecuaciones con la{' '}
            <Link href="/calculadoras/algebra/calculadora-de-ecuaciones" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de ecuaciones
            </Link>{' '}
            o explora{' '}
            <Link href="/calculadoras/algebra" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              todas las calculadoras de álgebra
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
