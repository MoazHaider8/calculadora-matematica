const errors = [
  {
    title: 'Usar unidades cuadradas en lugar de cúbicas',
    desc: 'El volumen siempre se expresa en unidades cúbicas (cm³, m³). El resultado nunca es en cm² o m².',
  },
  {
    title: 'Confundir área con volumen',
    desc: 'El área mide la superficie de figuras planas en 2D. El volumen mide el espacio de cuerpos en 3D. Son magnitudes distintas.',
  },
  {
    title: 'Olvidar dividir entre 3 en conos o pirámides',
    desc: 'Las fórmulas de cono (V = πr²h / 3) y pirámide (V = A_base × h / 3) incluyen una división entre 3 que es fácil de omitir.',
  },
  {
    title: 'Usar diámetro como radio en cilindros o esferas',
    desc: 'Las fórmulas V = πr²h y V = 4/3πr³ usan el radio. Si conoces el diámetro, divídelo entre 2 antes de introducirlo.',
  },
  {
    title: 'Introducir una altura incorrecta',
    desc: 'La altura en las fórmulas de volumen es la altura perpendicular, no la longitud de un lado inclinado.',
  },
  {
    title: 'Usar medidas negativas o cero',
    desc: 'Las dimensiones de un cuerpo geométrico deben ser mayores que 0. Un radio, lado o altura negativo o nulo no tiene sentido.',
  },
];

export function VolumenErrors() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="errors-vol-heading">
      <div className="site-shell">
        <p className="eyebrow">Precauciones</p>
        <h2 id="errors-vol-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Errores comunes al calcular volumen
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
