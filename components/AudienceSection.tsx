import Link from 'next/link';

const audienceGroups = [
  {
    title: 'Estudiantes',
    body: 'Para resolver ejercicios, comprobar resultados y entender fórmulas matemáticas durante el estudio diario.',
    link: { label: 'Ver calculadoras de aritmética', href: '/calculadoras/aritmetica' },
  },
  {
    title: 'Profesores',
    body: 'Útil para preparar ejemplos, contrastar operaciones y organizar recursos matemáticos por tema.',
    link: { label: 'Ver todas las categorías', href: '/calculadoras' },
  },
  {
    title: 'Universitarios',
    body: 'Pensado para materias con integrales, derivadas, matrices, probabilidad, varianza o geometría aplicada.',
    link: { label: 'Ver calculadoras de cálculo', href: '/calculadoras/calculo' },
  },
  {
    title: 'Profesionales',
    body: 'Práctico para revisar cálculos, porcentajes, promedios, áreas, volúmenes y otras operaciones frecuentes.',
    link: { label: 'Ver calculadoras de estadística', href: '/calculadoras/estadistica' },
  },
];

export function AudienceSection() {
  return (
    <section className="section-pad bg-page" aria-labelledby="audiencia-heading">
      <div className="site-shell">
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Confianza y contexto</p>
            <h2 id="audiencia-heading" className="mt-3 text-[2.1rem] text-ink lg:text-[3rem]">
              Para quién está hecha esta plataforma
            </h2>
          </div>
          <p className="text-base leading-relaxed text-slate-soft lg:col-span-5">
            El sitio funciona como punto de entrada para calculadoras matemáticas en español y como referencia rápida para distintos perfiles de uso.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audienceGroups.map((group) => (
            <article key={group.title} className="academic-card flex flex-col p-6">
              <p className="text-sm font-bold uppercase text-teal">{group.title}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-soft">{group.body}</p>
              <Link
                href={group.link.href}
                className="mt-4 text-xs font-bold transition-colors hover:opacity-80"
                style={{ color: '#147c7c' }}
              >
                {group.link.label} &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
