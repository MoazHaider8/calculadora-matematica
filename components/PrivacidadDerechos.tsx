import Link from 'next/link';

export function PrivacidadDerechos() {
  return (
    <div>
      <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="derechos-heading">
        <div className="site-shell">
          <p className="eyebrow">Derechos</p>
          <h2 id="derechos-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Derechos del usuario
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Dependiendo de tu ubicación, puedes tener derechos sobre tus datos personales, como solicitar acceso, corrección o eliminación de información que hayas proporcionado a través del formulario de contacto u otros medios disponibles en el sitio.
            </p>
            <p>
              Para ejercer estos derechos o hacer una consulta relacionada con la privacidad, puedes usar la{' '}
              <Link href="/contacto" className="font-semibold underline underline-offset-2 transition-colors hover:text-deep-teal" style={{ color: '#147c7c' }}>
                página de contacto
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16" aria-labelledby="cambios-heading">
        <div className="site-shell">
          <p className="eyebrow">Actualizaciones</p>
          <h2 id="cambios-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Cambios en esta política
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Esta política de privacidad puede actualizarse cuando el sitio incorpore nuevos servicios, funcionalidades, herramientas de terceros o cuando cambien los requisitos técnicos o legales aplicables. La versión actualizada estará disponible en esta misma página.
            </p>
            <p className="text-xs text-muted">
              Última actualización: junio de 2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="contacto-priv-heading">
        <div className="site-shell">
          <p className="eyebrow">Consultas</p>
          <h2 id="contacto-priv-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Contacto sobre privacidad
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Si tienes preguntas sobre esta política de privacidad o sobre cómo se trata la información en este sitio, puedes enviar tu consulta a través de la{' '}
              <Link href="/contacto" className="font-semibold underline underline-offset-2 transition-colors hover:text-deep-teal" style={{ color: '#147c7c' }}>
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
