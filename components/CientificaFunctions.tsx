const fnGroups = [
  {
    title: 'Trigonometría',
    formula: 'sin, cos, tan',
    desc: 'Calcula razones trigonométricas en grados o radianes. El modo angular seleccionado afecta directamente al resultado.',
  },
  {
    title: 'Logaritmos',
    formula: 'log, ln',
    desc: 'log usa base 10 — log(100) = 2. ln usa base e — ln(e) = 1. Solo admiten argumentos positivos.',
  },
  {
    title: 'Potencias',
    formula: 'x², xʸ',
    desc: 'x² eleva al cuadrado con un clic. xʸ inserta el operador ^ para cualquier exponente, como 2^10.',
  },
  {
    title: 'Raíces',
    formula: '√x',
    desc: 'Calcula la raíz cuadrada de un número. Para raíces de otro índice usa la calculadora de raíces.',
  },
  {
    title: 'Constantes',
    formula: 'π, e',
    desc: 'π inserta 3.14159... y e inserta 2.71828... Puedes usarlas dentro de expresiones más largas.',
  },
  {
    title: 'Paréntesis',
    formula: '( )',
    desc: 'Los paréntesis cambian el orden de cálculo. (2 + 3) × 4 da 20, no 14.',
  },
  {
    title: 'Grados y radianes',
    formula: '°  /  rad',
    desc: 'Elige el modo antes de calcular funciones trigonométricas. El cambio afecta a sin, cos y tan.',
  },
];

export function CientificaFunctions() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="funciones-heading">
      <div className="site-shell">
        <p className="eyebrow">Referencia</p>
        <h2 id="funciones-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Funciones científicas disponibles
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fnGroups.map(g => (
            <div
              key={g.title}
              className="flex flex-col overflow-hidden rounded-2xl"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div className="px-5 py-3" style={{ background: '#0a3535' }}>
                <p className="font-mono text-base font-semibold" style={{ color: 'rgba(216,163,26,0.9)' }}>
                  {g.formula}
                </p>
              </div>
              <div className="flex flex-1 flex-col px-5 py-4">
                <p className="mb-2 text-sm font-bold text-ink">{g.title}</p>
                <p className="text-xs leading-relaxed text-slate">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
