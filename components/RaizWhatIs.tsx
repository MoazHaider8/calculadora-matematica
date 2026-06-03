export function RaizWhatIs() {
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="whatis-raiz-heading">
      <div className="site-shell">
        <div className="mb-6">
          <p className="eyebrow">Descripción</p>
          <h2 id="whatis-raiz-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Qué calcula esta herramienta
          </h2>
        </div>
        <div className="academic-card max-w-2xl p-6">
          <p className="text-sm leading-relaxed text-slate">
            Esta calculadora trabaja con raíces de cualquier índice. Dado un radicando y un índice, calcula el número que elevado al índice produce el radicando. Cuando la raíz tiene resultado entero exacto lo muestra directamente con comprobación. Cuando no existe raíz exacta muestra la aproximación decimal con diez cifras. Para raíces de índice par con radicando negativo indica que no existe resultado real. Además simplifica radicales extrayendo factores perfectos, como √72 = 6√2, y convierte raíces a exponente fraccionario, como ∛x² = x^(2/3). Esta página se ocupa de raíces de índice variable: cúbica, cuarta, enésima.
          </p>
        </div>
      </div>
    </section>
  );
}
