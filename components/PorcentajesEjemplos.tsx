const ejemplos = [
  {
    pregunta:     '¿Cuánto es el 20% de 150?',
    calculo:      ['150 × 20 / 100 = 30'],
    respuesta:    '30',
    explicacion:  'Para encontrar el 20% de cualquier número puedes multiplicar por 0.20 o dividir entre 5.',
  },
  {
    pregunta:     '¿Qué porcentaje es 45 de 300?',
    calculo:      ['45 / 300 × 100 = 15%'],
    respuesta:    '15%',
    explicacion:  '45 representa el 15% del total. Útil cuando quieres expresar una proporción, como el porcentaje de alumnos que aprobaron.',
  },
  {
    pregunta:     '30% de descuento sobre 900',
    calculo:      ['900 × 30 / 100 = 270', '900 - 270 = 630'],
    respuesta:    'Precio final = 630',
    explicacion:  'El descuento es 270. Se resta al precio original para obtener el precio que pagas.',
  },
  {
    pregunta:     'Aumento del 8% sobre 250',
    calculo:      ['250 × 8 / 100 = 20', '250 + 20 = 270'],
    respuesta:    'Valor final = 270',
    explicacion:  'El aumento es 20. Se suma al valor inicial para obtener el nuevo valor.',
  },
  {
    pregunta:     'Disminución del 12% sobre 1000',
    calculo:      ['1000 × 12 / 100 = 120', '1000 - 120 = 880'],
    respuesta:    'Valor final = 880',
    explicacion:  'La disminución es 120. Se resta al valor inicial para obtener el resultado.',
  },
];

export function PorcentajesEjemplos() {
  return (
    <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="ejemplos-h">
      <div className="site-shell">
        <p className="eyebrow">Práctica</p>
        <h2 id="ejemplos-h" className="mt-2 mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Ejemplos resueltos de porcentajes
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ejemplos.map((e, i) => (
            <div key={i} className="flex flex-col rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
              <p className="mb-3 text-sm font-bold text-ink">{e.pregunta}</p>
              <div className="overflow-x-auto rounded-lg px-4 py-3 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>
                {e.calculo.map((line, j) => <p key={j}>{line}</p>)}
              </div>
              <p className="mt-3 rounded-lg px-3 py-2 text-sm font-bold" style={{ background: '#0a3535', color: '#DDF3F0' }}>
                {e.respuesta}
              </p>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-slate">{e.explicacion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
