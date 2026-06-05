import type { Metadata } from 'next';
import { Header }             from '@/components/Header';
import { Footer }             from '@/components/Footer';
import { ArticuloPitaHero }   from '@/components/ArticuloPitaHero';
import { PitaContenido }      from '@/components/PitaContenido';
import { PitaRelacionadas }   from '@/components/PitaRelacionadas';
import { ArticuloPitaFAQ }    from '@/components/ArticuloPitaFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/teorema-de-pitagoras';

export const metadata: Metadata = {
  title:       'Teorema de Pitágoras Explicado con Ejemplos',
  description: 'Aprende el teorema de Pitágoras, cómo calcular hipotenusa o catetos, con fórmula, pasos, ejemplos y errores comunes.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Teorema de Pitágoras Explicado con Ejemplos', description: 'Aprende el teorema de Pitágoras, cómo calcular hipotenusa o catetos, con fórmula, pasos, ejemplos y errores comunes.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Teorema de Pitágoras Explicado con Ejemplos', description: 'Aprende el teorema de Pitágoras, cómo calcular hipotenusa o catetos, con fórmula, pasos, ejemplos y errores comunes.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Teorema de Pitágoras explicado con ejemplos', description: 'Aprende el teorema de Pitágoras, cómo calcular hipotenusa o catetos, con fórmula, pasos, ejemplos y errores comunes.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Teorema de Pitágoras', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function TeoremaDePitaGorasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloPitaHero />
        <PitaContenido />
        <PitaRelacionadas />
        <ArticuloPitaFAQ />
      </main>
      <Footer />
    </>
  );
}
