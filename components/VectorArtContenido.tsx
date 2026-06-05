import Link from 'next/link';

export function VectorArtContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell">
          <div className="rounded-2xl p-6 lg:p-8" style={{ border: '2px solid #D8A31A' }}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </p>
            <p className="text-base font-bold text-ink">¿Qué es un vector en matemáticas?</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Un vector es una cantidad que tiene magnitud (tamaño) y dirección. Se representa como una flecha o como una lista de componentes. Un escalar solo tiene magnitud.
            </p>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-sm text-white">v = (3, 4) en 2D</p>
              <p className="mt-1 font-mono text-sm text-white">|v| = √(3² + 4²) = √25 = 5</p>
              <p className="mt-2 font-mono text-sm text-white/70">Magnitud del vector: 5 unidades</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Qué es un vector</h2>
          <p className="text-sm leading-relaxed text-slate">
            Un vector en el plano tiene dos componentes: horizontal (x) y vertical (y). En el espacio tiene tres: x, y, z. Cada componente indica cuánto avanza el vector en esa dirección.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            A diferencia de un número, un vector no dice solo "cuánto" sino también "en qué dirección". La velocidad del viento es un vector: 80 km/h hacia el norte. La temperatura es un escalar: 25 grados, sin dirección.
          </p>
        </div>
      </section>

      {/* Componentes y módulo */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Componentes y módulo</h2>
          <p className="text-sm leading-relaxed text-slate">
            El módulo (magnitud) de un vector es su longitud. Para un vector v = (x, y), se calcula con el teorema de Pitágoras.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">|v| = √(x² + y²)</p>
            <p className="mt-2 font-mono text-sm text-white/70">v = (3, 4) → |v| = √(9+16) = √25 = 5</p>
            <p className="mt-1 font-mono text-sm text-white/70">v = (1, 0) → |v| = √1 = 1 (vector unitario)</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Un vector unitario tiene módulo 1. Se usa para indicar solo la dirección, sin magnitud.
          </p>
        </div>
      </section>

      {/* Operaciones */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Operaciones con vectores</h2>
          <div className="space-y-4">
            {[
              {
                op: 'Suma de vectores',
                body: 'Se suman componente a componente.',
                ex: 'u = (2,3), v = (1,4)\nu + v = (2+1, 3+4) = (3, 7)',
              },
              {
                op: 'Multiplicación por escalar',
                body: 'Multiplica cada componente por el escalar. Cambia la magnitud, no necesariamente la dirección.',
                ex: '3 × (2, 4) = (6, 12)',
              },
              {
                op: 'Producto escalar (punto)',
                body: 'Multiplica componentes y suma los resultados. Da un número, no un vector.',
                ex: 'u·v = u₁v₁ + u₂v₂\n(2,3)·(1,4) = 2×1 + 3×4 = 2+12 = 14',
              },
            ].map(item => (
              <div key={item.op} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="font-bold text-sm text-ink mb-1">{item.op}</p>
                <p className="text-xs text-slate mb-2">{item.body}</p>
                <div className="rounded-lg px-3 py-2" style={{ background: '#0a3535' }}>
                  <pre className="font-mono text-xs text-white whitespace-pre">{item.ex}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Producto escalar y ángulo */}
      <section className="bg-white py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-5 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Ángulo entre vectores</h2>
          <p className="text-sm leading-relaxed text-slate">
            El producto escalar se puede usar para calcular el ángulo entre dos vectores. Si el resultado es 0, los vectores son perpendiculares.
          </p>
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">cos(θ) = (u·v) / (|u| × |v|)</p>
            <p className="mt-2 font-mono text-sm text-white/70">u = (1,0), v = (0,1)</p>
            <p className="mt-1 font-mono text-sm text-white/70">u·v = 1×0 + 0×1 = 0</p>
            <p className="mt-2 font-mono text-sm text-white">cos(θ) = 0 → θ = 90° (perpendiculares)</p>
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white-soft py-10 lg:py-14">
        <div className="site-shell max-w-3xl">
          <h2 className="mb-6 text-[1.35rem] font-bold text-ink lg:text-[1.6rem]">Errores frecuentes con vectores</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Confundir vector y punto', body: 'El punto (3,4) indica una posición. El vector (3,4) indica un desplazamiento de 3 unidades en x y 4 en y. Son conceptos distintos.' },
              { title: 'Calcular módulo sumando componentes', body: '|(3,4)| no es 3+4=7. El módulo se calcula con la raíz cuadrada de la suma de cuadrados: √(9+16) = 5.' },
              { title: 'Pensar que u·v da un vector', body: 'El producto escalar (u·v) da un número (escalar), no un vector. El producto vectorial (u×v) sí da un vector, y solo existe en 3D.' },
              { title: 'Sumar magnitudes sin considerar dirección', body: 'Dos vectores de magnitud 3 y 4 no dan necesariamente un vector de magnitud 7. Depende de su dirección relativa.' },
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
            Calcula con vectores usando la{' '}
            <Link href="/calculadoras/matrices-y-vectores/calculadora-de-vectores" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              calculadora de vectores
            </Link>{' '}
            o explora{' '}
            <Link href="/calculadoras/matrices-y-vectores" className="font-semibold underline underline-offset-2" style={{ color: '#147c7c' }}>
              todas las calculadoras de matrices y vectores
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
