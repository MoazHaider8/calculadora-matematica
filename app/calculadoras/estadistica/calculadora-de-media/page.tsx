import type { Metadata } from 'next';
import { Header }          from '@/components/Header';
import { Footer }          from '@/components/Footer';
import { MediaHero }       from '@/components/MediaHero';
import { MediaCalculator } from '@/components/MediaCalculator';
import { MediaHowTo }      from '@/components/MediaHowTo';
import { MediaWhatIs }     from '@/components/MediaWhatIs';
import { MediaTipos }      from '@/components/MediaTipos';
import { MediaExamples }   from '@/components/MediaExamples';
import { MediaTendencia }  from '@/components/MediaTendencia';
import { MediaErrors }     from '@/components/MediaErrors';
import { MediaRelated }    from '@/components/MediaRelated';
import { MediaFAQ }        from '@/components/MediaFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/estadistica/calculadora-de-media';

export const metadata: Metadata = {
  title: { absolute: 'Calculadora de Media Online: Aritmética y Ponderada' },
  description:
    'Calcula la media aritmética simple y ponderada de un conjunto de datos online en español. Obtén la suma, la cantidad, el resultado y el procedimiento explicado.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title:       'Calculadora de Media Online: Aritmética y Ponderada',
    description: 'Calcula la media aritmética simple y ponderada de un conjunto de datos online en español. Obtén la suma, la cantidad, el resultado y el procedimiento explicado.',
    url:         CANONICAL,
    locale:      'es_ES',
    type:        'website',
  },
  twitter: {
    card:        'summary',
    title:       'Calculadora de Media Online: Aritmética y Ponderada',
    description: 'Calcula la media aritmética simple y ponderada de un conjunto de datos online en español. Obtén la suma, la cantidad, el resultado y el procedimiento explicado.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadora de Media Online: Aritmética y Ponderada',
      description: 'Calculadora de media aritmética: simple y ponderada. Introduce datos y obtén suma, cantidad, media y procedimiento paso a paso.',
      inLanguage: 'es',
      isPartOf:   { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',               item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',         item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Estadística',          item: 'https://calculadoramatematica.com/calculadoras/estadistica' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Media', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id':   `${CANONICAL}#app`,
      name:    'Calculadora de Media Online',
      url:     CANONICAL,
      description: 'Calcula la media aritmética simple y ponderada. Muestra suma, cantidad, resultado y procedimiento paso a paso.',
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
          name: '¿Qué es una calculadora de media?',
          acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que acepta una lista de datos numéricos y calcula la media aritmética simple y ponderada, junto con suma, cantidad y procedimiento paso a paso.' },
        },
        {
          '@type': 'Question',
          name: '¿Cómo se calcula la media aritmética?',
          acceptedAnswer: { '@type': 'Answer', text: 'Se suman todos los valores del conjunto y se divide entre la cantidad de datos. Por ejemplo, para 10, 8, 9, 7, 6: suma = 40, cantidad = 5, media = 8.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre media y promedio?',
          acceptedAnswer: { '@type': 'Answer', text: 'Son el mismo cálculo. Media es el término estadístico. Promedio es la palabra más usada en contextos cotidianos. El resultado es idéntico.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre media simple y media ponderada?',
          acceptedAnswer: { '@type': 'Answer', text: 'En la media simple todos los datos tienen el mismo peso. En la media ponderada, cada valor tiene un peso que indica su importancia. Los pesos no necesitan sumar 100.' },
        },
        {
          '@type': 'Question',
          name: '¿La media se afecta por valores extremos?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sí. Un valor muy alto o muy bajo puede desplazar la media. En esos casos, la mediana es una mejor medida de tendencia central.' },
        },
        {
          '@type': 'Question',
          name: '¿Esta calculadora reemplaza la calculadora de estadística?',
          acceptedAnswer: { '@type': 'Answer', text: 'Esta herramienta se enfoca en la media. Para un resumen completo con mediana, moda, rango, varianza y desviación estándar, usa la calculadora de estadística.' },
        },
      ],
    },
  ],
};

export default function CalculadoraMediaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <MediaHero />
      <MediaCalculator />
      <MediaHowTo />
      <MediaWhatIs />
      <MediaTipos />
      <MediaExamples />
      <MediaTendencia />
      <MediaErrors />
      <MediaRelated />
      <MediaFAQ />
      <Footer />
    </>
  );
}
