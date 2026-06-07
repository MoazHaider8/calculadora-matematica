import Link from 'next/link';

const cards = [
  {
    name: 'Calculadora científica',
    category: 'Aritmética',
    url: '/calculadoras/aritmetica/calculadora-cientifica/',
    symbol: 'f(x)',
    visualLine1: 'sin x · cos x · tan x',
    visualLine2: 'log x · ln x · √x · π',
    features: [
      'Funciones trigonométricas',
      'Logaritmos y exponentes',
      'Operaciones con raíces',
      'Compatible con fracciones',
    ],
  },
  {
    name: 'Calculadora de porcentajes',
    category: 'Aritmética',
    url: '/calculadoras/aritmetica/calculadora-de-porcentajes/',
    symbol: '%',
    visualLine1: '75% de 200 = 150',
    visualLine2: 'Descuento 25% sobre 80',
    features: [
      'Aumentos y descuentos',
      'Variaciones porcentuales',
      'Cálculo inverso',
      'Base y tanto por ciento',
    ],
  },
  {
    name: 'Calculadora de integrales',
    category: 'Cálculo',
    url: '/calculadoras/calculo/calculadora-de-integrales/',
    symbol: '∫',
    visualLine1: '∫ f(x) dx = F(x) + C',
    visualLine2: '∫₀¹ x² dx = 1/3',
    features: [
      'Integrales definidas',
      'Integrales indefinidas',
      'Suma de Riemann',
      'Procedimiento paso a paso',
    ],
  },
  {
    name: 'Calculadora de derivadas',
    category: 'Cálculo',
    url: '/calculadoras/calculo/calculadora-de-derivadas/',
    symbol: "f'",
    visualLine1: "f'(x) = d/dx f(x)",
    visualLine2: 'd/dx[xⁿ] = n · xⁿ⁻¹',
    features: [
      'Regla del producto',
      'Regla de la cadena',
      'Derivadas parciales',
      'Funciones compuestas',
    ],
  },
  {
    name: 'Calculadora de matrices',
    category: 'Matrices y vectores',
    url: '/calculadoras/matrices-y-vectores/calculadora-de-matrices/',
    symbol: 'M',
    visualLine1: '[a  b]  ·  [e  f]',
    visualLine2: '[c  d]     [g  h]',
    features: [
      'Suma y multiplicación',
      'Cálculo del determinante',
      'Matriz inversa',
      'Sistemas de ecuaciones',
    ],
  },
  {
    name: 'Calculadora de fracciones',
    category: 'Aritmética',
    url: '/calculadoras/aritmetica/calculadora-de-fracciones/',
    symbol: 'a/b',
    visualLine1: 'a/b + c/d = (ad + bc)/bd',
    visualLine2: '3/4 + 1/6 = 11/12',
    features: [
      'Suma y resta',
      'Multiplicación y división',
      'Simplificación automática',
      'Fracciones mixtas',
    ],
  },
];

export function FeaturedCalculators() {
  return (
    <section aria-labelledby="featured-heading" style={{ backgroundColor: '#0A4F4D' }}>

      {/* Section header */}
      <div className="site-shell pt-16 pb-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <p
              className="eyebrow"
              style={{ color: '#D8A31A' }}
            >
              Calculadoras populares
            </p>
            <h2
              id="featured-heading"
              className="mt-3 text-[1.9rem] font-bold leading-tight text-white lg:text-[2.5rem]"
            >
              Las calculadoras más consultadas del sitio
            </h2>
          </div>
          <div className="shrink-0 pt-1">
            <Link
              href="/calculadoras"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-150 hover:opacity-90"
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#ffffff',
              }}
            >
              Ver más calculadoras
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <line x1="2" y1="6" x2="10.5" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <polyline points="7,2.5 10.5,6 7,9.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className="site-shell pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.url}
              className="featured-calc-card flex flex-col overflow-hidden rounded-2xl bg-white"
            >
              {/* Dark visual panel — blends with section background */}
              <div
                className="relative flex flex-col items-center justify-center px-6 py-8"
                style={{ backgroundColor: '#073B3A', minHeight: '140px' }}
              >
                {/* Math display */}
                <div className="w-full text-center font-mono text-sm leading-7">
                  <div style={{ color: 'rgba(221,243,240,0.75)' }}>{card.visualLine1}</div>
                  <div style={{ color: 'rgba(216,163,26,0.85)' }}>{card.visualLine2}</div>
                </div>

                {/* Overlapping circular badge */}
                <div
                  className="absolute bottom-0 left-6 flex h-12 w-12 translate-y-1/2 items-center justify-center rounded-full font-mono text-sm font-bold text-white"
                  style={{
                    backgroundColor: '#147C7C',
                    border: '3px solid #ffffff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                  }}
                  aria-hidden="true"
                >
                  {card.symbol}
                </div>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col px-6 pb-6 pt-9">
                <p
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: '#147C7C' }}
                >
                  {card.category}
                </p>
                <h3
                  className="mt-2 text-[1.15rem] font-bold leading-snug"
                  style={{ color: '#102a43' }}
                >
                  {card.name}
                </h3>

                <ul className="mt-4 flex-1 space-y-2">
                  {card.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm leading-relaxed"
                      style={{ color: '#334e68' }}
                    >
                      <span
                        className="mt-0.5 shrink-0 font-bold"
                        style={{ color: '#147C7C' }}
                        aria-hidden="true"
                      >
                        &raquo;
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={card.url}
                  className="mt-6 block rounded-full py-3 text-center text-sm font-bold text-white transition-opacity duration-150 hover:opacity-85"
                  style={{ backgroundColor: '#073B3A' }}
                  aria-label={`Abrir ${card.name}`}
                >
                  Abrir calculadora
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
