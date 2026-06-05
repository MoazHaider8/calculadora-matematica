const steps = [
  { n: '1', text: 'Elige si quieres calcular hipotenusa, cateto A o cateto B.' },
  { n: '2', text: 'Introduce los dos lados conocidos del triángulo rectángulo.' },
  { n: '3', text: 'Selecciona la unidad si quieres mostrar cm, m u otra.' },
  { n: '4', text: 'Pulsa calcular.' },
  { n: '5', text: 'Revisa fórmula, procedimiento, resultado y comprobación en el panel de resultados.' },
];

export function PitagorasHowTo() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="howto-pit-heading">
      <div className="site-shell">
        <p className="eyebrow">Guía rápida</p>
        <h2 id="howto-pit-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Cómo usar la calculadora de Pitágoras
        </h2>
        <ol className="max-w-2xl space-y-4">
          {steps.map(s => (
            <li key={s.n} className="flex gap-4">
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ background: '#0a3535' }}
                aria-hidden="true"
              >
                {s.n}
              </span>
              <p className="text-sm leading-relaxed text-slate">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
