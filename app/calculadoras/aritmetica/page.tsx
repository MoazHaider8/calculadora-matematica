import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AritmeticaHero } from '@/components/AritmeticaHero';
import { AritmeticaTools } from '@/components/AritmeticaTools';
import { AritmeticaWhatIs } from '@/components/AritmeticaWhatIs';
import { AritmeticaWhenToUse } from '@/components/AritmeticaWhenToUse';
import { AritmeticaConcepts } from '@/components/AritmeticaConcepts';
import { AritmeticaRelated } from '@/components/AritmeticaRelated';
import { AritmeticaFAQ } from '@/components/AritmeticaFAQ';

const BASE_URL = 'https://calculadoramatematica.com';
const PAGE_URL = `${BASE_URL}/calculadoras/aritmetica`;

export const metadata: Metadata = {
  title: { absolute: 'Calculadoras de Aritmética Online' },
  description:
    'Explora calculadoras de aritmética para fracciones, porcentajes, promedio, regla de tres y operaciones científicas.',
  keywords: [
    'calculadoras de aritmética',
    'herramientas de aritmética',
    'calculadoras aritméticas online',
    'operaciones aritméticas',
    'calculadora de fracciones',
    'calculadora de porcentajes',
    'calculadora de promedio',
    'calculadora de regla de tres',
    'calculadora científica',
    'aritmética online',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { es: PAGE_URL },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadoras de Aritmética Online',
    description:
      'Explora calculadoras de aritmética para fracciones, porcentajes, promedio, regla de tres y operaciones científicas.',
    url: PAGE_URL,
    siteName: 'Calculadora Matemática',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadoras de Aritmética Online',
    description:
      'Explora calculadoras de aritmética para fracciones, porcentajes, promedio, regla de tres y operaciones científicas.',
  },
};

const schemaCollectionPage = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Calculadoras de Aritmética',
  description:
    'Categoría de calculadoras de aritmética: fracciones, porcentajes, promedio, regla de tres y calculadora científica.',
  url: PAGE_URL,
  inLanguage: 'es',
  isPartOf: { '@type': 'WebSite', url: BASE_URL, name: 'Calculadora Matemática' },
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio',       item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Calculadoras', item: `${BASE_URL}/calculadoras` },
    { '@type': 'ListItem', position: 3, name: 'Aritmética',   item: PAGE_URL },
  ],
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué herramientas incluye esta categoría?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Esta categoría incluye cinco herramientas: Calculadora Científica, Calculadora de Porcentajes, Calculadora de Fracciones, Calculadora de Promedio y Calculadora de Regla de Tres.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué calculadora debo usar para operaciones básicas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Calculadora Científica cubre operaciones aritméticas fundamentales junto con funciones avanzadas. Para porcentajes, fracciones o promedios, cada herramienta especializada ofrece un flujo más directo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia hay entre calculadora científica y aritmética?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las calculadoras aritméticas están especializadas en un tipo concreto de operación. La calculadora científica cubre un rango más amplio incluyendo funciones trigonométricas, logaritmos y exponentes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo calcular porcentajes y descuentos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La Calculadora de Porcentajes permite calcular el porcentaje de un número, aplicar descuentos, calcular aumentos y obtener variaciones porcentuales.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo trabajar con fracciones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La Calculadora de Fracciones permite sumar, restar, multiplicar y dividir fracciones. Muestra el resultado simplificado y el mínimo común denominador.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Estas herramientas sirven para tareas escolares?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Las calculadoras de aritmética muestran el procedimiento paso a paso, lo que facilita el aprendizaje y la comprobación de resultados.',
      },
    },
  ],
};

const schemaItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Calculadoras de Aritmética',
  numberOfItems: 5,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Calculadora Científica',          url: `${PAGE_URL}/calculadora-cientifica` },
    { '@type': 'ListItem', position: 2, name: 'Calculadora de Porcentajes',       url: `${PAGE_URL}/calculadora-de-porcentajes` },
    { '@type': 'ListItem', position: 3, name: 'Calculadora de Fracciones',        url: `${PAGE_URL}/calculadora-de-fracciones` },
    { '@type': 'ListItem', position: 4, name: 'Calculadora de Promedio',          url: `${PAGE_URL}/calculadora-de-promedio` },
    { '@type': 'ListItem', position: 5, name: 'Calculadora de Regla de Tres',     url: `${PAGE_URL}/calculadora-de-regla-de-tres` },
  ],
};

export default function AritmeticaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCollectionPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItemList) }} />

      <Header />
      <main id="contenido-principal">
        <AritmeticaHero />
        <AritmeticaTools />
        <AritmeticaWhatIs />
        <AritmeticaWhenToUse />
        <AritmeticaConcepts />
        <AritmeticaRelated />
        <AritmeticaFAQ />
      </main>
      <Footer />
    </>
  );
}
