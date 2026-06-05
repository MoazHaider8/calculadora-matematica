import Link from 'next/link';

export function AvisoIntroEIdentificacion() {
  return (
    <div>
      <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="aviso-intro-heading">
        <div className="site-shell">
          <p className="eyebrow">El documento</p>
          <h2 id="aviso-intro-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Introducción
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Calculadora Matemática es una plataforma de herramientas matemáticas online disponibles en español. Este aviso legal describe las condiciones generales relativas al uso del sitio, el contenido disponible y las limitaciones aplicables.
            </p>
            <p>
              El sitio proporciona calculadoras y explicaciones con fines educativos y de apoyo práctico. Los usuarios pueden acceder a las herramientas sin necesidad de crear una cuenta.
            </p>
            <p>
              Antes de usar los resultados en contextos académicos, técnicos o profesionales importantes, es recomendable verificarlos con fuentes adicionales. Este aviso debe leerse junto con la política de privacidad y los términos y condiciones del sitio.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16" aria-labelledby="identificacion-heading">
        <div className="site-shell">
          <p className="eyebrow">El sitio</p>
          <h2 id="identificacion-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Identificación del sitio
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <div
              className="rounded-2xl p-5"
              style={{ background: '#F4F8FB', border: '1px solid #D7E2EA' }}
            >
              <dl className="space-y-3">
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <dt className="min-w-[120px] text-xs font-bold uppercase tracking-wide text-muted">Nombre</dt>
                  <dd className="text-sm font-semibold text-ink">Calculadora Matemática</dd>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <dt className="min-w-[120px] text-xs font-bold uppercase tracking-wide text-muted">Sitio web</dt>
                  <dd className="text-sm text-slate">https://calculadoramatematica.com</dd>
                </div>
              </dl>
            </div>
            <p>
              La información de contacto disponible para los usuarios se encuentra en la{' '}
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
