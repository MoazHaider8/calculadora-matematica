const items = [
  {
    title: 'Usar regla directa cuando la relación es inversa',
    desc:  'Si al aumentar una magnitud la otra disminuye, la relación es inversa. Usar regla directa en ese caso da un resultado incorrecto.',
  },
  {
    title: 'Ordenar mal los valores A, B y C',
    desc:  'La posición de cada valor importa. A y B deben corresponder al mismo par conocido, y C al valor del que quieres saber X.',
  },
  {
    title: 'Dividir entre cero',
    desc:  'El valor A no puede ser 0. En regla inversa, el valor C tampoco puede ser 0. La calculadora muestra un aviso en ambos casos.',
  },
  {
    title: 'Confundir porcentaje con proporción',
    desc:  'La regla de tres trabaja con magnitudes proporcionales. Para descuentos o aumentos porcentuales, usa la calculadora de porcentajes.',
  },
  {
    title: 'No verificar si las magnitudes son comparables',
    desc:  'Los valores A y C deben medir lo mismo (por ejemplo, ambos en kilogramos o ambos en horas). Mezclar unidades distintas da resultados sin sentido.',
  },
  {
    title: 'Redondear demasiado pronto',
    desc:  'Si redondes A, B o C antes de calcular, el error se multiplica. Trabaja con los valores exactos y redondea solo el resultado final.',
  },
];

export function ReglaTresErrors() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="errores-rt-heading">
      <div className="site-shell">
        <p className="eyebrow">Consejos</p>
        <h2 id="errores-rt-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Errores comunes al calcular regla de tres
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(item => (
            <div
              key={item.title}
              className="rounded-2xl bg-white px-5 py-5"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div className="mb-2 flex items-start gap-2.5">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: '#B45309' }}
                  aria-hidden="true"
                >
                  !
                </span>
                <p className="text-sm font-bold text-ink">{item.title}</p>
              </div>
              <p className="text-xs leading-relaxed text-slate">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
