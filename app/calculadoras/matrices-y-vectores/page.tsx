import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MatVecHero } from '@/components/MatVecHero';
import { MatVecTools } from '@/components/MatVecTools';
import { MatVecWhatIs } from '@/components/MatVecWhatIs';
import { MatVecWhenToUse } from '@/components/MatVecWhenToUse';
import { MatVecConcepts } from '@/components/MatVecConcepts';
import { MatVecRelated } from '@/components/MatVecRelated';
import { HubRelatedCategories } from '@/components/HubRelatedCategories';
import { MatVecFAQ } from '@/components/MatVecFAQ';

export const metadata: Metadata = {
  title: { absolute: 'Calculadoras de Matrices, Vectores y Álgebra Lineal Online' },
  description:
    'Usa calculadoras de matrices, determinantes, vectores, sistemas de ecuaciones y matriz inversa. Herramientas con pasos y fórmulas para revisar resultados.',
  alternates: {
    canonical: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadoras de Matrices, Vectores y Álgebra Lineal Online',
    description:
      'Usa calculadoras de matrices, determinantes, vectores, sistemas de ecuaciones y matriz inversa. Herramientas con pasos y fórmulas para revisar resultados.',
    url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Calculadoras de Matrices, Vectores y Álgebra Lineal Online',
    description:
      'Usa calculadoras de matrices, determinantes, vectores, sistemas de ecuaciones y matriz inversa. Herramientas con pasos y fórmulas para revisar resultados.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores',
      url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores',
      name: 'Calculadoras Online de Matrices, Vectores y Álgebra Lineal Online',
      description:
        'Usa calculadoras de matrices, determinantes, vectores, sistemas de ecuaciones y matriz inversa. Herramientas con pasos y fórmulas para revisar resultados.',
      inLanguage: 'es',
      isPartOf: { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',             item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',       item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Matrices y Vectores', item: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores' },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores#tools',
      name: 'Herramientas de matrices y vectores',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Calculadora de Matrices',                url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matrices' },
        { '@type': 'ListItem', position: 2, name: 'Calculadora de Determinantes',           url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-determinantes' },
        { '@type': 'ListItem', position: 3, name: 'Calculadora de Vectores',                url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-vectores' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Sistemas de Ecuaciones', url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones' },
        { '@type': 'ListItem', position: 5, name: 'Calculadora de Matriz Inversa',         url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué herramientas incluye esta categoría?', acceptedAnswer: { '@type': 'Answer', text: 'Esta categoría incluye la Calculadora de Matrices, la Calculadora de Determinantes, la Calculadora de Vectores, la Calculadora de Sistemas de Ecuaciones y la Calculadora de Matriz Inversa.' } },
        { '@type': 'Question', name: '¿Qué calculadora debo usar para operar matrices?', acceptedAnswer: { '@type': 'Answer', text: 'Para sumar, restar o multiplicar matrices usa la Calculadora de Matrices. Para el determinante usa la Calculadora de Determinantes. Para la inversa usa la Calculadora de Matriz Inversa.' } },
        { '@type': 'Question', name: '¿Qué diferencia hay entre matriz y vector?', acceptedAnswer: { '@type': 'Answer', text: 'Una matriz es una tabla de números con m filas y n columnas. Un vector es un caso especial de matriz con una sola columna o fila.' } },
        { '@type': 'Question', name: '¿Puedo resolver sistemas de ecuaciones?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. La Calculadora de Sistemas de Ecuaciones permite resolver sistemas de la forma Ax = b usando eliminación gaussiana.' } },
        { '@type': 'Question', name: '¿Qué es una matriz inversa?', acceptedAnswer: { '@type': 'Answer', text: 'La matriz inversa de A es aquella que cumple A · A⁻¹ = I. Solo existe cuando el determinante es distinto de cero.' } },
        { '@type': 'Question', name: '¿Estas herramientas sirven para estudiar álgebra lineal?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Las herramientas cubren las operaciones fundamentales de álgebra lineal: matrices, determinantes, vectores, sistemas lineales e inversas.' } },
      ],
    },
  ],
};

export default function MatricesVectoresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <MatVecHero />
      <MatVecTools />
      <MatVecWhatIs />
      <MatVecWhenToUse />
      <MatVecConcepts />
      <MatVecRelated />
      <HubRelatedCategories current="matrices-y-vectores" />
      <MatVecFAQ />
      <Footer />
    </>
  );
}
