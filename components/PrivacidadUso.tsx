const usoItems = [
  'Responder a los mensajes enviados a través del formulario de contacto.',
  'Revisar los errores reportados por usuarios.',
  'Mejorar la precisión y usabilidad de las calculadoras.',
  'Entender qué páginas son más útiles para los visitantes.',
  'Mantener la seguridad y el funcionamiento del sitio.',
  'Mejorar el contenido y la navegación.',
];

export function PrivacidadUso() {
  return (
    <div>
      <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="uso-heading">
        <div className="site-shell">
          <p className="eyebrow">Propósito</p>
          <h2 id="uso-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Uso de la información
          </h2>
          <p className="mb-5 max-w-xl text-sm leading-relaxed text-slate">
            La información que puede recopilarse se utiliza para los siguientes fines:
          </p>
          <ul className="mb-6 max-w-xl space-y-3">
            {usoItems.map(item => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ background: '#DDF3F0', color: '#147c7c' }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-slate">{item}</span>
              </li>
            ))}
          </ul>
          <p
            className="inline-block rounded-xl px-4 py-3 text-sm font-bold"
            style={{ background: '#DDF3F0', color: '#0a3535' }}
          >
            No vendemos datos personales de usuarios.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16" aria-labelledby="cookies-heading">
        <div className="site-shell">
          <p className="eyebrow">Cookies</p>
          <h2 id="cookies-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Cookies y tecnologías similares
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <p>
              El sitio puede utilizar cookies para el funcionamiento básico de las páginas, analítica, rendimiento o, en el futuro, publicidad si se habilita. Las cookies son pequeños archivos que los navegadores almacenan en el dispositivo del usuario y que ayudan a recordar preferencias o a entender cómo se usa el sitio.
            </p>
            <p>
              Los usuarios pueden gestionar o desactivar las cookies desde la configuración de su navegador. Cada navegador tiene opciones diferentes para controlar las cookies. Desactivar las cookies puede afectar al funcionamiento de algunas funciones del sitio.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
