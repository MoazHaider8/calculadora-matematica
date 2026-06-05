'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de desviación estándar?',
    a: 'Es una herramienta que acepta una lista de datos numéricos y calcula la desviación estándar poblacional y muestral, junto con la media y la varianza como valores de apoyo.',
  },
  {
    q: '¿Qué diferencia hay entre desviación estándar muestral y poblacional?',
    a: 'La poblacional usa todos los datos disponibles y divide entre n. La muestral estima la dispersión de una población a partir de una muestra y divide entre n−1 para corregir el sesgo.',
  },
  {
    q: '¿Qué relación hay entre varianza y desviación estándar?',
    a: 'La desviación estándar es la raíz cuadrada de la varianza. Ambas miden dispersión, pero la desviación estándar se expresa en las mismas unidades que los datos.',
  },
  {
    q: '¿Cómo se interpreta una desviación estándar alta?',
    a: 'Indica que los datos están más dispersos respecto a la media. Una desviación baja indica que los datos están concentrados cerca del valor medio.',
  },
  {
    q: '¿Cuántos datos necesito para calcularla?',
    a: 'Para la desviación estándar poblacional basta con un dato (el resultado sería 0). Para la muestral se necesitan al menos 2 valores, porque el divisor n−1 sería 0 con un solo dato.',
  },
  {
    q: '¿Esta calculadora reemplaza la calculadora de estadística?',
    a: 'Esta herramienta se enfoca en desviación estándar. Para un resumen completo con media, mediana, moda, rango, varianza y desviación estándar, usa la calculadora de estadística.',
  },
];

export function DesviacionFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="faq-desv-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 id="faq-desv-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre desviación estándar
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
