import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { FeaturedCalculators } from '@/components/FeaturedCalculators';
import { AreasSection } from '@/components/AreasSection';
import { DirectorySection } from '@/components/DirectorySection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { BlogPreviewSection } from '@/components/BlogPreviewSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { CtaBand } from '@/components/CtaBand';
import { AudienceSection } from '@/components/AudienceSection';

export const metadata: Metadata = {
  title: { absolute: 'Calculadoras Matemáticas Online: Resuelve Operaciones Claras' },
  description:
    'Usa calculadoras matemáticas online para resolver operaciones de álgebra, cálculo, estadística y geometría. Revisa fórmulas y consulta los pasos en español.',
  openGraph: {
    title: 'Calculadoras Matemáticas Online: Resuelve Operaciones Claras',
    description:
      'Usa calculadoras matemáticas online para resolver operaciones de álgebra, cálculo, estadística y geometría. Revisa fórmulas y consulta los pasos en español.',
    url: 'https://calculadoramatematica.com',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadoras Matemáticas Online: Resuelve Operaciones Claras',
    description:
      'Usa calculadoras matemáticas online para resolver operaciones de álgebra, cálculo, estadística y geometría. Revisa fórmulas y consulta los pasos en español.',
  },
};

const BASE = 'https://calculadoramatematica.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': BASE,
      url: BASE,
      name: 'Calculadora Matemática',
      description:
        'Calculadoras matemáticas online en español para cálculo, álgebra, matrices, aritmética, estadística y geometría.',
      inLanguage: 'es',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/buscar?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'ItemList',
      '@id': `${BASE}#blog-guides`,
      name: 'Guías matemáticas destacadas',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Qué es una integral y cómo calcularla',           url: `${BASE}/blog/que-es-una-integral` },
        { '@type': 'ListItem', position: 2, name: 'Cómo resolver ecuaciones paso a paso',            url: `${BASE}/blog/como-resolver-ecuaciones` },
        { '@type': 'ListItem', position: 3, name: 'Qué es una matriz y cómo operarla',              url: `${BASE}/blog/que-es-una-matriz` },
        { '@type': 'ListItem', position: 4, name: 'Cómo calcular porcentajes paso a paso',          url: `${BASE}/blog/como-calcular-porcentajes` },
        { '@type': 'ListItem', position: 5, name: 'Media, mediana y moda: diferencias y ejemplos',  url: `${BASE}/blog/media-mediana-moda-diferencias` },
        { '@type': 'ListItem', position: 6, name: 'Fórmulas de área de figuras geométricas',        url: `${BASE}/blog/formulas-de-area` },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué calculadoras están disponibles en la plataforma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La plataforma reúne más de treinta calculadoras organizadas en seis áreas: cálculo, álgebra, matrices y vectores, aritmética, estadística y geometría. Puedes verlas todas en calculadoramatematica.com/calculadoras.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué calculadora usar para integrales o derivadas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Para integrales y derivadas, usa las herramientas de la categoría de cálculo en calculadoramatematica.com/calculadoras/calculo. Incluye calculadoras de integrales, derivadas, límites, logaritmos y exponentes.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Las calculadoras muestran el procedimiento paso a paso?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La mayoría de las herramientas muestran el resultado con el procedimiento o las fórmulas aplicadas, no solo el número final. Esto facilita verificar y aprender el método.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo consultar guías matemáticas además de calculadoras?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. El blog en calculadoramatematica.com/blog incluye artículos sobre integrales, ecuaciones, fracciones, probabilidad, matrices, geometría y otros temas para complementar el uso de las calculadoras.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Todo el contenido está disponible en español?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Las categorías, los nombres de las calculadoras, los textos explicativos, las guías del blog y la navegación completa están escritos en español.',
          },
        },
      ],
    },
  ],
};

export default function Inicio() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="contenido-principal">
        <Hero />
        <TrustStrip />
        <AreasSection />
        <FeaturedCalculators />
        <HowItWorksSection />
        <DirectorySection />
        <BlogPreviewSection />
        <CtaBand />
        <AudienceSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
