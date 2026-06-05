import type { Metadata } from 'next';
import { Header }                    from '@/components/Header';
import { Footer }                    from '@/components/Footer';
import { ArticuloEcLinCuadHero }     from '@/components/ArticuloEcLinCuadHero';
import { EcLinCuadContenido }        from '@/components/EcLinCuadContenido';
import { EcLinCuadRelacionadas }     from '@/components/EcLinCuadRelacionadas';
import { ArticuloEcLinCuadFAQ }      from '@/components/ArticuloEcLinCuadFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/ecuaciones-lineales-y-cuadraticas';

export const metadata: Metadata = {
  title:       'Ecuaciones Lineales y Cuadráticas',
  description: 'Aprende qué es una ecuación lineal y cuadrática, sus diferencias, cómo resolverlas y cuándo usar la fórmula cuadrática.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Ecuaciones Lineales y Cuadráticas', description: 'Aprende qué es una ecuación lineal y cuadrática, sus diferencias, cómo resolverlas y cuándo usar la fórmula cuadrática.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Ecuaciones Lineales y Cuadráticas', description: 'Aprende qué es una ecuación lineal y cuadrática, sus diferencias, cómo resolverlas y cuándo usar la fórmula cuadrática.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Ecuaciones lineales y cuadráticas', description: 'Aprende qué es una ecuación lineal y cuadrática, sus diferencias, cómo resolverlas y cuándo usar la fórmula cuadrática.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Ecuaciones lineales y cuadráticas', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function EcuacionesLinealesYCuadraticasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloEcLinCuadHero />
        <EcLinCuadContenido />
        <EcLinCuadRelacionadas />
        <ArticuloEcLinCuadFAQ />
      </main>
      <Footer />
    </>
  );
}
