const cases = [
  {
    icon:  '🛒',
    title: 'Precios y compras',
    desc:  'Si conoces el precio de una cantidad y quieres saber el precio de otra. Ejemplo: 3 productos cuestan 90, 7 productos cuestan X.',
  },
  {
    icon:  '🍽️',
    title: 'Recetas y cantidades',
    desc:  'Para ajustar ingredientes al número de personas. Ejemplo: una receta para 4 personas usa 200 g de harina, para 10 personas usas X.',
  },
  {
    icon:  '👷',
    title: 'Trabajo y tiempo',
    desc:  'Cuando el número de personas afecta al tiempo necesario. Ejemplo: 6 operarios terminan una obra en 10 días, 15 operarios tardan X.',
  },
  {
    icon:  '🚗',
    title: 'Velocidad y tiempo',
    desc:  'Para comparar tiempos de viaje a distintas velocidades. Ejemplo: a 80 km/h se llega en 3 horas, a 60 km/h se llega en X horas.',
  },
  {
    icon:  '📝',
    title: 'Estudio y puntuación',
    desc:  'Para calcular notas proporcionales. Ejemplo: 10 preguntas valen 5 puntos, 18 preguntas valen X puntos.',
  },
];

export function ReglaTresWhenToUse() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="when-rt-heading">
      <div className="site-shell">
        <p className="eyebrow">Aplicaciones</p>
        <h2 id="when-rt-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Cuándo usar regla de tres
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map(c => (
            <div
              key={c.title}
              className="rounded-2xl bg-white px-5 py-5"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <p className="mb-2 text-sm font-bold text-ink">{c.title}</p>
              <p className="text-xs leading-relaxed text-slate">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
