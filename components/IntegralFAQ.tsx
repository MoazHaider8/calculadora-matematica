'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Qué es una calculadora de integrales?',
    answer:
      'Es una herramienta que resuelve integrales de forma simbólica o numérica. Recibe una función matemática como entrada, aplica las reglas de integración y devuelve el resultado, ya sea la antiderivada completa o el valor de una integral definida entre dos límites.',
  },
  {
    question: '¿Puedo calcular integrales definidas e indefinidas?',
    answer:
      'Sí. La calculadora admite los dos tipos. Para una integral indefinida solo necesitas la función y la variable. Para una integral definida también debes introducir el límite inferior y el límite superior, que pueden ser números, pi o e.',
  },
  {
    question: '¿Qué significa la constante C en una integral?',
    answer:
      'La constante C representa la constante de integración. Cuando se integra de forma indefinida, el resultado es una familia de funciones que difieren entre sí por una constante. Al agregar C se indica que el resultado incluye todas esas posibilidades. En integrales definidas, C desaparece porque se evalúa en los límites y se cancela.',
  },
  {
    question: '¿Por qué algunas integrales no tienen solución simbólica sencilla?',
    answer:
      'No todas las funciones tienen una antiderivada que se pueda expresar en términos de funciones elementales. Por ejemplo, ∫ e^(−x²) dx no tiene una forma cerrada. En esos casos, la calculadora mostrará un mensaje indicando que no se encontró una solución simbólica sencilla.',
  },
  {
    question: '¿La calculadora muestra los pasos del procedimiento?',
    answer:
      'La herramienta muestra la regla o el método utilizado para cada resultado. Para casos estándar como la regla de la potencia, funciones trigonométricas o la integral exponencial, se incluye una explicación del procedimiento. Para expresiones complejas, se indica la regla general aplicada.',
  },
  {
    question: '¿Puedo usar esta herramienta para estudiar cálculo?',
    answer:
      'Sí. La calculadora está pensada como herramienta de apoyo al estudio. Puedes verificar resultados propios, explorar cómo varía el resultado al cambiar la función o los límites, y revisar qué regla se aplicó en cada caso.',
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

export function IntegralFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="py-10 lg:py-14 bg-aqua-soft" aria-labelledby="integral-faq-heading">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          <div className="lg:col-span-3">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 id="integral-faq-heading" className="mt-3 text-[1.7rem] font-bold leading-tight text-ink lg:text-[2rem]">
              Preguntas frecuentes sobre integrales
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-soft">
              Respuestas sobre el funcionamiento de la calculadora y el cálculo integral.
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
