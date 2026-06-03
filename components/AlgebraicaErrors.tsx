const errors = [
  {
    title: 'Combinar términos que no son semejantes',
    desc: '2x + 3y no puede simplificarse porque x e y son variables diferentes. Solo se pueden combinar términos con exactamente la misma parte variable.',
  },
  {
    title: 'Olvidar los paréntesis al expandir',
    desc: 'En 2(x + 4), la distribución afecta a ambos términos dentro del paréntesis: 2·x + 2·4 = 2x + 8. Omitir el segundo término da un resultado incorrecto.',
  },
  {
    title: 'Confundir expresión con ecuación',
    desc: 'x² + 5x + 6 es una expresión. x² + 5x + 6 = 0 es una ecuación. Esta calculadora trabaja con expresiones. Para resolver ecuaciones, usa la calculadora de ecuaciones.',
  },
  {
    title: 'Aplicar mal la propiedad distributiva',
    desc: '-(x + 3) = -x - 3, no -x + 3. El signo menos se distribuye a todos los términos dentro del paréntesis, incluido el signo de cada uno.',
  },
  {
    title: 'Intentar factorizar expresiones irreducibles',
    desc: 'x² + x + 1 no tiene factores enteros simples. No todas las expresiones pueden factorizarse con números enteros. Si la factorización no avanza, la expresión puede ser irreducible.',
  },
  {
    title: 'Evaluar sin indicar el valor de la variable',
    desc: 'Para evaluar x² + 3x, es necesario especificar el valor de x. Sin ese dato, la expresión no puede calcularse numéricamente.',
  },
];

export function AlgebraicaErrors() {
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="errors-alg-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Precauciones</p>
          <h2 id="errors-alg-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Errores comunes en expresiones algebraicas
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {errors.map((err, i) => (
            <div key={i} className="academic-card p-5">
              <div className="mb-3 flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: '#c0392b' }} aria-hidden="true">!</span>
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
