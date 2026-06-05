const cards = [
  {
    title: 'Reportar un error',
    desc:  'Usa esta opción cuando una calculadora muestre un resultado inesperado, una fórmula incorrecta, una etiqueta equivocada o un mensaje de validación que no corresponda.',
  },
  {
    title: 'Sugerir una calculadora',
    desc:  'Usa esta opción cuando quieras proponer una nueva calculadora, una categoría nueva o una función adicional dentro de una herramienta que ya existe.',
  },
  {
    title: 'Enviar comentarios',
    desc:  'Usa esta opción para compartir opiniones sobre el diseño, la redacción, la navegación o la usabilidad general del sitio.',
  },
  {
    title: 'Consulta general',
    desc:  'Usa esta opción para preguntas sobre el sitio, las categorías disponibles o cualquier otra duda que no encaje en las opciones anteriores.',
  },
];

export function ContactoCuando() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="cuando-heading">
      <div className="site-shell">
        <p className="eyebrow">Motivos de contacto</p>
        <h2 id="cuando-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Cuándo contactarnos
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(card => (
            <div
              key={card.title}
              className="rounded-2xl bg-white p-5"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <p className="text-sm font-bold text-ink">{card.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
