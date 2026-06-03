const props = [
  {
    name: 'Regla del producto',
    full: 'log_b(xy) = log_b(x) + log_b(y)',
    note: 'El logaritmo de un producto es la suma de los logaritmos',
  },
  {
    name: 'Regla del cociente',
    full: 'log_b(x/y) = log_b(x) - log_b(y)',
    note: 'El logaritmo de un cociente es la diferencia de los logaritmos',
  },
  {
    name: 'Regla de la potencia',
    full: 'log_b(xⁿ) = n · log_b(x)',
    note: 'El exponente pasa a multiplicar al logaritmo',
  },
  {
    name: 'Logaritmo de la base',
    full: 'log_b(b) = 1',
    note: 'El logaritmo de la base en esa misma base siempre es 1',
  },
  {
    name: 'Logaritmo de la unidad',
    full: 'log_b(1) = 0',
    note: 'El logaritmo de 1 en cualquier base siempre es 0',
  },
  {
    name: 'Cambio de base',
    full: 'log_b(a) = ln(a) / ln(b)',
    note: 'Permite calcular logaritmos con cualquier base',
  },
  {
    name: 'Logaritmo e en base e',
    full: 'ln(e) = 1',
    note: 'El logaritmo natural de e siempre es 1',
  },
  {
    name: 'Logaritmo de 1 en ln',
    full: 'ln(1) = 0',
    note: 'El logaritmo natural de 1 siempre es 0',
  },
];

export function LogaritmoProperties() {
  return (
    <section className="py-10 lg:py-14" style={{ background: '#EEF4F7' }} aria-labelledby="props-log-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Referencia</p>
          <h2 id="props-log-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Propiedades de los logaritmos
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-soft">
            Las reglas fundamentales que gobiernan el comportamiento de los logaritmos.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {props.map((p) => (
            <div key={p.name} className="academic-card flex flex-col p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-teal">{p.name}</p>
              <div
                className="flex flex-1 items-center rounded-lg px-3 py-4"
                style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              >
                <p className="font-mono text-sm font-bold leading-snug text-deep-teal">{p.full}</p>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">{p.note}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
