'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Un polinomio puede tener coeficiente cero?', a: 'Técnicamente sí, pero ese término no se escribe. El coeficiente cero elimina el término. Por ejemplo, 0x² en el polinomio x³ + 0x² + 2x − 1 simplemente se omite.' },
  { q: '¿Cuál es el grado de una constante como 5?', a: 'El grado de un polinomio constante es 0, porque 5 = 5·x⁰. La variable está elevada a la cero, y cualquier número elevado a cero es 1.' },
  { q: '¿Qué es el coeficiente líder de un polinomio?', a: 'Es el coeficiente del término con el mayor grado. En 4x³ − 2x + 1, el coeficiente líder es 4, que corresponde al término de mayor grado (x³).' },
  { q: '¿Se pueden dividir dos polinomios?', a: 'Sí. La división de polinomios da como resultado un cociente y un resto, similar a la división de números enteros. Se usa la división larga o el método de Ruffini para polinomios de grado 1.' },
  { q: '¿Qué son las raíces de un polinomio?', a: 'Las raíces son los valores de x que hacen que el polinomio sea igual a cero. Para P(x) = x² − 5x + 6, las raíces son x = 2 y x = 3, porque P(2) = 0 y P(3) = 0.' },
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

export function ArticuloPolinomiosFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre polinomios
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
