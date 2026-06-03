'use client';

import { useState } from 'react';

const faqs = [
  { q: '¿Qué es una calculadora de polinomios?', a: 'Es una herramienta que trabaja específicamente con polinomios. Permite simplificar, sumar, restar, multiplicar, factorizar y evaluar polinomios, además de mostrar información como el grado, el término principal y los coeficientes.' },
  { q: '¿Qué operaciones puedo hacer con polinomios?', a: 'Puedes simplificar un polinomio reduciendo términos semejantes, sumar o restar dos polinomios, multiplicarlos aplicando la propiedad distributiva, factorizarlos en casos comunes y evaluarlos para un valor concreto de la variable.' },
  { q: '¿La calculadora puede factorizar polinomios?', a: 'Sí. El modo Factorizar admite casos comunes: trinomios cuadráticos como x² + 5x + 6 = (x+2)(x+3), diferencias de cuadrados como x² - 1 = (x-1)(x+1) y factores comunes como 2x² + 4x = 2x(x+2). Si el polinomio no tiene una factorización simple, la calculadora lo indica.' },
  { q: '¿Cómo se identifica el grado de un polinomio?', a: 'El grado de un polinomio es el valor del mayor exponente que aparece en la expresión. En x³ - 2x² + x - 5, el grado es 3. En 2x² + 7x, el grado es 2. La calculadora lo muestra en el modo Información.' },
  { q: '¿Puedo evaluar un polinomio con un valor de x?', a: 'Sí. Selecciona el modo Evaluar, introduce el polinomio, elige la variable e introduce el valor numérico. La calculadora devuelve P(valor). Por ejemplo, x² + 3x + 2 con x = 2 da P(2) = 12.' },
  { q: '¿Esta herramienta resuelve ecuaciones polinómicas?', a: 'No. Esta herramienta trabaja con polinomios y operaciones sobre ellos. Para resolver ecuaciones y encontrar el valor de una incógnita, usa la calculadora de ecuaciones.' },
];

export function PolinomioFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="faq-pol-heading">
      <div className="site-shell">
        <div className="mb-7">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 id="faq-pol-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">Preguntas frecuentes sobre polinomios</h2>
        </div>
        <dl className="academic-card divide-y divide-line overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i}>
              <dt>
                <button className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-semibold text-ink transition-colors hover:bg-aqua-soft"
                  aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
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
