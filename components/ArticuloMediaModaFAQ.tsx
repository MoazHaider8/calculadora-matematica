'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqSchema = [
  { q: '¿Qué es la media estadística?', a: 'La media es el promedio aritmético: la suma de todos los valores dividida entre la cantidad. Representa el valor central de un conjunto de datos.' },
  { q: '¿Qué es la mediana?', a: 'La mediana es el valor que queda en el centro al ordenar los datos de menor a mayor. No se ve afectada por valores extremos.' },
  { q: '¿Qué es la moda?', a: 'La moda es el valor que aparece con mayor frecuencia en el conjunto. Un conjunto puede tener una moda, varias o ninguna.' },
  { q: '¿Cuándo es mejor usar la mediana que la media?', a: 'Cuando hay valores extremos que alejarían la media del resto de los datos. Por ejemplo, en salarios o precios de viviendas, la mediana es más representativa.' },
  { q: '¿Pueden ser iguales la media y la mediana?', a: 'Sí. En distribuciones simétricas, como la curva normal, la media y la mediana coinciden.' },
  { q: '¿Puedo calcular media, mediana y moda con una calculadora?', a: 'Sí. La calculadora de estadística de calculadoramatematica.com calcula las tres medidas y otros estadísticos al mismo tiempo.' },
];

export function ArticuloMediaModaFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white py-8 lg:py-10" aria-labelledby="faq-mmd-h">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-mmd-h" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Preguntas frecuentes sobre media, mediana y moda</h2>
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
                  {i === 5 ? (<>Sí. La{' '}<Link href="/calculadoras/estadistica/calculadora-de-estadistica" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>calculadora de estadística</Link>{' '}calcula las tres medidas y otros estadísticos al mismo tiempo.</>) : f.a}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
