import { HubWhenToUse } from './HubWhenToUse';

const rows = [
  { situation: 'Realizar operaciones entre matrices (suma, resta, multiplicación)', tool: 'Calculadora de Matrices', href: '/calculadoras/matrices-y-vectores/calculadora-de-matrices' },
  { situation: 'Calcular el determinante de una matriz cuadrada', tool: 'Calculadora de Determinantes', href: '/calculadoras/matrices-y-vectores/calculadora-de-determinantes' },
  { situation: 'Trabajar con magnitud, componentes o suma de vectores', tool: 'Calculadora de Vectores', href: '/calculadoras/matrices-y-vectores/calculadora-de-vectores' },
  { situation: 'Resolver un sistema de ecuaciones lineales', tool: 'Calculadora de Sistemas de Ecuaciones', href: '/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones' },
  { situation: 'Encontrar la inversa de una matriz cuando existe', tool: 'Calculadora de Matriz Inversa', href: '/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa' },
];

export function MatVecWhenToUse() {
  return <HubWhenToUse headingId="matvec-when-heading" rows={rows} />;
}
