import { CalculatorHubCards } from './CalculatorHubCards';

const cards = [
  {
    name: 'Calculadora de Fracciones',
    href: '/calculadoras/aritmetica/calculadora-de-fracciones',
    preview: 'a/b',
    description: 'Suma, resta, multiplica, divide y simplifica fracciones con pasos claros.',
  },
  {
    name: 'Calculadora de Porcentajes',
    href: '/calculadoras/aritmetica/calculadora-de-porcentajes',
    preview: '%',
    description: 'Calcula porcentajes, descuentos, aumentos y comparaciones entre valores.',
  },
  {
    name: 'Calculadora Científica',
    href: '/calculadoras/aritmetica/calculadora-cientifica',
    preview: 'sin, log, √',
    description: 'Realiza operaciones avanzadas con potencias, raíces, funciones y paréntesis.',
  },
  {
    name: 'Calculadora de Regla de Tres',
    href: '/calculadoras/aritmetica/calculadora-de-regla-de-tres',
    preview: 'a/b = c/x',
    description: 'Resuelve proporciones directas e inversas con procedimiento paso a paso.',
  },
  {
    name: 'Calculadora de Promedio',
    href: '/calculadoras/aritmetica/calculadora-de-promedio',
    preview: 'Σx / n',
    description: 'Calcula promedios simples, notas, valores y resultados con explicación.',
  },
];

export function AritmeticaTools() {
  return (
    <CalculatorHubCards
      headingId="tools-aritmetica-heading"
      heading="Herramientas de aritmética"
      intro="Elige una calculadora especializada y abre la herramienta que necesitas."
      cards={cards}
    />
  );
}
