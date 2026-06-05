import Link from 'next/link';

const ejemplos = [
  { titulo: 'Promedio básico', datos: '10, 8, 9, 7, 6', paso: '(10 + 8 + 9 + 7 + 6) / 5 = 40 / 5 = 8', resultado: '8' },
  { titulo: 'Promedio de notas', datos: '85, 90, 78, 92, 88', paso: '(85 + 90 + 78 + 92 + 88) / 5 = 433 / 5 = 86.6', resultado: '86.6' },
  { titulo: 'Con decimales', datos: '2.5, 3.5, 4, 5', paso: '(2.5 + 3.5 + 4 + 5) / 4 = 15 / 4 = 3.75', resultado: '3.75' },
  { titulo: 'Promedio ponderado', datos: 'Nota 80 (peso 30%), nota 90 (peso 70%)', paso: '(80 × 0.30) + (90 × 0.70) = 24 + 63 = 87', resultado: '87' },
  { titulo: 'Con negativos', datos: '-4, -2, 0, 2, 4', paso: '(-4 + -2 + 0 + 2 + 4) / 5 = 0 / 5 = 0', resultado: '0' },
];

const errores = [
  { titulo: 'Olvidar dividir entre todos los valores', desc: 'Si el conjunto tiene 5 valores, hay que dividir entre 5, aunque algunos sean iguales. Cada dato cuenta por separado.' },
  { titulo: 'Confundir promedio con mediana', desc: 'El promedio es la suma dividida entre el total. La mediana es el valor central al ordenar los datos. Son cálculos distintos.' },
  { titulo: 'Sumar mal por valores decimales', desc: 'Con decimales, es fácil cometer errores de suma. Verifica la suma antes de dividir, especialmente en conjuntos grandes.' },
  { titulo: 'Aplicar promedio simple cuando los pesos son diferentes', desc: 'Si un examen vale más que otros, el promedio simple no es correcto. Usa el promedio ponderado cuando los datos tienen pesos distintos.' },
];

export function PromedioArtPractica() {
  return (
    <>
      {/* Ejemplos */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="prom-ejemplos-h">
        <div className="site-shell">
          <h2 id="prom-ejemplos-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Ejemplos resueltos de promedio</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {ejemplos.map((e, i) => (
              <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#147c7c' }}>Ejemplo {i + 1}</p>
                <p className="mt-2 text-sm font-bold text-ink">{e.titulo}</p>
                <p className="mt-1 text-xs text-slate">{e.datos}</p>
                <div className="mt-3 overflow-x-auto rounded-lg px-4 py-2.5 font-mono text-xs" style={{ background: '#DDF3F0', color: '#0a3535' }}>{e.paso}</div>
                <p className="mt-2 text-xs font-semibold" style={{ color: '#147c7c' }}>Resultado: {e.resultado}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Errores */}
      <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="prom-errores-h">
        <div className="site-shell">
          <h2 id="prom-errores-h" className="mb-5 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Errores comunes al calcular promedios</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {errores.map((e, i) => (
              <div key={i} className="rounded-2xl bg-white p-5" style={{ border: '1px solid #D7E2EA' }}>
                <p className="text-sm font-bold text-ink">{e.titulo}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuándo usar calculadora */}
      <section className="bg-white py-8 lg:py-10" aria-labelledby="prom-usar-h">
        <div className="site-shell">
          <h2 id="prom-usar-h" className="mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">Cuándo usar la calculadora de promedio</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate">
            La calculadora es útil cuando tienes muchos valores, cuando trabajas con decimales o cuando quieres calcular un promedio ponderado con pesos distintos. Introduce los valores separados por comas y obtén el resultado inmediatamente.
          </p>
          <div className="mt-5">
            <Link href="/calculadoras/aritmetica/calculadora-de-promedio" className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white transition-colors" style={{ background: '#147c7c' }}>
              Ir a la calculadora de promedio &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
