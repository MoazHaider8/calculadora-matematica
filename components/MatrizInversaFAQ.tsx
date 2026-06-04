'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de matriz inversa?',
    a: 'Es una herramienta que calcula A⁻¹ para matrices cuadradas 2×2 y 3×3. También indica el determinante, el método usado y verifica el resultado con A · A⁻¹ = I.',
  },
  {
    q: '¿Qué matrices tienen inversa?',
    a: 'Solo las matrices cuadradas con determinante distinto de cero tienen inversa. Son las llamadas matrices invertibles. Las matrices singulares (det = 0) no tienen inversa.',
  },
  {
    q: '¿Qué significa que una matriz sea singular?',
    a: 'Una matriz singular tiene determinante igual a cero y no tiene inversa. Esto significa que al menos una fila o columna es dependiente linealmente de otra.',
  },
  {
    q: '¿Cómo se calcula la inversa de una matriz 2×2?',
    a: 'Para A = [[a,b],[c,d]], si det(A) = ad − bc ≠ 0, entonces A⁻¹ = (1/det) · [[d,−b],[−c,a]]. Se intercambian los elementos de la diagonal y se cambian los signos del resto.',
  },
  {
    q: '¿Qué relación hay entre determinante e inversa?',
    a: 'El determinante decide si existe la inversa. Si det(A) ≠ 0, la matriz tiene inversa. Si det(A) = 0, la matriz es singular y no tiene inversa. La fórmula de A⁻¹ siempre incluye 1/det en el denominador.',
  },
  {
    q: '¿Esta calculadora resuelve sistemas de ecuaciones?',
    a: 'Esta herramienta calcula A⁻¹. Para resolver sistemas lineales directamente, usa la Calculadora de Sistemas de Ecuaciones.',
  },
];

export function MatrizInversaFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="faq-inv-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2
          id="faq-inv-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Preguntas frecuentes sobre matriz inversa
        </h2>

        <div
          className="overflow-hidden rounded-2xl bg-white"
          style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
        >
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid #EEF4F7' : 'none' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal"
                aria-expanded={open === i}
              >
                <span className="text-sm font-bold" style={{ color: '#102a43' }}>{faq.q}</span>
                <span
                  className="shrink-0 text-base transition-transform"
                  style={{ color: '#D8A31A', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block' }}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed text-slate">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
