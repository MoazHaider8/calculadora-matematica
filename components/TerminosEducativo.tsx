const noAplica = [
  'Asesoramiento académico formal',
  'Certificación de ingeniería',
  'Asesoramiento financiero',
  'Asesoramiento legal',
  'Verificación técnica profesional',
];

const responsabilidades = [
  'Introducir valores correctos en los campos de las calculadoras.',
  'Revisar fórmulas y resultados antes de usarlos en contextos importantes.',
  'Verificar las unidades de medida utilizadas.',
  'Comprobar resultados relevantes con fuentes adicionales.',
  'Usar el sitio de forma legal y respetuosa.',
  'Evitar el uso indebido de formularios o páginas del sitio.',
];

export function TerminosEducativo() {
  return (
    <div>
      <section className="bg-white-soft py-8 lg:py-11" aria-labelledby="educativo-heading">
        <div className="site-shell">
          <p className="eyebrow">Alcance</p>
          <h2 id="educativo-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Uso educativo e informativo
          </h2>
          <div className="max-w-2xl space-y-5 text-sm leading-relaxed text-slate">
            <p>
              El sitio está diseñado para uso educativo, informativo y de apoyo práctico en cálculos matemáticos. No debe tratarse como fuente de:
            </p>
            <ul className="space-y-2">
              {noAplica.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0 text-base font-bold"
                    style={{ color: '#8fa8bd' }}
                    aria-hidden="true"
                  >
                    ×
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 lg:py-11" aria-labelledby="responsabilidad-heading">
        <div className="site-shell">
          <p className="eyebrow">Usuario</p>
          <h2 id="responsabilidad-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Responsabilidad del usuario
          </h2>
          <p className="mb-5 max-w-xl text-sm leading-relaxed text-slate">
            El usuario es responsable de:
          </p>
          <ul className="max-w-xl space-y-3">
            {responsabilidades.map(item => (
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
        </div>
      </section>
    </div>
  );
}
