import Link from 'next/link';

const calcs = [
  { href: '/calculadoras/calculo/calculadora-de-limites', label: 'Calculadora de límites', desc: 'Evalúa límites de funciones paso a paso.' },
  { href: '/calculadoras/calculo/calculadora-de-derivadas', label: 'Calculadora de derivadas', desc: 'Calcula derivadas de funciones.' },
  { href: '/calculadoras/calculo/calculadora-de-integrales', label: 'Calculadora de integrales', desc: 'Resuelve integrales definidas e indefinidas.' },
  { href: '/calculadoras/calculo', label: 'Ver todas las calculadoras de cálculo', desc: 'Derivadas, integrales, límites y más.' },
];

export function LimitesRelacionadas() {
  return (
    <section className="bg-white py-10 lg:py-14" aria-labelledby="relacionadas-heading">
      <div className="site-shell">
        <h2 id="relacionadas-heading" className="mb-6 text-[1.25rem] font-bold text-ink">
          Calculadoras relacionadas
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {calcs.map(c => (
            <Link
              key={c.href}
              href={c.href}
              className="flex flex-col rounded-2xl p-4 transition-shadow hover:shadow-md"
              style={{ border: '1px solid #D7E2EA', background: '#fff' }}
            >
              <span className="font-bold text-sm text-ink">{c.label}</span>
              <span className="mt-1 text-xs leading-relaxed text-slate">{c.desc}</span>
              <span className="mt-3 text-xs font-semibold" style={{ color: '#147c7c' }}>Usar &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
