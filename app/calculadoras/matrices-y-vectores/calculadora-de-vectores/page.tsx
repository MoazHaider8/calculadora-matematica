import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VectorHero } from '@/components/VectorHero';
import { VectorCalculator } from '@/components/VectorCalculator';
import { VectorHowTo } from '@/components/VectorHowTo';
import { VectorWhatIs } from '@/components/VectorWhatIs';
import { VectorOps } from '@/components/VectorOps';
import { VectorExamples } from '@/components/VectorExamples';
import { Vector2D3D } from '@/components/Vector2D3D';
import { VectorErrors } from '@/components/VectorErrors';
import { VectorRelated } from '@/components/VectorRelated';
import { VectorFAQ } from '@/components/VectorFAQ';

export const metadata: Metadata = {
  title: 'Calculadora de Vectores Online | Operaciones',
  description:
    'Opera vectores online. Suma, resta, producto punto, producto cruz, norma, vector unitario y ángulo con explicación.',
  alternates: {
    canonical: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-vectores',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadora de Vectores Online | Operaciones',
    description:
      'Opera vectores online. Suma, resta, producto punto, producto cruz, norma, vector unitario y ángulo con explicación.',
    url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-vectores',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Calculadora de Vectores Online | Operaciones',
    description:
      'Opera vectores online. Suma, resta, producto punto, producto cruz, norma, vector unitario y ángulo con explicación.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-vectores',
      url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-vectores',
      name: 'Calculadora de Vectores Online | Operaciones',
      description: 'Opera vectores online. Suma, resta, producto punto, producto cruz, norma, vector unitario y ángulo con explicación.',
      inLanguage: 'es',
      isPartOf: { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-vectores#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-vectores#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',          item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Matrices y Vectores',   item: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Vectores', item: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-vectores' },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-vectores#app',
      name: 'Calculadora de Vectores Online',
      url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-vectores',
      description: 'Suma, resta, producto punto, producto cruz, norma, vector unitario y ángulo entre vectores en 2D y 3D.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'All',
      inLanguage: 'es',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué es una calculadora de vectores?', acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que permite realizar operaciones matemáticas con vectores: suma, resta, producto punto, producto cruz, norma, vector unitario y ángulo entre vectores.' } },
        { '@type': 'Question', name: '¿Qué operaciones puedo hacer con vectores?', acceptedAnswer: { '@type': 'Answer', text: 'Suma, resta, producto punto, producto cruz (3D), norma, vector unitario y ángulo entre vectores.' } },
        { '@type': 'Question', name: '¿Qué diferencia hay entre producto punto y producto cruz?', acceptedAnswer: { '@type': 'Answer', text: 'El producto punto devuelve un escalar. El producto cruz devuelve un vector perpendicular y solo está definido en 3D.' } },
        { '@type': 'Question', name: '¿Puedo calcular la magnitud de un vector?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Selecciona la operación Norma e introduce las componentes del vector. La norma es la raíz cuadrada de la suma de los cuadrados.' } },
        { '@type': 'Question', name: '¿Qué es un vector unitario?', acceptedAnswer: { '@type': 'Answer', text: 'Un vector unitario tiene magnitud 1 y la misma dirección que el original. Se obtiene dividiendo cada componente entre la norma del vector.' } },
        { '@type': 'Question', name: '¿Esta calculadora trabaja con matrices?', acceptedAnswer: { '@type': 'Answer', text: 'No. Esta herramienta trabaja exclusivamente con vectores. Para operaciones con matrices usa la Calculadora de Matrices.' } },
      ],
    },
  ],
};

export default function CalculadoraDeVectoresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <VectorHero />
      <VectorCalculator />
      <VectorHowTo />
      <VectorWhatIs />
      <VectorOps />
      <VectorExamples />
      <Vector2D3D />
      <VectorErrors />
      <VectorRelated />
      <VectorFAQ />
      <Footer />
    </>
  );
}
