import { CalculatorHubCards } from './CalculatorHubCards';

const cards = [
  {
    name: 'Calculadora de Área',
    href: '/calculadoras/geometria/calculadora-de-area',
    preview: 'A = b × h',
    description: 'Calcula áreas de figuras planas como rectángulos, triángulos y círculos.',
  },
  {
    name: 'Calculadora de Volumen',
    href: '/calculadoras/geometria/calculadora-de-volumen',
    preview: 'V = l × w × h',
    description: 'Calcula volúmenes de cubos, prismas, cilindros, conos, esferas y pirámides.',
  },
  {
    name: 'Calculadora de Triángulos',
    href: '/calculadoras/geometria/calculadora-de-triangulos',
    preview: 'A = b × h / 2',
    description: 'Calcula área, perímetro, ángulos, lados y tipo de triángulo.',
  },
  {
    name: 'Calculadora de Círculos',
    href: '/calculadoras/geometria/calculadora-de-circulos',
    preview: 'A = πr²',
    description: 'Calcula radio, diámetro, área y circunferencia de un círculo.',
  },
  {
    name: 'Calculadora de Pitágoras',
    href: '/calculadoras/geometria/calculadora-de-pitagoras',
    preview: 'a² + b² = c²',
    description: 'Calcula hipotenusa o catetos de un triángulo rectángulo con pasos.',
  },
];

export function GeometriaTools() {
  return (
    <CalculatorHubCards
      headingId="tools-geometria-heading"
      heading="Herramientas de geometría"
      intro="Elige una calculadora especializada y abre la herramienta que necesitas."
      cards={cards}
    />
  );
}
