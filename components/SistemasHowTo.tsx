const steps = [
  { n: '1', title: 'Elige el tamaño del sistema', body: 'Selecciona 2×2 para dos ecuaciones con dos incógnitas, o 3×3 para tres ecuaciones con tres incógnitas.' },
  { n: '2', title: 'Introduce los coeficientes', body: 'Rellena cada coeficiente de las variables x, y y z, y los términos independientes de cada ecuación.' },
  { n: '3', title: 'Revisa la vista previa', body: 'Comprueba que las ecuaciones en la vista previa coinciden con el sistema que quieres resolver.' },
  { n: '4', title: 'Pulsa resolver sistema', body: 'Haz clic en el botón amarillo para aplicar eliminación gaussiana y obtener la solución.' },
  { n: '5', title: 'Consulta solución y comprobación', body: 'Revisa los valores de las variables, el método utilizado y la comprobación en las ecuaciones originales.' },
];

export function SistemasHowTo() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="howto-sis-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Guía de uso</p>
            <h2
              id="howto-sis-heading"
              className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
              style={{ color: '#102a43' }}
            >
              Cómo usar la calculadora de sistemas de ecuaciones
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#627d98' }}>
              Sigue estos pasos para obtener la solución de cualquier sistema lineal 2×2 o 3×3.
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
