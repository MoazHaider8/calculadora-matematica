const tipos = [
  {
    name: 'Límite bilateral',
    full: 'lim x→a f(x)',
    note: 'Analiza la función desde ambos lados del punto a',
  },
  {
    name: 'Límite por la izquierda',
    full: 'lim x→a⁻ f(x)',
    note: 'Aproximación solo desde valores menores que a',
  },
  {
    name: 'Límite por la derecha',
    full: 'lim x→a⁺ f(x)',
    note: 'Aproximación solo desde valores mayores que a',
  },
  {
    name: 'Límite al infinito',
    full: 'lim x→∞ f(x)',
    note: 'Comportamiento cuando la variable crece sin límite',
  },
  {
    name: 'Límite infinito',
    full: 'f(x) → +∞ o -∞',
    note: 'La función crece o decrece sin límite al acercarse a un punto',
  },
  {
    name: 'Indeterminación',
    full: '0/0, ∞/∞, 0·∞',
    note: 'Formas que requieren análisis adicional para resolver el límite',
  },
  {
    name: 'Límite no existe',
    full: 'lim ≠ desde izq y der',
    note: 'Cuando los límites laterales son diferentes, el bilateral no existe',
  },
  {
    name: 'Continuidad',
    full: 'lim x→a f(x) = f(a)',
    note: 'Una función es continua en a si el límite coincide con el valor de la función',
  },
];

export function LimiteTipos() {
  return (
    <section className="bg-page py-10 lg:py-14" aria-labelledby="tipos-limite-heading">
      <div className="site-shell">

        <div className="mb-8">
          <p className="eyebrow">Referencia</p>
          <h2 id="tipos-limite-heading" className="mt-2 text-[1.6rem] font-bold text-ink lg:text-[1.9rem]">
            Tipos de límites más comunes
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-soft">
            Los tipos de límites que la calculadora puede analizar y detectar.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tipos.map((t) => (
            <div key={t.name} className="academic-card flex flex-col p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-teal">{t.name}</p>
              <div
                className="flex flex-1 items-center rounded-lg px-3 py-4"
                style={{ background: '#F0FAF9', border: '1px solid #DDF3F0' }}
              >
                <p className="font-mono text-sm font-bold leading-snug text-deep-teal">{t.full}</p>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">{t.note}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
