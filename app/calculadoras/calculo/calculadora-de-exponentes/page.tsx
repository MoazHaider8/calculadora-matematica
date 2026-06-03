import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ExponenteHero } from '@/components/ExponenteHero';
import { ExponenteCalculator } from '@/components/ExponenteCalculator';
import { ExponenteHowTo } from '@/components/ExponenteHowTo';
import { ExponenteWhatIs } from '@/components/ExponenteWhatIs';
import { ExponenteProperties } from '@/components/ExponenteProperties';
import { ExponenteExamples } from '@/components/ExponenteExamples';
import { ExponenteNegFrac } from '@/components/ExponenteNegFrac';
import { ExponenteScientific } from '@/components/ExponenteScientific';
import { ExponenteErrors } from '@/components/ExponenteErrors';
import { ExponenteRelated } from '@/components/ExponenteRelated';
import { ExponenteFAQ } from '@/components/ExponenteFAQ';

const BASE_URL = 'https://calculadoramatematica.com';
const PAGE_URL = `${BASE_URL}/calculadoras/calculo/calculadora-de-exponentes`;

export const metadata: Metadata = {
  title: 'Calculadora de Exponentes y Potencias Online',
  description: 'Calcula exponentes y potencias online. Introduce base y exponente, simplifica expresiones y revisa propiedades básicas.',
  keywords: [
    'calculadora de exponentes',
    'calculadora de potencias',
    'calcular exponentes',
    'calcular potencias',
    'exponentes online',
    'potencias online',
    'exponentes negativos',
    'exponentes fraccionarios',
    'simplificar exponentes',
    'propiedades de exponentes',
    'notación científica',
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: PAGE_URL,
    siteName: 'Calculadoras Matemáticas',
    title: 'Calculadora de Exponentes y Potencias Online',
    description: 'Calcula exponentes y potencias online. Introduce base y exponente, simplifica expresiones y revisa propiedades básicas.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Exponentes y Potencias Online',
    description: 'Calcula exponentes y potencias online. Introduce base y exponente, simplifica expresiones y revisa propiedades básicas.',
  },
};

const faqs = [
  { q: '¿Qué es una calculadora de exponentes?', a: 'Es una herramienta que calcula potencias y exponentes. Permite introducir una base y un exponente para obtener el resultado, trabajar con exponentes negativos y fraccionarios, simplificar expresiones y convertir números a notación científica.' },
  { q: '¿Qué diferencia hay entre exponente y potencia?', a: 'La potencia es el resultado de la operación. El exponente es el número que indica cuántas veces se multiplica la base. En 2³, la base es 2, el exponente es 3 y la potencia es 8.' },
  { q: '¿Puedo calcular exponentes negativos?', a: 'Sí. Introduce la base y un exponente negativo (por ejemplo, -3). La calculadora devuelve el recíproco de la potencia positiva correspondiente. 2⁻³ = 1/8 = 0.125.' },
  { q: '¿Qué significa un exponente fraccionario?', a: 'Un exponente fraccionario representa una raíz. 4^(1/2) equivale a la raíz cuadrada de 4. 8^(1/3) equivale a la raíz cúbica de 8. El denominador indica el índice de la raíz.' },
  { q: '¿La calculadora simplifica expresiones con exponentes?', a: 'Sí. El modo de simplificación aplica las propiedades básicas: producto de potencias, cociente de potencias y potencia de una potencia, siempre que la base sea la misma y la expresión siga los patrones admitidos.' },
  { q: '¿Qué relación hay entre exponentes y logaritmos?', a: 'Los logaritmos son la operación inversa de los exponentes. Si 2³ = 8, entonces log₂(8) = 3.' },
];

function buildSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: 'Calculadora de Exponentes y Potencias Online',
        description: 'Calcula exponentes y potencias online. Introduce base y exponente, simplifica expresiones y revisa propiedades básicas.',
        inLanguage: 'es',
        isPartOf: { '@id': `${BASE_URL}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Calculadoras', item: `${BASE_URL}/calculadoras` },
          { '@type': 'ListItem', position: 3, name: 'Cálculo', item: `${BASE_URL}/calculadoras/calculo` },
          { '@type': 'ListItem', position: 4, name: 'Calculadora de Exponentes', item: PAGE_URL },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_URL}#app`,
        name: 'Calculadora de Exponentes y Potencias',
        url: PAGE_URL,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        inLanguage: 'es',
        description: 'Calcula exponentes y potencias, simplifica expresiones con exponentes y convierte a notación científica.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}#faq`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
      />
      <Header />
      <main>
        <ExponenteHero />
        <ExponenteCalculator />
        <ExponenteHowTo />
        <ExponenteWhatIs />
        <ExponenteProperties />
        <ExponenteExamples />
        <ExponenteNegFrac />
        <ExponenteScientific />
        <ExponenteErrors />
        <ExponenteRelated />
        <ExponenteFAQ />
      </main>
      <Footer />
    </>
  );
}
