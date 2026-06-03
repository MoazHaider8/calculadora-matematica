import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RaizHero } from '@/components/RaizHero';
import { RaizCalculator } from '@/components/RaizCalculator';
import { RaizHowTo } from '@/components/RaizHowTo';
import { RaizWhatIs } from '@/components/RaizWhatIs';
import { RaizTypes } from '@/components/RaizTypes';
import { RaizExamples } from '@/components/RaizExamples';
import { RaizExactDecimal } from '@/components/RaizExactDecimal';
import { RaizErrors } from '@/components/RaizErrors';
import { RaizRelated } from '@/components/RaizRelated';
import { RaizFAQ } from '@/components/RaizFAQ';

export const metadata: Metadata = {
  title: 'Calculadora de Raíces Online | Raíz Cúbica y Enésima',
  description:
    'Calcula raíces online con índice personalizado. Obtén raíz cúbica, cuarta o enésima con resultado exacto, decimal y comprobación.',
  alternates: {
    canonical: 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raices',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadora de Raíces Online | Raíz Cúbica y Enésima',
    description:
      'Calcula raíces online con índice personalizado. Obtén raíz cúbica, cuarta o enésima con resultado exacto, decimal y comprobación.',
    url: 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raices',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Calculadora de Raíces Online | Raíz Cúbica y Enésima',
    description:
      'Calcula raíces online con índice personalizado. Obtén raíz cúbica, cuarta o enésima con resultado exacto, decimal y comprobación.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raices',
      url: 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raices',
      name: 'Calculadora de Raíces Online | Raíz Cúbica y Enésima',
      description:
        'Calcula raíces online con índice personalizado. Obtén raíz cúbica, cuarta o enésima con resultado exacto, decimal y comprobación.',
      inLanguage: 'es',
      isPartOf: { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: {
        '@id': 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raices#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raices#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',               item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',         item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Álgebra',              item: 'https://calculadoramatematica.com/calculadoras/algebra' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Raíces', item: 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raices' },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raices#app',
      name: 'Calculadora de Raíces Online',
      url: 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raices',
      description:
        'Calcula raíz cúbica, cuarta y raíces con índice personalizado. Simplifica radicales y convierte raíces a exponentes fraccionarios.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'All',
      inLanguage: 'es',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es una calculadora de raíces?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es una herramienta que calcula la raíz de un número dado un radicando y un índice. Dado el número 27 con índice 3, calcula la raíz cúbica y devuelve 3, con comprobación incluida.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre raíz cúbica y raíz cuadrada?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La raíz cuadrada tiene índice 2. La raíz cúbica tiene índice 3. Esta calculadora trabaja con ambos índices y con cualquier otro.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo calcular una raíz con índice personalizado?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Introduce cualquier número entero mayor que 1 en el campo de índice. La herramienta calcula la raíz enésima del radicando indicado.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué pasa si el radicando es negativo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Si el índice es impar, el resultado existe y es negativo. Si el índice es par, no existe resultado real y la herramienta lo indica.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué significa simplificar un radical?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Simplificar extrae factores perfectos del radicando. Por ejemplo, √72 = 6√2.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Esta calculadora reemplaza a la calculadora de raíz cuadrada?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Esta calculadora trabaja con raíces de índice variable. Para una herramienta enfocada solo en raíz cuadrada, usa la calculadora de raíz cuadrada cuando esté disponible.',
          },
        },
      ],
    },
  ],
};

export default function CalculadoraDeRaicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <RaizHero />
      <RaizCalculator />
      <RaizHowTo />
      <RaizWhatIs />
      <RaizTypes />
      <RaizExamples />
      <RaizExactDecimal />
      <RaizErrors />
      <RaizRelated />
      <RaizFAQ />
      <Footer />
    </>
  );
}
