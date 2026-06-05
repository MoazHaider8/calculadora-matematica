const concepts = [
  {
    title:   'Tendencia central',
    desc:    'Medidas que resumen un conjunto de datos con un valor representativo. Incluye media, mediana y moda.',
    related: 'Media, Mediana, Moda',
  },
  {
    title:   'Dispersión',
    desc:    'Mide cuánto se alejan los valores de la media. Un valor alto indica datos más separados.',
    related: 'Varianza, Desviación estándar',
  },
  {
    title:   'Media',
    desc:    'Suma de todos los valores dividida entre la cantidad de datos. También llamada promedio aritmético.',
    related: 'Calculadora de Media',
  },
  {
    title:   'Mediana',
    desc:    'El valor que ocupa la posición central cuando los datos están ordenados de menor a mayor.',
    related: 'Calculadora de Mediana',
  },
  {
    title:   'Moda',
    desc:    'El valor o valores que aparecen con mayor frecuencia en el conjunto de datos.',
    related: 'Calculadora de Moda',
  },
  {
    title:   'Muestra y población',
    desc:    'La población incluye todos los datos posibles. La muestra es un subconjunto representativo.',
    related: 'Varianza, Desviación estándar',
  },
];

export function EstadisticaConcepts() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="concepts-est-heading">
      <div className="site-shell">
        <p className="eyebrow">Conceptos</p>
        <h2
          id="concepts-est-heading"
          className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]"
        >
          Conceptos de estadística incluidos
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map(c => (
            <div
              key={c.title}
              className="rounded-2xl bg-white px-5 py-5"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <p className="mb-2 text-sm font-bold text-ink">{c.title}</p>
              <p className="mb-3 text-xs leading-relaxed text-slate">{c.desc}</p>
              <div
                className="inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest"
                style={{ background: '#F0FAF9', color: '#0a4f4d' }}
              >
                {c.related}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
