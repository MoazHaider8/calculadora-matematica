import type { Metadata } from 'next';
import { Header }              from '@/components/Header';
import { Footer }              from '@/components/Footer';
import { TriangulosHero }      from '@/components/TriangulosHero';
import { TriangulosCalculator } from '@/components/TriangulosCalculator';
import { TriangulosHowTo }     from '@/components/TriangulosHowTo';
import { TriangulosWhatIs }    from '@/components/TriangulosWhatIs';
import { TriangulosFormulas }  from '@/components/TriangulosFormulas';
import { TriangulosExamples }  from '@/components/TriangulosExamples';
import { TriangulosTipos }     from '@/components/TriangulosTipos';
import { TriangulosErrors }    from '@/components/TriangulosErrors';
import { TriangulosRelated }   from '@/components/TriangulosRelated';
import { TriangulosFAQ }       from '@/components/TriangulosFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/geometria/calculadora-de-triangulos';

export const metadata: Metadata = {
  title:       'Calculadora de Triángulos Online | Área y Lados',
  description: 'Calcula triángulos online con base, altura, lados y ángulos. Obtén área, perímetro, tipo de triángulo, fórmula y pasos.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'Calculadora de Triángulos Online | Área y Lados',
    description: 'Calcula triángulos online con base, altura, lados y ángulos. Obtén área, perímetro, tipo de triángulo, fórmula y pasos.',
    url:         CANONICAL,
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Calculadora de Triángulos Online | Área y Lados',
    description: 'Calcula triángulos online con base, altura, lados y ángulos. Obtén área, perímetro, tipo de triángulo, fórmula y pasos.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadora de Triángulos Online | Área y Lados',
      description: 'Calcula triángulos online con base, altura, lados y ángulos. Obtén área, perímetro, tipo de triángulo, fórmula y pasos.',
      inLanguage: 'es',
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',        item: 'https://calculadoramatematica.com/' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',  item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Geometría',     item: 'https://calculadoramatematica.com/calculadoras/geometria' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Triángulos', item: CANONICAL },
      ],
    },
    {
      '@type':            'WebApplication',
      '@id':              `${CANONICAL}#app`,
      name:               'Calculadora de Triángulos Online',
      url:                CANONICAL,
      applicationCategory: 'EducationalApplication',
      operatingSystem:    'Any',
      inLanguage:         'es',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      featureList: [
        'Área con base y altura',
        'Área y perímetro con tres lados (Herón)',
        'Tercer ángulo con dos ángulos conocidos',
        'Triángulo equilátero completo',
        'Detección de tipo de triángulo',
      ],
    },
  ],
};

export default function CalculadoraDeTriangulosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <TriangulosHero />
      <TriangulosCalculator />
      <TriangulosHowTo />
      <TriangulosWhatIs />
      <TriangulosFormulas />
      <TriangulosExamples />
      <TriangulosTipos />
      <TriangulosErrors />
      <TriangulosRelated />
      <TriangulosFAQ />
      <Footer />
    </>
  );
}
