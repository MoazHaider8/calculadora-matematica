import type { Metadata } from 'next';
import { Header }              from '@/components/Header';
import { Footer }              from '@/components/Footer';
import { PitagorasHero }       from '@/components/PitagorasHero';
import { PitagorasCalculator } from '@/components/PitagorasCalculator';
import { PitagorasHowTo }      from '@/components/PitagorasHowTo';
import { PitagorasWhatIs }     from '@/components/PitagorasWhatIs';
import { PitagorasFormulas }   from '@/components/PitagorasFormulas';
import { PitagorasExamples }   from '@/components/PitagorasExamples';
import { PitagorasConcepts }   from '@/components/PitagorasConcepts';
import { PitagorasErrors }     from '@/components/PitagorasErrors';
import { PitagorasRelated }    from '@/components/PitagorasRelated';
import { PitagorasFAQ }        from '@/components/PitagorasFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/geometria/calculadora-de-pitagoras';

export const metadata: Metadata = {
  title: { absolute: 'Calculadora de Pitágoras Online: Hipotenusa y Catetos' },
  description: 'Calcula la hipotenusa o cualquier cateto de un triángulo rectángulo usando el teorema de Pitágoras. Introduce dos lados y obtén el tercero con pasos en español.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'Calculadora de Pitágoras Online: Hipotenusa y Catetos',
    description: 'Calcula la hipotenusa o cualquier cateto de un triángulo rectángulo usando el teorema de Pitágoras. Introduce dos lados y obtén el tercero con pasos en español.',
    url:         CANONICAL,
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Calculadora de Pitágoras Online: Hipotenusa y Catetos',
    description: 'Calcula la hipotenusa o cualquier cateto de un triángulo rectángulo usando el teorema de Pitágoras. Introduce dos lados y obtén el tercero con pasos en español.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadora de Pitágoras Online | Hipotenusa y Catetos',
      description: 'Calcula la hipotenusa o cualquier cateto de un triángulo rectángulo usando el teorema de Pitágoras. Introduce dos lados y obtén el tercero con pasos en español.',
      inLanguage: 'es',
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                   item: 'https://calculadoramatematica.com/' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',             item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Geometría',                item: 'https://calculadoramatematica.com/calculadoras/geometria' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Pitágoras', item: CANONICAL },
      ],
    },
    {
      '@type':             'WebApplication',
      '@id':               `${CANONICAL}#app`,
      name:                'Calculadora de Pitágoras Online',
      url:                 CANONICAL,
      applicationCategory: 'EducationalApplication',
      operatingSystem:     'Any',
      inLanguage:          'es',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      featureList: [
        'Calcular hipotenusa a partir de dos catetos',
        'Calcular cateto A a partir de hipotenusa y cateto B',
        'Calcular cateto B a partir de hipotenusa y cateto A',
        'Procedimiento paso a paso',
        'Comprobación numérica a² + b² = c²',
      ],
    },
  ],
};

export default function CalculadoraDePitagorasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <PitagorasHero />
      <PitagorasCalculator />
      <PitagorasHowTo />
      <PitagorasWhatIs />
      <PitagorasFormulas />
      <PitagorasExamples />
      <PitagorasConcepts />
      <PitagorasErrors />
      <PitagorasRelated />
      <PitagorasFAQ />
      <Footer />
    </>
  );
}
