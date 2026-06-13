import type { Metadata } from 'next';
import { Header }               from '@/components/Header';
import { Footer }               from '@/components/Footer';
import { CientificaHero }       from '@/components/CientificaHero';
import { CientificaCalculator } from '@/components/CientificaCalculator';
import { CientificaHowTo }      from '@/components/CientificaHowTo';
import { CientificaWhatIs }     from '@/components/CientificaWhatIs';
import { CientificaFunctions }  from '@/components/CientificaFunctions';
import { CientificaExamples }   from '@/components/CientificaExamples';
import { CientificaAngulos }    from '@/components/CientificaAngulos';
import { CientificaErrors }     from '@/components/CientificaErrors';
import { CientificaRelated }    from '@/components/CientificaRelated';
import { CientificaFAQ }        from '@/components/CientificaFAQ';

const CANONICAL = 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-cientifica';

export const metadata: Metadata = {
  title: { absolute: 'Calculadora Científica Online: Trig, Log y Potencias' },
  description:
    'Usa la calculadora científica online en español. Incluye sin, cos, tan, logaritmos, raíces, potencias, constantes π y e, y cambio entre grados y radianes.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title:       'Calculadora Científica Online: Trig, Log y Potencias',
    description: 'Usa la calculadora científica online en español. Incluye sin, cos, tan, logaritmos, raíces, potencias, constantes π y e, y cambio entre grados y radianes.',
    url:         CANONICAL,
    locale:      'es_ES',
    type:        'website',
  },
  twitter: {
    card:        'summary',
    title:       'Calculadora Científica Online: Trig, Log y Potencias',
    description: 'Usa la calculadora científica online en español. Incluye sin, cos, tan, logaritmos, raíces, potencias, constantes π y e, y cambio entre grados y radianes.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':   CANONICAL,
      url:     CANONICAL,
      name:    'Calculadora Científica Online: Trig, Log y Potencias',
      description: 'Calculadora científica online con trigonometría, logaritmos, potencias, raíces, constantes π y e, y cambio entre grados y radianes.',
      inLanguage: 'es',
      isPartOf:   { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                   item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',             item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Aritmética',               item: 'https://calculadoramatematica.com/calculadoras/aritmetica' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora Científica',   item: CANONICAL },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id':   `${CANONICAL}#app`,
      name:    'Calculadora Científica Online',
      url:     CANONICAL,
      description: 'Calculadora científica con sin, cos, tan, log, ln, raíz cuadrada, potencias, π, e, paréntesis, grados y radianes.',
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
          name: '¿Qué es una calculadora científica?',
          acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que incluye funciones trigonométricas, logaritmos, potencias, raíces y constantes matemáticas como π y e, además de las cuatro operaciones básicas.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué funciones incluye esta calculadora?',
          acceptedAnswer: { '@type': 'Answer', text: 'Incluye sin, cos, tan, log, ln, raíz cuadrada, potencias, π, e, paréntesis, y las cuatro operaciones básicas. El modo angular cambia entre grados y radianes.' },
        },
        {
          '@type': 'Question',
          name: '¿Cuál es la diferencia entre grados y radianes?',
          acceptedAnswer: { '@type': 'Answer', text: 'Son dos formas de medir ángulos. En grados un círculo completo son 360°; en radianes son 2π rad. Los grados son habituales en educación básica y los radianes en cálculo avanzado.' },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre log y ln?',
          acceptedAnswer: { '@type': 'Answer', text: 'log usa base 10: log(100) = 2. ln usa base e: ln(e) = 1. Ambas solo admiten argumentos positivos.' },
        },
        {
          '@type': 'Question',
          name: '¿Puedo usar paréntesis en la calculadora?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sí. Los paréntesis controlan el orden de operaciones. (2 + 3) × 4 = 20, mientras que 2 + 3 × 4 = 14.' },
        },
        {
          '@type': 'Question',
          name: '¿Esta calculadora reemplaza a la de fracciones o porcentajes?',
          acceptedAnswer: { '@type': 'Answer', text: 'Esta herramienta sirve para cálculos científicos generales. Para operar fracciones o porcentajes con formatos específicos, usa las calculadoras dedicadas.' },
        },
      ],
    },
  ],
};

export default function CalculadoraCientificaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <CientificaHero />
      <CientificaCalculator />
      <CientificaHowTo />
      <CientificaWhatIs />
      <CientificaFunctions />
      <CientificaExamples />
      <CientificaAngulos />
      <CientificaErrors />
      <CientificaRelated />
      <CientificaFAQ />
      <Footer />
    </>
  );
}
