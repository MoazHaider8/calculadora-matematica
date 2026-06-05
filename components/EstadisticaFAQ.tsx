'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué herramientas incluye esta categoría?',
    a: 'Esta categoría incluye cinco calculadoras: media, mediana, moda, varianza y desviación estándar. Todas estarán disponibles próximamente.',
  },
  {
    q: '¿Qué diferencia hay entre media y promedio?',
    a: 'Promedio es el término cotidiano para referirse al promedio aritmético, especialmente en contextos escolares como notas o calificaciones. Media es el término estadístico formal y se usa en análisis de datos. La calculadora de promedio de la sección de aritmética es útil para promedios simples. La futura calculadora de media estará orientada al contexto estadístico.',
  },
  {
    q: '¿Qué calculadora debo usar para encontrar el valor central?',
    a: 'Para el valor central de un conjunto de datos ordenados, la calculadora de mediana es la herramienta adecuada. La mediana no se ve afectada por valores extremos, lo que la hace más representativa que la media en ciertos casos.',
  },
  {
    q: '¿Qué es la desviación estándar?',
    a: 'La desviación estándar mide cuánto se dispersan los valores de un conjunto de datos respecto a la media. Se calcula como la raíz cuadrada de la varianza y se expresa en las mismas unidades que los datos originales, lo que facilita su interpretación.',
  },
  {
    q: '¿Qué diferencia hay entre varianza y desviación estándar?',
    a: 'La varianza es la media de los cuadrados de las diferencias entre cada valor y la media. La desviación estándar es la raíz cuadrada de la varianza. Ambas miden dispersión, pero la desviación estándar es más fácil de interpretar porque está en las mismas unidades que los datos.',
  },
  {
    q: '¿Estas herramientas sirven para analizar datos escolares?',
    a: 'Sí. Puedes usarlas para calcular la media de calificaciones, identificar la nota más frecuente con la moda, o revisar la variabilidad de los resultados con la varianza y la desviación estándar. Son útiles tanto en educación como en cualquier área que trabaje con conjuntos de datos numéricos.',
  },
];

export function EstadisticaFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="faq-est-heading">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-est-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre estadística
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
