import { HubRelatedGuides } from './HubRelatedGuides';

const guides = [
  { href: '/blog/que-es-una-matriz', category: 'Matrices y Vectores', title: 'Qué es una matriz y cómo se usa', description: 'Explica qué es una matriz, sus dimensiones, tipos básicos y operaciones fundamentales.' },
  { href: '/blog/como-calcular-determinantes', category: 'Matrices y Vectores', title: 'Cómo calcular determinantes paso a paso', description: 'Explica la fórmula para matrices 2×2 y la regla de Sarrus para matrices 3×3.' },
  { href: '/blog/que-es-un-vector', category: 'Matrices y Vectores', title: 'Qué es un vector y cómo se calcula', description: 'Explica qué es un vector, cómo se calcula su módulo y las operaciones básicas.' },
  { href: '/blog/como-resolver-sistemas-de-ecuaciones', category: 'Matrices y Vectores', title: 'Cómo resolver sistemas de ecuaciones', description: 'Explica los métodos de sustitución y eliminación para resolver sistemas de ecuaciones lineales.' },
  { href: '/blog/como-calcular-la-matriz-inversa', category: 'Matrices y Vectores', title: 'Cómo calcular la matriz inversa', description: 'Explica cuándo existe la inversa y cómo calcularla con el método de Gauss-Jordan.' },
];

export function MatVecRelated() {
  return <HubRelatedGuides headingId="matvec-guides-heading" guides={guides} />;
}
