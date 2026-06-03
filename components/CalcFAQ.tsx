'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Qué calculadoras puedo encontrar aquí?',
    answer:
      'Esta página reúne 30 calculadoras matemáticas organizadas en seis áreas: cálculo, álgebra, matrices y vectores, aritmética, estadística y geometría. Cada herramienta está dedicada a una operación concreta, como integrales, derivadas, matrices, fracciones, porcentajes o el teorema de Pitágoras.',
  },
  {
    question: '¿Cómo están organizadas las calculadoras?',
    answer:
      'Las calculadoras están agrupadas por categoría matemática. Cada categoría contiene entre cuatro y cinco herramientas relacionadas por el tipo de operación. Puedes explorar el directorio completo en esta página o navegar directamente a una categoría específica usando el índice superior.',
  },
  {
    question: '¿Las herramientas están disponibles en español?',
    answer:
      'Sí. Todas las calculadoras, instrucciones, resultados y explicaciones están en español. El sitio está pensado para estudiantes y profesores de habla hispana que necesitan herramientas matemáticas en su idioma.',
  },
  {
    question: '¿Puedo usar estas calculadoras para estudiar?',
    answer:
      'Sí. Las calculadoras están diseñadas para mostrar el procedimiento junto al resultado, no solo el número final. Esto permite revisar los pasos, verificar el método y aprender cómo se aplica cada fórmula en la práctica.',
  },
  {
    question: '¿Se añadirán nuevas calculadoras?',
    answer:
      'La plataforma se amplía de forma gradual. Las seis categorías actuales seguirán creciendo con nuevas herramientas para cubrir más operaciones matemáticas. Las calculadoras que se añadan mantendrán el mismo estándar de claridad en resultados y pasos.',
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

export function CalcFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="py-10 lg:py-14 bg-aqua-soft" aria-labelledby="dir-faq-heading">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2
              id="dir-faq-heading"
              className="mt-3 text-[2rem] font-bold leading-tight text-ink lg:text-[2.6rem]"
            >
              Lo que conviene saber sobre el directorio
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-soft">
              Respuestas cortas sobre cómo está organizada la plataforma y qué tipo de herramientas incluye.
            </p>
          </div>

          <div className="lg:col-span-8">
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
                          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-panel"
                        >
                          <span className="font-heading text-[1.05rem] leading-snug text-ink">
                            {item.question}
                          </span>
                          <ToggleIcon open={isOpen} />
                        </button>
                      </dt>
                      <dd
                        style={{
                          maxHeight: isOpen ? '400px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 0.25s cubic-bezier(0.4,0,0.2,1)',
                        }}
                      >
                        <p className="px-6 pb-5 pr-12 text-sm leading-relaxed text-slate-soft">
                          {item.answer}
                        </p>
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
