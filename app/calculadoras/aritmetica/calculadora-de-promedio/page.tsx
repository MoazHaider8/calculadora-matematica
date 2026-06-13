import type { Metadata } from 'next';
import { Header }                  from '@/components/Header';
import { Footer }                  from '@/components/Footer';
import { PromedioHero }            from '@/components/PromedioHero';
import { PromedioCalculator }      from '@/components/PromedioCalculator';
import { PromedioHowTo }           from '@/components/PromedioHowTo';
import { PromedioWhatIs }          from '@/components/PromedioWhatIs';
import { PromedioTypes }           from '@/components/PromedioTypes';
import { PromedioExamples }        from '@/components/PromedioExamples';
import { PromedioSimplePonderado } from '@/components/PromedioSimplePonderado';
import { PromedioErrors }          from '@/components/PromedioErrors';
import { PromedioRelated }         from '@/components/PromedioRelated';
import { PromedioFAQ }             from '@/components/PromedioFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-promedio';

export const metadata: Metadata = {
  title: { absolute: 'Calculadora de Promedio Online: Media Simple y Ponderada' },
  description:
    'Calcula el promedio de notas, calificaciones o cualquier valor numérico online en español. Obtén media simple y ponderada con suma, cantidad y procedimiento.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title:       'Calculadora de Promedio Online: Media Simple y Ponderada',
    description: 'Calcula el promedio de notas, calificaciones o cualquier valor numérico online en español. Obtén media simple y ponderada con suma, cantidad y procedimiento.',
    url:         CANONICAL,
    locale:      'es_ES',
    type:        'website',
  },
  twitter: {
    card:        'summary',
    title:       'Calculadora de Promedio Online: Media Simple y Ponderada',
    description: 'Calcula el promedio de notas, calificaciones o cualquier valor numérico online en español. Obtén media simple y ponderada con suma, cantidad y procedimiento.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadora de Promedio Online: Media Simple y Ponderada',
      description: 'Calculadora de promedio simple y ponderado. Acepta listas de valores, muestra suma, cantidad, resultado y procedimiento.',
      inLanguage: 'es',
      isPartOf:   { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                    item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',              item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Aritmética',                item: 'https://calculadoramatematica.com/calculadoras/aritmetica' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Promedio',   item: CANONICAL },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id':   `${CANONICAL}#app`,
      name:    'Calculadora de Promedio Online',
      url:     CANONICAL,
      description: 'Calcula promedio simple (suma ÷ n) y promedio ponderado (Σv×p ÷ Σp). Muestra suma, cantidad, procedimiento e interpretación.',
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
          name: '¿Qué es una calculadora de promedio?',
          acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que calcula la media aritmética de una lista de números. Acepta valores separados por coma o por línea y muestra el promedio, la suma total, la cantidad de datos y el procedimiento.' },
        },
        {
          '@type': 'Question',
          name: '¿Cómo se calcula el promedio de varios números?',
          acceptedAnswer: { '@type': 'Answer', text: 'Se suman todos los valores y el resultado se divide entre la cantidad de datos. Por ejemplo, el promedio de 10, 8, 9 y 7 es 34 ÷ 4 = 8.5.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre promedio simple y ponderado?',
          acceptedAnswer: { '@type': 'Answer', text: 'En el promedio simple todos los valores tienen el mismo peso. En el ponderado, cada valor tiene un peso diferente. Fórmula ponderada: Σ(v×p) ÷ Σp.' },
        },
        {
          '@type': 'Question',
          name: '¿Cómo calcular el promedio de notas?',
          acceptedAnswer: { '@type': 'Answer', text: 'Introduce las calificaciones separadas por coma y pulsa calcular. La herramienta suma todas las notas y divide entre la cantidad para obtener la media.' },
        },
        {
          '@type': 'Question',
          name: '¿Puedo usar valores decimales?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sí. La calculadora admite enteros, decimales y negativos. Por ejemplo, el promedio de 2.5, 3.5 y 4 es 3.3333.' },
        },
        {
          '@type': 'Question',
          name: '¿Esta calculadora reemplaza una calculadora de estadística?',
          acceptedAnswer: { '@type': 'Answer', text: 'Esta herramienta calcula promedio simple y ponderado. Para análisis estadísticos completos habrá calculadoras específicas de estadística.' },
        },
      ],
    },
  ],
};

export default function CalculadoraPromedioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <PromedioHero />
      <PromedioCalculator />
      <PromedioHowTo />
      <PromedioWhatIs />
      <PromedioTypes />
      <PromedioExamples />
      <PromedioSimplePonderado />
      <PromedioErrors />
      <PromedioRelated />
      <PromedioFAQ />
      <Footer />
    </>
  );
}
