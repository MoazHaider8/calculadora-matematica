const examples = [
  {
    id: 1,
    tag: 'Prisma rectangular',
    datos: 'largo = 8, ancho = 5, altura = 4',
    formula: 'V = largo × ancho × altura',
    resultado: '160',
    proc: 'V = 8 × 5 × 4 = 160',
    explicacion: 'Se multiplican las tres dimensiones. El prisma rectangular ocupa 160 unidades cúbicas.',
  },
  {
    id: 2,
    tag: 'Cubo',
    datos: 'lado = 4',
    formula: 'V = lado³',
    resultado: '64',
    proc: 'V = 4³ = 64',
    explicacion: 'Se eleva el lado al cubo. Un cubo de lado 4 tiene un volumen de 64 unidades cúbicas.',
  },
  {
    id: 3,
    tag: 'Cilindro',
    datos: 'radio = 3, altura = 10',
    formula: 'V = πr²h',
    resultado: '≈ 282.7433',
    proc: 'V = π × 3² × 10 = π × 90 ≈ 282.7433',
    explicacion: 'Se multiplica π por el radio al cuadrado y por la altura. El resultado es aproximado porque π es irracional.',
  },
  {
    id: 4,
    tag: 'Cono',
    datos: 'radio = 3, altura = 9',
    formula: 'V = πr²h / 3',
    resultado: '≈ 84.823',
    proc: 'V = π × 3² × 9 / 3 ≈ 84.823',
    explicacion: 'El cono tiene un tercio del volumen del cilindro equivalente. Se divide entre 3 en la fórmula.',
  },
  {
    id: 5,
    tag: 'Esfera',
    datos: 'radio = 3',
    formula: 'V = 4/3 × πr³',
    resultado: '≈ 113.0973',
    proc: 'V = 4/3 × π × 3³ = 4/3 × π × 27 ≈ 113.0973',
    explicacion: 'Se eleva el radio al cubo y se multiplica por 4π/3. El resultado es aproximado.',
  },
];

export function VolumenExamples() {
  return (
    <section className="bg-page py-12 lg:py-16" aria-labelledby="examples-vol-heading">
      <div className="site-shell">
        <p className="eyebrow">Práctica</p>
        <h2 id="examples-vol-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Ejemplos resueltos de volumen
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
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#829ab1' }}>Volumen</p>
                  <p className="font-mono text-2xl font-bold" style={{ color: '#0a4f4d' }}>V = {ex.resultado}</p>
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
