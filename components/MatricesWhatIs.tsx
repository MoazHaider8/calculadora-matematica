export function MatricesWhatIs() {
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="whatis-matrices-heading">
      <div className="site-shell">
        <div className="mb-6">
          <p className="eyebrow">Descripción</p>
          <h2 id="whatis-matrices-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Qué calcula esta herramienta
          </h2>
        </div>
        <div className="academic-card max-w-2xl p-6">
          <p className="text-sm leading-relaxed text-slate">
            Esta calculadora realiza las operaciones fundamentales con matrices. Una matriz es una tabla de números organizados en filas y columnas; sus dimensiones se expresan como m × n. La herramienta permite sumar y restar matrices del mismo tamaño sumando o restando los elementos en igual posición, multiplicar dos matrices cuando el número de columnas de A coincide con el número de filas de B, obtener la transpuesta convirtiendo filas en columnas, y multiplicar todos los elementos de una matriz por un escalar. El resultado incluye la matriz solución, las dimensiones de cada operación y una explicación del procedimiento. Esta herramienta no calcula determinantes ni matrices inversas, que cuentan con calculadoras propias.
          </p>
        </div>
      </div>
    </section>
  );
}
