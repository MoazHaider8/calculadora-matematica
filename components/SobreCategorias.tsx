import Link from 'next/link';

const cats = [
  {
    name: 'Calculadoras de Cálculo',
    desc: 'Integrales, derivadas, límites, logaritmos y exponentes.',
    url:  '/calculadoras/calculo',
  },
  {
    name: 'Calculadoras de Álgebra',
    desc: 'Ecuaciones, polinomios, raíces y expresiones algebraicas.',
    url:  '/calculadoras/algebra',
  },
  {
    name: 'Calculadoras de Aritmética',
    desc: 'Fracciones, porcentajes, promedios, regla de tres y operaciones básicas.',
    url:  '/calculadoras/aritmetica',
  },
  {
    name: 'Calculadoras de Estadística',
    desc: 'Media, varianza, desviación estándar y probabilidad.',
    url:  '/calculadoras/estadistica',
  },
  {
    name: 'Calculadoras de Geometría',
    desc: 'Áreas, volúmenes, triángulos, círculos y teorema de Pitágoras.',
    url:  '/calculadoras/geometria',
  },
  {
    name: 'Calculadoras de Matrices y Vectores',
    desc: 'Matrices, determinantes, vectores y sistemas de ecuaciones lineales.',
    url:  '/calculadoras/matrices-y-vectores',
  },
];

export function SobreCategorias() {
  return (
    <section className="bg-white-soft py-8 lg:py-11" aria-labelledby="categorias-heading">
      <div className="site-shell">
        <p className="eyebrow">Categorías</p>
        <h2 id="categorias-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Qué encontrarás en el sitio
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map(cat => (
            <div
              key={cat.url}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div className="flex-1 px-5 py-5">
                <p className="text-sm font-bold text-ink">{cat.name}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate">{cat.desc}</p>
              </div>
              <div className="border-t px-5 pb-4 pt-3" style={{ borderColor: '#EEF4F7' }}>
                <Link
                  href={cat.url}
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition-colors hover:opacity-90"
                  style={{ background: '#D8A31A', color: '#fff' }}
                >
                  Explorar &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
