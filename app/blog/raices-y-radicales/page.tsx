import type { Metadata } from 'next';
import { Header }                from '@/components/Header';
import { Footer }                from '@/components/Footer';
import { ArticuloRaicesHero }    from '@/components/ArticuloRaicesHero';
import { RaicesContenido }       from '@/components/RaicesContenido';
import { RaicesRelacionadas }    from '@/components/RaicesRelacionadas';
import { ArticuloRaicesFAQ }     from '@/components/ArticuloRaicesFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/raices-y-radicales';

export const metadata: Metadata = {
  title:       'Raíces y Radicales Explicados con Ejemplos',
  description: 'Aprende qué son raíces y radicales, cómo simplificarlos, diferencia entre raíz exacta y decimal, con ejemplos claros.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Raíces y Radicales Explicados con Ejemplos', description: 'Aprende qué son raíces y radicales, cómo simplificarlos, diferencia entre raíz exacta y decimal, con ejemplos claros.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Raíces y Radicales Explicados con Ejemplos', description: 'Aprende qué son raíces y radicales, cómo simplificarlos, diferencia entre raíz exacta y decimal, con ejemplos claros.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Raíces y radicales explicados con ejemplos', description: 'Aprende qué son raíces y radicales, cómo simplificarlos, diferencia entre raíz exacta y decimal, con ejemplos claros.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Raíces y radicales', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function RaicesYRadicalesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloRaicesHero />
        <RaicesContenido />
        <RaicesRelacionadas />
        <ArticuloRaicesFAQ />
      </main>
      <Footer />
    </>
  );
}
