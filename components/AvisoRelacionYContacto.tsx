import Link from 'next/link';

export function AvisoRelacionYContacto() {
  return (
    <div>
      <section className="bg-white py-12 lg:py-16" aria-labelledby="relacion-heading">
        <div className="site-shell">
          <p className="eyebrow">Documentos legales</p>
          <h2 id="relacion-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Relación con otros documentos legales
          </h2>
          <div className="max-w-2xl space-y-5 text-sm leading-relaxed text-slate">
            <p>
              Este aviso legal debe leerse junto con los siguientes documentos, disponibles en el sitio:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div
                className="rounded-2xl p-5"
                style={{ border: '1px solid #D7E2EA', background: '#F4F8FB' }}
              >
                <Link
                  href="/politica-de-privacidad"
                  className="block text-sm font-bold underline underline-offset-2 transition-colors"
                  style={{ color: '#147c7c' }}
                >
                  Política de Privacidad
                </Link>
                <p className="mt-2 text-xs leading-relaxed text-slate">
                  Cubre el tratamiento de datos, cookies, analítica y formularios.
                </p>
              </div>
              <div
                className="rounded-2xl p-5"
                style={{ border: '1px solid #D7E2EA', background: '#F4F8FB' }}
              >
                <Link
                  href="/terminos-y-condiciones"
                  className="block text-sm font-bold underline underline-offset-2 transition-colors"
                  style={{ color: '#147c7c' }}
                >
                  Términos y Condiciones
                </Link>
                <p className="mt-2 text-xs leading-relaxed text-slate">
                  Cubre el uso general del sitio, responsabilidades del usuario y uso no permitido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="contacto-aviso-heading">
        <div className="site-shell">
          <p className="eyebrow">Preguntas</p>
          <h2 id="contacto-aviso-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Contacto
          </h2>
          <div className="max-w-2xl text-sm leading-relaxed text-slate">
            <p>
              Para preguntas relacionadas con este aviso legal, sugerencias o reportes de errores, puedes escribirnos a través de la{' '}
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
