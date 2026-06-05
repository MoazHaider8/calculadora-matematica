import Link from 'next/link';

const cats = [
  {
    name:  'Aritmética',
    desc:  'Porcentajes, fracciones, promedios, regla de tres y operaciones prácticas.',
    href:  '/calculadoras/aritmetica',
  },
  {
    name:  'Álgebra',
    desc:  'Ecuaciones, polinomios, raíces, expresiones algebraicas y procedimientos básicos.',
    href:  '/calculadoras/algebra',
  },
  {
    name:  'Cálculo',
    desc:  'Derivadas, integrales, límites, logaritmos y exponentes explicados paso a paso.',
    href:  '/calculadoras/calculo',
  },
  {
    name:  'Estadística',
    desc:  'Media, varianza, desviación estándar, probabilidad y análisis de datos.',
    href:  '/calculadoras/estadistica',
  },
  {
    name:  'Geometría',
    desc:  'Áreas, volúmenes, triángulos, círculos y teorema de Pitágoras.',
    href:  '/calculadoras/geometria',
  },
  {
    name:  'Matrices y vectores',
    desc:  'Matrices, determinantes, vectores, sistemas de ecuaciones y matriz inversa.',
    href:  '/calculadoras/matrices-y-vectores',
  },
];

export function BlogCategorias() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="blog-cats-heading">
      <div className="site-shell">
        <p className="eyebrow">Temas</p>
        <h2 id="blog-cats-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Categorías del blog
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map(cat => (
            <div
              key={cat.href}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div className="flex-1 px-5 py-5">
                <p className="text-sm font-bold text-ink">{cat.name}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate">{cat.desc}</p>
              </div>
              <div className="border-t px-5 pb-4 pt-3" style={{ borderColor: '#EEF4F7' }}>
                <Link
                  href={cat.href}
                  className="inline-flex items-center gap-1 text-xs font-bold transition-colors hover:opacity-90"
                  style={{ color: '#147c7c' }}
                >
                  Ver calculadoras &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
