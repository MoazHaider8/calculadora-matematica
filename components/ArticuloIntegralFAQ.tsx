'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Cuál es la diferencia entre integral definida e indefinida?', a: 'La integral indefinida no tiene límites y el resultado es una función con constante C. La integral definida tiene límites a y b, y el resultado es un número concreto que representa el área bajo la curva entre esos dos puntos.' },
  { q: '¿Qué significa la constante C en una integral?', a: 'La constante C representa una familia infinita de funciones que tienen la misma derivada. Como hay infinitas funciones cuya derivada es f(x), todas ellas son soluciones válidas de la integral indefinida.' },
  { q: '¿Qué es el teorema fundamental del cálculo?', a: 'El teorema fundamental establece que la derivación y la integración son operaciones inversas. Si F\'(x) = f(x), entonces ∫[a,b] f(x) dx = F(b) − F(a). Une los dos conceptos principales del cálculo.' },
  { q: '¿Cómo se integra una suma de funciones?', a: 'La integral de una suma es la suma de las integrales: ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx. Puedes integrar cada término por separado.' },
  { q: '¿Qué pasa si el área bajo la curva es negativa?', a: 'Si la función tiene valores negativos en el intervalo, la integral definida da un resultado negativo para esa parte. El área total geométrica siempre es positiva, pero la integral puede ser negativa si la curva está por debajo del eje x.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export function ArticuloIntegralFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre integrales
        </h2>
        <dl className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl bg-white" style={{ border: '1px solid #D7E2EA' }}>
              <dt>
                <button
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-bold text-ink">{faq.q}</span>
                  <span className="mt-0.5 shrink-0 text-base font-bold" style={{ color: '#147c7c' }}>
                    {open === i ? '−' : '+'}
                  </span>
                </button>
              </dt>
              {open === i && (
                <dd className="px-5 pb-5">
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
