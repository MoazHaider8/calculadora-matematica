'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora científica?',
    a: 'Es una herramienta que va más allá de las cuatro operaciones básicas. Incluye funciones trigonométricas, logaritmos, potencias, raíces y constantes matemáticas como π y e. Se usa en matemáticas, física, química e ingeniería.',
  },
  {
    q: '¿Qué funciones incluye esta calculadora?',
    a: 'Incluye sin, cos, tan, log (base 10), ln (base e), raíz cuadrada (√), potencias (xʸ), x², las constantes π y e, paréntesis, y las cuatro operaciones básicas. El modo angular cambia entre grados y radianes para las funciones trigonométricas.',
  },
  {
    q: '¿Cuál es la diferencia entre grados y radianes?',
    a: 'Son dos formas de medir ángulos. En grados, un círculo completo son 360°. En radianes, un círculo completo son 2π rad. Para la mayoría de tareas escolares se usan grados. Los radianes son más habituales en cálculo y matemáticas universitarias.',
  },
  {
    q: '¿Qué diferencia hay entre log y ln?',
    a: 'log usa la base 10: log(100) = 2 porque 10² = 100. ln usa la base e (número de Euler): ln(e) = 1. Ambas funciones solo admiten argumentos positivos.',
  },
  {
    q: '¿Puedo usar paréntesis en la calculadora?',
    a: 'Sí. Los paréntesis controlan el orden de cálculo. Por ejemplo, (2 + 3) × 4 da 20, mientras que 2 + 3 × 4 da 14 por el orden de operaciones estándar. También son obligatorios al escribir funciones como sin(30).',
  },
  {
    q: '¿Esta calculadora reemplaza a la de fracciones o porcentajes?',
    a: 'Esta herramienta sirve para cálculos científicos generales. Para operar fracciones o porcentajes con formatos específicos, usa las calculadoras dedicadas de fracciones y porcentajes disponibles en la sección de aritmética.',
  },
];

export function CientificaFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="faq-heading">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre calculadora científica
        </h2>
        <div className="mx-auto max-w-3xl divide-y divide-line rounded-2xl border border-line bg-white overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-panel focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal"
              >
                <span className="text-sm font-bold text-ink">{faq.q}</span>
                <span
                  className="shrink-0 text-lg font-bold transition-transform"
                  style={{ color: '#0a4f4d', transform: open === i ? 'rotate(45deg)' : 'none' }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="border-t border-line bg-panel px-6 py-4">
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
