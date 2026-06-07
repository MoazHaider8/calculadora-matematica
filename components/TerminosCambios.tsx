import Link from 'next/link';

export function TerminosCambios() {
  return (
    <div>
      <section className="bg-white py-7 lg:py-9" aria-labelledby="cambios-term-heading">
        <div className="site-shell">
          <p className="eyebrow">Actualizaciones</p>
          <h2 id="cambios-term-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Cambios en los términos
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Estos términos pueden actualizarse cuando el sitio, sus herramientas, políticas o servicios técnicos cambien de manera relevante. La versión actualizada estará disponible en esta página.
            </p>
            <p className="text-xs text-muted">
              Última actualización: junio de 2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white-soft py-6 lg:py-8" aria-labelledby="contacto-term-heading">
        <div className="site-shell">
          <p className="eyebrow">Preguntas</p>
          <h2 id="contacto-term-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Contacto
          </h2>
          <div className="max-w-2xl text-sm leading-relaxed text-slate">
            <p>
              Si tienes preguntas sobre estos términos, quieres enviar una sugerencia o reportar un error, puedes hacerlo a través de la{' '}
              <Link href="/contacto" className="font-semibold underline underline-offset-2 transition-colors" style={{ color: '#147c7c' }}>
                página de contacto
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
