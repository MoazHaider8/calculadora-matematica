import Link from 'next/link';

export function AlgSimplContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Cómo se simplifica una expresión algebraica?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Se combinan los términos que tienen la misma variable y el mismo exponente. Los términos distintos no se pueden unir.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">3x² + 2x − x² + 5x − 4</p>
              <p className="mt-1 font-mono text-sm text-white/70">Agrupar x²: 3x² − x² = 2x²</p>
              <p className="mt-1 font-mono text-sm text-white/70">Agrupar x: 2x + 5x = 7x</p>
              <p className="mt-2 font-mono text-sm text-white">Resultado: 2x² + 7x − 4</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué son términos semejantes */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Términos semejantes</h2>
          <p className="text-sm leading-relaxed text-slate">
            Dos términos son semejantes si tienen exactamente la misma variable elevada al mismo exponente. Solo los términos semejantes se pueden sumar o restar.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Sí son semejantes', items: ['3x y 5x → se suman: 8x', '2x² y −x² → se suman: x²', '4ab y 7ab → se suman: 11ab'], ok: true },
              { label: 'No son semejantes', items: ['3x y 3x² (distinto exponente)', '2x y 2y (distinta variable)', '5 y 5x (uno es constante)'], ok: false },
            ].map(group => (
              <div
                key={group.label}
                className="rounded-2xl p-4"
                style={{ border: `1px solid ${group.ok ? '#147c7c' : '#D7E2EA'}`, background: group.ok ? '#DDF3F0' : '#fff' }}
              >
                <p className="mb-2 font-bold text-sm text-ink">{group.label}</p>
                <ul className="space-y-1">
                  {group.items.map(item => (
                    <li key={item} className="text-xs text-slate">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propiedad distributiva */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">La propiedad distributiva</h2>
          <p className="text-sm leading-relaxed text-slate">
            Cuando hay paréntesis con un factor fuera, multiplica ese factor por cada término dentro del paréntesis antes de combinar.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">2(3x + 4) − x</p>
            <p className="mt-1 font-mono text-sm text-white/70">Distribuye el 2: 6x + 8 − x</p>
            <p className="mt-1 font-mono text-sm text-white">Combina: 5x + 8</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Si hay un signo negativo delante del paréntesis, cambia el signo de cada término dentro:
          </p>
          <div className="mt-3 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">5x − (2x − 3)</p>
            <p className="mt-1 font-mono text-sm text-white/70">El negativo afecta todo el paréntesis: 5x − 2x + 3</p>
            <p className="mt-1 font-mono text-sm text-white">Resultado: 3x + 3</p>
          </div>
        </div>
      </section>

      {/* Fracciones algebraicas */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Simplificar fracciones algebraicas</h2>
          <p className="text-sm leading-relaxed text-slate">
            Una fracción algebraica se simplifica factorizando numerador y denominador y cancelando factores comunes.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">(x² − 4) / (x − 2)</p>
            <p className="mt-1 font-mono text-sm text-white/70">Factoriza el numerador: (x+2)(x−2) / (x−2)</p>
            <p className="mt-1 font-mono text-sm text-white">Cancela (x−2): x + 2</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Solo puedes cancelar factores multiplicativos, no términos sumados. (x + 2) / (x + 3) no se puede simplificar porque x no es un factor.
          </p>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes al simplificar</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Sumar términos no semejantes', body: '3x + 2x² no es 5x³. Son términos distintos y no se pueden combinar.' },
              { title: 'Olvidar la distributiva negativa', body: 'En x − (3x − 2), el negativo afecta a los dos términos: x − 3x + 2 = −2x + 2.' },
              { title: 'Cancelar términos en fracciones', body: '(x + 5) / (x + 3) no es 5/3. Solo se cancelan factores multiplicativos.' },
              { title: 'Cambiar el signo del exponente', body: 'x² · x³ = x⁵, no x⁶. Al multiplicar potencias con la misma base, se suman los exponentes.' },
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
            Simplifica expresiones con la{' '}
            <Link href="/calculadoras/algebra/calculadora-algebraica" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora algebraica
            </Link>{' '}
            o explora más temas de{' '}
            <Link href="/calculadoras/algebra" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              álgebra
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
