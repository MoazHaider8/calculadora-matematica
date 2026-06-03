const lateralPoints = [
  'Analizan el comportamiento desde un solo lado del punto',
  'El límite por la izquierda usa valores menores que el punto',
  'El límite por la derecha usa valores mayores que el punto',
  'Se usan cuando hay saltos, discontinuidades o asíntotas',
  'El límite bilateral existe solo si ambos lados coinciden',
];

const infPoints = [
  'Analizan el comportamiento para valores muy grandes de la variable',
  'Ayudan a estudiar asíntotas horizontales de la función',
  'Si la función se estabiliza, ese valor es el límite al infinito',
  'Si la función crece sin límite, el límite al infinito es +∞ o -∞',
  'Se usan para estudiar el comportamiento a largo plazo',
];

export function LimiteComparison() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="comparison-limite-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Diferencias clave</p>
          <h2 id="comparison-limite-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Límites laterales y límites al infinito
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="academic-card overflow-hidden">
            <div className="px-6 py-4" style={{ background: '#F0FAF9', borderBottom: '1px solid #DDF3F0' }}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold"
                  style={{ background: '#DDF3F0', color: '#0f5c5c' }}
                >
                  a⁻a⁺
                </span>
                <p className="font-heading text-base font-bold text-ink">Límites laterales</p>
              </div>
            </div>
            <ul className="divide-y divide-line px-6">
              {lateralPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 py-3.5">
                  <span className="mt-0.5 text-teal" aria-hidden="true">›</span>
                  <span className="text-sm leading-relaxed text-slate">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="academic-card overflow-hidden">
            <div className="px-6 py-4" style={{ background: '#FFF4CC', borderBottom: '1px solid #F5DFA0' }}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold"
                  style={{ background: '#fff4cc', color: '#b58000', border: '1.5px solid #F5DFA0' }}
                >
                  ∞
                </span>
                <p className="font-heading text-base font-bold text-ink">Límites al infinito</p>
              </div>
            </div>
            <ul className="divide-y divide-line px-6">
              {infPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 py-3.5">
                  <span className="mt-0.5 text-gold" aria-hidden="true">›</span>
                  <span className="text-sm leading-relaxed text-slate">{p}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-6 rounded-xl px-6 py-4" style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}>
          <p className="text-sm leading-relaxed text-slate">
            <strong className="font-semibold text-ink">Condición de existencia: </strong>
            El límite bilateral lim x→a f(x) existe si y solo si el límite por la izquierda y el límite por la derecha existen y son iguales. Si uno o ambos no existen, o si los valores difieren, el límite bilateral no existe en ese punto.
          </p>
        </div>

      </div>
    </section>
  );
}
