'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqSchema = [
  { q: '¿Qué es el área de una figura?', a: 'El área es la medida de la superficie encerrada por una figura plana. Se expresa en unidades cuadradas como cm² o m².' },
  { q: '¿Cuál es la fórmula del área del triángulo?', a: 'El área del triángulo es A = (base × altura) / 2. La altura es la distancia perpendicular desde el vértice hasta la base.' },
  { q: '¿Cómo se calcula el área del círculo?', a: 'El área del círculo es A = π × r², donde r es el radio. Si el enunciado da el diámetro, divide entre 2 para obtener el radio primero.' },
  { q: '¿En qué unidades se expresa el área?', a: 'El área se expresa en unidades cuadradas: cm², m², km², etc. Si la base está en metros y la altura en metros, el área está en metros cuadrados.' },
  { q: '¿Qué diferencia hay entre área y perímetro?', a: 'El perímetro es la longitud del contorno de la figura (suma de todos sus lados). El área mide la superficie interior.' },
  { q: '¿Puedo calcular el área con una calculadora?', a: 'Sí. La calculadora de área de calculadoramatematica.com calcula el área de las figuras más comunes a partir de sus dimensiones.' },
];

export function ArticuloAreaFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="faq-area-h">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-area-h" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Preguntas frecuentes sobre fórmulas de área</h2>
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
                    <>Sí. La{' '}<Link href="/calculadoras/geometria/calculadora-de-area" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>calculadora de área</Link>{' '}calcula el área de las figuras más comunes a partir de sus dimensiones.</>
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
