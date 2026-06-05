'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de varianza?',
    a: 'Es una herramienta que acepta una lista de datos numéricos y calcula la varianza poblacional y muestral, junto con la media, las diferencias cuadradas y la desviación estándar como valor de apoyo.',
  },
  {
    q: '¿Qué diferencia hay entre varianza muestral y poblacional?',
    a: 'La poblacional usa todos los datos disponibles y divide entre n. La muestral estima la dispersión de una población a partir de una muestra y divide entre n−1 para reducir el sesgo.',
  },
  {
    q: '¿Cómo se calcula la varianza paso a paso?',
    a: 'Se calcula la media, se resta cada valor a la media, se eleva cada diferencia al cuadrado, se suman los cuadrados y se divide entre n (poblacional) o n−1 (muestral).',
  },
  {
    q: '¿Qué relación hay entre varianza y desviación estándar?',
    a: 'La desviación estándar es la raíz cuadrada de la varianza. La varianza se expresa en unidades cuadradas; la desviación estándar está en las mismas unidades que los datos.',
  },
  {
    q: '¿Por qué se elevan las diferencias al cuadrado?',
    a: 'Para evitar que las diferencias positivas y negativas se cancelen entre sí. Al elevarlas al cuadrado, todos los valores son positivos y reflejan la magnitud real de la dispersión.',
  },
  {
    q: '¿Esta calculadora reemplaza la calculadora de estadística?',
    a: 'Esta herramienta se enfoca en varianza. Para un resumen completo con media, mediana, moda, rango, varianza y desviación estándar, usa la calculadora de estadística.',
  },
];

export function VarianzaFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="faq-var-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 id="faq-var-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre varianza
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
