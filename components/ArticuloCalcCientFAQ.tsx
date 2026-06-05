'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Cuál es la diferencia entre una calculadora básica y una científica?', a: 'Una calculadora básica solo hace las cuatro operaciones aritméticas. La científica además calcula potencias, raíces, logaritmos, funciones trigonométricas y respeta automáticamente la jerarquía de operaciones. También suele tener memoria y funciones para trabajar con números científicos.' },
  { q: '¿Por qué obtengo resultados distintos en grados y radianes?', a: 'Porque las funciones trigonométricas esperan el ángulo en una unidad específica. sin(30) en modo grados = 0.5, pero sin(30) en modo radianes da un resultado completamente distinto porque 30 radianes no es lo mismo que 30 grados. Antes de calcular, comprueba el modo (DEG o RAD) en la pantalla.' },
  { q: '¿Qué hace la tecla ANS?', a: 'La tecla ANS recupera el resultado de la última operación realizada. Sirve para encadenar cálculos sin tener que reescribir el resultado anterior. Por ejemplo, si calculas 15/3 = 5 y luego pulsas ANS + 7, obtienes 12.' },
  { q: '¿Cómo se escribe un número en notación científica en la calculadora?', a: 'Se usa la tecla EE o EXP, que representa "×10^". Por ejemplo, 3.5×10⁶ se introduce como 3.5 EE 6. Evita escribirlo como 3.5×10^6 porque la calculadora puede interpretarlo como 3.5 × (10^6) correctamente, pero en algunas calculadoras puede haber ambigüedad.' },
  { q: '¿Por qué aparece ERROR o MATH ERROR?', a: 'Ocurre cuando la operación no está definida matemáticamente: dividir entre cero, calcular la raíz de un número negativo (en modo real), o calcular el logaritmo de un número negativo o cero. Revisa los valores que introduces antes de calcular.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export function ArticuloCalcCientFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="site-shell max-w-3xl">
        <h2 id="faq-heading" className="mb-8 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">
          Preguntas frecuentes sobre la calculadora científica
        </h2>
        <dl className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl bg-white" style={{ border: '1px solid #D7E2EA' }}>
              <dt>
                <button
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-bold text-ink">{faq.q}</span>
                  <span className="mt-0.5 shrink-0 text-base font-bold" style={{ color: '#147c7c' }}>
                    {open === i ? '−' : '+'}
                  </span>
                </button>
              </dt>
              {open === i && (
                <dd className="px-5 pb-5">
                  <p className="text-sm leading-relaxed text-slate">{faq.a}</p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
