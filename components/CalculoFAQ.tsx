'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Qué herramientas de cálculo incluye esta categoría?',
    answer:
      'Esta categoría incluye cinco calculadoras: integrales, derivadas, límites, logaritmos y exponentes. Cada herramienta está diseñada para una operación específica dentro del cálculo diferencial e integral.',
  },
  {
    question: '¿Cuál es la diferencia entre derivadas e integrales?',
    answer:
      'Las derivadas miden la tasa de cambio instantánea de una función, es decir, cómo varía una magnitud respecto a otra en un punto dado. Las integrales calculan la acumulación de una cantidad, como el área bajo una curva. Son operaciones inversas entre sí según el teorema fundamental del cálculo.',
  },
  {
    question: '¿Qué calculadora debo usar para resolver límites?',
    answer:
      'La calculadora de límites permite calcular el valor al que se aproxima una función cuando su variable tiende a un punto. Es la herramienta adecuada para analizar comportamientos en puntos de discontinuidad, al infinito o cuando la sustitución directa no es posible.',
  },
  {
    question: '¿Las calculadoras muestran los pasos del procedimiento?',
    answer:
      'Sí. Cada calculadora devuelve el resultado junto al procedimiento seguido. Esto permite revisar la regla aplicada en cada paso, lo que resulta útil para verificar trabajo propio o estudiar el método paso a paso.',
  },
  {
    question: '¿Puedo utilizar estas herramientas para estudiar cálculo?',
    answer:
      'Sí. Las calculadoras están pensadas para complementar el estudio. Muestran los pasos aplicados, las reglas utilizadas y los resultados intermedios, lo que ayuda a entender el proceso y no solo el resultado final.',
  },
];

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative flex h-5 w-5 shrink-0 items-center justify-center text-teal">
      <span className="absolute block h-px w-3 rounded-full bg-current" />
      <span
        className="absolute block h-3 w-px rounded-full bg-current transition-all duration-200"
        style={{ opacity: open ? 0 : 1, transform: open ? 'scaleY(0)' : 'scaleY(1)' }}
      />
    </span>
  );
}

export function CalculoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="py-12 lg:py-16 bg-aqua-soft" aria-labelledby="calculo-faq-heading">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          <div className="lg:col-span-3">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2
              id="calculo-faq-heading"
              className="mt-3 text-[1.7rem] font-bold leading-tight text-ink lg:text-[2rem]"
            >
              Preguntas frecuentes sobre cálculo
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-soft">
              Respuestas sobre las herramientas y cómo utilizarlas.
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="academic-card overflow-hidden">
              <dl className="divide-y divide-line">
                {faqs.map((item, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div key={item.question}>
                      <dt>
                        <button
                          onClick={() => toggle(i)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-panel"
                        >
                          <span className="font-heading text-[1.05rem] leading-snug text-ink">
                            {item.question}
                          </span>
                          <ToggleIcon open={isOpen} />
                        </button>
                      </dt>
                      <dd
                        style={{
                          maxHeight: isOpen ? '400px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 0.25s cubic-bezier(0.4,0,0.2,1)',
                        }}
                      >
                        <p className="px-6 pb-5 pr-12 text-sm leading-relaxed text-slate-soft">
                          {item.answer}
                        </p>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
