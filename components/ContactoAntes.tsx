const items = [
  'Revisa que los valores ingresados sean correctos.',
  'Copia la URL de la calculadora relacionada.',
  'Describe el resultado esperado si reportas un error.',
  'Incluye los datos usados en el cálculo cuando sea posible.',
  'Evita enviar información sensible.',
];

export function ContactoAntes() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="antes-heading">
      <div className="site-shell">
        <p className="eyebrow">Checklist</p>
        <h2 id="antes-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Antes de enviar tu mensaje
        </h2>
        <ul className="max-w-xl space-y-3">
          {items.map(item => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                style={{ background: '#DDF3F0', color: '#147c7c' }}
                aria-hidden="true"
              >
                ✓
              </span>
              <span className="text-sm leading-relaxed text-slate">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
