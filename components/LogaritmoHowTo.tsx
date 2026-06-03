const steps = [
  {
    n: '01',
    title: 'Escribe el argumento',
    desc: 'Introduce el número del que quieres calcular el logaritmo. Puede ser un entero, un decimal, pi, e o una expresión como e^2.',
  },
  {
    n: '02',
    title: 'Elige la base',
    desc: 'Selecciona base 10, base e (logaritmo natural) o elige base personalizada para introducir cualquier base válida.',
  },
  {
    n: '03',
    title: 'Revisa la vista previa',
    desc: 'La vista previa muestra el logaritmo en notación estándar: log₂(8), log₁₀(100) o ln(e²). Se actualiza automáticamente.',
  },
  {
    n: '04',
    title: 'Pulsa calcular',
    desc: 'Presiona el botón para obtener el resultado. Si el logaritmo tiene un valor exacto entero, se muestra directamente.',
  },
  {
    n: '05',
    title: 'Consulta resultado y fórmula',
    desc: 'Revisa el resultado decimal, la comprobación exponencial y la fórmula de cambio de base aplicada.',
  },
];

export function LogaritmoHowTo() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="howto-log-heading">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="eyebrow">Guía de uso</p>
            <h2 id="howto-log-heading" className="mt-3 text-[1.6rem] font-bold leading-tight text-ink lg:text-[1.9rem]">
              Cómo usar la calculadora de logaritmos
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-soft">
              Cinco pasos para obtener cualquier logaritmo con su fórmula.
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
