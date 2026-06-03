const cards = [
  {
    formula: '√25 = 5',
    tag: 'Raíz exacta',
    title: 'Raíz exacta',
    items: [
      'Aparece cuando el número es un cuadrado perfecto.',
      'El resultado es un número entero.',
      'Se comprueba con 5² = 25.',
      'Ejemplo: √49 = 7.',
    ],
  },
  {
    formula: '√2 ≈ 1.4142135624',
    tag: 'Raíz decimal',
    title: 'Raíz decimal',
    items: [
      'Aparece cuando no hay resultado entero.',
      'Se muestra con diez cifras significativas.',
      'Es una aproximación, no el valor exacto.',
      'Ejemplo: √10 ≈ 3.1622776602.',
    ],
  },
  {
    formula: '√72 = 6√2',
    tag: 'Radical simplificado',
    title: 'Radical simplificado',
    items: [
      'Conserva una forma exacta sin redondear.',
      'Se extrae el mayor cuadrado perfecto posible.',
      '72 = 36 · 2, por eso √72 = 6√2.',
      'Útil para cálculos exactos en álgebra.',
    ],
  },
];

export function RaizCuadradaExactDecimal() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="exact-decimal-raizc-heading">
      <div className="site-shell">
        <p className="eyebrow">Tipos de resultado</p>
        <h2
          id="exact-decimal-raizc-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Raíz cuadrada exacta y decimal
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              <div className="px-5 py-4" style={{ background: '#0a3535' }}>
                <p className="font-mono text-sm font-bold" style={{ color: 'rgba(216,163,26,0.88)' }}>{c.formula}</p>
                <p className="mt-1 text-[10px] font-semibold" style={{ color: 'rgba(221,243,240,0.6)' }}>{c.tag}</p>
              </div>
              <div className="px-5 py-5">
                <h3 className="mb-3 text-sm font-bold" style={{ color: '#102a43' }}>{c.title}</h3>
                <ul className="space-y-2">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#334e68' }}>
                      <span className="mt-0.5 shrink-0 font-bold" style={{ color: '#0F5C5C' }} aria-hidden="true">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
