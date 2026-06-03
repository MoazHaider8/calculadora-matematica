'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de matrices?',
    a: 'Es una herramienta que permite realizar operaciones matemáticas con matrices: suma, resta, multiplicación, transposición y multiplicación por escalar. Cada operación requiere unas dimensiones concretas y produce una matriz resultado.',
  },
  {
    q: '¿Qué operaciones puedo hacer con matrices?',
    a: 'Esta herramienta permite sumar matrices del mismo tamaño, restarlas, multiplicarlas cuando las dimensiones son compatibles, obtener la transpuesta y multiplicar todos los elementos por un número escalar.',
  },
  {
    q: '¿Cómo se suman dos matrices?',
    a: 'Para sumar dos matrices, ambas deben tener las mismas dimensiones. Cada elemento del resultado se obtiene sumando los elementos que ocupan la misma fila y columna en A y B. Por ejemplo, el elemento (1,1) de A + B es A(1,1) + B(1,1).',
  },
  {
    q: '¿Cuándo se pueden multiplicar dos matrices?',
    a: 'Solo se pueden multiplicar A × B si el número de columnas de A es igual al número de filas de B. Si A es m×n y B es n×p, el resultado es m×p. La multiplicación de matrices no es conmutativa: A × B no es siempre igual a B × A.',
  },
  {
    q: '¿Qué significa transponer una matriz?',
    a: 'Transponer una matriz significa intercambiar sus filas y columnas. Si la matriz original es m×n, su transpuesta es n×m. El elemento en la posición (i,j) de la transpuesta es el que estaba en la posición (j,i) de la original.',
  },
  {
    q: '¿Esta calculadora calcula determinantes o inversas?',
    a: 'Esta herramienta se enfoca en operaciones generales con matrices: suma, resta, multiplicación, transpuesta y escalar. Para determinantes e inversas habrá calculadoras específicas en esta misma categoría.',
  },
];

export function MatricesFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="faq-matrices-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2
          id="faq-matrices-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Preguntas frecuentes sobre matrices
        </h2>

        <div className="overflow-hidden rounded-2xl bg-white" style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid #EEF4F7' : 'none' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal"
                aria-expanded={open === i}
              >
                <span className="text-sm font-bold" style={{ color: '#102a43' }}>{faq.q}</span>
                <span
                  className="shrink-0 text-base transition-transform"
                  style={{ color: '#D8A31A', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block' }}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed text-slate">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
