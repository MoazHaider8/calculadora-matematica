import Link from 'next/link';

const cards = [
  { title: 'Cómo resolver sistemas de ecuaciones', href: '/blog/como-resolver-sistemas-de-ecuaciones', desc: 'Dos o más ecuaciones con las mismas incógnitas.' },
  { title: 'Qué son los polinomios', href: '/blog/que-son-los-polinomios', desc: 'Las ecuaciones cuadráticas son polinomios de grado 2.' },
  { title: 'Cómo simplificar expresiones algebraicas', href: '/blog/como-simplificar-expresiones-algebraicas', desc: 'Simplifica antes de resolver la ecuación.' },
  { title: 'Cómo usar una calculadora científica', href: '/blog/como-usar-una-calculadora-cientifica', desc: 'Aplica la fórmula cuadrática con la calculadora.' },
];

export function EcLinCuadRelacionadas() {
  return (
    <section className="bg-white-soft py-10 lg:py-14">
      <div className="site-shell">
        <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Artículos relacionados</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(c => (
            <Link
              key={c.href}
              href={c.href}
              className="block rounded-2xl bg-white p-5 transition hover:shadow-md"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <p className="mb-2 font-bold text-sm text-ink">{c.title}</p>
              <p className="text-xs leading-relaxed text-slate">{c.desc}</p>
              <p className="mt-3 text-xs font-semibold" style={{ color: '#147c7c' }}>Leer &rarr;</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
