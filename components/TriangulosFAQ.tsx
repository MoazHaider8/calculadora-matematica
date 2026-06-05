'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de triángulos?',
    a: 'Es una herramienta que permite calcular medidas de triángulos a partir de los datos disponibles: área con base y altura, perímetro y área con tres lados usando la fórmula de Herón, tercer ángulo con dos ángulos conocidos, y todas las medidas de un triángulo equilátero.',
  },
  {
    q: '¿Qué datos necesito para calcular un triángulo?',
    a: 'Depende del cálculo. Para el área con base y altura necesitas ambas medidas. Para usar la fórmula de Herón necesitas los tres lados. Para el tercer ángulo necesitas dos ángulos. Para el triángulo equilátero solo necesitas la longitud del lado.',
  },
  {
    q: '¿Cómo se calcula el área de un triángulo?',
    a: 'Con la base y la altura, el área es igual a base multiplicada por altura dividida entre 2. Con los tres lados se usa la fórmula de Herón: A = √(s(s-a)(s-b)(s-c)), donde s es el semiperímetro.',
  },
  {
    q: '¿Qué es la fórmula de Herón?',
    a: 'La fórmula de Herón permite calcular el área de un triángulo cuando se conocen los tres lados, sin necesidad de saber la altura. Se calcula a partir del semiperímetro s = (a + b + c) / 2 con la fórmula A = √(s(s-a)(s-b)(s-c)).',
  },
  {
    q: '¿Cómo saber si tres lados forman un triángulo?',
    a: 'Para que tres lados formen un triángulo válido, la suma de cualquier par de lados debe ser mayor que el tercer lado. Si no se cumple esta condición, los lados no pueden formar un triángulo y la calculadora muestra un mensaje de error.',
  },
  {
    q: '¿Esta calculadora reemplaza la calculadora de Pitágoras?',
    a: 'Esta herramienta calcula medidas generales de triángulos. Para encontrar catetos o hipotenusa en triángulos rectángulos, usa la calculadora de Pitágoras cuando esté disponible.',
  },
];

export function TriangulosFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-tri-heading">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-tri-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre triángulos
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
