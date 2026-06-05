import type { Metadata } from 'next';
import { Header }                   from '@/components/Header';
import { Footer }                   from '@/components/Footer';
import { ArticuloDetsArtHero }      from '@/components/ArticuloDetsArtHero';
import { DetsArtContenido }         from '@/components/DetsArtContenido';
import { DetsArtRelacionadas }      from '@/components/DetsArtRelacionadas';
import { ArticuloDetsArtFAQ }       from '@/components/ArticuloDetsArtFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/como-calcular-determinantes';

export const metadata: Metadata = {
  title:       'Cómo Calcular el Determinante de una Matriz',
  description: 'Aprende a calcular determinantes de matrices 2×2 y 3×3, la regla de Sarrus, propiedades principales y para qué sirve el determinante.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Cómo Calcular el Determinante de una Matriz', description: 'Aprende a calcular determinantes de matrices 2×2 y 3×3, la regla de Sarrus, propiedades principales y para qué sirve el determinante.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Cómo Calcular el Determinante de una Matriz', description: 'Aprende a calcular determinantes de matrices 2×2 y 3×3, la regla de Sarrus, propiedades principales y para qué sirve el determinante.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Cómo calcular el determinante de una matriz', description: 'Aprende a calcular determinantes de matrices 2×2 y 3×3, la regla de Sarrus, propiedades principales y para qué sirve el determinante.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Determinantes', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function ComoCalcularDeterminantesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloDetsArtHero />
        <DetsArtContenido />
        <DetsArtRelacionadas />
        <ArticuloDetsArtFAQ />
      </main>
      <Footer />
    </>
  );
}
