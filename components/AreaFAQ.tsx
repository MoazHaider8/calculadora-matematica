'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de área?',
    a: 'Es una herramienta que calcula la superficie de figuras planas a partir de sus medidas. Esta calculadora soporta siete figuras: cuadrado, rectángulo, triángulo, círculo, trapecio, paralelogramo y rombo.',
  },
  {
    q: '¿Qué figuras puedo calcular?',
    a: 'Puedes calcular el área de cuadrado, rectángulo, triángulo, círculo (usando el radio), trapecio (dos bases y altura), paralelogramo y rombo (dos diagonales).',
  },
  {
    q: '¿Qué diferencia hay entre área y perímetro?',
    a: 'El área mide la superficie interior de la figura, expresada en unidades cuadradas (cm², m²). El perímetro mide la longitud del contorno, expresado en unidades lineales (cm, m).',
  },
  {
    q: '¿Por qué el resultado aparece en unidades cuadradas?',
    a: 'Porque el área mide superficie en dos dimensiones. Al multiplicar dos longitudes (base × altura, por ejemplo), el resultado se expresa en la unidad elevada al cuadrado.',
  },
  {
    q: '¿Cómo calcular el área de un círculo?',
    a: 'Selecciona Círculo, introduce el radio y pulsa calcular. La fórmula aplicada es A = πr². Si conoces el diámetro, divídelo entre 2 para obtener el radio.',
  },
  {
    q: '¿Esta calculadora sirve para volumen?',
    a: 'No. Esta herramienta calcula áreas de figuras planas. Para cuerpos geométricos en 3D, usa la calculadora de volumen cuando esté disponible.',
  },
];

export function AreaFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="faq-area-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 id="faq-area-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre área
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
