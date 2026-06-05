export const BASE = 'https://calculadoramatematica.com';
export const LASTMOD = '2026-06-06';

export const staticPages: string[] = [
  '/',
  '/sobre-nosotros',
  '/contacto',
  '/politica-de-privacidad',
  '/terminos-y-condiciones',
  '/aviso-legal',
];

export const categoryPages: string[] = [
  '/calculadoras',
  '/calculadoras/calculo',
  '/calculadoras/algebra',
  '/calculadoras/matrices-y-vectores',
  '/calculadoras/aritmetica',
  '/calculadoras/estadistica',
  '/calculadoras/geometria',
  '/blog',
];

export const calculatorPages: string[] = [
  // Cálculo
  '/calculadoras/calculo/calculadora-de-integrales',
  '/calculadoras/calculo/calculadora-de-derivadas',
  '/calculadoras/calculo/calculadora-de-limites',
  '/calculadoras/calculo/calculadora-de-logaritmos',
  '/calculadoras/calculo/calculadora-de-exponentes',
  // Álgebra
  '/calculadoras/algebra/calculadora-de-ecuaciones',
  '/calculadoras/algebra/calculadora-algebraica',
  '/calculadoras/algebra/calculadora-de-polinomios',
  '/calculadoras/algebra/calculadora-de-raices',
  '/calculadoras/algebra/calculadora-de-raiz-cuadrada',
  // Matrices y vectores
  '/calculadoras/matrices-y-vectores/calculadora-de-matrices',
  '/calculadoras/matrices-y-vectores/calculadora-de-determinantes',
  '/calculadoras/matrices-y-vectores/calculadora-de-vectores',
  '/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones',
  '/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa',
  // Aritmética
  '/calculadoras/aritmetica/calculadora-de-fracciones',
  '/calculadoras/aritmetica/calculadora-de-porcentajes',
  '/calculadoras/aritmetica/calculadora-cientifica',
  '/calculadoras/aritmetica/calculadora-de-regla-de-tres',
  '/calculadoras/aritmetica/calculadora-de-promedio',
  // Estadística
  '/calculadoras/estadistica/calculadora-de-estadistica',
  '/calculadoras/estadistica/calculadora-de-probabilidad',
  '/calculadoras/estadistica/calculadora-de-desviacion-estandar',
  '/calculadoras/estadistica/calculadora-de-media',
  '/calculadoras/estadistica/calculadora-de-varianza',
  // Geometría
  '/calculadoras/geometria/calculadora-de-area',
  '/calculadoras/geometria/calculadora-de-volumen',
  '/calculadoras/geometria/calculadora-de-triangulos',
  '/calculadoras/geometria/calculadora-de-circulos',
  '/calculadoras/geometria/calculadora-de-pitagoras',
];

export const blogPages: string[] = [
  // Aritmética
  '/blog/como-calcular-porcentajes',
  '/blog/que-es-la-regla-de-tres',
  '/blog/como-sacar-promedio',
  '/blog/como-sumar-restar-fracciones',
  '/blog/como-usar-una-calculadora-cientifica',
  // Geometría
  '/blog/formulas-de-area',
  '/blog/formulas-de-volumen',
  '/blog/teorema-de-pitagoras',
  '/blog/tipos-de-triangulos',
  '/blog/area-y-circunferencia-del-circulo',
  // Estadística
  '/blog/media-mediana-moda-diferencias',
  '/blog/varianza-y-desviacion-estandar',
  '/blog/que-es-la-probabilidad',
  '/blog/poblacion-y-muestra-en-estadistica',
  '/blog/como-interpretar-la-desviacion-estandar',
  // Cálculo
  '/blog/que-es-una-derivada',
  '/blog/que-es-una-integral',
  '/blog/como-calcular-limites',
  '/blog/reglas-de-logaritmos',
  '/blog/reglas-de-exponentes',
  // Álgebra
  '/blog/como-resolver-ecuaciones',
  '/blog/como-simplificar-expresiones-algebraicas',
  '/blog/que-son-los-polinomios',
  '/blog/raices-y-radicales',
  '/blog/ecuaciones-lineales-y-cuadraticas',
  // Matrices y vectores
  '/blog/que-es-una-matriz',
  '/blog/como-calcular-determinantes',
  '/blog/que-es-un-vector',
  '/blog/como-resolver-sistemas-de-ecuaciones',
  '/blog/como-calcular-la-matriz-inversa',
];

export function buildUrlset(paths: string[]): string {
  const entries = paths
    .map(path => {
      const loc = path === '/' ? BASE + '/' : BASE + path;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n  </url>`;
    })
    .join('\n');

  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries +
    '\n</urlset>'
  );
}

const CHILD_SITEMAPS = ['pages.xml', 'categories.xml', 'calculators.xml', 'blog.xml'];

export function buildSitemapIndex(): string {
  const entries = CHILD_SITEMAPS.map(
    name => `  <sitemap>\n    <loc>${BASE}/sitemaps/${name}</loc>\n  </sitemap>`,
  ).join('\n');

  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries +
    '\n</sitemapindex>'
  );
}
