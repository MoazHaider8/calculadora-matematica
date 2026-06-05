export function PromedioContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="prom-rapida-h">
        <div className="site-shell">
          <div className="mx-auto max-w-2xl rounded-2xl px-6 py-6 lg:px-8 lg:py-7" style={{ border: '2px solid #D8A31A', background: '#FFFEF7' }}>
            <h2 id="prom-rapida-h" className="mb-3 text-base font-bold" style={{ color: '#D8A31A' }}>Respuesta rápida</h2>
            <p className="text-sm leading-relaxed text-slate">Para sacar el promedio, suma todos los valores del conjunto y divide entre la cantidad de valores.</p>
            <div className="mt-4 overflow-x-auto rounded-xl px-5 py-4 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              Promedio = suma de todos los valores / cantidad de valores
            </div>
            <div className="mt-3 overflow-x-auto rounded-xl px-5 py-3" style={{ background: '#DDF3F0' }}>
              <p className="font-mono text-sm" style={{ color: '#0a3535' }}>
                (10 + 8 + 9 + 7 + 6) / 5 = 40 / 5 = <strong style={{ color: '#147c7c' }}>8</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué significa */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="prom-que-h">
        <div className="site-shell">
          <h2 id="prom-que-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Qué significa promedio</h2>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-slate">
            <p>El promedio, también llamado media aritmética, es el valor central de un conjunto de números. Representa un punto de referencia que resume todos los valores con un solo número.</p>
            <p>No indica el valor más alto ni el más bajo, sino el valor que resultaría si todos los datos fueran iguales y sumaran lo mismo que el conjunto original.</p>
          </div>
        </div>
      </section>

      {/* Promedio simple */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="prom-simple-h">
        <div className="site-shell">
          <h2 id="prom-simple-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Cómo sacar el promedio simple</h2>
          <ol className="max-w-2xl space-y-3">
            {[
              'Escribe todos los valores del conjunto.',
              'Suma todos los valores.',
              'Divide la suma entre la cantidad total de valores.',
              'El resultado es el promedio.',
            ].map((paso, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white" style={{ background: '#147c7c' }}>{i + 1}</span>
                <span className="text-sm leading-relaxed text-slate">{paso}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Ejemplo</p>
            <p className="mt-2 text-sm text-slate">Promedio de 10, 8, 9, 7, 6</p>
            <div className="mt-3 overflow-x-auto rounded-lg px-4 py-3 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>
              Suma = 10 + 8 + 9 + 7 + 6 = 40<br />
              Cantidad = 5<br />
              Promedio = 40 / 5 = <strong>8</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Promedio de notas */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="prom-notas-h">
        <div className="site-shell">
          <h2 id="prom-notas-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Cómo sacar el promedio de notas</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate">El procedimiento es el mismo: suma todas las calificaciones y divide entre el número de materias o evaluaciones. Si las notas tienen diferente peso, usa el promedio ponderado.</p>
          <div className="mt-5 rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Ejemplo</p>
            <p className="mt-2 text-sm text-slate">Notas: 85, 90, 78, 92, 88</p>
            <div className="mt-3 overflow-x-auto rounded-lg px-4 py-3 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>
              Suma = 85 + 90 + 78 + 92 + 88 = 433<br />
              Promedio = 433 / 5 = <strong>86.6</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Promedio ponderado */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="prom-pond-h">
        <div className="site-shell">
          <h2 id="prom-pond-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Qué es el promedio ponderado</h2>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-slate">
            <p>El promedio ponderado asigna un peso diferente a cada valor. Se usa cuando no todos los datos tienen la misma importancia, por ejemplo, cuando un examen final vale más que los parciales.</p>
            <p>La fórmula es: suma de (valor × peso) dividido entre la suma de los pesos.</p>
          </div>
          <div className="mt-5 rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Ejemplo</p>
            <p className="mt-2 text-sm text-slate">Nota 80 con peso 30%, nota 90 con peso 70%</p>
            <div className="mt-3 overflow-x-auto rounded-lg px-4 py-3 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>
              (80 × 0.30) + (90 × 0.70) = 24 + 63 = <strong>87</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
