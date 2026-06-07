const finalidad = [
  'Calculadoras de aritmética, álgebra, cálculo, estadística, geometría y matrices y vectores.',
  'Fórmulas, pasos e interpretaciones para facilitar la comprensión de cada resultado.',
  'Contenido organizado para aprender, comprobar ejercicios y resolver operaciones de forma práctica.',
];

export function AvisoFinalidadYUso() {
  return (
    <div>
      <section className="bg-white-soft py-8 lg:py-11" aria-labelledby="finalidad-heading">
        <div className="site-shell">
          <p className="eyebrow">Propósito</p>
          <h2 id="finalidad-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Finalidad del sitio
          </h2>
          <div className="max-w-2xl space-y-5 text-sm leading-relaxed text-slate">
            <p>El sitio proporciona herramientas de cálculo matemático online con los siguientes objetivos:</p>
            <ul className="space-y-3">
              {finalidad.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ background: '#DDF3F0', color: '#147c7c' }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              El contenido no reemplaza la verificación académica formal, la certificación técnica ni el asesoramiento profesional en ningún área.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-7 lg:py-9" aria-labelledby="uso-aviso-heading">
        <div className="site-shell">
          <p className="eyebrow">Calculadoras</p>
          <h2 id="uso-aviso-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Uso de las calculadoras
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Los resultados de las calculadoras dependen de los valores que introduce el usuario. Las páginas de calculadora muestran fórmulas, ejemplos e interpretaciones para facilitar la comprensión del resultado.
            </p>
            <p>
              Los usuarios deben revisar las unidades, los valores de entrada y el contexto antes de usar los resultados. Las calculadoras pueden actualizarse para mejorar la precisión, la claridad o la usabilidad del sitio.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
