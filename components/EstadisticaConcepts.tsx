import { HubConcepts } from './HubConcepts';

const concepts = [
  { formula: 'media, moda', name: 'Estadística descriptiva', explanation: 'Conjunto de medidas que describen las características principales de un conjunto de datos.', href: '/calculadoras/estadistica/calculadora-de-estadistica' },
  { formula: 'P(A)', name: 'Probabilidad', explanation: 'Medida numérica entre 0 y 1 que indica qué tan probable es un evento.', href: '/calculadoras/estadistica/calculadora-de-probabilidad' },
  { formula: 'σ', name: 'Desviación estándar', explanation: 'Raíz cuadrada de la varianza. Mide la dispersión en las mismas unidades que los datos.', href: '/calculadoras/estadistica/calculadora-de-desviacion-estandar' },
  { formula: 'x̄', name: 'Media aritmética', explanation: 'Suma de todos los valores dividida entre n. Medida central más usada en estadística.', href: '/calculadoras/estadistica/calculadora-de-media' },
  { formula: 'σ²', name: 'Varianza', explanation: 'Media de los cuadrados de las diferencias entre cada valor y la media del conjunto.', href: '/calculadoras/estadistica/calculadora-de-varianza' },
];

export function EstadisticaConcepts() {
  return <HubConcepts headingId="estadistica-concepts-heading" concepts={concepts} />;
}
