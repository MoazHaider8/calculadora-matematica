const trustCards = [
  {
    mark: '∑',
    title: 'Resultados claros',
    body: 'Cada herramienta prioriza la lectura rápida del resultado.',
  },
  {
    mark: 'f(x)',
    title: 'Fórmulas visibles',
    body: 'El procedimiento se apoya en fórmulas reconocibles.',
  },
  {
    mark: '1→2',
    title: 'Pasos explicados',
    body: 'Pensado para verificar y aprender, no solo para copiar.',
  },
  {
    mark: 'ES',
    title: 'Contenido en español',
    body: 'Textos, categorías y recursos escritos para hispanohablantes.',
  },
];

export function TrustStrip() {
  return (
    <section className="bg-aqua-soft py-10" aria-label="Características de la plataforma">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((item) => (
            <article key={item.title} className="academic-card p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-teal-soft font-heading text-sm font-bold text-deep-teal">
                {item.mark}
              </div>
              <h2 className="text-lg text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
