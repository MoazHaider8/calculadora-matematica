import Link from 'next/link';

const ejemplos = [
  {
    titulo: 'Precio de artículos (directa)',
    enunciado: 'Si 3 cuadernos cuestan 150, ¿cuánto cuestan 5 cuadernos?',
    resolucion: 'x = (5 × 150) / 3 = 250',
    resultado: '250',
  },
  {
    titulo: 'Trabajadores y tiempo (inversa)',
    enunciado: '4 trabajadores hacen una tarea en 6 días. ¿Cuánto tardan 8 trabajadores?',
    resolucion: 'x = (4 × 6) / 8 = 3',
    resultado: '3 días',
  },
  {
    titulo: 'Precio por kilogramo (directa)',
    enunciado: 'Si 2 kg cuestan 300, ¿cuánto cuestan 7 kg?',
    resolucion: 'x = (7 × 300) / 2 = 1050',
    resultado: '1050',
  },
  {
    titulo: 'Distancia y tiempo (directa)',
    enunciado: 'Un vehículo recorre 120 km en 2 horas. ¿Cuánto recorre en 5 horas a la misma velocidad?',
    resolucion: 'x = (5 × 120) / 2 = 300',
    resultado: '300 km',
  },
  {
    titulo: 'Cuándo no usar la directa',
    enunciado: 'Si 6 personas consumen una provisión en 10 días, ¿cuánto dura para 15 personas?',
    resolucion: 'Relación inversa: x = (6 × 10) / 15 = 4',
    resultado: '4 días',
  },
];

const errores = [
  {
    titulo: 'Confundir directa con inversa',
    descripcion: 'Antes de plantear la operación, pregúntate si las dos magnitudes van en el mismo sentido o en sentido opuesto. Si más de una da más de la otra, es directa. Si más de una da menos de la otra, es inversa.',
    ejemplo: 'Más velocidad = menos tiempo → inversa, no directa.',
  },
  {
    titulo: 'Colocar mal los valores en la fórmula',
    descripcion: 'En la directa, el valor desconocido va al mismo nivel que el conocido del mismo tipo. En la inversa, se multiplican en cruz de forma diferente. Ordena siempre los datos antes de calcular.',
    ejemplo: 'a → b / c → x. No mezclar filas al plantear la proporción.',
  },
  {
    titulo: 'Usar la regla de tres cuando no hay proporcionalidad',
    descripcion: 'La regla de tres solo funciona cuando la relación es proporcional. Si hay costos fijos, descuentos por volumen u otras condiciones, la proporcionalidad puede no existir.',
    ejemplo: 'El precio de 1 entrada es 10 pero 10 entradas cuestan 80 por descuento, no 100.',
  },
  {
    titulo: 'No verificar las unidades',
    descripcion: 'Los datos deben estar en las mismas unidades para que la proporción sea válida. Si una distancia está en km y otra en m, hay que convertir antes de aplicar la fórmula.',
    ejemplo: '120 km y 3000 m no se pueden combinar directamente sin convertir.',
  },
];

export function ReglaPractica() {
  return (
    <>
      {/* Ejemplos resueltos */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="regla-ejemplos-h">
        <div className="site-shell">
          <h2 id="regla-ejemplos-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Ejemplos resueltos de regla de tres
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {ejemplos.map((e, i) => (
              <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>
                  Ejemplo {i + 1}
                </p>
                <p className="mt-2 text-sm font-bold text-ink">{e.titulo}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate">{e.enunciado}</p>
                <div className="mt-3 overflow-x-auto rounded-lg px-4 py-2.5 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>
                  {e.resolucion}
                </div>
                <p className="mt-2 text-xs font-semibold" style={{ color: '#147c7c' }}>
                  Resultado: {e.resultado}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="regla-errores-h">
        <div className="site-shell">
          <h2 id="regla-errores-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Errores comunes al usar la regla de tres
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {errores.map((e, i) => (
              <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-sm font-bold text-ink">{e.titulo}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate">{e.descripcion}</p>
                <div className="mt-3 overflow-x-auto rounded-lg px-4 py-2.5 font-mono text-xs" style={{ background: '#FFF8F0', border: '1px solid #F5D9AA', color: '#7a4500' }}>
                  {e.ejemplo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuándo usar la calculadora */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="regla-usar-calc-h">
        <div className="site-shell">
          <h2 id="regla-usar-calc-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
            Cuándo usar la calculadora de regla de tres
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate">
            La calculadora es útil cuando los números son grandes, cuando quieres verificar un cálculo manual o cuando trabajas con valores decimales. Puedes seleccionar el tipo de relación (directa o inversa), introducir los tres valores conocidos y obtener el resultado al instante.
          </p>
          <div className="mt-5">
            <Link
              href="/calculadoras/aritmetica/calculadora-de-regla-de-tres"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white transition-colors"
              style={{ background: '#147c7c' }}
            >
              Ir a la calculadora de regla de tres &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
