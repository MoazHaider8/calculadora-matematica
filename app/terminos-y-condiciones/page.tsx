import type { Metadata } from 'next';
import { Header }                    from '@/components/Header';
import { Footer }                    from '@/components/Footer';
import { TerminosHero }              from '@/components/TerminosHero';
import { TerminosIntroYAceptacion }  from '@/components/TerminosIntroYAceptacion';
import { TerminosUso }               from '@/components/TerminosUso';
import { TerminosEducativo }         from '@/components/TerminosEducativo';
import { TerminosPropiedad }         from '@/components/TerminosPropiedad';
import { TerminosCambios }           from '@/components/TerminosCambios';
import { TerminosEnlaces }           from '@/components/TerminosEnlaces';

const CANONICAL = 'https://calculadoramatematica.com/terminos-y-condiciones';

export const metadata: Metadata = {
  title:       'Términos y Condiciones | Calculadora Matemática',
  description: 'Consulta los términos de uso de Calculadora Matemática, sus herramientas online, contenido educativo, responsabilidades y limitaciones.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'Términos y Condiciones | Calculadora Matemática',
    description: 'Consulta los términos de uso de Calculadora Matemática, sus herramientas online, contenido educativo, responsabilidades y limitaciones.',
    url:         CANONICAL,
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Términos y Condiciones | Calculadora Matemática',
    description: 'Consulta los términos de uso de Calculadora Matemática, sus herramientas online, contenido educativo, responsabilidades y limitaciones.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type':      'WebPage',
      '@id':        CANONICAL,
      url:          CANONICAL,
      name:         'Términos y Condiciones | Calculadora Matemática',
      description:  'Consulta los términos de uso de Calculadora Matemática, sus herramientas online, contenido educativo, responsabilidades y limitaciones.',
      inLanguage:   'es',
      breadcrumb:   { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                 item: 'https://calculadoramatematica.com/' },
        { '@type': 'ListItem', position: 2, name: 'Términos y Condiciones', item: CANONICAL },
      ],
    },
    {
      '@type':    'WebSite',
      '@id':      'https://calculadoramatematica.com#website',
      url:        'https://calculadoramatematica.com',
      name:       'Calculadora Matemática',
      inLanguage: 'es',
    },
  ],
};

export default function TerminosYCondicionesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <TerminosHero />
        <TerminosIntroYAceptacion />
        <TerminosUso />
        <TerminosEducativo />
        <TerminosPropiedad />
        <TerminosCambios />
        <TerminosEnlaces />
      </main>
      <Footer />
    </>
  );
}
