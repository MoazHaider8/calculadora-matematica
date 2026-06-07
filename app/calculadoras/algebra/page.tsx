import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AlgebraHero } from '@/components/AlgebraHero';
import { AlgebraTools } from '@/components/AlgebraTools';
import { AlgebraWhatIs } from '@/components/AlgebraWhatIs';
import { AlgebraWhenToUse } from '@/components/AlgebraWhenToUse';
import { AlgebraConcepts } from '@/components/AlgebraConcepts';
import { AlgebraRelated } from '@/components/AlgebraRelated';
import { HubRelatedCategories } from '@/components/HubRelatedCategories';
import { AlgebraFAQ } from '@/components/AlgebraFAQ';

const BASE_URL = 'https://calculadoramatematica.com';
const PAGE_URL = `${BASE_URL}/calculadoras/algebra`;

export const metadata: Metadata = {
  title: { absolute: 'Calculadoras de Álgebra Online: Ecuaciones, Polinomios y Más' },
  description:
    'Resuelve ecuaciones, trabaja con expresiones algebraicas, polinomios, raíces y raíz cuadrada. Cada calculadora muestra fórmulas y procedimientos en español.',
  keywords: [
    'calculadoras de álgebra',
    'herramientas de álgebra',
    'calculadoras para álgebra',
    'calculadoras algebraicas',
    'operaciones algebraicas',
    'álgebra online',
    'calculadora de ecuaciones',
    'calculadora de polinomios',
    'calculadora de raíces',
    'calculadora de raíz cuadrada',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { es: PAGE_URL },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadoras de Álgebra Online: Ecuaciones, Polinomios y Más',
    description:
      'Resuelve ecuaciones, trabaja con expresiones algebraicas, polinomios, raíces y raíz cuadrada. Cada calculadora muestra fórmulas y procedimientos en español.',
    url: PAGE_URL,
    siteName: 'Calculadora Matemática',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadoras de Álgebra Online: Ecuaciones, Polinomios y Más',
    description:
      'Resuelve ecuaciones, trabaja con expresiones algebraicas, polinomios, raíces y raíz cuadrada. Cada calculadora muestra fórmulas y procedimientos en español.',
  },
};

const schemaCollectionPage = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Calculadoras de Álgebra',
  description:
    'Categoría de calculadoras de álgebra: ecuaciones, álgebra básica, polinomios, raíces y raíz cuadrada.',
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
    { '@type': 'ListItem', position: 3, name: 'Álgebra',      item: PAGE_URL },
  ],
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué herramientas de álgebra incluye esta categoría?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Esta categoría incluye cinco herramientas: Calculadora de Ecuaciones, Calculadora Algebraica, Calculadora de Polinomios, Calculadora de Raíces y Calculadora de Raíz Cuadrada.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué calculadora debo usar para resolver ecuaciones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Calculadora de Ecuaciones está diseñada para resolver ecuaciones lineales y cuadráticas. Muestra los pasos del procedimiento y verifica el resultado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre álgebra y aritmética?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La aritmética trabaja con números concretos y operaciones básicas. El álgebra introduce variables, lo que permite trabajar con expresiones generales y resolver ecuaciones sin conocer los valores exactos de antemano.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo simplificar expresiones algebraicas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La Calculadora Algebraica permite simplificar, expandir y factorizar expresiones con variables.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se pueden trabajar polinomios en esta categoría?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La Calculadora de Polinomios cubre operaciones con polinomios de cualquier grado. La Calculadora de Raíces complementa esta herramienta calculando los ceros del polinomio.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Estas herramientas sirven para estudiar álgebra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Las calculadoras muestran los pasos del procedimiento y las propiedades aplicadas, lo que facilita el estudio y la comprensión del álgebra.',
      },
    },
  ],
};

const schemaItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Calculadoras de Álgebra',
  numberOfItems: 5,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Calculadora de Ecuaciones',     url: `${BASE_URL}/calculadoras/algebra/calculadora-de-ecuaciones` },
    { '@type': 'ListItem', position: 2, name: 'Calculadora Algebraica',         url: `${BASE_URL}/calculadoras/algebra/calculadora-algebraica` },
    { '@type': 'ListItem', position: 3, name: 'Calculadora de Polinomios',      url: `${BASE_URL}/calculadoras/algebra/calculadora-de-polinomios` },
    { '@type': 'ListItem', position: 4, name: 'Calculadora de Raíces',          url: `${BASE_URL}/calculadoras/algebra/calculadora-de-raices` },
    { '@type': 'ListItem', position: 5, name: 'Calculadora de Raíz Cuadrada',   url: `${BASE_URL}/calculadoras/algebra/calculadora-de-raiz-cuadrada` },
  ],
};

export default function AlgebraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCollectionPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItemList) }} />

      <Header />
      <main id="contenido-principal">
        <AlgebraHero />
        <AlgebraTools />
        <AlgebraWhatIs />
        <AlgebraWhenToUse />
        <AlgebraConcepts />
        <AlgebraRelated />
        <HubRelatedCategories current="algebra" />
        <AlgebraFAQ />
      </main>
      <Footer />
    </>
  );
}
