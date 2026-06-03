'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de ecuaciones?',
    a: 'Es una herramienta que encuentra el valor de la variable desconocida que satisface la igualdad. Acepta ecuaciones lineales y cuadráticas, muestra la solución y verifica el resultado sustituyendo el valor en la ecuación original.',
  },
  {
    q: '¿Qué tipos de ecuaciones puedo resolver?',
    a: 'La calculadora admite ecuaciones lineales (ax + b = c), ecuaciones cuadráticas (ax² + bx + c = 0) y sistemas de dos ecuaciones con dos incógnitas (x e y).',
  },
  {
    q: '¿Puedo resolver ecuaciones cuadráticas?',
    a: 'Sí. Selecciona el modo Ecuación cuadrática e introduce la ecuación en la forma ax² + bx + c = 0 usando ^ para el exponente (x^2). La calculadora devuelve las soluciones reales o indica si no existen soluciones reales.',
  },
  {
    q: '¿Qué significa comprobar una solución?',
    a: 'Comprobar significa sustituir el valor obtenido en la ecuación original y verificar que ambos lados son iguales. Si x = 2 y la ecuación es 2x + 3 = 7, entonces 2(2) + 3 = 7 confirma que la solución es correcta.',
  },
  {
    q: '¿Por qué la ecuación debe tener signo igual?',
    a: 'Una ecuación es una igualdad entre dos expresiones. Sin el signo igual, el texto introducido es una expresión algebraica, no una ecuación, y no existe un valor a resolver.',
  },
  {
    q: '¿La calculadora resuelve sistemas de ecuaciones?',
    a: 'Sí. El modo Sistema 2×2 resuelve sistemas de dos ecuaciones con dos incógnitas x e y. Introduce cada ecuación en su campo correspondiente y la calculadora devuelve los valores de x e y.',
  },
];

export function EcuacionFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="faq-eq-heading">
      <div className="site-shell">
        <div className="mb-7">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 id="faq-eq-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Preguntas frecuentes sobre ecuaciones
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
