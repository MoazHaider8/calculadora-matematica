const errors = [
  {
    title: 'Usar unidades lineales en el resultado',
    desc: 'El área siempre se expresa en unidades cuadradas (cm², m²). El resultado nunca es en cm o metros.',
  },
  {
    title: 'Olvidar dividir entre 2 en triángulos',
    desc: 'La fórmula del triángulo es A = base × altura / 2. Es un error frecuente calcular solo base × altura y olvidar la división.',
  },
  {
    title: 'Usar diámetro como radio en círculos',
    desc: 'La fórmula A = πr² usa el radio, no el diámetro. Si conoces el diámetro, debes dividirlo entre 2 antes de introducirlo.',
  },
  {
    title: 'Confundir área con perímetro',
    desc: 'El área mide la superficie interior de la figura. El perímetro mide la longitud del contorno. Son magnitudes distintas.',
  },
  {
    title: 'Usar altura inclinada en lugar de perpendicular',
    desc: 'La altura en las fórmulas de área es siempre la altura perpendicular, no el lado inclinado. Esto afecta sobre todo a paralelogramos y trapecios.',
  },
  {
    title: 'Introducir medidas negativas o cero',
    desc: 'Las dimensiones de una figura deben ser mayores que 0. Un lado, base, radio o diagonal negativo o nulo no tiene sentido geométrico.',
  },
];

export function AreaErrors() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="errors-area-heading">
      <div className="site-shell">
        <p className="eyebrow">Precauciones</p>
        <h2 id="errors-area-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Errores comunes al calcular área
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
