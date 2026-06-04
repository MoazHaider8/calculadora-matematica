const errors = [
  {
    mistake: 'Escribir coeficientes en columnas incorrectas',
    fix: 'Cada columna corresponde a una variable concreta. El coeficiente de x va en la columna x, el de y en la columna y. Un coeficiente mal colocado da un sistema distinto al que quieres resolver.',
  },
  {
    mistake: 'Olvidar los términos independientes',
    fix: 'La última columna de cada fila es el término independiente, el valor al que es igual la ecuación. Si se deja en cero, el sistema cambia completamente.',
  },
  {
    mistake: 'Confundir un sistema con una sola ecuación',
    fix: 'Un sistema necesita tantas ecuaciones como incógnitas para poder tener solución única. Una sola ecuación con dos variables tiene infinitas soluciones posibles.',
  },
  {
    mistake: 'No comprobar la solución',
    fix: 'Siempre sustituye los valores obtenidos en las ecuaciones originales. Si no se satisfacen, hay un error en los coeficientes introducidos o en el cálculo.',
  },
  {
    mistake: 'Ignorar los casos sin solución',
    fix: 'Si la calculadora indica que el sistema no tiene solución, no es un error. Significa que las ecuaciones son incompatibles y no comparten ningún punto de intersección.',
  },
  {
    mistake: 'Redondear coeficientes demasiado pronto',
    fix: 'Introduce los coeficientes exactos en la cuadrícula. Si los redondeas antes de calcular, el resultado puede ser incorrecto o el tipo de sistema puede cambiar.',
  },
];

export function SistemasErrors() {
  return (
    <section className="bg-panel py-12 lg:py-14" aria-labelledby="errors-sis-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Errores frecuentes</p>
          <h2
            id="errors-sis-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Errores comunes al resolver sistemas
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
