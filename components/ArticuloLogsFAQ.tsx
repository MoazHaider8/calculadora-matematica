'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Cuál es la diferencia entre log y ln?', a: 'log (sin base indicada) es el logaritmo en base 10. ln es el logaritmo natural, en base e (≈ 2.718). Ambos siguen las mismas reglas, solo cambia la base.' },
  { q: '¿Por qué log(0) no existe?', a: 'Porque no hay ninguna potencia a la que puedas elevar la base para obtener 0. El logaritmo solo está definido para números estrictamente positivos.' },
  { q: '¿Cuándo se usa el cambio de base?', a: 'Cuando necesitas calcular un logaritmo en una base que no tiene tecla en la calculadora. Por ejemplo, log₇(50) = log(50)/log(7) ≈ 2.03.' },
  { q: '¿Cuál es la relación entre logaritmos y exponentes?', a: 'Son operaciones inversas. log_b(x) = n significa lo mismo que bⁿ = x. El logaritmo pregunta el exponente, la potencia da el resultado.' },
  { q: '¿Se puede simplificar log(A + B)?', a: 'No. La regla del producto es log(A · B) = log A + log B, no log(A + B). Si los argumentos están sumados dentro del logaritmo, no hay una regla que los separe.' },
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

export function ArticuloLogsFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre logaritmos
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
