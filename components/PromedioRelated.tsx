import Link from 'next/link';

const related = [
  { name: 'Calculadoras de Aritmética',  desc: 'Explora todas las herramientas de la categoría aritmética.',            url: '/calculadoras/aritmetica',                                       live: true },
  { name: 'Calculadora de Porcentajes',  desc: 'Calcula porcentajes, descuentos y variaciones porcentuales.',            url: '/calculadoras/aritmetica/calculadora-de-porcentajes',            live: true },
  { name: 'Calculadora de Fracciones',   desc: 'Suma, resta, multiplica y divide fracciones con pasos.',                 url: '/calculadoras/aritmetica/calculadora-de-fracciones',             live: true },
  { name: 'Calculadora Científica',      desc: 'Trigonometría, logaritmos, potencias y raíces en un solo lugar.',        url: '/calculadoras/aritmetica/calculadora-cientifica',                live: true },
  { name: 'Calculadora de Regla de Tres', desc: 'Resuelve proporciones directas e inversas con procedimiento.',          url: '/calculadoras/aritmetica/calculadora-de-regla-de-tres',          live: true },
  { name: 'Calculadora de Ecuaciones',   desc: 'Resuelve ecuaciones lineales y cuadráticas con pasos.',                  url: '/calculadoras/algebra/calculadora-de-ecuaciones',                live: true },
];

export function PromedioRelated() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="related-prom-heading">
      <div className="site-shell">
        <p className="eyebrow">Recursos</p>
        <h2 id="related-prom-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Calculadoras relacionadas
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map(item => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div className="flex-1 px-5 py-5">
                <p className="text-sm font-bold text-ink">{item.name}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate">{item.desc}</p>
              </div>
              <div className="border-t px-5 pb-4 pt-3" style={{ borderColor: '#EEF4F7' }}>
                <Link
                  href={item.url}
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition-colors hover:opacity-90"
                  style={{ background: '#D8A31A', color: '#fff' }}
                >
                  Ver calculadora &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
