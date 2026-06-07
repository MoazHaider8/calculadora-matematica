import { CalculatorHubCards } from './CalculatorHubCards';

const cards = [
  {
    name: 'Calculadora de Matrices',
    href: '/calculadoras/matrices-y-vectores/calculadora-de-matrices',
    preview: 'A + B',
    description: 'Realiza operaciones con matrices, suma, resta, multiplicación y escalares.',
  },
  {
    name: 'Calculadora de Determinantes',
    href: '/calculadoras/matrices-y-vectores/calculadora-de-determinantes',
    preview: 'det(A)',
    description: 'Calcula determinantes de matrices y revisa el procedimiento usado.',
  },
  {
    name: 'Calculadora de Vectores',
    href: '/calculadoras/matrices-y-vectores/calculadora-de-vectores',
    preview: '|v|',
    description: 'Calcula magnitud, componentes, suma, resta y operaciones básicas con vectores.',
  },
  {
    name: 'Calculadora de Sistemas de Ecuaciones',
    href: '/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones',
    preview: 'Ax = b',
    description: 'Resuelve sistemas de ecuaciones y revisa resultados con pasos organizados.',
  },
  {
    name: 'Calculadora de Matriz Inversa',
    href: '/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa',
    preview: 'A⁻¹',
    description: 'Calcula la matriz inversa cuando existe y revisa su relación con el determinante.',
  },
];

export function MatVecTools() {
  return (
    <CalculatorHubCards
      headingId="tools-matvec-heading"
      heading="Herramientas de matrices y vectores"
      intro="Elige una calculadora especializada y abre la herramienta que necesitas."
      cards={cards}
    />
  );
}
