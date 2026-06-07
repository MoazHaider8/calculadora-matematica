import { CalculatorHubCards } from './CalculatorHubCards';

const cards = [
  {
    name: 'Calculadora de Ecuaciones',
    href: '/calculadoras/algebra/calculadora-de-ecuaciones',
    preview: 'ax + b = 0',
    description: 'Resuelve ecuaciones lineales, cuadráticas y otros casos con pasos claros.',
  },
  {
    name: 'Calculadora Algebraica',
    href: '/calculadoras/algebra/calculadora-algebraica',
    preview: '2x + 3x',
    description: 'Simplifica expresiones algebraicas, combina términos y revisa procedimientos.',
  },
  {
    name: 'Calculadora de Polinomios',
    href: '/calculadoras/algebra/calculadora-de-polinomios',
    preview: 'ax² + bx + c',
    description: 'Trabaja con polinomios, grado, términos, operaciones y factorización básica.',
  },
  {
    name: 'Calculadora de Raíces',
    href: '/calculadoras/algebra/calculadora-de-raices',
    preview: 'ⁿ√x',
    description: 'Calcula raíces de distintos índices y revisa resultados exactos o aproximados.',
  },
  {
    name: 'Calculadora de Raíz Cuadrada',
    href: '/calculadoras/algebra/calculadora-de-raiz-cuadrada',
    preview: '√x',
    description: 'Calcula raíces cuadradas, simplificaciones y aproximaciones decimales.',
  },
];

export function AlgebraTools() {
  return (
    <CalculatorHubCards
      headingId="tools-algebra-heading"
      heading="Herramientas de álgebra"
      intro="Elige una calculadora especializada y abre la herramienta que necesitas."
      cards={cards}
    />
  );
}
