import { HubConcepts } from './HubConcepts';

const concepts = [
  { formula: 'ax + b = 0', name: 'Ecuación', explanation: 'Igualdad matemática con una o más incógnitas que se resuelve despejando la variable.', href: '/calculadoras/algebra/calculadora-de-ecuaciones' },
  { formula: '2x + 3x', name: 'Expresión algebraica', explanation: 'Combinación de variables, coeficientes y operaciones que se puede simplificar o factorizar.', href: '/calculadoras/algebra/calculadora-algebraica' },
  { formula: 'ax² + bx + c', name: 'Polinomio', explanation: 'Suma de términos con variable elevada a potencias enteras no negativas.', href: '/calculadoras/algebra/calculadora-de-polinomios' },
  { formula: 'ⁿ√x', name: 'Raíz general', explanation: 'Valor que, elevado a la potencia n, da como resultado x.', href: '/calculadoras/algebra/calculadora-de-raices' },
  { formula: '√x', name: 'Raíz cuadrada', explanation: 'Número que multiplicado por sí mismo produce x. Caso especial de raíz con índice 2.', href: '/calculadoras/algebra/calculadora-de-raiz-cuadrada' },
];

export function AlgebraConcepts() {
  return <HubConcepts headingId="algebra-concepts-heading" concepts={concepts} />;
}
