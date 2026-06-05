import type { Metadata } from 'next';
import { Header }            from '@/components/Header';
import { Footer }            from '@/components/Footer';
import { BlogArchiveHero }   from '@/components/BlogArchiveHero';
import { BlogArchiveGrid }   from '@/components/BlogArchiveGrid';

const CANONICAL = 'https://calculadoramatematica.com/blog';

export const metadata: Metadata = {
  title:       'Blog de Matemáticas | Calculadora Matemática',
  description: 'Explora artículos de matemáticas sobre aritmética, álgebra, cálculo, estadística, geometría, matrices y vectores.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'Blog de Matemáticas | Calculadora Matemática',
    description: 'Explora artículos de matemáticas sobre aritmética, álgebra, cálculo, estadística, geometría, matrices y vectores.',
    url:         CANONICAL,
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Blog de Matemáticas | Calculadora Matemática',
    description: 'Explora artículos de matemáticas sobre aritmética, álgebra, cálculo, estadística, geometría, matrices y vectores.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type':     'Blog',
      '@id':       CANONICAL,
      url:         CANONICAL,
      name:        'Blog de Matemáticas | Calculadora Matemática',
      description: 'Artículos de matemáticas sobre aritmética, álgebra, cálculo, estadística, geometría, matrices y vectores.',
      inLanguage:  'es',
      breadcrumb:  { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog',   item: CANONICAL },
      ],
    },
    {
      '@type':         'ItemList',
      '@id':           `${CANONICAL}#articulos`,
      name:            'Artículos del blog de matemáticas',
      numberOfItems:   30,
      itemListElement: [
        { '@type': 'ListItem', position: 1,  name: 'Cómo calcular porcentajes paso a paso',          url: `${CANONICAL}/como-calcular-porcentajes` },
        { '@type': 'ListItem', position: 2,  name: 'Qué es la regla de tres y cómo usarla',          url: `${CANONICAL}/que-es-la-regla-de-tres` },
        { '@type': 'ListItem', position: 3,  name: 'Cómo sacar promedio paso a paso',                url: `${CANONICAL}/como-sacar-promedio` },
        { '@type': 'ListItem', position: 4,  name: 'Cómo sumar y restar fracciones',                 url: `${CANONICAL}/como-sumar-restar-fracciones` },
        { '@type': 'ListItem', position: 5,  name: 'Cómo usar una calculadora científica',           url: `${CANONICAL}/como-usar-una-calculadora-cientifica` },
        { '@type': 'ListItem', position: 6,  name: 'Fórmulas de área de figuras geométricas',        url: `${CANONICAL}/formulas-de-area` },
        { '@type': 'ListItem', position: 7,  name: 'Fórmulas de volumen más usadas',                 url: `${CANONICAL}/formulas-de-volumen` },
        { '@type': 'ListItem', position: 8,  name: 'Teorema de Pitágoras explicado con ejemplos',    url: `${CANONICAL}/teorema-de-pitagoras` },
        { '@type': 'ListItem', position: 9,  name: 'Tipos de triángulos y sus fórmulas',             url: `${CANONICAL}/tipos-de-triangulos` },
        { '@type': 'ListItem', position: 10, name: 'Cómo calcular área y circunferencia de un círculo', url: `${CANONICAL}/area-y-circunferencia-del-circulo` },
        { '@type': 'ListItem', position: 11, name: 'Media, mediana y moda: diferencias y ejemplos',  url: `${CANONICAL}/media-mediana-moda-diferencias` },
        { '@type': 'ListItem', position: 12, name: 'Varianza y desviación estándar: diferencia y ejemplos', url: `${CANONICAL}/varianza-y-desviacion-estandar` },
        { '@type': 'ListItem', position: 13, name: 'Qué es la probabilidad y cómo se calcula',       url: `${CANONICAL}/que-es-la-probabilidad` },
        { '@type': 'ListItem', position: 14, name: 'Población y muestra en estadística',             url: `${CANONICAL}/poblacion-y-muestra-en-estadistica` },
        { '@type': 'ListItem', position: 15, name: 'Cómo interpretar la desviación estándar',        url: `${CANONICAL}/como-interpretar-la-desviacion-estandar` },
        { '@type': 'ListItem', position: 16, name: 'Qué es una derivada y para qué sirve',           url: `${CANONICAL}/que-es-una-derivada` },
        { '@type': 'ListItem', position: 17, name: 'Qué es una integral y cómo se interpreta',       url: `${CANONICAL}/que-es-una-integral` },
        { '@type': 'ListItem', position: 18, name: 'Cómo calcular límites paso a paso',              url: `${CANONICAL}/como-calcular-limites` },
        { '@type': 'ListItem', position: 19, name: 'Reglas de logaritmos explicadas con ejemplos',   url: `${CANONICAL}/reglas-de-logaritmos` },
        { '@type': 'ListItem', position: 20, name: 'Reglas de exponentes y potencias',               url: `${CANONICAL}/reglas-de-exponentes` },
        { '@type': 'ListItem', position: 21, name: 'Cómo resolver ecuaciones paso a paso',           url: `${CANONICAL}/como-resolver-ecuaciones` },
        { '@type': 'ListItem', position: 22, name: 'Cómo simplificar expresiones algebraicas',       url: `${CANONICAL}/como-simplificar-expresiones-algebraicas` },
        { '@type': 'ListItem', position: 23, name: 'Qué son los polinomios y cómo se resuelven',     url: `${CANONICAL}/que-son-los-polinomios` },
        { '@type': 'ListItem', position: 24, name: 'Raíces y radicales explicados con ejemplos',     url: `${CANONICAL}/raices-y-radicales` },
        { '@type': 'ListItem', position: 25, name: 'Ecuaciones lineales y cuadráticas: diferencias', url: `${CANONICAL}/ecuaciones-lineales-y-cuadraticas` },
        { '@type': 'ListItem', position: 26, name: 'Qué es una matriz y cómo se usa',                url: `${CANONICAL}/que-es-una-matriz` },
        { '@type': 'ListItem', position: 27, name: 'Cómo calcular determinantes paso a paso',        url: `${CANONICAL}/como-calcular-determinantes` },
        { '@type': 'ListItem', position: 28, name: 'Qué es un vector y cómo se calcula',             url: `${CANONICAL}/que-es-un-vector` },
        { '@type': 'ListItem', position: 29, name: 'Cómo resolver sistemas de ecuaciones',           url: `${CANONICAL}/como-resolver-sistemas-de-ecuaciones` },
        { '@type': 'ListItem', position: 30, name: 'Cómo calcular la matriz inversa',                url: `${CANONICAL}/como-calcular-la-matriz-inversa` },
      ],
    },
    {
      '@type':    'WebSite',
      '@id':      'https://calculadoramatematica.com#website',
      url:        'https://calculadoramatematica.com',
      name:       'Calculadora Matemática',
      inLanguage: 'es',
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <BlogArchiveHero />
        <BlogArchiveGrid />
      </main>
      <Footer />
    </>
  );
}
