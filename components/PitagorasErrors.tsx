const errors = [
  {
    title: 'Usar Pitágoras en triángulos no rectángulos',
    desc: 'El teorema de Pitágoras solo aplica en triángulos rectángulos. Si el triángulo no tiene ángulo de 90°, el resultado será incorrecto.',
  },
  {
    title: 'Confundir cateto con hipotenusa',
    desc: 'La hipotenusa es siempre el lado más largo y está frente al ángulo recto. Identificarla incorrectamente lleva a resultados erróneos.',
  },
  {
    title: 'Introducir hipotenusa menor que un cateto',
    desc: 'La hipotenusa debe ser mayor que cualquiera de los catetos. Si no se cumple esta condición, no existe ningún triángulo rectángulo con esos valores.',
  },
  {
    title: 'Olvidar aplicar la raíz cuadrada',
    desc: 'Después de calcular a² + b², hay que aplicar raíz cuadrada para obtener c. Sin ese paso, el resultado es el cuadrado del lado, no el lado.',
  },
  {
    title: 'Sumar lados directamente en lugar de cuadrados',
    desc: 'La fórmula es a² + b² = c², no a + b = c. Sumar los lados sin elevarlos al cuadrado es un error frecuente.',
  },
  {
    title: 'Redondear los catetos antes de calcular',
    desc: 'Si los catetos tienen decimales, hay que mantener la precisión durante el cálculo y redondear solo el resultado final.',
  },
];

export function PitagorasErrors() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="errors-pit-heading">
      <div className="site-shell">
        <p className="eyebrow">Consejos</p>
        <h2 id="errors-pit-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Errores comunes al usar Pitágoras
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {errors.map(e => (
            <div
              key={e.title}
              className="rounded-2xl bg-white p-5"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div
                className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg text-sm font-bold text-white"
                style={{ background: '#c0392b' }}
                aria-hidden="true"
              >
                !
              </div>
              <p className="text-sm font-bold text-ink">{e.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
