import type { Metadata } from 'next';
import { Header }                from '@/components/Header';
import { Footer }                from '@/components/Footer';
import { ProbabilidadHero }      from '@/components/ProbabilidadHero';
import { ProbabilidadCalculator } from '@/components/ProbabilidadCalculator';
import { ProbabilidadHowTo }     from '@/components/ProbabilidadHowTo';
import { ProbabilidadWhatIs }    from '@/components/ProbabilidadWhatIs';
import { ProbabilidadConceptos } from '@/components/ProbabilidadConceptos';
import { ProbabilidadExamples }  from '@/components/ProbabilidadExamples';
import { ProbabilidadErrors }    from '@/components/ProbabilidadErrors';
import { ProbabilidadRelated }   from '@/components/ProbabilidadRelated';
import { ProbabilidadFAQ }       from '@/components/ProbabilidadFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/estadistica/calculadora-de-probabilidad';

export const metadata: Metadata = {
  title: { absolute: 'Calculadora de Probabilidad Online: Simple y Compuesta' },
  description:
    'Calcula probabilidad de eventos simples, complementarios, unión e intersección en español. Introduce los casos favorables y posibles, obtén fracción y decimal.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title:       'Calculadora de Probabilidad Online: Simple y Compuesta',
    description: 'Calcula probabilidad de eventos simples, complementarios, unión e intersección en español. Introduce los casos favorables y posibles, obtén fracción y decimal.',
    url:         CANONICAL,
    locale:      'es_ES',
    type:        'website',
  },
  twitter: {
    card:        'summary',
    title:       'Calculadora de Probabilidad Online: Simple y Compuesta',
    description: 'Calcula probabilidad de eventos simples, complementarios, unión e intersección en español. Introduce los casos favorables y posibles, obtén fracción y decimal.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadora de Probabilidad Online | Estadística',
      description: 'Calculadora de probabilidad: simple, complementaria, unión, intersección y al menos uno en varios intentos.',
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
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Probabilidad',  item: CANONICAL },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id':   `${CANONICAL}#app`,
      name:    'Calculadora de Probabilidad Online',
      url:     CANONICAL,
      description: 'Calcula probabilidad simple, complementaria, unión, intersección y probabilidad de al menos un evento en n intentos.',
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
          name: '¿Qué es una calculadora de probabilidad?',
          acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que calcula la probabilidad de un evento o combinación de eventos a partir de valores numéricos. Esta calculadora soporta probabilidad simple, complemento, unión, intersección y al menos uno en varios intentos.' },
        },
        {
          '@type': 'Question',
          name: '¿Cómo se calcula la probabilidad simple?',
          acceptedAnswer: { '@type': 'Answer', text: 'Se divide el número de casos favorables entre el número total de casos posibles. Por ejemplo, si hay 3 casos favorables de 10 posibles, P(A) = 3/10 = 0.3.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué es el complemento de un evento?',
          acceptedAnswer: { '@type': 'Answer', text: "El complemento de A es la probabilidad de que A no ocurra. Se calcula como P(A') = 1 − P(A). La suma de un evento y su complemento siempre es 1." },
        },
        {
          '@type': 'Question',
          name: '¿Cuándo se usa la unión de eventos?',
          acceptedAnswer: { '@type': 'Answer', text: 'Se usa cuando quieres calcular la probabilidad de que ocurra A, o B, o ambos. La fórmula es P(A ∪ B) = P(A) + P(B) − P(A ∩ B).' },
        },
        {
          '@type': 'Question',
          name: '¿Qué significa que dos eventos sean independientes?',
          acceptedAnswer: { '@type': 'Answer', text: 'Dos eventos son independientes cuando la ocurrencia de uno no afecta la probabilidad del otro. En ese caso, P(A ∩ B) = P(A) × P(B). Esta calculadora asume independencia en el modo de intersección.' },
        },
        {
          '@type': 'Question',
          name: '¿Esta calculadora calcula probabilidad condicional?',
          acceptedAnswer: { '@type': 'Answer', text: 'Esta herramienta calcula los tipos de probabilidad más habituales en educación básica. La probabilidad condicional P(A|B) requiere datos adicionales y no está incluida en esta versión.' },
        },
      ],
    },
  ],
};

export default function CalculadoraProbabilidadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <ProbabilidadHero />
      <ProbabilidadCalculator />
      <ProbabilidadHowTo />
      <ProbabilidadWhatIs />
      <ProbabilidadConceptos />
      <ProbabilidadExamples />
      <ProbabilidadErrors />
      <ProbabilidadRelated />
      <ProbabilidadFAQ />
      <Footer />
    </>
  );
}
