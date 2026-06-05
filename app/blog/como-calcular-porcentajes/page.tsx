import type { Metadata } from 'next';
import { Header }                    from '@/components/Header';
import { Footer }                    from '@/components/Footer';
import { ArticuloPorcentajesHero }   from '@/components/ArticuloPorcentajesHero';
import { PorcentajesRespuestaRapida } from '@/components/PorcentajesRespuestaRapida';
import { PorcentajesQueEs }          from '@/components/PorcentajesQueEs';
import { PorcentajesFormula }        from '@/components/PorcentajesFormula';
import { PorcentajesDeUnaCantidad }  from '@/components/PorcentajesDeUnaCantidad';
import { PorcentajesQueRepresenta }  from '@/components/PorcentajesQueRepresenta';
import { PorcentajesDescuentos }     from '@/components/PorcentajesDescuentos';
import { PorcentajesAumentos }       from '@/components/PorcentajesAumentos';
import { PorcentajesDisminuciones }  from '@/components/PorcentajesDisminuciones';
import { PorcentajesEjemplos }       from '@/components/PorcentajesEjemplos';
import { PorcentajesErrores }        from '@/components/PorcentajesErrores';
import { PorcentajesCuandoUsar }     from '@/components/PorcentajesCuandoUsar';
import { PorcentajesRelacionadas }   from '@/components/PorcentajesRelacionadas';
import { ArticuloPorcentajesFAQ }    from '@/components/ArticuloPorcentajesFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/como-calcular-porcentajes';

export const metadata: Metadata = {
  title:       'Cómo Calcular Porcentajes Paso a Paso',
  description: 'Aprende cómo calcular porcentajes con fórmulas, ejemplos claros, descuentos, aumentos y errores comunes al usar el tanto por ciento.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'Cómo Calcular Porcentajes Paso a Paso',
    description: 'Aprende cómo calcular porcentajes con fórmulas, ejemplos claros, descuentos, aumentos y errores comunes al usar el tanto por ciento.',
    url:         CANONICAL,
    type:        'article',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Cómo Calcular Porcentajes Paso a Paso',
    description: 'Aprende cómo calcular porcentajes con fórmulas, ejemplos claros, descuentos, aumentos y errores comunes al usar el tanto por ciento.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type':     'BlogPosting',
      '@id':       CANONICAL,
      headline:    'Cómo calcular porcentajes paso a paso',
      description: 'Aprende cómo calcular porcentajes con fórmulas, ejemplos claros, descuentos, aumentos y errores comunes al usar el tanto por ciento.',
      url:         CANONICAL,
      inLanguage:  'es',
      datePublished: '2026-06-05',
      dateModified:  '2026-06-05',
      author: {
        '@type': 'Organization',
        name:    'Calculadora Matemática',
        url:     'https://calculadoramatematica.com',
      },
      publisher: {
        '@type': 'Organization',
        name:    'Calculadora Matemática',
        url:     'https://calculadoramatematica.com',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id':   CANONICAL,
      },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',                    item: 'https://calculadoramatematica.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog',                      item: 'https://calculadoramatematica.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Cómo calcular porcentajes', item: CANONICAL },
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

export default function ComoCalarPorcentajesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ArticuloPorcentajesHero />
        <PorcentajesRespuestaRapida />
        <PorcentajesQueEs />
        <PorcentajesFormula />
        <PorcentajesDeUnaCantidad />
        <PorcentajesQueRepresenta />
        <PorcentajesDescuentos />
        <PorcentajesAumentos />
        <PorcentajesDisminuciones />
        <PorcentajesEjemplos />
        <PorcentajesErrores />
        <PorcentajesCuandoUsar />
        <PorcentajesRelacionadas />
        <ArticuloPorcentajesFAQ />
      </main>
      <Footer />
    </>
  );
}
