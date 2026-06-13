import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EcuacionHero } from '@/components/EcuacionHero';
import { EcuacionCalculator } from '@/components/EcuacionCalculator';
import { EcuacionHowTo } from '@/components/EcuacionHowTo';
import { EcuacionWhatIs } from '@/components/EcuacionWhatIs';
import { EcuacionTypes } from '@/components/EcuacionTypes';
import { EcuacionMethods } from '@/components/EcuacionMethods';
import { EcuacionExamples } from '@/components/EcuacionExamples';
import { EcuacionComparison } from '@/components/EcuacionComparison';
import { EcuacionErrors } from '@/components/EcuacionErrors';
import { EcuacionRelated } from '@/components/EcuacionRelated';
import { EcuacionFAQ } from '@/components/EcuacionFAQ';

const BASE_URL = 'https://calculadoramatematica.com';
const PAGE_URL = `${BASE_URL}/calculadoras/algebra/calculadora-de-ecuaciones`;

export const metadata: Metadata = {
  title: { absolute: 'Calculadora de Ecuaciones Online: Lineales y Cuadráticas' },
  description: 'Resuelve ecuaciones lineales y cuadráticas online en español. Introduce la ecuación, elige la variable y obtén la solución con pasos y comprobación detallada.',
  keywords: [
    'calculadora de ecuaciones',
    'calculadora de ecuaciones online',
    'resolver ecuaciones',
    'calculadora para resolver ecuaciones',
    'resolver ecuaciones lineales',
    'resolver ecuaciones cuadráticas',
    'calculadora de ecuaciones paso a paso',
    'solucionador de ecuaciones',
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: PAGE_URL,
    siteName: 'Calculadoras Matemáticas',
    title: 'Calculadora de Ecuaciones Online: Lineales y Cuadráticas',
    description: 'Resuelve ecuaciones lineales y cuadráticas online en español. Introduce la ecuación, elige la variable y obtén la solución con pasos y comprobación detallada.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Ecuaciones Online: Lineales y Cuadráticas',
    description: 'Resuelve ecuaciones lineales y cuadráticas online en español. Introduce la ecuación, elige la variable y obtén la solución con pasos y comprobación detallada.',
  },
};

const faqs = [
  { q: '¿Qué es una calculadora de ecuaciones?', a: 'Es una herramienta que encuentra el valor de la variable desconocida que satisface la igualdad. Acepta ecuaciones lineales y cuadráticas y muestra la solución con comprobación.' },
  { q: '¿Qué tipos de ecuaciones puedo resolver?', a: 'La calculadora admite ecuaciones lineales (ax + b = c), ecuaciones cuadráticas (ax² + bx + c = 0) y sistemas de dos ecuaciones con dos incógnitas.' },
  { q: '¿Puedo resolver ecuaciones cuadráticas?', a: 'Sí. Selecciona el modo Ecuación cuadrática e introduce la ecuación usando ^ para el exponente. La calculadora devuelve las soluciones reales o indica si no existen.' },
  { q: '¿Qué significa comprobar una solución?', a: 'Comprobar significa sustituir el valor obtenido en la ecuación original y verificar que ambos lados son iguales.' },
  { q: '¿Por qué la ecuación debe tener signo igual?', a: 'Una ecuación es una igualdad entre dos expresiones. Sin el signo igual, el texto es una expresión algebraica, no una ecuación, y no existe un valor a resolver.' },
  { q: '¿La calculadora resuelve sistemas de ecuaciones?', a: 'Sí. El modo Sistema 2×2 resuelve sistemas de dos ecuaciones con dos incógnitas x e y y devuelve los valores de ambas variables.' },
];

function buildSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: 'Calculadora de Ecuaciones Online | Paso a Paso',
        description: 'Resuelve ecuaciones online lineales y cuadráticas con solución, pasos y comprobación.',
        inLanguage: 'es',
        isPartOf: { '@id': `${BASE_URL}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio',                   item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Calculadoras',             item: `${BASE_URL}/calculadoras` },
          { '@type': 'ListItem', position: 3, name: 'Álgebra',                  item: `${BASE_URL}/calculadoras/algebra` },
          { '@type': 'ListItem', position: 4, name: 'Calculadora de Ecuaciones', item: PAGE_URL },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_URL}#app`,
        name: 'Calculadora de Ecuaciones Online',
        url: PAGE_URL,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        inLanguage: 'es',
        description: 'Resuelve ecuaciones lineales y cuadráticas con solución, procedimiento y comprobación.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }} />
      <Header />
      <main>
        <EcuacionHero />
        <EcuacionCalculator />
        <EcuacionHowTo />
        <EcuacionWhatIs />
        <EcuacionTypes />
        <EcuacionMethods />
        <EcuacionExamples />
        <EcuacionComparison />
        <EcuacionErrors />
        <EcuacionRelated />
        <EcuacionFAQ />
      </main>
      <Footer />
    </>
  );
}
