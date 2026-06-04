import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FraccionesHero } from '@/components/FraccionesHero';
import { FraccionesCalculator } from '@/components/FraccionesCalculator';
import { FraccionesHowTo } from '@/components/FraccionesHowTo';
import { FraccionesWhatIs } from '@/components/FraccionesWhatIs';
import { FraccionesOps } from '@/components/FraccionesOps';
import { FraccionesExamples } from '@/components/FraccionesExamples';
import { FracionesTipos } from '@/components/FracionesTipos';
import { FraccionesErrors } from '@/components/FraccionesErrors';
import { FraccionesRelated } from '@/components/FraccionesRelated';
import { FracionesFAQ } from '@/components/FracionesFAQ';

export const metadata: Metadata = {
  title: 'Calculadora de Fracciones Online | Pasos y Decimal',
  description:
    'Suma, resta, multiplica, divide y simplifica fracciones online. Obtén resultado simplificado, mixto, decimal y pasos.',
  alternates: {
    canonical: 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-fracciones',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadora de Fracciones Online | Pasos y Decimal',
    description:
      'Suma, resta, multiplica, divide y simplifica fracciones online. Obtén resultado simplificado, mixto, decimal y pasos.',
    url: 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-fracciones',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Calculadora de Fracciones Online | Pasos y Decimal',
    description:
      'Suma, resta, multiplica, divide y simplifica fracciones online. Obtén resultado simplificado, mixto, decimal y pasos.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-fracciones',
      url: 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-fracciones',
      name: 'Calculadora de Fracciones Online | Pasos y Decimal',
      description: 'Suma, resta, multiplica, divide y simplifica fracciones online. Obtén resultado simplificado, mixto, decimal y pasos.',
      inLanguage: 'es',
      isPartOf: { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-fracciones#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-fracciones#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                       item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',                 item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Aritmética',                   item: 'https://calculadoramatematica.com/calculadoras/aritmetica' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Fracciones',    item: 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-fracciones' },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-fracciones#app',
      name: 'Calculadora de Fracciones Online',
      url: 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-fracciones',
      description: 'Suma, resta, multiplica, divide, simplifica y convierte fracciones con pasos, fracción mixta y decimal.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'All',
      inLanguage: 'es',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué es una calculadora de fracciones?', acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que realiza operaciones exactas con fracciones: suma, resta, multiplicación, división, simplificación y conversión a forma mixta y decimal.' } },
        { '@type': 'Question', name: '¿Cómo se suman fracciones con distinto denominador?', acceptedAnswer: { '@type': 'Answer', text: 'Se calcula el mínimo común múltiplo de los denominadores, se convierten las fracciones y se suman los numeradores.' } },
        { '@type': 'Question', name: '¿Cómo se simplifica una fracción?', acceptedAnswer: { '@type': 'Answer', text: 'Se divide numerador y denominador entre el máximo común divisor. Por ejemplo, 12/18 ÷ 6 = 2/3.' } },
        { '@type': 'Question', name: '¿Qué es una fracción mixta?', acceptedAnswer: { '@type': 'Answer', text: 'Combina un número entero y una fracción propia. Por ejemplo, 5/4 equivale a 1 1/4 en forma mixta.' } },
        { '@type': 'Question', name: '¿Puedo convertir una fracción a decimal?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Todos los modos muestran el decimal. El modo Convertir también muestra fracción mixta y porcentaje.' } },
        { '@type': 'Question', name: '¿Esta calculadora sirve para porcentajes?', acceptedAnswer: { '@type': 'Answer', text: 'Esta herramienta trabaja con fracciones. Para porcentajes habrá una calculadora específica en aritmética.' } },
      ],
    },
  ],
};

export default function CalculadoraDeFraccionesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <FraccionesHero />
      <FraccionesCalculator />
      <FraccionesHowTo />
      <FraccionesWhatIs />
      <FraccionesOps />
      <FraccionesExamples />
      <FracionesTipos />
      <FraccionesErrors />
      <FraccionesRelated />
      <FracionesFAQ />
      <Footer />
    </>
  );
}
