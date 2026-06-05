'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqSchema = [
  { q: '¿Qué es el volumen?', a: 'El volumen mide el espacio que ocupa un sólido tridimensional. Se expresa en unidades cúbicas como cm³, m³ o litros.' },
  { q: '¿Cuál es la fórmula del volumen de un cilindro?', a: 'El volumen del cilindro es V = π × r² × h, donde r es el radio de la base y h es la altura.' },
  { q: '¿Cómo se calcula el volumen de una esfera?', a: 'El volumen de la esfera es V = (4/3) × π × r³, donde r es el radio.' },
  { q: '¿Por qué el cono y la pirámide se dividen entre 3?', a: 'Porque el cono y la pirámide tienen exactamente un tercio del volumen del prisma o cilindro equivalente con la misma base y altura.' },
  { q: '¿En qué unidades se expresa el volumen?', a: 'El volumen se expresa en unidades cúbicas: cm³, m³, km³, litros, etc. Si las dimensiones están en metros, el volumen está en metros cúbicos.' },
  { q: '¿Puedo calcular el volumen con una calculadora?', a: 'Sí. La calculadora de volumen de calculadoramatematica.com calcula el volumen de los sólidos más comunes a partir de sus dimensiones.' },
];

export function ArticuloVolumenFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="faq-vol-h">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-vol-h" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Preguntas frecuentes sobre fórmulas de volumen</h2>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqSchema.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }}
        />
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
                  {i === 5 ? (
                    <>Sí. La{' '}<Link href="/calculadoras/geometria/calculadora-de-volumen" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>calculadora de volumen</Link>{' '}calcula el volumen de los sólidos más comunes a partir de sus dimensiones.</>
                  ) : f.a}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
