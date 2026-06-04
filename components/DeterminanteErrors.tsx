const errors = [
  {
    mistake: 'Calcular el determinante de una matriz no cuadrada',
    fix: 'El determinante solo está definido para matrices cuadradas. Verifica que el número de filas sea igual al número de columnas.',
  },
  {
    mistake: 'Confundir determinante con matriz inversa',
    fix: 'El determinante es un número escalar. La inversa es otra matriz. Son conceptos distintos: det(A) ≠ A⁻¹.',
  },
  {
    mistake: 'Cambiar el signo en la fórmula 2×2',
    fix: 'La fórmula correcta es ad − bc, no ad + bc. El signo negativo en el segundo término es fundamental.',
  },
  {
    mistake: 'Aplicar la regla de Sarrus a matrices que no son 3×3',
    fix: 'La regla de Sarrus solo es válida para matrices 3×3. Para otros tamaños se usa expansión por cofactores.',
  },
  {
    mistake: 'Dejar celdas vacías en la matriz',
    fix: 'Todas las celdas deben tener un valor. Una celda vacía puede interpretarse como cero o producir un error en el cálculo.',
  },
  {
    mistake: 'Confundir filas y columnas al introducir la matriz',
    fix: 'Las filas son horizontales y las columnas son verticales. Introduce los valores en el orden correcto: fila por fila, de izquierda a derecha.',
  },
];

export function DeterminanteErrors() {
  return (
    <section className="bg-panel py-12 lg:py-14" aria-labelledby="errors-det-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Errores frecuentes</p>
          <h2
            id="errors-det-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Errores comunes al calcular determinantes
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {errors.map((e) => (
            <div
              key={e.mistake}
              className="rounded-2xl bg-white p-5"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <p className="mb-2 flex items-start gap-2 text-sm font-bold" style={{ color: '#b91c1c' }}>
                <span aria-hidden="true" className="shrink-0 text-base leading-none">✕</span>
                {e.mistake}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#627d98' }}>{e.fix}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
