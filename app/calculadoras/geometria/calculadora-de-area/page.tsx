import type { Metadata } from 'next';
import { Header }         from '@/components/Header';
import { Footer }         from '@/components/Footer';
import { AreaHero }       from '@/components/AreaHero';
import { AreaCalculator } from '@/components/AreaCalculator';
import { AreaHowTo }      from '@/components/AreaHowTo';
import { AreaWhatIs }     from '@/components/AreaWhatIs';
import { AreaFormulas }   from '@/components/AreaFormulas';
import { AreaExamples }   from '@/components/AreaExamples';
import { AreaUnidades }   from '@/components/AreaUnidades';
import { AreaErrors }     from '@/components/AreaErrors';
import { AreaRelated }    from '@/components/AreaRelated';
import { AreaFAQ }        from '@/components/AreaFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/geometria/calculadora-de-area';

export const metadata: Metadata = {
  title: 'Calculadora de Área Online | Figuras Geométricas',
  description:
    'Calcula áreas online de cuadrados, rectángulos, triángulos, círculos, trapecios, rombos y paralelogramos con fórmula y pasos.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title:       'Calculadora de Área Online | Figuras Geométricas',
    description: 'Calcula áreas online de cuadrados, rectángulos, triángulos, círculos, trapecios, rombos y paralelogramos con fórmula y pasos.',
    url:         CANONICAL,
    locale:      'es_ES',
    type:        'website',
  },
  twitter: {
    card:        'summary',
    title:       'Calculadora de Área Online | Figuras Geométricas',
    description: 'Calcula áreas online de cuadrados, rectángulos, triángulos, círculos, trapecios, rombos y paralelogramos con fórmula y pasos.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadora de Área Online | Figuras Geométricas',
      description: 'Calculadora de área para cuadrado, rectángulo, triángulo, círculo, trapecio, paralelogramo y rombo con fórmula y procedimiento.',
      inLanguage: 'es',
      isPartOf:   { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',          item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Geometría',             item: 'https://calculadoramatematica.com/calculadoras/geometria' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Área',   item: CANONICAL },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id':   `${CANONICAL}#app`,
      name:    'Calculadora de Área Online',
      url:     CANONICAL,
      description: 'Calcula el área de cuadrado, rectángulo, triángulo, círculo, trapecio, paralelogramo y rombo. Muestra fórmula, procedimiento y resultado.',
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
          name: '¿Qué es una calculadora de área?',
          acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que calcula la superficie de figuras planas a partir de sus medidas. Esta calculadora soporta siete figuras: cuadrado, rectángulo, triángulo, círculo, trapecio, paralelogramo y rombo.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué figuras puedo calcular?',
          acceptedAnswer: { '@type': 'Answer', text: 'Puedes calcular el área de cuadrado, rectángulo, triángulo, círculo (usando el radio), trapecio (dos bases y altura), paralelogramo y rombo (dos diagonales).' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre área y perímetro?',
          acceptedAnswer: { '@type': 'Answer', text: 'El área mide la superficie interior de la figura, expresada en unidades cuadradas (cm², m²). El perímetro mide la longitud del contorno, expresado en unidades lineales (cm, m).' },
        },
        {
          '@type': 'Question',
          name: '¿Por qué el resultado aparece en unidades cuadradas?',
          acceptedAnswer: { '@type': 'Answer', text: 'Porque el área mide superficie en dos dimensiones. Al multiplicar dos longitudes, el resultado se expresa en la unidad elevada al cuadrado.' },
        },
        {
          '@type': 'Question',
          name: '¿Cómo calcular el área de un círculo?',
          acceptedAnswer: { '@type': 'Answer', text: 'Selecciona Círculo, introduce el radio y pulsa calcular. La fórmula aplicada es A = πr². Si conoces el diámetro, divídelo entre 2 para obtener el radio.' },
        },
        {
          '@type': 'Question',
          name: '¿Esta calculadora sirve para volumen?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Esta herramienta calcula áreas de figuras planas. Para cuerpos geométricos en 3D, usa la calculadora de volumen cuando esté disponible.' },
        },
      ],
    },
  ],
};

export default function CalculadoraAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <AreaHero />
      <AreaCalculator />
      <AreaHowTo />
      <AreaWhatIs />
      <AreaFormulas />
      <AreaExamples />
      <AreaUnidades />
      <AreaErrors />
      <AreaRelated />
      <AreaFAQ />
      <Footer />
    </>
  );
}
