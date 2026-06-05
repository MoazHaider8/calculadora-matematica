import type { Metadata } from 'next';
import { Header }           from '@/components/Header';
import { Footer }           from '@/components/Footer';
import { ContactoHero }     from '@/components/ContactoHero';
import { ContactoForm }     from '@/components/ContactoForm';
import { ContactoCuando }   from '@/components/ContactoCuando';
import { ContactoAntes }    from '@/components/ContactoAntes';
import { ContactoSugerir }  from '@/components/ContactoSugerir';
import { ContactoReportar } from '@/components/ContactoReportar';
import { ContactoEnlaces }  from '@/components/ContactoEnlaces';
import { ContactoFAQ }      from '@/components/ContactoFAQ';

const CANONICAL = 'https://calculadoramatematica.com/contacto';

export const metadata: Metadata = {
  title:       'Contacto | Calculadora Matemática',
  description: 'Contacta con Calculadora Matemática para reportar errores, sugerir nuevas calculadoras o enviar comentarios sobre nuestras herramientas.',
  alternates:  { canonical: CANONICAL },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'Contacto | Calculadora Matemática',
    description: 'Contacta con Calculadora Matemática para reportar errores, sugerir nuevas calculadoras o enviar comentarios sobre nuestras herramientas.',
    url:         CANONICAL,
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Contacto | Calculadora Matemática',
    description: 'Contacta con Calculadora Matemática para reportar errores, sugerir nuevas calculadoras o enviar comentarios sobre nuestras herramientas.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type':     'ContactPage',
      '@id':       CANONICAL,
      url:         CANONICAL,
      name:        'Contacto | Calculadora Matemática',
      description: 'Contacta con Calculadora Matemática para reportar errores, sugerir nuevas calculadoras o enviar comentarios sobre nuestras herramientas.',
      inLanguage:  'es',
      breadcrumb:  { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':   `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio',   item: 'https://calculadoramatematica.com/' },
        { '@type': 'ListItem', position: 2, name: 'Contacto', item: CANONICAL },
      ],
    },
    {
      '@type':    'WebSite',
      '@id':      'https://calculadoramatematica.com#website',
      url:        'https://calculadoramatematica.com',
      name:       'Calculadora Matemática',
      inLanguage: 'es',
    },
  ],
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ContactoHero />
        <ContactoForm />
        <ContactoCuando />
        <ContactoAntes />
        <ContactoSugerir />
        <ContactoReportar />
        <ContactoEnlaces />
        <ContactoFAQ />
      </main>
      <Footer />
    </>
  );
}
