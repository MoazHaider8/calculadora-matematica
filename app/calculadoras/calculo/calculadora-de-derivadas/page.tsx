import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DerivadaHero } from '@/components/DerivadaHero';
import { DerivadaCalculator } from '@/components/DerivadaCalculator';
import { DerivadaHowTo } from '@/components/DerivadaHowTo';
import { DerivadaWhatIs } from '@/components/DerivadaWhatIs';
import { DerivadaFormulas } from '@/components/DerivadaFormulas';
import { DerivadaExamples } from '@/components/DerivadaExamples';
import { DerivadaComparison } from '@/components/DerivadaComparison';
import { DerivadaErrors } from '@/components/DerivadaErrors';
import { DerivadaRelated } from '@/components/DerivadaRelated';
import { DerivadaFAQ } from '@/components/DerivadaFAQ';

const BASE_URL = 'https://calculadoramatematica.com';
const PAGE_URL = `${BASE_URL}/calculadoras/calculo/calculadora-de-derivadas`;

export const metadata: Metadata = {
  title: {
    absolute: 'Calculadora de Derivadas: Funciones, Reglas y Evaluación',
  },
  description:
    'Deriva funciones en línea con la calculadora de derivadas. Elige variable y orden, evalúa en un punto y revisa las reglas de derivación aplicadas paso a paso.',
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadora de Derivadas: Funciones, Reglas y Evaluación',
    description:
      'Deriva funciones en línea con la calculadora de derivadas. Elige variable y orden, evalúa en un punto y revisa las reglas de derivación aplicadas paso a paso.',
    url: PAGE_URL,
    siteName: 'Calculadora Matemática',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Derivadas: Funciones, Reglas y Evaluación',
    description:
      'Deriva funciones, elige variable y orden, evalúa en un punto y consulta la recta tangente.',
  },
};

const schemaWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Calculadora de Derivadas Online',
  url: PAGE_URL,
  description:
    'Herramienta para calcular derivadas simbólicas de funciones con evaluación en un punto y recta tangente.',
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
    { '@type': 'ListItem', position: 4, name: 'Calculadora de Derivadas', item: PAGE_URL },
  ],
};

const schemaApp = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculadora de Derivadas',
  url: PAGE_URL,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  inLanguage: 'es',
  description:
    'Calculadora de derivadas simbólicas con selección de orden, evaluación en un punto y cálculo de recta tangente.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una calculadora de derivadas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una herramienta que calcula la derivada simbólica de una función matemática. Recibe la función y la variable, aplica las reglas de derivación y devuelve el resultado exacto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo calcular derivadas de segundo orden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La calculadora admite primera, segunda y tercera derivada, además de un campo para introducir el orden personalizado hasta el décimo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La calculadora puede evaluar la derivada en un punto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Activa la opción de evaluación en un punto e introduce el valor de la variable. La calculadora obtiene el resultado numérico y, para la primera derivada, puede calcular también la recta tangente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la recta tangente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La recta tangente a una curva en un punto es la recta que toca la curva en ese punto y tiene la misma pendiente que la derivada en ese instante. Su ecuación es y = f(a) + f\'(a)(x − a).',
      },
    },
  ],
};

export default function CalculadoraDeDerivadas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <Header />
      <main>
        <DerivadaHero />
        <DerivadaCalculator />
        <DerivadaHowTo />
        <DerivadaWhatIs />
        <DerivadaFormulas />
        <DerivadaExamples />
        <DerivadaComparison />
        <DerivadaErrors />
        <DerivadaRelated />
        <DerivadaFAQ />
      </main>
      <Footer />
    </>
  );
}
