import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MatrizInversaHero } from '@/components/MatrizInversaHero';
import { MatrizInversaCalculator } from '@/components/MatrizInversaCalculator';
import { MatrizInversaHowTo } from '@/components/MatrizInversaHowTo';
import { MatrizInversaWhatIs } from '@/components/MatrizInversaWhatIs';
import { MatrizInversaMethods } from '@/components/MatrizInversaMethods';
import { MatrizInversaExamples } from '@/components/MatrizInversaExamples';
import { MatrizInversaSingular } from '@/components/MatrizInversaSingular';
import { MatrizInversaErrors } from '@/components/MatrizInversaErrors';
import { MatrizInversaRelated } from '@/components/MatrizInversaRelated';
import { MatrizInversaFAQ } from '@/components/MatrizInversaFAQ';

export const metadata: Metadata = {
  title: { absolute: 'Calculadora de Matriz Inversa: Gauss-Jordan y Adjunta' },
  description:
    'Calcula la matriz inversa de matrices 2x2 y 3x3 online en español. Obtén A⁻¹, el determinante, el método Gauss-Jordan y la verificación completa paso a paso.',
  alternates: {
    canonical: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadora de Matriz Inversa: Gauss-Jordan y Adjunta',
    description:
      'Calcula la matriz inversa de matrices 2x2 y 3x3 online en español. Obtén A⁻¹, el determinante, el método Gauss-Jordan y la verificación completa paso a paso.',
    url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Calculadora de Matriz Inversa: Gauss-Jordan y Adjunta',
    description:
      'Calcula la matriz inversa de matrices 2x2 y 3x3 online en español. Obtén A⁻¹, el determinante, el método Gauss-Jordan y la verificación completa paso a paso.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa',
      url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa',
      name: 'Calculadora de Matriz Inversa: Gauss-Jordan y Adjunta',
      description: 'Calcula la matriz inversa de matrices 2x2 y 3x3 online en español. Obtén A⁻¹, el determinante, el método Gauss-Jordan y la verificación completa paso a paso.',
      inLanguage: 'es',
      isPartOf: { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                       item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',                 item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Matrices y Vectores',          item: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Matriz Inversa', item: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa' },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa#app',
      name: 'Calculadora de Matriz Inversa Online',
      url: 'https://calculadoramatematica.com/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa',
      description: 'Calcula A⁻¹ para matrices 2×2 y 3×3 con fórmula directa y Gauss Jordan. Detecta matrices singulares y verifica A · A⁻¹ = I.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'All',
      inLanguage: 'es',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué es una calculadora de matriz inversa?', acceptedAnswer: { '@type': 'Answer', text: 'Es una herramienta que calcula A⁻¹ para matrices cuadradas 2×2 y 3×3, mostrando determinante, método y verificación A · A⁻¹ = I.' } },
        { '@type': 'Question', name: '¿Qué matrices tienen inversa?', acceptedAnswer: { '@type': 'Answer', text: 'Solo las matrices cuadradas con determinante distinto de cero. Las matrices singulares (det = 0) no tienen inversa.' } },
        { '@type': 'Question', name: '¿Qué significa que una matriz sea singular?', acceptedAnswer: { '@type': 'Answer', text: 'Una matriz singular tiene determinante igual a cero y no tiene inversa. Al menos una fila o columna es dependiente de otra.' } },
        { '@type': 'Question', name: '¿Cómo se calcula la inversa de una matriz 2×2?', acceptedAnswer: { '@type': 'Answer', text: 'A⁻¹ = (1/det) · [[d,−b],[−c,a]] donde det = ad − bc. Solo válido si det ≠ 0.' } },
        { '@type': 'Question', name: '¿Qué relación hay entre determinante e inversa?', acceptedAnswer: { '@type': 'Answer', text: 'Si det(A) ≠ 0, la matriz es invertible. Si det(A) = 0, la matriz es singular y no tiene inversa.' } },
        { '@type': 'Question', name: '¿Esta calculadora resuelve sistemas de ecuaciones?', acceptedAnswer: { '@type': 'Answer', text: 'Esta herramienta calcula A⁻¹. Para resolver sistemas lineales directamente, usa la Calculadora de Sistemas de Ecuaciones.' } },
      ],
    },
  ],
};

export default function CalculadoraDeMatrizInversaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <MatrizInversaHero />
      <MatrizInversaCalculator />
      <MatrizInversaHowTo />
      <MatrizInversaWhatIs />
      <MatrizInversaMethods />
      <MatrizInversaExamples />
      <MatrizInversaSingular />
      <MatrizInversaErrors />
      <MatrizInversaRelated />
      <MatrizInversaFAQ />
      <Footer />
    </>
  );
}
