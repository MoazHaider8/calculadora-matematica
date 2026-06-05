import Link from 'next/link';

export function PolinomiosArtContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Qué es un polinomio?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Un polinomio es una expresión algebraica formada por la suma de términos con variables elevadas a potencias enteras no negativas y coeficientes reales.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">P(x) = 4x³ − 2x² + 7x − 5</p>
              <p className="mt-1 font-mono text-sm text-white/70">Grado: 3 (potencia más alta)</p>
              <p className="mt-1 font-mono text-sm text-white/70">Coeficiente líder: 4</p>
              <p className="mt-1 font-mono text-sm text-white/70">Término independiente: −5</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partes de un polinomio */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Partes de un polinomio</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#DDF3F0' }}>
                  <th className="px-4 py-3 text-left font-bold text-ink">Concepto</th>
                  <th className="px-4 py-3 text-left font-bold text-ink">Definición</th>
                  <th className="px-4 py-3 text-left font-bold text-ink">Ejemplo en 4x³ − 2x + 1</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { concept: 'Término', def: 'Cada parte separada por + o −', ex: '4x³, −2x, 1' },
                  { concept: 'Coeficiente', def: 'El número que multiplica a la variable', ex: '4, −2, 1' },
                  { concept: 'Grado del término', def: 'El exponente de la variable', ex: '3, 1, 0' },
                  { concept: 'Grado del polinomio', def: 'El mayor grado entre todos sus términos', ex: '3' },
                  { concept: 'Término independiente', def: 'El término sin variable', ex: '1' },
                ].map(row => (
                  <tr key={row.concept} className="border-t" style={{ borderColor: '#EEF4F7' }}>
                    <td className="px-4 py-3 font-semibold text-sm text-ink">{row.concept}</td>
                    <td className="px-4 py-3 text-xs text-slate">{row.def}</td>
                    <td className="px-4 py-3 font-mono text-xs text-slate">{row.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Clasificación */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Clasificación por grado</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Constante', degree: 'Grado 0', ex: '7' },
              { name: 'Lineal', degree: 'Grado 1', ex: '3x − 2' },
              { name: 'Cuadrático', degree: 'Grado 2', ex: 'x² + 4x − 1' },
              { name: 'Cúbico', degree: 'Grado 3', ex: '2x³ + x' },
              { name: 'Cuártico', degree: 'Grado 4', ex: 'x⁴ − 3x²' },
              { name: 'Quíntico', degree: 'Grado 5', ex: 'x⁵ + 2x³' },
            ].map(item => (
              <div key={item.name} className="rounded-2xl p-4" style={{ border: '1px solid #D7E2EA', background: '#fff' }}>
                <p className="font-bold text-sm text-ink">{item.name}</p>
                <p className="text-xs text-slate mt-0.5">{item.degree}</p>
                <p className="mt-2 font-mono text-xs" style={{ color: '#147c7c' }}>{item.ex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operaciones básicas */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Operaciones básicas con polinomios</h2>
          <div className="space-y-5">
            {[
              {
                op: 'Suma y resta',
                body: 'Se combinan los términos semejantes. Solo los términos del mismo grado se pueden sumar.',
                ex: '(3x² + 2x) + (x² − 5x) = 4x² − 3x',
              },
              {
                op: 'Multiplicación',
                body: 'Se aplica la propiedad distributiva: cada término del primer polinomio multiplica a todos los del segundo.',
                ex: '(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6',
              },
              {
                op: 'Evaluación',
                body: 'Para calcular P(a), se sustituye x por el valor a en el polinomio.',
                ex: 'P(x) = x² − 3x + 1, P(2) = 4 − 6 + 1 = −1',
              },
            ].map(item => (
              <div key={item.op} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="font-bold text-sm text-ink mb-1">{item.op}</p>
                <p className="text-xs text-slate leading-relaxed">{item.body}</p>
                <div className="mt-3 rounded-lg px-4 py-2" style={{ background: '#0a3535' }}>
                  <p className="font-mono text-xs text-white">{item.ex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes con polinomios</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Sumar términos de distinto grado', body: '2x² + 3x no es 5x³. Los grados son diferentes y los términos no se pueden combinar.' },
              { title: 'Error al distribuir el signo negativo', body: '−(x² − 3x + 1) es −x² + 3x − 1. El negativo cambia todos los signos.' },
              { title: 'Olvidar el grado del polinomio', body: 'El grado es el exponente mayor, no el número de términos. x³ + x + 1 tiene grado 3.' },
              { title: 'Multiplicar exponentes en la suma', body: 'x² + x³ ≠ x⁵. Los exponentes solo se suman al multiplicar: x² · x³ = x⁵.' },
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
            Opera con polinomios usando la{' '}
            <Link href="/calculadoras/algebra/calculadora-de-polinomios" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de polinomios
            </Link>{' '}
            o explora{' '}
            <Link href="/calculadoras/algebra" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              todas las calculadoras de álgebra
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
