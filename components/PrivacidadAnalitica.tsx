export function PrivacidadAnalitica() {
  return (
    <div>
      <section className="bg-white-soft py-8 lg:py-11" aria-labelledby="analitica-heading">
        <div className="site-shell">
          <p className="eyebrow">Servicios externos</p>
          <h2 id="analitica-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Analítica y servicios externos
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Calculadora Matemática puede utilizar servicios externos para comprender el uso del sitio, su rendimiento y posibles errores de funcionamiento. Estos servicios pueden incluir herramientas de analítica, proveedores de alojamiento web, servicios de formularios o herramientas de seguridad y rendimiento.
            </p>
            <p>
              Los servicios externos pueden procesar datos técnicos como el tipo de dispositivo, el navegador utilizado, las páginas visitadas o la ubicación aproximada derivada de la dirección IP cuando el servicio lo permite. Estos datos se tratan de acuerdo con las políticas de privacidad de cada proveedor externo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 lg:py-11" aria-labelledby="formularios-priv-heading">
        <div className="site-shell">
          <p className="eyebrow">Formularios</p>
          <h2 id="formularios-priv-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Formularios de contacto
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Cuando un usuario envía el formulario de contacto, la información proporcionada puede utilizarse para responder al mensaje, revisar la solicitud, corregir errores reportados o evaluar sugerencias de nuevas calculadoras. Los campos del formulario incluyen nombre, correo electrónico, motivo del mensaje, URL de la calculadora relacionada y el contenido del mensaje.
            </p>
            <p
              className="rounded-xl px-4 py-3 font-semibold"
              style={{ background: '#FFF8E6', border: '1px solid #f0d070', color: '#5a3e00' }}
            >
              No envíes contraseñas, datos bancarios, documentos de identidad ni información personal sensible a través del formulario de contacto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
