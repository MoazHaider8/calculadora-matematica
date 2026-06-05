import Link from 'next/link';

export function MediaModaContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="mmd-rapida-h">
        <div className="site-shell">
          <div className="mx-auto max-w-2xl rounded-2xl px-6 py-6 lg:px-8 lg:py-7" style={{ border: '2px solid #D8A31A', background: '#FFFEF7' }}>
            <h2 id="mmd-rapida-h" className="mb-3 text-base font-bold" style={{ color: '#D8A31A' }}>Respuesta rápida</h2>
            <p className="text-sm leading-relaxed text-slate">Media, mediana y moda son tres formas distintas de describir el valor central de un conjunto de datos. Cada una responde a una pregunta diferente sobre los datos.</p>
            <div className="mt-4 grid gap-2">
              <div className="overflow-x-auto rounded-xl px-5 py-3 font-mono text-xs text-white" style={{ background: '#0a3535' }}>Media = suma de valores / cantidad</div>
              <div className="overflow-x-auto rounded-xl px-5 py-3 font-mono text-xs text-white" style={{ background: '#0a3535' }}>Mediana = valor central al ordenar los datos</div>
              <div className="overflow-x-auto rounded-xl px-5 py-3 font-mono text-xs text-white" style={{ background: '#0a3535' }}>Moda = valor que más se repite</div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué son */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="mmd-que-h">
        <div className="site-shell">
          <h2 id="mmd-que-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Qué son las medidas de tendencia central</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate">Las medidas de tendencia central resumen un conjunto de datos con un solo valor representativo. La media, la mediana y la moda son las tres más usadas. Cada una es más útil según el tipo de datos y el objetivo del análisis.</p>
        </div>
      </section>

      {/* Las tres medidas */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="mmd-tres-h">
        <div className="site-shell">
          <h2 id="mmd-tres-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Las tres medidas explicadas</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { nombre: 'Media', simbolo: 'x̄', def: 'Es el promedio aritmético. Se calcula sumando todos los valores y dividiendo entre la cantidad total.', formula: 'x̄ = Σx / n', ejemplo: '(2+4+6+8+10)/5 = 30/5 = 6' },
              { nombre: 'Mediana', simbolo: 'Me', def: 'Es el valor que queda en el centro al ordenar los datos de menor a mayor. No le afectan los valores extremos.', formula: 'Valor central en datos ordenados', ejemplo: '2, 4, 6, 8, 10 → Mediana = 6' },
              { nombre: 'Moda', simbolo: 'Mo', def: 'Es el valor que aparece con más frecuencia. Un conjunto puede tener más de una moda o ninguna.', formula: 'Valor con mayor frecuencia', ejemplo: '3, 4, 4, 5, 8 → Moda = 4' },
            ].map(m => (
              <div key={m.nombre} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-lg px-2.5 py-1 font-mono text-xs font-bold" style={{ background: '#DDF3F0', color: '#147c7c' }}>{m.simbolo}</span>
                  <p className="text-sm font-bold text-ink">{m.nombre}</p>
                </div>
                <p className="text-xs leading-relaxed text-slate">{m.def}</p>
                <div className="mt-3 overflow-x-auto rounded-lg px-3 py-2 font-mono text-xs" style={{ background: '#0a3535', color: '#D8A31A' }}>{m.formula}</div>
                <div className="mt-2 overflow-x-auto rounded-lg px-3 py-2 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>{m.ejemplo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ejemplos */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="mmd-ejemplos-h">
        <div className="site-shell">
          <h2 id="mmd-ejemplos-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Ejemplos con los mismos datos</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { datos: '2, 4, 6, 8, 10', media: '6', mediana: '6', moda: 'Ninguna (todos únicos)', nota: 'Distribución simétrica: media y mediana coinciden.' },
              { datos: '3, 4, 4, 5, 8', media: '4.8', mediana: '4', moda: '4', nota: 'La moda coincide con la mediana. La media sube por el 8.' },
              { datos: '5, 6, 7, 8, 100', media: '25.2', mediana: '7', moda: 'Ninguna', nota: 'El valor extremo (100) distorsiona la media. La mediana es más representativa.' },
              { datos: '2, 4, 6, 8 (4 valores)', media: '5', mediana: '5 (promedio de 4 y 6)', moda: 'Ninguna', nota: 'Con cantidad par, la mediana es la media de los dos valores centrales.' },
            ].map((e, i) => (
              <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Datos: {e.datos}</p>
                <div className="mt-3 grid gap-1">
                  <p className="font-mono text-xs" style={{ color: '#0a3535' }}>Media = {e.media}</p>
                  <p className="font-mono text-xs" style={{ color: '#0a3535' }}>Mediana = {e.mediana}</p>
                  <p className="font-mono text-xs" style={{ color: '#0a3535' }}>Moda = {e.moda}</p>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate">{e.nota}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferencias */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="mmd-dif-h">
        <div className="site-shell">
          <h2 id="mmd-dif-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Cuándo usar cada medida</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { med: 'Media', cuando: 'Cuando los datos no tienen valores extremos y quieres un promedio general. Ideal para notas, precios homogéneos, medidas físicas.' },
              { med: 'Mediana', cuando: 'Cuando hay valores extremos que distorsionarían el promedio. Habitual en salarios, precios de viviendas, tiempos de espera.' },
              { med: 'Moda', cuando: 'Cuando quieres saber qué valor aparece más. Útil para datos categóricos: color más vendido, respuesta más frecuente en una encuesta.' },
            ].map(m => (
              <div key={m.med} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-sm font-bold text-ink">{m.med}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate">{m.cuando}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="mmd-errores-h">
        <div className="site-shell">
          <h2 id="mmd-errores-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Errores comunes</h2>
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
            {[
              { t: 'Usar la media cuando hay valores extremos', d: 'Un valor muy alto o muy bajo puede alejar la media del resto de los datos. En esos casos, la mediana da una imagen más fiel.' },
              { t: 'Olvidar ordenar los datos para la mediana', d: 'La mediana exige que los datos estén ordenados de menor a mayor. Si no se ordenan, el valor central no corresponde a la mediana real.' },
              { t: 'Confundir media con mediana', d: 'Son cálculos distintos. La media es la suma dividida entre el total. La mediana es el valor central en la secuencia ordenada.' },
              { t: 'Ignorar que puede no haber moda', d: 'Si todos los valores son distintos, no hay moda. Si dos valores se repiten la misma cantidad de veces, hay dos modas (distribución bimodal).' },
            ].map((e, i) => (
              <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-sm font-bold text-ink">{e.t}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuándo usar la calculadora */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="mmd-calc-h">
        <div className="site-shell">
          <h2 id="mmd-calc-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Cuándo usar la calculadora de estadística</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate">La calculadora de estadística calcula la media, mediana, moda, varianza, desviación estándar y rango de un conjunto de datos al mismo tiempo. Es útil cuando quieres obtener el resumen completo sin hacer cada cálculo por separado.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/calculadoras/estadistica/calculadora-de-estadistica" className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white" style={{ background: '#147c7c' }}>
              Calculadora de estadística &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
