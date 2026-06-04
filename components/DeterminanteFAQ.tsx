'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de determinantes?',
    a: 'Es una herramienta que calcula el determinante de una matriz cuadrada. Introduce los valores de la matriz, elige el tamaño y la calculadora devuelve el valor de det(A), el método utilizado y la interpretación del resultado.',
  },
  {
    q: '¿Qué matrices tienen determinante?',
    a: 'Solo las matrices cuadradas tienen determinante, es decir, aquellas con el mismo número de filas y columnas. Una matriz 2×2, 3×3 o 4×4 tiene determinante. Una matriz 2×3 no lo tiene.',
  },
  {
    q: '¿Cómo se calcula un determinante 2×2?',
    a: 'Para una matriz [[a, b], [c, d]] el determinante es ad − bc. Se multiplica la diagonal principal (a·d) y se resta el producto de la diagonal secundaria (b·c).',
  },
  {
    q: '¿Qué significa que el determinante sea cero?',
    a: 'Un determinante igual a cero indica que la matriz es singular. Eso significa que no tiene inversa y que alguna de sus filas o columnas es combinación lineal de las demás. El sistema de ecuaciones asociado puede no tener solución única.',
  },
  {
    q: '¿Puedo calcular determinantes 3×3?',
    a: 'Sí. Esta calculadora admite matrices 2×2, 3×3 y 4×4. Para 3×3 aplica la expansión por la primera fila, equivalente a la regla de Sarrus, y muestra el cálculo breve junto al resultado.',
  },
  {
    q: '¿Esta calculadora obtiene la matriz inversa?',
    a: 'Esta herramienta calcula determinantes. Para obtener la matriz inversa habrá una calculadora específica en esta misma sección de Matrices y Vectores.',
  },
];

export function DeterminanteFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="faq-det-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2
          id="faq-det-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Preguntas frecuentes sobre determinantes
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
