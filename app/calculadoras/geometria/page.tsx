import type { Metadata } from 'next';
import { Header }              from '@/components/Header';
import { Footer }              from '@/components/Footer';
import { GeometriaHero }       from '@/components/GeometriaHero';
import { GeometriaTools }      from '@/components/GeometriaTools';
import { GeometriaWhatIs }     from '@/components/GeometriaWhatIs';
import { GeometriaWhenToUse }  from '@/components/GeometriaWhenToUse';
import { GeometriaConcepts }   from '@/components/GeometriaConcepts';
import { GeometriaRelated }    from '@/components/GeometriaRelated';
import { HubRelatedCategories } from '@/components/HubRelatedCategories';
import { GeometriaFAQ }        from '@/components/GeometriaFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/geometria';

export const metadata: Metadata = {
  title: 'Calculadoras de Geometría Online: Áreas, Triángulos y Más',
  description:
    'Calcula áreas, volúmenes, triángulos, círculos y el teorema de Pitágoras. Cada herramienta muestra fórmulas y pasos para revisar el resultado fácilmente.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title:       'Calculadoras de Geometría Online: Áreas, Triángulos y Más',
    description: 'Calcula áreas, volúmenes, triángulos, círculos y el teorema de Pitágoras. Cada herramienta muestra fórmulas y pasos para revisar el resultado fácilmente.',
    url:         CANONICAL,
    locale:      'es_ES',
    type:        'website',
  },
  twitter: {
    card:        'summary',
    title:       'Calculadoras de Geometría Online: Áreas, Triángulos y Más',
    description: 'Calcula áreas, volúmenes, triángulos, círculos y el teorema de Pitágoras. Cada herramienta muestra fórmulas y pasos para revisar el resultado fácilmente.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadoras de Geometría Online: Áreas, Triángulos y Más',
      description: 'Categoría de calculadoras de geometría: área, volumen, triángulos, círculos y teorema de Pitágoras.',
      inLanguage: 'es',
      isPartOf:   { '@id': 'https://calculadoramatematica.com/calculadoras' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',        item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',  item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Geometría',     item: CANONICAL },
      ],
    },
    {
      '@type': 'ItemList',
      '@id':   `${CANONICAL}#tools`,
      name:    'Calculadoras de geometría',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Calculadora de Área',      url: `${CANONICAL}/calculadora-de-area` },
        { '@type': 'ListItem', position: 2, name: 'Calculadora de Volumen',   url: `${CANONICAL}/calculadora-de-volumen` },
        { '@type': 'ListItem', position: 3, name: 'Calculadora de Triángulos', url: `${CANONICAL}/calculadora-de-triangulos` },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Círculos',  url: `${CANONICAL}/calculadora-de-circulos` },
        { '@type': 'ListItem', position: 5, name: 'Calculadora de Pitágoras', url: `${CANONICAL}/calculadora-de-pitagoras` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué herramientas incluye esta categoría?',
          acceptedAnswer: { '@type': 'Answer', text: 'Esta categoría incluye cinco calculadoras: Calculadora de Área, Calculadora de Volumen, Calculadora de Triángulos, Calculadora de Círculos y Calculadora de Pitágoras. Estarán disponibles próximamente.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué calculadora debo usar para calcular superficies?',
          acceptedAnswer: { '@type': 'Answer', text: 'Para calcular la superficie de figuras planas como cuadrados, rectángulos, triángulos o círculos, usa la Calculadora de Área. Para calcular el volumen de cuerpos como cubos o cilindros, usa la Calculadora de Volumen.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre área y volumen?',
          acceptedAnswer: { '@type': 'Answer', text: 'El área mide la superficie bidimensional de una figura plana, expresada en unidades al cuadrado. El volumen mide el espacio tridimensional que ocupa un cuerpo geométrico, expresado en unidades cúbicas.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué calculadora sirve para triángulos rectángulos?',
          acceptedAnswer: { '@type': 'Answer', text: 'La Calculadora de Pitágoras se centra en el teorema a² + b² = c² para obtener hipotenusa o catetos. La Calculadora de Triángulos resolverá medidas generales de cualquier tipo de triángulo.' },
        },
        {
          '@type': 'Question',
          name: '¿Puedo calcular radio, diámetro y circunferencia?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sí. La Calculadora de Círculos calculará radio, diámetro, área y circunferencia a partir del dato que introduzcas. Usa las fórmulas A = πr² y C = 2πr.' },
        },
        {
          '@type': 'Question',
          name: '¿Estas herramientas sirven para tareas escolares?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sí. Las calculadoras de geometría están pensadas para estudiantes de educación primaria, secundaria y bachillerato que trabajan con figuras geométricas, áreas, volúmenes y el teorema de Pitágoras.' },
        },
      ],
    },
  ],
};

export default function GeometriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <GeometriaHero />
      <GeometriaTools />
      <GeometriaWhatIs />
      <GeometriaWhenToUse />
      <GeometriaConcepts />
      <GeometriaRelated />
      <HubRelatedCategories current="geometria" />
      <GeometriaFAQ />
      <Footer />
    </>
  );
}
