import { CalculatorHubCards } from './CalculatorHubCards';

const cards = [
  {
    name: 'Calculadora de Estadística',
    href: '/calculadoras/estadistica/calculadora-de-estadistica',
    preview: 'media, mediana, moda',
    description: 'Obtén un resumen estadístico con medidas centrales, rango y dispersión.',
  },
  {
    name: 'Calculadora de Probabilidad',
    href: '/calculadoras/estadistica/calculadora-de-probabilidad',
    preview: 'P(A)',
    description: 'Calcula probabilidades simples, complementos, unión e intersección de eventos.',
  },
  {
    name: 'Calculadora de Desviación Estándar',
    href: '/calculadoras/estadistica/calculadora-de-desviacion-estandar',
    preview: 'σ',
    description: 'Calcula desviación estándar muestral y poblacional con interpretación.',
  },
  {
    name: 'Calculadora de Media',
    href: '/calculadoras/estadistica/calculadora-de-media',
    preview: 'x̄',
    description: 'Calcula la media simple o ponderada de un conjunto de datos.',
  },
  {
    name: 'Calculadora de Varianza',
    href: '/calculadoras/estadistica/calculadora-de-varianza',
    preview: 'σ²',
    description: 'Calcula varianza muestral y poblacional junto con diferencias cuadradas.',
  },
];

export function EstadisticaTools() {
  return (
    <CalculatorHubCards
      headingId="tools-estadistica-heading"
      heading="Herramientas de estadística"
      intro="Elige una calculadora especializada y abre la herramienta que necesitas."
      cards={cards}
    />
  );
}
