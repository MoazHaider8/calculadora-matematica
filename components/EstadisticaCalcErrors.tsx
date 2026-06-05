const items = [
  { title: 'Mezclar texto con números',         desc: 'Si la lista incluye palabras, letras o símbolos, la calculadora no puede interpretarlos como datos numéricos.' },
  { title: 'Olvidar valores del conjunto',       desc: 'Un dato faltante modifica la media, la mediana y todas las medidas de dispersión. Revisa que la lista esté completa.' },
  { title: 'Confundir media con mediana',        desc: 'La media es el promedio aritmético; la mediana es el valor central. En conjuntos con valores extremos, pueden diferir notablemente.' },
  { title: 'Usar muestra cuando se quiere población', desc: 'Si tienes todos los datos, usa la varianza poblacional (divide entre n). La muestral (divide entre n−1) solo aplica cuando el conjunto es una muestra.' },
  { title: 'Redondear demasiado pronto',         desc: 'Redondear datos de entrada antes de calcular acumula error. Usa los valores exactos y redondea solo el resultado final.' },
  { title: 'Interpretar moda cuando no hay repetición', desc: 'Si ningún valor se repite, el conjunto no tiene moda. La calculadora lo indica como Sin moda para evitar interpretaciones incorrectas.' },
];

export function EstadisticaCalcErrors() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="errores-ec-heading">
      <div className="site-shell">
        <p className="eyebrow">Consejos</p>
        <h2 id="errores-ec-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Errores comunes al calcular estadística
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(item => (
            <div
              key={item.title}
              className="rounded-2xl bg-white px-5 py-5"
              style={{ border: '1px solid #D7E2EA' }}
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
