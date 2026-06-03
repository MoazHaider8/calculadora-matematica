'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de raíces?',
    a: 'Es una herramienta que calcula la raíz de un número dado un radicando y un índice. Dado el número 27 con índice 3, calcula la raíz cúbica y devuelve 3, con comprobación incluida.',
  },
  {
    q: '¿Qué diferencia hay entre raíz cúbica y raíz cuadrada?',
    a: 'La raíz cuadrada tiene índice 2 y busca el número que al cuadrado produce el radicando. La raíz cúbica tiene índice 3 y busca el número que al cubo produce el radicando. Esta calculadora trabaja con ambos índices y con cualquier otro.',
  },
  {
    q: '¿Puedo calcular una raíz con índice personalizado?',
    a: 'Sí. Introduce cualquier número entero mayor que 1 en el campo de índice. La herramienta calcula la raíz enésima del radicando indicado y muestra el resultado con comprobación.',
  },
  {
    q: '¿Qué pasa si el radicando es negativo?',
    a: 'Si el índice es impar, la raíz de un número negativo existe en los números reales y el resultado es negativo. Si el índice es par, no existe resultado real y la herramienta lo indica con un mensaje explicativo.',
  },
  {
    q: '¿Qué significa simplificar un radical?',
    a: 'Simplificar un radical significa extraer los factores perfectos del radicando. Por ejemplo, √72 = √(36·2) = 6√2, donde el 6 sale fuera de la raíz y el 2 queda dentro.',
  },
  {
    q: '¿Esta calculadora reemplaza a la calculadora de raíz cuadrada?',
    a: 'Esta calculadora trabaja con raíces de índice variable: cúbica, cuarta, enésima. Para una herramienta enfocada solo en raíz cuadrada, usa la calculadora de raíz cuadrada cuando esté disponible.',
  },
];

export function RaizFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-12 lg:py-16 bg-white-soft" aria-labelledby="faq-raiz-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2
          id="faq-raiz-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Preguntas frecuentes sobre raíces
        </h2>

        <div
          className="overflow-hidden rounded-2xl bg-white"
          style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: i < faqs.length - 1 ? '1px solid #EEF4F7' : 'none' }}
            >
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
                  <p className="text-sm leading-relaxed" style={{ color: '#627d98' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
