const items = [
  { sym: 'c²',    title: 'Teorema',           desc: 'En un triángulo rectángulo, a² + b² = c². La suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa.' },
  { sym: 'c',     title: 'Hipotenusa',        desc: 'El lado más largo del triángulo rectángulo. Está frente al ángulo recto y se calcula con c = √(a² + b²).' },
  { sym: 'a, b',  title: 'Catetos',           desc: 'Los dos lados que forman el ángulo recto. Para encontrar uno se usa raíz cuadrada de la diferencia de cuadrados.' },
  { sym: '90°',   title: 'Ángulo recto',      desc: 'El ángulo de 90° es la condición necesaria para aplicar el teorema de Pitágoras. Sin él, la fórmula no aplica.' },
];

export function PitagorasWhatIs() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="whatis-pit-heading">
      <div className="site-shell">
        <p className="eyebrow">Información</p>
        <h2 id="whatis-pit-heading" className="mt-2 mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Qué calcula esta herramienta
        </h2>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate">
          Esta calculadora aplica el teorema de Pitágoras para encontrar el lado faltante de un triángulo rectángulo. A partir de dos lados conocidos, obtiene el tercero usando las relaciones a² + b² = c². Puedes calcular la hipotenusa si conoces los dos catetos, o calcular un cateto si conoces la hipotenusa y el otro cateto. La herramienta muestra la fórmula utilizada, el procedimiento paso a paso y la comprobación numérica. Esta calculadora trabaja exclusivamente con triángulos rectángulos. Para triángulos generales, lados arbitrarios o la fórmula de Herón, consulta la calculadora de triángulos.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(item => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-5"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl font-mono text-xs font-bold"
                style={{ background: '#DDF3F0', color: '#147c7c' }}
                aria-hidden="true"
              >
                {item.sym}
              </div>
              <p className="text-sm font-bold text-ink">{item.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
