const steps = [
  { n: '1', text: 'Elige si la relación entre las magnitudes es directa o inversa.' },
  { n: '2', text: 'Introduce los valores conocidos A, B y C en los campos correspondientes.' },
  { n: '3', text: 'Revisa la vista previa de la proporción para confirmar que los datos son correctos.' },
  { n: '4', text: 'Pulsa el botón de calcular para obtener el valor X.' },
  { n: '5', text: 'Consulta la fórmula, el procedimiento y la interpretación del resultado.' },
];

export function ReglaTresHowTo() {
  return (
    <section className="py-12 lg:py-16 bg-white" aria-labelledby="howto-rt-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Instrucciones</p>
            <h2 id="howto-rt-heading" className="mt-2 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              Cómo usar la calculadora de regla de tres
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Sigue estos pasos para resolver cualquier proporción directa o inversa.
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
