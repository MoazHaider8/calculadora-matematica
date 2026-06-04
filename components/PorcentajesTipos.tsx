const tipos = [
  {
    id: 'percent_of',
    formula: '25% de 200 = 50',
    label: 'Porcentaje de un número',
    body: 'Calcula qué valor corresponde a un determinado porcentaje de un número. Se multiplica el número por el porcentaje y se divide entre 100.',
  },
  {
    id: 'what_percent',
    formula: '50 de 200 = 25%',
    label: 'Qué porcentaje representa',
    body: 'Determina qué porcentaje es una parte respecto a un total. Se divide la parte entre el total y se multiplica por 100.',
  },
  {
    id: 'increase',
    formula: '200 + 15% = 230',
    label: 'Aumento porcentual',
    body: 'Calcula el valor final después de aplicar un aumento. Se suma al valor base el resultado de aplicar el porcentaje sobre ese valor.',
  },
  {
    id: 'discount',
    formula: '200 − 20% = 160',
    label: 'Descuento porcentual',
    body: 'Calcula el precio final después de aplicar un descuento. Se resta al precio original el resultado de aplicar el porcentaje de descuento.',
  },
  {
    id: 'change',
    formula: '80 → 100 = 25%',
    label: 'Cambio porcentual',
    body: 'Calcula la variación porcentual entre un valor inicial y un valor final. El resultado puede ser positivo (aumento) o negativo (disminución).',
  },
  {
    id: 'find_total',
    formula: '50 es el 25% de 200',
    label: 'Encontrar el total',
    body: 'Calcula el valor total cuando se conoce una parte y el porcentaje que esa parte representa. Se divide la parte entre el porcentaje y se multiplica por 100.',
  },
];

export function PorcentajesTipos() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="tipos-pct-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Cálculos disponibles</p>
          <h2
            id="tipos-pct-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Tipos de cálculos porcentuales
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Cada modo aplica la fórmula correspondiente y muestra el resultado con interpretación.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tipos.map((t) => (
            <div
              key={t.id}
              className="overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              <div className="px-5 py-3" style={{ background: '#0a3535' }} aria-hidden="true">
                <p className="font-mono text-sm font-semibold" style={{ color: 'rgba(216,163,26,0.85)' }}>
                  {t.formula}
                </p>
              </div>
              <div className="px-5 py-4">
                <p className="mb-1 text-sm font-bold" style={{ color: '#102a43' }}>{t.label}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#627d98' }}>{t.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
