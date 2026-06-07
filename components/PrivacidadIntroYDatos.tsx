const datosCards = [
  {
    title: 'Datos enviados por formularios',
    items: [
      'Nombre',
      'Correo electrónico',
      'Motivo del mensaje',
      'URL de la calculadora relacionada',
      'Contenido del mensaje',
    ],
  },
  {
    title: 'Datos técnicos',
    items: [
      'Tipo de navegador',
      'Tipo de dispositivo',
      'Ubicación aproximada si la proporciona el servicio de analítica',
      'Páginas visitadas',
      'Fecha y hora de acceso',
    ],
  },
  {
    title: 'Datos de uso',
    items: [
      'Calculadoras visitadas',
      'Interacciones con páginas',
      'Patrones generales de navegación',
    ],
  },
];

export function PrivacidadIntroYDatos() {
  return (
    <div>
      <section className="bg-white-soft py-8 lg:py-11" aria-labelledby="intro-heading">
        <div className="site-shell">
          <p className="eyebrow">La política</p>
          <h2 id="intro-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Introducción
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Calculadora Matemática es una plataforma de herramientas matemáticas online disponibles en español. Esta política de privacidad explica cómo puede tratarse la información cuando accedes al sitio, usas las calculadoras, envías el formulario de contacto o navegas por las páginas disponibles.
            </p>
            <p>
              El sitio está diseñado para que puedas usar las calculadoras sin necesidad de crear una cuenta. Sin embargo, algunos datos pueden procesarse cuando el sitio utiliza servicios técnicos, herramientas de analítica, formularios o tecnologías de cookies.
            </p>
            <p>
              Esta política puede actualizarse cuando el sitio incorpore nuevos servicios, funcionalidades o cambios técnicos relevantes. La versión más reciente estará siempre disponible en esta página.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 lg:py-11" aria-labelledby="datos-heading">
        <div className="site-shell">
          <p className="eyebrow">Datos</p>
          <h2 id="datos-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Datos que podemos recopilar
          </h2>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate">
            Dependiendo de cómo uses el sitio, los siguientes tipos de datos pueden procesarse o recopilarse.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {datosCards.map(card => (
              <div
                key={card.title}
                className="rounded-2xl bg-white p-5"
                style={{ border: '1px solid #D7E2EA' }}
              >
                <p className="mb-3 text-sm font-bold text-ink">{card.title}</p>
                <ul className="space-y-1.5">
                  {card.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-slate">
                      <span className="mt-0.5 shrink-0 text-teal" aria-hidden="true">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
