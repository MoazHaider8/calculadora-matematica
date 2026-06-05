const usoNoPermitido = [
  'Intentar dañar o sobrecargar el sitio.',
  'Usar scraping automatizado de forma que afecte al rendimiento del sitio.',
  'Enviar mensajes falsos, abusivos o dañinos a través del formulario.',
  'Intentar eludir funciones de seguridad del sitio.',
  'Usar el sitio para actividades ilegales.',
  'Copiar el contenido del sitio a escala para crear un servicio competidor.',
];

export function TerminosPropiedad() {
  return (
    <div>
      <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="propiedad-heading">
        <div className="site-shell">
          <p className="eyebrow">Contenido</p>
          <h2 id="propiedad-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Propiedad del contenido
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <p>
              El texto, la estructura de páginas, las explicaciones de fórmulas, los elementos de interfaz y el contenido de las calculadoras son propiedad de Calculadora Matemática o se usan como conocimiento matemático estándar donde corresponde.
            </p>
            <p>
              Las fórmulas matemáticas son conocimiento público. El modo en que se presentan, explican y organizan en este sitio forma parte del trabajo del sitio.
            </p>
            <p>
              Los usuarios pueden usar los resultados para fines personales, educativos o prácticos. No está permitido copiar el sitio completo, hacer scraping masivo del contenido o reutilizar las páginas como parte de un servicio competidor sin autorización.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16" aria-labelledby="terceros-term-heading">
        <div className="site-shell">
          <p className="eyebrow">Terceros</p>
          <h2 id="terceros-term-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Enlaces a terceros
          </h2>
          <div className="max-w-2xl text-sm leading-relaxed text-slate">
            <p>
              El sitio puede incluir enlaces a sitios web o servicios externos. Calculadora Matemática no es responsable del contenido, disponibilidad ni políticas de esos sitios externos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="no-permitido-heading">
        <div className="site-shell">
          <p className="eyebrow">Restricciones</p>
          <h2 id="no-permitido-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Uso no permitido
          </h2>
          <ul className="max-w-xl space-y-3">
            {usoNoPermitido.map(item => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{ background: '#fee2e2', color: '#b91c1c' }}
                  aria-hidden="true"
                >
                  ×
                </span>
                <span className="text-sm leading-relaxed text-slate">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
