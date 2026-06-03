'use client';

import { useState } from 'react';
import { faqItems } from '@/lib/data';

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

const groups = ['Uso de calculadoras', 'Resultados y pasos', 'Categorías', 'Idioma y contenido'];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (index: number) => setOpenIndex((previous) => (previous === index ? null : index));

  return (
    <section className="section-pad bg-aqua-soft" aria-labelledby="faq-heading" id="preguntas-frecuentes">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Preguntas útiles</p>
            <h2 id="faq-heading" className="mt-3 text-[2.1rem] text-ink lg:text-[2.8rem]">
              Lo que conviene saber antes de calcular.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-soft">
              Respuestas cortas para entender cómo está organizado el sitio y qué tipo de ayuda ofrece cada herramienta.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="academic-card overflow-hidden">
              <dl className="divide-y divide-line">
                {faqItems.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div key={item.question}>
                      <dt>
                        <button
                          onClick={() => toggle(index)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-panel"
                        >
                          <span>
                            <span className="mb-1 block text-xs font-bold text-teal">{groups[index] ?? 'Ayuda'}</span>
                            <span className="font-heading text-[1.12rem] leading-snug text-ink">{item.question}</span>
                          </span>
                          <ToggleIcon open={isOpen} />
                        </button>
                      </dt>
                      <dd
                        style={{
                          maxHeight: isOpen ? '420px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 0.25s cubic-bezier(0.4,0,0.2,1)',
                        }}
                      >
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
