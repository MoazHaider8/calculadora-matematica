const concepts = [
  {
    id: 'fracciones',
    symbol: 'a/b',
    title: 'Fracciones',
    body: 'Representan partes de un entero. Permiten expresar y operar con cantidades no enteras de forma exacta.',
    tool: 'Calculadora de Fracciones',
  },
  {
    id: 'porcentajes',
    symbol: '%',
    title: 'Porcentajes',
    body: 'Expresan una cantidad como parte de cien. Se usan para descuentos, impuestos y variaciones proporcionales.',
    tool: 'Calculadora de Porcentajes',
  },
  {
    id: 'promedio',
    symbol: 'x̄',
    title: 'Promedio',
    body: 'La media aritmética es la suma de todos los valores dividida entre la cantidad de valores.',
    tool: 'Calculadora de Promedio',
  },
  {
    id: 'proporciones',
    symbol: 'a:b',
    title: 'Proporciones',
    body: 'Expresan la relación entre dos cantidades. La regla de tres permite encontrar un valor desconocido en una proporción.',
    tool: 'Calculadora de Regla de Tres',
  },
  {
    id: 'basicas',
    symbol: '+ − × ÷',
    title: 'Operaciones básicas',
    body: 'Suma, resta, multiplicación y división. Son la base de toda la aritmética y aparecen en todas las demás operaciones.',
    tool: 'Calculadora Científica',
  },
  {
    id: 'cientificas',
    symbol: 'f(x)',
    title: 'Funciones científicas',
    body: 'Logaritmos, trigonometría, exponentes y raíces. Amplían el cálculo aritmético hacia áreas de ciencias y matemáticas.',
    tool: 'Calculadora Científica',
  },
];

export function AritmeticaConcepts() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="concepts-arit-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Contenido de la categoría</p>
          <h2
            id="concepts-arit-heading"
            className="mt-3 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
            style={{ color: '#102a43' }}
          >
            Conceptos de aritmética incluidos
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: '#627d98' }}>
            Estos son los conceptos matemáticos que cubren las herramientas de aritmética disponibles en esta categoría.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((c) => (
            <div
              key={c.id}
              className="overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              <div className="flex items-center gap-3 px-5 py-3" style={{ background: '#F0FAF9', borderBottom: '1px solid #D7E2EA' }}>
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold"
                  style={{ background: '#0a3535', color: '#D8A31A' }}
                  aria-hidden="true"
                >
                  {c.symbol.length > 3 ? c.symbol.charAt(0) : c.symbol}
                </div>
                <p className="text-sm font-bold" style={{ color: '#102a43' }}>{c.title}</p>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm leading-relaxed" style={{ color: '#627d98' }}>{c.body}</p>
                <p className="mt-3 text-xs font-semibold" style={{ color: '#0F5C5C' }}>
                  {c.tool}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
