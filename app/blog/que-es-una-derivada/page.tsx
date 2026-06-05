import type { Metadata } from 'next';
import { Header }                from '@/components/Header';
import { Footer }                from '@/components/Footer';
import { ArticuloDerivadaHero }  from '@/components/ArticuloDerivadaHero';
import { DerivadaContenido }     from '@/components/DerivadaContenido';
import { DerivadaRelacionadas }  from '@/components/DerivadaRelacionadas';
import { ArticuloDerivadaFAQ }   from '@/components/ArticuloDerivadaFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/que-es-una-derivada';

export const metadata: Metadata = {
  title:       'Qué es una Derivada y Para Qué Sirve',
  description: 'Aprende qué es una derivada, cómo se interpreta, reglas básicas, ejemplos sencillos y cuándo usar una calculadora de derivadas.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Qué es una Derivada y Para Qué Sirve', description: 'Aprende qué es una derivada, cómo se interpreta, reglas básicas, ejemplos sencillos y cuándo usar una calculadora de derivadas.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Qué es una Derivada y Para Qué Sirve', description: 'Aprende qué es una derivada, cómo se interpreta, reglas básicas, ejemplos sencillos y cuándo usar una calculadora de derivadas.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Qué es una derivada y para qué sirve', description: 'Aprende qué es una derivada, cómo se interpreta, reglas básicas, ejemplos sencillos y cuándo usar una calculadora de derivadas.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Qué es una derivada', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function QueEsUnaDerivadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloDerivadaHero />
        <DerivadaContenido />
        <DerivadaRelacionadas />
        <ArticuloDerivadaFAQ />
      </main>
      <Footer />
    </>
  );
}
