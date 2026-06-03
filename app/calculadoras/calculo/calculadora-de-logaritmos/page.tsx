import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LogaritmoHero } from '@/components/LogaritmoHero';
import { LogaritmoCalculator } from '@/components/LogaritmoCalculator';
import { LogaritmoHowTo } from '@/components/LogaritmoHowTo';
import { LogaritmoWhatIs } from '@/components/LogaritmoWhatIs';
import { LogaritmoChangeBase } from '@/components/LogaritmoChangeBase';
import { LogaritmoProperties } from '@/components/LogaritmoProperties';
import { LogaritmoExamples } from '@/components/LogaritmoExamples';
import { LogaritmoComparison } from '@/components/LogaritmoComparison';
import { LogaritmoErrors } from '@/components/LogaritmoErrors';
import { LogaritmoRelated } from '@/components/LogaritmoRelated';
import { LogaritmoFAQ } from '@/components/LogaritmoFAQ';

const BASE_URL = 'https://calculadoramatematica.com';
const PAGE_URL = `${BASE_URL}/calculadoras/calculo/calculadora-de-logaritmos`;

export const metadata: Metadata = {
  title: {
    absolute: 'Calculadora de Logaritmos Online | Base y Pasos',
  },
  description:
    'Calcula logaritmos online con base 10, base e o base personalizada. Consulta resultado decimal, fórmula de cambio de base y pasos.',
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadora de Logaritmos Online | Base y Pasos',
    description:
      'Calcula logaritmos con base 10, base e o base personalizada. Resultado decimal, cambio de base y comprobación exponencial.',
    url: PAGE_URL,
    siteName: 'Calculadora Matemática',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Logaritmos Online | Base y Pasos',
    description:
      'Calcula logaritmos con base 10, base e o base personalizada con resultado y fórmula de cambio de base.',
  },
};

const schemaWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Calculadora de Logaritmos Online',
  url: PAGE_URL,
  description: 'Herramienta para calcular logaritmos con base 10, base e o base personalizada, con fórmula de cambio de base.',
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
    { '@type': 'ListItem', position: 4, name: 'Calculadora de Logaritmos', item: PAGE_URL },
  ],
};

const schemaApp = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculadora de Logaritmos',
  url: PAGE_URL,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  inLanguage: 'es',
  description: 'Calculadora de logaritmos con base 10, base e y base personalizada, con fórmula de cambio de base y comprobación exponencial.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué diferencia hay entre log y ln?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'log(x) es el logaritmo común con base 10. ln(x) es el logaritmo natural con base e (aproximadamente 2.71828). Esta calculadora interpreta log(x) como base 10 y ln(x) como base e.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo calcular logaritmos con base personalizada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Selecciona la opción de base personalizada e introduce el valor de la base. Debe ser positiva y diferente de 1. La calculadora usa la fórmula de cambio de base: log_b(a) = ln(a) / ln(b).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué el argumento debe ser positivo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El logaritmo solo está definido para argumentos estrictamente mayores que cero en el dominio real. No existe ningún exponente real que eleve una base positiva a un resultado negativo o cero.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La calculadora resuelve ecuaciones logarítmicas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Esta herramienta calcula el valor de un logaritmo concreto dado su argumento y base. Para resolver ecuaciones logarítmicas como log₂(x) = 3, se necesita una calculadora de ecuaciones algebraicas.',
      },
    },
  ],
};

export default function CalculadoraDeLogaritmos() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <Header />
      <main>
        <LogaritmoHero />
        <LogaritmoCalculator />
        <LogaritmoHowTo />
        <LogaritmoWhatIs />
        <LogaritmoChangeBase />
        <LogaritmoProperties />
        <LogaritmoExamples />
        <LogaritmoComparison />
        <LogaritmoErrors />
        <LogaritmoRelated />
        <LogaritmoFAQ />
      </main>
      <Footer />
    </>
  );
}
