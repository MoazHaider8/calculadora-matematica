import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AlgebraicaHero } from '@/components/AlgebraicaHero';
import { AlgebraicaCalculator } from '@/components/AlgebraicaCalculator';
import { AlgebraicaHowTo } from '@/components/AlgebraicaHowTo';
import { AlgebraicaWhatIs } from '@/components/AlgebraicaWhatIs';
import { AlgebraicaOperations } from '@/components/AlgebraicaOperations';
import { AlgebraicaExamples } from '@/components/AlgebraicaExamples';
import { AlgebraicaComparison } from '@/components/AlgebraicaComparison';
import { AlgebraicaErrors } from '@/components/AlgebraicaErrors';
import { AlgebraicaRelated } from '@/components/AlgebraicaRelated';
import { AlgebraicaFAQ } from '@/components/AlgebraicaFAQ';

const BASE_URL = 'https://calculadoramatematica.com';
const PAGE_URL = `${BASE_URL}/calculadoras/algebra/calculadora-algebraica`;

export const metadata: Metadata = {
  title: 'Calculadora Algebraica Online | Simplificar y Factorizar',
  description: 'Simplifica, expande, factoriza y evalúa expresiones algebraicas online. Introduce tu expresión y revisa el resultado.',
  keywords: [
    'calculadora algebraica',
    'calculadora algebraica online',
    'calculadora de álgebra',
    'resolver expresiones algebraicas',
    'simplificar expresiones algebraicas',
    'calculadora de expresiones algebraicas',
    'operaciones algebraicas',
    'simplificador algebraico',
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: PAGE_URL,
    siteName: 'Calculadoras Matemáticas',
    title: 'Calculadora Algebraica Online | Simplificar y Factorizar',
    description: 'Simplifica, expande, factoriza y evalúa expresiones algebraicas online. Introduce tu expresión y revisa el resultado.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora Algebraica Online | Simplificar y Factorizar',
    description: 'Simplifica, expande, factoriza y evalúa expresiones algebraicas online. Introduce tu expresión y revisa el resultado.',
  },
};

const faqs = [
  { q: '¿Qué es una calculadora algebraica?', a: 'Es una herramienta que trabaja con expresiones algebraicas: simplificar términos semejantes, expandir paréntesis, factorizar expresiones básicas y evaluar con un valor de variable.' },
  { q: '¿Qué diferencia hay entre expresión y ecuación?', a: 'Una expresión algebraica es una combinación de variables y números sin signo de igualdad. Una ecuación establece que dos expresiones son iguales y tiene una solución.' },
  { q: '¿Puedo simplificar expresiones algebraicas?', a: 'Sí. La calculadora combina términos semejantes. Por ejemplo, 2x + 3x - x da como resultado 4x.' },
  { q: '¿La calculadora puede factorizar expresiones?', a: 'Sí. El modo Factorizar admite casos comunes como x² + 5x + 6 = (x+2)(x+3), diferencias de cuadrados y factores comunes.' },
  { q: '¿Puedo evaluar una expresión con un valor de x?', a: 'Sí. Selecciona Evaluar expresión, introduce la expresión, elige la variable e introduce el valor. Por ejemplo, x² + 3x con x = 2 da 10.' },
  { q: '¿Esta herramienta resuelve ecuaciones?', a: 'No. Esta herramienta trabaja con expresiones. Para resolver ecuaciones, usa la calculadora de ecuaciones en /calculadoras/algebra/calculadora-de-ecuaciones.' },
];

function buildSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: 'Calculadora Algebraica Online | Simplificar y Factorizar',
        description: 'Simplifica, expande, factoriza y evalúa expresiones algebraicas online.',
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
          { '@type': 'ListItem', position: 4, name: 'Calculadora Algebraica',    item: PAGE_URL },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_URL}#app`,
        name: 'Calculadora Algebraica Online',
        url: PAGE_URL,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        inLanguage: 'es',
        description: 'Simplifica, expande, factoriza y evalúa expresiones algebraicas.',
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
        <AlgebraicaHero />
        <AlgebraicaCalculator />
        <AlgebraicaHowTo />
        <AlgebraicaWhatIs />
        <AlgebraicaOperations />
        <AlgebraicaExamples />
        <AlgebraicaComparison />
        <AlgebraicaErrors />
        <AlgebraicaRelated />
        <AlgebraicaFAQ />
      </main>
      <Footer />
    </>
  );
}
