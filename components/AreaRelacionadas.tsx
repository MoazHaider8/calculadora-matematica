import Link from 'next/link';

const relacionadas = [
  { name: 'Calculadora de Área',             href: '/calculadoras/geometria/calculadora-de-area' },
  { name: 'Calculadora de Volumen',          href: '/calculadoras/geometria/calculadora-de-volumen' },
  { name: 'Calculadora de Triángulos',       href: '/calculadoras/geometria/calculadora-de-triangulos' },
  { name: 'Calculadora de Círculos',         href: '/calculadoras/geometria/calculadora-de-circulos' },
  { name: 'Calculadora de Pitágoras',        href: '/calculadoras/geometria/calculadora-de-pitagoras' },
  { name: 'Todas las calculadoras',          href: '/calculadoras' },
];

export function AreaRelacionadas() {
  return (
    <section className="bg-white py-8 lg:py-10" aria-labelledby="area-rel-h">
      <div className="site-shell">
        <p className="eyebrow">Más calculadoras</p>
        <h2 id="area-rel-h" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Calculadoras relacionadas</h2>
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
