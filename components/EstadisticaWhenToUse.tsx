import { HubWhenToUse } from './HubWhenToUse';

const rows = [
  { situation: 'Obtener un resumen completo de un conjunto de datos', tool: 'Calculadora de Estadística', href: '/calculadoras/estadistica/calculadora-de-estadistica' },
  { situation: 'Calcular la probabilidad de un evento simple o compuesto', tool: 'Calculadora de Probabilidad', href: '/calculadoras/estadistica/calculadora-de-probabilidad' },
  { situation: 'Medir la dispersión de datos en sus unidades originales', tool: 'Calculadora de Desviación Estándar', href: '/calculadoras/estadistica/calculadora-de-desviacion-estandar' },
  { situation: 'Calcular la media simple o ponderada de un conjunto', tool: 'Calculadora de Media', href: '/calculadoras/estadistica/calculadora-de-media' },
  { situation: 'Medir la dispersión cuadrática respecto a la media', tool: 'Calculadora de Varianza', href: '/calculadoras/estadistica/calculadora-de-varianza' },
];

export function EstadisticaWhenToUse() {
  return <HubWhenToUse headingId="estadistica-when-heading" rows={rows} />;
}
