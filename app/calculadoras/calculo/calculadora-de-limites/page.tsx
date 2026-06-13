import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LimiteHero } from '@/components/LimiteHero';
import { LimiteCalculator } from '@/components/LimiteCalculator';
import { LimiteHowTo } from '@/components/LimiteHowTo';
import { LimiteWhatIs } from '@/components/LimiteWhatIs';
import { LimiteTipos } from '@/components/LimiteTipos';
import { LimiteExamples } from '@/components/LimiteExamples';
import { LimiteComparison } from '@/components/LimiteComparison';
import { LimiteErrors } from '@/components/LimiteErrors';
import { LimiteRelated } from '@/components/LimiteRelated';
import { LimiteFAQ } from '@/components/LimiteFAQ';

const BASE_URL = 'https://calculadoramatematica.com';
const PAGE_URL = `${BASE_URL}/calculadoras/calculo/calculadora-de-limites`;

export const metadata: Metadata = {
  title: {
    absolute: 'Calculadora de Límites Online: Laterales e Infinitos',
  },
  description:
    'Calcula límites de funciones en línea: laterales, al infinito y tabla de valores. Obtén el resultado con procedimiento explicado y análisis de errores comunes.',
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadora de Límites Online: Laterales e Infinitos',
    description:
      'Calcula límites de funciones en línea: laterales, al infinito y tabla de valores. Obtén el resultado con procedimiento explicado y análisis de errores comunes.',
    url: PAGE_URL,
    siteName: 'Calculadora Matemática',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Límites Online: Laterales e Infinitos',
    description:
      'Resuelve límites bilaterales, laterales e infinitos con tabla de valores y explicación.',
  },
};

const schemaWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Calculadora de Límites Online',
  url: PAGE_URL,
  description: 'Herramienta para calcular límites de funciones con análisis lateral, límites al infinito y tabla de valores.',
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
    { '@type': 'ListItem', position: 4, name: 'Calculadora de Límites', item: PAGE_URL },
  ],
};

const schemaApp = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculadora de Límites',
  url: PAGE_URL,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  inLanguage: 'es',
  description: 'Calculadora de límites bilaterales, laterales y al infinito con tabla de valores y explicación del procedimiento.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una calculadora de límites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una herramienta que analiza el comportamiento de una función cuando su variable se acerca a un valor. Evalúa la función desde ambos lados, detecta si el límite existe y muestra el resultado junto a una tabla de valores.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo calcular límites laterales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Selecciona "Por la izquierda" o "Por la derecha" en el campo de dirección para analizar únicamente ese lado del punto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa que un límite no existe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El límite bilateral no existe cuando el límite por la izquierda y el límite por la derecha son diferentes. Por ejemplo, en 1/x cuando x tiende a 0, los lados dan -∞ y +∞ respectivamente, por lo que el límite bilateral no existe.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La calculadora puede resolver límites al infinito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Escribe "infinito" o "∞" como valor de aproximación. La calculadora evaluará la función para valores cada vez más grandes y detectará si converge a un valor finito o si diverge.',
      },
    },
  ],
};

export default function CalculadoraDeLimites() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <Header />
      <main>
        <LimiteHero />
        <LimiteCalculator />
        <LimiteHowTo />
        <LimiteWhatIs />
        <LimiteTipos />
        <LimiteExamples />
        <LimiteComparison />
        <LimiteErrors />
        <LimiteRelated />
        <LimiteFAQ />
      </main>
      <Footer />
    </>
  );
}
