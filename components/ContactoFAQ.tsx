'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '¿Para qué puedo usar esta página de contacto?',
    a: 'Puedes usarla para reportar un error en una calculadora, sugerir una nueva herramienta, enviar comentarios sobre el diseño o la redacción del sitio, o hacer una consulta general sobre las calculadoras disponibles.',
  },
  {
    q: '¿Cómo reporto un error en una calculadora?',
    a: 'Selecciona "Reportar un error" en el campo de motivo, incluye la URL de la calculadora, los valores que ingresaste, el resultado que muestra el sitio y el resultado que esperabas. Cuanta más información incluyas, más fácil será reproducir el problema.',
  },
  {
    q: '¿Puedo sugerir una nueva calculadora?',
    a: 'Sí. Selecciona "Sugerir una calculadora" en el campo de motivo e incluye el nombre de la herramienta, qué debería calcular, qué datos debería pedir y qué resultado esperarías. Si tienes un ejemplo concreto, añádelo también.',
  },
  {
    q: '¿Qué información debo incluir al reportar un problema?',
    a: 'Incluye la URL de la calculadora, los valores que ingresaste, el resultado que muestra el sitio y el resultado correcto esperado. Si el problema ocurre solo en un dispositivo o navegador específico, menciona esa información también.',
  },
  {
    q: '¿Puedo enviar información personal o sensible?',
    a: 'No envíes contraseñas, datos bancarios, documentos personales ni información sensible. El formulario está pensado únicamente para reportar errores, sugerir mejoras o hacer consultas sobre el sitio.',
  },
  {
    q: '¿Cuándo estará disponible el envío del formulario?',
    a: 'El formulario debe configurarse técnicamente antes de recibir mensajes reales. La interfaz ya está lista con validación de campos. El envío real estará disponible una vez se complete la configuración del backend.',
  },
];

export function ContactoFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="faq-contacto-heading">
      <div className="site-shell">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-contacto-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre contacto
        </h2>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(f => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />

        <dl className="mx-auto max-w-3xl divide-y divide-line">
          {faqs.map((f, i) => (
            <div key={i} className="py-4">
              <dt>
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-bold text-ink">{f.q}</span>
                  <span
                    className="shrink-0 text-teal transition-transform duration-200"
                    style={{ transform: open === i ? 'rotate(180deg)' : 'none' }}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>
              </dt>
              {open === i && (
                <dd className="mt-3 text-sm leading-relaxed text-slate">
                  {f.a}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
