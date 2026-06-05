import type { Metadata } from 'next';
import { Header }                from '@/components/Header';
import { Footer }                from '@/components/Footer';
import { PrivacidadHero }        from '@/components/PrivacidadHero';
import { PrivacidadIntroYDatos } from '@/components/PrivacidadIntroYDatos';
import { PrivacidadUso }         from '@/components/PrivacidadUso';
import { PrivacidadAnalitica }   from '@/components/PrivacidadAnalitica';
import { PrivacidadTerceros }    from '@/components/PrivacidadTerceros';
import { PrivacidadDerechos }    from '@/components/PrivacidadDerechos';
import { PrivacidadEnlaces }     from '@/components/PrivacidadEnlaces';

const CANONICAL = 'https://calculadoramatematica.com/politica-de-privacidad';

export const metadata: Metadata = {
  title:       'Política de Privacidad | Calculadora Matemática',
  description: 'Consulta cómo Calculadora Matemática trata datos, formularios, cookies, analítica y privacidad al usar nuestras herramientas online.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'Política de Privacidad | Calculadora Matemática',
    description: 'Consulta cómo Calculadora Matemática trata datos, formularios, cookies, analítica y privacidad al usar nuestras herramientas online.',
    url:         CANONICAL,
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Política de Privacidad | Calculadora Matemática',
    description: 'Consulta cómo Calculadora Matemática trata datos, formularios, cookies, analítica y privacidad al usar nuestras herramientas online.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type':      'WebPage',
      '@id':        CANONICAL,
      url:          CANONICAL,
      name:         'Política de Privacidad | Calculadora Matemática',
      description:  'Consulta cómo Calculadora Matemática trata datos, formularios, cookies, analítica y privacidad al usar nuestras herramientas online.',
      inLanguage:   'es',
      breadcrumb:   { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                 item: 'https://calculadoramatematica.com/' },
        { '@type': 'ListItem', position: 2, name: 'Política de Privacidad', item: CANONICAL },
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

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <PrivacidadHero />
        <PrivacidadIntroYDatos />
        <PrivacidadUso />
        <PrivacidadAnalitica />
        <PrivacidadTerceros />
        <PrivacidadDerechos />
        <PrivacidadEnlaces />
      </main>
      <Footer />
    </>
  );
}
