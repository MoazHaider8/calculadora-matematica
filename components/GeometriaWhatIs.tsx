import { HubWhatIs } from './HubWhatIs';

const topics = ['Figuras planas', 'Cuerpos geométricos', 'Triángulos', 'Círculos', 'Teorema de Pitágoras'];

const paragraphs = [
  'Esta categoría incluye calculadoras para área, volumen, triángulos, círculos y el teorema de Pitágoras. Con estas herramientas puedes calcular la superficie de figuras planas como rectángulos, triángulos y círculos, obtener el volumen de cuerpos como cubos, prismas y cilindros, resolver medidas de cualquier triángulo, calcular radio, diámetro y circunferencia, y encontrar hipotenusa o catetos de triángulos rectángulos.',
  'La geometría estudia las propiedades de figuras planas y cuerpos en el espacio. Las fórmulas de área y volumen son herramientas fundamentales en arquitectura, ingeniería y ciencias naturales. El teorema de Pitágoras es uno de los resultados más aplicados en trigonometría y geometría plana.',
  'Cada herramienta muestra el procedimiento con los pasos aplicados para facilitar la revisión del resultado.',
];

export function GeometriaWhatIs() {
  return <HubWhatIs headingId="geometria-whatis-heading" topics={topics} paragraphs={paragraphs} />;
}
