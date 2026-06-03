const errors = [
  {
    title: 'Olvidar el signo igual',
    desc: 'Una ecuación debe tener signo igual (=). Sin él, no es una ecuación sino una expresión. La calculadora no puede resolverla.',
  },
  {
    title: 'Cambiar un lado sin cambiar el otro',
    desc: 'Cualquier operación que se aplique a un lado de la ecuación debe aplicarse también al otro. De lo contrario, la igualdad deja de ser válida.',
  },
  {
    title: 'Confundir solución con comprobación',
    desc: 'La solución es el valor de la variable. La comprobación consiste en sustituir ese valor en la ecuación original para verificar que es correcto.',
  },
  {
    title: 'Usar la variable incorrecta',
    desc: 'Si la ecuación contiene y y se selecciona x como variable a resolver, el resultado puede ser incorrecto. Verifica qué variable quieres despejar.',
  },
  {
    title: 'Olvidar paréntesis en expresiones compuestas',
    desc: 'En ecuaciones como 2(x + 3) = 10, los paréntesis son necesarios. Sin ellos, la calculadora interpretaría 2x + 3 = 10, que es una ecuación diferente.',
  },
  {
    title: 'Aplicar mal la fórmula general',
    desc: 'En la fórmula x = (-b ± √D) / 2a, el signo menos del término -b y el denominador 2a son parte del resultado completo. Un error de signo o de paréntesis cambia la solución.',
  },
];

export function EcuacionErrors() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="errors-eq-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Precauciones</p>
          <h2 id="errors-eq-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Errores comunes al resolver ecuaciones
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
