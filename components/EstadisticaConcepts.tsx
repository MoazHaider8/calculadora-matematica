const concepts = [
  {
    title:   'Análisis de datos',
    desc:    'Proceso de examinar un conjunto de valores para extraer medidas representativas como media, varianza y desviación estándar.',
    related: 'Calculadora de Estadística',
  },
  {
    title:   'Probabilidad',
    desc:    'Medida numérica de la posibilidad de que ocurra un evento. Se expresa entre 0 y 1 o como porcentaje.',
    related: 'Calculadora de Probabilidad',
  },
  {
    title:   'Tendencia central',
    desc:    'Medidas que resumen el conjunto con un valor representativo. Incluye la media. La mediana y la moda son también medidas de tendencia central.',
    related: 'Calculadora de Media',
  },
  {
    title:   'Dispersión',
    desc:    'Indica cuánto se alejan los valores de la media. Una dispersión alta indica datos muy separados entre sí.',
    related: 'Varianza, Desviación estándar',
  },
  {
    title:   'Media',
    desc:    'Suma de todos los valores del conjunto dividida entre la cantidad de datos. Es la medida de tendencia central más utilizada.',
    related: 'Calculadora de Media',
  },
  {
    title:   'Varianza y desviación estándar',
    desc:    'La varianza mide la dispersión cuadrática respecto a la media. La desviación estándar es su raíz cuadrada y se expresa en las mismas unidades que los datos.',
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
