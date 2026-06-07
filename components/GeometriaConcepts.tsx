import { HubConcepts } from './HubConcepts';

const concepts = [
  { formula: 'A = b × h', name: 'Área', explanation: 'Medida de la superficie bidimensional de una figura plana, expresada en unidades cuadradas.', href: '/calculadoras/geometria/calculadora-de-area' },
  { formula: 'V = l×w×h', name: 'Volumen', explanation: 'Espacio tridimensional que ocupa un cuerpo geométrico, expresado en unidades cúbicas.', href: '/calculadoras/geometria/calculadora-de-volumen' },
  { formula: 'A = bh/2', name: 'Triángulo', explanation: 'Polígono de tres lados. Su área es la mitad del producto de la base por la altura.', href: '/calculadoras/geometria/calculadora-de-triangulos' },
  { formula: 'A = πr²', name: 'Círculo', explanation: 'Figura plana cuyos puntos están a igual distancia del centro. El área es π veces el radio al cuadrado.', href: '/calculadoras/geometria/calculadora-de-circulos' },
  { formula: 'a²+b²=c²', name: 'Teorema de Pitágoras', explanation: 'En un triángulo rectángulo, la suma de los cuadrados de los catetos iguala el cuadrado de la hipotenusa.', href: '/calculadoras/geometria/calculadora-de-pitagoras' },
];

export function GeometriaConcepts() {
  return <HubConcepts headingId="geometria-concepts-heading" concepts={concepts} />;
}
