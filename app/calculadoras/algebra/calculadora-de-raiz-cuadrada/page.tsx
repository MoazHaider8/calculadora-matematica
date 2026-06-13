import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RaizCuadradaHero } from '@/components/RaizCuadradaHero';
import { RaizCuadradaCalculator } from '@/components/RaizCuadradaCalculator';
import { RaizCuadradaHowTo } from '@/components/RaizCuadradaHowTo';
import { RaizCuadradaWhatIs } from '@/components/RaizCuadradaWhatIs';
import { RaizCuadradaExactDecimal } from '@/components/RaizCuadradaExactDecimal';
import { RaizCuadradaExamples } from '@/components/RaizCuadradaExamples';
import { RaizCuadradaPerfectSquares } from '@/components/RaizCuadradaPerfectSquares';
import { RaizCuadradaErrors } from '@/components/RaizCuadradaErrors';
import { RaizCuadradaRelated } from '@/components/RaizCuadradaRelated';
import { RaizCuadradaFAQ } from '@/components/RaizCuadradaFAQ';

export const metadata: Metadata = {
  title: { absolute: 'Calculadora de Raíz Cuadrada: Resultado Exacto y Decimal' },
  description:
    'Calcula la raíz cuadrada online con resultado exacto y decimal. Obtén la simplificación del radical y comprobación paso a paso. Herramienta gratuita en español.',
  alternates: {
    canonical: 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raiz-cuadrada',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadora de Raíz Cuadrada: Resultado Exacto y Decimal',
    description:
      'Calcula la raíz cuadrada online con resultado exacto y decimal. Obtén la simplificación del radical y comprobación paso a paso. Herramienta gratuita en español.',
    url: 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raiz-cuadrada',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Calculadora de Raíz Cuadrada: Resultado Exacto y Decimal',
    description:
      'Calcula la raíz cuadrada online con resultado exacto y decimal. Obtén la simplificación del radical y comprobación paso a paso. Herramienta gratuita en español.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raiz-cuadrada',
      url: 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raiz-cuadrada',
      name: 'Calculadora de Raíz Cuadrada Online | Exacta y Decimal',
      description: 'Calcula raíces cuadradas online. Obtén resultado exacto, decimal, simplificación del radical y comprobación paso a paso.',
      inLanguage: 'es',
      isPartOf: { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raiz-cuadrada#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raiz-cuadrada#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                       item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',                 item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Álgebra',                      item: 'https://calculadoramatematica.com/calculadoras/algebra' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Raíz Cuadrada', item: 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raiz-cuadrada' },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raiz-cuadrada#app',
      name: 'Calculadora de Raíz Cuadrada Online',
      url: 'https://calculadoramatematica.com/calculadoras/algebra/calculadora-de-raiz-cuadrada',
      description: 'Calcula raíz cuadrada exacta, decimal o simplificada. Incluye comprobación y verificación de raíces propuestas.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'All',
      inLanguage: 'es',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué es una calculadora de raíz cuadrada?', acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que calcula el número que elevado al cuadrado produce el radicando. Por ejemplo, √25 = 5 porque 5² = 25.' } },
        { '@type': 'Question', name: '¿Cómo se calcula la raíz cuadrada de un número?', acceptedAnswer: { '@type': 'Answer', text: 'Se busca el número que multiplicado por sí mismo produce el radicando. Para cuadrados perfectos el resultado es exacto. Para otros números se muestra la aproximación decimal.' } },
        { '@type': 'Question', name: '¿Qué es un cuadrado perfecto?', acceptedAnswer: { '@type': 'Answer', text: 'Un cuadrado perfecto es un número entero con raíz cuadrada exacta entera. Los primeros son 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.' } },
        { '@type': 'Question', name: '¿Qué pasa si el número no tiene raíz exacta?', acceptedAnswer: { '@type': 'Answer', text: 'Cuando no es un cuadrado perfecto, la calculadora muestra la aproximación decimal con diez cifras y, si es posible, la forma simplificada del radical.' } },
        { '@type': 'Question', name: '¿Puedo calcular la raíz cuadrada de un número negativo?', acceptedAnswer: { '@type': 'Answer', text: 'En los números reales la raíz cuadrada de un número negativo no existe. La calculadora mostrará un mensaje indicando que no hay resultado real.' } },
        { '@type': 'Question', name: '¿Qué diferencia hay entre esta herramienta y la calculadora de raíces?', acceptedAnswer: { '@type': 'Answer', text: 'Esta herramienta se enfoca solo en raíz cuadrada. La calculadora de raíces permite trabajar con raíz cúbica, cuarta y raíces con índice personalizado.' } },
      ],
    },
  ],
};

export default function CalculadoraDeRaizCuadradaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <RaizCuadradaHero />
      <RaizCuadradaCalculator />
      <RaizCuadradaHowTo />
      <RaizCuadradaWhatIs />
      <RaizCuadradaExactDecimal />
      <RaizCuadradaExamples />
      <RaizCuadradaPerfectSquares />
      <RaizCuadradaErrors />
      <RaizCuadradaRelated />
      <RaizCuadradaFAQ />
      <Footer />
    </>
  );
}
