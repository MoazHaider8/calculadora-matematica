import Link from 'next/link';

export function LogsContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Cuáles son las reglas de los logaritmos?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Hay cuatro reglas principales: producto, cociente, potencia y cambio de base. Todas derivan de las propiedades de las potencias.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">Producto: log(A·B) = log(A) + log(B)</p>
              <p className="mt-1 font-mono text-sm text-white">Cociente: log(A/B) = log(A) − log(B)</p>
              <p className="mt-1 font-mono text-sm text-white">Potencia: log(Aⁿ) = n·log(A)</p>
              <p className="mt-1 font-mono text-sm text-white">Cambio base: log_b(x) = log(x) / log(b)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es un logaritmo */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Qué es un logaritmo</h2>
          <p className="text-sm leading-relaxed text-slate">
            El logaritmo responde a: ¿a qué potencia hay que elevar la base para obtener ese número?
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">log₂(8) = 3 porque 2³ = 8</p>
            <p className="mt-1 font-mono text-sm text-white">log₁₀(100) = 2 porque 10² = 100</p>
            <p className="mt-1 font-mono text-sm text-white">ln(e²) = 2 porque e² = e²</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Cuando no se escribe la base, se sobreentiende base 10 (logaritmo decimal). La notación ln es el logaritmo natural, con base e (≈ 2.718).
          </p>
        </div>
      </section>

      {/* Las cuatro reglas con ejemplos */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Las cuatro reglas con ejemplos</h2>
          <div className="space-y-5">
            {[
              {
                rule: 'Regla del producto',
                formula: 'log_b(A · B) = log_b(A) + log_b(B)',
                ex: 'log(2 · 50) = log(2) + log(50) = log(100) = 2',
                why: 'El logaritmo convierte multiplicaciones en sumas.',
              },
              {
                rule: 'Regla del cociente',
                formula: 'log_b(A / B) = log_b(A) − log_b(B)',
                ex: 'log(1000/10) = log(1000) − log(10) = 3 − 1 = 2',
                why: 'El logaritmo convierte divisiones en restas.',
              },
              {
                rule: 'Regla de la potencia',
                formula: 'log_b(Aⁿ) = n · log_b(A)',
                ex: 'log(10³) = 3 · log(10) = 3 · 1 = 3',
                why: 'El exponente sale como factor.',
              },
              {
                rule: 'Cambio de base',
                formula: 'log_b(x) = log(x) / log(b)',
                ex: 'log₅(25) = log(25) / log(5) = 1.398 / 0.699 = 2',
                why: 'Convierte cualquier logaritmo a base 10 o base e.',
              },
            ].map(item => (
              <div key={item.rule} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="font-bold text-sm text-ink mb-1">{item.rule}</p>
                <div className="mt-2 rounded-lg px-4 py-2" style={{ background: '#0a3535' }}>
                  <p className="font-mono text-xs text-white">{item.formula}</p>
                  <p className="mt-1 font-mono text-xs text-white/70">{item.ex}</p>
                </div>
                <p className="mt-2 text-xs text-slate">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propiedades especiales */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Propiedades que siempre se cumplen</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#DDF3F0' }}>
                  <th className="px-4 py-3 text-left font-bold text-ink">Propiedad</th>
                  <th className="px-4 py-3 text-left font-bold text-ink">Fórmula</th>
                  <th className="px-4 py-3 text-left font-bold text-ink">Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { prop: 'Logaritmo de 1', formula: 'log_b(1) = 0', ex: 'log(1) = 0' },
                  { prop: 'Logaritmo de la base', formula: 'log_b(b) = 1', ex: 'log₅(5) = 1' },
                  { prop: 'Base elevada al log', formula: 'b^(log_b(x)) = x', ex: '10^(log 5) = 5' },
                  { prop: 'Log de base negativa', formula: 'No definido (base > 0 y ≠ 1)', ex: 'log₋₂(8) no existe' },
                ].map(row => (
                  <tr key={row.prop} className="border-t" style={{ borderColor: '#EEF4F7' }}>
                    <td className="px-4 py-3 text-sm text-ink">{row.prop}</td>
                    <td className="px-4 py-3 font-mono text-xs text-slate">{row.formula}</td>
                    <td className="px-4 py-3 font-mono text-xs text-slate">{row.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes con logaritmos</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Pensar que log(A + B) = log A + log B', body: 'Falso. La regla del producto es log(A·B) = log A + log B. La suma dentro no puede separarse.' },
              { title: 'Olvidar que log(0) no existe', body: 'El logaritmo solo está definido para números positivos. log(0) y log(−5) no tienen valor real.' },
              { title: 'Confundir base en el cambio de base', body: 'log_b(x) = log(x)/log(b). La base b va en el denominador, no en el numerador.' },
              { title: 'Distribuir el log en una división', body: 'log(A/B) = log A − log B, no log A / log B. La división dentro se convierte en resta.' },
            ].map(card => (
              <div key={card.title} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="mb-2 font-bold text-sm" style={{ color: '#147c7c' }}>{card.title}</p>
                <p className="text-xs leading-relaxed text-slate">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-soft py-8">
        <div className="site-shell max-w-3xl">
          <p className="text-sm text-slate">
            Calcula logaritmos con la{' '}
            <Link href="/calculadoras/calculo/calculadora-de-logaritmos" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de logaritmos
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
