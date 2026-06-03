const steps = [
  {
    n: '01',
    title: 'Escribe la función',
    desc: 'Introduce la expresión que quieres analizar. Puedes usar sin(x)/x, (x^2 - 4)/(x - 2), 1/x, sqrt(x + 1) o cualquier función válida.',
  },
  {
    n: '02',
    title: 'Elige la variable',
    desc: 'Selecciona la variable que se aproxima al valor indicado. La opción predeterminada es x.',
  },
  {
    n: '03',
    title: 'Indica el valor al que se acerca la variable',
    desc: 'Escribe el valor límite: un número, pi, e, infinito o -infinito. La calculadora analizará el comportamiento de la función cerca de ese punto.',
  },
  {
    n: '04',
    title: 'Selecciona la dirección',
    desc: 'Elige entre límite bilateral, por la izquierda o por la derecha. Para infinito, la dirección se determina automáticamente.',
  },
  {
    n: '05',
    title: 'Revisa el resultado',
    desc: 'Pulsa calcular y revisa el resultado, los límites laterales, la tabla de valores si la activaste, y la explicación del procedimiento.',
  },
];

export function LimiteHowTo() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="howto-limite-heading">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="eyebrow">Guía de uso</p>
            <h2 id="howto-limite-heading" className="mt-3 text-[1.6rem] font-bold leading-tight text-ink lg:text-[1.9rem]">
              Cómo usar la calculadora de límites
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-soft">
              Cinco pasos para obtener el límite de cualquier función.
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
