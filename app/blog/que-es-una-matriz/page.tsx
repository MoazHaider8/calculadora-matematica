import type { Metadata } from 'next';
import { Header }                    from '@/components/Header';
import { Footer }                    from '@/components/Footer';
import { ArticuloMatrizArtHero }     from '@/components/ArticuloMatrizArtHero';
import { MatrizArtContenido }        from '@/components/MatrizArtContenido';
import { MatrizArtRelacionadas }     from '@/components/MatrizArtRelacionadas';
import { ArticuloMatrizArtFAQ }      from '@/components/ArticuloMatrizArtFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/que-es-una-matriz';

export const metadata: Metadata = {
  title:       'Qué es una Matriz en Matemáticas',
  description: 'Aprende qué es una matriz, cómo se leen sus dimensiones, los tipos básicos y las operaciones fundamentales con matrices.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Qué es una Matriz en Matemáticas', description: 'Aprende qué es una matriz, cómo se leen sus dimensiones, los tipos básicos y las operaciones fundamentales con matrices.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Qué es una Matriz en Matemáticas', description: 'Aprende qué es una matriz, cómo se leen sus dimensiones, los tipos básicos y las operaciones fundamentales con matrices.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Qué es una matriz en matemáticas', description: 'Aprende qué es una matriz, cómo se leen sus dimensiones, los tipos básicos y las operaciones fundamentales con matrices.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Qué es una matriz', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function QueEsUnaMatrizPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloMatrizArtHero />
        <MatrizArtContenido />
        <MatrizArtRelacionadas />
        <ArticuloMatrizArtFAQ />
      </main>
      <Footer />
    </>
  );
}
