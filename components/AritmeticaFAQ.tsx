const faqs = [
  {
    q: '¿Qué herramientas incluye esta categoría?',
    a: 'Esta categoría incluye cinco herramientas: Calculadora Científica, Calculadora de Porcentajes, Calculadora de Fracciones, Calculadora de Promedio y Calculadora de Regla de Tres. Todas están disponibles.',
  },
  {
    q: '¿Qué calculadora debo usar para operaciones básicas?',
    a: 'La Calculadora Científica cubre las operaciones aritméticas fundamentales junto con funciones avanzadas. Para porcentajes, fracciones o promedios, cada herramienta especializada ofrece un flujo más directo.',
  },
  {
    q: '¿Qué diferencia hay entre calculadora científica y aritmética?',
    a: 'Las calculadoras aritméticas están especializadas en un tipo concreto de operación: fracciones, porcentajes, proporciones o promedio. La calculadora científica cubre un rango más amplio que incluye funciones trigonométricas, logaritmos y exponentes.',
  },
  {
    q: '¿Puedo calcular porcentajes y descuentos?',
    a: 'Sí. La Calculadora de Porcentajes permite calcular el porcentaje de un número, aplicar descuentos, calcular aumentos y obtener la variación porcentual entre dos valores.',
  },
  {
    q: '¿Puedo trabajar con fracciones?',
    a: 'Sí. La Calculadora de Fracciones permite sumar, restar, multiplicar y dividir fracciones con distinto denominador. Muestra el resultado simplificado y el mínimo común denominador.',
  },
  {
    q: '¿Estas herramientas sirven para tareas escolares?',
    a: 'Sí. Las calculadoras de aritmética están pensadas para estudiantes y profesionales. Muestran el procedimiento paso a paso, lo que facilita el aprendizaje y la comprobación de resultados.',
  },
];

export function AritmeticaFAQ() {
  return (
    <section className="bg-panel py-12 lg:py-16" aria-labelledby="faq-arit-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2
          id="faq-arit-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Preguntas frecuentes sobre aritmética
        </h2>

        <div
          className="overflow-hidden rounded-2xl bg-white"
          style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 12px rgba(16,42,67,0.05)' }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="px-6 py-5"
              style={{ borderBottom: i < faqs.length - 1 ? '1px solid #EEF4F7' : 'none' }}
            >
              <p className="mb-2 text-sm font-bold" style={{ color: '#102a43' }}>{faq.q}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#627d98' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
