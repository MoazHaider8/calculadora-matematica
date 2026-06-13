import type { Metadata } from 'next';
import { Header }             from '@/components/Header';
import { Footer }             from '@/components/Footer';
import { CirculosHero }       from '@/components/CirculosHero';
import { CirculosCalculator } from '@/components/CirculosCalculator';
import { CirculosHowTo }      from '@/components/CirculosHowTo';
import { CirculosWhatIs }     from '@/components/CirculosWhatIs';
import { CirculosFormulas }   from '@/components/CirculosFormulas';
import { CirculosExamples }   from '@/components/CirculosExamples';
import { CirculosConcepts }   from '@/components/CirculosConcepts';
import { CirculosErrors }     from '@/components/CirculosErrors';
import { CirculosRelated }    from '@/components/CirculosRelated';
import { CirculosFAQ }        from '@/components/CirculosFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/geometria/calculadora-de-circulos';

export const metadata: Metadata = {
  title: { absolute: 'Calculadora de Círculos Online: Radio, Diámetro y Área' },
  description: 'Calcula radio, diámetro, área y circunferencia de un círculo en español. Introduce cualquier valor conocido y obtén los demás con la fórmula y el procedimiento.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'Calculadora de Círculos Online: Radio, Diámetro y Área',
    description: 'Calcula radio, diámetro, área y circunferencia de un círculo en español. Introduce cualquier valor conocido y obtén los demás con la fórmula y el procedimiento.',
    url:         CANONICAL,
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Calculadora de Círculos Online: Radio, Diámetro y Área',
    description: 'Calcula radio, diámetro, área y circunferencia de un círculo en español. Introduce cualquier valor conocido y obtén los demás con la fórmula y el procedimiento.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadora de Círculos Online | Radio y Área',
      description: 'Calcula radio, diámetro, área y circunferencia de un círculo en español. Introduce cualquier valor conocido y obtén los demás con la fórmula y el procedimiento.',
      inLanguage: 'es',
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                  item: 'https://calculadoramatematica.com/' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',            item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Geometría',               item: 'https://calculadoramatematica.com/calculadoras/geometria' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Círculos', item: CANONICAL },
      ],
    },
    {
      '@type':             'WebApplication',
      '@id':               `${CANONICAL}#app`,
      name:                'Calculadora de Círculos Online',
      url:                 CANONICAL,
      applicationCategory: 'EducationalApplication',
      operatingSystem:     'Any',
      inLanguage:          'es',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      featureList: [
        'Cálculo desde radio',
        'Cálculo desde diámetro',
        'Cálculo desde circunferencia',
        'Cálculo desde área',
        'Radio, diámetro, circunferencia y área simultáneos',
      ],
    },
  ],
};

export default function CalculadoraDeCirculosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <CirculosHero />
      <CirculosCalculator />
      <CirculosHowTo />
      <CirculosWhatIs />
      <CirculosFormulas />
      <CirculosExamples />
      <CirculosConcepts />
      <CirculosErrors />
      <CirculosRelated />
      <CirculosFAQ />
      <Footer />
    </>
  );
}
