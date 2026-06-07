import { HubWhatIs } from './HubWhatIs';

const topics = ['Fracciones', 'Porcentajes', 'Proporciones', 'Promedios', 'Operaciones científicas'];

const paragraphs = [
  'Esta categoría incluye calculadoras para fracciones, porcentajes, operaciones científicas, regla de tres y promedio. Con estas herramientas puedes operar fracciones con distinto denominador, calcular descuentos y aumentos porcentuales, resolver operaciones con funciones trigonométricas y logaritmos, aplicar proporciones directas e inversas y obtener la media de un conjunto de valores.',
  'La aritmética cubre las operaciones numéricas básicas y sus extensiones. Las fracciones y los porcentajes aparecen constantemente en problemas cotidianos, finanzas y ciencias. La calculadora científica amplía estas operaciones con funciones avanzadas. La regla de tres y el promedio resuelven dos tipos de problemas muy frecuentes en escuela y trabajo.',
  'Cada herramienta muestra el procedimiento con los pasos seguidos para facilitar la revisión del resultado.',
];

export function AritmeticaWhatIs() {
  return <HubWhatIs headingId="aritmetica-whatis-heading" topics={topics} paragraphs={paragraphs} />;
}
