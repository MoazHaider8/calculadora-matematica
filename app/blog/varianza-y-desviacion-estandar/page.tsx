import type { Metadata } from 'next';
import { Header }                from '@/components/Header';
import { Footer }                from '@/components/Footer';
import { ArticuloVarianzaHero }  from '@/components/ArticuloVarianzaHero';
import { VarianzaContenido }     from '@/components/VarianzaContenido';
import { VarianzaRelacionadas }  from '@/components/VarianzaRelacionadas';
import { ArticuloVarianzaFAQ }   from '@/components/ArticuloVarianzaFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/varianza-y-desviacion-estandar';

export const metadata: Metadata = {
  title:       'Varianza y Desviación Estándar: Diferencia',
  description: 'Aprende la diferencia entre varianza y desviación estándar, cómo se calculan, cómo interpretarlas y cuándo usar cada una.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Varianza y Desviación Estándar: Diferencia', description: 'Aprende la diferencia entre varianza y desviación estándar, cómo se calculan, cómo interpretarlas y cuándo usar cada una.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Varianza y Desviación Estándar: Diferencia', description: 'Aprende la diferencia entre varianza y desviación estándar, cómo se calculan, cómo interpretarlas y cuándo usar cada una.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Varianza y desviación estándar: diferencia y ejemplos', description: 'Aprende la diferencia entre varianza y desviación estándar, cómo se calculan, cómo interpretarlas y cuándo usar cada una.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Varianza y desviación estándar', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function VarianzaYDesviacionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloVarianzaHero />
        <VarianzaContenido />
        <VarianzaRelacionadas />
        <ArticuloVarianzaFAQ />
      </main>
      <Footer />
    </>
  );
}
