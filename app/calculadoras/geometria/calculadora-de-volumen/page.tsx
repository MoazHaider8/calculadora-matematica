import type { Metadata } from 'next';
import { Header }           from '@/components/Header';
import { Footer }           from '@/components/Footer';
import { VolumenHero }      from '@/components/VolumenHero';
import { VolumenCalculator } from '@/components/VolumenCalculator';
import { VolumenHowTo }     from '@/components/VolumenHowTo';
import { VolumenWhatIs }    from '@/components/VolumenWhatIs';
import { VolumenFormulas }  from '@/components/VolumenFormulas';
import { VolumenExamples }  from '@/components/VolumenExamples';
import { VolumenUnidades }  from '@/components/VolumenUnidades';
import { VolumenErrors }    from '@/components/VolumenErrors';
import { VolumenRelated }   from '@/components/VolumenRelated';
import { VolumenFAQ }       from '@/components/VolumenFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/geometria/calculadora-de-volumen';

export const metadata: Metadata = {
  title: { absolute: 'Calculadora de Volumen Online: Cubo, Cilindro y Esfera' },
  description:
    'Calcula el volumen de cubo, prisma rectangular, cilindro, cono, esfera, pirámide y prisma triangular online. Revisa la fórmula y el procedimiento en español.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title:       'Calculadora de Volumen Online: Cubo, Cilindro y Esfera',
    description: 'Calcula el volumen de cubo, prisma rectangular, cilindro, cono, esfera, pirámide y prisma triangular online. Revisa la fórmula y el procedimiento en español.',
    url:         CANONICAL,
    locale:      'es_ES',
    type:        'website',
  },
  twitter: {
    card:        'summary',
    title:       'Calculadora de Volumen Online: Cubo, Cilindro y Esfera',
    description: 'Calcula el volumen de cubo, prisma rectangular, cilindro, cono, esfera, pirámide y prisma triangular online. Revisa la fórmula y el procedimiento en español.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadora de Volumen Online | Cuerpos Geométricos',
      description: 'Calculadora de volumen para cubo, prisma rectangular, cilindro, cono, esfera, pirámide y prisma triangular con fórmula y procedimiento.',
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
        { '@type': 'ListItem', position: 3, name: 'Geometría',               item: 'https://calculadoramatematica.com/calculadoras/geometria' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Volumen',  item: CANONICAL },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id':   `${CANONICAL}#app`,
      name:    'Calculadora de Volumen Online',
      url:     CANONICAL,
      description: 'Calcula el volumen de cubo, prisma rectangular, cilindro, cono, esfera, pirámide y prisma triangular. Muestra fórmula, procedimiento y resultado.',
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
          name: '¿Qué es una calculadora de volumen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que calcula el espacio que ocupa un cuerpo geométrico a partir de sus medidas. Esta calculadora soporta siete cuerpos: cubo, prisma rectangular, cilindro, cono, esfera, pirámide y prisma triangular.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué cuerpos geométricos puedo calcular?',
          acceptedAnswer: { '@type': 'Answer', text: 'Puedes calcular el volumen de cubo, prisma rectangular, cilindro, cono, esfera, pirámide (con área de la base) y prisma triangular (con base, altura del triángulo y longitud).' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre área y volumen?',
          acceptedAnswer: { '@type': 'Answer', text: 'El área mide la superficie de una figura plana en 2D, expresada en unidades cuadradas (cm²). El volumen mide el espacio de un cuerpo en 3D, expresado en unidades cúbicas (cm³).' },
        },
        {
          '@type': 'Question',
          name: '¿Por qué el resultado aparece en unidades cúbicas?',
          acceptedAnswer: { '@type': 'Answer', text: 'Porque el volumen mide espacio en tres dimensiones. Al multiplicar tres longitudes, el resultado se expresa en la unidad elevada al cubo.' },
        },
        {
          '@type': 'Question',
          name: '¿Cómo calcular el volumen de un cilindro?',
          acceptedAnswer: { '@type': 'Answer', text: 'Selecciona Cilindro, introduce el radio y la altura y pulsa calcular. La fórmula aplicada es V = πr²h. Si conoces el diámetro, divídelo entre 2 para obtener el radio.' },
        },
        {
          '@type': 'Question',
          name: '¿Esta calculadora sirve para calcular área?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Esta herramienta calcula volúmenes de cuerpos geométricos. Para superficies de figuras planas, usa la calculadora de área.' },
        },
      ],
    },
  ],
};

export default function CalculadoraVolumenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <VolumenHero />
      <VolumenCalculator />
      <VolumenHowTo />
      <VolumenWhatIs />
      <VolumenFormulas />
      <VolumenExamples />
      <VolumenUnidades />
      <VolumenErrors />
      <VolumenRelated />
      <VolumenFAQ />
      <Footer />
    </>
  );
}
