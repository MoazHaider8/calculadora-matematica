const examples = [
  {
    id: 1,
    tag: 'Rectángulo',
    datos: 'base = 8, altura = 5',
    formula: 'A = base × altura',
    resultado: '40',
    proc: 'A = 8 × 5 = 40',
    explicacion: 'Se multiplica la base por la altura. El rectángulo tiene una superficie de 40 unidades cuadradas.',
  },
  {
    id: 2,
    tag: 'Cuadrado',
    datos: 'lado = 6',
    formula: 'A = lado²',
    resultado: '36',
    proc: 'A = 6² = 36',
    explicacion: 'Se eleva el lado al cuadrado. Un cuadrado de lado 6 tiene un área de 36 unidades cuadradas.',
  },
  {
    id: 3,
    tag: 'Triángulo',
    datos: 'base = 10, altura = 6',
    formula: 'A = base × altura / 2',
    resultado: '30',
    proc: 'A = 10 × 6 / 2 = 30',
    explicacion: 'Se multiplica base por altura y se divide entre 2. El triángulo tiene la mitad del área del rectángulo equivalente.',
  },
  {
    id: 4,
    tag: 'Círculo',
    datos: 'radio = 4',
    formula: 'A = πr²',
    resultado: '≈ 50.2655',
    proc: 'A = π × 4² = π × 16 ≈ 50.2655',
    explicacion: 'Se multiplica π por el radio al cuadrado. El resultado es aproximado porque π es irracional.',
  },
  {
    id: 5,
    tag: 'Trapecio',
    datos: 'B = 10, b = 6, h = 4',
    formula: 'A = (B + b) × h / 2',
    resultado: '32',
    proc: 'A = (10 + 6) × 4 / 2 = 16 × 4 / 2 = 32',
    explicacion: 'Se suman las dos bases, se multiplica por la altura y se divide entre 2.',
  },
];

export function AreaExamples() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="examples-area-heading">
      <div className="site-shell">
        <p className="eyebrow">Práctica</p>
        <h2 id="examples-area-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Ejemplos resueltos de área
        </h2>
        <div className="flex flex-col gap-5">
          {examples.map(ex => (
            <article
              key={ex.id}
              className="overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 1px 8px rgba(16,42,67,0.05)' }}
            >
              <div
                className="flex items-center gap-3 px-6 py-4"
                style={{ background: '#F8FAFC', borderBottom: '1px solid #EEF4F7' }}
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold"
                  style={{ background: '#0a3535', color: '#D8A31A' }}
                  aria-hidden="true"
                >
                  {ex.id}
                </span>
                <h3 className="text-sm font-bold" style={{ color: '#102a43' }}>{ex.tag}</h3>
              </div>
              <div className="grid gap-0 sm:grid-cols-3">
                <div className="px-6 py-4" style={{ borderRight: '1px solid #EEF4F7' }}>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>Datos</p>
                  <p className="font-mono text-sm font-semibold text-ink">{ex.datos}</p>
                  <p className="mt-2 font-mono text-xs" style={{ color: '#829ab1' }}>{ex.formula}</p>
                </div>
                <div className="px-6 py-4" style={{ borderRight: '1px solid #EEF4F7' }}>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>Área</p>
                  <p className="font-mono text-2xl font-bold" style={{ color: '#0a4f4d' }}>A = {ex.resultado}</p>
                  <p className="mt-2 font-mono text-[10px]" style={{ color: '#829ab1' }}>{ex.proc}</p>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>Explicación</p>
                  <p className="text-sm leading-relaxed text-slate">{ex.explicacion}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
