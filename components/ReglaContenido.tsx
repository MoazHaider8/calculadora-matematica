export function ReglaContenido() {
  return (
    <>
      {/* Respuesta rápida */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="regla-rapida-h">
        <div className="site-shell">
          <div
            className="mx-auto max-w-2xl rounded-2xl px-6 py-6 lg:px-8 lg:py-7"
            style={{ border: '2px solid #D8A31A', background: '#FFFEF7' }}
          >
            <h2 id="regla-rapida-h" className="mb-3 text-base font-bold" style={{ color: '#D8A31A' }}>
              Respuesta rápida
            </h2>
            <p className="text-sm leading-relaxed text-slate">
              La regla de tres relaciona tres valores conocidos para encontrar un cuarto desconocido. Si la relación es directa, cuando uno aumenta el otro también aumenta. Si es inversa, cuando uno aumenta el otro disminuye.
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl px-5 py-4 font-mono text-sm text-white" style={{ background: '#0a3535' }}>
              Directa: x = (b × c) / a
            </div>
            <div className="mt-3 overflow-x-auto rounded-xl px-5 py-3" style={{ background: '#DDF3F0' }}>
              <p className="font-mono text-sm" style={{ color: '#0a3535' }}>
                3 cuadernos cuestan 150. 5 cuadernos cuestan: x = (5 × 150) / 3 = <strong style={{ color: '#147c7c' }}>250</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="regla-que-es-h">
        <div className="site-shell">
          <h2 id="regla-que-es-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Qué es la regla de tres
          </h2>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-slate">
            <p>
              La regla de tres es un método para calcular un valor desconocido a partir de tres valores conocidos que guardan una relación de proporcionalidad. Se usa cuando dos magnitudes varían de forma relacionada.
            </p>
            <p>
              Se llama &quot;de tres&quot; porque trabaja con tres datos para obtener el cuarto. Por ejemplo: si sabes el precio de 3 artículos y quieres saber el precio de 5, tienes tres datos conocidos (3, precio de 3, y 5) y buscas el cuarto (precio de 5).
            </p>
            <p>
              Existen dos tipos: la regla de tres directa y la regla de tres inversa. La clave para resolver cualquier problema es identificar cuál de las dos aplica.
            </p>
          </div>
        </div>
      </section>

      {/* Directa */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="regla-directa-h">
        <div className="site-shell">
          <h2 id="regla-directa-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Regla de tres directa
          </h2>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-slate">
            <p>
              Cuando las dos magnitudes aumentan o disminuyen en el mismo sentido, la relación es directa. Si compras más unidades, pagas más. Si recorres más tiempo, cubres más distancia.
            </p>
          </div>
          <div className="mt-5 overflow-x-auto rounded-xl px-6 py-5" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">a &nbsp;&rarr;&nbsp; b</p>
            <p className="font-mono text-sm text-white">c &nbsp;&rarr;&nbsp; x</p>
            <p className="mt-3 font-mono text-sm" style={{ color: '#D8A31A' }}>x = (b × c) / a</p>
          </div>
          <div className="mt-5 rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Ejemplo</p>
            <p className="mt-2 text-sm text-slate">Si 3 cuadernos cuestan 150, ¿cuánto cuestan 5 cuadernos?</p>
            <div className="mt-3 overflow-x-auto rounded-lg px-4 py-3 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>
              x = (5 × 150) / 3 = 750 / 3 = <strong>250</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Inversa */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="regla-inversa-h">
        <div className="site-shell">
          <h2 id="regla-inversa-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Regla de tres inversa
          </h2>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-slate">
            <p>
              Cuando una magnitud aumenta y la otra disminuye, la relación es inversa. Si hay más trabajadores, el trabajo tarda menos. Si un vehículo va más rápido, tarda menos tiempo en llegar.
            </p>
          </div>
          <div className="mt-5 overflow-x-auto rounded-xl px-6 py-5" style={{ background: '#0a3535' }}>
            <p className="font-mono text-sm text-white">a &nbsp;&rarr;&nbsp; b</p>
            <p className="font-mono text-sm text-white">c &nbsp;&rarr;&nbsp; x</p>
            <p className="mt-3 font-mono text-sm" style={{ color: '#D8A31A' }}>x = (a × b) / c</p>
          </div>
          <div className="mt-5 rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Ejemplo</p>
            <p className="mt-2 text-sm text-slate">4 trabajadores terminan una tarea en 6 días. ¿Cuántos días tardan 8 trabajadores?</p>
            <div className="mt-3 overflow-x-auto rounded-lg px-4 py-3 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>
              x = (4 × 6) / 8 = 24 / 8 = <strong>3 días</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Cuándo usar cuál */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="regla-cuando-h">
        <div className="site-shell">
          <h2 id="regla-cuando-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Cómo saber cuál usar
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
            <div className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
              <p className="text-sm font-bold text-ink">Relación directa</p>
              <p className="mt-2 text-xs leading-relaxed text-slate">Si al aumentar una magnitud la otra también aumenta, o si al disminuir una la otra disminuye, la relación es directa.</p>
              <p className="mt-3 text-xs font-semibold" style={{ color: '#147c7c' }}>Más unidades = más precio</p>
            </div>
            <div className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
              <p className="text-sm font-bold text-ink">Relación inversa</p>
              <p className="mt-2 text-xs leading-relaxed text-slate">Si al aumentar una magnitud la otra disminuye, la relación es inversa. Una sube, la otra baja.</p>
              <p className="mt-3 text-xs font-semibold" style={{ color: '#147c7c' }}>Más velocidad = menos tiempo</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
