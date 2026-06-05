'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿La desviación estándar puede ser negativa?', a: 'No. La desviación estándar es siempre mayor o igual a cero. Es la raíz cuadrada de la varianza, que es una suma de cuadrados, por lo que nunca puede ser negativa. Si da cero, todos los datos son iguales.' },
  { q: '¿Cuál es la diferencia entre desviación estándar y varianza?', a: 'La varianza es el promedio de los cuadrados de las diferencias respecto a la media. La desviación estándar es la raíz cuadrada de la varianza. La desviación es más fácil de interpretar porque está en las mismas unidades que los datos.' },
  { q: '¿Qué significa una desviación estándar de 0?', a: 'Significa que todos los datos tienen exactamente el mismo valor y no hay dispersión. Por ejemplo, si las calificaciones son 8, 8, 8, 8, 8, la media es 8 y la desviación estándar es 0.' },
  { q: '¿Cómo sé si una desviación estándar es alta o baja?', a: 'Hay que compararla con la media. Si σ es pequeña en proporción a la media, la dispersión es baja. El coeficiente de variación (CV = σ/media × 100) facilita esta comparación entre conjuntos con distintas unidades o escalas.' },
  { q: '¿Para qué sirve la desviación estándar en la práctica?', a: 'Se usa en control de calidad (para detectar piezas fuera de tolerancia), en finanzas (para medir el riesgo de una inversión), en estadística inferencial (para construir intervalos de confianza) y en muchas otras áreas.' },
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

export function ArticuloDesvEstFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre la desviación estándar
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
