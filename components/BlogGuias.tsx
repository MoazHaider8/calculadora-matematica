import Link from 'next/link';

const groups = [
  {
    topic: 'Aritmética',
    articles: [
      { title: 'Cómo calcular porcentajes',       purpose: 'Descuentos, aumentos y cambios porcentuales con fórmulas.',       calcUrl: '/calculadoras/aritmetica/calculadora-de-porcentajes/', calcLabel: 'Calculadora de porcentajes', articleUrl: '/blog/como-calcular-porcentajes' as string | undefined },
      { title: 'Qué es la regla de tres',          purpose: 'Relación proporcional entre tres valores con procedimiento.',       calcUrl: '/calculadoras/aritmetica/calculadora-de-regla-de-tres/', calcLabel: 'Calculadora de regla de tres', articleUrl: '/blog/que-es-la-regla-de-tres' as string | undefined },
      { title: 'Cómo sacar promedio',              purpose: 'Media aritmética de un conjunto de valores con pasos claros.',     calcUrl: '/calculadoras/aritmetica/calculadora-de-promedio/', calcLabel: 'Calculadora de promedio', articleUrl: '/blog/como-sacar-promedio' as string | undefined },
      { title: 'Cómo sumar y restar fracciones',  purpose: 'Mismo y distinto denominador, MCM y simplificación del resultado.', calcUrl: '/calculadoras/aritmetica/calculadora-de-fracciones/', calcLabel: 'Calculadora de fracciones', articleUrl: '/blog/como-sumar-restar-fracciones' as string | undefined },
      { title: 'Cómo usar una calculadora científica', purpose: 'Jerarquía de operaciones, potencias, logaritmos y trigonometría.', calcUrl: '/calculadoras/aritmetica/calculadora-cientifica/', calcLabel: 'Calculadora científica', articleUrl: '/blog/como-usar-una-calculadora-cientifica' as string | undefined },
    ],
  },
  {
    topic: 'Geometría',
    articles: [
      { title: 'Fórmulas de área',                 purpose: 'Área de cuadrados, rectángulos, triángulos y círculos.',           calcUrl: '/calculadoras/geometria/calculadora-de-area/', calcLabel: 'Calculadora de área', articleUrl: '/blog/formulas-de-area' as string | undefined },
      { title: 'Fórmulas de volumen',              purpose: 'Volumen de cubos, esferas, cilindros, conos y pirámides.',         calcUrl: '/calculadoras/geometria/calculadora-de-volumen/', calcLabel: 'Calculadora de volumen', articleUrl: '/blog/formulas-de-volumen' as string | undefined },
      { title: 'Teorema de Pitágoras',             purpose: 'Relación entre los lados del triángulo rectángulo: a² + b² = c².', calcUrl: '/calculadoras/geometria/calculadora-de-pitagoras/', calcLabel: 'Calculadora de Pitágoras', articleUrl: '/blog/teorema-de-pitagoras' as string | undefined },
      { title: 'Tipos de triángulos',              purpose: 'Clasificación por lados y ángulos con fórmulas de área.',           calcUrl: '/calculadoras/geometria/calculadora-de-triangulos/', calcLabel: 'Calculadora de triángulos', articleUrl: '/blog/tipos-de-triangulos' as string | undefined },
      { title: 'Área y circunferencia del círculo', purpose: 'Fórmulas con radio y diámetro usando π.',                          calcUrl: '/calculadoras/geometria/calculadora-de-circulos/', calcLabel: 'Calculadora de círculos', articleUrl: '/blog/area-y-circunferencia-del-circulo' as string | undefined },
    ],
  },
  {
    topic: 'Estadística',
    articles: [
      { title: 'Media, mediana y moda: diferencias', purpose: 'Medidas de tendencia central y cuándo usar cada una.',            calcUrl: '/calculadoras/estadistica/calculadora-de-estadistica/', calcLabel: 'Calculadora de estadística', articleUrl: '/blog/media-mediana-moda-diferencias' as string | undefined },
      { title: 'Varianza y desviación estándar',   purpose: 'Dispersión de datos estadísticos con fórmulas y ejemplos.',       calcUrl: '/calculadoras/estadistica/calculadora-de-varianza/', calcLabel: 'Calculadora de varianza', articleUrl: '/blog/varianza-y-desviacion-estandar' as string | undefined },
      { title: 'Qué es la probabilidad',           purpose: 'Concepto de probabilidad, eventos y cálculo básico.',             calcUrl: '/calculadoras/estadistica/calculadora-de-probabilidad/', calcLabel: 'Calculadora de probabilidad', articleUrl: '/blog/que-es-la-probabilidad' as string | undefined },
      { title: 'Población y muestra en estadística', purpose: 'Diferencia entre población y muestra, parámetro y estadístico.', calcUrl: '/calculadoras/estadistica/calculadora-de-estadistica/', calcLabel: 'Calculadora de estadística', articleUrl: '/blog/poblacion-y-muestra-en-estadistica' as string | undefined },
      { title: 'Cómo interpretar la desviación estándar', purpose: 'Qué significa σ, cómo leerla junto a la media y el coeficiente de variación.', calcUrl: '/calculadoras/estadistica/calculadora-de-desviacion-estandar/', calcLabel: 'Calculadora de desviación estándar', articleUrl: '/blog/como-interpretar-la-desviacion-estandar' as string | undefined },
    ],
  },
  {
    topic: 'Cálculo',
    articles: [
      { title: 'Qué es una derivada',              purpose: 'Concepto de derivada, reglas básicas y aplicaciones.',             calcUrl: '/calculadoras/calculo/calculadora-de-derivadas/', calcLabel: 'Calculadora de derivadas', articleUrl: '/blog/que-es-una-derivada' as string | undefined },
      { title: 'Qué es una integral',              purpose: 'Integral definida e indefinida con ejemplos prácticos.',           calcUrl: '/calculadoras/calculo/calculadora-de-integrales/', calcLabel: 'Calculadora de integrales', articleUrl: '/blog/que-es-una-integral' as string | undefined },
      { title: 'Cómo calcular límites',            purpose: 'Definición y cálculo de límites de funciones.',                   calcUrl: '/calculadoras/calculo/calculadora-de-limites/', calcLabel: 'Calculadora de límites', articleUrl: '/blog/como-calcular-limites' as string | undefined },
      { title: 'Reglas de logaritmos',             purpose: 'Producto, cociente, potencia y cambio de base con ejemplos.',      calcUrl: '/calculadoras/calculo/calculadora-de-logaritmos/', calcLabel: 'Calculadora de logaritmos', articleUrl: '/blog/reglas-de-logaritmos' as string | undefined },
      { title: 'Reglas de exponentes',             purpose: 'Las siete reglas de potencias con ejemplos claros.',              calcUrl: '/calculadoras/calculo/calculadora-de-exponentes/', calcLabel: 'Calculadora de exponentes', articleUrl: '/blog/reglas-de-exponentes' as string | undefined },
    ],
  },
  {
    topic: 'Álgebra',
    articles: [
      { title: 'Cómo resolver ecuaciones',                    purpose: 'Ecuaciones lineales y cuadráticas paso a paso.',                 calcUrl: '/calculadoras/algebra/calculadora-de-ecuaciones/', calcLabel: 'Calculadora de ecuaciones', articleUrl: '/blog/como-resolver-ecuaciones' as string | undefined },
      { title: 'Cómo simplificar expresiones algebraicas',   purpose: 'Términos semejantes, distributiva y fracciones algebraicas.',    calcUrl: '/calculadoras/algebra/calculadora-algebraica/', calcLabel: 'Calculadora algebraica', articleUrl: '/blog/como-simplificar-expresiones-algebraicas' as string | undefined },
      { title: 'Qué son los polinomios',                     purpose: 'Grado, coeficientes y operaciones con polinomios.',              calcUrl: '/calculadoras/algebra/calculadora-de-polinomios/', calcLabel: 'Calculadora de polinomios', articleUrl: '/blog/que-son-los-polinomios' as string | undefined },
      { title: 'Raíces y radicales',                         purpose: 'Raíz cuadrada, cúbica y simplificación de radicales.',           calcUrl: '/calculadoras/algebra/calculadora-de-raices/', calcLabel: 'Calculadora de raíces', articleUrl: '/blog/raices-y-radicales' as string | undefined },
      { title: 'Ecuaciones lineales y cuadráticas',          purpose: 'Diferencias, métodos de solución y discriminante.',              calcUrl: '/calculadoras/algebra/calculadora-de-ecuaciones/', calcLabel: 'Calculadora de ecuaciones', articleUrl: '/blog/ecuaciones-lineales-y-cuadraticas' as string | undefined },
      { title: 'Cómo resolver sistemas de ecuaciones',       purpose: 'Sustitución, reducción e igualación con ejemplos paso a paso.',  calcUrl: '/calculadoras/algebra/calculadora-de-sistemas-de-ecuaciones/', calcLabel: 'Calculadora de sistemas', articleUrl: '/blog/como-resolver-sistemas-de-ecuaciones' as string | undefined },
    ],
  },
  {
    topic: 'Matrices y Vectores',
    articles: [
      { title: 'Qué es una matriz',               purpose: 'Dimensiones, tipos básicos y operaciones fundamentales.',            calcUrl: '/calculadoras/matrices-y-vectores/calculadora-de-matrices/', calcLabel: 'Calculadora de matrices', articleUrl: '/blog/que-es-una-matriz' as string | undefined },
      { title: 'Cómo calcular determinantes',     purpose: 'Fórmula 2×2, regla de Sarrus 3×3 y propiedades.',                   calcUrl: '/calculadoras/matrices-y-vectores/calculadora-de-determinantes/', calcLabel: 'Calculadora de determinantes', articleUrl: '/blog/como-calcular-determinantes' as string | undefined },
      { title: 'Qué es un vector',                purpose: 'Módulo, suma, producto escalar y ángulo entre vectores.',            calcUrl: '/calculadoras/matrices-y-vectores/calculadora-de-vectores/', calcLabel: 'Calculadora de vectores', articleUrl: '/blog/que-es-un-vector' as string | undefined },
      { title: 'Cómo calcular la matriz inversa', purpose: 'Fórmula 2×2, método de Gauss-Jordan y cuándo existe.',              calcUrl: '/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa/', calcLabel: 'Calculadora de matriz inversa', articleUrl: '/blog/como-calcular-la-matriz-inversa' as string | undefined },
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
