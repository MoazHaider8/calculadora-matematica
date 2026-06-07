import { HubWhenToUse } from './HubWhenToUse';

const rows = [
  { situation: 'Operar o simplificar fracciones con distinto denominador', tool: 'Calculadora de Fracciones', href: '/calculadoras/aritmetica/calculadora-de-fracciones' },
  { situation: 'Calcular descuentos, aumentos o variaciones porcentuales', tool: 'Calculadora de Porcentajes', href: '/calculadoras/aritmetica/calculadora-de-porcentajes' },
  { situation: 'Resolver operaciones con funciones trigonométricas, logaritmos o raíces', tool: 'Calculadora Científica', href: '/calculadoras/aritmetica/calculadora-cientifica' },
  { situation: 'Resolver proporciones directas o inversas', tool: 'Calculadora de Regla de Tres', href: '/calculadoras/aritmetica/calculadora-de-regla-de-tres' },
  { situation: 'Calcular la media de notas o un conjunto de valores', tool: 'Calculadora de Promedio', href: '/calculadoras/aritmetica/calculadora-de-promedio' },
];

export function AritmeticaWhenToUse() {
  return <HubWhenToUse headingId="aritmetica-when-heading" rows={rows} />;
}
