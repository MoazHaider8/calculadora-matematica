import type { Metadata } from 'next';
import { Header }                    from '@/components/Header';
import { Footer }                    from '@/components/Footer';
import { ArticuloPolinomiosHero }    from '@/components/ArticuloPolinomiosHero';
import { PolinomiosArtContenido }    from '@/components/PolinomiosArtContenido';
import { PolinomiosArtRelacionadas } from '@/components/PolinomiosArtRelacionadas';
import { ArticuloPolinomiosFAQ }     from '@/components/ArticuloPolinomiosFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/que-son-los-polinomios';

export const metadata: Metadata = {
  title:       'Qué son los Polinomios y Cómo se Resuelven',
  description: 'Aprende qué son los polinomios, sus términos, grado, coeficientes, operaciones básicas, ejemplos y errores comunes.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Qué son los Polinomios y Cómo se Resuelven', description: 'Aprende qué son los polinomios, sus términos, grado, coeficientes, operaciones básicas, ejemplos y errores comunes.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Qué son los Polinomios y Cómo se Resuelven', description: 'Aprende qué son los polinomios, sus términos, grado, coeficientes, operaciones básicas, ejemplos y errores comunes.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Qué son los polinomios y cómo se resuelven', description: 'Aprende qué son los polinomios, sus términos, grado, coeficientes, operaciones básicas, ejemplos y errores comunes.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Qué son los polinomios', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function QueSonLosPolinomiosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloPolinomiosHero />
        <PolinomiosArtContenido />
        <PolinomiosArtRelacionadas />
        <ArticuloPolinomiosFAQ />
      </main>
      <Footer />
    </>
  );
}
