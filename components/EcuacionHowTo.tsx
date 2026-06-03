const steps = [
  { n: '01', title: 'Escribe la ecuación', desc: 'Introduce la ecuación en el campo de texto. Usa el signo igual (=) para separar ambos lados.' },
  { n: '02', title: 'Elige el tipo de ecuación', desc: 'Selecciona si es una ecuación lineal, cuadrática o un sistema de dos ecuaciones.' },
  { n: '03', title: 'Selecciona la variable', desc: 'Elige la variable que quieres resolver: x, y, t, a o b.' },
  { n: '04', title: 'Pulsa resolver ecuación', desc: 'Haz clic en el botón amarillo para obtener la solución.' },
  { n: '05', title: 'Revisa la solución y la comprobación', desc: 'El panel derecho muestra la solución, el procedimiento y una comprobación que verifica el resultado.' },
];

export function EcuacionHowTo() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="howto-eq-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Guía de uso</p>
          <h2 id="howto-eq-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Cómo usar la calculadora de ecuaciones
          </h2>
        </div>
        <ol className="space-y-4">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: '#0A4F4D' }}
                aria-hidden="true"
              >
                {s.n}
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{s.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-slate">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
