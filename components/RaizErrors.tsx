const errors = [
  {
    title: 'Confundir radicando e índice',
    body: 'El radicando es el número bajo la raíz. El índice indica el tipo de raíz (2, 3, 4). Intercambiarlos produce un resultado diferente.',
  },
  {
    title: 'Usar índice 0',
    body: 'El índice 0 no tiene significado matemático. El índice mínimo válido es 2.',
  },
  {
    title: 'Pedir raíz par de número negativo',
    body: 'En los números reales, la raíz de índice par de un número negativo no existe. Para ese caso se necesitan números complejos.',
  },
  {
    title: 'Redondear demasiado pronto',
    body: 'Si el resultado es decimal, redondear antes de comprobar puede causar errores. Usa la aproximación completa para la verificación.',
  },
  {
    title: 'Confundir raíz con potencia',
    body: 'La raíz cúbica de 8 es 2, no 8³ = 512. La raíz es la operación inversa a la potencia.',
  },
  {
    title: 'Olvidar comprobar el resultado',
    body: 'Siempre puedes verificar elevando el resultado al índice. Si es correcto, obtienes el radicando original.',
  },
];

export function RaizErrors() {
  return (
    <section className="py-12 lg:py-16 bg-white-soft" aria-labelledby="errors-raiz-heading">
      <div className="site-shell">
        <p className="eyebrow">Errores frecuentes</p>
        <h2
          id="errors-raiz-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Errores comunes al calcular raíces
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {errors.map((err) => (
            <div
              key={err.title}
              className="rounded-xl bg-white px-5 py-5"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 1px 8px rgba(16,42,67,0.04)' }}
            >
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ background: '#FEF3C7', color: '#D97706' }}
                  aria-hidden="true"
                >
                  !
                </span>
                <h3 className="text-sm font-bold" style={{ color: '#102a43' }}>{err.title}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#627d98' }}>{err.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
