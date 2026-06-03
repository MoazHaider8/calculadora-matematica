const errors = [
  {
    n: '01',
    title: 'Confundir el valor del límite con el valor de la función',
    desc: 'El límite de f(x) cuando x→a no es necesariamente igual a f(a). En puntos de discontinuidad, la función puede no estar definida aunque el límite exista.',
  },
  {
    n: '02',
    title: 'Ignorar los límites laterales',
    desc: 'Al estudiar un punto donde hay un salto o asíntota, es obligatorio analizar ambos lados. Saltarse este paso puede llevar a concluir que el límite existe cuando en realidad no existe.',
  },
  {
    n: '03',
    title: 'Olvidar revisar la indeterminación',
    desc: 'Al obtener 0/0 o ∞/∞ por sustitución directa, no significa que el límite sea 0 ni que no exista. Hay que simplificar la expresión o analizar el comportamiento numérico.',
  },
  {
    n: '04',
    title: 'Usar infinito como un número ordinario',
    desc: 'Infinito no es un número, es un concepto de comportamiento. No se puede sustituir x = ∞ directamente. El análisis al infinito usa valores cada vez mayores para estudiar la tendencia.',
  },
  {
    n: '05',
    title: 'Asumir que el límite existe sin comparar ambos lados',
    desc: 'Para el límite bilateral, siempre hay que verificar que los límites laterales coincidan. Para funciones como 1/x en x = 0, los lados dan valores opuestos y el límite no existe.',
  },
  {
    n: '06',
    title: 'No escribir paréntesis en expresiones racionales',
    desc: 'La expresión x^2 - 4/x - 2 se interpreta como x² - (4/x) - 2, no como (x² - 4)/(x - 2). Usa paréntesis para indicar el numerador y el denominador correctamente.',
  },
];

export function LimiteErrors() {
  return (
    <section className="py-10 lg:py-14" style={{ background: '#EEF4F7' }} aria-labelledby="errors-limite-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Guía de errores</p>
          <h2 id="errors-limite-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Errores comunes al calcular límites
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-soft">
            Situaciones frecuentes que producen resultados incorrectos o mensajes de error.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {errors.map((e) => (
            <div key={e.n} className="academic-card p-5">
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-heading text-xs font-bold"
                  style={{ background: '#FFF4CC', color: '#b58000' }}
                >
                  {e.n}
                </span>
                <p className="font-heading text-sm font-bold text-ink">{e.title}</p>
              </div>
              <p className="text-sm leading-relaxed text-slate">{e.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
