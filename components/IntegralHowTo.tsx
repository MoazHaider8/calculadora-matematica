const steps = [
  {
    n: '01',
    title: 'Escribe la función',
    desc: 'Introduce la expresión que quieres integrar. Puedes usar x^2, sin(x), e^x, 1/x, sqrt(x) o expresiones combinadas como x^2 + 3*x.',
  },
  {
    n: '02',
    title: 'Elige la variable',
    desc: 'Selecciona la variable de integración en el menú desplegable. La opción predeterminada es x.',
  },
  {
    n: '03',
    title: 'Selecciona el tipo',
    desc: 'Elige entre integral indefinida o integral definida según el tipo de cálculo que necesitas.',
  },
  {
    n: '04',
    title: 'Introduce los límites',
    desc: 'Si elegiste integral definida, escribe el límite inferior y el límite superior. Puedes usar números, pi o e.',
  },
  {
    n: '05',
    title: 'Revisa el resultado',
    desc: 'Pulsa calcular y revisa el resultado exacto. Para integrales definidas también encontrarás la aproximación decimal.',
  },
];

export function IntegralHowTo() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="howto-heading">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="eyebrow">Guía de uso</p>
            <h2 id="howto-heading" className="mt-3 text-[1.6rem] font-bold leading-tight text-ink lg:text-[1.9rem]">
              Cómo usar la calculadora de integrales
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-soft">
              Cinco pasos para obtener el resultado de cualquier integral.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
              {/* Vertical connector line */}
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
