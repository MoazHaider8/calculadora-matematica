import type { Metadata } from 'next';
import { Header }                from '@/components/Header';
import { Footer }                from '@/components/Footer';
import { ArticuloLogsHero }      from '@/components/ArticuloLogsHero';
import { LogsContenido }         from '@/components/LogsContenido';
import { LogsRelacionadas }      from '@/components/LogsRelacionadas';
import { ArticuloLogsFAQ }       from '@/components/ArticuloLogsFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/reglas-de-logaritmos';

export const metadata: Metadata = {
  title:       'Reglas de Logaritmos con Ejemplos',
  description: 'Aprende las reglas de logaritmos: producto, cociente, potencia y cambio de base, con ejemplos claros y errores comunes.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Reglas de Logaritmos con Ejemplos', description: 'Aprende las reglas de logaritmos: producto, cociente, potencia y cambio de base, con ejemplos claros y errores comunes.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Reglas de Logaritmos con Ejemplos', description: 'Aprende las reglas de logaritmos: producto, cociente, potencia y cambio de base, con ejemplos claros y errores comunes.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Reglas de logaritmos explicadas con ejemplos', description: 'Aprende las reglas de logaritmos: producto, cociente, potencia y cambio de base, con ejemplos claros y errores comunes.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Reglas de logaritmos', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function ReglasDeLosLogaritmosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloLogsHero />
        <LogsContenido />
        <LogsRelacionadas />
        <ArticuloLogsFAQ />
      </main>
      <Footer />
    </>
  );
}
