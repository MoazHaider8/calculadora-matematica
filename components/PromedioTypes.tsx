const types = [
  {
    title:   'Promedio simple',
    formula: '(v1 + v2 + ... + vn) ÷ n',
    desc:    'Todos los valores contribuyen por igual. Se suman y se divide entre la cantidad de datos. Es el tipo más habitual.',
  },
  {
    title:   'Promedio de notas',
    formula: '(n1 + n2 + n3) ÷ 3',
    desc:    'Caso frecuente del promedio simple. Útil para calificaciones escolares, evaluaciones y boletines académicos.',
  },
  {
    title:   'Promedio ponderado',
    formula: '(v1×p1 + v2×p2) ÷ (p1+p2)',
    desc:    'Cada valor tiene un peso diferente. Se usa cuando un examen final, un trabajo o un criterio tiene mayor importancia que otros.',
  },
  {
    title:   'Media aritmética',
    formula: 'x̄ = Σxi ÷ n',
    desc:    'Nombre matemático formal del promedio simple. La barra sobre la x representa el valor promedio del conjunto de datos.',
  },
];

export function PromedioTypes() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="types-prom-heading">
      <div className="site-shell">
        <p className="eyebrow">Referencia</p>
        <h2 id="types-prom-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Tipos de promedio
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {types.map(t => (
            <div key={t.title} className="overflow-hidden rounded-2xl" style={{ border: '1px solid #D7E2EA' }}>
              <div className="px-6 py-4" style={{ background: '#0a3535' }}>
                <p className="text-sm font-bold text-white">{t.title}</p>
                <p className="mt-1 font-mono text-xs" style={{ color: 'rgba(216,163,26,0.85)' }}>{t.formula}</p>
              </div>
              <div className="px-6 py-5">
                <p className="text-sm leading-relaxed text-slate">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
