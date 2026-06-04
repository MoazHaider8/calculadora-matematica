import Link from 'next/link';

const related = [
  { name: 'Calculadoras de Aritmética',       category: 'Categoría',  description: 'Fracciones, promedio, regla de tres y calculadora científica.',           url: '/calculadoras/aritmetica' },
  { name: 'Calculadora de Fracciones',        category: 'Aritmética', description: 'Suma, resta, multiplica, divide y simplifica fracciones.',                 url: '/calculadoras/aritmetica/calculadora-de-fracciones' },
  { name: 'Calculadora de Raíz Cuadrada',     category: 'Álgebra',    description: 'Calcula raíces cuadradas exactas, decimales y radicales simplificados.',   url: '/calculadoras/algebra/calculadora-de-raiz-cuadrada' },
  { name: 'Calculadora de Exponentes',        category: 'Cálculo',    description: 'Potencias, exponentes negativos, fraccionarios y notación científica.',    url: '/calculadoras/calculo/calculadora-de-exponentes' },
  { name: 'Calculadora Científica',           category: 'Aritmética', description: 'Trigonometría, logaritmos, exponentes y raíces en un solo lugar.',         url: '/calculadoras/aritmetica/calculadora-cientifica' },
  { name: 'Calculadora de Promedio',          category: 'Aritmética', description: 'Calcula la media aritmética de un conjunto de valores.',                   url: '/calculadoras/aritmetica/calculadora-de-promedio' },
  { name: 'Calculadora de Regla de Tres',     category: 'Aritmética', description: 'Resuelve proporciones directas e inversas.',                               url: '/calculadoras/aritmetica/calculadora-de-regla-de-tres' },
];

export function PorcentajesRelated() {
  return (
    <section className="bg-white py-10 lg:py-12" aria-labelledby="related-pct-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Otras herramientas</p>
          <h2
            id="related-pct-heading"
            className="mt-2 text-[1.5rem] font-bold leading-tight lg:text-[1.8rem]"
            style={{ color: '#102a43' }}
          >
            Calculadoras relacionadas
          </h2>
        </div>

        <div
          className="overflow-hidden rounded-2xl bg-white"
          style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
        >
          {related.map((item, i) => (
            <div
              key={item.name}
              className="flex items-center gap-4 px-5 py-4"
              style={{ borderBottom: i < related.length - 1 ? '1px solid #EEF4F7' : 'none' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0" style={{ color: '#D8A31A' }}>
                <line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <polyline points="8,3 12,7 8,11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {item.url ? (
                    <Link href={item.url} className="text-sm font-bold transition-colors hover:text-teal" style={{ color: '#102a43' }}>
                      {item.name}
                    </Link>
                  ) : (
                    <span className="text-sm font-bold" style={{ color: '#829ab1' }}>{item.name}</span>
                  )}
                  <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider" style={{ background: '#DDF3F0', color: '#0F5C5C' }}>
                    {item.category}
                  </span>
                  {!item.url && (
                    <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider" style={{ background: '#FFF4CC', color: '#b58000' }}>
                      Próximamente
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs leading-relaxed" style={{ color: '#829ab1' }}>{item.description}</p>
              </div>

              {item.url && (
                <Link href={item.url} className="shrink-0 text-xs font-bold transition-colors hover:text-deep-teal" style={{ color: '#147c7c' }} aria-label={`Abrir ${item.name}`}>
                  Abrir &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
