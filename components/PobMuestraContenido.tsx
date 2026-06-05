import Link from 'next/link';

export function PobMuestraContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Cuál es la diferencia entre población y muestra?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              La población incluye todos los elementos del grupo que se estudia. La muestra es un subconjunto de esa población, seleccionado para representarla sin necesidad de medir a todos.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">Población: N elementos (todos)</p>
              <p className="mt-1 font-mono text-sm text-white">Muestra: n elementos (subconjunto)</p>
              <p className="mt-2 font-mono text-sm text-white">Varianza poblacional: σ² = Σ(xᵢ − μ)² / N</p>
              <p className="mt-1 font-mono text-sm text-white">Varianza muestral: s² = Σ(xᵢ − x̄)² / (n−1)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es una población */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Qué es una población en estadística</h2>
          <p className="text-sm leading-relaxed text-slate">
            En estadística, la población es el conjunto completo de elementos sobre los que se quiere obtener información. Puede ser grande o pequeña, pero siempre incluye a todos sin excepción.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Si quieres conocer las notas de todos los alumnos de un colegio, la población son esos alumnos. Si quieres estudiar el peso de todos los estudiantes de una universidad, la población es todos los matriculados.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Los parámetros poblacionales se escriben con letras griegas: μ para la media, σ para la desviación estándar, N para el tamaño total.
          </p>
        </div>
      </section>

      {/* Qué es una muestra */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Qué es una muestra</h2>
          <p className="text-sm leading-relaxed text-slate">
            La muestra es una parte de la población, elegida para representarla de forma adecuada. Estudiar la muestra es más rápido, barato y viable cuando la población es grande.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Los estadísticos muestrales se escriben con letras latinas: x̄ para la media muestral, s para la desviación estándar muestral, n para el tamaño de la muestra.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Para que la muestra sea válida, debe ser representativa: incluir distintos subgrupos en proporciones similares a la población real.
          </p>
        </div>
      </section>

      {/* Diferencias principales */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Diferencias principales</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#DDF3F0' }}>
                  <th className="px-4 py-3 text-left font-bold text-ink">Aspecto</th>
                  <th className="px-4 py-3 text-left font-bold text-ink">Población</th>
                  <th className="px-4 py-3 text-left font-bold text-ink">Muestra</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: 'Tamaño', pop: 'N (todos los elementos)', sam: 'n (subconjunto)' },
                  { aspect: 'Media', pop: 'μ (mu)', sam: 'x̄ (x barra)' },
                  { aspect: 'Desviación estándar', pop: 'σ (sigma)', sam: 's' },
                  { aspect: 'Varianza', pop: 'σ² = Σ/N', sam: 's² = Σ/(n−1)' },
                  { aspect: 'Cuándo se usa', pop: 'Cuando puedes medir todos', sam: 'Cuando no es posible medir todos' },
                ].map(row => (
                  <tr key={row.aspect} className="border-t" style={{ borderColor: '#EEF4F7' }}>
                    <td className="px-4 py-3 font-semibold text-sm text-ink">{row.aspect}</td>
                    <td className="px-4 py-3 text-xs text-slate">{row.pop}</td>
                    <td className="px-4 py-3 text-xs text-slate">{row.sam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* n vs n-1 */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Por qué la varianza muestral divide por n−1</h2>
          <p className="text-sm leading-relaxed text-slate">
            Si dividieras la varianza muestral por n (en lugar de n−1), el resultado subestimaría la varianza real de la población. Dividir por n−1 corrige ese sesgo.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Este ajuste se llama corrección de Bessel y es la razón por la que las calculadoras científicas ofrecen dos tipos de desviación estándar: σ (población) y s (muestra).
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">Datos: 4, 6, 8, 10, 12</p>
            <p className="mt-1 font-mono text-sm text-white/70">Media: 8</p>
            <p className="mt-1 font-mono text-sm text-white/70">Suma de diferencias²: (−4)²+(−2)²+0²+2²+4² = 40</p>
            <p className="mt-2 font-mono text-sm text-white">σ² (población) = 40/5 = 8</p>
            <p className="mt-1 font-mono text-sm text-white">s² (muestra) = 40/4 = 10</p>
          </div>
        </div>
      </section>

      {/* Cuándo usar cada una */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Cuándo usar población y cuándo usar muestra</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: 'Usa población cuando',
                items: ['Tienes acceso a todos los datos', 'El grupo es pequeño y manejable', 'Los datos son históricos completos (ventas de un mes cerrado)', 'No hay error de muestreo posible'],
                green: true,
              },
              {
                title: 'Usa muestra cuando',
                items: ['La población es muy grande', 'Medir a todos es costoso o imposible', 'Haces una encuesta o experimento', 'Trabajas con datos de un estudio o investigación'],
                green: false,
              },
            ].map(group => (
              <div key={group.title} className="rounded-2xl bg-white p-5" style={{ border: `1px solid ${group.green ? '#147c7c' : '#D7E2EA'}` }}>
                <p className="mb-3 font-bold text-sm text-ink">{group.title}</p>
                <ul className="space-y-1.5">
                  {group.items.map(item => (
                    <li key={item} className="flex gap-2 text-xs text-slate">
                      <span style={{ color: '#147c7c' }}>▸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ejemplos */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Ejemplos resueltos</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Ejemplo 1: alumnos de un colegio',
                body: 'Un colegio tiene 300 alumnos. Quieres calcular la nota media de todos. Como tienes acceso a todas las notas, usas la media poblacional μ y la desviación estándar σ (divisor N = 300).',
              },
              {
                title: 'Ejemplo 2: encuesta a 50 alumnos',
                body: 'Solo encuestas a 50 alumnos de ese colegio. Ahora trabajas con una muestra (n = 50). La media es x̄ y la desviación estándar es s, con divisor n−1 = 49.',
              },
              {
                title: 'Ejemplo 3: ventas de un mes',
                body: 'Tienes los datos de todas las ventas de enero. Como son datos completos y cerrados, es una población. Usas σ² dividiendo por N.',
              },
              {
                title: 'Ejemplo 4: encuesta de satisfacción',
                body: 'Encuestas a 200 clientes de entre 10 000 registrados. Trabajas con muestra (n = 200). Usas s² con divisor n−1 = 199 para estimar la dispersión real de todos los clientes.',
              },
            ].map(ex => (
              <div key={ex.title} className="rounded-2xl p-5" style={{ border: '1px solid #D7E2EA', background: '#fff' }}>
                <p className="font-bold text-sm text-ink mb-1">{ex.title}</p>
                <p className="text-xs leading-relaxed text-slate">{ex.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Dividir por n en varianza muestral', body: 'Si usas n en vez de n−1 para una muestra, subestimarás la dispersión real de la población.' },
              { title: 'Usar σ cuando los datos son muestra', body: 'Si calculas σ con datos muestrales, el resultado no es correcto. Debes usar s con divisor n−1.' },
              { title: 'Creer que la muestra siempre es representativa', body: 'Una muestra mal seleccionada puede estar sesgada. El tamaño no garantiza representatividad sin un buen muestreo.' },
              { title: 'Confundir N y n', body: 'N es el tamaño de la población completa. n es el tamaño de la muestra. En las fórmulas, el denominador correcto es uno u otro según el caso.' },
            ].map(card => (
              <div key={card.title} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="mb-2 font-bold text-sm" style={{ color: '#147c7c' }}>{card.title}</p>
                <p className="text-xs leading-relaxed text-slate">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="site-shell max-w-3xl">
          <p className="text-sm text-slate">
            Calcula varianza y desviación estándar con la{' '}
            <Link href="/calculadoras/estadistica/calculadora-de-varianza" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de varianza
            </Link>{' '}
            o la{' '}
            <Link href="/calculadoras/estadistica/calculadora-de-estadistica" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de estadística
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
