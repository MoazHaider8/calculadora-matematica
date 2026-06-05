import type { Metadata } from 'next';
import { Header }         from '@/components/Header';
import { Footer }         from '@/components/Footer';
import { BlogHero }       from '@/components/BlogHero';
import { BlogDestacados } from '@/components/BlogDestacados';
import { BlogCategorias } from '@/components/BlogCategorias';
import { BlogGuias }      from '@/components/BlogGuias';
import { BlogProximos }   from '@/components/BlogProximos';
import { BlogComoUsar }   from '@/components/BlogComoUsar';
import { BlogEnlaces }    from '@/components/BlogEnlaces';
import { BlogFAQ }        from '@/components/BlogFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog';

export const metadata: Metadata = {
  title:       'Blog de Matemáticas | Calculadora Matemática',
  description: 'Aprende conceptos, fórmulas y ejemplos de matemáticas con guías sobre cálculo, álgebra, aritmética, estadística y geometría.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'Blog de Matemáticas | Calculadora Matemática',
    description: 'Aprende conceptos, fórmulas y ejemplos de matemáticas con guías sobre cálculo, álgebra, aritmética, estadística y geometría.',
    url:         CANONICAL,
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Blog de Matemáticas | Calculadora Matemática',
    description: 'Aprende conceptos, fórmulas y ejemplos de matemáticas con guías sobre cálculo, álgebra, aritmética, estadística y geometría.',
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
      description: 'Aprende conceptos, fórmulas y ejemplos de matemáticas con guías sobre cálculo, álgebra, aritmética, estadística y geometría.',
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
      '@type': 'ItemList',
      '@id':   `${CANONICAL}#articulos`,
      name:    'Próximos artículos del blog de matemáticas',
      itemListElement: [
        { '@type': 'ListItem', position: 1,  name: 'Cómo calcular porcentajes',         url: `${CANONICAL}/como-calcular-porcentajes` },
        { '@type': 'ListItem', position: 2,  name: 'Qué es la regla de tres',            url: `${CANONICAL}/que-es-la-regla-de-tres` },
        { '@type': 'ListItem', position: 3,  name: 'Cómo sacar promedio',                url: `${CANONICAL}/como-sacar-promedio` },
        { '@type': 'ListItem', position: 4,  name: 'Fórmulas de área',                   url: `${CANONICAL}/formulas-de-area` },
        { '@type': 'ListItem', position: 5,  name: 'Fórmulas de volumen',                url: `${CANONICAL}/formulas-de-volumen` },
        { '@type': 'ListItem', position: 6,  name: 'Teorema de Pitágoras',               url: `${CANONICAL}/teorema-de-pitagoras` },
        { '@type': 'ListItem', position: 7,  name: 'Media, mediana y moda: diferencias', url: `${CANONICAL}/media-mediana-moda-diferencias` },
        { '@type': 'ListItem', position: 8,  name: 'Varianza y desviación estándar',     url: `${CANONICAL}/varianza-y-desviacion-estandar` },
        { '@type': 'ListItem', position: 9,  name: 'Qué es la probabilidad',             url: `${CANONICAL}/que-es-la-probabilidad` },
        { '@type': 'ListItem', position: 10, name: 'Qué es una derivada',                url: `${CANONICAL}/que-es-una-derivada` },
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
        <BlogHero />
        <BlogDestacados />
        <BlogCategorias />
        <BlogGuias />
        <BlogProximos />
        <BlogComoUsar />
        <BlogEnlaces />
        <BlogFAQ />
      </main>
      <Footer />
    </>
  );
}
