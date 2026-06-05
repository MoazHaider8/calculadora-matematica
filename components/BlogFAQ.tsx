'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: '¿Qué encontraré en el blog?',
    a: 'Guías, fórmulas, ejemplos y explicaciones paso a paso sobre aritmética, álgebra, cálculo, estadística, geometría y matrices y vectores. Cada artículo explica conceptos matemáticos de forma clara y práctica.',
  },
  {
    q: '¿El blog reemplaza a las calculadoras?',
    a: 'No. El blog enseña conceptos y fórmulas. Las calculadoras resuelven el cálculo. Son complementarios: puedes leer una guía para entender el procedimiento y luego usar la calculadora para resolver tu caso concreto.',
  },
  {
    q: '¿Los artículos tendrán ejemplos paso a paso?',
    a: 'Sí. Cada artículo incluirá ejemplos con pasos explicados para que puedas seguir el procedimiento y entenderlo, no solo copiar el resultado.',
  },
  {
    q: '¿Cada artículo tendrá una calculadora relacionada?',
    a: 'En la mayoría de los casos, sí. Cada guía estará vinculada a la calculadora más relevante para que puedas pasar del concepto al cálculo de forma directa.',
  },
  {
    q: '¿Puedo sugerir un tema para el blog?',
    a: null,
  },
  {
    q: '¿Por qué usar /blog y no /blogs?',
    a: 'Usamos /blog porque es la estructura más clara y habitual para un centro de artículos. Cada publicación individual tendrá su propia URL dentro de /blog.',
  },
];

export function BlogFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-blog-heading">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-blog-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre el blog
        </h2>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(f => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f.a ?? 'Sí. Puedes enviar tu sugerencia a través de la página de contacto en calculadoramatematica.com/contacto.',
                },
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
                  <span className="text-sm font-bold text-ink">{f.q}</span>
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
                      Sí. Puedes enviar tu sugerencia a través de la{' '}
                      <Link href="/contacto" className="font-semibold underline underline-offset-2 transition-colors" style={{ color: '#147c7c' }}>
                        página de contacto
                      </Link>
                      .
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
