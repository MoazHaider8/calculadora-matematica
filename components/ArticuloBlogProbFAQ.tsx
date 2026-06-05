'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqSchema = [
  { q: '¿Qué es la probabilidad?', a: 'La probabilidad es un número entre 0 y 1 que mide la posibilidad de que ocurra un evento. Se calcula dividiendo los casos favorables entre el total de casos posibles.' },
  { q: '¿Qué son los casos favorables?', a: 'Los casos favorables son los resultados del experimento que satisfacen la condición del evento. Por ejemplo, si el evento es "sacar número par en un dado", los casos favorables son 2, 4 y 6.' },
  { q: '¿Qué es un evento complementario?', a: 'El evento complementario es el opuesto del evento original. Si P(A) = 0.3, la probabilidad de que no ocurra A es P(no A) = 1 - 0.3 = 0.7.' },
  { q: '¿Qué diferencia hay entre unión e intersección?', a: 'La unión (A ∪ B) es la probabilidad de que ocurra A o B (o ambos). La intersección (A ∩ B) es la probabilidad de que ocurran A y B al mismo tiempo.' },
  { q: '¿Puede la probabilidad ser mayor que 1?', a: 'No. La probabilidad siempre está entre 0 (imposible) y 1 (seguro). Si el resultado sale mayor que 1, hay un error en los datos o en la fórmula usada.' },
  { q: '¿Puedo calcular probabilidades con una calculadora?', a: 'Sí. La calculadora de probabilidad de calculadoramatematica.com resuelve probabilidad simple, complementaria, unión, intersección y al menos uno.' },
];

export function ArticuloBlogProbFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="faq-bprob-h">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-bprob-h" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Preguntas frecuentes sobre probabilidad</h2>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqSchema.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
        <dl className="mx-auto max-w-3xl divide-y divide-line">
          {faqSchema.map((f, i) => (
            <div key={i} className="py-4">
              <dt>
                <button onClick={() => toggle(i)} className="flex w-full items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal" aria-expanded={open === i}>
                  <span className="text-sm font-bold text-ink">{f.q}</span>
                  <span className="shrink-0 text-teal transition-transform duration-200" style={{ transform: open === i ? 'rotate(180deg)' : 'none' }} aria-hidden="true">▾</span>
                </button>
              </dt>
              {open === i && (
                <dd className="mt-3 text-sm leading-relaxed text-slate">
                  {i === 5 ? (<>Sí. La{' '}<Link href="/calculadoras/estadistica/calculadora-de-probabilidad" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>calculadora de probabilidad</Link>{' '}resuelve probabilidad simple, complementaria, unión, intersección y al menos uno.</>) : f.a}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
