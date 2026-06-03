const errors = [
  {
    n: '01',
    title: 'Usar un argumento negativo o cero',
    desc: 'El logaritmo solo está definido para argumentos estrictamente mayores que cero. log(-8) y log(0) no existen en el campo real. Si introduces un argumento negativo, la calculadora mostrará un error de dominio.',
  },
  {
    n: '02',
    title: 'Usar 1 como base',
    desc: 'La base 1 no es válida porque 1 elevado a cualquier potencia da siempre 1, lo que hace imposible obtener otro argumento. log₁(5) no tiene solución.',
  },
  {
    n: '03',
    title: 'Confundir log con ln',
    desc: 'En calculadoras y software, log(x) puede significar base 10 o base e según el contexto. Esta calculadora interpreta log(x) como base 10 y ln(x) como base e. Usa siempre la notación correcta para el resultado esperado.',
  },
  {
    n: '04',
    title: 'Olvidar que la base debe ser positiva',
    desc: 'La base también debe ser mayor que cero. Una base negativa como log₋₂(8) no está definida en el ámbito de los logaritmos reales. Usa bases positivas mayores que 1 para logaritmos crecientes.',
  },
  {
    n: '05',
    title: 'Confundir logaritmos con ecuaciones logarítmicas',
    desc: 'Esta calculadora calcula el valor de un logaritmo concreto: log₂(8) = 3. No resuelve ecuaciones del tipo log₂(x) = 3. Para resolver ecuaciones logarítmicas se necesita una herramienta de álgebra.',
  },
  {
    n: '06',
    title: 'Escribir expresiones sin paréntesis',
    desc: 'log 8,2 es ambiguo. La forma correcta es log(8,2) para indicar log₂(8). Sin paréntesis, la calculadora no puede determinar dónde empieza el argumento y dónde empieza la base.',
  },
];

export function LogaritmoErrors() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="errors-log-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Guía de errores</p>
          <h2 id="errors-log-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Errores comunes al calcular logaritmos
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
