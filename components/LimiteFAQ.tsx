'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Qué es una calculadora de límites?',
    answer:
      'Es una herramienta que analiza el comportamiento de una función cuando su variable se acerca a un punto concreto. Evalúa la función desde ambos lados del punto, detecta si el límite existe y muestra el resultado junto a una tabla de valores y la explicación del método utilizado.',
  },
  {
    question: '¿Puedo calcular límites laterales?',
    answer:
      'Sí. Selecciona la opción "Por la izquierda" o "Por la derecha" en el campo de dirección. La calculadora analizará únicamente el lado indicado y devolverá el valor del límite desde esa dirección.',
  },
  {
    question: '¿Qué significa que un límite no existe?',
    answer:
      'Un límite bilateral no existe cuando el límite por la izquierda y el límite por la derecha son diferentes. Por ejemplo, en 1/x cuando x se acerca a 0, el lado izquierdo tiende a -∞ y el derecho a +∞. Como los resultados son distintos, el límite bilateral no existe.',
  },
  {
    question: '¿Qué diferencia hay entre límite bilateral y lateral?',
    answer:
      'El límite bilateral estudia la función desde ambos lados del punto y solo existe si ambos lados convergen al mismo valor. El límite lateral estudia solo un lado: por la izquierda (valores menores que el punto) o por la derecha (valores mayores). Ambos tipos pueden existir independientemente.',
  },
  {
    question: '¿La calculadora puede resolver límites al infinito?',
    answer:
      'Sí. Escribe "infinito" o "∞" como valor de aproximación. La calculadora evaluará la función para valores cada vez más grandes y detectará si la función converge a un valor finito, crece sin límite o decrece sin límite.',
  },
  {
    question: '¿Por qué aparece una tabla de valores?',
    answer:
      'La tabla de valores muestra los resultados de la función para puntos que se acercan progresivamente al valor del límite. Permite ver la tendencia de la función antes de llegar al punto exacto, lo que es especialmente útil para visualizar indeterminaciones y confirmar el resultado del límite.',
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

export function LimiteFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="py-10 lg:py-14 bg-aqua-soft" aria-labelledby="limite-faq-heading">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          <div className="lg:col-span-3">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 id="limite-faq-heading" className="mt-3 text-[1.7rem] font-bold leading-tight text-ink lg:text-[2rem]">
              Preguntas frecuentes sobre límites
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-soft">
              Respuestas sobre el funcionamiento de la calculadora y el análisis de límites.
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
                      <dd style={{ maxHeight: isOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.25s cubic-bezier(0.4,0,0.2,1)' }}>
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
