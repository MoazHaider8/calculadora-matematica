import type { Metadata } from 'next';
import { Header }                from '@/components/Header';
import { Footer }                from '@/components/Footer';
import { ArticuloIntegralHero }  from '@/components/ArticuloIntegralHero';
import { IntegralContenido }     from '@/components/IntegralContenido';
import { IntegralRelacionadas }  from '@/components/IntegralRelacionadas';
import { ArticuloIntegralFAQ }   from '@/components/ArticuloIntegralFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/que-es-una-integral';

export const metadata: Metadata = {
  title:       'Qué es una Integral y Cómo se Interpreta',
  description: 'Aprende qué es una integral, cómo se interpreta, diferencia entre integral definida e indefinida, ejemplos y errores comunes.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Qué es una Integral y Cómo se Interpreta', description: 'Aprende qué es una integral, cómo se interpreta, diferencia entre integral definida e indefinida, ejemplos y errores comunes.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Qué es una Integral y Cómo se Interpreta', description: 'Aprende qué es una integral, cómo se interpreta, diferencia entre integral definida e indefinida, ejemplos y errores comunes.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Qué es una integral y cómo se interpreta', description: 'Aprende qué es una integral, cómo se interpreta, diferencia entre integral definida e indefinida, ejemplos y errores comunes.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Qué es una integral', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function QueEsUnaIntegralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloIntegralHero />
        <IntegralContenido />
        <IntegralRelacionadas />
        <ArticuloIntegralFAQ />
      </main>
      <Footer />
    </>
  );
}
