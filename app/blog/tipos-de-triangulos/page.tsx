import type { Metadata } from 'next';
import { Header }                    from '@/components/Header';
import { Footer }                    from '@/components/Footer';
import { ArticuloTriangulosHero }    from '@/components/ArticuloTriangulosHero';
import { TriangulosContenido }       from '@/components/TriangulosContenido';
import { TriangulosRelacionadas }    from '@/components/TriangulosRelacionadas';
import { ArticuloTriangulosFAQ }     from '@/components/ArticuloTriangulosFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/tipos-de-triangulos';

export const metadata: Metadata = {
  title:       'Tipos de Triángulos y sus Fórmulas',
  description: 'Aprende los tipos de triángulos por lados y ángulos, sus fórmulas de área, perímetro, ejemplos y errores comunes.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Tipos de Triángulos y sus Fórmulas', description: 'Aprende los tipos de triángulos por lados y ángulos, sus fórmulas de área, perímetro, ejemplos y errores comunes.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Tipos de Triángulos y sus Fórmulas', description: 'Aprende los tipos de triángulos por lados y ángulos, sus fórmulas de área, perímetro, ejemplos y errores comunes.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Tipos de triángulos y sus fórmulas', description: 'Aprende los tipos de triángulos por lados y ángulos, sus fórmulas de área, perímetro, ejemplos y errores comunes.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Tipos de triángulos', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function TiposDeTriangulosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloTriangulosHero />
        <TriangulosContenido />
        <TriangulosRelacionadas />
        <ArticuloTriangulosFAQ />
      </main>
      <Footer />
    </>
  );
}
