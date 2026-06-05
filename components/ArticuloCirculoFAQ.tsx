'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Cuál es la diferencia entre el área y la circunferencia de un círculo?', a: 'El área mide el espacio interior del círculo (en cm², m², etc.). La circunferencia mide el contorno, la longitud del borde (en cm, m, etc.). Una es superficie y la otra es longitud.' },
  { q: '¿Se puede usar el diámetro directamente en la fórmula del área?', a: 'La fórmula A = πr² usa el radio. Si tienes el diámetro, divídelo entre 2 para obtener el radio. También puedes usar A = π(d/2)² = πd²/4, pero es mejor despejar r primero.' },
  { q: '¿Para qué sirve π exactamente?', a: 'Pi (π) es la relación entre la circunferencia y el diámetro de cualquier círculo: π = C/d. Es una constante universal que vale aproximadamente 3.14159. Es irracional, sus decimales no terminan.' },
  { q: '¿Qué es el arco de un círculo?', a: 'Un arco es una parte del contorno del círculo. La circunferencia completa corresponde a 360°. Un arco de 90° es un cuarto de la circunferencia: arco = (ángulo/360°) × 2πr.' },
  { q: '¿Hay diferencia entre círculo y circunferencia?', a: 'En matemáticas sí. La circunferencia es solo el contorno (la línea curva). El círculo incluye también el interior. En el uso cotidiano se usan de forma intercambiable, pero en geometría la distinción es importante.' },
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

export function ArticuloCirculoFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre el círculo
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
