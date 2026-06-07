export function AvisoPropiedadYEnlaces() {
  return (
    <div>
      <section className="bg-white-soft py-8 lg:py-11" aria-labelledby="propiedad-aviso-heading">
        <div className="site-shell">
          <p className="eyebrow">Contenido</p>
          <h2 id="propiedad-aviso-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Propiedad intelectual
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <p>
              El texto, diseño, estructura de páginas, explicaciones de calculadoras y contenido original del sitio son propiedad de Calculadora Matemática o se usan bajo los derechos aplicables cuando corresponde.
            </p>
            <p>
              Las fórmulas matemáticas estándar son conocimiento matemático general y no se reclaman como propiedad exclusiva del sitio. La presentación, organización y explicación de esas fórmulas en este sitio forman parte del trabajo del sitio.
            </p>
            <p>
              Los usuarios pueden utilizar los resultados para fines personales, educativos o prácticos. No está permitido reproducir el sitio completo, copiar la estructura de páginas a escala, hacer scraping del contenido de forma perjudicial ni republicar el contenido como parte de un servicio competidor.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-6 lg:py-8" aria-labelledby="externos-aviso-heading">
        <div className="site-shell">
          <p className="eyebrow">Terceros</p>
          <h2 id="externos-aviso-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Enlaces externos
          </h2>
          <div className="max-w-2xl text-sm leading-relaxed text-slate">
            <p>
              El sitio puede contener enlaces a páginas web, recursos o servicios externos. Calculadora Matemática no es responsable del contenido, disponibilidad, exactitud ni políticas de esos sitios web de terceros.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white-soft py-6 lg:py-8" aria-labelledby="disponibilidad-heading">
        <div className="site-shell">
          <p className="eyebrow">Servicio</p>
          <h2 id="disponibilidad-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Disponibilidad del sitio
          </h2>
          <div className="max-w-2xl text-sm leading-relaxed text-slate">
            <p>
              El sitio puede actualizarse, modificarse, quedar temporalmente no disponible o cambiar sin previo aviso por razones de mantenimiento, mejoras técnicas, problemas de alojamiento o cambios en los servicios utilizados. No se garantiza disponibilidad ininterrumpida.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
