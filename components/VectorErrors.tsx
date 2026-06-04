const errors = [
  {
    mistake: 'Sumar componentes en orden incorrecto',
    fix: 'Cada componente del vector A se suma solo con la componente correspondiente del vector B. La primera componente de A siempre va con la primera de B.',
  },
  {
    mistake: 'Confundir producto punto con producto cruz',
    fix: 'El producto punto devuelve un escalar. El producto cruz devuelve un vector. Son operaciones distintas con resultados de naturaleza diferente.',
  },
  {
    mistake: 'Intentar producto cruz con vectores 2D',
    fix: 'El producto cruz solo está definido para vectores en tres dimensiones. Para vectores 2D no existe este tipo de producto vectorial.',
  },
  {
    mistake: 'Olvidar que la norma siempre es no negativa',
    fix: 'La norma o magnitud de un vector es siempre mayor o igual que cero. No puede ser negativa porque es la raíz cuadrada de la suma de cuadrados.',
  },
  {
    mistake: 'Calcular vector unitario de un vector cero',
    fix: 'El vector cero (0, 0) o (0, 0, 0) no tiene dirección y no se puede normalizar. Asegúrate de que el vector tenga al menos una componente distinta de cero.',
  },
  {
    mistake: 'Calcular ángulo con un vector cero',
    fix: 'La fórmula del ángulo requiere dividir entre las normas de ambos vectores. Si una norma es cero el ángulo no está definido.',
  },
];

export function VectorErrors() {
  return (
    <section className="bg-panel py-12 lg:py-14" aria-labelledby="errors-vec-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Errores frecuentes</p>
          <h2
            id="errors-vec-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Errores comunes al operar vectores
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
