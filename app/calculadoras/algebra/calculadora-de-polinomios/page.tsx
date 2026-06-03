import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PolinomioHero } from '@/components/PolinomioHero';
import { PolinomioCalculator } from '@/components/PolinomioCalculator';
import { PolinomioHowTo } from '@/components/PolinomioHowTo';
import { PolinomioWhatIs } from '@/components/PolinomioWhatIs';
import { PolinomioOperations } from '@/components/PolinomioOperations';
import { PolinomioExamples } from '@/components/PolinomioExamples';
import { PolinomioParts } from '@/components/PolinomioParts';
import { PolinomioErrors } from '@/components/PolinomioErrors';
import { PolinomioRelated } from '@/components/PolinomioRelated';
import { PolinomioFAQ } from '@/components/PolinomioFAQ';

const BASE_URL = 'https://calculadoramatematica.com';
const PAGE_URL = `${BASE_URL}/calculadoras/algebra/calculadora-de-polinomios`;

export const metadata: Metadata = {
  title: 'Calculadora de Polinomios Online | Factorizar y Operar',
  description: 'Simplifica, factoriza, evalúa y opera polinomios online. Introduce un polinomio y revisa grado, coeficientes y resultado.',
  keywords: [
    'calculadora de polinomios',
    'calculadora de polinomios online',
    'resolver polinomios',
    'simplificar polinomios',
    'factorizar polinomios',
    'operaciones con polinomios',
    'sumar polinomios',
    'multiplicar polinomios',
    'evaluar polinomios',
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website', locale: 'es_ES', url: PAGE_URL, siteName: 'Calculadoras Matemáticas',
    title: 'Calculadora de Polinomios Online | Factorizar y Operar',
    description: 'Simplifica, factoriza, evalúa y opera polinomios online. Introduce un polinomio y revisa grado, coeficientes y resultado.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Polinomios Online | Factorizar y Operar',
    description: 'Simplifica, factoriza, evalúa y opera polinomios online. Introduce un polinomio y revisa grado, coeficientes y resultado.',
  },
};

const faqs = [
  { q: '¿Qué es una calculadora de polinomios?', a: 'Es una herramienta que permite simplificar, sumar, restar, multiplicar, factorizar y evaluar polinomios, además de mostrar información como grado, término principal y coeficientes.' },
  { q: '¿Qué operaciones puedo hacer con polinomios?', a: 'Simplificar, sumar, restar, multiplicar, factorizar y evaluar polinomios con un valor concreto de variable.' },
  { q: '¿La calculadora puede factorizar polinomios?', a: 'Sí. Admite casos comunes como trinomios cuadráticos, diferencias de cuadrados y factores comunes. Si no hay factorización simple, lo indica.' },
  { q: '¿Cómo se identifica el grado de un polinomio?', a: 'El grado es el valor del mayor exponente de la expresión. En x³ - 2x² + x - 5, el grado es 3. La calculadora lo muestra en el modo Información.' },
  { q: '¿Puedo evaluar un polinomio con un valor de x?', a: 'Sí. Selecciona Evaluar, introduce el polinomio y el valor. Por ejemplo, x² + 3x + 2 con x = 2 da P(2) = 12.' },
  { q: '¿Esta herramienta resuelve ecuaciones polinómicas?', a: 'No. Esta herramienta trabaja con polinomios. Para resolver ecuaciones, usa la calculadora de ecuaciones en /calculadoras/algebra/calculadora-de-ecuaciones.' },
];

function buildSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
        name: 'Calculadora de Polinomios Online | Factorizar y Operar',
        description: 'Simplifica, factoriza, evalúa y opera polinomios online.',
        inLanguage: 'es', isPartOf: { '@id': `${BASE_URL}/#website` },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio',                      item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Calculadoras',                item: `${BASE_URL}/calculadoras` },
          { '@type': 'ListItem', position: 3, name: 'Álgebra',                     item: `${BASE_URL}/calculadoras/algebra` },
          { '@type': 'ListItem', position: 4, name: 'Calculadora de Polinomios',   item: PAGE_URL },
        ],
      },
      {
        '@type': 'SoftwareApplication', '@id': `${PAGE_URL}#app`,
        name: 'Calculadora de Polinomios Online', url: PAGE_URL,
        applicationCategory: 'EducationalApplication', operatingSystem: 'Web', inLanguage: 'es',
        description: 'Simplifica, factoriza, evalúa y opera polinomios con análisis de grado y coeficientes.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      },
      {
        '@type': 'FAQPage', '@id': `${PAGE_URL}#faq`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question', name: f.q,
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
        <PolinomioHero />
        <PolinomioCalculator />
        <PolinomioHowTo />
        <PolinomioWhatIs />
        <PolinomioOperations />
        <PolinomioExamples />
        <PolinomioParts />
        <PolinomioErrors />
        <PolinomioRelated />
        <PolinomioFAQ />
      </main>
      <Footer />
    </>
  );
}
