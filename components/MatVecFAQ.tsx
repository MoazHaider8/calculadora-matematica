'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué herramientas incluye esta categoría?',
    a: 'Esta categoría incluye la Calculadora de Matrices para operar entre matrices, la Calculadora de Determinantes, la Calculadora de Vectores, la Calculadora de Sistemas de Ecuaciones y la Calculadora de Matriz Inversa. Las herramientas estarán disponibles próximamente.',
  },
  {
    q: '¿Qué calculadora debo usar para operar matrices?',
    a: 'Para sumar, restar o multiplicar matrices usa la Calculadora de Matrices. Para el determinante usa la Calculadora de Determinantes. Para obtener la inversa usa la Calculadora de Matriz Inversa.',
  },
  {
    q: '¿Qué diferencia hay entre matriz y vector?',
    a: 'Una matriz es una tabla de números con m filas y n columnas. Un vector es un caso especial de matriz con una sola columna o una sola fila. Los vectores tienen magnitud y dirección; las matrices representan transformaciones lineales o sistemas de ecuaciones.',
  },
  {
    q: '¿Puedo resolver sistemas de ecuaciones?',
    a: 'Sí. La Calculadora de Sistemas de Ecuaciones permite resolver sistemas de la forma Ax = b usando eliminación gaussiana u otros métodos. También puedes resolverlos usando la matriz inversa si el sistema tiene solución única.',
  },
  {
    q: '¿Qué es una matriz inversa?',
    a: 'La matriz inversa de A es aquella que cumple A · A⁻¹ = I, donde I es la matriz identidad. Solo existe cuando el determinante de A es distinto de cero. Es útil para resolver sistemas lineales y para invertir transformaciones.',
  },
  {
    q: '¿Estas herramientas sirven para estudiar álgebra lineal?',
    a: 'Sí. Las herramientas de esta categoría cubren las operaciones fundamentales de álgebra lineal: matrices, determinantes, vectores, sistemas lineales e inversas. Son útiles para estudiantes de matemáticas, física e ingeniería.',
  },
];

export function MatVecFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-12 lg:py-16 bg-white-soft" aria-labelledby="faq-matvec-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2
          id="faq-matvec-heading"
          className="mt-3 mb-8 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
          style={{ color: '#102a43' }}
        >
          Preguntas frecuentes sobre matrices y vectores
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
                  style={{
                    color: '#D8A31A',
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    display: 'inline-block',
                  }}
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
