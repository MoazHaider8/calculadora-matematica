const steps = [
  { n: '01', title: 'Elige el modo de cálculo', desc: 'Selecciona entre calcular potencia, simplificar expresión, exponente fraccionario o notación científica.' },
  { n: '02', title: 'Introduce la base y el exponente', desc: 'Escribe los valores en los campos correspondientes. Puedes usar números, decimales, negativos o fracciones.' },
  { n: '03', title: 'Revisa la vista previa', desc: 'Comprueba que la expresión mostrada en la vista previa corresponde a lo que quieres calcular.' },
  { n: '04', title: 'Pulsa calcular potencia', desc: 'Haz clic en el botón amarillo para obtener el resultado.' },
  { n: '05', title: 'Consulta el resultado', desc: 'El panel derecho muestra el resultado, la propiedad aplicada y una comprobación del cálculo.' },
];

export function ExponenteHowTo() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="howto-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Guía de uso</p>
          <h2 id="howto-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Cómo usar la calculadora de exponentes
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
