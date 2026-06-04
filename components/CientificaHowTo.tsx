const steps = [
  { n: '1', text: 'Introduce números, operadores o funciones científicas pulsando los botones del teclado.' },
  { n: '2', text: 'Elige grados o radianes si tu cálculo incluye funciones trigonométricas.' },
  { n: '3', text: 'Usa paréntesis para controlar el orden de cálculo cuando sea necesario.' },
  { n: '4', text: 'Pulsa el botón igual para obtener el resultado.' },
  { n: '5', text: 'Revisa el resultado, el modo angular y el historial de cálculos recientes.' },
];

export function CientificaHowTo() {
  return (
    <section className="py-12 lg:py-16 bg-white" aria-labelledby="howto-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Instrucciones</p>
            <h2 id="howto-heading" className="mt-2 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              Cómo usar la calculadora científica
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Sigue estos pasos para resolver cualquier operación con funciones científicas.
            </p>
          </div>
          <ol className="flex flex-col gap-4">
            {steps.map(s => (
              <li key={s.n} className="flex gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: '#0a4f4d' }}
                  aria-hidden="true"
                >
                  {s.n}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-slate">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
