import { HubWhatIs } from './HubWhatIs';

const topics = ['Álgebra lineal', 'Matrices', 'Vectores', 'Determinantes', 'Sistemas lineales'];

const paragraphs = [
  'Esta categoría incluye calculadoras para matrices, determinantes, vectores, sistemas de ecuaciones y matrices inversas. Con estas herramientas puedes realizar operaciones entre matrices, calcular el determinante para saber si una matriz es invertible, trabajar con la magnitud y componentes de vectores, resolver sistemas de ecuaciones lineales y encontrar la inversa de una matriz cuando existe.',
  'Las matrices y los vectores son los objetos fundamentales del álgebra lineal. Una matriz organiza datos en filas y columnas. Un vector es un caso especial con una sola columna. El determinante indica propiedades clave de la matriz y es condición necesaria para que exista la inversa. Los sistemas lineales se representan y resuelven en forma matricial mediante la expresión Ax = b.',
  'Cada herramienta muestra el procedimiento con los pasos aplicados para que puedas verificar el resultado.',
];

export function MatVecWhatIs() {
  return <HubWhatIs headingId="matvec-whatis-heading" topics={topics} paragraphs={paragraphs} />;
}
