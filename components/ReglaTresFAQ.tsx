'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de regla de tres?',
    a: 'Es una herramienta que resuelve proporciones encontrando el valor desconocido X a partir de tres valores conocidos A, B y C. Admite tanto la regla de tres directa como la inversa y muestra la fórmula y el procedimiento.',
  },
  {
    q: '¿Cuándo se usa la regla de tres directa?',
    a: 'Se usa cuando ambas magnitudes aumentan o disminuyen a la vez. Ejemplo: si 3 metros de tela cuestan 15 euros, 7 metros cuestan X euros. Al aumentar la cantidad de tela, el precio también aumenta.',
  },
  {
    q: '¿Cuándo se usa la regla de tres inversa?',
    a: 'Se usa cuando una magnitud aumenta mientras la otra disminuye. Ejemplo: si 4 operarios terminan un trabajo en 10 días, 8 operarios lo terminan en menos días. Al aumentar trabajadores, el tiempo disminuye.',
  },
  {
    q: '¿Cómo se calcula el valor X?',
    a: 'En regla directa: X = B × C / A. En regla inversa: X = A × B / C. Ambas fórmulas se basan en el producto cruzado de la proporción.',
  },
  {
    q: '¿Qué diferencia hay entre regla de tres y porcentaje?',
    a: 'La regla de tres trabaja con proporciones entre magnitudes cualesquiera. El porcentaje es un caso especial donde una magnitud se expresa como parte de 100. Para descuentos, aumentos o variaciones en tanto por ciento, usa la calculadora de porcentajes.',
  },
  {
    q: '¿Esta calculadora sirve para promedios?',
    a: 'Esta herramienta resuelve proporciones con regla de tres. Para calcular medias o promedios de un conjunto de valores, usa la calculadora de promedio cuando esté disponible.',
  },
];

export function ReglaTresFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="faq-rt-heading">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-rt-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre regla de tres
        </h2>
        <div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
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
