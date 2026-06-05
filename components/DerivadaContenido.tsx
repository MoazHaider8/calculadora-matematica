import Link from 'next/link';

export function DerivadaContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="deriv-rapida-h">
        <div className="site-shell">
          <div className="mx-auto max-w-2xl rounded-2xl px-6 py-6 lg:px-8 lg:py-7" style={{ border: '2px solid #D8A31A', background: '#FFFEF7' }}>
            <h2 id="deriv-rapida-h" className="mb-3 text-base font-bold" style={{ color: '#D8A31A' }}>Respuesta rápida</h2>
            <p className="text-sm leading-relaxed text-slate">La derivada de una función mide cómo cambia esa función al variar su variable. Indica la tasa de cambio instantánea y la pendiente de la tangente en cada punto.</p>
            <div className="mt-4 overflow-x-auto rounded-xl px-5 py-4 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              d/dx [xⁿ] = n · x^(n-1)
            </div>
            <div className="mt-3 overflow-x-auto rounded-xl px-5 py-3" style={{ background: '#DDF3F0' }}>
              <p className="font-mono text-sm" style={{ color: '#0a3535' }}>
                d/dx [x²] = 2x &nbsp;&nbsp; d/dx [x³] = 3x²
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="deriv-que-h">
        <div className="site-shell">
          <h2 id="deriv-que-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Qué es una derivada</h2>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-slate">
            <p>Una derivada es la medida de cómo cambia el valor de una función cuando su variable cambia un poco. En términos prácticos, responde a la pregunta: si x cambia ligeramente, ¿cuánto cambia f(x)?</p>
            <p>La derivada se representa como f&apos;(x), dy/dx o d/dx[f(x)]. Las tres notaciones significan lo mismo: la tasa de cambio instantánea de la función en el punto x.</p>
          </div>
        </div>
      </section>

      {/* Pendiente y tasa de cambio */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="deriv-interp-h">
        <div className="site-shell">
          <h2 id="deriv-interp-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Cómo interpretar una derivada</h2>
          <div className="grid gap-4 sm:grid-cols-2 max-w-xl">
            <div className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
              <p className="text-sm font-bold text-ink">Como pendiente</p>
              <p className="mt-2 text-xs leading-relaxed text-slate">La derivada en un punto es la pendiente de la línea tangente a la curva en ese punto. Indica cuán empinada es la función en ese instante.</p>
            </div>
            <div className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
              <p className="text-sm font-bold text-ink">Como tasa de cambio</p>
              <p className="mt-2 text-xs leading-relaxed text-slate">En física, la derivada de la posición respecto al tiempo es la velocidad. En economía, la derivada del costo respecto a la cantidad producida es el costo marginal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reglas básicas */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="deriv-reglas-h">
        <div className="site-shell">
          <h2 id="deriv-reglas-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Reglas básicas de derivación</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl">
            {[
              { regla: 'Constante', formula: "d/dx [c] = 0", ejemplo: "d/dx [7] = 0" },
              { regla: 'Potencia', formula: "d/dx [xⁿ] = n·x^(n-1)", ejemplo: "d/dx [x⁴] = 4x³" },
              { regla: 'Constante × función', formula: "d/dx [c·f(x)] = c·f'(x)", ejemplo: "d/dx [5x²] = 10x" },
              { regla: 'Suma', formula: "d/dx [f+g] = f'+g'", ejemplo: "d/dx [x²+x] = 2x+1" },
              { regla: 'Resta', formula: "d/dx [f-g] = f'-g'", ejemplo: "d/dx [x³-x] = 3x²-1" },
            ].map(r => (
              <div key={r.regla} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>{r.regla}</p>
                <div className="mt-2 overflow-x-auto rounded-lg px-3 py-2 font-mono text-xs" style={{ background: '#0a3535', color: '#D8A31A' }}>{r.formula}</div>
                <div className="mt-2 overflow-x-auto rounded-lg px-3 py-2 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>{r.ejemplo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ejemplos */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="deriv-ejemplos-h">
        <div className="site-shell">
          <h2 id="deriv-ejemplos-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Ejemplos resueltos</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { func: 'f(x) = x²', deriv: "f'(x) = 2x", nota: 'Aplica la regla de la potencia: baja el exponente y resta 1.' },
              { func: 'f(x) = 3x²', deriv: "f'(x) = 6x", nota: 'La constante 3 se multiplica por el coeficiente que baja.' },
              { func: 'f(x) = x³', deriv: "f'(x) = 3x²", nota: 'El exponente baja y la nueva potencia es x².' },
              { func: 'f(x) = 5x', deriv: "f'(x) = 5", nota: 'La derivada de cx es c. La variable desaparece.' },
              { func: 'f(x) = 7 (constante)', deriv: "f'(x) = 0", nota: 'La derivada de una constante siempre es cero.' },
            ].map((e, i) => (
              <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <div className="overflow-x-auto rounded-lg px-3 py-2 font-mono text-xs" style={{ background: '#0a3535', color: '#DDF3F0' }}>{e.func}</div>
                <div className="mt-2 overflow-x-auto rounded-lg px-3 py-2 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>{e.deriv}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate">{e.nota}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="deriv-errores-h">
        <div className="site-shell">
          <h2 id="deriv-errores-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Errores comunes al derivar</h2>
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
            {[
              { t: 'Olvidar que la derivada de una constante es 0', d: "d/dx [5] = 0, no 5. Una constante no cambia con x, por eso su tasa de cambio es cero." },
              { t: 'No bajar el exponente correctamente', d: 'En la regla de la potencia, el exponente baja como coeficiente y se resta 1 al exponente restante. d/dx [x⁴] = 4x³, no 4x⁴.' },
              { t: 'Derivar cada término por separado cuando hay productos', d: 'La derivada de f(x)·g(x) no es f\'(x)·g\'(x). Los productos requieren la regla del producto: f\'g + fg\'.' },
              { t: 'Confundir la función con su derivada', d: 'f(x) = x² es la función. f\'(x) = 2x es su derivada. Son objetos distintos que tienen significados diferentes.' },
            ].map((e, i) => (
              <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-sm font-bold text-ink">{e.t}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="deriv-cta-h">
        <div className="site-shell">
          <h2 id="deriv-cta-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Cuándo usar la calculadora de derivadas</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate mb-5">La calculadora de derivadas resuelve funciones polinomiales, trigonométricas y exponenciales y muestra el procedimiento paso a paso. Es útil para verificar resultados o trabajar con funciones más complejas.</p>
          <Link href="/calculadoras/calculo/calculadora-de-derivadas" className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white" style={{ background: '#147c7c' }}>
            Ir a la calculadora de derivadas &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
