export function ExponenteWhatIs() {
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="whatis-heading">
      <div className="site-shell">
        <div className="mb-6">
          <p className="eyebrow">Descripción</p>
          <h2 id="whatis-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Qué calcula esta herramienta
          </h2>
        </div>
        <div className="academic-card max-w-2xl p-6">
          <p className="text-sm leading-relaxed text-slate">
            Esta calculadora resuelve operaciones con exponentes y potencias. Una potencia se compone de una base y un exponente: la base es el número que se multiplica, y el exponente indica cuántas veces. Admite exponentes positivos, exponentes negativos y exponentes fraccionarios. Un exponente negativo convierte la potencia en su recíproco, mientras que un exponente fraccionario equivale a una raíz. La herramienta también simplifica expresiones con exponentes aplicando las propiedades básicas, y convierte números a notación científica usando potencias de 10.
          </p>
        </div>
      </div>
    </section>
  );
}
