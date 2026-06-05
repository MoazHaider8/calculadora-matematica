'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqSchema = [
  { q: '¿Qué diferencia hay entre varianza y desviación estándar?', a: 'La varianza mide la dispersión en unidades al cuadrado. La desviación estándar es la raíz cuadrada de la varianza y se expresa en las mismas unidades que los datos.' },
  { q: '¿Por qué la varianza muestral divide entre n-1?', a: 'Dividir entre n-1 en lugar de n corrige el sesgo al estimar la dispersión de una población a partir de una muestra. Es la corrección de Bessel.' },
  { q: '¿Cuándo se usa la desviación estándar poblacional?', a: 'Cuando tienes todos los datos del conjunto completo (la población). Si solo tienes una muestra, usa la desviación estándar muestral.' },
  { q: '¿Una desviación estándar alta es mala?', a: 'No necesariamente. Una desviación alta significa mayor dispersión, pero si eso es bueno o malo depende del contexto. En algunos análisis se busca dispersión alta.' },
  { q: '¿La varianza puede ser negativa?', a: 'No. La varianza siempre es cero o positiva porque se calcula elevando al cuadrado las diferencias respecto a la media.' },
  { q: '¿Puedo calcular varianza y desviación estándar con una calculadora?', a: 'Sí. La calculadora de desviación estándar de calculadoramatematica.com calcula varianza poblacional, varianza muestral y ambas desviaciones estándar.' },
];

export function ArticuloVarianzaFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white py-8 lg:py-10" aria-labelledby="faq-var-h">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-var-h" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Preguntas frecuentes sobre varianza y desviación estándar</h2>
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
                  {i === 5 ? (<>Sí. La{' '}<Link href="/calculadoras/estadistica/calculadora-de-desviacion-estandar" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>calculadora de desviación estándar</Link>{' '}calcula varianza poblacional, varianza muestral y ambas desviaciones estándar.</>) : f.a}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
