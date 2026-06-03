const entities = ['Argumento', 'Base', 'Logaritmo natural', 'Logaritmo común', 'Cambio de base', 'Dominio', 'Resultado decimal'];

export function LogaritmoWhatIs() {
  return (
    <section className="py-10 lg:py-14" style={{ background: '#EEF4F7' }} aria-labelledby="whatis-log-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="eyebrow">Sobre esta herramienta</p>
            <h2 id="whatis-log-heading" className="mt-3 text-[1.6rem] font-bold leading-tight text-ink lg:text-[1.9rem]">
              Qué calcula esta herramienta
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {entities.map((e) => (
                <span key={e} className="rounded-full px-2.5 py-1 text-xs font-semibold" style={{ background: '#DDF3F0', color: '#0f5c5c' }}>
                  {e}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="academic-card p-7">
              <p className="text-sm leading-relaxed text-slate">
                Un logaritmo responde a la pregunta: ¿a qué exponente hay que elevar la base para obtener el argumento?
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                La calculadora acepta tres tipos de base. El <strong className="font-semibold text-ink">logaritmo común</strong> usa base 10 y se escribe log(x) o log₁₀(x). El <strong className="font-semibold text-ink">logaritmo natural</strong> usa base e y se escribe ln(x). Con la opción de <strong className="font-semibold text-ink">base personalizada</strong> puedes introducir cualquier base válida.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                El <strong className="font-semibold text-ink">argumento</strong> siempre debe ser mayor que cero. La base debe ser positiva y distinta de 1. Fuera de ese dominio, el logaritmo no está definido.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                El cálculo usa la fórmula de cambio de base: log_b(a) = ln(a) / ln(b). Cuando el resultado es un número entero exacto, la calculadora lo muestra directamente. En caso contrario, muestra la aproximación decimal.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
