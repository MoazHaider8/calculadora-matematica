import type { Metadata } from 'next';
import { Header }                    from '@/components/Header';
import { Footer }                    from '@/components/Footer';
import { ArticuloCalcCientHero }     from '@/components/ArticuloCalcCientHero';
import { CalcCientContenido }        from '@/components/CalcCientContenido';
import { CalcCientRelacionadas }     from '@/components/CalcCientRelacionadas';
import { ArticuloCalcCientFAQ }      from '@/components/ArticuloCalcCientFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/como-usar-una-calculadora-cientifica';

export const metadata: Metadata = {
  title:       'Cómo Usar una Calculadora Científica',
  description: 'Aprende a usar una calculadora científica: orden de operaciones, potencias, raíces, logaritmos y funciones trigonométricas.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: { title: 'Cómo Usar una Calculadora Científica', description: 'Aprende a usar una calculadora científica: orden de operaciones, potencias, raíces, logaritmos y funciones trigonométricas.', url: CANONICAL, type: 'article' },
  twitter:   { card: 'summary_large_image', title: 'Cómo Usar una Calculadora Científica', description: 'Aprende a usar una calculadora científica: orden de operaciones, potencias, raíces, logaritmos y funciones trigonométricas.' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BlogPosting', '@id': CANONICAL, headline: 'Cómo usar una calculadora científica', description: 'Aprende a usar una calculadora científica: orden de operaciones, potencias, raíces, logaritmos y funciones trigonométricas.', url: CANONICAL, inLanguage: 'es', datePublished: '2026-06-06', dateModified: '2026-06-06', author: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' }, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }, breadcrumb: { '@id': `${CANONICAL}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${CANONICAL}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://calculadoramatematica.com/blog' }, { '@type': 'ListItem', position: 3, name: 'Calculadora científica', item: CANONICAL }] },
    { '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website', url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es' },
  ],
};

export default function ComoUsarCalculadoraCientificaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloCalcCientHero />
        <CalcCientContenido />
        <CalcCientRelacionadas />
        <ArticuloCalcCientFAQ />
      </main>
      <Footer />
    </>
  );
}
