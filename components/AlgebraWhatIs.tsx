const entities = [
  'Variables y expresiones',
  'Ecuaciones algebraicas',
  'Polinomios',
  'Factorización',
  'Raíces y radicales',
];

export function AlgebraWhatIs() {
  return (
    <section
      className="py-12 lg:py-16"
      style={{ background: '#EEF4F7' }}
      aria-labelledby="whatis-algebra-heading"
    >
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">

          <div className="lg:col-span-4">
            <p className="eyebrow">Contexto matemático</p>
            <h2
              id="whatis-algebra-heading"
              className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
              style={{ color: '#102a43' }}
            >
              ¿Qué es el álgebra?
            </h2>
            <div className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: '#829ab1' }}>
                También cubre
              </p>
              <div className="flex flex-col gap-2">
                {entities.map((e) => (
                  <span
                    key={e}
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: '#0F5C5C' }}
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: '#D8A31A' }}
                      aria-hidden="true"
                    />
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div
              className="rounded-2xl bg-white p-7"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
            >
              <p className="text-base leading-relaxed" style={{ color: '#334e68' }}>
                El álgebra estudia las relaciones entre cantidades usando variables y símbolos. En lugar de trabajar solo con números concretos, permite escribir expresiones generales válidas para cualquier valor, lo que hace posible resolver problemas de forma sistemática.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#334e68' }}>
                Esta categoría reúne cinco herramientas organizadas por tipo de operación: la calculadora de ecuaciones para resolver igualdades con incógnitas, la calculadora algebraica para simplificar y factorizar expresiones, la calculadora de polinomios para operar con expresiones de grado superior, la calculadora de raíces para encontrar los ceros de una expresión y la calculadora de raíz cuadrada para trabajar con radicales.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#334e68' }}>
                El álgebra es la base del cálculo y de la mayoría de las disciplinas técnicas y científicas. Entender sus operaciones fundamentales facilita el trabajo con funciones, ecuaciones diferenciales y cualquier modelo matemático que use variables.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
