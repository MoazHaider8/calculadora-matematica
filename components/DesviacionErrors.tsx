const errors = [
  {
    title: 'Confundir muestra con población',
    desc: 'Si los datos son una muestra de una población mayor, usa desviación muestral (divide entre n−1). Si son todos los datos disponibles, usa la poblacional (divide entre n).',
  },
  {
    title: 'Redondear antes de terminar el cálculo',
    desc: 'El redondeo prematuro en pasos intermedios acumula errores. La calculadora trabaja con precisión completa hasta el resultado final.',
  },
  {
    title: 'Olvidar calcular la media primero',
    desc: 'La desviación estándar mide la distancia de cada dato respecto a la media. Sin la media, no es posible obtener el resultado.',
  },
  {
    title: 'Usar un solo dato para la desviación muestral',
    desc: 'Con un único valor, el divisor n−1 es 0, lo que hace inválido el cálculo. Se necesitan al menos 2 datos para la desviación muestral.',
  },
  {
    title: 'Confundir varianza con desviación estándar',
    desc: 'La varianza es la dispersión cuadrática. La desviación estándar es su raíz cuadrada. Ambas miden dispersión, pero en unidades distintas.',
  },
  {
    title: 'Interpretar una desviación alta sin revisar el contexto',
    desc: 'Una desviación estándar alta no siempre es negativa. Depende del contexto: puede indicar variedad normal en un conjunto de mediciones amplio.',
  },
];

export function DesviacionErrors() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="errors-desv-heading">
      <div className="site-shell">
        <p className="eyebrow">Precauciones</p>
        <h2 id="errors-desv-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Errores comunes al calcular desviación estándar
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {errors.map(err => (
            <div
              key={err.title}
              className="rounded-2xl px-5 py-5"
              style={{ background: '#F8FAFC', border: '1px solid #D7E2EA' }}
            >
              <div className="mb-2 flex items-start gap-2">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{ background: '#FFE9E9', color: '#c0392b' }}
                  aria-hidden="true"
                >
                  !
                </span>
                <p className="text-sm font-bold text-ink">{err.title}</p>
              </div>
              <p className="text-xs leading-relaxed text-slate">{err.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
