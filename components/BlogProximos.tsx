import Link from 'next/link';

const proximos = [
  { n: 1,  title: 'Cómo calcular porcentajes',          calcUrl: '/calculadoras/aritmetica/calculadora-de-porcentajes/',         calcLabel: 'Calculadora de porcentajes',    articleUrl: '/blog/como-calcular-porcentajes' as string | undefined },
  { n: 2,  title: 'Qué es la regla de tres',             calcUrl: '/calculadoras/aritmetica/calculadora-de-regla-de-tres/',        calcLabel: 'Calculadora de regla de tres',  articleUrl: '/blog/que-es-la-regla-de-tres' as string | undefined },
  { n: 3,  title: 'Cómo sacar promedio',                 calcUrl: '/calculadoras/aritmetica/calculadora-de-promedio/',             calcLabel: 'Calculadora de promedio',       articleUrl: '/blog/como-sacar-promedio' as string | undefined },
  { n: 4,  title: 'Fórmulas de área',                    calcUrl: '/calculadoras/geometria/calculadora-de-area/',                  calcLabel: 'Calculadora de área',           articleUrl: '/blog/formulas-de-area' as string | undefined },
  { n: 5,  title: 'Fórmulas de volumen',                 calcUrl: '/calculadoras/geometria/calculadora-de-volumen/',               calcLabel: 'Calculadora de volumen',        articleUrl: '/blog/formulas-de-volumen' as string | undefined },
  { n: 6,  title: 'Teorema de Pitágoras',                calcUrl: '/calculadoras/geometria/calculadora-de-pitagoras/',             calcLabel: 'Calculadora de Pitágoras',      articleUrl: '/blog/teorema-de-pitagoras' as string | undefined },
  { n: 7,  title: 'Media, mediana y moda: diferencias',  calcUrl: '/calculadoras/estadistica/calculadora-de-estadistica/',         calcLabel: 'Calculadora de estadística',    articleUrl: '/blog/media-mediana-moda-diferencias' as string | undefined },
  { n: 8,  title: 'Varianza y desviación estándar',      calcUrl: '/calculadoras/estadistica/calculadora-de-varianza/',            calcLabel: 'Calculadora de varianza',       articleUrl: '/blog/varianza-y-desviacion-estandar' as string | undefined },
  { n: 9,  title: 'Qué es la probabilidad',              calcUrl: '/calculadoras/estadistica/calculadora-de-probabilidad/',        calcLabel: 'Calculadora de probabilidad',   articleUrl: '/blog/que-es-la-probabilidad' as string | undefined },
  { n: 10, title: 'Qué es una derivada',                           calcUrl: '/calculadoras/calculo/calculadora-de-derivadas/',               calcLabel: 'Calculadora de derivadas',           articleUrl: '/blog/que-es-una-derivada' as string | undefined },
  { n: 11, title: 'Qué es una integral',                           calcUrl: '/calculadoras/calculo/calculadora-de-integrales/',              calcLabel: 'Calculadora de integrales',          articleUrl: '/blog/que-es-una-integral' as string | undefined },
  { n: 12, title: 'Cómo calcular límites',                         calcUrl: '/calculadoras/calculo/calculadora-de-limites/',                 calcLabel: 'Calculadora de límites',             articleUrl: '/blog/como-calcular-limites' as string | undefined },
  { n: 13, title: 'Cómo resolver ecuaciones',                      calcUrl: '/calculadoras/algebra/calculadora-de-ecuaciones/',              calcLabel: 'Calculadora de ecuaciones',          articleUrl: '/blog/como-resolver-ecuaciones' as string | undefined },
  { n: 14, title: 'Cómo simplificar expresiones algebraicas',      calcUrl: '/calculadoras/algebra/calculadora-algebraica/',                 calcLabel: 'Calculadora algebraica',             articleUrl: '/blog/como-simplificar-expresiones-algebraicas' as string | undefined },
  { n: 15, title: 'Qué son los polinomios',                        calcUrl: '/calculadoras/algebra/calculadora-de-polinomios/',              calcLabel: 'Calculadora de polinomios',          articleUrl: '/blog/que-son-los-polinomios' as string | undefined },
  { n: 16, title: 'Reglas de logaritmos',                          calcUrl: '/calculadoras/calculo/calculadora-de-logaritmos/',              calcLabel: 'Calculadora de logaritmos',          articleUrl: '/blog/reglas-de-logaritmos' as string | undefined },
  { n: 17, title: 'Reglas de exponentes',                          calcUrl: '/calculadoras/calculo/calculadora-de-exponentes/',              calcLabel: 'Calculadora de exponentes',          articleUrl: '/blog/reglas-de-exponentes' as string | undefined },
  { n: 18, title: 'Raíces y radicales',                            calcUrl: '/calculadoras/algebra/calculadora-de-raices/',                  calcLabel: 'Calculadora de raíces',              articleUrl: '/blog/raices-y-radicales' as string | undefined },
  { n: 19, title: 'Tipos de triángulos',                           calcUrl: '/calculadoras/geometria/calculadora-de-triangulos/',            calcLabel: 'Calculadora de triángulos',          articleUrl: '/blog/tipos-de-triangulos' as string | undefined },
  { n: 20, title: 'Área y circunferencia del círculo',             calcUrl: '/calculadoras/geometria/calculadora-de-circulos/',              calcLabel: 'Calculadora de círculos',            articleUrl: '/blog/area-y-circunferencia-del-circulo' as string | undefined },
  { n: 21, title: 'Población y muestra en estadística',           calcUrl: '/calculadoras/estadistica/calculadora-de-estadistica/',         calcLabel: 'Calculadora de estadística',         articleUrl: '/blog/poblacion-y-muestra-en-estadistica' as string | undefined },
  { n: 22, title: 'Cómo interpretar la desviación estándar',      calcUrl: '/calculadoras/estadistica/calculadora-de-desviacion-estandar/', calcLabel: 'Calculadora de desviación estándar', articleUrl: '/blog/como-interpretar-la-desviacion-estandar' as string | undefined },
  { n: 23, title: 'Cómo sumar y restar fracciones',               calcUrl: '/calculadoras/aritmetica/calculadora-de-fracciones/',           calcLabel: 'Calculadora de fracciones',          articleUrl: '/blog/como-sumar-restar-fracciones' as string | undefined },
  { n: 24, title: 'Cómo usar una calculadora científica',         calcUrl: '/calculadoras/aritmetica/calculadora-cientifica/',              calcLabel: 'Calculadora científica',             articleUrl: '/blog/como-usar-una-calculadora-cientifica' as string | undefined },
  { n: 25, title: 'Ecuaciones lineales y cuadráticas',            calcUrl: '/calculadoras/algebra/calculadora-de-ecuaciones/',              calcLabel: 'Calculadora de ecuaciones',          articleUrl: '/blog/ecuaciones-lineales-y-cuadraticas' as string | undefined },
  { n: 26, title: 'Qué es una matriz',                            calcUrl: '/calculadoras/matrices-y-vectores/calculadora-de-matrices/',    calcLabel: 'Calculadora de matrices',            articleUrl: '/blog/que-es-una-matriz' as string | undefined },
  { n: 27, title: 'Cómo calcular determinantes',                  calcUrl: '/calculadoras/matrices-y-vectores/calculadora-de-determinantes/', calcLabel: 'Calculadora de determinantes',     articleUrl: '/blog/como-calcular-determinantes' as string | undefined },
  { n: 28, title: 'Qué es un vector',                             calcUrl: '/calculadoras/matrices-y-vectores/calculadora-de-vectores/',    calcLabel: 'Calculadora de vectores',            articleUrl: '/blog/que-es-un-vector' as string | undefined },
  { n: 29, title: 'Cómo resolver sistemas de ecuaciones',         calcUrl: '/calculadoras/algebra/calculadora-de-sistemas-de-ecuaciones/', calcLabel: 'Calculadora de sistemas',            articleUrl: '/blog/como-resolver-sistemas-de-ecuaciones' as string | undefined },
  { n: 30, title: 'Cómo calcular la matriz inversa',              calcUrl: '/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa/', calcLabel: 'Calculadora de matriz inversa',  articleUrl: '/blog/como-calcular-la-matriz-inversa' as string | undefined },
];

