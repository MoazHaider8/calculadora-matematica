'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de media?',
    a: 'Es una herramienta que acepta una lista de datos numéricos y calcula la media aritmética. Esta calculadora soporta media simple (todos los valores con igual peso) y media ponderada (cada valor con un peso distinto).',
  },
  {
    q: '¿Cómo se calcula la media aritmética?',
    a: 'Se suman todos los valores del conjunto y se divide entre la cantidad de datos. Por ejemplo, para 10, 8, 9, 7, 6: suma = 40, cantidad = 5, media = 40 / 5 = 8.',
  },
  {
    q: '¿Qué diferencia hay entre media y promedio?',
    a: 'Son el mismo cálculo. Media es el término estadístico. Promedio es la palabra más usada en contextos cotidianos como calificaciones o valores diarios. El resultado es idéntico.',
  },
  {
    q: '¿Qué diferencia hay entre media simple y media ponderada?',
    a: 'En la media simple todos los datos tienen el mismo peso. En la media ponderada, cada valor tiene un peso que indica su importancia. Los pesos no necesitan sumar 100.',
  },
  {
    q: '¿La media se afecta por valores extremos?',
    a: 'Sí. Un valor muy alto o muy bajo puede desplazar la media. En esos casos, la mediana (valor central de la lista ordenada) es una mejor medida de tendencia central.',
  },
  {
    q: '¿Esta calculadora reemplaza la calculadora de estadística?',
    a: 'Esta herramienta se enfoca en la media. Para un resumen completo con mediana, moda, rango, varianza y desviación estándar, usa la calculadora de estadística.',
  },
];

export function MediaFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="faq-media-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 id="faq-media-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre media
        </h2>
        <dl className="flex flex-col gap-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl"
                style={{ border: '1px solid #D7E2EA' }}
              >
                <dt>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                    style={{ background: isOpen ? '#F0FAF9' : '#F8FAFC' }}
                  >
                    <span className="text-sm font-bold text-ink">{faq.q}</span>
                    <svg
                      className="shrink-0 transition-transform duration-200"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: '#147c7c' }}
                      width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                    >
                      <polyline points="3,6 8,11 13,6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </dt>
                {isOpen && (
                  <dd className="border-t px-6 py-4 text-sm leading-relaxed text-slate" style={{ borderColor: '#EEF4F7' }}>
                    {faq.a}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
