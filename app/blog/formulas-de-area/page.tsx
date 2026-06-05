import type { Metadata } from 'next';
import { Header }             from '@/components/Header';
import { Footer }             from '@/components/Footer';
import { ArticuloAreaHero }   from '@/components/ArticuloAreaHero';
import { AreaContenido }      from '@/components/AreaContenido';
import { AreaRelacionadas }   from '@/components/AreaRelacionadas';
import { ArticuloAreaFAQ }    from '@/components/ArticuloAreaFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/formulas-de-area';

export const metadata: Metadata = {
  title:       'Fórmulas de Área de Figuras Geométricas',
  description: 'Repasa fórmulas de área para cuadrado, rectángulo, triángulo, círculo, trapecio, rombo y paralelogramo con ejemplos.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Fórmulas de Área de Figuras Geométricas', description: 'Repasa fórmulas de área para cuadrado, rectángulo, triángulo, círculo, trapecio, rombo y paralelogramo con ejemplos.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Fórmulas de Área de Figuras Geométricas', description: 'Repasa fórmulas de área para cuadrado, rectángulo, triángulo, círculo, trapecio, rombo y paralelogramo con ejemplos.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Fórmulas de área de figuras geométricas', description: 'Repasa fórmulas de área para cuadrado, rectángulo, triángulo, círculo, trapecio, rombo y paralelogramo con ejemplos.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Fórmulas de área', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function FormulasDeAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloAreaHero />
        <AreaContenido />
        <AreaRelacionadas />
        <ArticuloAreaFAQ />
      </main>
      <Footer />
    </>
  );
}
