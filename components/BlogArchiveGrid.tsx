'use client';
import { useState } from 'react';
import Link from 'next/link';

const CATEGORIES = [
  'Todos',
  'Aritmética',
  'Geometría',
  'Estadística',
  'Cálculo',
  'Álgebra',
  'Matrices y vectores',
] as const;
type Cat = (typeof CATEGORIES)[number];

type Article = {
  title: string;
  url: string;
  excerpt: string;
  category: Exclude<Cat, 'Todos'>;
};

const articles: Article[] = [
  // Aritmética
  { category: 'Aritmética', title: 'Cómo calcular porcentajes paso a paso', url: '/blog/como-calcular-porcentajes', excerpt: 'Aprende a calcular porcentajes, descuentos, aumentos y comparaciones con fórmulas sencillas.' },
  { category: 'Aritmética', title: 'Qué es la regla de tres y cómo usarla', url: '/blog/que-es-la-regla-de-tres', excerpt: 'Entiende cuándo usar regla de tres directa o inversa y cómo resolver proporciones paso a paso.' },
  { category: 'Aritmética', title: 'Cómo sacar promedio paso a paso', url: '/blog/como-sacar-promedio', excerpt: 'Repasa la fórmula del promedio, ejemplos con notas, valores y media ponderada.' },
  { category: 'Aritmética', title: 'Cómo sumar y restar fracciones', url: '/blog/como-sumar-restar-fracciones', excerpt: 'Aprende a operar fracciones con igual o distinto denominador y a simplificar resultados.' },
  { category: 'Aritmética', title: 'Cómo usar una calculadora científica', url: '/blog/como-usar-una-calculadora-cientifica', excerpt: 'Conoce funciones básicas como potencias, raíces, paréntesis, logaritmos y operaciones.' },
  // Geometría
  { category: 'Geometría', title: 'Fórmulas de área de figuras geométricas', url: '/blog/formulas-de-area', excerpt: 'Revisa fórmulas de área para rectángulos, triángulos, círculos, trapecios y más figuras.' },
  { category: 'Geometría', title: 'Fórmulas de volumen más usadas', url: '/blog/formulas-de-volumen', excerpt: 'Aprende fórmulas de volumen para cubos, prismas, cilindros, conos, esferas y pirámides.' },
  { category: 'Geometría', title: 'Teorema de Pitágoras explicado con ejemplos', url: '/blog/teorema-de-pitagoras', excerpt: 'Entiende cómo calcular hipotenusa o catetos en triángulos rectángulos con a² + b² = c².' },
  { category: 'Geometría', title: 'Tipos de triángulos y sus fórmulas', url: '/blog/tipos-de-triangulos', excerpt: 'Diferencia triángulos equiláteros, isósceles, escalenos y rectángulos con ejemplos.' },
  { category: 'Geometría', title: 'Cómo calcular área y circunferencia de un círculo', url: '/blog/area-y-circunferencia-del-circulo', excerpt: 'Aprende las fórmulas del área y la circunferencia usando radio, diámetro y π.' },
  // Estadística
  { category: 'Estadística', title: 'Media, mediana y moda: diferencias y ejemplos', url: '/blog/media-mediana-moda-diferencias', excerpt: 'Compara las medidas de tendencia central y aprende cuándo conviene usar cada una.' },
  { category: 'Estadística', title: 'Varianza y desviación estándar: diferencia y ejemplos', url: '/blog/varianza-y-desviacion-estandar', excerpt: 'Entiende cómo se relacionan estas medidas de dispersión y cómo interpretar sus resultados.' },
  { category: 'Estadística', title: 'Qué es la probabilidad y cómo se calcula', url: '/blog/que-es-la-probabilidad', excerpt: 'Aprende casos favorables, casos posibles, probabilidad simple, complemento y unión.' },
  { category: 'Estadística', title: 'Población y muestra en estadística', url: '/blog/poblacion-y-muestra-en-estadistica', excerpt: 'Conoce la diferencia entre población y muestra y cómo afecta a cálculos estadísticos.' },
  { category: 'Estadística', title: 'Cómo interpretar la desviación estándar', url: '/blog/como-interpretar-la-desviacion-estandar', excerpt: 'Descubre qué significa una desviación estándar alta o baja con ejemplos de datos.' },
  // Cálculo
  { category: 'Cálculo', title: 'Qué es una derivada y para qué sirve', url: '/blog/que-es-una-derivada', excerpt: 'Entiende la derivada como pendiente, tasa de cambio y herramienta básica del cálculo.' },
  { category: 'Cálculo', title: 'Qué es una integral y cómo se interpreta', url: '/blog/que-es-una-integral', excerpt: 'Aprende la idea de integral como acumulación, área bajo la curva y antiderivada.' },
  { category: 'Cálculo', title: 'Cómo calcular límites paso a paso', url: '/blog/como-calcular-limites', excerpt: 'Repasa sustitución directa, indeterminaciones, límites laterales y límites al infinito.' },
  { category: 'Cálculo', title: 'Reglas de logaritmos explicadas con ejemplos', url: '/blog/reglas-de-logaritmos', excerpt: 'Aprende propiedades de producto, cociente, potencia y cambio de base en logaritmos.' },
  { category: 'Cálculo', title: 'Reglas de exponentes y potencias', url: '/blog/reglas-de-exponentes', excerpt: 'Domina producto, cociente, potencia de potencia, exponente cero y exponente negativo.' },
  // Álgebra
  { category: 'Álgebra', title: 'Cómo resolver ecuaciones paso a paso', url: '/blog/como-resolver-ecuaciones', excerpt: 'Aprende a despejar variables, resolver ecuaciones lineales y comprobar soluciones.' },
  { category: 'Álgebra', title: 'Cómo simplificar expresiones algebraicas', url: '/blog/como-simplificar-expresiones-algebraicas', excerpt: 'Combina términos semejantes, expande expresiones y factoriza cuando sea necesario.' },
  { category: 'Álgebra', title: 'Qué son los polinomios y cómo se resuelven', url: '/blog/que-son-los-polinomios', excerpt: 'Conoce términos, coeficientes, grado de un polinomio y operaciones básicas.' },
  { category: 'Álgebra', title: 'Raíces y radicales explicados con ejemplos', url: '/blog/raices-y-radicales', excerpt: 'Entiende raíces cuadradas, cúbicas, radicales, simplificación y aproximaciones decimales.' },
  { category: 'Álgebra', title: 'Ecuaciones lineales y cuadráticas: diferencias', url: '/blog/ecuaciones-lineales-y-cuadraticas', excerpt: 'Aprende a distinguir ecuaciones de grado uno y dos, con métodos y ejemplos.' },
  // Matrices y vectores
  { category: 'Matrices y vectores', title: 'Qué es una matriz y cómo se usa', url: '/blog/que-es-una-matriz', excerpt: 'Aprende filas, columnas, dimensiones, tipos de matrices y operaciones básicas.' },
  { category: 'Matrices y vectores', title: 'Cómo calcular determinantes paso a paso', url: '/blog/como-calcular-determinantes', excerpt: 'Conoce determinantes 2x2 y 3x3, su cálculo y qué significa un determinante cero.' },
  { category: 'Matrices y vectores', title: 'Qué es un vector y cómo se calcula', url: '/blog/que-es-un-vector', excerpt: 'Entiende componentes, magnitud, dirección, suma, resta y producto escalar básico.' },
  { category: 'Matrices y vectores', title: 'Cómo resolver sistemas de ecuaciones', url: '/blog/como-resolver-sistemas-de-ecuaciones', excerpt: 'Aprende sustitución, eliminación, forma matricial y comprobación de soluciones.' },
  { category: 'Matrices y vectores', title: 'Cómo calcular la matriz inversa', url: '/blog/como-calcular-la-matriz-inversa', excerpt: 'Conoce cuándo existe una matriz inversa, cómo calcularla y su relación con determinantes.' },
];

