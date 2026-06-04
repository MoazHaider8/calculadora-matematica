export function CientificaWhatIs() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="whatis-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="eyebrow">Conceptos clave</p>
            <h2 id="whatis-heading" className="mt-2 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              Qué calcula esta herramienta
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {[
                ['Operaciones básicas', 'Suma, resta, multiplicación y división con cualquier número.'],
                ['Trigonometría',       'sin, cos, tan en grados o radianes.'],
                ['Logaritmos',          'log (base 10) y ln (base e).'],
                ['Potencias y raíces',  'xʸ para cualquier exponente y √x para raíz cuadrada.'],
                ['Constantes',          'π (pi) y e (número de Euler) integradas.'],
                ['Paréntesis',          'Controlan el orden de las operaciones.'],
                ['Historial',           'Muestra los cálculos recientes para reutilizarlos.'],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: '#0a4f4d' }} aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-slate">
                    <strong className="text-ink">{title}:</strong>{' '}{desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="academic-card p-7">
            <p className="text-sm leading-relaxed text-slate">
              Esta herramienta es una calculadora científica de uso general. A diferencia de una calculadora de fracciones o de porcentajes, está diseñada para resolver expresiones que combinan múltiples funciones matemáticas en una sola operación.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Puedes calcular sin(30) + log(100) en un solo paso, usar π dentro de una expresión o elevar cualquier número a cualquier potencia. El evaluador respeta el orden de operaciones y admite paréntesis anidados.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              El modo angular (grados o radianes) afecta exclusivamente a las funciones trigonométricas. Para la mayoría de tareas escolares se usan grados; los radianes son más comunes en cálculo avanzado.
            </p>
            <div
              className="mt-5 rounded-xl px-5 py-4 font-mono text-sm"
              style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              aria-hidden="true"
            >
              <p style={{ color: '#0a4f4d' }}>sin(30) + log(100) = <strong>2.5</strong></p>
              <p className="mt-1" style={{ color: '#0a4f4d' }}>sqrt(144) + 2^2 = <strong>16</strong></p>
              <p className="mt-1" style={{ color: '#0a4f4d' }}>ln(e) = <strong>1</strong></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
