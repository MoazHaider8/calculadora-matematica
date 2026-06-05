import Link from 'next/link';

export function CirculoContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Cuáles son las fórmulas del círculo?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              El área y la circunferencia dependen del radio r.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">Área: A = π · r²</p>
              <p className="mt-1 font-mono text-sm text-white">Circunferencia: C = 2 · π · r</p>
              <p className="mt-1 font-mono text-sm text-white">Diámetro: d = 2r</p>
            </div>
            <div className="mt-3 rounded-xl px-5 py-3" style={{ background: '#DDF3F0' }}>
              <p className="text-sm font-semibold" style={{ color: '#0a3535' }}>
                Ejemplo con r = 5: A = π · 25 ≈ 78.54 | C = 2π · 5 ≈ 31.42
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Radio y diámetro */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Radio y diámetro</h2>
          <p className="text-sm leading-relaxed text-slate">
            El radio (r) es la distancia desde el centro del círculo hasta cualquier punto de su borde. El diámetro (d) es la distancia entre dos puntos opuestos pasando por el centro. El diámetro siempre es el doble del radio.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Si conoces el radio', formula: 'd = 2r', ex: 'r = 7 → d = 14' },
              { label: 'Si conoces el diámetro', formula: 'r = d / 2', ex: 'd = 12 → r = 6' },
            ].map(item => (
              <div key={item.label} className="rounded-2xl bg-white p-4" style={{ border: '1px solid #D7E2EA' }}>
                <p className="font-bold text-sm text-ink mb-2">{item.label}</p>
                <div className="rounded-lg px-3 py-2" style={{ background: '#0a3535' }}>
                  <p className="font-mono text-xs text-white">{item.formula}</p>
                  <p className="mt-0.5 font-mono text-xs text-white/70">{item.ex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Área del círculo */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Cómo calcular el área del círculo</h2>
          <p className="text-sm leading-relaxed text-slate">
            El área del círculo mide el espacio interior. La fórmula es A = π · r². Si te dan el diámetro, primero divídelo entre 2 para obtener el radio.
          </p>
          <div className="mt-4 space-y-3">
            {[
              { label: 'r = 3', area: 'A = π · 9 ≈ 28.27' },
              { label: 'r = 7', area: 'A = π · 49 ≈ 153.94' },
              { label: 'd = 10 (r = 5)', area: 'A = π · 25 ≈ 78.54' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-4 rounded-xl px-4 py-3" style={{ border: '1px solid #D7E2EA', background: '#fff' }}>
                <span className="font-mono text-xs font-bold text-ink">{item.label}</span>
                <span className="text-xs text-slate">{item.area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circunferencia */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Cómo calcular la circunferencia</h2>
          <p className="text-sm leading-relaxed text-slate">
            La circunferencia mide el contorno del círculo, es decir, la longitud de su borde. También se llama perímetro del círculo.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            Se puede calcular con el radio o con el diámetro:
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">Con el radio: C = 2 · π · r</p>
            <p className="mt-1 font-mono text-sm text-white">Con el diámetro: C = π · d</p>
          </div>
          <div className="mt-4 space-y-3">
            {[
              { label: 'r = 4', c: 'C = 2π · 4 ≈ 25.13' },
              { label: 'd = 10', c: 'C = π · 10 ≈ 31.42' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-4 rounded-xl px-4 py-3" style={{ border: '1px solid #D7E2EA', background: '#fff' }}>
                <span className="font-mono text-xs font-bold text-ink">{item.label}</span>
                <span className="text-xs text-slate">{item.c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El valor de pi */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">El valor de π</h2>
          <p className="text-sm leading-relaxed text-slate">
            Pi (π) es la relación entre la circunferencia y el diámetro de cualquier círculo. Su valor es constante y su decimal no termina ni se repite.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">π ≈ 3.14159265358979...</p>
            <p className="mt-2 font-mono text-sm text-white/70">Valor común: 3.14</p>
            <p className="mt-1 font-mono text-sm text-white/70">Fracción aproximada: 22/7</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Para cálculos con poca precisión, 3.14 es suficiente. Para ingeniería o ciencias, usa al menos 3.14159 o el valor exacto de tu calculadora.
          </p>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes con el círculo</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Usar el diámetro en la fórmula del área', body: 'La fórmula A = πr² usa el radio, no el diámetro. Si te dan el diámetro, divide entre 2 primero.' },
              { title: 'Confundir área y circunferencia', body: 'El área mide el interior (cm²). La circunferencia mide el contorno (cm). Sus unidades son distintas.' },
              { title: 'Redondear π demasiado pronto', body: 'Si redondeas π a 3 desde el principio, el error se acumula. Usa 3.14 o deja el resultado en términos de π.' },
              { title: 'Calcular πd como área', body: 'πd = π · diámetro es la circunferencia, no el área. El área es π · r² = π · (d/2)².' },
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
            Calcula con la{' '}
            <Link href="/calculadoras/geometria/calculadora-de-circulos" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de círculos
            </Link>{' '}
            o la{' '}
            <Link href="/calculadoras/geometria/calculadora-de-area" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de área
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
