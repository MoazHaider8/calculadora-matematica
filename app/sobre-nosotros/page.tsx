import type { Metadata } from 'next';
import { Header }          from '@/components/Header';
import { Footer }          from '@/components/Footer';
import { SobreHero }       from '@/components/SobreHero';
import { SobreQueEs }      from '@/components/SobreQueEs';
import { SobreAudience }   from '@/components/SobreAudience';
import { SobreCategorias } from '@/components/SobreCategorias';
import { SobreEnfoque }    from '@/components/SobreEnfoque';
import { SobreFormulas }   from '@/components/SobreFormulas';
import { SobreExplora }    from '@/components/SobreExplora';
import { SobreConfianza }  from '@/components/SobreConfianza';
import { SobreFAQ }        from '@/components/SobreFAQ';

const CANONICAL = 'https://calculadoramatematica.com/sobre-nosotros';

export const metadata: Metadata = {
  title:       'Sobre Calculadora Matemática',
  description: 'Conoce Calculadora Matemática, una plataforma en español con calculadoras online para cálculo, álgebra, aritmética, estadística y geometría.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'Sobre Calculadora Matemática',
    description: 'Conoce Calculadora Matemática, una plataforma en español con calculadoras online para cálculo, álgebra, aritmética, estadística y geometría.',
    url:         CANONICAL,
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Sobre Calculadora Matemática',
    description: 'Conoce Calculadora Matemática, una plataforma en español con calculadoras online para cálculo, álgebra, aritmética, estadística y geometría.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type':      'AboutPage',
      '@id':        CANONICAL,
      url:          CANONICAL,
      name:         'Sobre Calculadora Matemática',
      description:  'Conoce Calculadora Matemática, una plataforma en español con calculadoras online para cálculo, álgebra, aritmética, estadística y geometría.',
      inLanguage:   'es',
      breadcrumb:   { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',         item: 'https://calculadoramatematica.com/' },
        { '@type': 'ListItem', position: 2, name: 'Sobre nosotros', item: CANONICAL },
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

export default function SobreNosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <SobreHero />
        <SobreQueEs />
        <SobreAudience />
        <SobreCategorias />
        <SobreEnfoque />
        <SobreFormulas />
        <SobreExplora />
        <SobreConfianza />
        <SobreFAQ />
      </main>
      <Footer />
    </>
  );
}
