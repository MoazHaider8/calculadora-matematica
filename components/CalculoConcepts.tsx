import { HubConcepts } from './HubConcepts';

const concepts = [
  { formula: '∫ f(x) dx', name: 'Integral', explanation: 'Calcula el área bajo una curva o la acumulación de una cantidad a lo largo de un intervalo.', href: '/calculadoras/calculo/calculadora-de-integrales' },
  { formula: "f'(x)", name: 'Derivada', explanation: 'Mide la tasa de cambio instantánea de una función respecto a su variable.', href: '/calculadoras/calculo/calculadora-de-derivadas' },
  { formula: 'lim x→a', name: 'Límite', explanation: 'Valor al que se aproxima una función cuando su variable tiende a un punto determinado.', href: '/calculadoras/calculo/calculadora-de-limites' },
  { formula: 'logₐ(x)', name: 'Logaritmo', explanation: 'Operación inversa de la potenciación. Permite resolver ecuaciones exponenciales y cambiar de base.', href: '/calculadoras/calculo/calculadora-de-logaritmos' },
  { formula: 'aⁿ', name: 'Exponente', explanation: 'Expresa la multiplicación repetida de una base por sí misma. Aparece en crecimientos y decaimientos.', href: '/calculadoras/calculo/calculadora-de-exponentes' },
];

export function CalculoConcepts() {
  return <HubConcepts headingId="calculo-concepts-heading" concepts={concepts} />;
}
