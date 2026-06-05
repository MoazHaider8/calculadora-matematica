'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Por qué no se pueden sumar los denominadores?', a: 'Los denominadores indican en cuántas partes está dividido el todo. Si tienes 1/2 y 1/3, son partes de unidades divididas de forma distinta. Para sumarlas debes convertirlas a la misma unidad de división (denominador común), igual que no puedes sumar metros con kilómetros sin convertir.' },
  { q: '¿Qué es el mínimo común múltiplo?', a: 'El MCM de dos números es el número más pequeño que es múltiplo de ambos. Para sumar fracciones con distintos denominadores, se usa como denominador común. Por ejemplo, el MCM de 4 y 6 es 12, no 24 (que sería el producto).' },
  { q: '¿Cuándo está una fracción completamente simplificada?', a: 'Cuando numerador y denominador no tienen ningún factor común distinto de 1, es decir, cuando su MCD es 1. Por ejemplo, 3/4 está simplificada (MCD=1), pero 6/8 no (MCD=2), y se simplifica a 3/4.' },
  { q: '¿Cómo se multiplican fracciones?', a: 'Multiplicando numeradores entre sí y denominadores entre sí: (a/b)×(c/d) = (a×c)/(b×d). No hace falta denominador común. Por ejemplo, 2/3 × 3/4 = 6/12 = 1/2.' },
  { q: '¿Cómo se divide entre una fracción?', a: 'Se multiplica por la fracción invertida (reciproca). (a/b) ÷ (c/d) = (a/b) × (d/c). Por ejemplo, 3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2.' },
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

export function ArticuloFracArtFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre fracciones
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
