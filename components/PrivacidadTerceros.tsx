export function PrivacidadTerceros() {
  return (
    <div>
      <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="terceros-heading">
        <div className="site-shell">
          <p className="eyebrow">Terceros</p>
          <h2 id="terceros-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Enlaces a terceros
          </h2>
          <div className="max-w-2xl text-sm leading-relaxed text-slate">
            <p>
              Este sitio puede incluir enlaces a sitios web o servicios externos. Calculadora Matemática no es responsable de las prácticas de privacidad de esos sitios. Al acceder a un sitio externo a través de un enlace desde estas páginas, te recomendamos revisar su política de privacidad antes de proporcionar cualquier información personal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16" aria-labelledby="seguridad-heading">
        <div className="site-shell">
          <p className="eyebrow">Seguridad</p>
          <h2 id="seguridad-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Seguridad de la información
          </h2>
          <div className="max-w-2xl text-sm leading-relaxed text-slate">
            <p>
              El sitio aplica medidas técnicas y organizativas razonables para proteger la información de los usuarios frente a accesos no autorizados, pérdidas o alteraciones. Sin embargo, ningún sistema online puede garantizar seguridad absoluta. En caso de detectar un problema de seguridad, se tomarán las medidas necesarias para resolverlo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
