import type { Metadata } from 'next';
import { Header }               from '@/components/Header';
import { Footer }               from '@/components/Footer';
import { DesviacionHero }       from '@/components/DesviacionHero';
import { DesviacionCalculator } from '@/components/DesviacionCalculator';
import { DesviacionHowTo }      from '@/components/DesviacionHowTo';
import { DesviacionWhatIs }     from '@/components/DesviacionWhatIs';
import { DesviacionTipos }      from '@/components/DesviacionTipos';
import { DesviacionExamples }   from '@/components/DesviacionExamples';
import { DesviacionVarianza }   from '@/components/DesviacionVarianza';
import { DesviacionErrors }     from '@/components/DesviacionErrors';
import { DesviacionRelated }    from '@/components/DesviacionRelated';
import { DesviacionFAQ }        from '@/components/DesviacionFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/estadistica/calculadora-de-desviacion-estandar';

export const metadata: Metadata = {
  title: { absolute: 'Calculadora de Desviación Estándar: Muestra y Población' },
  description:
    'Calcula la desviación estándar poblacional y muestral online en español. Introduce un conjunto de datos y revisa la media, varianza y el resultado paso a paso.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title:       'Calculadora de Desviación Estándar: Muestra y Población',
    description: 'Calcula la desviación estándar poblacional y muestral online en español. Introduce un conjunto de datos y revisa la media, varianza y el resultado paso a paso.',
    url:         CANONICAL,
    locale:      'es_ES',
    type:        'website',
  },
  twitter: {
    card:        'summary',
    title:       'Calculadora de Desviación Estándar: Muestra y Población',
    description: 'Calcula la desviación estándar poblacional y muestral online en español. Introduce un conjunto de datos y revisa la media, varianza y el resultado paso a paso.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadora de Desviación Estándar: Muestra y Población',
      description: 'Calculadora de desviación estándar poblacional y muestral: introduce datos y obtén media, varianza, resultado y procedimiento.',
      inLanguage: 'es',
      isPartOf:   { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                              item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',                        item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Estadística',                         item: 'https://calculadoramatematica.com/calculadoras/estadistica' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Desviación Estándar',  item: CANONICAL },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id':   `${CANONICAL}#app`,
      name:    'Calculadora de Desviación Estándar: Muestra y Población',
      url:     CANONICAL,
      description: 'Calcula desviación estándar poblacional y muestral de un conjunto de datos. Muestra media, varianza y procedimiento paso a paso.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'All',
      inLanguage: 'es',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es una calculadora de desviación estándar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que acepta una lista de datos numéricos y calcula la desviación estándar poblacional y muestral, junto con la media y la varianza como valores de apoyo.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre desviación estándar muestral y poblacional?',
          acceptedAnswer: { '@type': 'Answer', text: 'La poblacional usa todos los datos disponibles y divide entre n. La muestral estima la dispersión de una población a partir de una muestra y divide entre n−1 para corregir el sesgo.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué relación hay entre varianza y desviación estándar?',
          acceptedAnswer: { '@type': 'Answer', text: 'La desviación estándar es la raíz cuadrada de la varianza. Ambas miden dispersión, pero la desviación estándar se expresa en las mismas unidades que los datos.' },
        },
        {
          '@type': 'Question',
          name: '¿Cómo se interpreta una desviación estándar alta?',
          acceptedAnswer: { '@type': 'Answer', text: 'Indica que los datos están más dispersos respecto a la media. Una desviación baja indica que los datos están concentrados cerca del valor medio.' },
        },
        {
          '@type': 'Question',
          name: '¿Cuántos datos necesito para calcularla?',
          acceptedAnswer: { '@type': 'Answer', text: 'Para la desviación estándar poblacional basta con un dato (el resultado sería 0). Para la muestral se necesitan al menos 2 valores, porque el divisor n−1 sería 0 con un solo dato.' },
        },
        {
          '@type': 'Question',
          name: '¿Esta calculadora reemplaza la calculadora de estadística?',
          acceptedAnswer: { '@type': 'Answer', text: 'Esta herramienta se enfoca en desviación estándar. Para un resumen completo con media, mediana, moda, rango, varianza y desviación estándar, usa la calculadora de estadística.' },
        },
      ],
    },
  ],
};

export default function CalculadoraDesviacionEstandarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <DesviacionHero />
      <DesviacionCalculator />
      <DesviacionHowTo />
      <DesviacionWhatIs />
      <DesviacionTipos />
      <DesviacionExamples />
      <DesviacionVarianza />
      <DesviacionErrors />
      <DesviacionRelated />
      <DesviacionFAQ />
      <Footer />
    </>
  );
}
