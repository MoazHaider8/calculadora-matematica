import Link from 'next/link';

export function EcuaContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Cómo se resuelve una ecuación lineal?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Se despeja la incógnita aplicando operaciones iguales a ambos lados hasta quedar con x sola.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">3x + 7 = 16</p>
              <p className="mt-1 font-mono text-sm text-white/70">Resta 7 a ambos lados: 3x = 9</p>
              <p className="mt-1 font-mono text-sm text-white/70">Divide entre 3: x = 3</p>
            </div>
            <div className="mt-3 rounded-xl px-5 py-3" style={{ background: '#DDF3F0' }}>
              <p className="text-sm font-semibold" style={{ color: '#0a3535' }}>
                Comprobación: 3(3) + 7 = 9 + 7 = 16 ✓
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de ecuaciones */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Tipos de ecuaciones más comunes</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { title: 'Ecuación lineal', body: 'La incógnita tiene grado 1. Forma: ax + b = c. Se despeja con sumas, restas, multiplicaciones y divisiones.' },
              { title: 'Ecuación cuadrática', body: 'La incógnita tiene grado 2. Forma: ax² + bx + c = 0. Se resuelve con la fórmula cuadrática o factorización.' },
              { title: 'Ecuación con fracciones', body: 'Contiene fracciones con la incógnita. Se multiplica por el mínimo común múltiplo para eliminar denominadores.' },
              { title: 'Sistema de ecuaciones', body: 'Dos o más ecuaciones con dos o más incógnitas. Se resuelve por sustitución, igualación o matrices.' },
            ].map(card => (
              <div key={card.title} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="mb-2 font-bold text-sm text-ink">{card.title}</p>
                <p className="text-xs leading-relaxed text-slate">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecuaciones lineales paso a paso */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Ecuaciones lineales: pasos detallados</h2>
          <ol className="space-y-4">
            {[
              { n: '1', title: 'Simplifica cada lado', body: 'Agrupa términos semejantes en el lado izquierdo y en el derecho por separado.' },
              { n: '2', title: 'Mueve los términos con x a un lado', body: 'Suma o resta los mismos valores a ambos lados para tener la incógnita sola.' },
              { n: '3', title: 'Mueve las constantes al otro lado', body: 'Suma o resta las constantes para dejarlas al lado opuesto de x.' },
              { n: '4', title: 'Despeja x', body: 'Divide ambos lados entre el coeficiente de x.' },
              { n: '5', title: 'Comprueba la solución', body: 'Sustituye el valor en la ecuación original y verifica que la igualdad sea cierta.' },
            ].map(step => (
              <li key={step.n} className="flex gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-bold text-sm"
                  style={{ background: '#DDF3F0', color: '#147c7c' }}
                >
                  {step.n}
                </span>
                <div>
                  <p className="font-bold text-sm text-ink">{step.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ecuaciones cuadráticas */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Ecuaciones cuadráticas: fórmula general</h2>
          <p className="text-sm leading-relaxed text-slate">
            Para resolver ax² + bx + c = 0 cuando no factoriza fácilmente, se usa la fórmula cuadrática:
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">x = (−b ± √(b² − 4ac)) / (2a)</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            El discriminante b² − 4ac determina cuántas soluciones reales hay:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            <li className="flex gap-2"><span style={{ color: '#147c7c' }}>▸</span> Mayor que 0: dos soluciones reales distintas</li>
            <li className="flex gap-2"><span style={{ color: '#147c7c' }}>▸</span> Igual a 0: una solución real (raíz doble)</li>
            <li className="flex gap-2"><span style={{ color: '#147c7c' }}>▸</span> Menor que 0: no hay soluciones reales</li>
          </ul>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">x² − 5x + 6 = 0 → a=1, b=−5, c=6</p>
            <p className="mt-1 font-mono text-sm text-white/70">x = (5 ± √(25−24)) / 2 = (5 ± 1) / 2</p>
            <p className="mt-1 font-mono text-sm text-white">x = 3 o x = 2</p>
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes al resolver ecuaciones</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'No operar igual en los dos lados', body: 'Cada operación que hagas en un lado debes hacerla también en el otro. Si divides, divides todo.' },
              { title: 'Cambiar el signo al cruzar', body: 'Al mover un término al otro lado, cambia de signo. 3x + 4 = 0 → 3x = −4.' },
              { title: 'No comprobar la solución', body: 'Sustituir x en la ecuación original es el único modo de confirmar que la respuesta es correcta.' },
              { title: 'Confundir ecuación con expresión', body: 'Una expresión como 2x + 3 no tiene solución porque no hay igualdad. Se simplifica, no se resuelve.' },
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
            o explora más temas de{' '}
            <Link href="/calculadoras/algebra" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              álgebra
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
