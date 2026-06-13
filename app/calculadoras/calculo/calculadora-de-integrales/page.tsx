import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { IntegralHero } from '@/components/IntegralHero';
import { IntegralCalculator } from '@/components/IntegralCalculator';
import { IntegralHowTo } from '@/components/IntegralHowTo';
import { IntegralWhatIs } from '@/components/IntegralWhatIs';
import { IntegralFormulas } from '@/components/IntegralFormulas';
import { IntegralExamples } from '@/components/IntegralExamples';
import { IntegralComparison } from '@/components/IntegralComparison';
import { IntegralErrors } from '@/components/IntegralErrors';
import { IntegralRelated } from '@/components/IntegralRelated';
import { IntegralFAQ } from '@/components/IntegralFAQ';

const BASE_URL = 'https://calculadoramatematica.com';
const PAGE_URL = `${BASE_URL}/calculadoras/calculo/calculadora-de-integrales`;

export const metadata: Metadata = {
  title: {
    absolute: 'Calculadora de Integrales Online: Definidas e Indefinidas',
  },
  description:
    'Calcula integrales definidas e indefinidas online en español. Introduce la función, elige la variable y obtén resultado exacto con pasos y aproximación decimal.',
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadora de Integrales Online: Definidas e Indefinidas',
    description:
      'Calcula integrales definidas e indefinidas online en español. Introduce la función, elige la variable y obtén resultado exacto con pasos y aproximación decimal.',
    url: PAGE_URL,
    siteName: 'Calculadora Matemática',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Integrales Online: Definidas e Indefinidas',
    description:
      'Calcula integrales definidas e indefinidas online en español. Introduce la función, elige la variable y obtén resultado exacto con pasos y aproximación decimal.',
  },
};

const schemaWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Calculadora de Integrales Online',
  url: PAGE_URL,
  description:
    'Herramienta para calcular integrales definidas e indefinidas con resultado exacto y aproximación decimal.',
  inLanguage: 'es',
  isPartOf: { '@type': 'WebSite', url: BASE_URL, name: 'Calculadora Matemática' },
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Calculadoras', item: `${BASE_URL}/calculadoras` },
    { '@type': 'ListItem', position: 3, name: 'Cálculo', item: `${BASE_URL}/calculadoras/calculo` },
    { '@type': 'ListItem', position: 4, name: 'Calculadora de Integrales', item: PAGE_URL },
  ],
};

const schemaApp = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculadora de Integrales',
  url: PAGE_URL,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  inLanguage: 'es',
  description:
    'Calculadora de integrales definidas e indefinidas con resultado simbólico, aproximación decimal y explicación del procedimiento.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una calculadora de integrales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una herramienta que resuelve integrales de forma simbólica o numérica. Recibe una función matemática como entrada, aplica las reglas de integración y devuelve la antiderivada o el valor de una integral definida entre dos límites.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo calcular integrales definidas e indefinidas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La calculadora admite los dos tipos. Para una integral indefinida solo necesitas la función y la variable. Para una integral definida también debes introducir el límite inferior y el límite superior.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa la constante C en una integral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La constante C representa la constante de integración. Indica que el resultado es una familia de funciones que difieren entre sí por una constante. En integrales definidas, C desaparece al evaluar en los límites.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La calculadora muestra los pasos del procedimiento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La herramienta muestra la regla o el método utilizado para cada resultado. Para casos estándar como la regla de la potencia o funciones trigonométricas, se incluye una explicación del procedimiento.',
      },
    },
  ],
};

export default function CalculadoraDeIntegralesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      <Header />
      <main>
        <IntegralHero />
        <IntegralCalculator />
        <IntegralHowTo />
        <IntegralWhatIs />
        <IntegralFormulas />
        <IntegralExamples />
        <IntegralComparison />
        <IntegralErrors />
        <IntegralRelated />
        <IntegralFAQ />
      </main>
      <Footer />
    </>
  );
}
