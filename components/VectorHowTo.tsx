const steps = [
  { n: '1', title: 'Elige la operación', body: 'Selecciona la operación vectorial: suma, resta, producto punto, producto cruz, norma, vector unitario o ángulo.' },
  { n: '2', title: 'Selecciona la dimensión', body: 'Indica si trabajarás con vectores 2D o 3D. El producto cruz requiere 3D.' },
  { n: '3', title: 'Introduce las componentes', body: 'Rellena las componentes de Vector A y Vector B cuando sea necesario.' },
  { n: '4', title: 'Pulsa el botón de cálculo', body: 'Haz clic en el botón correspondiente a la operación elegida.' },
  { n: '5', title: 'Revisa resultado y explicación', body: 'Consulta el resultado, el cálculo breve y la explicación del procedimiento.' },
];

export function VectorHowTo() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="howto-vec-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Guía de uso</p>
            <h2
              id="howto-vec-heading"
              className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
              style={{ color: '#102a43' }}
            >
              Cómo usar la calculadora de vectores
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#627d98' }}>
              Sigue estos cinco pasos para obtener el resultado de cualquier operación vectorial.
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
