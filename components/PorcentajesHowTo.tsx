const steps = [
  { n: '1', title: 'Elige el tipo de cálculo', body: 'Selecciona entre porcentaje de un número, qué porcentaje es, aumento, descuento, cambio porcentual o encontrar el total.' },
  { n: '2', title: 'Introduce los valores', body: 'Rellena los dos campos con los números necesarios para el cálculo elegido. Los valores pueden ser enteros o decimales.' },
  { n: '3', title: 'Revisa la vista previa', body: 'Comprueba que la operación en la vista previa coincide con lo que quieres calcular antes de continuar.' },
  { n: '4', title: 'Pulsa el botón de cálculo', body: 'Haz clic en el botón amarillo con el nombre de la operación para obtener el resultado.' },
  { n: '5', title: 'Consulta resultado y fórmula', body: 'Revisa el resultado principal, los valores de detalle como el descuento o el aumento, la fórmula aplicada y la interpretación.' },
];

export function PorcentajesHowTo() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="howto-pct-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Guía de uso</p>
            <h2
              id="howto-pct-heading"
              className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
              style={{ color: '#102a43' }}
            >
              Cómo usar la calculadora de porcentajes
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#627d98' }}>
              Sigue estos pasos para obtener cualquier tipo de cálculo porcentual.
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
