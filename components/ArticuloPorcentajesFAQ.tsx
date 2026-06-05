'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: '¿Cómo se calcula un porcentaje?',
    a: 'Se multiplica la cantidad por el porcentaje y se divide entre 100. La fórmula es: resultado = cantidad × porcentaje / 100. Por ejemplo, el 20% de 150 es 150 × 20 / 100 = 30.',
    aSchema: 'Se multiplica la cantidad por el porcentaje y se divide entre 100. La fórmula es: resultado = cantidad × porcentaje / 100. Por ejemplo, el 20% de 150 es 150 × 20 / 100 = 30.',
  },
  {
    q: '¿Cómo sacar el 20% de una cantidad?',
    a: 'Multiplica la cantidad por 20 y divide entre 100. Si tienes 80, el resultado es 80 × 20 / 100 = 16. También puedes multiplicar directamente por 0.20, que da el mismo resultado.',
    aSchema: 'Multiplica la cantidad por 20 y divide entre 100. Si tienes 80, el resultado es 80 × 20 / 100 = 16. También puedes multiplicar directamente por 0.20.',
  },
  {
    q: '¿Cómo calcular qué porcentaje representa un número?',
    a: 'Usa la fórmula: parte / total × 100. Si quieres saber qué porcentaje es 45 de 300: 45 / 300 × 100 = 15%. El 45 representa el 15% de 300.',
    aSchema: 'Usa la fórmula: parte / total × 100. Si quieres saber qué porcentaje es 45 de 300: 45 / 300 × 100 = 15%.',
  },
  {
    q: '¿Cómo calcular un descuento?',
    a: 'Calcula el porcentaje del precio original y réstalo al precio. Si una prenda cuesta 180 y tiene un 20% de descuento: 180 × 20 / 100 = 36. El precio final es 180 - 36 = 144.',
    aSchema: 'Calcula el porcentaje del precio original y réstalo al precio. Si una prenda cuesta 180 con 20% de descuento: 180 × 20 / 100 = 36. Precio final: 180 - 36 = 144.',
  },
  {
    q: '¿Cuál es la diferencia entre aumento y descuento porcentual?',
    a: 'En un aumento, sumas el resultado al valor inicial. En un descuento, lo restas. La operación para calcular la cantidad es la misma en los dos casos: valor × porcentaje / 100.',
    aSchema: 'En un aumento, sumas el resultado al valor inicial. En un descuento, lo restas. La operación base es la misma: valor × porcentaje / 100.',
  },
  {
    q: '¿Puedo usar una calculadora para verificar porcentajes?',
    a: null,
    aSchema: 'Sí. La calculadora de porcentajes de calculadoramatematica.com resuelve el porcentaje de una cantidad, descuentos, aumentos, disminuciones y el porcentaje que un número representa sobre otro.',
  },
];

export function ArticuloPorcentajesFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="faq-porc-h">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-porc-h" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre porcentajes
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
                acceptedAnswer: { '@type': 'Answer', text: f.aSchema },
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
                  {f.a !== null ? (
                    f.a
                  ) : (
                    <>
                      Sí. La{' '}
                      <Link
                        href="/calculadoras/aritmetica/calculadora-de-porcentajes/"
                        className="font-semibold underline underline-offset-2 transition-colors"
                        style={{ color: '#147c7c' }}
                      >
                        calculadora de porcentajes
                      </Link>{' '}
                      resuelve el porcentaje de una cantidad, descuentos, aumentos, disminuciones y el porcentaje que un número representa sobre otro.
                    </>
                  )}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
