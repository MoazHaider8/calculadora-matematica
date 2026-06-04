const errors = [
  {
    mistake: 'Intentar invertir una matriz no cuadrada',
    fix: 'La matriz inversa solo está definida para matrices cuadradas (n×n). Una matriz rectangular no tiene inversa.',
  },
  {
    mistake: 'Olvidar comprobar el determinante',
    fix: 'Antes de calcular la inversa, verifica que det(A) ≠ 0. Si el determinante es cero, la matriz es singular y no tiene inversa.',
  },
  {
    mistake: 'Confundir matriz inversa con transpuesta',
    fix: 'La transpuesta intercambia filas y columnas de A. La inversa es una matriz distinta tal que A · A⁻¹ = I. Son operaciones diferentes.',
  },
  {
    mistake: 'Pensar que toda matriz tiene inversa',
    fix: 'Solo las matrices invertibles tienen inversa. Las matrices singulares (det = 0) no tienen inversa. Esto es frecuente en sistemas dependientes.',
  },
  {
    mistake: 'Redondear coeficientes demasiado pronto',
    fix: 'Introduce los valores exactos en la cuadrícula. Redondear antes de calcular puede cambiar el determinante y hacer que una matriz invertible parezca singular.',
  },
  {
    mistake: 'No comprobar con A · A⁻¹ = I',
    fix: 'Verifica siempre el resultado multiplicando A por A⁻¹. Si el producto no es la identidad, hay un error en los coeficientes introducidos.',
  },
];

export function MatrizInversaErrors() {
  return (
    <section className="bg-panel py-12 lg:py-14" aria-labelledby="errors-inv-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Errores frecuentes</p>
          <h2
            id="errors-inv-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Errores comunes al calcular la matriz inversa
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
