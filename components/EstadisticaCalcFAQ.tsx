'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es una calculadora de estadística?',
    a: 'Es una herramienta que acepta un conjunto de datos numéricos y calcula automáticamente las principales medidas estadísticas: cantidad, suma, media, mediana, moda, mínimo, máximo, rango, varianza y desviación estándar.',
  },
  {
    q: '¿Qué datos puedo introducir?',
    a: 'Puedes introducir cualquier lista de números separados por coma, punto y coma o salto de línea. Se admiten números enteros, decimales y negativos. No se admiten letras ni símbolos no numéricos.',
  },
  {
    q: '¿Qué diferencia hay entre media, mediana y moda?',
    a: 'La media es el promedio aritmético: suma dividida entre la cantidad de datos. La mediana es el valor central de la lista ordenada. La moda es el valor que más veces aparece. En un conjunto simétrico pueden coincidir; en conjuntos con valores extremos pueden diferir notablemente.',
  },
  {
    q: '¿Qué diferencia hay entre población y muestra?',
    a: 'La varianza poblacional divide entre n (todos los datos disponibles). La varianza muestral divide entre n−1, lo que corrige el sesgo cuando el conjunto es una muestra representativa de una población mayor. Ambas versiones se muestran en el resultado.',
  },
  {
    q: '¿Qué significan varianza y desviación estándar?',
    a: 'La varianza mide cuánto se alejan los datos de la media en promedio (en unidades al cuadrado). La desviación estándar es la raíz cuadrada de la varianza y se expresa en las mismas unidades que los datos, lo que facilita su interpretación directa.',
  },
  {
    q: '¿Esta calculadora reemplaza a las calculadoras específicas?',
    a: 'Esta herramienta entrega un resumen estadístico general. Para estudiar una medida con más detalle o con un contexto específico, usa las calculadoras dedicadas de media, varianza o desviación estándar cuando estén disponibles en esta categoría.',
  },
];

export function EstadisticaCalcFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="faq-ec-heading">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-ec-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
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
