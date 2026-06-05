import type { Metadata } from 'next';
import { Header }                from '@/components/Header';
import { Footer }                from '@/components/Footer';
import { ArticuloEcuaHero }      from '@/components/ArticuloEcuaHero';
import { EcuaContenido }         from '@/components/EcuaContenido';
import { EcuaRelacionadas }      from '@/components/EcuaRelacionadas';
import { ArticuloEcuaFAQ }       from '@/components/ArticuloEcuaFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/como-resolver-ecuaciones';

export const metadata: Metadata = {
  title:       'Cómo Resolver Ecuaciones Paso a Paso',
  description: 'Aprende cómo resolver ecuaciones lineales y cuadráticas con pasos, ejemplos, comprobación y errores comunes.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Cómo Resolver Ecuaciones Paso a Paso', description: 'Aprende cómo resolver ecuaciones lineales y cuadráticas con pasos, ejemplos, comprobación y errores comunes.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Cómo Resolver Ecuaciones Paso a Paso', description: 'Aprende cómo resolver ecuaciones lineales y cuadráticas con pasos, ejemplos, comprobación y errores comunes.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Cómo resolver ecuaciones paso a paso', description: 'Aprende cómo resolver ecuaciones lineales y cuadráticas con pasos, ejemplos, comprobación y errores comunes.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Cómo resolver ecuaciones', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function ComoResolverEcuacionesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloEcuaHero />
        <EcuaContenido />
        <EcuaRelacionadas />
        <ArticuloEcuaFAQ />
      </main>
      <Footer />
    </>
  );
}
