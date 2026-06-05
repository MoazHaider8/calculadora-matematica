'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de volumen?',
    a: 'Es una herramienta que calcula el espacio que ocupa un cuerpo geométrico a partir de sus medidas. Esta calculadora soporta siete cuerpos: cubo, prisma rectangular, cilindro, cono, esfera, pirámide y prisma triangular.',
  },
  {
    q: '¿Qué cuerpos geométricos puedo calcular?',
    a: 'Puedes calcular el volumen de cubo, prisma rectangular, cilindro, cono, esfera, pirámide (con área de la base) y prisma triangular (con base, altura del triángulo y longitud).',
  },
  {
    q: '¿Qué diferencia hay entre área y volumen?',
    a: 'El área mide la superficie de una figura plana en 2D, expresada en unidades cuadradas (cm²). El volumen mide el espacio de un cuerpo en 3D, expresado en unidades cúbicas (cm³).',
  },
  {
    q: '¿Por qué el resultado aparece en unidades cúbicas?',
    a: 'Porque el volumen mide espacio en tres dimensiones. Al multiplicar tres longitudes, el resultado se expresa en la unidad elevada al cubo.',
  },
  {
    q: '¿Cómo calcular el volumen de un cilindro?',
    a: 'Selecciona Cilindro, introduce el radio y la altura y pulsa calcular. La fórmula aplicada es V = πr²h. Si conoces el diámetro, divídelo entre 2 para obtener el radio.',
  },
  {
    q: '¿Esta calculadora sirve para calcular área?',
    a: 'No. Esta herramienta calcula volúmenes de cuerpos geométricos. Para superficies de figuras planas, usa la calculadora de área.',
  },
];

export function VolumenFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="faq-vol-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 id="faq-vol-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre volumen
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
