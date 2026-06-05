'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué herramientas incluye esta categoría?',
    a: 'Esta categoría incluye cinco calculadoras: Calculadora de Estadística, Calculadora de Probabilidad, Calculadora de Desviación Estándar, Calculadora de Media y Calculadora de Varianza. Todas estarán disponibles próximamente.',
  },
  {
    q: '¿Qué diferencia hay entre calculadora de estadística y calculadora de media?',
    a: 'La calculadora de estadística analizará un conjunto de datos completo y mostrará varias medidas a la vez: media, varianza, desviación estándar, mínimo, máximo y cantidad de valores. La calculadora de media se centrará en calcular el valor medio de un conjunto de datos en contexto estadístico. Para promedios simples de notas o valores cotidianos, la calculadora de promedio de la sección de aritmética es la herramienta adecuada.',
  },
  {
    q: '¿Qué calculadora debo usar para probabilidad?',
    a: 'La calculadora de probabilidad está diseñada para calcular la probabilidad de un evento a partir de los casos favorables y el número total de casos posibles. El resultado se muestra como fracción, decimal y porcentaje.',
  },
  {
    q: '¿Qué es la desviación estándar?',
    a: 'La desviación estándar mide cuánto se dispersan los valores de un conjunto de datos respecto a la media. Se calcula como la raíz cuadrada de la varianza y se expresa en las mismas unidades que los datos originales, lo que facilita su interpretación directa.',
  },
  {
    q: '¿Qué diferencia hay entre varianza y desviación estándar?',
    a: 'La varianza es la media de los cuadrados de las diferencias entre cada valor y la media. La desviación estándar es la raíz cuadrada de la varianza. Ambas miden dispersión, pero la desviación estándar es más fácil de interpretar porque está en las mismas unidades que los datos originales.',
  },
  {
    q: '¿Estas herramientas sirven para analizar datos escolares?',
    a: 'Sí. Puedes usarlas para calcular la media de calificaciones, revisar la varianza y desviación estándar de los resultados, o calcular la probabilidad de un evento concreto. Son útiles tanto en educación como en cualquier área que trabaje con conjuntos de datos numéricos.',
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
