'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Qué matrices no tienen inversa?', a: 'Las matrices singulares, es decir, aquellas cuyo determinante es cero. También las matrices no cuadradas (rectangulares) no tienen inversa en el sentido estándar, aunque sí existe la pseudoinversa de Moore-Penrose para esos casos.' },
  { q: '¿Cómo verifico que calculé bien la inversa?', a: 'Multiplica A por A⁻¹ y comprueba que el resultado sea la matriz identidad I. Si A×A⁻¹ = I, la inversa es correcta. También puedes verificar con A⁻¹×A = I.' },
  { q: '¿La inversa de la inversa es la original?', a: 'Sí. (A⁻¹)⁻¹ = A. Si inviertes una transformación dos veces, vuelves al punto de partida.' },
  { q: '¿Qué relación hay entre la inversa y el determinante?', a: 'En la fórmula para matrices 2×2, se divide por el determinante. Si det = 0, la división es imposible y no existe la inversa. Para matrices más grandes, la inversa se expresa en términos del determinante y la matriz de cofactores.' },
  { q: '¿Por qué se usa la matriz inversa para resolver sistemas?', a: 'El sistema Ax = b se puede reescribir como x = A⁻¹b. Si conoces A⁻¹, puedes resolver el sistema con una multiplicación matricial. Es especialmente útil cuando tienes que resolver varios sistemas con la misma matriz A pero distintos vectores b.' },
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

export function ArticuloMatInvArtFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre la matriz inversa
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
