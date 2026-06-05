const faqs = [
  {
    q: '¿Qué herramientas incluye esta categoría?',
    a: 'Esta categoría incluye cinco calculadoras: Calculadora de Área, Calculadora de Volumen, Calculadora de Triángulos, Calculadora de Círculos y Calculadora de Pitágoras. Estarán disponibles próximamente.',
  },
  {
    q: '¿Qué calculadora debo usar para calcular superficies?',
    a: 'Para calcular la superficie de figuras planas como cuadrados, rectángulos, triángulos o círculos, usa la Calculadora de Área. Para calcular el volumen de cuerpos como cubos o cilindros, usa la Calculadora de Volumen.',
  },
  {
    q: '¿Qué diferencia hay entre área y volumen?',
    a: 'El área mide la superficie bidimensional de una figura plana, expresada en unidades al cuadrado (cm², m²). El volumen mide el espacio tridimensional que ocupa un cuerpo geométrico, expresado en unidades cúbicas (cm³, m³).',
  },
  {
    q: '¿Qué calculadora sirve para triángulos rectángulos?',
    a: 'La Calculadora de Pitágoras se centra en el teorema a² + b² = c² para obtener hipotenusa o catetos. La Calculadora de Triángulos resolverá medidas generales de cualquier tipo de triángulo.',
  },
  {
    q: '¿Puedo calcular radio, diámetro y circunferencia?',
    a: 'Sí. La Calculadora de Círculos calculará radio, diámetro, área y circunferencia a partir del dato que introduzcas. Usa las fórmulas A = πr² y C = 2πr.',
  },
  {
    q: '¿Estas herramientas sirven para tareas escolares?',
    a: 'Sí. Las calculadoras de geometría están pensadas para estudiantes de educación primaria, secundaria y bachillerato que trabajan con figuras geométricas, áreas, volúmenes y el teorema de Pitágoras.',
  },
];

export function GeometriaFAQ() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="faq-geo-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2
          id="faq-geo-heading"
          className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]"
        >
          Preguntas frecuentes sobre geometría
        </h2>
        <dl className="flex flex-col gap-4">
          {faqs.map(faq => (
            <div
              key={faq.q}
              className="rounded-2xl px-6 py-5"
              style={{ background: '#F8FAFC', border: '1px solid #D7E2EA' }}
            >
              <dt className="mb-2 text-sm font-bold text-ink">{faq.q}</dt>
              <dd className="text-sm leading-relaxed text-slate">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
