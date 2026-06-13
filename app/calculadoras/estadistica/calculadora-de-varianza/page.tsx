import type { Metadata } from 'next';
import { Header }            from '@/components/Header';
import { Footer }            from '@/components/Footer';
import { VarianzaHero }      from '@/components/VarianzaHero';
import { VarianzaCalculator } from '@/components/VarianzaCalculator';
import { VarianzaHowTo }     from '@/components/VarianzaHowTo';
import { VarianzaWhatIs }    from '@/components/VarianzaWhatIs';
import { VarianzaTipos }     from '@/components/VarianzaTipos';
import { VarianzaExamples }  from '@/components/VarianzaExamples';
import { VarianzaDesviacion } from '@/components/VarianzaDesviacion';
import { VarianzaErrors }    from '@/components/VarianzaErrors';
import { VarianzaRelated }   from '@/components/VarianzaRelated';
import { VarianzaFAQ }       from '@/components/VarianzaFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/estadistica/calculadora-de-varianza';

export const metadata: Metadata = {
  title: { absolute: 'Calculadora de Varianza Online: Poblacional y Muestral' },
  description:
    'Calcula la varianza poblacional y muestral de un conjunto de datos online en español. Obtén la media, diferencias cuadradas, el resultado y el procedimiento.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title:       'Calculadora de Varianza Online: Poblacional y Muestral',
    description: 'Calcula la varianza poblacional y muestral de un conjunto de datos online en español. Obtén la media, diferencias cuadradas, el resultado y el procedimiento.',
    url:         CANONICAL,
    locale:      'es_ES',
    type:        'website',
  },
  twitter: {
    card:        'summary',
    title:       'Calculadora de Varianza Online: Poblacional y Muestral',
    description: 'Calcula la varianza poblacional y muestral de un conjunto de datos online en español. Obtén la media, diferencias cuadradas, el resultado y el procedimiento.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadora de Varianza Online: Poblacional y Muestral',
      description: 'Calculadora de varianza poblacional y muestral. Introduce datos y obtén media, diferencias cuadradas, varianza y procedimiento.',
      inLanguage: 'es',
      isPartOf:   { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                  item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',            item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Estadística',             item: 'https://calculadoramatematica.com/calculadoras/estadistica' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Varianza', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id':   `${CANONICAL}#app`,
      name:    'Calculadora de Varianza Online',
      url:     CANONICAL,
      description: 'Calcula varianza poblacional y muestral de un conjunto de datos. Muestra media, diferencias cuadradas y procedimiento paso a paso.',
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
          name: '¿Qué es una calculadora de varianza?',
          acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que acepta una lista de datos numéricos y calcula la varianza poblacional y muestral, junto con la media, las diferencias cuadradas y la desviación estándar como valor de apoyo.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre varianza muestral y poblacional?',
          acceptedAnswer: { '@type': 'Answer', text: 'La poblacional usa todos los datos disponibles y divide entre n. La muestral estima la dispersión de una población a partir de una muestra y divide entre n−1 para reducir el sesgo.' },
        },
        {
          '@type': 'Question',
          name: '¿Cómo se calcula la varianza paso a paso?',
          acceptedAnswer: { '@type': 'Answer', text: 'Se calcula la media, se resta cada valor a la media, se eleva cada diferencia al cuadrado, se suman los cuadrados y se divide entre n (poblacional) o n−1 (muestral).' },
        },
        {
          '@type': 'Question',
          name: '¿Qué relación hay entre varianza y desviación estándar?',
          acceptedAnswer: { '@type': 'Answer', text: 'La desviación estándar es la raíz cuadrada de la varianza. La varianza se expresa en unidades cuadradas; la desviación estándar está en las mismas unidades que los datos.' },
        },
        {
          '@type': 'Question',
          name: '¿Por qué se elevan las diferencias al cuadrado?',
          acceptedAnswer: { '@type': 'Answer', text: 'Para evitar que las diferencias positivas y negativas se cancelen entre sí. Al elevarlas al cuadrado, todos los valores son positivos y reflejan la magnitud real de la dispersión.' },
        },
        {
          '@type': 'Question',
          name: '¿Esta calculadora reemplaza la calculadora de estadística?',
          acceptedAnswer: { '@type': 'Answer', text: 'Esta herramienta se enfoca en varianza. Para un resumen completo con media, mediana, moda, rango, varianza y desviación estándar, usa la calculadora de estadística.' },
        },
      ],
    },
  ],
};

export default function CalculadoraVarianzaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <VarianzaHero />
      <VarianzaCalculator />
      <VarianzaHowTo />
      <VarianzaWhatIs />
      <VarianzaTipos />
      <VarianzaExamples />
      <VarianzaDesviacion />
      <VarianzaErrors />
      <VarianzaRelated />
      <VarianzaFAQ />
      <Footer />
    </>
  );
}
