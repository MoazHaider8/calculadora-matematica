import { HubWhatIs } from './HubWhatIs';

const topics = ['Cálculo diferencial', 'Cálculo integral', 'Funciones', 'Tasas de cambio', 'Áreas bajo curvas'];

const paragraphs = [
  'Esta categoría incluye calculadoras para las cinco operaciones centrales del cálculo: integrales, derivadas, límites, logaritmos y exponentes. Con estas herramientas puedes calcular áreas bajo curvas, obtener la tasa de cambio instantánea de una función, evaluar el comportamiento de una expresión cerca de un valor específico, resolver ecuaciones logarítmicas y trabajar con potencias de cualquier tipo.',
  'El cálculo diferencial e integral es fundamental en física, ingeniería y economía. Las derivadas miden cómo cambia una función. Las integrales acumulan cantidades a lo largo de un intervalo. Los límites describen el comportamiento de funciones en puntos críticos. Los logaritmos y los exponentes aparecen en crecimientos, decaimientos y escalas no lineales.',
  'Cada herramienta muestra el procedimiento con los pasos aplicados para que puedas revisar tanto el método como el resultado final.',
];

export function CalculoWhatIs() {
  return <HubWhatIs headingId="calculo-whatis-heading" topics={topics} paragraphs={paragraphs} />;
}