export function BlogProximos() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="proximos-heading">
      <div className="site-shell">
        <p className="eyebrow">En preparación</p>
        <h2 id="proximos-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Próximos artículos
        </h2>
        <ol className="space-y-3" aria-label="Lista de próximos artículos">
          {proximos.map(item => (
            <li
              key={item.n}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl bg-white px-5 py-4"
              style={{ border: '1px solid #D7E2EA' }}
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold"
                style={{ background: '#DDF3F0', color: '#147c7c' }}
                aria-hidden="true"
              >
                {item.n}
              </span>
              <span className="flex-1 min-w-0 text-sm font-bold text-ink">{item.title}</span>
              <Link
                href={item.calcUrl}
                className="text-xs font-semibold transition-colors hover:underline underline-offset-2 shrink-0"
                style={{ color: '#147c7c' }}
              >
                {item.calcLabel} &rarr;
              </Link>
              {item.articleUrl ? (
                <Link
                  href={item.articleUrl}
                  className="shrink-0 text-xs font-bold transition-colors hover:underline underline-offset-2"
                  style={{ color: '#D8A31A' }}
                >
                  Leer artículo &rarr;
                </Link>
              ) : (
                <span
                  className="shrink-0 rounded-md px-2.5 py-1 text-[10px] font-bold opacity-60"
                  style={{ background: '#D7E2EA', color: '#627d98' }}
                >
                  Próximamente
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
