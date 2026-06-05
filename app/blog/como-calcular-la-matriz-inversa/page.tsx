import type { Metadata } from 'next';
import { Header }                    from '@/components/Header';
import { Footer }                    from '@/components/Footer';
import { ArticuloMatInvArtHero }     from '@/components/ArticuloMatInvArtHero';
import { MatInvArtContenido }        from '@/components/MatInvArtContenido';
import { MatInvArtRelacionadas }     from '@/components/MatInvArtRelacionadas';
import { ArticuloMatInvArtFAQ }      from '@/components/ArticuloMatInvArtFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/como-calcular-la-matriz-inversa';

export const metadata: Metadata = {
  title:       'Cómo Calcular la Matriz Inversa',
  description: 'Aprende qué es la matriz inversa, cuándo existe, la fórmula para matrices 2×2 y el método de Gauss-Jordan con ejemplos.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Cómo Calcular la Matriz Inversa', description: 'Aprende qué es la matriz inversa, cuándo existe, la fórmula para matrices 2×2 y el método de Gauss-Jordan con ejemplos.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Cómo Calcular la Matriz Inversa', description: 'Aprende qué es la matriz inversa, cuándo existe, la fórmula para matrices 2×2 y el método de Gauss-Jordan con ejemplos.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Cómo calcular la matriz inversa', description: 'Aprende qué es la matriz inversa, cuándo existe, la fórmula para matrices 2×2 y el método de Gauss-Jordan con ejemplos.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Matriz inversa', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function ComoCalcularMatrizInversaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloMatInvArtHero />
        <MatInvArtContenido />
        <MatInvArtRelacionadas />
        <ArticuloMatInvArtFAQ />
      </main>
      <Footer />
    </>
  );
}
