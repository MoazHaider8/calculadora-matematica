import type { Metadata } from 'next';
import { Header }                  from '@/components/Header';
import { Footer }                  from '@/components/Footer';
import { ArticuloPromedioHero }    from '@/components/ArticuloPromedioHero';
import { PromedioContenido }       from '@/components/PromedioContenido';
import { PromedioArtPractica }     from '@/components/PromedioArtPractica';
import { PromedioArtRelacionadas } from '@/components/PromedioArtRelacionadas';
import { ArticuloPromedioFAQ }     from '@/components/ArticuloPromedioFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/como-sacar-promedio';

export const metadata: Metadata = {
  title:       'Cómo Sacar Promedio Paso a Paso',
  description: 'Aprende cómo sacar promedio con fórmula, ejemplos de notas, valores, media simple, media ponderada y errores comunes.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Cómo Sacar Promedio Paso a Paso', description: 'Aprende cómo sacar promedio con fórmula, ejemplos de notas, valores, media simple, media ponderada y errores comunes.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Cómo Sacar Promedio Paso a Paso', description: 'Aprende cómo sacar promedio con fórmula, ejemplos de notas, valores, media simple, media ponderada y errores comunes.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Cómo sacar promedio paso a paso', description: 'Aprende cómo sacar promedio con fórmula, ejemplos de notas, valores, media simple, media ponderada y errores comunes.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Cómo sacar promedio', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function ComoSacarPromedioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloPromedioHero />
        <PromedioContenido />
        <PromedioArtPractica />
        <PromedioArtRelacionadas />
        <ArticuloPromedioFAQ />
      </main>
      <Footer />
    </>
  );
}
