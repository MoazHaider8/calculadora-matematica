export function RaizCuadradaWhatIs() {
  return (
    <section className="bg-panel py-10 lg:py-14" aria-labelledby="whatis-raizc-heading">
      <div className="site-shell">
        <div className="mb-6">
          <p className="eyebrow">Descripción</p>
          <h2 id="whatis-raizc-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Qué calcula esta herramienta
          </h2>
        </div>
        <div className="academic-card max-w-2xl p-6">
          <p className="text-sm leading-relaxed text-slate">
            Esta calculadora calcula la raíz cuadrada de un número. Dado un radicando, devuelve el número que elevado al cuadrado produce ese valor. Cuando el radicando es un cuadrado perfecto, como 25 o 144, el resultado es un entero exacto. Cuando no lo es, muestra la aproximación decimal con diez cifras y, si es posible, la forma simplificada del radical. Por ejemplo, √72 = 6√2. La herramienta también permite verificar si un valor propuesto es realmente la raíz cuadrada de un número dado. Esta página se ocupa exclusivamente de raíz cuadrada. Para raíces con índice mayor que 2, como raíz cúbica o raíz cuarta, usa la calculadora de raíces.
          </p>
        </div>
      </div>
    </section>
  );
}
