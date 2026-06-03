const errors = [
  {
    title: 'Sumar matrices con dimensiones distintas',
    body: 'Para sumar o restar matrices, ambas deben tener las mismas dimensiones. Una matriz 2×2 no se puede sumar con una 2×3.',
  },
  {
    title: 'Multiplicar matrices incompatibles',
    body: 'El número de columnas de A debe coincidir con el número de filas de B. A(2×3) × B(2×2) no es válido porque 3 ≠ 2.',
  },
  {
    title: 'Confundir filas y columnas',
    body: 'Una matriz m×n tiene m filas y n columnas. Introducir los datos en el orden incorrecto produce resultados erróneos.',
  },
  {
    title: 'Olvidar que la multiplicación no es conmutativa',
    body: 'A × B no es siempre igual a B × A. El orden de las matrices importa en la multiplicación matricial.',
  },
  {
    title: 'Dejar celdas vacías',
    body: 'Todas las celdas de la cuadrícula deben contener un número. Una celda vacía impide el cálculo.',
  },
  {
    title: 'Confundir transpuesta con inversa',
    body: 'La transpuesta intercambia filas y columnas y siempre existe. La inversa A⁻¹ es diferente y solo existe cuando el determinante es distinto de cero.',
  },
];

export function MatricesErrors() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="errors-matrices-heading">
      <div className="site-shell">
        <p className="eyebrow">Errores frecuentes</p>
        <h2
          id="errors-matrices-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Errores comunes al operar matrices
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {errors.map((err) => (
            <div key={err.title} className="academic-card p-5">
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ background: '#FEF3C7', color: '#D97706' }}
                  aria-hidden="true"
                >
                  !
                </span>
                <h3 className="text-sm font-bold text-ink">{err.title}</h3>
              </div>
              <p className="text-xs leading-relaxed text-slate">{err.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
