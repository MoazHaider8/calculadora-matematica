export interface CalculatorLink {
  name: string;
  url: string;
}

export interface MegaMenuCategory {
  name: string;
  slug: string;
  description: string;
  calculators: CalculatorLink[];
}

export interface FeaturedCalculator {
  name: string;
  description: string;
  category: string;
  url: string;
}

export interface CategoryData {
  name: string;
  slug: string;
  description: string;
  calculators: CalculatorLink[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
}

// ─── Navigation ────────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre nosotros', href: '/sobre-nosotros' },
  { label: 'Calculadoras', href: '/calculadoras', hasMegaMenu: true },
  { label: 'Contacto', href: '/contacto' },
];

// ─── Mega menu categories ──────────────────────────────────────────────────────

export const megaMenuCategories: MegaMenuCategory[] = [
  {
    name: 'Cálculo',
    slug: 'calculo',
    description: 'Integrales, derivadas y límites',
    calculators: [
      { name: 'Calculadora de integrales', url: '/calculadoras/calculo/calculadora-de-integrales/' },
      { name: 'Calculadora de derivadas', url: '/calculadoras/calculo/calculadora-de-derivadas/' },
      { name: 'Calculadora de límites', url: '/calculadoras/calculo/calculadora-de-limites/' },
      { name: 'Calculadora de logaritmos', url: '/calculadoras/calculo/calculadora-de-logaritmos/' },
      { name: 'Calculadora de exponentes', url: '/calculadoras/calculo/calculadora-de-exponentes/' },
    ],
  },
  {
    name: 'Álgebra',
    slug: 'algebra',
    description: 'Ecuaciones, polinomios y raíces',
    calculators: [
      { name: 'Calculadora de ecuaciones', url: '/calculadoras/algebra/calculadora-de-ecuaciones/' },
      { name: 'Calculadora algebraica', url: '/calculadoras/algebra/calculadora-algebraica/' },
      { name: 'Calculadora de polinomios', url: '/calculadoras/algebra/calculadora-de-polinomios/' },
      { name: 'Calculadora de raíces', url: '/calculadoras/algebra/calculadora-de-raices/' },
      { name: 'Calculadora de raíz cuadrada', url: '/calculadoras/algebra/calculadora-de-raiz-cuadrada/' },
    ],
  },
  {
    name: 'Matrices y vectores',
    slug: 'matrices-y-vectores',
    description: 'Matrices, vectores y sistemas lineales',
    calculators: [
      { name: 'Calculadora de matrices', url: '/calculadoras/matrices-y-vectores/calculadora-de-matrices/' },
      { name: 'Calculadora de determinantes', url: '/calculadoras/matrices-y-vectores/calculadora-de-determinantes/' },
      { name: 'Calculadora de vectores', url: '/calculadoras/matrices-y-vectores/calculadora-de-vectores/' },
      { name: 'Calculadora de sistemas de ecuaciones', url: '/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones/' },
      { name: 'Calculadora de matriz inversa', url: '/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa/' },
    ],
  },
  {
    name: 'Aritmética',
    slug: 'aritmetica',
    description: 'Fracciones, porcentajes y cálculo científico',
    calculators: [
      { name: 'Calculadora de fracciones', url: '/calculadoras/aritmetica/calculadora-de-fracciones/' },
      { name: 'Calculadora de porcentajes', url: '/calculadoras/aritmetica/calculadora-de-porcentajes/' },
      { name: 'Calculadora científica', url: '/calculadoras/aritmetica/calculadora-cientifica/' },
      { name: 'Calculadora de regla de tres', url: '/calculadoras/aritmetica/calculadora-de-regla-de-tres/' },
      { name: 'Calculadora de promedio', url: '/calculadoras/aritmetica/calculadora-de-promedio/' },
    ],
  },
  {
    name: 'Estadística',
    slug: 'estadistica',
    description: 'Probabilidad, media y desviación',
    calculators: [
      { name: 'Calculadora de estadística', url: '/calculadoras/estadistica/calculadora-de-estadistica/' },
      { name: 'Calculadora de probabilidad', url: '/calculadoras/estadistica/calculadora-de-probabilidad/' },
      { name: 'Calculadora de desviación estándar', url: '/calculadoras/estadistica/calculadora-de-desviacion-estandar/' },
      { name: 'Calculadora de media', url: '/calculadoras/estadistica/calculadora-de-media/' },
      { name: 'Calculadora de varianza', url: '/calculadoras/estadistica/calculadora-de-varianza/' },
    ],
  },
  {
    name: 'Geometría',
    slug: 'geometria',
    description: 'Áreas, volúmenes y figuras geométricas',
    calculators: [
      { name: 'Calculadora de área', url: '/calculadoras/geometria/calculadora-de-area/' },
      { name: 'Calculadora de volumen', url: '/calculadoras/geometria/calculadora-de-volumen/' },
      { name: 'Calculadora de triángulos', url: '/calculadoras/geometria/calculadora-de-triangulos/' },
      { name: 'Calculadora de círculos', url: '/calculadoras/geometria/calculadora-de-circulos/' },
      { name: 'Calculadora de Pitágoras', url: '/calculadoras/geometria/calculadora-de-pitagoras/' },
    ],
  },
];

