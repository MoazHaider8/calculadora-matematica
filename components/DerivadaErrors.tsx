const errors = [
  {
    n: '01',
    title: 'Olvidar aplicar la regla de la cadena',
    desc: 'Al derivar funciones compuestas como sin(x²) o e^(3x), hay que aplicar la regla de la cadena. La derivada de sin(x²) no es cos(x²), sino 2x·cos(x²).',
  },
  {
    n: '02',
    title: 'Confundir derivada con integral',
    desc: 'Derivar reduce el grado de una potencia; integrar lo aumenta. La derivada de x³ es 3x², no x⁴/4. Si el resultado esperado sube de grado, probablemente se está confundiendo la operación.',
  },
  {
    n: '03',
    title: 'Derivar respecto a la variable incorrecta',
    desc: 'En una expresión con varias letras, la variable de derivación importa. La derivada de x²y respecto a x es 2xy, pero respecto a y es x². Verifica que la variable seleccionada sea la correcta.',
  },
  {
    n: '04',
    title: 'No usar paréntesis en funciones compuestas',
    desc: 'Escribir e^2x es ambiguo: puede interpretarse como e^(2x) o (e^2)·x. Usa siempre paréntesis para indicar la estructura exacta: e^(2*x).',
  },
  {
    n: '05',
    title: 'Evaluar la función en lugar de la derivada',
    desc: "Para obtener f'(2), primero hay que calcular f'(x) y luego sustituir x = 2. Sustituir directamente en f(x) da f(2), que es un valor diferente.",
  },
  {
    n: '06',
    title: 'Pedir recta tangente sin indicar un punto',
    desc: 'La recta tangente requiere un punto concreto donde evaluar la derivada. Sin ese valor, la recta tangente no está definida y la calculadora no puede calcularla.',
  },
];

export function DerivadaErrors() {
  return (
    <section className="py-10 lg:py-14" style={{ background: '#EEF4F7' }} aria-labelledby="errors-deriv-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Guía de errores</p>
          <h2 id="errors-deriv-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Errores comunes al calcular derivadas
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
