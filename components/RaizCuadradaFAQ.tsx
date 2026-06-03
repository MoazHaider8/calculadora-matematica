'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de raíz cuadrada?',
    a: 'Es una herramienta que calcula el número que elevado al cuadrado produce el radicando. Por ejemplo, √25 = 5 porque 5² = 25.',
  },
  {
    q: '¿Cómo se calcula la raíz cuadrada de un número?',
    a: 'Se busca el número que multiplicado por sí mismo produce el radicando. Para cuadrados perfectos, el resultado es un entero exacto. Para otros números, se muestra la aproximación decimal.',
  },
  {
    q: '¿Qué es un cuadrado perfecto?',
    a: 'Un cuadrado perfecto es un número entero que tiene raíz cuadrada exacta entera. Los primeros son 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.',
  },
  {
    q: '¿Qué pasa si el número no tiene raíz exacta?',
    a: 'Cuando el número no es un cuadrado perfecto, la calculadora muestra la aproximación decimal con diez cifras significativas y, cuando es posible, la forma simplificada del radical.',
  },
  {
    q: '¿Puedo calcular la raíz cuadrada de un número negativo?',
    a: 'En los números reales, la raíz cuadrada de un número negativo no existe. La calculadora mostrará un mensaje indicando que no hay resultado real.',
  },
  {
    q: '¿Qué diferencia hay entre esta herramienta y la calculadora de raíces?',
    a: 'Esta herramienta se enfoca solo en raíz cuadrada. La calculadora de raíces permite trabajar con raíz cúbica, cuarta y raíces con índice personalizado.',
  },
];

export function RaizCuadradaFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="faq-raizc-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2
          id="faq-raizc-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Preguntas frecuentes sobre raíz cuadrada
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
