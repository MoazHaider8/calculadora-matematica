'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Por qué cualquier número elevado a 0 es 1?', a: 'Porque al aplicar la regla del cociente: aⁿ / aⁿ = aⁿ⁻ⁿ = a⁰. Y cualquier número dividido entre sí mismo es 1. Por lo tanto a⁰ = 1 para a ≠ 0.' },
  { q: '¿Qué significa un exponente negativo?', a: 'Un exponente negativo indica el recíproco. a⁻ⁿ = 1/aⁿ. Por ejemplo, 2⁻³ = 1/2³ = 1/8. El exponente negativo no hace negativo el número, lo convierte en fracción.' },
  { q: '¿Se pueden multiplicar potencias con distintas bases?', a: 'No directamente con las reglas de exponentes. 2³ · 3² no se puede simplificar en una sola potencia porque las bases son distintas. Hay que calcular cada parte: 8 · 9 = 72.' },
  { q: '¿Qué es un exponente fraccionario?', a: 'Un exponente fraccionario representa una raíz. a^(1/n) es la raíz n-ésima de a. Por ejemplo, 8^(1/3) = ³√8 = 2. Y a^(m/n) = ⁿ√(aᵐ).' },
  { q: '¿Por qué (a+b)² no es a² + b²?', a: 'Porque el exponente no se distribuye sobre la suma. (a+b)² = (a+b)(a+b) = a² + 2ab + b². El término 2ab es el que falta cuando se comete ese error.' },
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

export function ArticuloExpFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre exponentes
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
