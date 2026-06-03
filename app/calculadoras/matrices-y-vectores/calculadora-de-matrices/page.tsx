import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MatricesHero } from '@/components/MatricesHero';
import { MatricesCalculator } from '@/components/MatricesCalculator';
import { MatricesHowTo } from '@/components/MatricesHowTo';
import { MatricesWhatIs } from '@/components/MatricesWhatIs';
import { MatricesOps } from '@/components/MatricesOps';
import { MatricesExamples } from '@/components/MatricesExamples';
import { MatricesDimensions } from '@/components/MatricesDimensions';
import { MatricesErrors } from '@/components/MatricesErrors';
import { MatricesRelated } from '@/components/MatricesRelated';
import { MatricesFAQ } from '@/components/MatricesFAQ';

export const metadata: Metadata = {
  title: 'Calculadora de Matrices Online | Operaciones y Pasos',
  description:
    'Opera matrices online. Suma, resta, multiplica, transpone y multiplica por escalar con resultado, dimensiones y explicación.',
  alternates: {
    canonical: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matrices',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadora de Matrices Online | Operaciones y Pasos',
    description:
      'Opera matrices online. Suma, resta, multiplica, transpone y multiplica por escalar con resultado, dimensiones y explicación.',
    url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matrices',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Calculadora de Matrices Online | Operaciones y Pasos',
    description:
      'Opera matrices online. Suma, resta, multiplica, transpone y multiplica por escalar con resultado, dimensiones y explicación.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matrices',
      url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matrices',
      name: 'Calculadora de Matrices Online | Operaciones y Pasos',
      description: 'Opera matrices online. Suma, resta, multiplica, transpone y multiplica por escalar con resultado, dimensiones y explicación.',
      inLanguage: 'es',
      isPartOf: { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matrices#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matrices#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',               item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',         item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Matrices y Vectores',  item: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Matrices', item: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matrices' },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matrices#app',
      name: 'Calculadora de Matrices Online',
      url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matrices',
      description: 'Suma, resta, multiplica, transpone y multiplica matrices por escalar. Incluye validación de dimensiones y explicación del procedimiento.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'All',
      inLanguage: 'es',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué es una calculadora de matrices?', acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que permite realizar operaciones matemáticas con matrices: suma, resta, multiplicación, transposición y multiplicación por escalar.' } },
        { '@type': 'Question', name: '¿Qué operaciones puedo hacer con matrices?', acceptedAnswer: { '@type': 'Answer', text: 'Esta herramienta permite sumar, restar, multiplicar matrices, obtener la transpuesta y multiplicar por escalar.' } },
        { '@type': 'Question', name: '¿Cómo se suman dos matrices?', acceptedAnswer: { '@type': 'Answer', text: 'Para sumar dos matrices ambas deben tener las mismas dimensiones. Cada elemento del resultado es la suma de los elementos en la misma posición.' } },
        { '@type': 'Question', name: '¿Cuándo se pueden multiplicar dos matrices?', acceptedAnswer: { '@type': 'Answer', text: 'Solo si el número de columnas de A es igual al número de filas de B. Si A es m×n y B es n×p, el resultado es m×p.' } },
        { '@type': 'Question', name: '¿Qué significa transponer una matriz?', acceptedAnswer: { '@type': 'Answer', text: 'Intercambiar filas y columnas. Una matriz m×n se convierte en n×m.' } },
        { '@type': 'Question', name: '¿Esta calculadora calcula determinantes o inversas?', acceptedAnswer: { '@type': 'Answer', text: 'Esta herramienta se enfoca en operaciones generales. Para determinantes e inversas habrá calculadoras específicas.' } },
      ],
    },
  ],
};

export default function CalculadoraDeMatricesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <MatricesHero />
      <MatricesCalculator />
      <MatricesHowTo />
      <MatricesWhatIs />
      <MatricesOps />
      <MatricesExamples />
      <MatricesDimensions />
      <MatricesErrors />
      <MatricesRelated />
      <MatricesFAQ />
      <Footer />
    </>
  );
}
