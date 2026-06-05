import Link from 'next/link';

export function IntegralContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Qué es una integral?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Una integral calcula el área acumulada bajo una curva. Si la derivada mide la tasa de cambio en un punto, la integral acumula esos cambios a lo largo de un intervalo.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">Integral indefinida: ∫f(x) dx = F(x) + C</p>
              <p className="mt-2 font-mono text-sm text-white">Integral definida: ∫[a,b] f(x) dx = F(b) − F(a)</p>
            </div>
            <div className="mt-3 rounded-xl px-5 py-3" style={{ background: '#DDF3F0' }}>
              <p className="text-sm font-semibold" style={{ color: '#0a3535' }}>
                Ejemplo: ∫ 2x dx = x² + C. Con límites de 0 a 3: 3² − 0² = 9
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es una integral */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Qué significa integrar</h2>
          <p className="text-sm leading-relaxed text-slate">
            Integrar es el proceso de sumar infinitas porciones muy pequeñas para obtener un total. Si tienes la velocidad de un objeto en cada instante, la integral de esa velocidad te da la distancia recorrida.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            La notación ∫ es la letra S alargada, de "suma". El símbolo dx indica la variable respecto a la que integras.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            El teorema fundamental del cálculo establece que la derivación y la integración son operaciones inversas. Si F'(x) = f(x), entonces ∫f(x) dx = F(x) + C.
          </p>
        </div>
      </section>

      {/* Integral indefinida vs definida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Integral indefinida e integral definida</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: 'Integral indefinida',
                body: 'No tiene límites. El resultado es una familia de funciones con constante C. Ejemplo: ∫ 3x² dx = x³ + C',
              },
              {
                title: 'Integral definida',
                body: 'Tiene límites inferior (a) y superior (b). El resultado es un número concreto. Ejemplo: ∫[1,3] 3x² dx = 3³ − 1³ = 26',
              },
            ].map(card => (
              <div key={card.title} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="mb-2 font-bold text-ink text-sm">{card.title}</p>
                <p className="text-xs leading-relaxed text-slate">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reglas básicas */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Reglas básicas de integración</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#DDF3F0' }}>
                  <th className="px-4 py-3 text-left font-bold text-ink">Función</th>
                  <th className="px-4 py-3 text-left font-bold text-ink">Integral</th>
                  <th className="px-4 py-3 text-left font-bold text-ink">Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { fn: 'xⁿ (n ≠ −1)', integral: 'xⁿ⁺¹ / (n+1) + C', ex: '∫ x³ dx = x⁴/4 + C' },
                  { fn: 'Constante k', integral: 'kx + C', ex: '∫ 5 dx = 5x + C' },
                  { fn: 'eˣ', integral: 'eˣ + C', ex: '∫ eˣ dx = eˣ + C' },
                  { fn: '1/x', integral: 'ln|x| + C', ex: '∫ (1/x) dx = ln|x| + C' },
                  { fn: 'sen(x)', integral: '−cos(x) + C', ex: '∫ sen(x) dx = −cos(x) + C' },
                  { fn: 'cos(x)', integral: 'sen(x) + C', ex: '∫ cos(x) dx = sen(x) + C' },
                ].map(row => (
                  <tr key={row.fn} className="border-t" style={{ borderColor: '#EEF4F7' }}>
                    <td className="px-4 py-3 font-mono text-xs text-ink">{row.fn}</td>
                    <td className="px-4 py-3 font-mono text-xs text-slate">{row.integral}</td>
                    <td className="px-4 py-3 font-mono text-xs text-slate">{row.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interpretación geométrica */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Qué significa el área bajo la curva</h2>
          <p className="text-sm leading-relaxed text-slate">
            La integral definida de f(x) entre a y b mide el área firmada entre la curva y el eje x. Firmada significa que las áreas por debajo del eje cuentan como negativas.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Si la velocidad de un coche es v(t) km/h, entonces ∫[0,2] v(t) dt te da los kilómetros recorridos en 2 horas. Esa es la interpretación práctica más común.
          </p>
          <div className="mt-5 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">v(t) = 60 (velocidad constante de 60 km/h)</p>
            <p className="mt-1 font-mono text-sm text-white">∫[0,2] 60 dt = 60 × 2 = 120 km</p>
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes al integrar</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Olvidar la constante C', body: 'En integrales indefinidas, siempre hay que escribir +C. La integral de 2x es x² + C, no solo x².' },
              { title: 'Confundir derivada e integral', body: 'La derivada de x³ es 3x². La integral de x³ es x⁴/4 + C. Son operaciones inversas, no iguales.' },
              { title: 'Error al aplicar el TFC', body: 'Al evaluar F(b) − F(a), calcular primero F(b) y luego restar F(a). El orden importa.' },
              { title: 'No simplificar antes de integrar', body: '∫ (x² + x) / x dx se puede simplificar a ∫ (x + 1) dx antes de integrar.' },
            ].map(card => (
              <div key={card.title} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="mb-2 font-bold text-sm" style={{ color: '#147c7c' }}>{card.title}</p>
                <p className="text-xs leading-relaxed text-slate">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enlace categoría */}
      <section className="bg-white py-8">
        <div className="site-shell max-w-3xl">
          <p className="text-sm text-slate">
            Practica con la{' '}
            <Link href="/calculadoras/calculo/calculadora-de-integrales" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de integrales
            </Link>{' '}
            o explora más temas de{' '}
            <Link href="/calculadoras/calculo" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              cálculo
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
