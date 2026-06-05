const solidos = [
  { nombre: 'Cubo',                formula: 'V = l³',                    vars: 'l = arista',                             ejemplo: 'l = 4  →  V = 64' },
  { nombre: 'Prisma rectangular',  formula: 'V = l × a × h',             vars: 'l = largo, a = ancho, h = alto',         ejemplo: 'l = 8, a = 5, h = 4  →  V = 160' },
  { nombre: 'Cilindro',            formula: 'V = π × r² × h',            vars: 'r = radio, h = altura',                  ejemplo: 'r = 3, h = 10  →  V ≈ 282.74' },
  { nombre: 'Cono',                formula: 'V = (π × r² × h) / 3',      vars: 'r = radio, h = altura',                  ejemplo: 'r = 3, h = 9  →  V ≈ 84.82' },
  { nombre: 'Esfera',              formula: 'V = (4/3) × π × r³',        vars: 'r = radio',                              ejemplo: 'r = 3  →  V ≈ 113.10' },
  { nombre: 'Pirámide',            formula: 'V = (A_base × h) / 3',      vars: 'A_base = área de la base, h = altura',   ejemplo: 'A_base = 36, h = 9  →  V = 108' },
];

export function VolumenContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="vol-rapida-h">
        <div className="site-shell">
          <div className="mx-auto max-w-2xl rounded-2xl px-6 py-6 lg:px-8 lg:py-7" style={{ border: '2px solid #D8A31A', background: '#FFFEF7' }}>
            <h2 id="vol-rapida-h" className="mb-3 text-base font-bold" style={{ color: '#D8A31A' }}>Respuesta rápida</h2>
            <p className="text-sm leading-relaxed text-slate">El volumen mide el espacio que ocupa un sólido en unidades cúbicas. Cada figura tiene su fórmula propia según su forma.</p>
            <div className="mt-4 grid gap-2">
              <div className="overflow-x-auto rounded-xl px-5 py-3 font-mono text-xs text-white" style={{ background: '#0a3535' }}>Cubo: V = l³</div>
              <div className="overflow-x-auto rounded-xl px-5 py-3 font-mono text-xs text-white" style={{ background: '#0a3535' }}>Cilindro: V = π × r² × h</div>
              <div className="overflow-x-auto rounded-xl px-5 py-3 font-mono text-xs text-white" style={{ background: '#0a3535' }}>Esfera: V = (4/3) × π × r³</div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es el volumen */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="vol-que-h">
        <div className="site-shell">
          <h2 id="vol-que-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Qué es el volumen</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate">
            El volumen es la medida del espacio interior de un sólido tridimensional. Se expresa en unidades cúbicas: cm³, m³, litros, etc. Un litro equivale a 1 dm³ (decímetro cúbico).
          </p>
        </div>
      </section>

      {/* Fórmulas */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="vol-formulas-h">
        <div className="site-shell">
          <h2 id="vol-formulas-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Fórmulas de volumen más usadas</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solidos.map(s => (
              <div key={s.nombre} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-sm font-bold text-ink">{s.nombre}</p>
                <div className="mt-2 overflow-x-auto rounded-lg px-4 py-2.5 font-mono text-xs" style={{ background: '#0a3535', color: '#D8A31A' }}>
                  {s.formula}
                </div>
                <p className="mt-2 text-xs text-slate">{s.vars}</p>
                <div className="mt-2 overflow-x-auto rounded-lg px-3 py-2 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>
                  {s.ejemplo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ejemplos */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="vol-ejemplos-h">
        <div className="site-shell">
          <h2 id="vol-ejemplos-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Ejemplos resueltos de volumen</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { fig: 'Prisma rectangular', datos: 'l = 8, a = 5, h = 4', paso: 'V = 8 × 5 × 4 = 160', unidad: '160 cm³' },
              { fig: 'Cubo', datos: 'l = 4', paso: 'V = 4³ = 64', unidad: '64 cm³' },
              { fig: 'Cilindro', datos: 'r = 3, h = 10', paso: 'V = π × 9 × 10 ≈ 282.74', unidad: '≈ 282.74 cm³' },
              { fig: 'Cono', datos: 'r = 3, h = 9', paso: 'V = (π × 9 × 9) / 3 ≈ 84.82', unidad: '≈ 84.82 cm³' },
              { fig: 'Esfera', datos: 'r = 3', paso: 'V = (4/3) × π × 27 ≈ 113.10', unidad: '≈ 113.10 cm³' },
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
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="vol-errores-h">
        <div className="site-shell">
          <h2 id="vol-errores-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Errores comunes al calcular volúmenes</h2>
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
            {[
              { titulo: 'Confundir radio con diámetro', desc: 'En cilindros, conos y esferas, el dato que aparece en los enunciados suele ser el diámetro. Hay que dividirlo entre 2 para obtener el radio.' },
              { titulo: 'Olvidar dividir entre 3 en cono y pirámide', desc: 'El cono y la pirámide tienen un factor de 1/3 en su fórmula porque son sólidos con vértice, no prismas completos.' },
              { titulo: 'Expresar el resultado en unidades cuadradas', desc: 'El volumen se expresa en unidades cúbicas (cm³, m³), no en cuadradas. El número de dimensiones determina la potencia de la unidad.' },
              { titulo: 'Usar la altura inclinada en lugar de la perpendicular', desc: 'En el cilindro y el cono, la altura es la distancia perpendicular entre las bases, no la longitud de la superficie lateral.' },
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
