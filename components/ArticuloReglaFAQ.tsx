'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: '¿Qué es la regla de tres?',
    a: 'La regla de tres es un método para encontrar un valor desconocido a partir de tres valores conocidos que mantienen una relación de proporcionalidad. Se usa cuando dos magnitudes varían de forma relacionada.',
  },
  {
    q: '¿Cuándo se usa la regla de tres directa?',
    a: 'Se usa cuando las dos magnitudes van en el mismo sentido: si una aumenta, la otra también aumenta. Por ejemplo, más artículos comprados implica mayor precio total.',
  },
  {
    q: '¿Cuándo se usa la regla de tres inversa?',
    a: 'Se usa cuando las magnitudes van en sentido opuesto: si una aumenta, la otra disminuye. Por ejemplo, más trabajadores implica menos días para terminar una tarea.',
  },
  {
    q: '¿Cuál es la fórmula de la regla de tres directa?',
    a: 'La fórmula es x = (b × c) / a, donde a y b son la pareja conocida, c es el otro valor conocido y x es el valor que buscas.',
  },
  {
    q: '¿Cuál es la fórmula de la regla de tres inversa?',
    a: 'La fórmula es x = (a × b) / c. En la inversa, los valores de la segunda magnitud se invierten antes de plantear la proporción.',
  },
  {
    q: null,
    a: null,
  },
];

const faqSchema = [
  { q: '¿Qué es la regla de tres?', a: 'La regla de tres es un método para encontrar un valor desconocido a partir de tres valores conocidos que mantienen una relación de proporcionalidad.' },
  { q: '¿Cuándo se usa la regla de tres directa?', a: 'Se usa cuando las dos magnitudes van en el mismo sentido: si una aumenta, la otra también aumenta.' },
  { q: '¿Cuándo se usa la regla de tres inversa?', a: 'Se usa cuando las magnitudes van en sentido opuesto: si una aumenta, la otra disminuye.' },
  { q: '¿Cuál es la fórmula de la regla de tres directa?', a: 'x = (b × c) / a, donde a y b son la pareja conocida, c es el otro valor conocido y x es el valor buscado.' },
  { q: '¿Cuál es la fórmula de la regla de tres inversa?', a: 'x = (a × b) / c. En la inversa los valores de la segunda magnitud se invierten antes de plantear la proporción.' },
  { q: '¿Puedo usar una calculadora para la regla de tres?', a: 'Sí. La calculadora de regla de tres de calculadoramatematica.com resuelve casos directos e inversos con los tres valores que introduces.' },
];

export function ArticuloReglaFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white py-8 lg:py-10" aria-labelledby="faq-regla-h">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-regla-h" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre la regla de tres
        </h2>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqSchema.map(f => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />

        <dl className="mx-auto max-w-3xl divide-y divide-line">
          {faqs.map((f, i) => (
            <div key={i} className="py-4">
              <dt>
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-bold text-ink">
                    {f.q ?? '¿Puedo usar una calculadora para la regla de tres?'}
                  </span>
                  <span
                    className="shrink-0 text-teal transition-transform duration-200"
                    style={{ transform: open === i ? 'rotate(180deg)' : 'none' }}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>
              </dt>
              {open === i && (
                <dd className="mt-3 text-sm leading-relaxed text-slate">
                  {f.a !== null ? (
                    f.a
                  ) : (
                    <>
                      Sí. La{' '}
                      <Link
                        href="/calculadoras/aritmetica/calculadora-de-regla-de-tres"
                        className="font-semibold underline underline-offset-2"
                        style={{ color: '#147c7c' }}
                      >
                        calculadora de regla de tres
                      </Link>{' '}
                      resuelve casos directos e inversos con los tres valores que introduces.
                    </>
                  )}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
