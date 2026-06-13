import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { faqItems, categories } from '@/lib/data';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const BASE_URL = 'https://calculadoramatematica.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Calculadoras Matemáticas Online | Herramientas en Español',
    template: '%s | Calculadoras Matemáticas',
  },
  description:
    'Explora calculadoras matemáticas y calculadoras online en español. Encuentra herramientas matemáticas organizadas por tema.',
  keywords: [
    'calculadoras matemáticas',
    'calculadoras online',
    'calculadora matemática',
    'calculadoras en línea',
    'herramientas matemáticas',
    'calculadoras en español',
    'calculadora científica',
    'calculadora de porcentajes',
    'calculadora de integrales',
    'calculadora de derivadas',
    'calculadora de matrices',
    'calculadora de fracciones',
    'calculadora de ecuaciones',
    'calculadora de estadística',
    'herramientas matemáticas en español',
  ],
  authors: [{ name: 'Calculadoras Matemáticas' }],
  creator: 'Calculadoras Matemáticas',
  publisher: 'Calculadoras Matemáticas',
  alternates: {
    canonical: '/',
    languages: { es: '/' },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: BASE_URL,
    siteName: 'Calculadoras Matemáticas',
    title: 'Calculadoras Matemáticas Online | Herramientas en Español',
    description:
      'Explora calculadoras matemáticas y calculadoras online en español. Encuentra herramientas matemáticas organizadas por tema.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadoras Matemáticas Online | Herramientas en Español',
    description:
      'Explora calculadoras matemáticas y calculadoras online en español. Encuentra herramientas matemáticas organizadas por tema.',
  },
  verification: {
    google: '-ovCHO7n_HmuXjpYEIal7p_gwiCyN06kaXzwcOM2rQg',
    yandex: '6731fef46659cd47',
  },
};

function buildSchema() {
  const allCalculators = categories.flatMap((cat) => cat.calculators);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'Calculadoras Matemáticas',
        description:
          'Plataforma de calculadoras matemáticas, calculadoras online y herramientas matemáticas en español para estudiantes, docentes y profesionales.',
        inLanguage: 'es',
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/buscar?q={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'Calculadoras Matemáticas',
        url: BASE_URL,
        description:
          'Directorio de herramientas matemáticas en español organizado por cálculo, álgebra, matrices y vectores, aritmética, estadística y geometría.',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Calculadoras', item: `${BASE_URL}/calculadoras` },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${BASE_URL}/#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
      {
        '@type': 'ItemList',
        '@id': `${BASE_URL}/#calculator-directory`,
        name: 'Directorio de calculadoras matemáticas',
        description: 'Lista completa de calculadoras matemáticas online en español organizadas por categoría.',
        numberOfItems: allCalculators.length,
        itemListElement: allCalculators.map((calc, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: calc.name,
          url: `${BASE_URL}${calc.url}`,
        })),
      },
    ],
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
        />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YPCPMM7NW0"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YPCPMM7NW0');
        `}
      </Script>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
