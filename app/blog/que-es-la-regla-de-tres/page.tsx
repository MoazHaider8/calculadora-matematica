import type { Metadata } from 'next';
import { Header }             from '@/components/Header';
import { Footer }             from '@/components/Footer';
import { ArticuloReglaHero }  from '@/components/ArticuloReglaHero';
import { ReglaContenido }     from '@/components/ReglaContenido';
import { ReglaPractica }      from '@/components/ReglaPractica';
import { ReglaRelacionadas }  from '@/components/ReglaRelacionadas';
import { ArticuloReglaFAQ }   from '@/components/ArticuloReglaFAQ';

const CANONICAL = 'https://calculadoramatematica.com/blog/que-es-la-regla-de-tres';

export const metadata: Metadata = {
  title:       'Qué es la Regla de Tres y Cómo Usarla',
  description: 'Aprende qué es la regla de tres, cómo aplicar la directa e inversa, con fórmulas, pasos, ejemplos y errores comunes.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'Qué es la Regla de Tres y Cómo Usarla',
    description: 'Aprende qué es la regla de tres, cómo aplicar la directa e inversa, con fórmulas, pasos, ejemplos y errores comunes.',
    url:         CANONICAL,
    type:        'article',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Qué es la Regla de Tres y Cómo Usarla',
    description: 'Aprende qué es la regla de tres, cómo aplicar la directa e inversa, con fórmulas, pasos, ejemplos y errores comunes.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type':       'BlogPosting',
      '@id':         CANONICAL,
      headline:      'Qué es la regla de tres y cómo usarla',
      description:   'Aprende qué es la regla de tres, cómo aplicar la directa e inversa, con fórmulas, pasos, ejemplos y errores comunes.',
      url:           CANONICAL,
      inLanguage:    'es',
      datePublished: '2026-06-06',
      dateModified:  '2026-06-06',
      author:    { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' },
      publisher: { '@type': 'Organization', name: 'Calculadora Matemática', url: 'https://calculadoramatematica.com' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://calculadoramatematica.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog',   item: 'https://calculadoramatematica.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Qué es la regla de tres', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebSite', '@id': 'https://calculadoramatematica.com#website',
      url: 'https://calculadoramatematica.com', name: 'Calculadora Matemática', inLanguage: 'es',
    },
  ],
};

export default function QueEsLaReglaDeTresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <ArticuloReglaHero />
        <ReglaContenido />
        <ReglaPractica />
        <ReglaRelacionadas />
        <ArticuloReglaFAQ />
      </main>
      <Footer />
    </>
  );
}
