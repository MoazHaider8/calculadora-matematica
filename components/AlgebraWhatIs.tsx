import { HubWhatIs } from './HubWhatIs';

const topics = ['Ecuaciones', 'Expresiones algebraicas', 'Polinomios', 'Raíces', 'Factorización'];

const paragraphs = [
  'Esta categoría incluye calculadoras para ecuaciones, expresiones algebraicas, polinomios, raíces y raíces cuadradas. Con estas herramientas puedes resolver ecuaciones lineales y cuadráticas, simplificar expresiones con variables y coeficientes, realizar operaciones con polinomios de cualquier grado, calcular raíces de distintos índices y obtener raíces cuadradas exactas o aproximadas.',
  'El álgebra trabaja con variables y expresiones simbólicas en lugar de solo números. Esto permite resolver problemas generales y establecer relaciones entre cantidades sin conocer sus valores exactos de antemano. La simplificación algebraica es el paso previo a la resolución de muchas ecuaciones, y los polinomios aparecen en funciones, modelos y curvas.',
  'Cada herramienta muestra el procedimiento con los pasos seguidos para que puedas verificar el resultado.',
];

export function AlgebraWhatIs() {
  return <HubWhatIs headingId="algebra-whatis-heading" topics={topics} paragraphs={paragraphs} />;
}
