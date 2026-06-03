const steps = [
  { n: '01', title: 'Elige la operación', desc: 'Selecciona entre simplificar, operar, factorizar, evaluar o analizar un polinomio.' },
  { n: '02', title: 'Escribe el polinomio', desc: 'Introduce el polinomio en el campo principal. Usa ^ para los exponentes: x^2, x^3.' },
  { n: '03', title: 'Añade un segundo polinomio o valor', desc: 'En el modo Operar introduce el segundo polinomio. En Evaluar introduce el valor numérico de la variable.' },
  { n: '04', title: 'Pulsa el botón de cálculo', desc: 'Haz clic en el botón amarillo para ejecutar la operación.' },
  { n: '05', title: 'Revisa el resultado y la explicación', desc: 'El panel derecho muestra el resultado, la operación aplicada y, en el modo Información, el grado y los coeficientes.' },
];

export function PolinomioHowTo() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="howto-pol-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Guía de uso</p>
          <h2 id="howto-pol-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Cómo usar la calculadora de polinomios
          </h2>
        </div>
        <ol className="space-y-4">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: '#0A4F4D' }} aria-hidden="true">{s.n}</span>
              <div>
                <p className="text-sm font-bold text-ink">{s.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-slate">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
