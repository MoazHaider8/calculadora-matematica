const errors = [
  {
    title: 'Confundir muestra con población',
    desc: 'Si los datos son una muestra de una población mayor, usa varianza muestral (n−1). Si son todos los datos disponibles, usa la poblacional (n).',
  },
  {
    title: 'Olvidar calcular la media primero',
    desc: 'La varianza mide las diferencias respecto a la media. Sin calcular la media correctamente, el resultado será erróneo.',
  },
  {
    title: 'No elevar las diferencias al cuadrado',
    desc: 'Las diferencias deben elevarse al cuadrado antes de sumarlas. Sin este paso, las diferencias positivas y negativas se cancelarían.',
  },
  {
    title: 'Dividir entre n cuando corresponde n − 1',
    desc: 'Para la varianza muestral el divisor es n−1. Usar n en ese caso produce una estimación sesgada de la varianza de la población.',
  },
  {
    title: 'Redondear demasiado pronto',
    desc: 'Los valores intermedios (media, diferencias cuadradas) deben mantenerse con precisión completa. El redondeo anticipado acumula errores.',
  },
  {
    title: 'Confundir varianza con desviación estándar',
    desc: 'La varianza es σ² o s². La desviación estándar es su raíz cuadrada. Son dos medidas distintas aunque relacionadas.',
  },
];

export function VarianzaErrors() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="errors-var-heading">
      <div className="site-shell">
        <p className="eyebrow">Precauciones</p>
        <h2 id="errors-var-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Errores comunes al calcular varianza
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
