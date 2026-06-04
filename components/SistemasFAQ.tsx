'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de sistemas de ecuaciones?',
    a: 'Es una herramienta que resuelve conjuntos de ecuaciones lineales con dos o tres incógnitas. Introduce los coeficientes de cada ecuación y obtén la solución, el método usado y la comprobación.',
  },
  {
    q: '¿Qué significa sistema 2×2?',
    a: 'Un sistema 2×2 tiene dos ecuaciones y dos incógnitas, normalmente x e y. La solución es el par de valores (x, y) que satisface ambas ecuaciones a la vez.',
  },
  {
    q: '¿Puedo resolver sistemas 3×3?',
    a: 'Sí. Selecciona 3×3 en el selector de tamaño e introduce los coeficientes de las tres ecuaciones con tres incógnitas (x, y, z). La calculadora aplica eliminación gaussiana para encontrar la solución.',
  },
  {
    q: '¿Qué significa que un sistema no tenga solución?',
    a: 'Significa que el sistema es incompatible: las ecuaciones son contradictorias y no existe ningún conjunto de valores que las satisfaga todas simultáneamente. En geometría, puede representar rectas o planos paralelos.',
  },
  {
    q: '¿Qué son las infinitas soluciones?',
    a: 'Un sistema con infinitas soluciones es indeterminado: al menos una ecuación depende de otra y no aporta información nueva. Hay muchos conjuntos de valores que satisfacen el sistema.',
  },
  {
    q: '¿Esta calculadora resuelve ecuaciones individuales?',
    a: 'No. Esta herramienta resuelve sistemas de ecuaciones con múltiples incógnitas. Para una sola ecuación lineal o cuadrática, usa la calculadora de ecuaciones.',
  },
];

export function SistemasFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="faq-sis-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2
          id="faq-sis-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Preguntas frecuentes sobre sistemas de ecuaciones
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
