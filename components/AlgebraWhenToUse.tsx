import { HubWhenToUse } from './HubWhenToUse';

const rows = [
  { situation: 'Resolver una ecuación con una o más soluciones', tool: 'Calculadora de Ecuaciones', href: '/calculadoras/algebra/calculadora-de-ecuaciones' },
  { situation: 'Simplificar una expresión algebraica o combinar términos', tool: 'Calculadora Algebraica', href: '/calculadoras/algebra/calculadora-algebraica' },
  { situation: 'Trabajar con términos, grado u operaciones de polinomios', tool: 'Calculadora de Polinomios', href: '/calculadoras/algebra/calculadora-de-polinomios' },
  { situation: 'Calcular raíces de índices distintos al cuadrado', tool: 'Calculadora de Raíces', href: '/calculadoras/algebra/calculadora-de-raices' },
  { situation: 'Calcular específicamente la raíz cuadrada de un número', tool: 'Calculadora de Raíz Cuadrada', href: '/calculadoras/algebra/calculadora-de-raiz-cuadrada' },
];

export function AlgebraWhenToUse() {
  return <HubWhenToUse headingId="algebra-when-heading" rows={rows} />;
}
