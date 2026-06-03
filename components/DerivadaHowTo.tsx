const steps = [
  {
    n: '01',
    title: 'Escribe la función',
    desc: 'Introduce la expresión que quieres derivar. Puedes usar x^2, sin(x), e^x, ln(x), sqrt(x) o expresiones como x^3 + 2*x.',
  },
  {
    n: '02',
    title: 'Elige la variable',
    desc: 'Selecciona la variable respecto a la que se deriva. La opción predeterminada es x.',
  },
  {
    n: '03',
    title: 'Selecciona el orden',
    desc: 'Elige entre primera, segunda o tercera derivada. Para órdenes mayores, usa la opción de orden personalizado.',
  },
  {
    n: '04',
    title: 'Evalúa en un punto si lo necesitas',
    desc: 'Activa la opción para evaluar la derivada en un punto concreto. Introduce el valor de la variable y obtendrás el resultado numérico.',
  },
  {
    n: '05',
    title: 'Revisa el resultado',
    desc: 'Pulsa calcular y revisa la derivada simbólica, el valor en el punto si lo indicaste, la recta tangente y la regla aplicada.',
  },
];

export function DerivadaHowTo() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="howto-deriv-heading">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="eyebrow">Guía de uso</p>
            <h2 id="howto-deriv-heading" className="mt-3 text-[1.6rem] font-bold leading-tight text-ink lg:text-[1.9rem]">
              Cómo usar la calculadora de derivadas
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-soft">
              Cinco pasos para obtener la derivada de cualquier función.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
              <div
                className="absolute left-[22px] top-8 hidden h-[calc(100%-4rem)] w-px lg:block"
                style={{ background: 'linear-gradient(to bottom, #DDF3F0 0%, transparent 100%)' }}
                aria-hidden="true"
              />
              <ol className="space-y-6">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-5">
                    <div
                      className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-heading text-sm font-bold"
                      style={{ background: '#0f5c5c', color: '#DDF3F0' }}
                    >
                      {s.n}
                    </div>
                    <div className="pt-1.5">
                      <p className="font-heading text-base font-bold text-ink">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-soft">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
