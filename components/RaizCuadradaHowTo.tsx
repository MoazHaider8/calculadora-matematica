const steps = [
  { n: '1', text: 'Introduce el número o radicando.' },
  { n: '2', text: 'Revisa la vista previa de la raíz cuadrada.' },
  { n: '3', text: 'Pulsa calcular raíz cuadrada.' },
  { n: '4', text: 'Consulta el resultado exacto o decimal.' },
  { n: '5', text: 'Verifica el resultado elevándolo al cuadrado.' },
];

export function RaizCuadradaHowTo() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="howto-raizc-heading">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="eyebrow">Guía de uso</p>
            <h2
              id="howto-raizc-heading"
              className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
              style={{ color: '#102a43' }}
            >
              Cómo usar la calculadora de raíz cuadrada
            </h2>
          </div>

          <ol className="lg:col-span-8 flex flex-col gap-4">
            {steps.map((step) => (
              <li
                key={step.n}
                className="flex items-start gap-4 rounded-xl bg-white-soft px-5 py-4"
                style={{ border: '1px solid #EEF4F7' }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: '#0F5C5C' }}
                  aria-hidden="true"
                >
                  {step.n}
                </span>
                <p className="pt-0.5 text-sm leading-relaxed" style={{ color: '#334e68' }}>
                  {step.text}
                </p>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
}
