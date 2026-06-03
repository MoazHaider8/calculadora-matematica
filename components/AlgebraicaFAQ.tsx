'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora algebraica?',
    a: 'Es una herramienta que trabaja con expresiones algebraicas. Permite simplificar términos semejantes, expandir paréntesis, factorizar expresiones básicas y evaluar una expresión con un valor concreto de variable.',
  },
  {
    q: '¿Qué diferencia hay entre expresión y ecuación?',
    a: 'Una expresión algebraica es una combinación de variables y números sin signo de igualdad, como 2x + 3x. Una ecuación establece que dos expresiones son iguales, como 2x + 3 = 7, y tiene una solución que se puede resolver.',
  },
  {
    q: '¿Puedo simplificar expresiones algebraicas?',
    a: 'Sí. Selecciona el modo Simplificar expresión e introduce la expresión. La calculadora combina los términos semejantes y devuelve la forma más compacta. Por ejemplo, 2x + 3x - x da como resultado 4x.',
  },
  {
    q: '¿La calculadora puede factorizar expresiones?',
    a: 'Sí. El modo Factorizar expresión admite casos comunes como x² + 5x + 6 = (x+2)(x+3), diferencias de cuadrados como x² - 1 = (x-1)(x+1), y factores comunes como 2x + 4 = 2(x+2). Si la expresión no tiene una factorización simple, la calculadora lo indica.',
  },
  {
    q: '¿Puedo evaluar una expresión con un valor de x?',
    a: 'Sí. Selecciona el modo Evaluar expresión, introduce la expresión, elige la variable e introduce el valor numérico. Por ejemplo, x² + 3x con x = 2 da como resultado 10.',
  },
  {
    q: '¿Esta herramienta resuelve ecuaciones?',
    a: 'No. Esta herramienta trabaja con expresiones algebraicas: simplificar, expandir, factorizar y evaluar. Para resolver ecuaciones y encontrar el valor de una incógnita, usa la calculadora de ecuaciones.',
  },
];

export function AlgebraicaFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="faq-alg-heading">
      <div className="site-shell">
        <div className="mb-7">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 id="faq-alg-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Preguntas frecuentes sobre álgebra
          </h2>
        </div>
        <dl className="academic-card divide-y divide-line overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i}>
              <dt>
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-semibold text-ink transition-colors hover:bg-aqua-soft"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-teal" aria-hidden="true">{open === i ? '−' : '+'}</span>
                </button>
              </dt>
              {open === i && (
                <dd className="border-t border-line bg-page px-6 py-4">
                  <p className="text-sm leading-relaxed text-slate">{faq.a}</p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
