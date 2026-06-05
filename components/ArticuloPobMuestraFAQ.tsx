'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Cuándo usamos muestra en lugar de población?', a: 'Cuando no es posible o práctico estudiar a todos los individuos. Si la población es muy grande o el acceso es limitado, se toma una muestra representativa y se estiman las características del total.' },
  { q: '¿Qué diferencia hay entre N y n?', a: 'N es el tamaño de la población completa y n es el tamaño de la muestra. En fórmulas estadísticas, cuando se trabaja con la muestra se usa n y cuando se trabaja con la población se usa N.' },
  { q: '¿Por qué se usa n−1 en la varianza muestral?', a: 'La corrección n−1 (corrección de Bessel) evita la subestimación de la varianza. Si usáramos n, la varianza muestral sería sistemáticamente menor que la real. Con n−1 la estimación es insesgada.' },
  { q: '¿Cómo se selecciona una muestra representativa?', a: 'El método más común es el muestreo aleatorio simple, donde cada individuo tiene la misma probabilidad de ser elegido. También existen el estratificado (dividir en grupos) y el sistemático (elegir cada k elementos).' },
  { q: '¿Puede la muestra ser más grande que la población?', a: 'No. La muestra siempre es un subconjunto de la población, por lo que n es menor o igual a N. Si n = N, se está estudiando la población completa, no una muestra.' },
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

export function ArticuloPobMuestraFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre población y muestra
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
