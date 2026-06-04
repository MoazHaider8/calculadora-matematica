const steps = [
  { n: '1', title: 'Elige la operación', body: 'Selecciona si quieres sumar, restar, multiplicar, dividir, simplificar o convertir la fracción.' },
  { n: '2', title: 'Introduce el numerador y el denominador', body: 'Rellena los campos de la Fracción A con el numerador en la parte superior y el denominador en la inferior.' },
  { n: '3', title: 'Añade la segunda fracción si es necesario', body: 'Para sumar, restar, multiplicar y dividir introduce también la Fracción B. Para simplificar y convertir solo hace falta una fracción.' },
  { n: '4', title: 'Pulsa el botón de cálculo', body: 'Haz clic en el botón amarillo con el nombre de la operación elegida.' },
  { n: '5', title: 'Revisa el resultado y el procedimiento', body: 'Consulta el resultado simplificado, la fracción mixta, el decimal y los pasos del cálculo.' },
];

export function FraccionesHowTo() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="howto-frac-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Guía de uso</p>
            <h2
              id="howto-frac-heading"
              className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
              style={{ color: '#102a43' }}
            >
              Cómo usar la calculadora de fracciones
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#627d98' }}>
              Sigue estos pasos para obtener el resultado de cualquier operación con fracciones.
            </p>
          </div>

          <ol className="flex flex-col gap-5">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-sm"
                  style={{ background: '#DDF3F0', color: '#0F5C5C' }}
                  aria-hidden="true"
                >
                  {s.n}
                </span>
                <div className="pt-0.5">
                  <p className="text-sm font-bold" style={{ color: '#102a43' }}>{s.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed" style={{ color: '#627d98' }}>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
}
