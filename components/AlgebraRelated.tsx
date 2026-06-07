import { HubRelatedGuides } from './HubRelatedGuides';

const guides = [
  { href: '/blog/como-resolver-ecuaciones', category: 'Álgebra', title: 'Cómo resolver ecuaciones paso a paso', description: 'Explica cómo resolver ecuaciones lineales y cuadráticas con el procedimiento paso a paso.' },
  { href: '/blog/como-simplificar-expresiones-algebraicas', category: 'Álgebra', title: 'Cómo simplificar expresiones algebraicas', description: 'Explica cómo simplificar, expandir y factorizar expresiones con variables y coeficientes.' },
  { href: '/blog/que-son-los-polinomios', category: 'Álgebra', title: 'Qué son los polinomios y cómo se resuelven', description: 'Explica qué son los polinomios, sus operaciones fundamentales y cómo factorizarlos.' },
  { href: '/blog/raices-y-radicales', category: 'Álgebra', title: 'Raíces y radicales explicados con ejemplos', description: 'Explica qué son las raíces de distintos índices y cómo simplificar radicales.' },
  { href: '/blog/ecuaciones-lineales-y-cuadraticas', category: 'Álgebra', title: 'Ecuaciones lineales y cuadráticas: diferencias', description: 'Explica las diferencias entre ecuaciones lineales y cuadráticas y cuándo aplicar cada fórmula.' },
];

export function AlgebraRelated() {
  return <HubRelatedGuides headingId="algebra-guides-heading" guides={guides} />;
}