// ─── Featured calculators ──────────────────────────────────────────────────────

export const featuredCalculators: FeaturedCalculator[] = [
  {
    name: 'Calculadora científica',
    description: 'Operaciones avanzadas con funciones trigonométricas, logaritmos, exponentes y raíces cuadradas.',
    category: 'Aritmética',
    url: '/calculadoras/aritmetica/calculadora-cientifica/',
  },
  {
    name: 'Calculadora de porcentajes',
    description: 'Calcula porcentajes, incrementos, descuentos y proporciones de forma directa.',
    category: 'Aritmética',
    url: '/calculadoras/aritmetica/calculadora-de-porcentajes/',
  },
  {
    name: 'Calculadora de integrales',
    description: 'Resuelve integrales definidas e indefinidas con los pasos del proceso de integración.',
    category: 'Cálculo',
    url: '/calculadoras/calculo/calculadora-de-integrales/',
  },
  {
    name: 'Calculadora de derivadas',
    description: 'Obtén la derivada de funciones matemáticas con la explicación de cada paso.',
    category: 'Cálculo',
    url: '/calculadoras/calculo/calculadora-de-derivadas/',
  },
  {
    name: 'Calculadora de matrices',
    description: 'Suma, multiplica matrices, calcula el determinante y obtiene la matriz inversa.',
    category: 'Matrices y vectores',
    url: '/calculadoras/matrices-y-vectores/calculadora-de-matrices/',
  },
  {
    name: 'Calculadora de fracciones',
    description: 'Suma, resta, multiplica y divide fracciones con resultados simplificados.',
    category: 'Aritmética',
    url: '/calculadoras/aritmetica/calculadora-de-fracciones/',
  },
  {
    name: 'Calculadora de ecuaciones',
    description: 'Resuelve ecuaciones lineales y cuadráticas con los pasos del procedimiento.',
    category: 'Álgebra',
    url: '/calculadoras/algebra/calculadora-de-ecuaciones/',
  },
  {
    name: 'Calculadora de promedio',
    description: 'Calcula la media aritmética de cualquier conjunto de valores numéricos.',
    category: 'Aritmética',
    url: '/calculadoras/aritmetica/calculadora-de-promedio/',
  },
];

// ─── Full category data ────────────────────────────────────────────────────────

