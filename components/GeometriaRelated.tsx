import { HubRelatedGuides } from './HubRelatedGuides';

const guides = [
  { href: '/blog/formulas-de-area', category: 'Geometría', title: 'Fórmulas de área de figuras geométricas', description: 'Repasa las fórmulas de área de rectángulos, triángulos, círculos y otras figuras comunes.' },
  { href: '/blog/formulas-de-volumen', category: 'Geometría', title: 'Fórmulas de volumen más usadas', description: 'Repasa las fórmulas de volumen de cubos, cilindros, conos y esferas con ejemplos.' },
  { href: '/blog/teorema-de-pitagoras', category: 'Geometría', title: 'Teorema de Pitágoras explicado con ejemplos', description: 'Explica el teorema de Pitágoras con ejemplos paso a paso y aplicaciones prácticas.' },
  { href: '/blog/tipos-de-triangulos', category: 'Geometría', title: 'Tipos de triángulos y sus fórmulas', description: 'Explica los tipos de triángulos según sus lados y ángulos con las fórmulas correspondientes.' },
  { href: '/blog/area-y-circunferencia-del-circulo', category: 'Geometría', title: 'Cómo calcular área y circunferencia de un círculo', description: 'Explica cómo calcular el área con πr² y la circunferencia con 2πr.' },
];

export function GeometriaRelated() {
  return <HubRelatedGuides headingId="geometria-guides-heading" guides={guides} />;
}
