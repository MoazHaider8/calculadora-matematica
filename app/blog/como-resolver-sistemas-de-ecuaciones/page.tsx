import type { Metadata } from 'next';
import { Header }                      from '@/components/Header';
import { Footer }                      from '@/components/Footer';
import { ArticuloSistemasArtHero }     from '@/components/ArticuloSistemasArtHero';
import { SistemasArtContenido }        from '@/components/SistemasArtContenido';
import { SistemasArtRelacionadas }     from '@/components/SistemasArtRelacionadas';
import { ArticuloSistemasArtFAQ }      from '@/components/ArticuloSistemasArtFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/como-resolver-sistemas-de-ecuaciones';

export const metadata: Metadata = {
  title:       'Cómo Resolver Sistemas de Ecuaciones',
  description: 'Aprende a resolver sistemas de ecuaciones por sustitución, reducción e igualación con ejemplos paso a paso y errores frecuentes.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Cómo Resolver Sistemas de Ecuaciones', description: 'Aprende a resolver sistemas de ecuaciones por sustitución, reducción e igualación con ejemplos paso a paso y errores frecuentes.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Cómo Resolver Sistemas de Ecuaciones', description: 'Aprende a resolver sistemas de ecuaciones por sustitución, reducción e igualación con ejemplos paso a paso y errores frecuentes.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Cómo resolver sistemas de ecuaciones', description: 'Aprende a resolver sistemas de ecuaciones por sustitución, reducción e igualación con ejemplos paso a paso y errores frecuentes.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Sistemas de ecuaciones', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function ComoResolverSistemasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloSistemasArtHero />
        <SistemasArtContenido />
        <SistemasArtRelacionadas />
        <ArticuloSistemasArtFAQ />
      </main>
      <Footer />
    </>
  );
}
