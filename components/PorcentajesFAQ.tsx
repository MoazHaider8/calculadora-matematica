'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de porcentajes?',
    a: 'Es una herramienta que resuelve seis tipos de cálculos porcentuales: obtener el porcentaje de un número, calcular qué porcentaje es una parte, aplicar aumento o descuento, calcular cambio porcentual y encontrar el total a partir de una parte.',
  },
  {
    q: '¿Cómo se calcula el porcentaje de un número?',
    a: 'Se multiplica el número por el porcentaje y se divide entre 100. Por ejemplo, 25% de 200 = 200 × 25 / 100 = 50.',
  },
  {
    q: '¿Cómo calculo un descuento?',
    a: 'Introduce el precio original y el porcentaje de descuento en el modo Descuento. La calculadora obtiene el importe del descuento y el precio final. Por ejemplo, 20% de descuento sobre 200 = 160 (descuento de 40).',
  },
  {
    q: '¿Cómo calculo un aumento porcentual?',
    a: 'Introduce el valor base y el porcentaje de aumento en el modo Aumento. La calculadora calcula el importe del aumento y el valor final. Por ejemplo, 200 con 15% de aumento = 230 (aumento de 30).',
  },
  {
    q: '¿Qué es el cambio porcentual?',
    a: 'El cambio porcentual mide cuánto ha variado un valor respecto a su valor inicial. Se calcula con (valor final − valor inicial) / valor inicial × 100. Un resultado positivo indica aumento y uno negativo indica disminución.',
  },
  {
    q: '¿Esta calculadora sirve para fracciones?',
    a: 'Esta herramienta trabaja con porcentajes. Para operar fracciones, usa la Calculadora de Fracciones.',
  },
];

export function PorcentajesFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="faq-pct-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2
          id="faq-pct-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Preguntas frecuentes sobre porcentajes
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
