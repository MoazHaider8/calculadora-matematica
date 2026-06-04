const items = [
  {
    title: 'Olvidar cambiar entre grados y radianes',
    desc:  'sin(90) en grados da 1, pero sin(90) en radianes da aproximadamente 0.894. Verifica el modo antes de calcular.',
  },
  {
    title: 'Paréntesis sin cerrar',
    desc:  'Toda apertura de paréntesis o función necesita su cierre. sin(30 sin cierres devolverá un error.',
  },
  {
    title: 'Usar log o ln con valores negativos o cero',
    desc:  'log(0) y ln(-5) no tienen resultado real. El logaritmo solo está definido para argumentos positivos.',
  },
  {
    title: 'Dividir entre cero',
    desc:  'La división 8/0 no está definida. La calculadora mostrará un aviso en español.',
  },
  {
    title: 'Confundir log y ln',
    desc:  'log usa base 10 — log(1000) = 3. ln usa base e — ln(e) = 1. Ambos están disponibles en la calculadora.',
  },
  {
    title: 'No respetar el orden de operaciones',
    desc:  '2 + 3 × 4 vale 14, no 20. Si quieres 20, escribe (2 + 3) × 4 con paréntesis explícitos.',
  },
];

export function CientificaErrors() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="errores-heading">
      <div className="site-shell">
        <p className="eyebrow">Consejos</p>
        <h2 id="errores-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Errores comunes al usar calculadora científica
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(item => (
            <div
              key={item.title}
              className="rounded-2xl px-5 py-5"
              style={{ background: '#fff', border: '1px solid #D7E2EA' }}
            >
              <div className="mb-2 flex items-start gap-2.5">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: '#B45309' }}
                  aria-hidden="true"
                >
                  !
                </span>
                <p className="text-sm font-bold text-ink">{item.title}</p>
              </div>
              <p className="text-xs leading-relaxed text-slate">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