export function BlogArchiveGrid() {
  const [active, setActive] = useState<Cat>('Todos');
  const shown = active === 'Todos' ? articles : articles.filter(a => a.category === active);

  return (
    <section className="bg-white py-10 lg:py-14" aria-label="Archivo de artículos de matemáticas">
      <div className="site-shell">

        {/* Category filter bar */}
        <div
          className="mb-8 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Filtrar artículos por categoría"
        >
          {CATEGORIES.map(cat => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#147c7c] focus-visible:ring-offset-2 ${
                  isActive
                    ? 'text-white'
                    : 'bg-white hover:bg-[#DDF3F0]'
                }`}
                style={
                  isActive
                    ? { background: '#147c7c' }
                    : { border: '1px solid #D7E2EA', color: '#4B5563' }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Count indicator */}
        <p className="mb-7 text-xs text-slate" aria-live="polite">
          {shown.length === articles.length
            ? `${articles.length} artículos publicados`
            : `${shown.length} ${shown.length === 1 ? 'artículo' : 'artículos'} en ${active}`}
        </p>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map(article => (
            <Link
              key={article.url}
              href={article.url}
              className="group flex flex-col rounded-2xl border border-[#D7E2EA] bg-white p-6 transition-all duration-200 hover:border-[#147c7c] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#147c7c] focus-visible:ring-offset-2"
              aria-label={`Leer artículo: ${article.title}`}
            >
              <span
                className="mb-3 inline-block self-start rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest"
                style={{ background: '#DDF3F0', color: '#147c7c' }}
                aria-hidden="true"
              >
                {article.category}
              </span>
              <span className="mb-2 block text-sm font-bold leading-snug text-ink transition-colors group-hover:text-[#147c7c]">
                {article.title}
              </span>
              <span className="block flex-1 text-xs leading-relaxed text-slate">
                {article.excerpt}
              </span>
              <span
                className="mt-5 block text-xs font-bold"
                style={{ color: '#D8A31A' }}
                aria-hidden="true"
              >
                Leer artículo &rarr;
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
