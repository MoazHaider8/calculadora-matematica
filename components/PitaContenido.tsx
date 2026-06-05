export function PitaContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="pita-rapida-h">
        <div className="site-shell">
          <div className="mx-auto max-w-2xl rounded-2xl px-6 py-6 lg:px-8 lg:py-7" style={{ border: '2px solid #D8A31A', background: '#FFFEF7' }}>
            <h2 id="pita-rapida-h" className="mb-3 text-base font-bold" style={{ color: '#D8A31A' }}>Respuesta rápida</h2>
            <p className="text-sm leading-relaxed text-slate">En un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos.</p>
            <div className="mt-4 overflow-x-auto rounded-xl px-5 py-4 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              c² = a² + b²
            </div>
            <div className="mt-3 overflow-x-auto rounded-xl px-5 py-3" style={{ background: '#DDF3F0' }}>
              <p className="font-mono text-sm" style={{ color: '#0a3535' }}>
                a = 3, b = 4  →  c = √(9 + 16) = √25 = <strong style={{ color: '#147c7c' }}>5</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué dice */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="pita-que-h">
        <div className="site-shell">
          <h2 id="pita-que-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Qué dice el teorema de Pitágoras</h2>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-slate">
            <p>El teorema de Pitágoras establece que en todo triángulo rectángulo (el que tiene un ángulo de 90°), el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los dos catetos.</p>
            <p>La hipotenusa es el lado más largo del triángulo y el que está frente al ángulo recto. Los catetos son los otros dos lados, los que forman el ángulo de 90°.</p>
          </div>
        </div>
      </section>

      {/* Catetos e hipotenusa */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="pita-partes-h">
        <div className="site-shell">
          <h2 id="pita-partes-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Qué son catetos e hipotenusa</h2>
          <div className="grid gap-4 sm:grid-cols-2 max-w-xl">
            <div className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
              <p className="text-sm font-bold text-ink">Catetos (a y b)</p>
              <p className="mt-2 text-xs leading-relaxed text-slate">Son los dos lados del triángulo que forman el ángulo recto (90°). En la fórmula se representan como a y b.</p>
            </div>
            <div className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
              <p className="text-sm font-bold text-ink">Hipotenusa (c)</p>
              <p className="mt-2 text-xs leading-relaxed text-slate">Es el lado opuesto al ángulo recto y siempre el más largo de los tres. En la fórmula se representa como c.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calcular hipotenusa */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="pita-hip-h">
        <div className="site-shell">
          <h2 id="pita-hip-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Cómo calcular la hipotenusa</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate mb-4">Si conoces los dos catetos, aplica la fórmula directamente: eleva al cuadrado cada cateto, súmalos y saca la raíz cuadrada.</p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
            {[
              { datos: 'a = 3, b = 4', paso: 'c = √(3² + 4²) = √(9 + 16) = √25 = 5' },
              { datos: 'a = 5, b = 12', paso: 'c = √(5² + 12²) = √(25 + 144) = √169 = 13' },
              { datos: 'a = 2.5, b = 6', paso: 'c = √(6.25 + 36) = √42.25 = 6.5' },
            ].map((e, i) => (
              <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-xs text-slate">{e.datos}</p>
                <div className="mt-2 overflow-x-auto rounded-lg px-4 py-2 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>{e.paso}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calcular cateto */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="pita-cat-h">
        <div className="site-shell">
          <h2 id="pita-cat-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Cómo calcular un cateto</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate mb-4">Si conoces la hipotenusa y un cateto, despeja el cateto desconocido: a = √(c² - b²).</p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-xl">
            {[
              { datos: 'c = 5, b = 4', paso: 'a = √(5² - 4²) = √(25 - 16) = √9 = 3' },
              { datos: 'c = 13, b = 5', paso: 'a = √(13² - 5²) = √(169 - 25) = √144 = 12' },
            ].map((e, i) => (
              <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-xs text-slate">{e.datos}</p>
                <div className="mt-2 overflow-x-auto rounded-lg px-4 py-2 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>{e.paso}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="pita-errores-h">
        <div className="site-shell">
          <h2 id="pita-errores-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Errores comunes con el teorema de Pitágoras</h2>
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
            {[
              { titulo: 'Sumar los lados sin elevar al cuadrado', desc: 'El teorema trabaja con cuadrados de los lados, no con los lados directamente. Siempre eleva al cuadrado antes de sumar.' },
              { titulo: 'Aplicarlo en triángulos no rectángulos', desc: 'El teorema solo es válido en triángulos con un ángulo de exactamente 90°. No aplica en triángulos acutángulos u obtusángulos.' },
              { titulo: 'Confundir hipotenusa con cateto', desc: 'La hipotenusa siempre es el lado más largo y el que se opone al ángulo recto. Si no identifies bien los lados, la fórmula da un resultado incorrecto.' },
              { titulo: 'Olvidar aplicar la raíz cuadrada', desc: 'La fórmula da c², no c. Para obtener la longitud, hay que sacar la raíz cuadrada del resultado final.' },
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
