'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de Pitágoras?',
    a: 'Es una herramienta que calcula el lado faltante de un triángulo rectángulo usando el teorema de Pitágoras: a² + b² = c². Puedes calcular la hipotenusa a partir de los dos catetos, o un cateto a partir de la hipotenusa y el otro cateto.',
  },
  {
    q: '¿Cuándo se usa el teorema de Pitágoras?',
    a: 'El teorema de Pitágoras solo aplica en triángulos rectángulos, es decir, triángulos que tienen exactamente un ángulo de 90°. Se usa para encontrar un lado desconocido cuando se conocen los otros dos.',
  },
  {
    q: '¿Cómo calcular la hipotenusa?',
    a: 'Si conoces los dos catetos a y b, la hipotenusa se calcula con c = √(a² + b²). Eleva al cuadrado cada cateto, súmalos y aplica la raíz cuadrada al resultado.',
  },
  {
    q: '¿Cómo calcular un cateto?',
    a: 'Para encontrar el cateto a, usa a = √(c² - b²), donde c es la hipotenusa y b es el cateto conocido. Recuerda que la hipotenusa debe ser mayor que cualquiera de los catetos.',
  },
  {
    q: '¿Qué pasa si la hipotenusa es menor que un cateto?',
    a: 'Si la hipotenusa es menor o igual que uno de los catetos, no puede existir ningún triángulo rectángulo con esos valores. La calculadora muestra un error en ese caso.',
  },
  {
    q: '¿Esta calculadora reemplaza la calculadora de triángulos?',
    a: 'Esta herramienta se enfoca en triángulos rectángulos y el teorema de Pitágoras. Para área, perímetro, tipo de triángulo o fórmula de Herón, usa la calculadora de triángulos.',
  },
];

export function PitagorasFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-pit-heading">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-pit-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre Pitágoras
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
