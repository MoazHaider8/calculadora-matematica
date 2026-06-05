import type { Metadata } from 'next';
import { Header }                    from '@/components/Header';
import { Footer }                    from '@/components/Footer';
import { ArticuloVectorArtHero }     from '@/components/ArticuloVectorArtHero';
import { VectorArtContenido }        from '@/components/VectorArtContenido';
import { VectorArtRelacionadas }     from '@/components/VectorArtRelacionadas';
import { ArticuloVectorArtFAQ }      from '@/components/ArticuloVectorArtFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/que-es-un-vector';

export const metadata: Metadata = {
  title:       'Qué es un Vector en Matemáticas',
  description: 'Aprende qué es un vector, cómo calcular su módulo, las operaciones fundamentales y qué significa el producto escalar.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Qué es un Vector en Matemáticas', description: 'Aprende qué es un vector, cómo calcular su módulo, las operaciones fundamentales y qué significa el producto escalar.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Qué es un Vector en Matemáticas', description: 'Aprende qué es un vector, cómo calcular su módulo, las operaciones fundamentales y qué significa el producto escalar.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Qué es un vector en matemáticas', description: 'Aprende qué es un vector, cómo calcular su módulo, las operaciones fundamentales y qué significa el producto escalar.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Qué es un vector', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function QueEsUnVectorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloVectorArtHero />
        <VectorArtContenido />
        <VectorArtRelacionadas />
        <ArticuloVectorArtFAQ />
      </main>
      <Footer />
    </>
  );
}
