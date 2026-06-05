import Link from 'next/link';

const cards = [
  { title: 'Reglas de logaritmos', href: '/blog/reglas-de-logaritmos', desc: 'Entiende qué calcula la tecla log y ln.' },
  { title: 'Reglas de exponentes', href: '/blog/reglas-de-exponentes', desc: 'Base para usar la tecla de potencia correctamente.' },
  { title: 'Cómo sumar y restar fracciones', href: '/blog/como-sumar-restar-fracciones', desc: 'Operar con fracciones en la calculadora científica.' },
  { title: 'Ecuaciones lineales y cuadráticas', href: '/blog/ecuaciones-lineales-y-cuadraticas', desc: 'Tipos de ecuaciones que resolverás con la calculadora.' },
];

export function CalcCientRelacionadas() {
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
