const errors = [
  {
    title: 'Introducir una probabilidad mayor que 1',
    desc: 'La probabilidad siempre está entre 0 y 1. Un valor como 1.5 o 120 no es una probabilidad válida.',
  },
  {
    title: 'Confundir casos favorables con probabilidad',
    desc: 'Los casos favorables son un número entero (cuántas veces puede ocurrir el evento). La probabilidad es el cociente favorable/posible.',
  },
  {
    title: 'Aplicar la intersección a eventos dependientes',
    desc: 'La fórmula P(A ∩ B) = P(A) × P(B) solo es válida si los eventos son independientes. Para eventos dependientes se usa la probabilidad condicional.',
  },
  {
    title: 'Olvidar restar la intersección en la unión',
    desc: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Si no se resta la intersección, el resultado puede superar 1.',
  },
  {
    title: 'Dejar campos vacíos',
    desc: 'Todos los valores del tipo de probabilidad seleccionado deben completarse antes de calcular.',
  },
  {
    title: 'Confundir el complemento con la diferencia',
    desc: "P(A') = 1 − P(A) es el complemento de A. No es lo mismo que P(B) − P(A), que es otra operación.",
  },
];

export function ProbabilidadErrors() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="errors-prob-heading">
      <div className="site-shell">
        <p className="eyebrow">Precauciones</p>
        <h2 id="errors-prob-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Errores comunes al calcular probabilidades
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {errors.map(err => (
            <div
              key={err.title}
              className="rounded-2xl px-5 py-5"
              style={{ background: '#F8FAFC', border: '1px solid #D7E2EA' }}
            >
              <div className="mb-2 flex items-start gap-2">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{ background: '#FFE9E9', color: '#c0392b' }}
                  aria-hidden="true"
                >
                  !
                </span>
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
