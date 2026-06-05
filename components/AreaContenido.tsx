const figuras = [
  { nombre: 'Cuadrado',       formula: 'A = l²',                     vars: 'l = lado',                              ejemplo: 'l = 6  →  A = 36' },
  { nombre: 'Rectángulo',     formula: 'A = b × h',                  vars: 'b = base, h = altura',                  ejemplo: 'b = 8, h = 5  →  A = 40' },
  { nombre: 'Triángulo',      formula: 'A = (b × h) / 2',            vars: 'b = base, h = altura',                  ejemplo: 'b = 10, h = 6  →  A = 30' },
  { nombre: 'Círculo',        formula: 'A = π × r²',                 vars: 'r = radio',                             ejemplo: 'r = 4  →  A ≈ 50.265' },
  { nombre: 'Trapecio',       formula: 'A = (B + b) × h / 2',        vars: 'B = base mayor, b = base menor, h = altura', ejemplo: 'B = 10, b = 6, h = 4  →  A = 32' },
  { nombre: 'Rombo',          formula: 'A = (d1 × d2) / 2',          vars: 'd1, d2 = diagonales',                   ejemplo: 'd1 = 8, d2 = 6  →  A = 24' },
  { nombre: 'Paralelogramo',  formula: 'A = b × h',                  vars: 'b = base, h = altura perpendicular',    ejemplo: 'b = 7, h = 4  →  A = 28' },
];

export function AreaContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="area-rapida-h">
        <div className="site-shell">
          <div className="mx-auto max-w-2xl rounded-2xl px-6 py-6 lg:px-8 lg:py-7" style={{ border: '2px solid #D8A31A', background: '#FFFEF7' }}>
            <h2 id="area-rapida-h" className="mb-3 text-base font-bold" style={{ color: '#D8A31A' }}>Respuesta rápida</h2>
            <p className="text-sm leading-relaxed text-slate">El área mide la superficie de una figura en unidades cuadradas. Cada figura tiene su fórmula específica según sus dimensiones.</p>
            <div className="mt-4 grid gap-2">
              <div className="overflow-x-auto rounded-xl px-5 py-3 font-mono text-xs text-white" style={{ background: '#0a3535' }}>
                Rectángulo: A = b × h
              </div>
              <div className="overflow-x-auto rounded-xl px-5 py-3 font-mono text-xs text-white" style={{ background: '#0a3535' }}>
                Triángulo: A = (b × h) / 2
              </div>
              <div className="overflow-x-auto rounded-xl px-5 py-3 font-mono text-xs text-white" style={{ background: '#0a3535' }}>
                Círculo: A = π × r²
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es el área */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="area-que-h">
        <div className="site-shell">
          <h2 id="area-que-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Qué es el área</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate">
            El área es la medida de la superficie encerrada por una figura plana. Se expresa en unidades cuadradas: cm², m², km², etc. Cada tipo de figura tiene una fórmula propia que depende de sus dimensiones características.
          </p>
        </div>
      </section>

      {/* Fórmulas */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="area-formulas-h">
        <div className="site-shell">
          <h2 id="area-formulas-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Fórmulas de área más usadas</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {figuras.map(f => (
              <div key={f.nombre} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-sm font-bold text-ink">{f.nombre}</p>
                <div className="mt-2 overflow-x-auto rounded-lg px-4 py-2.5 font-mono text-xs" style={{ background: '#0a3535', color: '#D8A31A' }}>
                  {f.formula}
                </div>
                <p className="mt-2 text-xs text-slate">{f.vars}</p>
                <div className="mt-2 overflow-x-auto rounded-lg px-3 py-2 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>
                  {f.ejemplo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ejemplos resueltos */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="area-ejemplos-h">
        <div className="site-shell">
          <h2 id="area-ejemplos-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Ejemplos resueltos de área</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { fig: 'Rectángulo', datos: 'Base 8, altura 5', paso: 'A = 8 × 5 = 40', unidad: '40 cm²' },
              { fig: 'Cuadrado', datos: 'Lado 6', paso: 'A = 6² = 36', unidad: '36 cm²' },
              { fig: 'Triángulo', datos: 'Base 10, altura 6', paso: 'A = (10 × 6) / 2 = 30', unidad: '30 cm²' },
              { fig: 'Círculo', datos: 'Radio 4', paso: 'A = π × 4² = 16π ≈ 50.265', unidad: '≈ 50.27 cm²' },
              { fig: 'Trapecio', datos: 'B = 10, b = 6, h = 4', paso: 'A = (10 + 6) × 4 / 2 = 32', unidad: '32 cm²' },
            ].map((e, i) => (
              <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>{e.fig}</p>
                <p className="mt-1 text-xs text-slate">{e.datos}</p>
                <div className="mt-2 overflow-x-auto rounded-lg px-4 py-2 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>
                  {e.paso}
                </div>
                <p className="mt-1 text-xs font-semibold" style={{ color: '#147c7c' }}>Resultado: {e.unidad}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="area-errores-h">
        <div className="site-shell">
          <h2 id="area-errores-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Errores comunes al calcular áreas</h2>
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
            {[
              { titulo: 'Usar el lado oblicuo en el triángulo', desc: 'La altura del triángulo es la distancia perpendicular a la base, no la longitud del lado inclinado.' },
              { titulo: 'Confundir radio con diámetro', desc: 'El radio es la mitad del diámetro. Si el enunciado da el diámetro, hay que dividirlo entre 2 antes de aplicar la fórmula del círculo.' },
              { titulo: 'Olvidar las unidades cuadradas', desc: 'El área siempre se expresa en unidades cuadradas. Si la base está en cm, el área está en cm², no en cm.' },
              { titulo: 'Aplicar la fórmula del rectángulo al trapecio', desc: 'El trapecio tiene dos bases de diferente longitud. La fórmula incluye las dos bases sumadas, no solo una.' },
            ].map((e, i) => (
              <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-sm font-bold text-ink">{e.titulo}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
