const concepts = [
  {
    symbol: 'x',
    name: 'Variables',
    description: 'Una variable es un símbolo que representa una cantidad desconocida o que puede cambiar. Las variables permiten escribir expresiones generales válidas para cualquier valor.',
    relatedTool: 'Calculadora Algebraica',
  },
  {
    symbol: '=',
    name: 'Ecuaciones',
    description: 'Una ecuación establece que dos expresiones son iguales. Resolver una ecuación significa encontrar los valores de la variable que satisfacen esa igualdad.',
    relatedTool: 'Calculadora de Ecuaciones',
  },
  {
    symbol: 'ax²',
    name: 'Expresiones algebraicas',
    description: 'Una expresión algebraica combina variables, números y operaciones sin signo de igualdad. Pueden simplificarse, expandirse o factorizarse.',
    relatedTool: 'Calculadora Algebraica',
  },
  {
    symbol: 'p(x)',
    name: 'Polinomios',
    description: 'Un polinomio es una expresión algebraica formada por la suma de términos con variables elevadas a exponentes enteros no negativos. Su grado es el exponente más alto.',
    relatedTool: 'Calculadora de Polinomios',
  },
  {
    symbol: 'r',
    name: 'Raíces',
    description: 'Las raíces de una expresión algebraica son los valores de la variable que hacen que la expresión sea igual a cero. Un polinomio de grado n tiene exactamente n raíces complejas.',
    relatedTool: 'Calculadora de Raíces',
  },
  {
    symbol: '√',
    name: 'Raíz cuadrada',
    description: 'La raíz cuadrada de un número es el valor que, al elevarse al cuadrado, da ese número. Se usa frecuentemente en la fórmula cuadrática y en expresiones con radicales.',
    relatedTool: 'Calculadora de Raíz Cuadrada',
  },
];

export function AlgebraConcepts() {
  return (
    <section
      className="py-12 lg:py-16"
      style={{ background: '#EEF4F7' }}
      aria-labelledby="concepts-algebra-heading"
    >
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Conceptos clave</p>
          <h2
            id="concepts-algebra-heading"
            className="mt-3 text-[1.85rem] font-bold leading-tight lg:text-[2.2rem]"
            style={{ color: '#102a43' }}
          >
            Conceptos de álgebra incluidos
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Las herramientas de esta categoría cubren estos conceptos algebraicos fundamentales.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl bg-white p-5"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold"
                  style={{ background: '#DDF3F0', color: '#147c7c' }}
                  aria-hidden="true"
                >
                  {c.symbol}
                </div>
                <h3 className="text-base font-bold" style={{ color: '#102a43' }}>{c.name}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#334e68' }}>{c.description}</p>
              <div className="mt-4 border-t pt-3" style={{ borderColor: '#EEF4F7' }}>
                <p className="text-xs font-semibold" style={{ color: '#829ab1' }}>
                  Herramienta relacionada:
                  <span className="ml-1" style={{ color: '#0F5C5C' }}>{c.relatedTool}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
