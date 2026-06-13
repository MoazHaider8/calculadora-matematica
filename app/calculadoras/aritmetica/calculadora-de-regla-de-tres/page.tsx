import type { Metadata } from 'next';
import { Header }               from '@/components/Header';
import { Footer }               from '@/components/Footer';
import { ReglaTresHero }        from '@/components/ReglaTresHero';
import { ReglaTresCalculator }  from '@/components/ReglaTresCalculator';
import { ReglaTresHowTo }       from '@/components/ReglaTresHowTo';
import { ReglaTresWhatIs }      from '@/components/ReglaTresWhatIs';
import { ReglaTresTypes }       from '@/components/ReglaTresTypes';
import { ReglaTresExamples }    from '@/components/ReglaTresExamples';
import { ReglaTresWhenToUse }   from '@/components/ReglaTresWhenToUse';
import { ReglaTresErrors }      from '@/components/ReglaTresErrors';
import { ReglaTresRelated }     from '@/components/ReglaTresRelated';
import { ReglaTresFAQ }         from '@/components/ReglaTresFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-regla-de-tres';

export const metadata: Metadata = {
  title: { absolute: 'Calculadora de Regla de Tres: Directa e Inversa Online' },
  description:
    'Resuelve la regla de tres directa e inversa online en español. Introduce tres valores, obtén el cuarto, la fórmula y el procedimiento explicado paso a paso.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title:       'Calculadora de Regla de Tres: Directa e Inversa Online',
    description: 'Resuelve la regla de tres directa e inversa online en español. Introduce tres valores, obtén el cuarto, la fórmula y el procedimiento explicado paso a paso.',
    url:         CANONICAL,
    locale:      'es_ES',
    type:        'website',
  },
  twitter: {
    card:        'summary',
    title:       'Calculadora de Regla de Tres: Directa e Inversa Online',
    description: 'Resuelve la regla de tres directa e inversa online en español. Introduce tres valores, obtén el cuarto, la fórmula y el procedimiento explicado paso a paso.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadora de Regla de Tres: Directa e Inversa Online',
      description: 'Calculadora de regla de tres directa e inversa. Encuentra el valor X, muestra fórmula y procedimiento.',
      inLanguage: 'es',
      isPartOf:   { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                        item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',                  item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Aritmética',                    item: 'https://calculadoramatematica.com/calculadoras/aritmetica' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Regla de Tres',  item: CANONICAL },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id':   `${CANONICAL}#app`,
      name:    'Calculadora de Regla de Tres Online',
      url:     CANONICAL,
      description: 'Resuelve proporciones con regla de tres directa (X = B×C/A) e inversa (X = A×B/C). Muestra fórmula, procedimiento e interpretación.',
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
          name: '¿Qué es una calculadora de regla de tres?',
          acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que resuelve proporciones encontrando el valor desconocido X a partir de tres valores conocidos A, B y C. Admite regla de tres directa e inversa.' },
        },
        {
          '@type': 'Question',
          name: '¿Cuándo se usa la regla de tres directa?',
          acceptedAnswer: { '@type': 'Answer', text: 'Se usa cuando ambas magnitudes aumentan o disminuyen a la vez. Por ejemplo, si 3 metros cuestan 15, 7 metros cuestan X. Fórmula: X = B × C / A.' },
        },
        {
          '@type': 'Question',
          name: '¿Cuándo se usa la regla de tres inversa?',
          acceptedAnswer: { '@type': 'Answer', text: 'Se usa cuando una magnitud aumenta mientras la otra disminuye. Por ejemplo, más trabajadores implica menos días. Fórmula: X = A × B / C.' },
        },
        {
          '@type': 'Question',
          name: '¿Cómo se calcula el valor X?',
          acceptedAnswer: { '@type': 'Answer', text: 'En regla directa: X = B × C / A. En regla inversa: X = A × B / C. Ambas se basan en el producto cruzado de la proporción.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre regla de tres y porcentaje?',
          acceptedAnswer: { '@type': 'Answer', text: 'La regla de tres trabaja con proporciones entre magnitudes. El porcentaje expresa una parte de 100. Para descuentos o variaciones porcentuales, usa la calculadora de porcentajes.' },
        },
        {
          '@type': 'Question',
          name: '¿Esta calculadora sirve para promedios?',
          acceptedAnswer: { '@type': 'Answer', text: 'Esta herramienta resuelve proporciones con regla de tres. Para calcular medias o promedios, usa la calculadora de promedio cuando esté disponible.' },
        },
      ],
    },
  ],
};

export default function CalculadoraReglaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <ReglaTresHero />
      <ReglaTresCalculator />
      <ReglaTresHowTo />
      <ReglaTresWhatIs />
      <ReglaTresTypes />
      <ReglaTresExamples />
      <ReglaTresWhenToUse />
      <ReglaTresErrors />
      <ReglaTresRelated />
      <ReglaTresFAQ />
      <Footer />
    </>
  );
}
