'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué herramientas de álgebra incluye esta categoría?',
    a: 'Esta categoría incluye cinco herramientas: Calculadora de Ecuaciones, Calculadora Algebraica, Calculadora de Polinomios, Calculadora de Raíces y Calculadora de Raíz Cuadrada. Todas están en desarrollo y estarán disponibles próximamente.',
  },
  {
    q: '¿Qué calculadora debo usar para resolver ecuaciones?',
    a: 'La Calculadora de Ecuaciones está diseñada para resolver ecuaciones lineales y cuadráticas. Muestra los pasos del procedimiento y verifica el resultado. Para expresiones más generales se puede usar la Calculadora Algebraica.',
  },
  {
    q: '¿Cuál es la diferencia entre álgebra y aritmética?',
    a: 'La aritmética trabaja con números concretos y operaciones básicas. El álgebra introduce variables, lo que permite trabajar con expresiones generales, resolver ecuaciones y describir relaciones entre cantidades sin necesidad de conocer los valores exactos de antemano.',
  },
  {
    q: '¿Puedo simplificar expresiones algebraicas?',
    a: 'Sí. La Calculadora Algebraica permite simplificar, expandir y factorizar expresiones con variables. También aplica propiedades algebraicas básicas para reducir la expresión a su forma más simple.',
  },
  {
    q: '¿Se pueden trabajar polinomios en esta categoría?',
    a: 'Sí. La Calculadora de Polinomios cubre operaciones con polinomios de cualquier grado: suma, resta, multiplicación, división y evaluación en un punto. La Calculadora de Raíces complementa esta herramienta calculando los ceros del polinomio.',
  },
  {
    q: '¿Estas herramientas sirven para estudiar álgebra?',
    a: 'Sí. Las calculadoras muestran los pasos del procedimiento y las propiedades aplicadas en cada operación. Esto permite revisar el proceso y no solo el resultado final, lo que facilita el estudio y la comprensión del álgebra.',
  },
];

export function AlgebraFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="py-12 lg:py-16"
      style={{ background: '#EEF4F7' }}
      aria-labelledby="faq-algebra-heading"
    >
      <div className="site-shell">
        <div className="mb-7">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2
            id="faq-algebra-heading"
            className="mt-2 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
            style={{ color: '#102a43' }}
          >
            Preguntas frecuentes sobre álgebra
          </h2>
        </div>
        <dl
          className="overflow-hidden rounded-2xl bg-white"
          style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
        >
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid #EEF4F7' : 'none' }}>
              <dt>
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold transition-colors hover:bg-aqua-soft"
                  style={{ color: '#102a43' }}
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span
                    className="shrink-0 text-lg font-bold transition-transform"
                    style={{ color: '#0F5C5C', transform: open === i ? 'rotate(45deg)' : 'none' }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </dt>
              {open === i && (
                <dd className="border-t px-6 py-5" style={{ borderColor: '#EEF4F7', background: '#FAFCFD' }}>
                  <p className="text-sm leading-relaxed" style={{ color: '#334e68' }}>{faq.a}</p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
