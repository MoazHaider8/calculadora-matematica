const medidas = [
  { title: 'Media',             formula: 'x̄ = Σx / n',              desc: 'Suma de todos los valores dividida entre la cantidad de datos. Es la medida de tendencia central más utilizada.' },
  { title: 'Mediana',           formula: 'valor central ordenado',    desc: 'Valor que ocupa la posición central cuando los datos están ordenados de menor a mayor.' },
  { title: 'Moda',              formula: 'valor más frecuente',       desc: 'Valor o valores que aparecen más veces en el conjunto. Si ninguno se repite, no hay moda.' },
  { title: 'Rango',             formula: 'máximo − mínimo',           desc: 'Diferencia entre el valor más alto y el más bajo. Indica el ancho del conjunto de datos.' },
  { title: 'Varianza',          formula: 'σ² = Σ(x − x̄)² / n',      desc: 'Dispersión cuadrática promedio respecto a la media. Muestra cuánto varían los datos entre sí.' },
  { title: 'Desviación estándar', formula: 'σ = √σ²',                desc: 'Raíz cuadrada de la varianza. Se expresa en las mismas unidades que los datos y facilita su interpretación.' },
  { title: 'Mínimo y máximo',   formula: 'min, max',                 desc: 'Límites inferior y superior del conjunto de datos. Son la base para calcular el rango.' },
  { title: 'Cantidad y suma',   formula: 'n, Σx',                    desc: 'Número de datos del conjunto y suma total acumulada. Son los valores de partida para los demás cálculos.' },
];

export function EstadisticaCalcMedidas() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="medidas-ec-heading">
      <div className="site-shell">
        <p className="eyebrow">Referencia</p>
        <h2 id="medidas-ec-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Medidas estadísticas incluidas
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {medidas.map(m => (
            <div key={m.title} className="overflow-hidden rounded-2xl" style={{ border: '1px solid #D7E2EA' }}>
              <div className="px-5 py-3" style={{ background: '#0a3535' }}>
                <p className="text-xs font-bold text-white">{m.title}</p>
                <p className="mt-0.5 font-mono text-xs" style={{ color: 'rgba(216,163,26,0.85)' }}>{m.formula}</p>
              </div>
              <div className="px-5 py-4">
                <p className="text-xs leading-relaxed text-slate">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
