const errores = [
  {
    titulo:      'Confundir el porcentaje con la cantidad',
    descripcion: 'El 20% no es siempre 20. Depende del total. El 20% de 200 es 40, y el 20% de 50 es 10. El porcentaje indica la proporción, no la cantidad absoluta.',
    ejemplo:     '20% de 200 ≠ 20  →  200 × 20 / 100 = 40',
  },
  {
    titulo:      'Olvidar dividir entre 100',
    descripcion: 'La fórmula es cantidad × porcentaje / 100. Si calculas 200 × 30 sin dividir, obtienes 6000 en lugar de 60. Ese paso convierte el porcentaje en una proporción real.',
    ejemplo:     '200 × 30 = 6000  ✗     200 × 30 / 100 = 60  ✓',
  },
  {
    titulo:      'Sumar el porcentaje directamente al valor',
    descripcion: 'Para aumentar un valor un 15%, no basta con sumar 15. Primero calculas cuánto es el 15% de ese valor y luego lo sumas al original.',
    ejemplo:     '400 + 15 = 415  ✗     400 + (400 × 15/100) = 460  ✓',
  },
  {
    titulo:      'Usar el valor final como valor inicial',
    descripcion: 'Si un precio de 100 sube un 50% hasta 150 y luego baja un 50%, no vuelve a 100. El 50% de 150 es 75, así que el resultado es 75, no 100.',
    ejemplo:     '100 → +50% → 150 → -50% → 75  (no vuelve a 100)',
  },
  {
    titulo:      'Redondear demasiado pronto',
    descripcion: 'Si redondeas cada paso intermedio de un cálculo, los errores se acumulan. Guarda los decimales hasta el final y redondea solo el resultado.',
    ejemplo:     'Redondear 33.333% a 33% en cada paso puede distorsionar el total final.',
  },
];

export function PorcentajesErrores() {
  return (
    <section className="bg-white py-8 lg:py-10" aria-labelledby="errores-h">
      <div className="site-shell">
        <h2 id="errores-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Errores comunes al calcular porcentajes
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {errores.map((e, i) => (
            <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
              <p className="text-sm font-bold text-ink">{e.titulo}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate">{e.descripcion}</p>
              <div
                className="mt-3 overflow-x-auto rounded-lg px-4 py-2.5 font-mono text-xs"
                style={{ background: '#FFF8F0', border: '1px solid #F5D9AA', color: '#7a4500' }}
              >
                {e.ejemplo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
