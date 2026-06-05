import Link from 'next/link';

const groups = [
  {
    topic: 'Aritmética',
    articles: [
      { title: 'Cómo calcular porcentajes',       purpose: 'Descuentos, aumentos y cambios porcentuales con fórmulas.',       calcUrl: '/calculadoras/aritmetica/calculadora-de-porcentajes/', calcLabel: 'Calculadora de porcentajes', articleUrl: '/blog/como-calcular-porcentajes' as string | undefined },
      { title: 'Qué es la regla de tres',          purpose: 'Relación proporcional entre tres valores con procedimiento.',       calcUrl: '/calculadoras/aritmetica/calculadora-de-regla-de-tres/', calcLabel: 'Calculadora de regla de tres' },
      { title: 'Cómo sacar promedio',              purpose: 'Media aritmética de un conjunto de valores con pasos claros.',     calcUrl: '/calculadoras/aritmetica/calculadora-de-promedio/', calcLabel: 'Calculadora de promedio' },
    ],
  },
  {
    topic: 'Geometría',
    articles: [
      { title: 'Fórmulas de área',                 purpose: 'Área de cuadrados, rectángulos, triángulos y círculos.',           calcUrl: '/calculadoras/geometria/calculadora-de-area/', calcLabel: 'Calculadora de área' },
      { title: 'Fórmulas de volumen',              purpose: 'Volumen de cubos, esferas, cilindros, conos y pirámides.',         calcUrl: '/calculadoras/geometria/calculadora-de-volumen/', calcLabel: 'Calculadora de volumen' },
      { title: 'Teorema de Pitágoras',             purpose: 'Relación entre los lados del triángulo rectángulo: a² + b² = c².', calcUrl: '/calculadoras/geometria/calculadora-de-pitagoras/', calcLabel: 'Calculadora de Pitágoras' },
    ],
  },
  {
    topic: 'Estadística',
    articles: [
      { title: 'Media, mediana y moda: diferencias', purpose: 'Medidas de tendencia central y cuándo usar cada una.',            calcUrl: '/calculadoras/estadistica/calculadora-de-estadistica/', calcLabel: 'Calculadora de estadística' },
      { title: 'Varianza y desviación estándar',   purpose: 'Dispersión de datos estadísticos con fórmulas y ejemplos.',       calcUrl: '/calculadoras/estadistica/calculadora-de-varianza/', calcLabel: 'Calculadora de varianza' },
      { title: 'Qué es la probabilidad',           purpose: 'Concepto de probabilidad, eventos y cálculo básico.',             calcUrl: '/calculadoras/estadistica/calculadora-de-probabilidad/', calcLabel: 'Calculadora de probabilidad' },
    ],
  },
  {
    topic: 'Cálculo',
    articles: [
      { title: 'Qué es una derivada',              purpose: 'Concepto de derivada, reglas básicas y aplicaciones.',             calcUrl: '/calculadoras/calculo/calculadora-de-derivadas/', calcLabel: 'Calculadora de derivadas' },
      { title: 'Qué es una integral',              purpose: 'Integral definida e indefinida con ejemplos prácticos.',           calcUrl: '/calculadoras/calculo/calculadora-de-integrales/', calcLabel: 'Calculadora de integrales' },
      { title: 'Cómo calcular límites',            purpose: 'Definición y cálculo de límites de funciones.',                   calcUrl: '/calculadoras/calculo/calculadora-de-limites/', calcLabel: 'Calculadora de límites' },
    ],
  },
];

export function BlogGuias() {
  return (
    <section className="bg-white-soft py-12 lg:py-16" aria-labelledby="guias-heading">
      <div className="site-shell">
        <p className="eyebrow">Por tema</p>
        <h2 id="guias-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Guías recomendadas por tema
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {groups.map(group => (
            <div key={group.topic}>
              <p
                className="mb-4 inline-block rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: '#DDF3F0', color: '#147c7c' }}
              >
                {group.topic}
              </p>
              <ul className="space-y-3">
                {group.articles.map(article => (
                  <li
                    key={article.title}
                    className="rounded-xl bg-white p-4"
                    style={{ border: '1px solid #D7E2EA' }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-ink">{article.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-slate">{article.purpose}</p>
                        <Link
                          href={article.calcUrl}
                          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold transition-colors hover:underline underline-offset-2"
                          style={{ color: '#147c7c' }}
                        >
                          {article.calcLabel} &rarr;
                        </Link>
                      </div>
                      {'articleUrl' in article && article.articleUrl ? (
                        <Link
                          href={article.articleUrl as string}
                          className="shrink-0 rounded-md px-2 py-1 text-[10px] font-bold transition-colors hover:underline"
                          style={{ background: '#DDF3F0', color: '#147c7c' }}
                        >
                          Leer &rarr;
                        </Link>
                      ) : (
                        <span
                          className="shrink-0 rounded-md px-2 py-1 text-[10px] font-bold opacity-60"
                          style={{ background: '#D7E2EA', color: '#627d98' }}
                        >
                          Próximamente
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
