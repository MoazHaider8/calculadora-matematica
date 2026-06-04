import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SistemasHero } from '@/components/SistemasHero';
import { SistemasCalculator } from '@/components/SistemasCalculator';
import { SistemasHowTo } from '@/components/SistemasHowTo';
import { SistemasWhatIs } from '@/components/SistemasWhatIs';
import { SistemasMethods } from '@/components/SistemasMethods';
import { SistemasExamples } from '@/components/SistemasExamples';
import { SistemasTypes } from '@/components/SistemasTypes';
import { SistemasErrors } from '@/components/SistemasErrors';
import { SistemasRelated } from '@/components/SistemasRelated';
import { SistemasFAQ } from '@/components/SistemasFAQ';

export const metadata: Metadata = {
  title: 'Calculadora de Sistemas de Ecuaciones Online',
  description:
    'Resuelve sistemas de ecuaciones online 2x2 y 3x3. Introduce coeficientes, revisa solución, método y comprobación.',
  alternates: {
    canonical: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadora de Sistemas de Ecuaciones Online',
    description:
      'Resuelve sistemas de ecuaciones online 2x2 y 3x3. Introduce coeficientes, revisa solución, método y comprobación.',
    url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Calculadora de Sistemas de Ecuaciones Online',
    description:
      'Resuelve sistemas de ecuaciones online 2x2 y 3x3. Introduce coeficientes, revisa solución, método y comprobación.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones',
      url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones',
      name: 'Calculadora de Sistemas de Ecuaciones Online',
      description: 'Resuelve sistemas de ecuaciones online 2x2 y 3x3. Introduce coeficientes, revisa solución, método y comprobación.',
      inLanguage: 'es',
      isPartOf: { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                        item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',                  item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Matrices y Vectores',           item: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Sistemas de Ecuaciones', item: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones' },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones#app',
      name: 'Calculadora de Sistemas de Ecuaciones Online',
      url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones',
      description: 'Resuelve sistemas lineales 2×2 y 3×3 con eliminación gaussiana. Detecta solución única, sin solución e infinitas soluciones.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'All',
      inLanguage: 'es',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué es una calculadora de sistemas de ecuaciones?', acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que resuelve conjuntos de ecuaciones lineales con dos o tres incógnitas usando eliminación gaussiana.' } },
        { '@type': 'Question', name: '¿Qué significa sistema 2×2?', acceptedAnswer: { '@type': 'Answer', text: 'Un sistema 2×2 tiene dos ecuaciones y dos incógnitas x e y. La solución es el par de valores que satisface ambas ecuaciones.' } },
        { '@type': 'Question', name: '¿Puedo resolver sistemas 3×3?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Selecciona 3×3, introduce los coeficientes de tres ecuaciones con tres incógnitas y la calculadora aplica eliminación gaussiana.' } },
        { '@type': 'Question', name: '¿Qué significa que un sistema no tenga solución?', acceptedAnswer: { '@type': 'Answer', text: 'El sistema es incompatible: las ecuaciones son contradictorias y no existe ningún conjunto de valores que las satisfaga simultáneamente.' } },
        { '@type': 'Question', name: '¿Qué son las infinitas soluciones?', acceptedAnswer: { '@type': 'Answer', text: 'Un sistema indeterminado donde al menos una ecuación depende de otra y hay muchos conjuntos de valores que satisfacen el sistema.' } },
        { '@type': 'Question', name: '¿Esta calculadora resuelve ecuaciones individuales?', acceptedAnswer: { '@type': 'Answer', text: 'No. Esta herramienta resuelve sistemas con múltiples incógnitas. Para una sola ecuación usa la calculadora de ecuaciones.' } },
      ],
    },
  ],
};

export default function CalculadoraDeSistemasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <SistemasHero />
      <SistemasCalculator />
      <SistemasHowTo />
      <SistemasWhatIs />
      <SistemasMethods />
      <SistemasExamples />
      <SistemasTypes />
      <SistemasErrors />
      <SistemasRelated />
      <SistemasFAQ />
      <Footer />
    </>
  );
}
