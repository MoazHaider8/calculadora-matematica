const errors = [
  { title: 'Combinar términos que no son semejantes', desc: '2x² y 3x no son semejantes porque tienen distinto grado. Solo se combinan términos con exactamente la misma variable y exponente.' },
  { title: 'Olvidar ordenar el resultado por grado', desc: 'La forma estándar de un polinomio va de mayor a menor grado. El resultado 7x + 2x² debería escribirse como 2x² + 7x.' },
  { title: 'Cambiar signos al restar polinomios', desc: 'Al restar (x² + 2x + 1) - (x + 3), hay que cambiar todos los signos del segundo polinomio: x² + 2x + 1 - x - 3 = x² + x - 2.' },
  { title: 'Aplicar mal la propiedad distributiva', desc: 'En (x + 2)(x + 3), hay que multiplicar cada término del primero por cada término del segundo: x·x + x·3 + 2·x + 2·3.' },
  { title: 'Factorizar sin comprobar', desc: 'Después de factorizar, conviene expandir el resultado para verificar que es igual al polinomio original. Un error de signo puede pasar desapercibido.' },
  { title: 'Confundir grado con número de términos', desc: 'El grado de x³ + 5 es 3, no 2. El grado es el mayor exponente, no el número de términos del polinomio.' },
];

export function PolinomioErrors() {
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="errors-pol-heading">
      <div className="site-shell">
        <div className="mb-8">
          <p className="eyebrow">Precauciones</p>
          <h2 id="errors-pol-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Errores comunes al trabajar con polinomios
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
