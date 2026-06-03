const steps = [
  { n: '01', title: 'Elige la operación algebraica', desc: 'Selecciona entre simplificar, expandir, factorizar o evaluar una expresión.' },
  { n: '02', title: 'Escribe la expresión', desc: 'Introduce la expresión algebraica en el campo de texto. Puedes usar x, y, a, b o t como variables.' },
  { n: '03', title: 'Añade el valor si quieres evaluar', desc: 'En modo evaluar, elige la variable e introduce el valor numérico donde quieres calcular la expresión.' },
  { n: '04', title: 'Pulsa el botón de cálculo', desc: 'Haz clic en el botón amarillo para ejecutar la operación seleccionada.' },
  { n: '05', title: 'Revisa el resultado y la operación aplicada', desc: 'El panel derecho muestra el resultado, la operación aplicada y una explicación breve del procedimiento.' },
];

export function AlgebraicaHowTo() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="howto-alg-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Guía de uso</p>
          <h2 id="howto-alg-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Cómo usar la calculadora algebraica
          </h2>
        </div>
        <ol className="space-y-4">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: '#0A4F4D' }}
                aria-hidden="true"
              >
                {s.n}
              </span>
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
