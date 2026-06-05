'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Cuántas raíces cuadradas tiene un número positivo?', a: 'Dos: una positiva y una negativa. √9 = 3 y −3 son ambas raíces cuadradas de 9 porque 3² = 9 y (−3)² = 9. Por convención, el símbolo √ devuelve siempre la raíz positiva (principal).' },
  { q: '¿Por qué la raíz cuadrada de un número negativo no existe en los reales?', a: 'Porque no hay ningún número real que al cuadrado dé un resultado negativo. Cualquier número real al cuadrado es siempre positivo o cero. Para manejar raíces de negativos se usan los números complejos.' },
  { q: '¿Qué es una raíz irracional?', a: 'Es una raíz que no se puede expresar como fracción exacta. √2 ≈ 1.41421... y sus decimales no terminan ni se repiten. Los cuadrados perfectos (1, 4, 9, 16...) sí tienen raíz exacta.' },
  { q: '¿Cuándo se puede simplificar un radical?', a: 'Cuando el número dentro tiene un factor que es un cuadrado perfecto. √72 = √(36·2) = 6√2 porque 36 es un cuadrado perfecto. Si no hay cuadrados perfectos como factor, el radical está en su forma más simple.' },
  { q: '¿Se pueden sumar √2 y √3?', a: 'No se pueden simplificar. √2 + √3 no es igual a √5. Solo se pueden sumar radicales que tengan el mismo número bajo el signo de raíz: 3√2 + 5√2 = 8√2.' },
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

export function ArticuloRaicesFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre raíces y radicales
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
