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
    'Explora calculadoras de estadística para media, varianza, desviación estándar, probabilidad y análisis de datos.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title:       'Calculadoras de Estadística Online',
    description: 'Explora calculadoras de estadística para media, varianza, desviación estándar, probabilidad y análisis de datos.',
    url:         CANONICAL,
    locale:      'es_ES',
    type:        'website',
  },
  twitter: {
    card:        'summary',
    title:       'Calculadoras de Estadística Online',
    description: 'Explora calculadoras de estadística para media, varianza, desviación estándar, probabilidad y análisis de datos.',
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
      description: 'Categoría de calculadoras estadísticas: estadística, probabilidad, media, varianza y desviación estándar.',
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
        { '@type': 'ListItem', position: 1, name: 'Calculadora de Estadística',        url: `${CANONICAL}/calculadora-de-estadistica` },
        { '@type': 'ListItem', position: 2, name: 'Calculadora de Probabilidad',       url: `${CANONICAL}/calculadora-de-probabilidad` },
        { '@type': 'ListItem', position: 3, name: 'Calculadora de Desviación Estándar', url: `${CANONICAL}/calculadora-de-desviacion-estandar` },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Media',              url: `${CANONICAL}/calculadora-de-media` },
        { '@type': 'ListItem', position: 5, name: 'Calculadora de Varianza',           url: `${CANONICAL}/calculadora-de-varianza` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué herramientas incluye esta categoría?',
          acceptedAnswer: { '@type': 'Answer', text: 'Esta categoría incluye cinco calculadoras: Calculadora de Estadística, Calculadora de Probabilidad, Calculadora de Desviación Estándar, Calculadora de Media y Calculadora de Varianza. Estarán disponibles próximamente.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre calculadora de estadística y calculadora de media?',
          acceptedAnswer: { '@type': 'Answer', text: 'La calculadora de estadística mostrará varias medidas a la vez: media, varianza, desviación estándar, mínimo y máximo. La calculadora de media se centrará en el valor medio estadístico. Para promedios simples, la calculadora de promedio de aritmética es la herramienta adecuada.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué calculadora debo usar para probabilidad?',
          acceptedAnswer: { '@type': 'Answer', text: 'La calculadora de probabilidad calcula la probabilidad de un evento a partir de los casos favorables y el número total de casos posibles. El resultado se muestra como fracción, decimal y porcentaje.' },
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
          acceptedAnswer: { '@type': 'Answer', text: 'Sí. Puedes usarlas para calcular la media de calificaciones, revisar la varianza y desviación estándar de los resultados, o calcular la probabilidad de un evento concreto.' },
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
