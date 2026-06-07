import { HubConcepts } from './HubConcepts';

const concepts = [
  { formula: 'A + B', name: 'Operaciones con matrices', explanation: 'Suma, resta y multiplicación entre matrices. La multiplicación requiere que las dimensiones sean compatibles.', href: '/calculadoras/matrices-y-vectores/calculadora-de-matrices' },
  { formula: 'det(A)', name: 'Determinante', explanation: 'Número asociado a una matriz cuadrada que indica si la matriz es invertible cuando es distinto de cero.', href: '/calculadoras/matrices-y-vectores/calculadora-de-determinantes' },
  { formula: '|v|', name: 'Vector', explanation: 'Objeto matemático con magnitud y dirección, representado como columna de componentes.', href: '/calculadoras/matrices-y-vectores/calculadora-de-vectores' },
  { formula: 'Ax = b', name: 'Sistema lineal', explanation: 'Conjunto de ecuaciones lineales que comparten las mismas incógnitas y se resuelven juntas.', href: '/calculadoras/matrices-y-vectores/calculadora-de-sistemas-de-ecuaciones' },
  { formula: 'A⁻¹', name: 'Matriz inversa', explanation: 'Matriz que cumple A · A⁻¹ = I. Solo existe cuando el determinante es distinto de cero.', href: '/calculadoras/matrices-y-vectores/calculadora-de-matriz-inversa' },
];

export function MatVecConcepts() {
  return <HubConcepts headingId="matvec-concepts-heading" concepts={concepts} />;
}
