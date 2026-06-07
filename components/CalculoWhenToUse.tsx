import { HubWhenToUse } from './HubWhenToUse';

const rows = [
  { situation: 'Calcular antiderivadas, acumulación o área bajo una curva', tool: 'Calculadora de Integrales', href: '/calculadoras/calculo/calculadora-de-integrales' },
  { situation: 'Encontrar la tasa de cambio instantánea o pendiente de una función', tool: 'Calculadora de Derivadas', href: '/calculadoras/calculo/calculadora-de-derivadas' },
  { situation: 'Evaluar el comportamiento de una función cerca de un valor', tool: 'Calculadora de Límites', href: '/calculadoras/calculo/calculadora-de-limites' },
  { situation: 'Resolver expresiones logarítmicas o cambiar de base', tool: 'Calculadora de Logaritmos', href: '/calculadoras/calculo/calculadora-de-logaritmos' },
  { situation: 'Trabajar con potencias o expresiones exponenciales', tool: 'Calculadora de Exponentes', href: '/calculadoras/calculo/calculadora-de-exponentes' },
];

export function CalculoWhenToUse() {
  return <HubWhenToUse headingId="calculo-when-heading" rows={rows} />;
}
