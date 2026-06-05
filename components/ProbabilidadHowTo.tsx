const steps = [
  { n: '1', text: 'Elige el tipo de probabilidad que quieres calcular.' },
  { n: '2', text: 'Introduce los valores del evento o eventos.' },
  { n: '3', text: 'Pulsa el botón para calcular.' },
  { n: '4', text: 'Revisa el resultado en decimal y en porcentaje.' },
  { n: '5', text: 'Lee la fórmula aplicada y la interpretación del resultado.' },
];

export function ProbabilidadHowTo() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="howto-prob-heading">
      <div className="site-shell">
        <p className="eyebrow">Guía de uso</p>
        <h2 id="howto-prob-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Cómo usar la calculadora de probabilidad
        </h2>
        <ol className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(step => (
            <li
              key={step.n}
              className="flex gap-4 rounded-2xl px-5 py-5"
              style={{ background: '#F8FAFC', border: '1px solid #D7E2EA' }}
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold"
                style={{ background: '#0a3535', color: '#D8A31A' }}
                aria-hidden="true"
              >
                {step.n}
              </span>
              <p className="text-sm leading-relaxed text-slate">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
