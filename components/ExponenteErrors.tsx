const errors = [
  {
    title: 'Confundir base y exponente',
    desc: '2³ y 3² no son iguales. La base es el número que se multiplica, el exponente indica cuántas veces.',
  },
  {
    title: 'Olvidar el recíproco en exponentes negativos',
    desc: '2⁻³ no es -8. Es 1/8. El signo negativo en el exponente invierte la fracción, no cambia el signo del resultado.',
  },
  {
    title: 'Interpretar mal exponentes fraccionarios',
    desc: '4^(1/2) no es 4/2 = 2 por coincidencia. El exponente 1/2 representa la raíz cuadrada.',
  },
  {
    title: 'Sumar exponentes con bases distintas',
    desc: 'x² · y³ no puede simplificarse porque las bases son diferentes. La regla aᵐ · aⁿ = aᵐ⁺ⁿ solo aplica con la misma base.',
  },
  {
    title: 'Multiplicar exponentes cuando no corresponde',
    desc: 'x² + x³ no es x⁵. Solo se suman los exponentes cuando se multiplican potencias con la misma base.',
  },
  {
    title: 'Olvidar paréntesis en (-2)²',
    desc: '(-2)² = 4 porque el exponente afecta a toda la base. Sin paréntesis, -2² = -4 porque el negativo no forma parte de la base.',
  },
];

export function ExponenteErrors() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="errors-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Precauciones</p>
          <h2 id="errors-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Errores comunes al calcular exponentes
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {errors.map((err, i) => (
            <div key={i} className="academic-card p-5">
              <div className="mb-3 flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: '#c0392b' }}
                  aria-hidden="true"
                >
                  !
                </span>
                <p className="text-sm font-bold text-ink">{err.title}</p>
              </div>
              <p className="text-xs leading-relaxed text-slate">{err.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
