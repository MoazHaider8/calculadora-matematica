'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Siempre suman 180° los ángulos de un triángulo?', a: 'Sí, en geometría plana (euclidiana). La suma de los tres ángulos interiores de cualquier triángulo es siempre 180°. Esto se cumple independientemente del tipo de triángulo.' },
  { q: '¿Qué es la altura de un triángulo?', a: 'La altura es la línea perpendicular trazada desde un vértice hasta el lado opuesto (la base). No es el lado oblicuo. Para calcular el área se necesita la altura, no el lado inclinado.' },
  { q: '¿Cuándo se usa el teorema de Pitágoras?', a: 'Solo en triángulos rectángulos (con un ángulo de 90°). La fórmula c² = a² + b² relaciona los catetos (a y b) con la hipotenusa (c). Para triángulos sin ángulo recto se usa la ley de cosenos.' },
  { q: '¿Todo triángulo equilátero es isósceles?', a: 'Sí. Un triángulo equilátero tiene los tres lados iguales, por lo que cumple la condición del isósceles (al menos dos lados iguales). Pero no todo isósceles es equilátero.' },
  { q: '¿Qué es la fórmula de Herón?', a: 'La fórmula de Herón calcula el área de un triángulo conociendo solo los tres lados, sin necesitar la altura. A = √(s(s−a)(s−b)(s−c)) donde s = (a+b+c)/2 es el semiperímetro.' },
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

export function ArticuloTriangulosFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre triángulos
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
