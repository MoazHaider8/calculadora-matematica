import type { Metadata } from 'next';
import { Header }                  from '@/components/Header';
import { Footer }                  from '@/components/Footer';
import { ArticuloMediaModaHero }   from '@/components/ArticuloMediaModaHero';
import { MediaModaContenido }      from '@/components/MediaModaContenido';
import { MediaModaRelacionadas }   from '@/components/MediaModaRelacionadas';
import { ArticuloMediaModaFAQ }    from '@/components/ArticuloMediaModaFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/media-mediana-moda-diferencias';

export const metadata: Metadata = {
  title:       'Media, Mediana y Moda: Diferencias y Ejemplos',
  description: 'Conoce la diferencia entre media, mediana y moda, cuándo usar cada medida y ejemplos claros de tendencia central.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Media, Mediana y Moda: Diferencias y Ejemplos', description: 'Conoce la diferencia entre media, mediana y moda, cuándo usar cada medida y ejemplos claros de tendencia central.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Media, Mediana y Moda: Diferencias y Ejemplos', description: 'Conoce la diferencia entre media, mediana y moda, cuándo usar cada medida y ejemplos claros de tendencia central.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Media, mediana y moda: diferencias y ejemplos', description: 'Conoce la diferencia entre media, mediana y moda, cuándo usar cada medida y ejemplos claros de tendencia central.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Media, mediana y moda', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function MediaMedianaMoDAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloMediaModaHero />
        <MediaModaContenido />
        <MediaModaRelacionadas />
        <ArticuloMediaModaFAQ />
      </main>
      <Footer />
    </>
  );
}
