import Link from 'next/link';

const cards = [
  { title: 'Qué es una matriz', href: '/blog/que-es-una-matriz', desc: 'Un vector es un caso especial de matriz (m×1 o 1×n).' },
  { title: 'Cómo calcular determinantes', href: '/blog/como-calcular-determinantes', desc: 'El producto vectorial en 3D usa un determinante.' },
  { title: 'Tipos de triángulos', href: '/blog/tipos-de-triangulos', desc: 'Los vectores se usan para describir triángulos en el plano.' },
  { title: 'Área y circunferencia del círculo', href: '/blog/area-y-circunferencia-del-circulo', desc: 'El radio es un vector desde el centro hasta la circunferencia.' },
];

export function VectorArtRelacionadas() {
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
