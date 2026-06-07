import { HubRelatedGuides } from './HubRelatedGuides';

const guides = [
  { href: '/blog/que-es-una-derivada', category: 'Cálculo', title: 'Qué es una derivada y para qué sirve', description: 'Explica qué es una derivada, cómo se calcula y en qué situaciones se aplica.' },
  { href: '/blog/que-es-una-integral', category: 'Cálculo', title: 'Qué es una integral y cómo se interpreta', description: 'Explica qué es una integral, la diferencia entre definida e indefinida y cómo interpretarla.' },
  { href: '/blog/como-calcular-limites', category: 'Cálculo', title: 'Cómo calcular límites paso a paso', description: 'Explica los métodos para calcular límites con sustitución, factorización y análisis del comportamiento.' },
  { href: '/blog/reglas-de-logaritmos', category: 'Cálculo', title: 'Reglas de logaritmos explicadas con ejemplos', description: 'Repasa las propiedades principales de los logaritmos con ejemplos aplicados paso a paso.' },
  { href: '/blog/reglas-de-exponentes', category: 'Cálculo', title: 'Reglas de exponentes y potencias', description: 'Explica las reglas de los exponentes con ejemplos de potencias enteras, fraccionarias y negativas.' },
];

export function CalculoRelated() {
  return <HubRelatedGuides headingId="calculo-guides-heading" guides={guides} />;
}
