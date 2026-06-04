import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DeterminanteHero } from '@/components/DeterminanteHero';
import { DeterminanteCalculator } from '@/components/DeterminanteCalculator';
import { DeterminanteHowTo } from '@/components/DeterminanteHowTo';
import { DeterminanteWhatIs } from '@/components/DeterminanteWhatIs';
import { DeterminanteMethods } from '@/components/DeterminanteMethods';
import { DeterminanteExamples } from '@/components/DeterminanteExamples';
import { DetermInanteSingular } from '@/components/DetermInanteSingular';
import { DeterminanteErrors } from '@/components/DeterminanteErrors';
import { DeterminanteRelated } from '@/components/DeterminanteRelated';
import { DeterminanteFAQ } from '@/components/DeterminanteFAQ';

export const metadata: Metadata = {
  title: 'Calculadora de Determinantes Online | Matrices',
  description:
    'Calcula determinantes online para matrices 2x2, 3x3 y 4x4. Introduce la matriz y revisa resultado, método e interpretación.',
  alternates: {
    canonical: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-determinantes',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadora de Determinantes Online | Matrices',
    description:
      'Calcula determinantes online para matrices 2x2, 3x3 y 4x4. Introduce la matriz y revisa resultado, método e interpretación.',
    url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-determinantes',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Calculadora de Determinantes Online | Matrices',
    description:
      'Calcula determinantes online para matrices 2x2, 3x3 y 4x4. Introduce la matriz y revisa resultado, método e interpretación.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-determinantes',
      url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-determinantes',
      name: 'Calculadora de Determinantes Online | Matrices',
      description: 'Calcula determinantes online para matrices 2x2, 3x3 y 4x4. Introduce la matriz y revisa resultado, método e interpretación.',
      inLanguage: 'es',
      isPartOf: { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-determinantes#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-determinantes#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',              item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',        item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Matrices y Vectores', item: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Determinantes', item: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-determinantes' },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-determinantes#app',
      name: 'Calculadora de Determinantes Online',
      url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-determinantes',
      description: 'Calcula el determinante de matrices cuadradas 2x2, 3x3 y 4x4. Muestra método, cálculo breve e interpretación del resultado.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'All',
      inLanguage: 'es',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué es una calculadora de determinantes?', acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que calcula el determinante de una matriz cuadrada. Introduce los valores, elige el tamaño y obtiene det(A) con método e interpretación.' } },
        { '@type': 'Question', name: '¿Qué matrices tienen determinante?', acceptedAnswer: { '@type': 'Answer', text: 'Solo las matrices cuadradas tienen determinante: aquellas con el mismo número de filas y columnas, como 2×2, 3×3 o 4×4.' } },
        { '@type': 'Question', name: '¿Cómo se calcula un determinante 2×2?', acceptedAnswer: { '@type': 'Answer', text: 'Para [[a, b], [c, d]] el determinante es ad − bc. Se multiplica la diagonal principal y se resta el producto de la diagonal secundaria.' } },
        { '@type': 'Question', name: '¿Qué significa que el determinante sea cero?', acceptedAnswer: { '@type': 'Answer', text: 'Un determinante igual a cero indica que la matriz es singular: no tiene inversa y alguna fila o columna es combinación lineal de las demás.' } },
        { '@type': 'Question', name: '¿Puedo calcular determinantes 3×3?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. La calculadora admite matrices 2×2, 3×3 y 4×4. Para 3×3 aplica expansión por la primera fila, equivalente a la regla de Sarrus.' } },
        { '@type': 'Question', name: '¿Esta calculadora obtiene la matriz inversa?', acceptedAnswer: { '@type': 'Answer', text: 'Esta herramienta calcula determinantes. Para la matriz inversa habrá una calculadora específica en la sección de Matrices y Vectores.' } },
      ],
    },
  ],
};

export default function CalculadoraDeDeterminantesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <DeterminanteHero />
      <DeterminanteCalculator />
      <DeterminanteHowTo />
      <DeterminanteWhatIs />
      <DeterminanteMethods />
      <DeterminanteExamples />
      <DetermInanteSingular />
      <DeterminanteErrors />
      <DeterminanteRelated />
      <DeterminanteFAQ />
      <Footer />
    </>
  );
}
