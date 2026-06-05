import Link from 'next/link';

const relacionadas = [
  { name: 'Calculadora de Probabilidad',        href: '/calculadoras/estadistica/calculadora-de-probabilidad' },
  { name: 'Calculadora de Estadística',         href: '/calculadoras/estadistica/calculadora-de-estadistica' },
  { name: 'Calculadora de Fracciones',          href: '/calculadoras/aritmetica/calculadora-de-fracciones' },
  { name: 'Calculadora de Porcentajes',         href: '/calculadoras/aritmetica/calculadora-de-porcentajes' },
  { name: 'Calculadoras de Estadística',        href: '/calculadoras/estadistica' },
  { name: 'Todas las calculadoras',             href: '/calculadoras' },
];

export function BlogProbRelacionadas() {
  return (
    <section className="bg-white py-8 lg:py-10" aria-labelledby="bprob-rel-h">
      <div className="site-shell">
        <p className="eyebrow">Más calculadoras</p>
        <h2 id="bprob-rel-h" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Calculadoras relacionadas</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {relacionadas.map(c => (
            <Link key={c.href} href={c.href} className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 transition-colors hover:border-teal" style={{ border: '1px solid #D7E2EA' }}>
              <span className="text-sm font-bold text-ink">{c.name}</span>
              <span style={{ color: '#147c7c' }} aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
