'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Cómo sé si una ecuación es lineal o cuadrática?', a: 'Si la incógnita tiene como máximo exponente 1 (no aparece x²), es lineal. Si aparece x² (aunque no haya término x), es cuadrática. Por ejemplo, 2x + 1 = 9 es lineal; x² + 3 = 12 es cuadrática aunque no tenga término en x.' },
  { q: '¿La ecuación cuadrática siempre tiene dos soluciones?', a: 'No. Tiene 0, 1 o 2 soluciones reales. El discriminante (b² − 4ac) indica cuántas: si es positivo hay dos soluciones, si es cero hay una solución doble, y si es negativo no hay soluciones reales (hay soluciones complejas).' },
  { q: '¿Qué es el discriminante?', a: 'El discriminante es la expresión b² − 4ac de la fórmula cuadrática. Se calcula antes de resolver la ecuación para saber cuántas soluciones reales tiene. Si da negativo, no tiene raíces reales y no necesitas continuar si solo buscas soluciones en los reales.' },
  { q: '¿Puedo resolver x² − 9 = 0 sin la fórmula?', a: 'Sí. Despeja directamente: x² = 9 → x = ±√9 = ±3. Esta técnica funciona cuando no hay término en x (b = 0). Las dos soluciones son 3 y −3.' },
  { q: '¿Qué significa que la gráfica de una cuadrática es una parábola?', a: 'La parábola es la forma en U (o U invertida) que toma la gráfica de ax² + bx + c = 0. Los puntos donde corta al eje horizontal (eje x) son las soluciones de la ecuación. Si no corta al eje x, no hay soluciones reales.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export function ArticuloEcLinCuadFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre ecuaciones lineales y cuadráticas
        </h2>
        <dl className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl bg-white" style={{ border: '1px solid #D7E2EA' }}>
              <dt>
                <button
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-bold text-ink">{faq.q}</span>
                  <span className="mt-0.5 shrink-0 text-base font-bold" style={{ color: '#147c7c' }}>
                    {open === i ? '−' : '+'}
                  </span>
                </button>
              </dt>
              {open === i && (
                <dd className="px-5 pb-5">
                  <p className="text-sm leading-relaxed text-slate">{faq.a}</p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
