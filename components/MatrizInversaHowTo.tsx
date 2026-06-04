const steps = [
  { n: '1', title: 'Elige el tamaño de la matriz', body: 'Selecciona 2×2 o 3×3 según las dimensiones de la matriz cuadrada cuya inversa quieres calcular.' },
  { n: '2', title: 'Introduce los valores', body: 'Rellena cada celda de la matriz con los coeficientes correspondientes. Acepta enteros, decimales y negativos.' },
  { n: '3', title: 'Pulsa calcular matriz inversa', body: 'Haz clic en el botón amarillo. La calculadora comprueba el determinante y aplica el método correspondiente.' },
  { n: '4', title: 'Revisa A⁻¹ y el determinante', body: 'Consulta la matriz inversa obtenida y el determinante. Si es singular, verás el mensaje de matriz sin inversa.' },
  { n: '5', title: 'Comprueba A · A⁻¹ = I', body: 'La sección de verificación confirma que al multiplicar la matriz original por su inversa se obtiene la identidad.' },
];

export function MatrizInversaHowTo() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="howto-inv-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Guía de uso</p>
            <h2
              id="howto-inv-heading"
              className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
              style={{ color: '#102a43' }}
            >
              Cómo usar la calculadora de matriz inversa
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#627d98' }}>
              Sigue estos pasos para obtener A⁻¹ y comprobar el resultado con la matriz identidad.
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
