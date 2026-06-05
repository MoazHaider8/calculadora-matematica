import type { Metadata } from 'next';
import { Header }                      from '@/components/Header';
import { Footer }                      from '@/components/Footer';
import { AvisoHero }                   from '@/components/AvisoHero';
import { AvisoIntroEIdentificacion }   from '@/components/AvisoIntroEIdentificacion';
import { AvisoFinalidadYUso }          from '@/components/AvisoFinalidadYUso';
import { AvisoExactitudYResponsabilidad } from '@/components/AvisoExactitudYResponsabilidad';
import { AvisoPropiedadYEnlaces }      from '@/components/AvisoPropiedadYEnlaces';
import { AvisoRelacionYContacto }      from '@/components/AvisoRelacionYContacto';
import { AvisoEnlaces }                from '@/components/AvisoEnlaces';

const CANONICAL = 'https://calculadoramatematica.com/aviso-legal';

export const metadata: Metadata = {
  title:       'Aviso Legal | Calculadora Matemática',
  description: 'Consulta el aviso legal de Calculadora Matemática, el uso educativo de sus herramientas, límites de responsabilidad y condiciones generales.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'Aviso Legal | Calculadora Matemática',
    description: 'Consulta el aviso legal de Calculadora Matemática, el uso educativo de sus herramientas, límites de responsabilidad y condiciones generales.',
    url:         CANONICAL,
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Aviso Legal | Calculadora Matemática',
    description: 'Consulta el aviso legal de Calculadora Matemática, el uso educativo de sus herramientas, límites de responsabilidad y condiciones generales.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type':      'WebPage',
      '@id':        CANONICAL,
      url:          CANONICAL,
      name:         'Aviso Legal | Calculadora Matemática',
      description:  'Consulta el aviso legal de Calculadora Matemática, el uso educativo de sus herramientas, límites de responsabilidad y condiciones generales.',
      inLanguage:   'es',
      breadcrumb:   { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',      item: 'https://calculadoramatematica.com/' },
        { '@type': 'ListItem', position: 2, name: 'Aviso Legal', item: CANONICAL },
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

export default function AvisoLegalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <AvisoHero />
        <AvisoIntroEIdentificacion />
        <AvisoFinalidadYUso />
        <AvisoExactitudYResponsabilidad />
        <AvisoPropiedadYEnlaces />
        <AvisoRelacionYContacto />
        <AvisoEnlaces />
      </main>
      <Footer />
    </>
  );
}
