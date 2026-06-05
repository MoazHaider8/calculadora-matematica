'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de círculos?',
    a: 'Es una herramienta que permite calcular todas las medidas principales de un círculo a partir de un único dato conocido. Introduce el radio, el diámetro, la circunferencia o el área, y la calculadora obtiene las demás medidas con la fórmula correspondiente.',
  },
  {
    q: '¿Qué puedo calcular si solo conozco el radio?',
    a: 'Con el radio puedes calcular el diámetro con d = 2r, la circunferencia con C = 2πr y el área con A = πr². Esta calculadora muestra los tres resultados de forma simultánea con el procedimiento completo.',
  },
  {
    q: '¿Cómo calcular el área de un círculo?',
    a: 'El área de un círculo se calcula con la fórmula A = πr², donde r es el radio. Si solo conoces el diámetro, divide entre 2 para obtener el radio. Si conoces la circunferencia, calcula primero r = C / 2π y luego aplica A = πr².',
  },
  {
    q: '¿Qué diferencia hay entre radio y diámetro?',
    a: 'El radio mide la distancia del centro del círculo a cualquier punto de su borde. El diámetro mide de borde a borde pasando por el centro y equivale exactamente al doble del radio: d = 2r.',
  },
  {
    q: '¿Circunferencia y perímetro del círculo son lo mismo?',
    a: 'Sí. La circunferencia es el nombre específico del perímetro de un círculo. Mide la longitud total del contorno circular y se calcula con C = 2πr. Se expresa en unidades lineales como cm o m.',
  },
  {
    q: '¿Esta calculadora reemplaza la calculadora de área?',
    a: 'Esta herramienta se enfoca en círculos. Para calcular áreas de muchas figuras planas, usa la calculadora de área.',
  },
];

export function CirculosFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-circ-heading">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-circ-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre círculos
        </h2>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(f => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />

        <dl className="mx-auto max-w-3xl divide-y divide-line">
          {faqs.map((f, i) => (
            <div key={i} className="py-4">
              <dt>
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-bold text-ink">{f.q}</span>
                  <span
                    className="shrink-0 text-teal transition-transform duration-200"
                    style={{ transform: open === i ? 'rotate(180deg)' : 'none' }}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>
              </dt>
              {open === i && (
                <dd className="mt-3 text-sm leading-relaxed text-slate">
                  {f.a}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
