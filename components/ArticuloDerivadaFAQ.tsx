'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqSchema = [
  { q: '¿Qué es una derivada?', a: 'Una derivada mide cómo cambia el valor de una función cuando su variable cambia. Indica la tasa de cambio instantánea en cada punto.' },
  { q: '¿Para qué sirve la derivada?', a: 'La derivada se usa para calcular velocidades instantáneas, optimizar funciones (máximos y mínimos), encontrar la pendiente de una curva y analizar tasas de cambio.' },
  { q: '¿Cuál es la derivada de x²?', a: 'La derivada de x² es 2x. Se aplica la regla de la potencia: el exponente baja como coeficiente y se resta 1 al exponente.' },
  { q: '¿La derivada de una constante es 0?', a: 'Sí. Una constante no varía con x, por lo que su tasa de cambio es cero. d/dx [c] = 0 para cualquier constante c.' },
  { q: '¿Qué diferencia hay entre una función y su derivada?', a: 'La función f(x) describe los valores de salida según x. Su derivada f\'(x) describe la pendiente o tasa de cambio de esa función en cada punto.' },
  { q: '¿Puedo calcular derivadas con una calculadora?', a: 'Sí. La calculadora de derivadas de calculadoramatematica.com resuelve funciones polinomiales y trigonométricas con el procedimiento paso a paso.' },
];

export function ArticuloDerivadaFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="faq-deriv-h">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-deriv-h" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Preguntas frecuentes sobre derivadas</h2>
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
                  {i === 5 ? (<>Sí. La{' '}<Link href="/calculadoras/calculo/calculadora-de-derivadas" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>calculadora de derivadas</Link>{' '}resuelve funciones polinomiales y trigonométricas con el procedimiento paso a paso.</>) : f.a}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
