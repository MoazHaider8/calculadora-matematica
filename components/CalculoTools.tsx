import { CalculatorHubCards } from './CalculatorHubCards';

const cards = [
  {
    name: 'Calculadora de Integrales',
    href: '/calculadoras/calculo/calculadora-de-integrales',
    preview: '∫ f(x) dx',
    description: 'Calcula integrales definidas e indefinidas con fórmula, pasos y resultado claro.',
  },
  {
    name: 'Calculadora de Derivadas',
    href: '/calculadoras/calculo/calculadora-de-derivadas',
    preview: "f'(x)",
    description: 'Deriva funciones y revisa reglas, procedimiento y resultado paso a paso.',
  },
  {
    name: 'Calculadora de Límites',
    href: '/calculadoras/calculo/calculadora-de-limites',
    preview: 'lim x→a f(x)',
    description: 'Calcula límites usando sustitución, factorización y análisis del comportamiento de la función.',
  },
  {
    name: 'Calculadora de Logaritmos',
    href: '/calculadoras/calculo/calculadora-de-logaritmos',
    preview: 'logₐ(x)',
    description: 'Resuelve logaritmos, cambios de base y propiedades principales con explicación.',
  },
  {
    name: 'Calculadora de Exponentes',
    href: '/calculadoras/calculo/calculadora-de-exponentes',
    preview: 'aⁿ',
    description: 'Calcula potencias, exponentes negativos, fraccionarios y expresiones exponenciales.',
  },
];

export function CalculoTools() {
  return (
    <CalculatorHubCards
      headingId="tools-calculo-heading"
      heading="Herramientas de cálculo"
      intro="Elige una calculadora especializada y abre la herramienta que necesitas."
      cards={cards}
    />
  );
}
