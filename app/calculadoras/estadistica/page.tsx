import type { Metadata } from 'next';
import { Header }               from '@/components/Header';
import { Footer }               from '@/components/Footer';
import { EstadisticaHero }      from '@/components/EstadisticaHero';
import { EstadisticaTools }     from '@/components/EstadisticaTools';
import { EstadisticaWhatIs }    from '@/components/EstadisticaWhatIs';
import { EstadisticaWhenToUse } from '@/components/EstadisticaWhenToUse';
import { EstadisticaConcepts }  from '@/components/EstadisticaConcepts';
import { EstadisticaRelated }   from '@/components/EstadisticaRelated';
import { EstadisticaFAQ }       from '@/components/EstadisticaFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/estadistica';

export const metadata: Metadata = {
  title: 'Calculadoras de Estadística Online',
  description:
    'Explora calculadoras de estadística para media, mediana, moda, varianza, desviación estándar y análisis de datos.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title:       'Calculadoras de Estadística Online',
    description: 'Explora calculadoras de estadística para media, mediana, moda, varianza, desviación estándar y análisis de datos.',
    url:         CANONICAL,
    locale:      'es_ES',
    type:        'website',
  },
  twitter: {
    card:        'summary',
    title:       'Calculadoras de Estadística Online',
    description: 'Explora calculadoras de estadística para media, mediana, moda, varianza, desviación estándar y análisis de datos.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadoras de Estadística Online',
      description: 'Categoría de calculadoras estadísticas: media, mediana, moda, varianza y desviación estándar.',
      inLanguage: 'es',
      isPartOf:   { '@id': 'https://calculadoramatematica.com/calculadoras' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',        item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',  item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Estadística',   item: CANONICAL },
      ],
    },
    {
      '@type': 'ItemList',
      '@id':   `${CANONICAL}#tools`,
      name:    'Calculadoras de estadística',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Calculadora de Media',               url: `${CANONICAL}/calculadora-de-media` },
        { '@type': 'ListItem', position: 2, name: 'Calculadora de Mediana',             url: `${CANONICAL}/calculadora-de-mediana` },
        { '@type': 'ListItem', position: 3, name: 'Calculadora de Moda',                url: `${CANONICAL}/calculadora-de-moda` },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Varianza',            url: `${CANONICAL}/calculadora-de-varianza` },
        { '@type': 'ListItem', position: 5, name: 'Calculadora de Desviación Estándar', url: `${CANONICAL}/calculadora-de-desviacion-estandar` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué herramientas incluye esta categoría?',
          acceptedAnswer: { '@type': 'Answer', text: 'Esta categoría incluye cinco calculadoras: media, mediana, moda, varianza y desviación estándar. Estarán disponibles próximamente.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre media y promedio?',
          acceptedAnswer: { '@type': 'Answer', text: 'Promedio es el término cotidiano para el promedio aritmético. Media es el término estadístico formal. La calculadora de promedio es útil para promedios simples; la futura calculadora de media estará orientada al análisis estadístico.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué calculadora debo usar para encontrar el valor central?',
          acceptedAnswer: { '@type': 'Answer', text: 'La calculadora de mediana permite encontrar el valor central de una lista ordenada. Es especialmente útil cuando hay valores extremos que distorsionarían la media.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué es la desviación estándar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Mide cuánto se dispersan los valores respecto a la media. Se calcula como la raíz cuadrada de la varianza y se expresa en las mismas unidades que los datos.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre varianza y desviación estándar?',
          acceptedAnswer: { '@type': 'Answer', text: 'La varianza es la media de los cuadrados de las diferencias. La desviación estándar es la raíz cuadrada de la varianza. Ambas miden dispersión, pero la desviación estándar está en las mismas unidades que los datos.' },
        },
        {
          '@type': 'Question',
          name: '¿Estas herramientas sirven para analizar datos escolares?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sí. Son útiles para calcular medias de calificaciones, identificar la nota más frecuente o revisar la variabilidad de resultados en educación y ciencias.' },
        },
      ],
    },
  ],
};

export default function EstadisticaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <EstadisticaHero />
      <EstadisticaTools />
      <EstadisticaWhatIs />
      <EstadisticaWhenToUse />
      <EstadisticaConcepts />
      <EstadisticaRelated />
      <EstadisticaFAQ />
      <Footer />
    </>
  );
}
