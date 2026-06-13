import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PorcentajesHero } from '@/components/PorcentajesHero';
import { PorcentajesCalculator } from '@/components/PorcentajesCalculator';
import { PorcentajesHowTo } from '@/components/PorcentajesHowTo';
import { PorcentajesWhatIs } from '@/components/PorcentajesWhatIs';
import { PorcentajesTipos } from '@/components/PorcentajesTipos';
import { PorcentajesExamples } from '@/components/PorcentajesExamples';
import { PorcentajesComparison } from '@/components/PorcentajesComparison';
import { PorcentajesErrors } from '@/components/PorcentajesErrors';
import { PorcentajesRelated } from '@/components/PorcentajesRelated';
import { PorcentajesFAQ } from '@/components/PorcentajesFAQ';

export const metadata: Metadata = {
  title: { absolute: 'Calculadora de Porcentajes Online: Descuentos y Variaciones' },
  description:
    'Calcula porcentajes online en español: obtén el % de un número, aplica descuentos, calcula aumentos, cambio porcentual y encuentra el valor total. Con pasos.',
  alternates: {
    canonical: 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-porcentajes',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Calculadora de Porcentajes Online: Descuentos y Variaciones',
    description:
      'Calcula porcentajes online en español: obtén el % de un número, aplica descuentos, calcula aumentos, cambio porcentual y encuentra el valor total. Con pasos.',
    url: 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-porcentajes',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Calculadora de Porcentajes Online: Descuentos y Variaciones',
    description:
      'Calcula porcentajes online en español: obtén el % de un número, aplica descuentos, calcula aumentos, cambio porcentual y encuentra el valor total. Con pasos.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-porcentajes',
      url: 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-porcentajes',
      name: 'Calculadora de Porcentajes Online: Descuentos y Variaciones',
      description: 'Calcula porcentajes online en español: obtén el % de un número, aplica descuentos, calcula aumentos, cambio porcentual y encuentra el valor total. Con pasos.',
      inLanguage: 'es',
      isPartOf: { '@id': 'https://calculadoramatematica.com' },
      breadcrumb: { '@id': 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-porcentajes#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-porcentajes#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                        item: 'https://calculadoramatematica.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculadoras',                  item: 'https://calculadoramatematica.com/calculadoras' },
        { '@type': 'ListItem', position: 3, name: 'Aritmética',                    item: 'https://calculadoramatematica.com/calculadoras/aritmetica' },
        { '@type': 'ListItem', position: 4, name: 'Calculadora de Porcentajes',    item: 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-porcentajes' },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-porcentajes#app',
      name: 'Calculadora de Porcentajes Online',
      url: 'https://calculadoramatematica.com/calculadoras/aritmetica/calculadora-de-porcentajes',
      description: 'Calcula porcentajes de números, descuentos, aumentos, cambio porcentual, qué porcentaje es una parte y el total a partir de una parte.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'All',
      inLanguage: 'es',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué es una calculadora de porcentajes?', acceptedAnswer: { '@type': 'Answer', text: 'Resuelve seis tipos de cálculos: porcentaje de un número, qué % es una parte, aumento, descuento, cambio porcentual y encontrar el total.' } },
        { '@type': 'Question', name: '¿Cómo se calcula el porcentaje de un número?', acceptedAnswer: { '@type': 'Answer', text: 'Número × porcentaje / 100. Por ejemplo, 25% de 200 = 200 × 25 / 100 = 50.' } },
        { '@type': 'Question', name: '¿Cómo calculo un descuento?', acceptedAnswer: { '@type': 'Answer', text: 'Introduce el precio original y el % de descuento. Resultado: precio - precio × descuento / 100.' } },
        { '@type': 'Question', name: '¿Cómo calculo un aumento porcentual?', acceptedAnswer: { '@type': 'Answer', text: 'Introduce el valor base y el % de aumento. Resultado: base + base × aumento / 100.' } },
        { '@type': 'Question', name: '¿Qué es el cambio porcentual?', acceptedAnswer: { '@type': 'Answer', text: 'Mide cuánto ha variado un valor: (final − inicial) / inicial × 100. Positivo = aumento, negativo = disminución.' } },
        { '@type': 'Question', name: '¿Esta calculadora sirve para fracciones?', acceptedAnswer: { '@type': 'Answer', text: 'No. Esta herramienta trabaja con porcentajes. Para fracciones usa la Calculadora de Fracciones.' } },
      ],
    },
  ],
};

export default function CalculadoraDePorcentajesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <PorcentajesHero />
      <PorcentajesCalculator />
      <PorcentajesHowTo />
      <PorcentajesWhatIs />
      <PorcentajesTipos />
      <PorcentajesExamples />
      <PorcentajesComparison />
      <PorcentajesErrors />
      <PorcentajesRelated />
      <PorcentajesFAQ />
      <Footer />
    </>
  );
}
