'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de fracciones?',
    a: 'Es una herramienta que realiza operaciones matemáticas exactas con fracciones: suma, resta, multiplicación, división, simplificación y conversión a fracción mixta y decimal.',
  },
  {
    q: '¿Cómo se suman fracciones con distinto denominador?',
    a: 'Para sumar fracciones con distinto denominador se calcula el mínimo común múltiplo de los denominadores. Luego se convierten ambas fracciones a ese denominador común y se suman los numeradores. Por ejemplo, 1/2 + 3/4: el LCD es 4, entonces 1/2 = 2/4 y 2/4 + 3/4 = 5/4.',
  },
  {
    q: '¿Cómo se simplifica una fracción?',
    a: 'Para simplificar una fracción se divide el numerador y el denominador entre su máximo común divisor. Por ejemplo, 12/18: el MCD es 6, entonces 12÷6 = 2 y 18÷6 = 3, resultado: 2/3.',
  },
  {
    q: '¿Qué es una fracción mixta?',
    a: 'Una fracción mixta combina un número entero y una fracción propia. Por ejemplo, 5/4 es una fracción impropia que equivale a 1 1/4 en forma mixta. La calculadora convierte automáticamente cuando el numerador es mayor que el denominador.',
  },
  {
    q: '¿Puedo convertir una fracción a decimal?',
    a: 'Sí. En todos los modos la calculadora muestra el resultado decimal. En el modo Convertir también muestra la fracción mixta y el porcentaje equivalente.',
  },
  {
    q: '¿Esta calculadora sirve para porcentajes?',
    a: 'Esta herramienta trabaja con fracciones. Para porcentajes habrá una calculadora específica en la categoría de aritmética.',
  },
];

export function FracionesFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="faq-frac-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2
          id="faq-frac-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Preguntas frecuentes sobre fracciones
        </h2>

        <div
          className="overflow-hidden rounded-2xl bg-white"
          style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
        >
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
