import Link from 'next/link';

export function VarianzaContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="var-rapida-h">
        <div className="site-shell">
          <div className="mx-auto max-w-2xl rounded-2xl px-6 py-6 lg:px-8 lg:py-7" style={{ border: '2px solid #D8A31A', background: '#FFFEF7' }}>
            <h2 id="var-rapida-h" className="mb-3 text-base font-bold" style={{ color: '#D8A31A' }}>Respuesta rápida</h2>
            <p className="text-sm leading-relaxed text-slate">La varianza mide la dispersión cuadrática de los datos respecto a la media. La desviación estándar es la raíz cuadrada de la varianza y se interpreta en las mismas unidades que los datos.</p>
            <div className="mt-4 grid gap-2">
              <div className="overflow-x-auto rounded-xl px-5 py-3 font-mono text-xs text-white" style={{ background: '#0a3535' }}>Varianza poblacional: σ² = Σ(x - μ)² / n</div>
              <div className="overflow-x-auto rounded-xl px-5 py-3 font-mono text-xs text-white" style={{ background: '#0a3535' }}>Desviación estándar: σ = √σ²</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispersión */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="var-disp-h">
        <div className="site-shell">
          <h2 id="var-disp-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Qué mide la dispersión</h2>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-slate">
            <p>La dispersión indica cuánto se alejan los valores de la media. Si todos los datos son muy parecidos, la dispersión es baja. Si están muy repartidos, la dispersión es alta.</p>
            <p>Dos conjuntos pueden tener la misma media y dispersión muy diferente. Por eso las medidas de dispersión como la varianza y la desviación estándar complementan a la media.</p>
          </div>
        </div>
      </section>

      {/* Varianza */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="var-varianza-h">
        <div className="site-shell">
          <h2 id="var-varianza-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Qué es la varianza</h2>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-slate">
            <p>La varianza calcula el promedio de los cuadrados de las diferencias entre cada valor y la media. Eleva al cuadrado las diferencias para que los valores negativos no se cancelen con los positivos.</p>
            <p>La varianza poblacional divide entre n (todos los datos). La varianza muestral divide entre n - 1 para corregir el sesgo al estimar a partir de una muestra.</p>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 max-w-2xl">
            <div className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Poblacional (σ²)</p>
              <div className="mt-2 overflow-x-auto rounded-lg px-4 py-2 font-mono text-xs" style={{ background: '#0a3535', color: '#D8A31A' }}>σ² = Σ(x - μ)² / n</div>
              <p className="mt-2 text-xs text-slate">Divide entre n. Usa todos los datos.</p>
            </div>
            <div className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Muestral (s²)</p>
              <div className="mt-2 overflow-x-auto rounded-lg px-4 py-2 font-mono text-xs" style={{ background: '#0a3535', color: '#D8A31A' }}>s² = Σ(x - x̄)² / (n - 1)</div>
              <p className="mt-2 text-xs text-slate">Divide entre n - 1. Estima desde una muestra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Desviación estándar */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="var-desv-h">
        <div className="site-shell">
          <h2 id="var-desv-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Qué es la desviación estándar</h2>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-slate">
            <p>La desviación estándar es la raíz cuadrada de la varianza. Se usa más que la varianza porque se expresa en las mismas unidades que los datos originales, lo que facilita su interpretación.</p>
            <p>Una desviación estándar baja indica que los datos están cerca de la media. Una desviación estándar alta indica mayor dispersión.</p>
          </div>
        </div>
      </section>

      {/* Diferencia */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="var-dif-h">
        <div className="site-shell">
          <h2 id="var-dif-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Diferencia entre varianza y desviación estándar</h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl text-xs">
              <thead>
                <tr style={{ background: '#DDF3F0' }}>
                  <th className="rounded-tl-xl px-4 py-3 text-left font-bold text-ink">Medida</th>
                  <th className="px-4 py-3 text-left font-bold text-ink">Unidades</th>
                  <th className="px-4 py-3 text-left font-bold text-ink">Interpretación</th>
                  <th className="rounded-tr-xl px-4 py-3 text-left font-bold text-ink">Fórmula</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <tr><td className="px-4 py-3 font-semibold text-ink">Varianza</td><td className="px-4 py-3 text-slate">Cuadradas (cm², €²...)</td><td className="px-4 py-3 text-slate">Dispersión cuadrática</td><td className="px-4 py-3 font-mono text-slate">Σ(x-μ)²/n</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-ink">Desviación</td><td className="px-4 py-3 text-slate">Mismas que los datos</td><td className="px-4 py-3 text-slate">Dispersión directa</td><td className="px-4 py-3 font-mono text-slate">√varianza</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ejemplo paso a paso */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="var-ejemplo-h">
        <div className="site-shell">
          <h2 id="var-ejemplo-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Ejemplo paso a paso</h2>
          <p className="mb-4 text-sm text-slate">Datos: 10, 8, 9, 7, 6</p>
          <div className="max-w-xl space-y-3">
            {[
              { paso: '1. Media', calc: 'μ = (10+8+9+7+6) / 5 = 40 / 5 = 8' },
              { paso: '2. Diferencias al cuadrado', calc: '(10-8)²=4, (8-8)²=0, (9-8)²=1, (7-8)²=1, (6-8)²=4  →  Suma = 10' },
              { paso: '3. Varianza poblacional', calc: 'σ² = 10 / 5 = 2' },
              { paso: '4. Desviación estándar poblacional', calc: 'σ = √2 ≈ 1.4142' },
              { paso: '5. Varianza muestral', calc: 's² = 10 / 4 = 2.5' },
              { paso: '6. Desviación estándar muestral', calc: 's = √2.5 ≈ 1.5811' },
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white" style={{ background: '#147c7c' }}>{i + 1}</span>
                <div>
                  <p className="text-xs font-bold text-ink">{p.paso}</p>
                  <div className="mt-1 overflow-x-auto rounded-lg px-3 py-2 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>{p.calc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="var-errores-h">
        <div className="site-shell">
          <h2 id="var-errores-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Errores comunes</h2>
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
            {[
              { t: 'Confundir varianza con desviación estándar', d: 'Son distintas. La varianza usa unidades al cuadrado y es menos intuitiva. La desviación estándar está en las mismas unidades que los datos.' },
              { t: 'Usar n en vez de n-1 para la muestral', d: 'La varianza muestral divide entre n - 1, no entre n. El factor n - 1 corrige el sesgo al estimar la dispersión de una población a partir de una muestra.' },
              { t: 'Olvidar calcular la media primero', d: 'Tanto la varianza como la desviación estándar requieren la media. Hay que calcularla antes de medir las diferencias de cada dato.' },
              { t: 'Interpretar la desviación sin contexto', d: 'Una desviación de 5 puede ser alta o baja según los datos. Siempre hay que compararla con la media y con otros conjuntos similares.' },
            ].map((e, i) => (
              <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-sm font-bold text-ink">{e.t}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="var-cta-h">
        <div className="site-shell">
          <h2 id="var-cta-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Cuándo usar las calculadoras</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate mb-5">Usa la calculadora de desviación estándar para calcular varianza y desviación con tus datos. Si quieres también la media, mediana y moda, la calculadora de estadística da el resumen completo.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculadoras/estadistica/calculadora-de-desviacion-estandar" className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white" style={{ background: '#147c7c' }}>
              Calculadora de desviación estándar &rarr;
            </Link>
            <Link href="/calculadoras/estadistica/calculadora-de-varianza" className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold" style={{ background: '#DDF3F0', color: '#147c7c' }}>
              Calculadora de varianza &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
