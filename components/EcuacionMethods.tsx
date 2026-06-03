const methods = [
  {
    name: 'Despeje de variable',
    formula: 'ax + b = c → ax = c - b → x = (c - b) / a',
    desc: 'Se aplican las mismas operaciones en ambos lados hasta aislar la variable.',
  },
  {
    name: 'Discriminante',
    formula: 'D = b² - 4ac',
    desc: 'Determina el número y tipo de soluciones de una ecuación cuadrática antes de calcularlas.',
  },
  {
    name: 'Fórmula general',
    formula: 'x = (-b ± √D) / 2a',
    desc: 'Resuelve cualquier ecuación cuadrática ax² + bx + c = 0 calculando ambas raíces.',
  },
  {
    name: 'Comprobación',
    formula: 'Sustituir la solución en la ecuación original',
    desc: 'Se sustituye el valor obtenido en la ecuación original para verificar que ambos lados son iguales.',
  },
];

export function EcuacionMethods() {
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="methods-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Referencia</p>
          <h2 id="methods-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Métodos para resolver ecuaciones
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {methods.map((m) => (
            <div key={m.name} className="academic-card p-5">
              <p className="mb-3 text-sm font-bold text-ink">{m.name}</p>
              <div className="mb-3 rounded-lg px-4 py-2.5" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
                <p className="font-mono text-sm font-semibold text-deep-teal">{m.formula}</p>
              </div>
              <p className="text-xs leading-relaxed text-muted">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
