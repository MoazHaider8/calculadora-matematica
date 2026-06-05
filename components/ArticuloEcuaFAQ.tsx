'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Qué diferencia hay entre una ecuación y una expresión algebraica?', a: 'Una expresión algebraica como 3x + 2 no tiene solución porque no hay igualdad. Una ecuación como 3x + 2 = 8 sí tiene solución porque establece que los dos lados son iguales.' },
  { q: '¿Cuándo se usa la fórmula cuadrática?', a: 'Se usa cuando la ecuación tiene la forma ax² + bx + c = 0 y no factoriza fácilmente. La fórmula x = (−b ± √(b² − 4ac)) / (2a) siempre da la solución si existe.' },
  { q: '¿Una ecuación cuadrática siempre tiene dos soluciones?', a: 'No siempre. Si el discriminante b² − 4ac es positivo, hay dos soluciones reales distintas. Si es cero, hay una sola solución (raíz doble). Si es negativo, no hay soluciones reales.' },
  { q: '¿Cómo sé si resolví bien la ecuación?', a: 'Sustituye el valor encontrado en la ecuación original. Si ambos lados dan el mismo número, la solución es correcta. Este paso de comprobación es siempre necesario.' },
  { q: '¿Qué es una ecuación sin solución?', a: 'Una ecuación no tiene solución cuando llega a una contradicción como 5 = 0. Eso significa que no existe ningún valor de x que haga verdadera la igualdad.' },
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

export function ArticuloEcuaFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre ecuaciones
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
