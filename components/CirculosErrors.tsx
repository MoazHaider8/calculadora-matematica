const errors = [
  {
    title: 'Usar el diámetro como si fuera radio',
    desc: 'Al calcular el área con el diámetro en lugar del radio obtendrás un resultado cuatro veces mayor. Usa siempre el tipo de entrada correcto.',
  },
  {
    title: 'Olvidar elevar el radio al cuadrado',
    desc: 'En la fórmula A = πr², el radio va elevado al cuadrado. Multiplicar π × r sin el cuadrado da un resultado incorrecto.',
  },
  {
    title: 'Confundir circunferencia con área',
    desc: 'La circunferencia mide el contorno del círculo y se expresa en unidades lineales. El área mide la superficie interior y se expresa en unidades cuadradas.',
  },
  {
    title: 'Usar unidades lineales para el área',
    desc: 'El área siempre se expresa en unidades cuadradas: cm², m², etc. Escribir cm en lugar de cm² es un error de unidad aunque el número sea correcto.',
  },
  {
    title: 'Redondear π demasiado pronto',
    desc: 'Usar π ≈ 3.14 en cálculos intermedios acumula errores de redondeo. Esta calculadora usa el valor de π con alta precisión.',
  },
  {
    title: 'Introducir cero o valores negativos',
    desc: 'Un círculo no puede tener radio, diámetro, circunferencia ni área iguales a cero o negativos. La calculadora muestra un error en estos casos.',
  },
];

export function CirculosErrors() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="errors-circ-heading">
      <div className="site-shell">
        <p className="eyebrow">Consejos</p>
        <h2 id="errors-circ-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Errores comunes al calcular círculos
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
