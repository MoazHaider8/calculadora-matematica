import Link from 'next/link';

const exactitudItems = [
  'Verifica los resultados antes de usarlos en contextos académicos, técnicos, profesionales u oficiales.',
  'Algunas calculadoras redondean decimales para mejorar la legibilidad del resultado.',
  'Los ejemplos son educativos y pueden no cubrir todos los casos posibles.',
];

const responsabilidadItems = [
  'Introducir valores correctos en los campos de las calculadoras.',
  'Elegir la calculadora adecuada para cada operación.',
  'Seleccionar las unidades de medida correctas.',
  'Revisar las fórmulas y resultados obtenidos.',
  'Verificar cálculos importantes antes de usarlos.',
  'Usar el sitio de forma legal.',
];

export function AvisoExactitudYResponsabilidad() {
  return (
    <div>
      <section className="bg-white-soft py-8 lg:py-11" aria-labelledby="exactitud-aviso-heading">
        <div className="site-shell">
          <p className="eyebrow">Limitaciones</p>
          <h2 id="exactitud-aviso-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Exactitud y limitaciones
          </h2>
          <div className="max-w-2xl space-y-5 text-sm leading-relaxed text-slate">
            <p>
              Calculadora Matemática busca proporcionar resultados útiles basados en fórmulas matemáticas estándar. Sin embargo, pueden producirse errores, diferencias de redondeo, comportamientos del navegador o cambios en la implementación.
            </p>
            <ul className="space-y-3">
              {exactitudItems.map(item => (
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
              Puedes reportar errores a través de la{' '}
              <Link href="/contacto" className="font-semibold underline underline-offset-2 transition-colors" style={{ color: '#147c7c' }}>
                página de contacto
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 lg:py-11" aria-labelledby="responsabilidad-aviso-heading">
        <div className="site-shell">
          <p className="eyebrow">Usuario</p>
          <h2 id="responsabilidad-aviso-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Responsabilidad del usuario
          </h2>
          <p className="mb-5 max-w-xl text-sm leading-relaxed text-slate">
            El usuario es responsable de:
          </p>
          <ul className="max-w-xl space-y-3">
            {responsabilidadItems.map(item => (
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
