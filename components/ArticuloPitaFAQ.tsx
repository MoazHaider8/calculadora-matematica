'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqSchema = [
  { q: '¿Qué es el teorema de Pitágoras?', a: 'El teorema de Pitágoras establece que en un triángulo rectángulo el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los dos catetos: c² = a² + b².' },
  { q: '¿Qué es la hipotenusa?', a: 'La hipotenusa es el lado más largo del triángulo rectángulo y el que se opone al ángulo de 90°.' },
  { q: '¿Cómo se calcula la hipotenusa?', a: 'Se elevan al cuadrado los dos catetos, se suman y se saca la raíz cuadrada del resultado. c = √(a² + b²).' },
  { q: '¿Se puede calcular un cateto con el teorema de Pitágoras?', a: 'Sí. Si conoces la hipotenusa y un cateto, el otro cateto es: a = √(c² - b²).' },
  { q: '¿El teorema de Pitágoras aplica en cualquier triángulo?', a: 'No. Solo aplica en triángulos rectángulos, los que tienen exactamente un ángulo de 90°.' },
  { q: '¿Puedo resolver Pitágoras con una calculadora?', a: 'Sí. La calculadora de Pitágoras de calculadoramatematica.com resuelve hipotenusa y catetos a partir de los valores que introduces.' },
];

export function ArticuloPitaFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white py-8 lg:py-10" aria-labelledby="faq-pita-h">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-pita-h" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Preguntas frecuentes sobre el teorema de Pitágoras</h2>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqSchema.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }}
        />
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
                  {i === 5 ? (
                    <>Sí. La{' '}<Link href="/calculadoras/geometria/calculadora-de-pitagoras" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>calculadora de Pitágoras</Link>{' '}resuelve hipotenusa y catetos a partir de los valores que introduces.</>
                  ) : f.a}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
