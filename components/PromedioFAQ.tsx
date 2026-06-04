'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de promedio?',
    a: 'Es una herramienta que calcula la media aritmética de una lista de números. Acepta valores separados por coma o por línea y muestra el promedio, la suma total, la cantidad de datos y el procedimiento.',
  },
  {
    q: '¿Cómo se calcula el promedio de varios números?',
    a: 'Se suman todos los valores y el resultado se divide entre la cantidad de datos. Por ejemplo, el promedio de 10, 8, 9 y 7 es (10 + 8 + 9 + 7) ÷ 4 = 34 ÷ 4 = 8.5.',
  },
  {
    q: '¿Qué diferencia hay entre promedio simple y ponderado?',
    a: 'En el promedio simple, todos los valores tienen el mismo peso. En el promedio ponderado, cada valor tiene un peso diferente que afecta al resultado. Por ejemplo, un examen final con mayor porcentaje requiere promedio ponderado.',
  },
  {
    q: '¿Cómo calcular el promedio de notas?',
    a: 'Introduce las calificaciones separadas por coma en el campo de valores y pulsa calcular. La herramienta sumará todas las notas y dividirá entre la cantidad para obtener la media.',
  },
  {
    q: '¿Puedo usar valores decimales?',
    a: 'Sí. La calculadora admite números enteros, decimales y negativos. Por ejemplo, puedes calcular el promedio de 2.5, 3.5 y 4.',
  },
  {
    q: '¿Esta calculadora reemplaza una calculadora de estadística?',
    a: 'Esta herramienta calcula promedio simple y ponderado. Para análisis estadísticos completos como varianza, desviación estándar, mediana o moda, habrá calculadoras específicas de estadística en el futuro.',
  },
];

export function PromedioFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="faq-prom-heading">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-prom-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre promedio
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
