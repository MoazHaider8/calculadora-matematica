'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Qué es una calculadora de logaritmos?',
    answer:
      'Es una herramienta que calcula el valor de un logaritmo dado su argumento y su base. Responde a la pregunta: ¿a qué exponente hay que elevar la base para obtener ese número? Por ejemplo, log₂(8) = 3 porque 2³ = 8.',
  },
  {
    question: '¿Qué diferencia hay entre log y ln?',
    answer:
      'log(x) es el logaritmo común, que usa base 10. Se usa en escalas decimales, decibelios y pH. ln(x) es el logaritmo natural, que usa base e (el número de Euler, aproximadamente 2.71828). Aparece con frecuencia en cálculo diferencial e integral.',
  },
  {
    question: '¿Puedo calcular logaritmos con base personalizada?',
    answer:
      'Sí. Selecciona la opción de base personalizada e introduce el valor de la base. La base debe ser un número positivo distinto de 1. La calculadora usa la fórmula de cambio de base para obtener el resultado: log_b(a) = ln(a) / ln(b).',
  },
  {
    question: '¿Por qué el argumento del logaritmo debe ser positivo?',
    answer:
      'Porque el logaritmo de un número real solo está definido para valores estrictamente positivos. No existe ningún exponente real que, aplicado a una base positiva, dé un resultado negativo o cero. Por tanto, log(0) y log(-5) no tienen solución en el dominio real.',
  },
  {
    question: '¿Qué significa cambio de base?',
    answer:
      'El cambio de base es una fórmula que permite calcular un logaritmo con cualquier base usando logaritmos naturales o comunes. La fórmula es: log_b(a) = ln(a) / ln(b). Por ejemplo, log₂(8) = ln(8) / ln(2) = 2.079 / 0.693 = 3.',
  },
  {
    question: '¿La calculadora resuelve ecuaciones logarítmicas?',
    answer:
      'Esta herramienta calcula valores logarítmicos concretos: dado un argumento y una base, devuelve el resultado. No resuelve ecuaciones como log₂(x) = 3. Para resolver ecuaciones logarítmicas donde la incógnita está dentro del argumento, se necesita una herramienta de ecuaciones algebraicas.',
  },
];

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative flex h-5 w-5 shrink-0 items-center justify-center text-teal">
      <span className="absolute block h-px w-3 rounded-full bg-current" />
      <span
        className="absolute block h-3 w-px rounded-full bg-current transition-all duration-200"
        style={{ opacity: open ? 0 : 1, transform: open ? 'scaleY(0)' : 'scaleY(1)' }}
      />
    </span>
  );
}

export function LogaritmoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="py-10 lg:py-14 bg-aqua-soft" aria-labelledby="log-faq-heading">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          <div className="lg:col-span-3">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 id="log-faq-heading" className="mt-3 text-[1.7rem] font-bold leading-tight text-ink lg:text-[2rem]">
              Preguntas frecuentes sobre logaritmos
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-soft">
              Respuestas sobre el funcionamiento de la calculadora y los logaritmos.
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="academic-card overflow-hidden">
              <dl className="divide-y divide-line">
                {faqs.map((item, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div key={item.question}>
                      <dt>
                        <button
                          onClick={() => toggle(i)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-panel"
                        >
                          <span className="font-heading text-[1.05rem] leading-snug text-ink">{item.question}</span>
                          <ToggleIcon open={isOpen} />
                        </button>
                      </dt>
                      <dd style={{ maxHeight: isOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.25s cubic-bezier(0.4,0,0.2,1)' }}>
                        <p className="px-6 pb-5 pr-12 text-sm leading-relaxed text-slate-soft">{item.answer}</p>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
