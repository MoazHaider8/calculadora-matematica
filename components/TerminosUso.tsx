import Link from 'next/link';

export function TerminosUso() {
  return (
    <div>
      <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="uso-calc-heading">
        <div className="site-shell">
          <p className="eyebrow">Calculadoras</p>
          <h2 id="uso-calc-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Uso de las calculadoras
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Las calculadoras de este sitio están diseñadas para ayudar a resolver operaciones matemáticas. Muchas herramientas muestran la fórmula aplicada, la sustitución de valores, el procedimiento paso a paso y una interpretación del resultado.
            </p>
            <p>
              Los resultados dependen directamente de los valores que introduce el usuario. El sitio no puede verificar si esos valores son correctos antes de calcular. Las calculadoras pueden actualizarse o mejorarse con el tiempo.
            </p>
            <p>
              Para decisiones académicas, técnicas, financieras, de ingeniería o de cualquier contexto oficial, los resultados deben verificarse con fuentes adicionales o con un profesional cualificado.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16" aria-labelledby="exactitud-heading">
        <div className="site-shell">
          <p className="eyebrow">Resultados</p>
          <h2 id="exactitud-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Exactitud de resultados
          </h2>
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Calculadora Matemática aplica fórmulas matemáticas estándar y busca proporcionar resultados útiles y precisos. Sin embargo, no puede garantizarse que todos los resultados, explicaciones o páginas estén siempre libres de errores.
            </p>
            <ul className="space-y-2 pl-1">
              {[
                'Verifica resultados importantes antes de usarlos en contextos relevantes.',
                'El redondeo puede afectar algunos valores de salida.',
                'Las fórmulas y ejemplos deben revisarse en su contexto.',
              ].map(item => (
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
              Si detectas un error en una calculadora, puedes reportarlo a través de la{' '}
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
