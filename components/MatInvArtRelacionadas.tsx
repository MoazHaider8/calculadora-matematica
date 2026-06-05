import Link from 'next/link';

const cards = [
  { title: 'Qué es una matriz', href: '/blog/que-es-una-matriz', desc: 'La inversa solo existe para matrices cuadradas.' },
  { title: 'Cómo calcular determinantes', href: '/blog/como-calcular-determinantes', desc: 'El determinante debe ser distinto de cero para que exista la inversa.' },
  { title: 'Cómo resolver sistemas de ecuaciones', href: '/blog/como-resolver-sistemas-de-ecuaciones', desc: 'La inversa es una forma de resolver sistemas Ax = b.' },
  { title: 'Qué es un vector', href: '/blog/que-es-un-vector', desc: 'La inversa transforma vectores a su espacio original.' },
];

export function MatInvArtRelacionadas() {
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
