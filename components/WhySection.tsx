export function WhySection() {
  return (
    <section className="section-shell bg-[#101018]" aria-labelledby="why-heading">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="section-label">Por qué esta plataforma</span>
          <h2 id="why-heading" className="text-3xl text-white-soft lg:text-4xl">
            Una forma más clara de usar calculadoras matemáticas
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-14">
          <div>
            <div className="mb-6 h-px w-12 bg-gold" />
            <h3 className="mb-3 text-xl text-white-soft">El problema con otros sitios</h3>
            <p className="text-sm leading-relaxed text-panel-3">
              Muchos sitios de calculadoras presentan las herramientas sin orden ni contexto. Resulta difícil encontrar
              lo que se necesita y los resultados aparecen sin explicación del procedimiento utilizado.
            </p>
          </div>

          <div>
            <div className="mb-6 h-px w-12 bg-gold" />
            <h3 className="mb-3 text-xl text-white-soft">Organización por área matemática</h3>
            <p className="text-sm leading-relaxed text-panel-3">
              Esta plataforma organiza las calculadoras por área matemática: cálculo, álgebra, matrices, aritmética,
              estadística y geometría. Cada herramienta está pensada para una operación concreta.
            </p>
          </div>

          <div>
            <div className="mb-6 h-px w-12 bg-gold" />
            <h3 className="mb-3 text-xl text-white-soft">Resultados con procedimiento</h3>
            <p className="text-sm leading-relaxed text-panel-3">
              El objetivo no es reemplazar el aprendizaje matemático, sino acompañarlo. Una calculadora bien diseñada
              muestra el camino, no solo la respuesta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
