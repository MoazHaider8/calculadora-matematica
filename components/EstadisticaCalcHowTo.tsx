const steps = [
  { n: '1', text: 'Introduce los datos del conjunto separados por comas o uno por línea.' },
  { n: '2', text: 'Revisa los valores detectados para confirmar que los datos se han leído correctamente.' },
  { n: '3', text: 'Pulsa el botón calcular estadística para obtener el resumen completo.' },
  { n: '4', text: 'Consulta media, mediana, moda, rango, varianza y desviación estándar.' },
  { n: '5', text: 'Copia el resumen si necesitas guardar o compartir los resultados.' },
];

export function EstadisticaCalcHowTo() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="howto-ec-heading">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Instrucciones</p>
            <h2 id="howto-ec-heading" className="mt-2 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
              Cómo usar la calculadora de estadística
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Sigue estos pasos para obtener el resumen estadístico de cualquier conjunto de datos.
            </p>
          </div>
          <ol className="flex flex-col gap-4">
            {steps.map(s => (
              <li key={s.n} className="flex gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: '#0a4f4d' }}
                  aria-hidden="true"
                >
                  {s.n}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-slate">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
