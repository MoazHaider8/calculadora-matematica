'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqSchema = [
  { q: '¿Cómo se calcula el promedio?', a: 'Se suman todos los valores y se divide la suma entre la cantidad de valores. Promedio = suma / cantidad.' },
  { q: '¿Qué diferencia hay entre promedio y mediana?', a: 'El promedio es la suma dividida entre el total de valores. La mediana es el valor central cuando los datos están ordenados.' },
  { q: '¿Qué es el promedio ponderado?', a: 'El promedio ponderado asigna un peso diferente a cada valor. La fórmula es: suma de (valor × peso) / suma de pesos.' },
  { q: '¿El promedio puede ser mayor que todos los valores?', a: 'No. El promedio siempre está dentro del rango de los valores, entre el mínimo y el máximo del conjunto.' },
  { q: '¿Cómo afecta un valor extremo al promedio?', a: 'Un valor muy alto o muy bajo puede distorsionar el promedio. En esos casos, la mediana es una medida más representativa.' },
  { q: '¿Puedo usar una calculadora para el promedio?', a: 'Sí. La calculadora de promedio de calculadoramatematica.com calcula el promedio simple y ponderado con los valores que introduces.' },
];

export function ArticuloPromedioFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="faq-prom-h">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-prom-h" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Preguntas frecuentes sobre el promedio</h2>
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
                    <>Sí. La{' '}<Link href="/calculadoras/aritmetica/calculadora-de-promedio" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>calculadora de promedio</Link>{' '}calcula el promedio simple y ponderado con los valores que introduces.</>
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
