const errors = [
  {
    n: '01',
    title: 'Olvidar la constante de integración',
    desc: 'En integrales indefinidas, el resultado siempre debe incluir + C. Omitirla es técnicamente incorrecto porque representa una familia de soluciones, no una sola función.',
  },
  {
    n: '02',
    title: 'Escribir funciones sin paréntesis',
    desc: 'Expresiones como sinx o e^2x son ambiguas. La forma correcta es sin(x) y e^(2*x). La calculadora puede no interpretar correctamente la expresión si faltan los paréntesis.',
  },
  {
    n: '03',
    title: 'Confundir derivada con integral',
    desc: 'Derivar reduce el grado de una potencia; integrar lo aumenta. ∫ x² dx = x³/3, no x. Si el resultado esperado baja de grado, probablemente se está confundiendo la operación.',
  },
  {
    n: '04',
    title: 'Usar límites inválidos en integrales definidas',
    desc: 'Los límites deben ser números, pi o e. Expresiones como "infinito" o límites que generan una función no integrable en ese intervalo producirán un error o un resultado no definido.',
  },
  {
    n: '05',
    title: 'Esperar pasos completos para expresiones muy complejas',
    desc: 'Para integrales que requieren técnicas avanzadas como integración por partes repetida o sustitución trigonométrica, la calculadora devuelve el resultado sin un desglose paso a paso completo.',
  },
];

export function IntegralErrors() {
  return (
    <section className="py-10 lg:py-14" style={{ background: '#EEF4F7' }} aria-labelledby="errors-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Guía de errores</p>
          <h2 id="errors-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Errores comunes al calcular integrales
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-soft">
            Situaciones frecuentes que producen resultados incorrectos o mensajes de error.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {errors.map((e) => (
            <div key={e.n} className="academic-card p-5">
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-heading text-xs font-bold"
                  style={{ background: '#FFF4CC', color: '#b58000' }}
                >
                  {e.n}
                </span>
                <p className="font-heading text-sm font-bold text-ink">{e.title}</p>
              </div>
              <p className="text-sm leading-relaxed text-slate">{e.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
