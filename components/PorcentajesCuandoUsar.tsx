import Link from 'next/link';

export function PorcentajesCuandoUsar() {
  return (
    <section className="bg-white-soft py-8 lg:py-10" aria-labelledby="cuando-usar-h">
      <div className="site-shell">
        <p className="eyebrow">Herramienta</p>
        <h2 id="cuando-usar-h" className="mt-2 mb-4 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Cuándo usar la calculadora de porcentajes
        </h2>
        <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate">
          <p>
            Cuando los números son sencillos, calcular porcentajes a mano es rápido y directo. Con la fórmula puedes resolver el 10% de 200 o el 25% de 120 en pocos segundos.
          </p>
          <p>
            Las dificultades aparecen cuando los decimales complican el cálculo, cuando los valores son grandes o cuando necesitas hacer varias operaciones seguidas. Para eso tiene más sentido usar una calculadora.
          </p>
          <p>
            La{' '}
            <Link
              href="/calculadoras/aritmetica/calculadora-de-porcentajes/"
              className="font-semibold underline underline-offset-2 transition-colors"
              style={{ color: '#147c7c' }}
            >
              calculadora de porcentajes
            </Link>{' '}
            del sitio resuelve los tipos más frecuentes: el porcentaje de una cantidad, qué porcentaje representa un número sobre otro, descuentos, aumentos y disminuciones. Introduces los valores, seleccionas el tipo de cálculo y obtienes el resultado de forma directa.
          </p>
          <p>
            También sirve para verificar un cálculo que hiciste a mano y asegurarte de que el resultado es correcto.
          </p>
        </div>
      </div>
    </section>
  );
}
