const steps = [
  { n: '1', text: 'Introduce los datos separados por comas o saltos de línea.' },
  { n: '2', text: 'Elige población, muestra o ambas según tu caso.' },
  { n: '3', text: 'Pulsa calcular varianza.' },
  { n: '4', text: 'Revisa la media, las diferencias cuadradas y el resultado.' },
  { n: '5', text: 'Interpreta la dispersión de los datos respecto a la media.' },
];

export function VarianzaHowTo() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="howto-var-heading">
      <div className="site-shell">
        <p className="eyebrow">Guía de uso</p>
        <h2 id="howto-var-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Cómo usar la calculadora de varianza
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
