import Link from 'next/link';

export function BlogProbContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="bprob-rapida-h">
        <div className="site-shell">
          <div className="mx-auto max-w-2xl rounded-2xl px-6 py-6 lg:px-8 lg:py-7" style={{ border: '2px solid #D8A31A', background: '#FFFEF7' }}>
            <h2 id="bprob-rapida-h" className="mb-3 text-base font-bold" style={{ color: '#D8A31A' }}>Respuesta rápida</h2>
            <p className="text-sm leading-relaxed text-slate">La probabilidad mide la posibilidad de que ocurra un evento. Se calcula dividiendo los casos favorables entre los casos posibles.</p>
            <div className="mt-4 overflow-x-auto rounded-xl px-5 py-4 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              P(A) = casos favorables / casos posibles
            </div>
            <div className="mt-3 overflow-x-auto rounded-xl px-5 py-3" style={{ background: '#DDF3F0' }}>
              <p className="font-mono text-sm" style={{ color: '#0a3535' }}>
                3 casos favorables, 10 posibles → P(A) = 3/10 = <strong style={{ color: '#147c7c' }}>0.3 (30%)</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="bprob-que-h">
        <div className="site-shell">
          <h2 id="bprob-que-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Qué es la probabilidad</h2>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-slate">
            <p>La probabilidad es un número entre 0 y 1 que expresa la posibilidad de que ocurra un evento. Un resultado de 0 significa que el evento es imposible. Un resultado de 1 significa que es seguro.</p>
            <p>Se puede expresar en forma decimal (0.3), como fracción (3/10) o en porcentaje (30%). Las tres formas representan lo mismo.</p>
          </div>
        </div>
      </section>

      {/* Fórmula */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="bprob-formula-h">
        <div className="site-shell">
          <h2 id="bprob-formula-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Fórmula básica de probabilidad</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate mb-4">Los casos favorables son los resultados que cumple el evento. Los casos posibles son todos los resultados del experimento.</p>
          <div className="max-w-xl space-y-3">
            <div className="overflow-x-auto rounded-xl px-5 py-4 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              P(A) = casos favorables / total de casos posibles
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { e: 'Sacar cara en una moneda', calc: 'P = 1/2 = 0.5 = 50%' },
                { e: 'Sacar un 6 en un dado', calc: 'P = 1/6 ≈ 0.1667 ≈ 16.67%' },
              ].map((ex, i) => (
                <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                  <p className="text-xs text-slate">{ex.e}</p>
                  <div className="mt-2 font-mono text-xs" style={{ color: '#147c7c' }}>{ex.calc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tipos */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="bprob-tipos-h">
        <div className="site-shell">
          <h2 id="bprob-tipos-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Eventos complementarios, unión e intersección</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { nombre: 'Complementaria', formula: 'P(no A) = 1 - P(A)', ejemplo: 'P(A) = 0.3 → P(no A) = 0.7', desc: 'Probabilidad de que el evento no ocurra.' },
              { nombre: 'Unión', formula: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)', ejemplo: 'P(A)=0.4, P(B)=0.3, P(A∩B)=0.1 → P(A∪B)=0.6', desc: 'Probabilidad de que ocurra A o B (o ambos).' },
              { nombre: 'Intersección (independientes)', formula: 'P(A ∩ B) = P(A) × P(B)', ejemplo: 'P(A)=0.5, P(B)=0.4 → P(A∩B)=0.2', desc: 'Probabilidad de que ocurran A y B a la vez.' },
            ].map(t => (
              <div key={t.nombre} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-sm font-bold text-ink">{t.nombre}</p>
                <p className="mt-1 text-xs text-slate">{t.desc}</p>
                <div className="mt-3 overflow-x-auto rounded-lg px-3 py-2 font-mono text-xs" style={{ background: '#0a3535', color: '#D8A31A' }}>{t.formula}</div>
                <div className="mt-2 overflow-x-auto rounded-lg px-3 py-2 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>{t.ejemplo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="bprob-errores-h">
        <div className="site-shell">
          <h2 id="bprob-errores-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Errores comunes al calcular probabilidades</h2>
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
            {[
              { t: 'Olvidar restar la intersección en la unión', d: 'La fórmula P(A ∪ B) = P(A) + P(B) - P(A ∩ B) resta la intersección para no contarla dos veces.' },
              { t: 'Confundir casos favorables con el evento contrario', d: 'Si la probabilidad de que ocurra es 0.3, la de que no ocurra es 0.7, no 0.3. La suma siempre debe ser 1.' },
              { t: 'Asumir independencia sin verificarla', d: 'La fórmula de intersección P(A) × P(B) solo aplica cuando los eventos son independientes, es decir, que uno no afecta al otro.' },
              { t: 'Expresar la probabilidad fuera del rango 0-1', d: 'Una probabilidad no puede ser mayor que 1 ni menor que 0. Si el resultado sale fuera de ese rango, hay un error en los datos.' },
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
      <section className="bg-white py-8 lg:py-10" aria-labelledby="bprob-cta-h">
        <div className="site-shell">
          <h2 id="bprob-cta-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Cuándo usar la calculadora de probabilidad</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate mb-5">La calculadora de probabilidad resuelve casos de probabilidad simple, complementaria, unión, intersección y al menos uno. Introduce los valores que tienes y obtén el resultado en decimal, fracción y porcentaje.</p>
          <Link href="/calculadoras/estadistica/calculadora-de-probabilidad" className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white" style={{ background: '#147c7c' }}>
            Ir a la calculadora de probabilidad &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
