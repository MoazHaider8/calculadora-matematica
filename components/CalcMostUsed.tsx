import Link from 'next/link';

const mostUsed = [
  {
    name: 'Calculadora científica',
    description: 'Trigonometría, logaritmos, exponentes y raíces.',
    symbol: 'f(x)',
    url: '/calculadoras/aritmetica/calculadora-cientifica/',
    accent: '#0F5C5C',
  },
  {
    name: 'Calculadora de porcentajes',
    description: 'Aumentos, descuentos y variaciones porcentuales.',
    symbol: '%',
    url: '/calculadoras/aritmetica/calculadora-de-porcentajes/',
    accent: '#147c7c',
  },
  {
    name: 'Calculadora de integrales',
    description: 'Integrales definidas e indefinidas con pasos.',
    symbol: '∫',
    url: '/calculadoras/calculo/calculadora-de-integrales/',
    accent: '#0F5C5C',
  },
  {
    name: 'Calculadora de derivadas',
    description: 'Derivadas de funciones con reglas aplicadas.',
    symbol: "f'",
    url: '/calculadoras/calculo/calculadora-de-derivadas/',
    accent: '#147c7c',
  },
  {
    name: 'Calculadora de matrices',
    description: 'Operaciones, determinante y matriz inversa.',
    symbol: '[ ]',
    url: '/calculadoras/matrices-y-vectores/calculadora-de-matrices/',
    accent: '#0a4040',
  },
  {
    name: 'Calculadora de fracciones',
    description: 'Suma, resta, multiplica y divide fracciones.',
    symbol: 'a/b',
    url: '/calculadoras/aritmetica/calculadora-de-fracciones/',
    accent: '#0F5C5C',
  },
];

function IconArrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <line x1="2" y1="6" x2="10.5" y2="6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <polyline points="7,2.5 10.5,6 7,9.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CalcMostUsed() {
  return (
    <section className="py-10 lg:py-14 bg-white-soft" aria-labelledby="most-used-heading">
      <div className="site-shell">

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Acceso rápido</p>
            <h2
              id="most-used-heading"
              className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.3rem]"
              style={{ color: '#102a43' }}
            >
              Calculadoras más consultadas
            </h2>
          </div>
          <Link
            href="#todas"
            className="shrink-0 text-sm font-bold transition-colors hover:opacity-75"
            style={{ color: '#0F5C5C' }}
          >
            Ver directorio completo &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mostUsed.map((calc) => (
            <article
              key={calc.url}
              className="directory-card flex items-start gap-4 rounded-2xl bg-white p-5"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold"
                style={{ background: '#DDF3F0', color: calc.accent }}
              >
                {calc.symbol}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold leading-snug" style={{ color: '#102a43' }}>
                  {calc.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: '#627d98' }}>
                  {calc.description}
                </p>
                <Link
                  href={calc.url}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold transition-colors hover:opacity-75"
                  style={{ color: calc.accent }}
                  aria-label={`Abrir ${calc.name}`}
                >
                  Abrir calculadora <IconArrow />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
