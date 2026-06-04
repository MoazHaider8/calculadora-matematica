const items = [
  {
    title: 'Olvidar un valor de la lista',
    desc:  'Si falta un número, el promedio será incorrecto porque el divisor no refleja el total real de datos.',
  },
  {
    title: 'Dividir entre una cantidad incorrecta',
    desc:  'Si introduces valores repetidos o cuenta mal los datos, la división final dará un resultado erróneo.',
  },
  {
    title: 'Mezclar porcentajes y valores sin revisar pesos',
    desc:  'En promedio ponderado, los pesos son proporciones relativas. Si los defines como porcentajes, la suma debe ser 100 o ajustar la interpretación.',
  },
  {
    title: 'Redondear demasiado pronto',
    desc:  'Si redondeas la suma antes de dividir, el resultado final puede acumular error. Trabaja con precisión y redondea al final.',
  },
  {
    title: 'Confundir promedio simple con promedio ponderado',
    desc:  'Si algunas notas tienen distinto valor, el promedio simple no es adecuado. Usa el modo ponderado y asigna el peso correcto a cada valor.',
  },
  {
    title: 'Introducir texto no numérico',
    desc:  'La calculadora solo admite números. Letras, símbolos o celdas vacías en la lista generarán un error.',
  },
];

export function PromedioErrors() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="errores-prom-heading">
      <div className="site-shell">
        <p className="eyebrow">Consejos</p>
        <h2 id="errores-prom-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Errores comunes al calcular promedio
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(item => (
            <div
              key={item.title}
              className="rounded-2xl bg-white px-5 py-5"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div className="mb-2 flex items-start gap-2.5">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: '#B45309' }}
                  aria-hidden="true"
                >
                  !
                </span>
                <p className="text-sm font-bold text-ink">{item.title}</p>
              </div>
              <p className="text-xs leading-relaxed text-slate">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