export const categories: CategoryData[] = [
  {
    name: 'Cálculo',
    slug: 'calculo',
    description:
      'Herramientas para operar con integrales, derivadas, límites, logaritmos y exponentes. Especialmente útiles en asignaturas de cálculo diferencial e integral.',
    calculators: [
      { name: 'Calculadora de integrales', url: '/calculadoras/calculo/calculadora-de-integrales/' },
      { name: 'Calculadora de derivadas', url: '/calculadoras/calculo/calculadora-de-derivadas/' },
      { name: 'Calculadora de límites', url: '/calculadoras/calculo/calculadora-de-limites/' },
      { name: 'Calculadora de logaritmos', url: '/calculadoras/calculo/calculadora-de-logaritmos/' },
      { name: 'Calculadora de exponentes', url: '/calculadoras/calculo/calculadora-de-exponentes/' },
    ],
  },
  {
    name: 'Álgebra',
    slug: 'algebra',
    description:
      'Calculadoras para resolver ecuaciones lineales y cuadráticas, trabajar con polinomios, encontrar raíces y simplificar expresiones algebraicas.',
    calculators: [
      { name: 'Calculadora de ecuaciones', url: '/calculadoras/algebra/calculadora-de-ecuaciones/' },
      { name: 'Calculadora algebraica', url: '/calculadoras/algebra/calculadora-algebraica/' },
      { name: 'Calculadora de polinomios', url: '/calculadoras/algebra/calculadora-de-polinomios/' },
      { name: 'Calculadora de raíces', url: '/calculadoras/algebra/calculadora-de-raices/' },
      { name: 'Calculadora de raíz cuadrada', url: '/calculadoras/algebra/calculadora-de-raiz-cuadrada/' },
    ],
  },
  {
    name: 'Matrices y vectores',
    slug: 'matrices-y-vectores',
    description:
      'Herramientas para multiplicar matrices, calcular determinantes, operar con vectores y resolver sistemas de ecuaciones lineales.',
    calculators: [
      { name: 'Calculadora de matrices', url: '/calculadoras/matrices-y-vectores/calculadora-de-matrices/' },
      { name: 'Calculadora de determinantes', url: '/calculadoras/matrices-y-vectores/calculadora-de-determinantes/' },
      { name: 'Calculadora de vectores', url: '/calculadoras/matrices-y-vectores/calculadora-de-vectores/' },
      { name: 'Calculadora de sistemas de ecuaciones', url: '/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones/' },
      { name: 'Calculadora de matriz inversa', url: '/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa/' },
    ],
  },
  {
    name: 'Aritmética',
    slug: 'aritmetica',
    description:
      'Operaciones con fracciones, porcentajes, proporciones y promedios. Incluye la calculadora científica para operaciones más completas.',
    calculators: [
      { name: 'Calculadora de fracciones', url: '/calculadoras/aritmetica/calculadora-de-fracciones/' },
      { name: 'Calculadora de porcentajes', url: '/calculadoras/aritmetica/calculadora-de-porcentajes/' },
      { name: 'Calculadora científica', url: '/calculadoras/aritmetica/calculadora-cientifica/' },
      { name: 'Calculadora de regla de tres', url: '/calculadoras/aritmetica/calculadora-de-regla-de-tres/' },
      { name: 'Calculadora de promedio', url: '/calculadoras/aritmetica/calculadora-de-promedio/' },
    ],
  },
  {
    name: 'Estadística',
    slug: 'estadistica',
    description:
      'Análisis de datos mediante probabilidad, desviación estándar, media, varianza y otras medidas estadísticas de uso frecuente.',
    calculators: [
      { name: 'Calculadora de estadística', url: '/calculadoras/estadistica/calculadora-de-estadistica/' },
      { name: 'Calculadora de probabilidad', url: '/calculadoras/estadistica/calculadora-de-probabilidad/' },
      { name: 'Calculadora de desviación estándar', url: '/calculadoras/estadistica/calculadora-de-desviacion-estandar/' },
      { name: 'Calculadora de media', url: '/calculadoras/estadistica/calculadora-de-media/' },
      { name: 'Calculadora de varianza', url: '/calculadoras/estadistica/calculadora-de-varianza/' },
    ],
  },
  {
    name: 'Geometría',
    slug: 'geometria',
    description:
      'Cálculo de áreas y volúmenes de figuras geométricas, propiedades de triángulos y círculos, y aplicación del teorema de Pitágoras.',
    calculators: [
      { name: 'Calculadora de área', url: '/calculadoras/geometria/calculadora-de-area/' },
      { name: 'Calculadora de volumen', url: '/calculadoras/geometria/calculadora-de-volumen/' },
      { name: 'Calculadora de triángulos', url: '/calculadoras/geometria/calculadora-de-triangulos/' },
      { name: 'Calculadora de círculos', url: '/calculadoras/geometria/calculadora-de-circulos/' },
      { name: 'Calculadora de Pitágoras', url: '/calculadoras/geometria/calculadora-de-pitagoras/' },
    ],
  },
];

// ─── FAQ (4 focused questions) ────────────────────────────────────────────────

export const faqItems: FAQItem[] = [
  {
    question: '¿Qué calculadoras matemáticas incluye la plataforma?',
    answer:
      'La plataforma reúne más de treinta calculadoras organizadas en seis categorías: cálculo, álgebra, matrices y vectores, aritmética, estadística y geometría. Cada herramienta responde a una operación matemática concreta.',
  },
  {
    question: '¿Puedo usar estas calculadoras online para estudiar?',
    answer:
      'Sí. El sitio está pensado para estudiar, comprobar ejercicios y revisar operaciones matemáticas con apoyo de fórmulas y resultados claros.',
  },
  {
    question: '¿Las herramientas muestran fórmulas o pasos?',
    answer:
      'Depende de la calculadora, pero la estructura general del sitio está orientada a explicar el procedimiento cuando la operación lo requiere, no solo a mostrar un resultado final.',
  },
  {
    question: '¿Todo el contenido está disponible en español?',
    answer:
      'Sí. Las categorías, los nombres de las calculadoras, los textos de apoyo y la navegación están pensados para usuarios que buscan herramientas matemáticas en español.',
  },
];

// ─── Hero quick-access chips ───────────────────────────────────────────────────

export const popularChips: CalculatorLink[] = [
  { name: 'Calculadora científica', url: '/calculadoras/aritmetica/calculadora-cientifica/' },
  { name: 'Calculadora de porcentajes', url: '/calculadoras/aritmetica/calculadora-de-porcentajes/' },
  { name: 'Calculadora de integrales', url: '/calculadoras/calculo/calculadora-de-integrales/' },
  { name: 'Calculadora de derivadas', url: '/calculadoras/calculo/calculadora-de-derivadas/' },
  { name: 'Calculadora de matrices', url: '/calculadoras/matrices-y-vectores/calculadora-de-matrices/' },
  { name: 'Calculadora de fracciones', url: '/calculadoras/aritmetica/calculadora-de-fracciones/' },
];

// ─── Trust items ───────────────────────────────────────────────────────────────

export const trustItems: string[] = [
  'Resultados claros',
  'Fórmulas organizadas',
  'Contenido en español',
  'Categorías matemáticas',
  'Acceso rápido',
];
