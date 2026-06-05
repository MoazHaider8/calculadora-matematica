import type { Metadata } from 'next';
import { Header }                  from '@/components/Header';
import { Footer }                  from '@/components/Footer';
import { ArticuloAlgSimplHero }    from '@/components/ArticuloAlgSimplHero';
import { AlgSimplContenido }       from '@/components/AlgSimplContenido';
import { AlgSimplRelacionadas }    from '@/components/AlgSimplRelacionadas';
import { ArticuloAlgSimplFAQ }     from '@/components/ArticuloAlgSimplFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/como-simplificar-expresiones-algebraicas';

export const metadata: Metadata = {
  title:       'Cómo Simplificar Expresiones Algebraicas',
  description: 'Aprende cómo simplificar expresiones algebraicas combinando términos semejantes, expandiendo, factorizando y revisando errores.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Cómo Simplificar Expresiones Algebraicas', description: 'Aprende cómo simplificar expresiones algebraicas combinando términos semejantes, expandiendo, factorizando y revisando errores.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Cómo Simplificar Expresiones Algebraicas', description: 'Aprende cómo simplificar expresiones algebraicas combinando términos semejantes, expandiendo, factorizando y revisando errores.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Cómo simplificar expresiones algebraicas', description: 'Aprende cómo simplificar expresiones algebraicas combinando términos semejantes, expandiendo, factorizando y revisando errores.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Simplificar expresiones algebraicas', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function ComoSimplificarExpresionesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloAlgSimplHero />
        <AlgSimplContenido />
        <AlgSimplRelacionadas />
        <ArticuloAlgSimplFAQ />
      </main>
      <Footer />
    </>
  );
}
