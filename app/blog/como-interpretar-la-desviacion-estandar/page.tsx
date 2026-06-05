import type { Metadata } from 'next';
import { Header }                    from '@/components/Header';
import { Footer }                    from '@/components/Footer';
import { ArticuloDesvEstHero }       from '@/components/ArticuloDesvEstHero';
import { DesvEstContenido }          from '@/components/DesvEstContenido';
import { DesvEstRelacionadas }       from '@/components/DesvEstRelacionadas';
import { ArticuloDesvEstFAQ }        from '@/components/ArticuloDesvEstFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/como-interpretar-la-desviacion-estandar';

export const metadata: Metadata = {
  title:       'Cómo Interpretar la Desviación Estándar',
  description: 'Aprende qué significa la desviación estándar, cómo interpretarla junto a la media y cuándo indica alta o baja dispersión.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Cómo Interpretar la Desviación Estándar', description: 'Aprende qué significa la desviación estándar, cómo interpretarla junto a la media y cuándo indica alta o baja dispersión.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Cómo Interpretar la Desviación Estándar', description: 'Aprende qué significa la desviación estándar, cómo interpretarla junto a la media y cuándo indica alta o baja dispersión.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Cómo interpretar la desviación estándar', description: 'Aprende qué significa la desviación estándar, cómo interpretarla junto a la media y cuándo indica alta o baja dispersión.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Desviación estándar', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function ComoInterpretarDesviacionEstandarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloDesvEstHero />
        <DesvEstContenido />
        <DesvEstRelacionadas />
        <ArticuloDesvEstFAQ />
      </main>
      <Footer />
    </>
  );
}
