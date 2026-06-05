import type { Metadata } from 'next';
import { Header }                from '@/components/Header';
import { Footer }                from '@/components/Footer';
import { ArticuloExpHero }       from '@/components/ArticuloExpHero';
import { ExpContenido }          from '@/components/ExpContenido';
import { ExpRelacionadas }       from '@/components/ExpRelacionadas';
import { ArticuloExpFAQ }        from '@/components/ArticuloExpFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/reglas-de-exponentes';

export const metadata: Metadata = {
  title:       'Reglas de Exponentes y Potencias',
  description: 'Aprende reglas de exponentes: producto, cociente, potencia, exponente cero, negativo y fraccionario con ejemplos.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Reglas de Exponentes y Potencias', description: 'Aprende reglas de exponentes: producto, cociente, potencia, exponente cero, negativo y fraccionario con ejemplos.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Reglas de Exponentes y Potencias', description: 'Aprende reglas de exponentes: producto, cociente, potencia, exponente cero, negativo y fraccionario con ejemplos.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Reglas de exponentes y potencias', description: 'Aprende reglas de exponentes: producto, cociente, potencia, exponente cero, negativo y fraccionario con ejemplos.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Reglas de exponentes', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function ReglasDeExponentesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloExpHero />
        <ExpContenido />
        <ExpRelacionadas />
        <ArticuloExpFAQ />
      </main>
      <Footer />
    </>
  );
}
