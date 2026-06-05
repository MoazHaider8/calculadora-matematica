const errors = [
  {
    title: 'Olvidar datos del conjunto',
    desc: 'Si se omite algún valor, la suma y la cantidad serán incorrectas y el resultado no representará el conjunto real.',
  },
  {
    title: 'Dividir entre una cantidad incorrecta',
    desc: 'El divisor debe ser el número exacto de valores incluidos. Contar datos de más o de menos produce una media errónea.',
  },
  {
    title: 'Confundir media con mediana',
    desc: 'La media suma y divide. La mediana es el valor central de la lista ordenada. En conjuntos con extremos, pueden diferir notablemente.',
  },
  {
    title: 'No revisar valores extremos',
    desc: 'Un dato muy alto o muy bajo puede desplazar la media de forma considerable. La mediana es más resistente en esos casos.',
  },
  {
    title: 'Redondear demasiado pronto',
    desc: 'Redondear valores intermedios acumula errores. La calculadora trabaja con precisión completa hasta el resultado final.',
  },
  {
    title: 'Usar pesos con suma cero en media ponderada',
    desc: 'Si la suma de todos los pesos es 0, el divisor es 0 y el cálculo no es válido. Cada fila debe tener un peso distinto de cero.',
  },
];

export function MediaErrors() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="errors-media-heading">
      <div className="site-shell">
        <p className="eyebrow">Precauciones</p>
        <h2 id="errors-media-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Errores comunes al calcular la media
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {errors.map(err => (
            <div
              key={err.title}
              className="rounded-2xl px-5 py-5"
              style={{ background: '#F8FAFC', border: '1px solid #D7E2EA' }}
            >
              <div className="mb-2 flex items-start gap-2">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{ background: '#FFE9E9', color: '#c0392b' }}
                  aria-hidden="true"
                >
                  !
                </span>
                <p className="text-sm font-bold text-ink">{err.title}</p>
              </div>
              <p className="text-xs leading-relaxed text-slate">{err.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
