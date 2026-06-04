const steps = [
  { n: '1', text: 'Elige promedio simple si todos los valores pesan igual, o promedio ponderado si algunos tienen mayor importancia.' },
  { n: '2', text: 'Introduce los valores numéricos separados por coma o uno por línea.' },
  { n: '3', text: 'Añade el peso de cada valor si usas el modo ponderado.' },
  { n: '4', text: 'Pulsa el botón de calcular promedio para obtener el resultado.' },
  { n: '5', text: 'Revisa la suma total, la cantidad de datos, el promedio y el procedimiento.' },
];

export function PromedioHowTo() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="howto-prom-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Instrucciones</p>
            <h2 id="howto-prom-heading" className="mt-2 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              Cómo usar la calculadora de promedio
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Sigue estos pasos para calcular el promedio de cualquier lista de valores.
            </p>
          </div>
          <ol className="flex flex-col gap-4">
            {steps.map(s => (
              <li key={s.n} className="flex gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: '#0a4f4d' }}
                  aria-hidden="true"
                >
                  {s.n}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-slate">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
