import type { Metadata } from 'next';
import { Header }                      from '@/components/Header';
import { Footer }                      from '@/components/Footer';
import { EstadisticaCalcHero }         from '@/components/EstadisticaCalcHero';
import { EstadisticaCalcCalculator }   from '@/components/EstadisticaCalcCalculator';
import { EstadisticaCalcHowTo }        from '@/components/EstadisticaCalcHowTo';
import { EstadisticaCalcWhatIs }       from '@/components/EstadisticaCalcWhatIs';
import { EstadisticaCalcMedidas }      from '@/components/EstadisticaCalcMedidas';
import { EstadisticaCalcExamples }     from '@/components/EstadisticaCalcExamples';
import { EstadisticaCalcPoblMuestra }  from '@/components/EstadisticaCalcPoblMuestra';
import { EstadisticaCalcErrors }       from '@/components/EstadisticaCalcErrors';
import { EstadisticaCalcRelated }      from '@/components/EstadisticaCalcRelated';
import { EstadisticaCalcFAQ }          from '@/components/EstadisticaCalcFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/estadistica/calculadora-de-estadistica';

export const metadata: Metadata = {
  title: 'Calculadora de Estadística Online | Resumen de Datos',
  description:
    'Calcula estadística online para un conjunto de datos. Obtén media, mediana, moda, rango, varianza, desviación estándar y resumen.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title:       'Calculadora de Estadística Online | Resumen de Datos',
    description: 'Calcula estadística online para un conjunto de datos. Obtén media, mediana, moda, rango, varianza, desviación estándar y resumen.',
    url:         CANONICAL,
    locale:      'es_ES',
    type:        'website',
  },
  twitter: {
    card:        'summary',
    title:       'Calculadora de Estadística Online | Resumen de Datos',
    description: 'Calcula estadística online para un conjunto de datos. Obtén media, mediana, moda, rango, varianza, desviación estándar y resumen.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadora de Estadística Online | Resumen de Datos',
      description: 'Calculadora de estadística descriptiva: media, mediana, moda, rango, varianza y desviación estándar poblacional y muestral.',
      inLanguage: 'es',
      isPartOf:   { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                       item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',                 item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Estadística',                  item: 'https://calculadoramatematica.com/calculadoras/estadistica' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Estadística',   item: CANONICAL },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id':   `${CANONICAL}#app`,
      name:    'Calculadora de Estadística Online',
      url:     CANONICAL,
      description: 'Calcula media, mediana, moda, rango, mínimo, máximo, varianza y desviación estándar (poblacional y muestral) de un conjunto de datos.',
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
          name: '¿Qué es una calculadora de estadística?',
          acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que acepta un conjunto de datos numéricos y calcula las principales medidas estadísticas: cantidad, suma, media, mediana, moda, mínimo, máximo, rango, varianza y desviación estándar.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué datos puedo introducir?',
          acceptedAnswer: { '@type': 'Answer', text: 'Puedes introducir cualquier lista de números separados por coma, punto y coma o salto de línea. Se admiten enteros, decimales y negativos.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre media, mediana y moda?',
          acceptedAnswer: { '@type': 'Answer', text: 'La media es el promedio aritmético. La mediana es el valor central de la lista ordenada. La moda es el valor más frecuente. En conjuntos simétricos pueden coincidir; en datos con valores extremos pueden diferir.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre población y muestra?',
          acceptedAnswer: { '@type': 'Answer', text: 'La varianza poblacional divide entre n. La varianza muestral divide entre n−1 para corregir el sesgo cuando el conjunto es una muestra representativa de una población mayor.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué significan varianza y desviación estándar?',
          acceptedAnswer: { '@type': 'Answer', text: 'La varianza mide la dispersión cuadrática respecto a la media. La desviación estándar es su raíz cuadrada y se expresa en las mismas unidades que los datos.' },
        },
        {
          '@type': 'Question',
          name: '¿Esta calculadora reemplaza a las calculadoras específicas?',
          acceptedAnswer: { '@type': 'Answer', text: 'Esta herramienta entrega un resumen general. Para estudiar una medida con más detalle, usa las calculadoras específicas de media, varianza o desviación estándar cuando estén disponibles.' },
        },
      ],
    },
  ],
};

export default function CalculadoraEstadisticaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <EstadisticaCalcHero />
      <EstadisticaCalcCalculator />
      <EstadisticaCalcHowTo />
      <EstadisticaCalcWhatIs />
      <EstadisticaCalcMedidas />
      <EstadisticaCalcExamples />
      <EstadisticaCalcPoblMuestra />
      <EstadisticaCalcErrors />
      <EstadisticaCalcRelated />
      <EstadisticaCalcFAQ />
      <Footer />
    </>
  );
}
