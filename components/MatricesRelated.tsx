import Link from 'next/link';

const related = [
  { name: 'Calculadoras de Matrices y Vectores', category: 'Categoría',  description: 'Determinantes, vectores, sistemas e inversas.',           url: '/calculadoras/matrices-y-vectores' },
  { name: 'Calculadoras de Álgebra',             category: 'Categoría',  description: 'Ecuaciones, expresiones algebraicas y polinomios.',         url: '/calculadoras/algebra' },
  { name: 'Calculadora de Ecuaciones',           category: 'Álgebra',    description: 'Resuelve ecuaciones lineales y cuadráticas.',               url: '/calculadoras/algebra/calculadora-de-ecuaciones' },
  { name: 'Calculadora Algebraica',              category: 'Álgebra',    description: 'Simplifica y factoriza expresiones algebraicas.',           url: '/calculadoras/algebra/calculadora-algebraica' },
  { name: 'Calculadora de Exponentes',           category: 'Cálculo',    description: 'Calcula potencias y exponentes fraccionarios.',             url: '/calculadoras/calculo/calculadora-de-exponentes' },
  { name: 'Calculadora de Determinantes',        category: 'Mat. y Vec.', description: 'Calcula el determinante de matrices cuadradas.',           url: null },
  { name: 'Calculadora de Vectores',             category: 'Mat. y Vec.', description: 'Opera con componentes, norma y productos vectoriales.',    url: null },
  { name: 'Calculadora de Sistemas de Ecuaciones', category: 'Mat. y Vec.', description: 'Resuelve sistemas de ecuaciones lineales.',             url: null },
  { name: 'Calculadora de Matriz Inversa',       category: 'Mat. y Vec.', description: 'Obtiene la inversa de matrices cuadradas invertibles.',   url: null },
];

export function MatricesRelated() {
  return (
    <section className="bg-white py-10 lg:py-12" aria-labelledby="related-matrices-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Otras herramientas</p>
          <h2
            id="related-matrices-heading"
            className="mt-2 text-[1.5rem] font-bold leading-tight lg:text-[1.8rem]"
            style={{ color: '#102a43' }}
          >
            Calculadoras relacionadas
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white" style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}>
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
