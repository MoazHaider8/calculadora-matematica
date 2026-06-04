'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de vectores?',
    a: 'Es una herramienta que permite realizar operaciones matemáticas con vectores: suma, resta, producto punto, producto cruz, norma, vector unitario y ángulo entre vectores. Trabaja con vectores en 2D y 3D.',
  },
  {
    q: '¿Qué operaciones puedo hacer con vectores?',
    a: 'Esta herramienta permite sumar y restar vectores, calcular el producto punto (escalar), el producto cruz (vector perpendicular, solo 3D), la norma o magnitud, el vector unitario y el ángulo entre dos vectores.',
  },
  {
    q: '¿Qué diferencia hay entre producto punto y producto cruz?',
    a: 'El producto punto devuelve un número escalar: multiplica componentes correspondientes y suma los resultados. El producto cruz devuelve un vector perpendicular a los dos originales y solo está definido para vectores 3D.',
  },
  {
    q: '¿Puedo calcular la magnitud de un vector?',
    a: 'Sí. Selecciona la operación Norma, introduce las componentes del vector y pulsa calcular. La norma es la raíz cuadrada de la suma de los cuadrados de las componentes.',
  },
  {
    q: '¿Qué es un vector unitario?',
    a: 'Un vector unitario tiene la misma dirección que el original pero magnitud igual a 1. Se obtiene dividiendo cada componente entre la norma del vector. No está definido para el vector cero.',
  },
  {
    q: '¿Esta calculadora trabaja con matrices?',
    a: 'Esta herramienta trabaja exclusivamente con vectores. Para operaciones con matrices como suma, multiplicación o transpuesta, usa la Calculadora de Matrices.',
  },
];

export function VectorFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="faq-vec-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2
          id="faq-vec-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Preguntas frecuentes sobre vectores
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
