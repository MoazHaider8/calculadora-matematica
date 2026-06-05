import type { Metadata } from 'next';
import { Header }                from '@/components/Header';
import { Footer }                from '@/components/Footer';
import { ArticuloCirculoHero }   from '@/components/ArticuloCirculoHero';
import { CirculoContenido }      from '@/components/CirculoContenido';
import { CirculoRelacionadas }   from '@/components/CirculoRelacionadas';
import { ArticuloCirculoFAQ }    from '@/components/ArticuloCirculoFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/area-y-circunferencia-del-circulo';

export const metadata: Metadata = {
  title:       'Área y Circunferencia del Círculo',
  description: 'Aprende cómo calcular área y circunferencia de un círculo usando radio, diámetro, fórmulas con π, ejemplos y errores comunes.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Área y Circunferencia del Círculo', description: 'Aprende cómo calcular área y circunferencia de un círculo usando radio, diámetro, fórmulas con π, ejemplos y errores comunes.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Área y Circunferencia del Círculo', description: 'Aprende cómo calcular área y circunferencia de un círculo usando radio, diámetro, fórmulas con π, ejemplos y errores comunes.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Cómo calcular área y circunferencia de un círculo', description: 'Aprende cómo calcular área y circunferencia de un círculo usando radio, diámetro, fórmulas con π, ejemplos y errores comunes.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Área y circunferencia del círculo', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function AreaYCircunferenciaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloCirculoHero />
        <CirculoContenido />
        <CirculoRelacionadas />
        <ArticuloCirculoFAQ />
      </main>
      <Footer />
    </>
  );
}
