import { HubConcepts } from './HubConcepts';

const concepts = [
  { formula: 'a/b', name: 'Fracción', explanation: 'Representa una parte de un entero mediante numerador y denominador. Se puede simplificar al máximo común divisor.', href: '/calculadoras/aritmetica/calculadora-de-fracciones' },
  { formula: 'x%', name: 'Porcentaje', explanation: 'Proporción expresada como parte de 100. Se usa para descuentos, aumentos y comparaciones de valores.', href: '/calculadoras/aritmetica/calculadora-de-porcentajes' },
  { formula: 'sin, log, √', name: 'Operación científica', explanation: 'Operaciones con funciones trigonométricas, logaritmos, raíces y potencias en una sola herramienta.', href: '/calculadoras/aritmetica/calculadora-cientifica' },
  { formula: 'a/b = c/x', name: 'Regla de tres', explanation: 'Método para encontrar un cuarto valor a partir de tres conocidos en una proporción directa o inversa.', href: '/calculadoras/aritmetica/calculadora-de-regla-de-tres' },
  { formula: 'Σx / n', name: 'Promedio aritmético', explanation: 'Suma de todos los valores dividida entre la cantidad de datos. Representa el valor medio del conjunto.', href: '/calculadoras/aritmetica/calculadora-de-promedio' },
];

export function AritmeticaConcepts() {
  return <HubConcepts headingId="aritmetica-concepts-heading" concepts={concepts} />;
}
