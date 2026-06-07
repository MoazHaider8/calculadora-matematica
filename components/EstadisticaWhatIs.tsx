import { HubWhatIs } from './HubWhatIs';

const topics = ['Estadística descriptiva', 'Probabilidad', 'Dispersión', 'Medidas centrales', 'Análisis de datos'];

const paragraphs = [
  'Esta categoría incluye calculadoras para estadística descriptiva, probabilidad, desviación estándar, media y varianza. Con estas herramientas puedes obtener un resumen completo de un conjunto de datos, calcular la probabilidad de un evento, medir cuánto se dispersan los valores respecto a la media, calcular el valor central de los datos y cuantificar la dispersión cuadrática.',
  'La estadística analiza conjuntos de datos para encontrar patrones y describir su comportamiento. Las medidas de tendencia central como la media resumen el valor típico. La varianza y la desviación estándar describen cuánto varían los datos. La probabilidad conecta la estadística con el cálculo de posibilidades y resultados esperados en experimentos y estudios.',
  'Cada herramienta muestra el procedimiento con los pasos aplicados para que puedas verificar los resultados.',
];

export function EstadisticaWhatIs() {
  return <HubWhatIs headingId="estadistica-whatis-heading" topics={topics} paragraphs={paragraphs} />;
}
