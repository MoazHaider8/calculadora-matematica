import { HubRelatedGuides } from './HubRelatedGuides';

const guides = [
  { href: '/blog/como-calcular-porcentajes', category: 'Aritmética', title: 'Cómo calcular porcentajes paso a paso', description: 'Explica cómo calcular porcentajes, descuentos y variaciones con ejemplos claros.' },
  { href: '/blog/que-es-la-regla-de-tres', category: 'Aritmética', title: 'Qué es la regla de tres y cómo usarla', description: 'Explica la regla de tres simple directa e inversa con procedimiento paso a paso.' },
  { href: '/blog/como-sacar-promedio', category: 'Aritmética', title: 'Cómo sacar promedio paso a paso', description: 'Explica cómo calcular la media aritmética de notas o datos numéricos con ejemplos.' },
  { href: '/blog/como-sumar-restar-fracciones', category: 'Aritmética', title: 'Cómo sumar y restar fracciones', description: 'Explica cómo operar fracciones con denominador igual o distinto paso a paso.' },
  { href: '/blog/como-usar-una-calculadora-cientifica', category: 'Aritmética', title: 'Cómo usar una calculadora científica', description: 'Explica cómo introducir funciones, potencias y paréntesis en una calculadora científica.' },
];

export function AritmeticaRelated() {
  return <HubRelatedGuides headingId="aritmetica-guides-heading" guides={guides} />;
}
