import type { Metadata } from 'next';
import { Header }                  from '@/components/Header';
import { Footer }                  from '@/components/Footer';
import { ArticuloBlogProbHero }    from '@/components/ArticuloBlogProbHero';
import { BlogProbContenido }       from '@/components/BlogProbContenido';
import { BlogProbRelacionadas }    from '@/components/BlogProbRelacionadas';
import { ArticuloBlogProbFAQ }     from '@/components/ArticuloBlogProbFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/que-es-la-probabilidad';

export const metadata: Metadata = {
  title:       'Qué es la Probabilidad y Cómo se Calcula',
  description: 'Aprende qué es la probabilidad, cómo calcular casos favorables y posibles, con ejemplos, fórmulas y errores comunes.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Qué es la Probabilidad y Cómo se Calcula', description: 'Aprende qué es la probabilidad, cómo calcular casos favorables y posibles, con ejemplos, fórmulas y errores comunes.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Qué es la Probabilidad y Cómo se Calcula', description: 'Aprende qué es la probabilidad, cómo calcular casos favorables y posibles, con ejemplos, fórmulas y errores comunes.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Qué es la probabilidad y cómo se calcula', description: 'Aprende qué es la probabilidad, cómo calcular casos favorables y posibles, con ejemplos, fórmulas y errores comunes.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Qué es la probabilidad', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function QueEsLaProbabilidadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloBlogProbHero />
        <BlogProbContenido />
        <BlogProbRelacionadas />
        <ArticuloBlogProbFAQ />
      </main>
      <Footer />
    </>
  );
}
