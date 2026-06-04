const errors = [
  {
    mistake: 'Confundir parte y total',
    fix: 'Al calcular "qué porcentaje es", la parte siempre es el valor menor y el total es el valor de referencia. Si inviertes los campos obtendrás un porcentaje mayor de 100%.',
  },
  {
    mistake: 'Usar total igual a cero',
    fix: 'No se puede calcular un porcentaje cuando el total es cero, ya que implica dividir entre cero. Asegúrate de que el total sea un número distinto de cero.',
  },
  {
    mistake: 'Aplicar el descuento sobre el valor equivocado',
    fix: 'El porcentaje de descuento siempre se aplica sobre el precio original, no sobre el precio final. Introduce el precio antes del descuento en el campo correspondiente.',
  },
  {
    mistake: 'Confundir aumento con cambio porcentual',
    fix: 'El aumento parte de un valor base y añade un porcentaje. El cambio porcentual compara dos valores distintos y calcula cuánto cambiaron en porcentaje.',
  },
  {
    mistake: 'Redondear demasiado pronto',
    fix: 'Introduce los valores exactos sin redondear. Si redondeas los valores de entrada el resultado final también se verá afectado y puede diferir del valor real.',
  },
  {
    mistake: 'Escribir 25 como 0.25 cuando el campo pide porcentaje',
    fix: 'Los campos de porcentaje esperan el valor entero: escribe 25 para referirte al 25%. Si escribes 0.25 la calculadora lo interpretará como el 0.25%, que es un valor muy diferente.',
  },
];

export function PorcentajesErrors() {
  return (
    <section className="bg-panel py-12 lg:py-14" aria-labelledby="errors-pct-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Errores frecuentes</p>
          <h2
            id="errors-pct-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Errores comunes al calcular porcentajes
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
