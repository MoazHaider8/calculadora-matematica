const items = [
  { sym: 'r', title: 'Radio',          desc: 'Distancia del centro al borde. Punto de partida para el resto de fórmulas del círculo.' },
  { sym: 'd', title: 'Diámetro',       desc: 'Cuerda máxima que pasa por el centro. Equivale al doble del radio: d = 2r.' },
  { sym: 'C', title: 'Circunferencia', desc: 'Longitud del contorno del círculo. Se mide en unidades lineales como cm o m.' },
  { sym: 'A', title: 'Área',           desc: 'Superficie interior del círculo. Se expresa en unidades cuadradas como cm² o m².' },
];

export function CirculosWhatIs() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="whatis-circ-heading">
      <div className="site-shell">
        <p className="eyebrow">Información</p>
        <h2 id="whatis-circ-heading" className="mt-2 mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Qué calcula esta herramienta
        </h2>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate">
          Esta calculadora trabaja con círculos y permite obtener las cuatro medidas principales a partir de un único valor conocido: radio, diámetro, circunferencia o área. La herramienta aplica las fórmulas del círculo y muestra el procedimiento completo con la unidad seleccionada. No hace falta conocer todas las medidas del círculo, basta con introducir una para calcular las demás. El número π, aproximado en 3.14159, es la constante que relaciona el radio con la circunferencia y el área.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(item => (
            <div
              key={item.sym}
              className="rounded-2xl bg-white p-5"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl font-mono text-sm font-bold"
                style={{ background: '#DDF3F0', color: '#147c7c' }}
                aria-hidden="true"
              >
                {item.sym}
              </div>
              <p className="text-sm font-bold text-ink">{item.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
