import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CalcDirectoryHero } from '@/components/CalcDirectoryHero';
import { CalcCategoryExplorer } from '@/components/CalcCategoryExplorer';
import { CalcAllDirectory } from '@/components/CalcAllDirectory';
import { CalcHowToFind } from '@/components/CalcHowToFind';
import { CalcTopicOverview } from '@/components/CalcTopicOverview';
import { CalcMostUsed } from '@/components/CalcMostUsed';
import { CalcFAQ } from '@/components/CalcFAQ';
import { categories } from '@/lib/data';

const BASE_URL = 'https://calculadoramatematica.com';
const PAGE_URL = `${BASE_URL}/calculadoras`;

export const metadata: Metadata = {
  title: { absolute: 'Directorio de Calculadoras por Categoría | Matemáticas' },
  description:
    'Explora calculadoras organizadas por categoría. Encuentra herramientas de cálculo, álgebra, matrices, estadística y geometría.',
  keywords: [
    'directorio de calculadoras',
    'calculadoras por categoría',
    'calculadoras por tema',
    'explorar calculadoras',
    'categorías matemáticas',
    'calculadoras organizadas',
    'herramientas por categoría',
    'áreas matemáticas',
    'calculadoras de cálculo',
    'calculadoras de álgebra',
    'calculadoras de estadística',
    'calculadoras de geometría',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { es: PAGE_URL },
  },
  openGraph: {
    title: 'Directorio de Calculadoras por Categoría | Matemáticas',
    description:
      'Explora calculadoras organizadas por categoría. Encuentra herramientas de cálculo, álgebra, matrices, estadística y geometría.',
    url: PAGE_URL,
    siteName: 'Calculadoras Matemáticas',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Directorio de Calculadoras por Categoría | Matemáticas',
    description:
      'Explora calculadoras organizadas por categoría. Encuentra herramientas de cálculo, álgebra, matrices, estadística y geometría.',
  },
  robots: { index: true, follow: true },
};

// ── JSON-LD schema ─────────────────────────────────────────────────────────────

const allCalculators = categories.flatMap((cat) => cat.calculators);

const schemaCollectionPage = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Directorio de Calculadoras Matemáticas por Categoría',
  description:
    'Directorio completo de calculadoras matemáticas organizadas por categoría: cálculo, álgebra, matrices y vectores, aritmética, estadística y geometría.',
  url: PAGE_URL,
  inLanguage: 'es',
  isPartOf: { '@type': 'WebSite', url: BASE_URL, name: 'Calculadoras Matemáticas' },
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Calculadoras', item: PAGE_URL },
  ],
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué calculadoras puedo encontrar aquí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Esta página reúne 30 calculadoras matemáticas organizadas en seis áreas: cálculo, álgebra, matrices y vectores, aritmética, estadística y geometría.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo están organizadas las calculadoras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las calculadoras están agrupadas por categoría matemática. Cada categoría contiene entre cuatro y cinco herramientas relacionadas por el tipo de operación.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Las herramientas están disponibles en español?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Todas las calculadoras, instrucciones, resultados y explicaciones están en español.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo usar estas calculadoras para estudiar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Las calculadoras están diseñadas para mostrar el procedimiento junto al resultado, lo que permite revisar los pasos y aprender cómo se aplica cada fórmula.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se añadirán nuevas calculadoras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La plataforma se amplía de forma gradual. Las seis categorías actuales seguirán creciendo con nuevas herramientas para cubrir más operaciones matemáticas.',
      },
    },
  ],
};

const schemaItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Directorio de calculadoras matemáticas',
  description: 'Lista completa de calculadoras matemáticas organizadas por categoría',
  numberOfItems: allCalculators.length,
  itemListElement: allCalculators.map((calc, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: calc.name,
    url: `${BASE_URL}${calc.url}`,
  })),
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function CalculadorasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCollectionPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItemList) }}
      />

      <Header />
      <main id="contenido-principal">
        <CalcDirectoryHero />
        <CalcCategoryExplorer />
        <CalcAllDirectory />
        <CalcHowToFind />
        <CalcTopicOverview />
        <CalcMostUsed />
        <CalcFAQ />
      </main>
      <Footer />
    </>
  );
}
