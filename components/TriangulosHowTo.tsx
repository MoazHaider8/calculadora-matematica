const steps = [
  { n: '1', text: 'Elige el tipo de cálculo que necesitas: base y altura, tres lados, dos ángulos o triángulo equilátero.' },
  { n: '2', text: 'Introduce base, altura, lados o ángulos según el modo seleccionado.' },
  { n: '3', text: 'Selecciona la unidad si estás usando medidas de longitud (cm, m, etc.).' },
  { n: '4', text: 'Pulsa calcular triángulo para obtener los resultados.' },
  { n: '5', text: 'Revisa fórmula, procedimiento, resultados e interpretación.' },
];

export function TriangulosHowTo() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="howto-tri-heading">
      <div className="site-shell">
        <p className="eyebrow">Guía de uso</p>
        <h2 id="howto-tri-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Cómo usar la calculadora de triángulos
        </h2>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(s => (
            <li key={s.n} className="flex gap-3">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
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
