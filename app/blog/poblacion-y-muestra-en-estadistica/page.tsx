import type { Metadata } from 'next';
import { Header }                      from '@/components/Header';
import { Footer }                      from '@/components/Footer';
import { ArticuloPobMuestraHero }      from '@/components/ArticuloPobMuestraHero';
import { PobMuestraContenido }         from '@/components/PobMuestraContenido';
import { PobMuestraRelacionadas }      from '@/components/PobMuestraRelacionadas';
import { ArticuloPobMuestraFAQ }       from '@/components/ArticuloPobMuestraFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/poblacion-y-muestra-en-estadistica';

export const metadata: Metadata = {
  title:       'Población y Muestra en Estadística',
  description: 'Aprende qué es población y muestra en estadística, cuándo usar N y n, y la diferencia entre parámetro y estadístico con ejemplos.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Población y Muestra en Estadística', description: 'Aprende qué es población y muestra en estadística, cuándo usar N y n, y la diferencia entre parámetro y estadístico con ejemplos.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Población y Muestra en Estadística', description: 'Aprende qué es población y muestra en estadística, cuándo usar N y n, y la diferencia entre parámetro y estadístico con ejemplos.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Qué es población y muestra en estadística', description: 'Aprende qué es población y muestra en estadística, cuándo usar N y n, y la diferencia entre parámetro y estadístico con ejemplos.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Población y muestra', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function PoblacionYMuestraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloPobMuestraHero />
        <PobMuestraContenido />
        <PobMuestraRelacionadas />
        <ArticuloPobMuestraFAQ />
      </main>
      <Footer />
    </>
  );
}
