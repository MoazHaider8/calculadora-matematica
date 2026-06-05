import type { Metadata } from 'next';
import { Header }                  from '@/components/Header';
import { Footer }                  from '@/components/Footer';
import { ArticuloFracArtHero }     from '@/components/ArticuloFracArtHero';
import { FracArtContenido }        from '@/components/FracArtContenido';
import { FracArtRelacionadas }     from '@/components/FracArtRelacionadas';
import { ArticuloFracArtFAQ }      from '@/components/ArticuloFracArtFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/como-sumar-restar-fracciones';

export const metadata: Metadata = {
  title:       'Cómo Sumar y Restar Fracciones',
  description: 'Aprende a sumar y restar fracciones con igual y distinto denominador, cómo calcular el MCM y simplificar el resultado.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Cómo Sumar y Restar Fracciones', description: 'Aprende a sumar y restar fracciones con igual y distinto denominador, cómo calcular el MCM y simplificar el resultado.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Cómo Sumar y Restar Fracciones', description: 'Aprende a sumar y restar fracciones con igual y distinto denominador, cómo calcular el MCM y simplificar el resultado.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Cómo sumar y restar fracciones', description: 'Aprende a sumar y restar fracciones con igual y distinto denominador, cómo calcular el MCM y simplificar el resultado.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Fracciones', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function ComoSumarRestarFraccionesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloFracArtHero />
        <FracArtContenido />
        <FracArtRelacionadas />
        <ArticuloFracArtFAQ />
      </main>
      <Footer />
    </>
  );
}
