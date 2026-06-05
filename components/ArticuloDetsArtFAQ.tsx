'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿El determinante puede ser negativo?', a: 'Sí. El determinante puede ser cualquier número real: positivo, negativo o cero. Un determinante negativo no significa que la matriz sea inválida; simplemente indica que la transformación que representa incluye una inversión de orientación.' },
  { q: '¿Qué pasa si el determinante es 0?', a: 'Si det(A) = 0, la matriz es singular: no tiene inversa y el sistema de ecuaciones Ax = b puede no tener solución única (o no tener ninguna). Matemáticamente, las filas o columnas son linealmente dependientes.' },
  { q: '¿Solo las matrices cuadradas tienen determinante?', a: 'Sí. El determinante solo está definido para matrices cuadradas (n×n). Una matriz rectangular como 2×3 no tiene determinante.' },
  { q: '¿Qué es la regla de Sarrus?', a: 'La regla de Sarrus es un método visual para calcular el determinante de una matriz 3×3. Se copian las dos primeras columnas a la derecha, se suman los productos de las diagonales descendentes y se restan los productos de las diagonales ascendentes. Solo funciona para 3×3.' },
  { q: '¿Cómo se relacionan el determinante y el área?', a: 'Para una matriz 2×2 formada por dos vectores u y v, el valor absoluto del determinante es el área del paralelogramo que forman. Para matrices 3×3, es el volumen del paralelepípedo formado por los tres vectores.' },
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

export function ArticuloDetsArtFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre determinantes
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
