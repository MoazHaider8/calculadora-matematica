import type { Metadata } from 'next';
import { Header }               from '@/components/Header';
import { Footer }               from '@/components/Footer';
import { ArticuloVolumenHero }  from '@/components/ArticuloVolumenHero';
import { VolumenContenido }     from '@/components/VolumenContenido';
import { VolumenRelacionadas }  from '@/components/VolumenRelacionadas';
import { ArticuloVolumenFAQ }   from '@/components/ArticuloVolumenFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/formulas-de-volumen';

export const metadata: Metadata = {
  title:       'Fórmulas de Volumen Más Usadas',
  description: 'Aprende fórmulas de volumen para cubo, prisma, cilindro, cono, esfera y pirámide con ejemplos y unidades cúbicas.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Fórmulas de Volumen Más Usadas', description: 'Aprende fórmulas de volumen para cubo, prisma, cilindro, cono, esfera y pirámide con ejemplos y unidades cúbicas.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Fórmulas de Volumen Más Usadas', description: 'Aprende fórmulas de volumen para cubo, prisma, cilindro, cono, esfera y pirámide con ejemplos y unidades cúbicas.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Fórmulas de volumen más usadas', description: 'Aprende fórmulas de volumen para cubo, prisma, cilindro, cono, esfera y pirámide con ejemplos y unidades cúbicas.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Fórmulas de volumen', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function FormulasDeVolumenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloVolumenHero />
        <VolumenContenido />
        <VolumenRelacionadas />
        <ArticuloVolumenFAQ />
      </main>
      <Footer />
    </>
  );
}
