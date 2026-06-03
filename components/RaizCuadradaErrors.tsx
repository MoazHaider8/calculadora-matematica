const errors = [
  {
    title: 'Confundir raíz cuadrada con dividir entre 2',
    body: 'La raíz cuadrada de 16 es 4, no 8. Dividir entre 2 es una operación diferente.',
  },
  {
    title: 'Olvidar que la raíz principal es no negativa',
    body: 'La raíz cuadrada principal de 25 es 5, no -5. Aunque (-5)² = 25, la raíz principal se define como el resultado no negativo.',
  },
  {
    title: 'Redondear demasiado pronto',
    body: 'Si el resultado es decimal, redondear antes de usarlo en otros cálculos puede acumular errores. Usa la aproximación completa cuando sea posible.',
  },
  {
    title: 'Pedir raíz cuadrada real de un número negativo',
    body: 'En los números reales, √(-9) no existe. Ese cálculo requiere números complejos, que están fuera del alcance de esta herramienta.',
  },
  {
    title: 'No simplificar el radical cuando es posible',
    body: 'Dejar √72 sin simplificar es menos preciso que escribir 6√2. Simplificar extrae los factores cuadrados perfectos del radicando.',
  },
  {
    title: 'No comprobar elevando al cuadrado',
    body: 'Siempre puedes verificar que el resultado es correcto elevándolo al cuadrado. Si obtienes el radicando original, la raíz es correcta.',
  },
];

export function RaizCuadradaErrors() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="errors-raizc-heading">
      <div className="site-shell">
        <p className="eyebrow">Errores frecuentes</p>
        <h2
          id="errors-raizc-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Errores comunes al calcular raíz cuadrada
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
