import Link from 'next/link';

const proximos = [
  { n: 1,  title: 'Cómo calcular porcentajes',          calcUrl: '/calculadoras/aritmetica/calculadora-de-porcentajes/',         calcLabel: 'Calculadora de porcentajes',    articleUrl: '/blog/como-calcular-porcentajes' as string | undefined },
  { n: 2,  title: 'Qué es la regla de tres',             calcUrl: '/calculadoras/aritmetica/calculadora-de-regla-de-tres/',        calcLabel: 'Calculadora de regla de tres',  articleUrl: undefined },
  { n: 3,  title: 'Cómo sacar promedio',                 calcUrl: '/calculadoras/aritmetica/calculadora-de-promedio/',             calcLabel: 'Calculadora de promedio',       articleUrl: undefined },
  { n: 4,  title: 'Fórmulas de área',                    calcUrl: '/calculadoras/geometria/calculadora-de-area/',                  calcLabel: 'Calculadora de área',           articleUrl: undefined },
  { n: 5,  title: 'Fórmulas de volumen',                 calcUrl: '/calculadoras/geometria/calculadora-de-volumen/',               calcLabel: 'Calculadora de volumen',        articleUrl: undefined },
  { n: 6,  title: 'Teorema de Pitágoras',                calcUrl: '/calculadoras/geometria/calculadora-de-pitagoras/',             calcLabel: 'Calculadora de Pitágoras',      articleUrl: undefined },
  { n: 7,  title: 'Media, mediana y moda: diferencias',  calcUrl: '/calculadoras/estadistica/calculadora-de-estadistica/',         calcLabel: 'Calculadora de estadística',    articleUrl: undefined },
  { n: 8,  title: 'Varianza y desviación estándar',      calcUrl: '/calculadoras/estadistica/calculadora-de-varianza/',            calcLabel: 'Calculadora de varianza',       articleUrl: undefined },
  { n: 9,  title: 'Qué es la probabilidad',              calcUrl: '/calculadoras/estadistica/calculadora-de-probabilidad/',        calcLabel: 'Calculadora de probabilidad',   articleUrl: undefined },
  { n: 10, title: 'Qué es una derivada',                 calcUrl: '/calculadoras/calculo/calculadora-de-derivadas/',               calcLabel: 'Calculadora de derivadas',      articleUrl: undefined },
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
