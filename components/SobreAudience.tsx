const audience = [
  {
    sym: '📐',
    title: 'Estudiantes',
    desc: 'Necesitan cálculos rápidos, fórmulas claras y pasos explicados para entender el procedimiento, no solo el resultado.',
  },
  {
    sym: '🎓',
    title: 'Docentes',
    desc: 'Necesitan herramientas claras para mostrar procedimientos matemáticos en clase o para preparar material de apoyo.',
  },
  {
    sym: '👨‍👩‍👧',
    title: 'Padres y tutores',
    desc: 'Necesitan ayuda sencilla para revisar deberes o repasar conceptos matemáticos junto con sus hijos.',
  },
  {
    sym: '🧮',
    title: 'Usuarios generales',
    desc: 'Necesitan calcular algo rápido para uso cotidiano o académico sin tener que buscar fórmulas en otro sitio.',
  },
];

export function SobreAudience() {
  return (
    <section className="bg-white py-8 lg:py-11" aria-labelledby="audience-heading">
      <div className="site-shell">
        <p className="eyebrow">Usuarios</p>
        <h2 id="audience-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Para quién creamos estas herramientas
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audience.map(item => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-5"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-lg"
                style={{ background: '#DDF3F0' }}
                aria-hidden="true"
              >
                {item.sym}
              </div>
              <p className="text-sm font-bold text-ink">{item.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
