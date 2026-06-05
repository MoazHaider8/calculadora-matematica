import Link from 'next/link';

const cards = [
  { title: 'Población y muestra en estadística', href: '/blog/poblacion-y-muestra-en-estadistica', desc: 'Cuándo usar N y cuándo usar n−1 al calcular.' },
  { title: 'Cómo calcular la varianza', href: '/blog/como-calcular-la-varianza', desc: 'La varianza es la base de la desviación estándar.' },
  { title: 'Cómo calcular la media', href: '/blog/como-calcular-la-media', desc: 'El promedio al que se mide la dispersión.' },
  { title: 'Qué es el porcentaje', href: '/blog/como-calcular-porcentajes', desc: 'Otra forma de interpretar proporciones en estadística.' },
];

export function DesvEstRelacionadas() {
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
