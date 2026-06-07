'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es Calculadora Matemática?',
    a: 'Calculadora Matemática es una plataforma de herramientas matemáticas online en español. Ofrece calculadoras organizadas por categoría para cálculo, álgebra, aritmética, estadística, geometría y matrices y vectores.',
  },
  {
    q: '¿Las calculadoras son gratuitas?',
    a: 'Sí. Todas las herramientas disponibles en el sitio son de acceso gratuito.',
  },
  {
    q: '¿Qué tipos de calculadoras ofrece el sitio?',
    a: 'El sitio incluye calculadoras de cálculo (integrales, derivadas, límites), álgebra (ecuaciones, polinomios), aritmética (fracciones, porcentajes), estadística (media, varianza), geometría (áreas, volúmenes, triángulos, círculos, Pitágoras) y matrices y vectores. El directorio completo está disponible en la sección Calculadoras.',
  },
  {
    q: '¿Los resultados muestran pasos?',
    a: 'Muchas calculadoras muestran la fórmula aplicada, la sustitución de valores y el procedimiento paso a paso. El nivel de detalle varía según la herramienta.',
  },
  {
    q: '¿Puedo usar estas herramientas para estudiar?',
    a: 'Sí. Las calculadoras están diseñadas con uso educativo en mente. Muestran fórmulas y procedimientos para que puedas entender el proceso, no solo obtener un número.',
  },
  {
    q: '¿Cómo puedo reportar un error o sugerir una calculadora?',
    a: 'Puedes usar la página de contacto para enviar consultas, reportar errores o sugerir nuevas herramientas. Está disponible en la sección Contacto del sitio.',
  },
];

export function SobreFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white py-8 lg:py-11" aria-labelledby="faq-sobre-heading">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-sobre-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre Calculadora Matemática
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
                  {f.a}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
