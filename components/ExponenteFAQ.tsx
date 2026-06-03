'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de exponentes?',
    a: 'Es una herramienta que calcula potencias y exponentes. Permite introducir una base y un exponente para obtener el resultado, trabajar con exponentes negativos y fraccionarios, simplificar expresiones y convertir números a notación científica.',
  },
  {
    q: '¿Qué diferencia hay entre exponente y potencia?',
    a: 'La potencia es el resultado de la operación. El exponente es el número que indica cuántas veces se multiplica la base. En 2³, la base es 2, el exponente es 3 y la potencia es 8.',
  },
  {
    q: '¿Puedo calcular exponentes negativos?',
    a: 'Sí. Introduce la base y un exponente negativo (por ejemplo, -3). La calculadora devuelve el recíproco de la potencia positiva correspondiente. 2⁻³ = 1/8 = 0.125.',
  },
  {
    q: '¿Qué significa un exponente fraccionario?',
    a: 'Un exponente fraccionario representa una raíz. 4^(1/2) equivale a la raíz cuadrada de 4. 8^(1/3) equivale a la raíz cúbica de 8. El denominador indica el índice de la raíz.',
  },
  {
    q: '¿La calculadora simplifica expresiones con exponentes?',
    a: 'Sí. El modo de simplificación aplica las propiedades básicas: producto de potencias, cociente de potencias y potencia de una potencia, siempre que la base sea la misma y la expresión siga los patrones admitidos.',
  },
  {
    q: '¿Qué relación hay entre exponentes y logaritmos?',
    a: 'Los logaritmos son la operación inversa de los exponentes. Si 2³ = 8, entonces log₂(8) = 3. Los logaritmos responden a la pregunta: ¿a qué exponente hay que elevar la base para obtener ese número?',
  },
];

export function ExponenteFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="faq-exp-heading">
      <div className="site-shell">
        <div className="mb-7">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 id="faq-exp-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Preguntas frecuentes sobre exponentes
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
