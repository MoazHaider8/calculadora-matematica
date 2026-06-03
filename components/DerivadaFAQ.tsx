'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Qué es una calculadora de derivadas?',
    answer:
      'Es una herramienta que calcula la derivada simbólica de una función matemática. Recibe la función y la variable como entrada, aplica las reglas de derivación y devuelve el resultado exacto. También puede evaluar la derivada en un punto concreto y calcular la recta tangente.',
  },
  {
    question: '¿Puedo calcular derivadas de segundo orden?',
    answer:
      'Sí. La calculadora admite primera, segunda y tercera derivada, además de un campo para introducir el orden que necesites. La segunda derivada se obtiene derivando dos veces la función original, y así sucesivamente para órdenes superiores.',
  },
  {
    question: '¿Qué significa derivar una función?',
    answer:
      'Derivar una función consiste en calcular su tasa de cambio instantánea en cada punto. La derivada f\'(x) indica cómo varía f cuando x cambia en una pequeña cantidad. Geométricamente, corresponde a la pendiente de la recta tangente a la curva en ese punto.',
  },
  {
    question: '¿La calculadora puede evaluar la derivada en un punto?',
    answer:
      'Sí. Activa la opción de evaluación en un punto e introduce el valor de la variable. La calculadora calcula primero la derivada simbólica y luego sustituye el valor indicado para obtener el resultado numérico. Por ejemplo, si f(x) = x³ + 2x y el punto es x = 2, el resultado es f\'(2) = 14.',
  },
  {
    question: '¿Qué es la recta tangente?',
    answer:
      'La recta tangente a una curva en un punto es la recta que toca la curva en ese punto y tiene la misma pendiente que la derivada en ese punto. Su ecuación es y = f(a) + f\'(a)(x − a), donde a es el valor de la variable. Esta recta es útil para aproximar el comportamiento de la función en puntos cercanos.',
  },
  {
    question: '¿Por qué algunas expresiones no se simplifican por completo?',
    answer:
      'La calculadora devuelve el resultado mediante derivación simbólica. Para expresiones complejas que involucran productos, cocientes o composiciones de funciones, el resultado puede aparecer en una forma correcta pero no completamente simplificada. En esos casos, la herramienta aplica las reglas generales y muestra el resultado obtenido.',
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

export function DerivadaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="py-10 lg:py-14 bg-aqua-soft" aria-labelledby="deriv-faq-heading">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          <div className="lg:col-span-3">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 id="deriv-faq-heading" className="mt-3 text-[1.7rem] font-bold leading-tight text-ink lg:text-[2rem]">
              Preguntas frecuentes sobre derivadas
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-soft">
              Respuestas sobre el funcionamiento de la calculadora y el cálculo diferencial.
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
