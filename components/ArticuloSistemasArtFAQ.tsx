'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Cuántas soluciones puede tener un sistema de ecuaciones?', a: 'Puede tener exactamente una solución (compatible determinado), infinitas soluciones (compatible indeterminado) o ninguna (incompatible). Si al resolver llegas a una identidad como 0 = 0, hay infinitas. Si llegas a una contradicción como 0 = 5, no hay solución.' },
  { q: '¿Cuándo usar sustitución y cuándo reducción?', a: 'La sustitución es más práctica cuando una variable ya está despejada o es fácil de despejar. La reducción es más rápida cuando los coeficientes de una variable se cancelan directamente o con una multiplicación sencilla.' },
  { q: '¿Cómo verifico que la solución es correcta?', a: 'Sustituye los valores de x e y en ambas ecuaciones originales. Si ambas quedan como identidades verdaderas, la solución es correcta. Este paso es fundamental para detectar errores de cálculo.' },
  { q: '¿Se pueden resolver sistemas con más de dos incógnitas?', a: 'Sí. Con tres incógnitas necesitas tres ecuaciones. El método de eliminación (reducción) se aplica igual pero eliminando variables de a una hasta llegar a una ecuación con una sola incógnita.' },
  { q: '¿Qué relación hay entre sistemas de ecuaciones y matrices?', a: 'Cualquier sistema de ecuaciones lineales se puede escribir como la ecuación matricial Ax = b, donde A es la matriz de coeficientes, x el vector de incógnitas y b el vector de términos independientes. Esto permite usar la inversa de A o el método de Gauss para resolver.' },
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

export function ArticuloSistemasArtFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre sistemas de ecuaciones
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
