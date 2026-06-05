import Link from 'next/link';

const related = [
  { name: 'Calculadoras de Estadística',        desc: 'Hub con todas las herramientas estadísticas de la categoría.',          url: '/calculadoras/estadistica',                                                     live: true  },
  { name: 'Calculadora de Promedio',             desc: 'Promedio simple y ponderado para listas de valores.',                   url: '/calculadoras/aritmetica/calculadora-de-promedio',                              live: true  },
  { name: 'Calculadora de Porcentajes',          desc: 'Descuentos, aumentos y variaciones porcentuales.',                      url: '/calculadoras/aritmetica/calculadora-de-porcentajes',                           live: true  },
  { name: 'Calculadora Científica',              desc: 'Trigonometría, logaritmos, potencias y raíces en un lugar.',            url: '/calculadoras/aritmetica/calculadora-cientifica',                               live: true  },
  { name: 'Calculadora de Probabilidad',         desc: 'Calcula probabilidades a partir de casos favorables y posibles.',       url: '/calculadoras/estadistica/calculadora-de-probabilidad',                         live: true  },
  { name: 'Calculadora de Desviación Estándar',  desc: 'Herramienta dedicada al cálculo de la desviación estándar.',           url: '/calculadoras/estadistica/calculadora-de-desviacion-estandar',                  live: true  },
  { name: 'Calculadora de Media',                desc: 'Calcula la media estadística con procedimiento detallado.',             url: '/calculadoras/estadistica/calculadora-de-media',                                live: true  },
  { name: 'Calculadora de Varianza',             desc: 'Calcula la varianza poblacional y muestral de un conjunto.',            url: '/calculadoras/estadistica/calculadora-de-varianza',                             live: true  },
];

export function EstadisticaCalcRelated() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="related-ec-heading">
      <div className="site-shell">
        <p className="eyebrow">Recursos</p>
        <h2 id="related-ec-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Calculadoras relacionadas
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {related.map(item => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <div className="flex-1 px-5 py-5">
                <p className="text-sm font-bold text-ink">{item.name}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate">{item.desc}</p>
              </div>
              <div className="border-t px-5 pb-4 pt-3" style={{ borderColor: '#EEF4F7' }}>
                {item.live ? (
                  <Link
                    href={item.url}
                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition-colors hover:opacity-90"
                    style={{ background: '#D8A31A', color: '#fff' }}
                  >
                    Ver calculadora &rarr;
                  </Link>
                ) : (
                  <span
                    className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-bold opacity-55"
                    style={{ background: '#D7E2EA', color: '#627d98' }}
                  >
                    Próximamente
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
