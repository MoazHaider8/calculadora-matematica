'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Puede una matriz tener solo una fila o una columna?', a: 'Sí. Una matriz con una sola fila se llama matriz fila (1×n) y una con una sola columna se llama matriz columna (m×1). Estas son la representación matricial de los vectores.' },
  { q: '¿Qué es la matriz identidad?', a: 'La matriz identidad I es la equivalente al número 1 en la multiplicación de matrices. Tiene unos en la diagonal principal y ceros en el resto. Al multiplicar cualquier matriz cuadrada A por I, el resultado es A.' },
  { q: '¿Por qué la multiplicación de matrices no es conmutativa?', a: 'Porque el orden en que se multiplican importa. A×B y B×A generalmente dan resultados distintos. Además, si A es 2×3 y B es 3×4, puedes calcular A×B pero no B×A con esas dimensiones.' },
  { q: '¿Todas las matrices cuadradas tienen inversa?', a: 'No. Solo las matrices cuadradas cuyo determinante es distinto de cero tienen inversa. Si det(A) = 0, la matriz es singular y no tiene inversa. Esto equivale a que las filas o columnas son linealmente dependientes.' },
  { q: '¿Para qué se usan las matrices en la práctica?', a: 'Las matrices se usan en gráficos por computadora (para rotar, escalar y trasladar objetos en 3D), en machine learning (para representar datos y parámetros), en redes eléctricas, en ingeniería estructural y en la resolución de sistemas de ecuaciones.' },
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

export function ArticuloMatrizArtFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre matrices
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
