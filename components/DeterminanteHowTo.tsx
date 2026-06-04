const steps = [
  { n: '1', title: 'Elige el tamaño', body: 'Selecciona si la matriz es 2×2, 3×3 o 4×4.' },
  { n: '2', title: 'Introduce los valores', body: 'Rellena cada celda con el valor numérico correspondiente.' },
  { n: '3', title: 'Pulsa calcular', body: 'Haz clic en Calcular determinante para obtener el resultado.' },
  { n: '4', title: 'Revisa det(A)', body: 'Consulta el valor del determinante en el panel de resultado.' },
  { n: '5', title: 'Lee el método e interpretación', body: 'Comprueba el método usado y si la matriz es singular o no.' },
];

export function DeterminanteHowTo() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="howto-det-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Guía de uso</p>
            <h2
              id="howto-det-heading"
              className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
              style={{ color: '#102a43' }}
            >
              Cómo usar la calculadora de determinantes
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#627d98' }}>
              Sigue estos cinco pasos para obtener el determinante de tu matriz cuadrada.
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
