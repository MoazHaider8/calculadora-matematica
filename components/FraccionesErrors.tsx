const errors = [
  {
    mistake: 'Sumar denominadores directamente',
    fix: 'Al sumar fracciones nunca se suman los denominadores. Solo se suman los numeradores después de encontrar el denominador común. Por ejemplo, 1/2 + 1/3 no es 2/5.',
  },
  {
    mistake: 'Olvidar el denominador común',
    fix: 'Para sumar o restar fracciones con distinto denominador es obligatorio encontrar el mínimo común múltiplo antes de operar con los numeradores.',
  },
  {
    mistake: 'No simplificar el resultado',
    fix: 'Siempre divide numerador y denominador entre el máximo común divisor para obtener la fracción en su forma más simple. Por ejemplo, 4/8 debe simplificarse a 1/2.',
  },
  {
    mistake: 'Dividir sin usar el recíproco',
    fix: 'Para dividir fracciones no se dividen numeradores y denominadores directamente. Se multiplica la primera fracción por el recíproco de la segunda: a/b ÷ c/d = a/b × d/c.',
  },
  {
    mistake: 'Escribir el denominador como 0',
    fix: 'El denominador nunca puede ser 0. Una fracción con denominador 0 no está definida matemáticamente.',
  },
  {
    mistake: 'Confundir fracción impropia con fracción mixta',
    fix: 'Una fracción impropia como 5/4 y una fracción mixta como 1 1/4 representan el mismo valor, pero tienen formas distintas. Esta calculadora muestra ambas automáticamente.',
  },
];

export function FraccionesErrors() {
  return (
    <section className="bg-panel py-12 lg:py-14" aria-labelledby="errors-frac-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Errores frecuentes</p>
          <h2
            id="errors-frac-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Errores comunes al operar fracciones
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
