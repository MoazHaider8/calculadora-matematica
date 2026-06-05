'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Cuándo se pueden sumar dos términos algebraicos?', a: 'Solo cuando son términos semejantes: tienen la misma variable elevada al mismo exponente. 3x² y 5x² se pueden sumar (= 8x²), pero 3x² y 5x no, porque tienen grados distintos.' },
  { q: '¿Qué pasa cuando hay un signo negativo delante de un paréntesis?', a: 'El signo negativo se distribuye sobre todos los términos dentro del paréntesis, cambiando cada signo. Por ejemplo, −(2x − 3) = −2x + 3.' },
  { q: '¿Se puede simplificar (x + 5) / (x + 3)?', a: 'No. Solo se pueden cancelar factores multiplicativos, no términos sumados. Para simplificar una fracción algebraica, hay que factorizar primero y luego cancelar los factores comunes.' },
  { q: '¿Qué es factorizar una expresión?', a: 'Factorizar es escribir una expresión como un producto de factores más simples. Por ejemplo, x² − 4 = (x+2)(x−2). Es el proceso opuesto a expandir con la distributiva.' },
  { q: '¿Qué significa simplificar una expresión algebraica?', a: 'Significa escribirla de la forma más corta posible sin cambiar su valor. Se consigue combinando términos semejantes, aplicando la propiedad distributiva y cancelando factores en fracciones.' },
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

export function ArticuloAlgSimplFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre simplificación algebraica
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
