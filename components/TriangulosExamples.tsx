const examples = [
  {
    title:  'Área con base y altura',
    data:   'Base = 10 cm, Altura = 6 cm',
    result: 'Área = 30 cm²',
    proc:   'A = 10 × 6 / 2 = 30',
  },
  {
    title:  'Tres lados (fórmula de Herón)',
    data:   'a = 5, b = 6, c = 7',
    result: 'Perímetro = 18 · Área ≈ 14.6969 · Tipo = Escaleno',
    proc:   's = 18 / 2 = 9 · A = √(9 × 4 × 3 × 2) ≈ 14.6969',
  },
  {
    title:  'Tercer ángulo',
    data:   'Ángulo A = 60°, Ángulo B = 40°',
    result: 'Ángulo C = 80°',
    proc:   'C = 180 - 60 - 40 = 80',
  },
  {
    title:  'Triángulo equilátero',
    data:   'Lado = 6 cm',
    result: 'Perímetro = 18 cm · Área ≈ 15.5885 cm²',
    proc:   'A = √3 / 4 × 6² ≈ 15.5885',
  },
  {
    title:  'Triángulo isósceles',
    data:   'a = 5, b = 5, c = 8',
    result: 'Perímetro = 18 · Tipo = Isósceles',
    proc:   'P = 5 + 5 + 8 = 18 · Dos lados iguales → Isósceles',
  },
];

export function TriangulosExamples() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="examples-tri-heading">
      <div className="site-shell">
        <p className="eyebrow">Práctica</p>
        <h2 id="examples-tri-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Ejemplos resueltos de triángulos
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex, i) => (
            <article
              key={i}
              className="flex flex-col rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.04)' }}
            >
              <div
                className="rounded-t-2xl px-5 py-3"
                style={{ background: '#0a3535' }}
              >
                <p className="text-xs font-bold" style={{ color: '#DDF3F0' }}>{ex.title}</p>
              </div>
              <div className="flex flex-1 flex-col gap-3 px-5 py-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Datos</p>
                  <p className="mt-0.5 text-sm text-ink">{ex.data}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Resultado</p>
                  <p className="mt-0.5 font-mono text-sm font-semibold" style={{ color: '#0a4f4d' }}>{ex.result}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Procedimiento</p>
                  <p className="mt-0.5 font-mono text-xs" style={{ color: '#627d98' }}>{ex.proc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
