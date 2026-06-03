import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CalculoHero } from '@/components/CalculoHero';
import { CalculoTools } from '@/components/CalculoTools';
import { CalculoWhatIs } from '@/components/CalculoWhatIs';
import { CalculoWhenToUse } from '@/components/CalculoWhenToUse';
import { CalculoConcepts } from '@/components/CalculoConcepts';
import { CalculoRelated } from '@/components/CalculoRelated';
import { CalculoFAQ } from '@/components/CalculoFAQ';

const BASE_URL = 'https://calculadoramatematica.com';
const PAGE_URL = `${BASE_URL}/calculadoras/calculo`;

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: { absolute: 'Calculadoras de Cálculo | Integrales y Derivadas' },
  description:
    'Explora calculadoras de cálculo para integrales, derivadas, límites, logaritmos y exponentes organizadas en una sola categoría.',
  keywords: [
    'calculadoras de cálculo',
    'calculadora de cálculo',
    'herramientas de cálculo',
    'operaciones de cálculo',
    'fórmulas de cálculo',
    'calculadoras para cálculo',
    'calculadora de integrales',
    'calculadora de derivadas',
    'calculadora de límites',
    'calculadora de logaritmos',
    'calculadora de exponentes',
    'cálculo diferencial',
    'cálculo integral',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { es: PAGE_URL },
  },
  openGraph: {
    title: 'Calculadoras de Cálculo | Integrales y Derivadas',
    description:
      'Explora calculadoras de cálculo para integrales, derivadas, límites, logaritmos y exponentes organizadas en una sola categoría.',
    url: PAGE_URL,
    siteName: 'Calculadora Matemática',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadoras de Cálculo | Integrales y Derivadas',
    description:
      'Explora calculadoras de cálculo para integrales, derivadas, límites, logaritmos y exponentes organizadas en una sola categoría.',
  },
  robots: { index: true, follow: true },
};

// ── JSON-LD schemas ────────────────────────────────────────────────────────────

const schemaCollectionPage = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Calculadoras de Cálculo',
  description:
    'Categoría de calculadoras de cálculo: integrales, derivadas, límites, logaritmos y exponentes.',
  url: PAGE_URL,
  inLanguage: 'es',
  isPartOf: { '@type': 'WebSite', url: BASE_URL, name: 'Calculadora Matemática' },
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio',        item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Calculadoras',  item: `${BASE_URL}/calculadoras` },
    { '@type': 'ListItem', position: 3, name: 'Cálculo',       item: PAGE_URL },
  ],
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué herramientas de cálculo incluye esta categoría?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Esta categoría incluye cinco calculadoras: integrales, derivadas, límites, logaritmos y exponentes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre derivadas e integrales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las derivadas miden la tasa de cambio instantánea de una función. Las integrales calculan la acumulación de una cantidad. Son operaciones inversas según el teorema fundamental del cálculo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué calculadora debo usar para resolver límites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La calculadora de límites calcula el valor al que se aproxima una función cuando su variable tiende a un punto dado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Las calculadoras muestran los pasos del procedimiento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Cada calculadora devuelve el resultado junto al procedimiento seguido para revisar la regla aplicada en cada paso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo utilizar estas herramientas para estudiar cálculo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Las calculadoras muestran los pasos aplicados y las reglas utilizadas, lo que ayuda a entender el proceso y no solo el resultado final.',
      },
    },
  ],
};

const schemaItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Calculadoras de Cálculo',
  numberOfItems: 5,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Calculadora de Integrales', url: `${BASE_URL}/calculadoras/calculo/calculadora-de-integrales/` },
    { '@type': 'ListItem', position: 2, name: 'Calculadora de Derivadas',  url: `${BASE_URL}/calculadoras/calculo/calculadora-de-derivadas/`  },
    { '@type': 'ListItem', position: 3, name: 'Calculadora de Límites',    url: `${BASE_URL}/calculadoras/calculo/calculadora-de-limites/`    },
    { '@type': 'ListItem', position: 4, name: 'Calculadora de Logaritmos', url: `${BASE_URL}/calculadoras/calculo/calculadora-de-logaritmos/` },
    { '@type': 'ListItem', position: 5, name: 'Calculadora de Exponentes', url: `${BASE_URL}/calculadoras/calculo/calculadora-de-exponentes/` },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function CalculoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCollectionPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItemList) }} />

      <Header />
      <main id="contenido-principal">
        <CalculoHero />
        <CalculoTools />
        <CalculoWhatIs />
        <CalculoWhenToUse />
        <CalculoConcepts />
        <CalculoRelated />
        <CalculoFAQ />
      </main>
      <Footer />
    </>
  );
}
