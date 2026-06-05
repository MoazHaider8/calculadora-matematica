'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de probabilidad?',
    a: 'Una herramienta que calcula la probabilidad de eventos a partir de valores numéricos. Esta calculadora cubre probabilidad simple, complemento, unión, intersección y al menos uno en varios intentos.',
  },
  {
    q: '¿Cómo se calcula la probabilidad simple?',
    a: 'Se divide el número de casos favorables entre el total de casos posibles. Ejemplo: 3 favorables de 10 posibles da P(A) = 0.3.',
  },
  {
    q: '¿Qué es el complemento de un evento?',
    a: "El complemento es la probabilidad de que el evento no ocurra. Se calcula como P(A') = 1 − P(A). La suma de ambos siempre es 1.",
  },
  {
    q: '¿Cuándo se usa la unión de eventos?',
    a: 'Cuando quieres la probabilidad de que ocurra A, o B, o ambos. Fórmula: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).',
  },
  {
    q: '¿Qué significa que dos eventos sean independientes?',
    a: 'Que la ocurrencia de uno no afecta al otro. En ese caso P(A ∩ B) = P(A) × P(B). Esta calculadora asume independencia en el modo intersección.',
  },
  {
    q: '¿Esta calculadora calcula probabilidad condicional?',
    a: 'No. Esta herramienta cubre los tipos más habituales en educación básica. La probabilidad condicional P(A|B) no está incluida en esta versión.',
  },
];

export function ProbabilidadFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="faq-prob-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 id="faq-prob-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre probabilidad
        </h2>
        <dl className="flex flex-col gap-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl"
                style={{ border: '1px solid #D7E2EA' }}
              >
                <dt>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                    style={{ background: isOpen ? '#F0FAF9' : '#F8FAFC' }}
                  >
                    <span className="text-sm font-bold text-ink">{faq.q}</span>
                    <svg
                      className="shrink-0 transition-transform duration-200"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: '#147c7c' }}
                      width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                    >
                      <polyline points="3,6 8,11 13,6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </dt>
                {isOpen && (
                  <dd className="border-t px-6 py-4 text-sm leading-relaxed text-slate" style={{ borderColor: '#EEF4F7' }}>
                    {faq.a}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
