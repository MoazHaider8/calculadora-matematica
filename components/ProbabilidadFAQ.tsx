const faqs = [
  {
    q: '¿Qué es una calculadora de probabilidad?',
    a: 'Es una herramienta que calcula la probabilidad de un evento o combinación de eventos a partir de valores numéricos. Esta calculadora soporta probabilidad simple, complemento, unión, intersección y al menos uno en varios intentos.',
  },
  {
    q: '¿Cómo se calcula la probabilidad simple?',
    a: 'Se divide el número de casos favorables entre el número total de casos posibles. Por ejemplo, si hay 3 casos favorables de 10 posibles, P(A) = 3/10 = 0.3.',
  },
  {
    q: '¿Qué es el complemento de un evento?',
    a: "El complemento de A es la probabilidad de que A no ocurra. Se calcula como P(A') = 1 − P(A). La suma de un evento y su complemento siempre es 1.",
  },
  {
    q: '¿Cuándo se usa la unión de eventos?',
    a: 'Se usa cuando quieres calcular la probabilidad de que ocurra A, o B, o ambos. La fórmula es P(A ∪ B) = P(A) + P(B) − P(A ∩ B).',
  },
  {
    q: '¿Qué significa que dos eventos sean independientes?',
    a: 'Dos eventos son independientes cuando la ocurrencia de uno no afecta la probabilidad del otro. En ese caso, P(A ∩ B) = P(A) × P(B). Esta calculadora asume independencia en el modo de intersección.',
  },
  {
    q: '¿Esta calculadora calcula probabilidad condicional?',
    a: 'Esta herramienta calcula los tipos de probabilidad más habituales en educación básica. La probabilidad condicional P(A|B) requiere datos adicionales y no está incluida en esta versión.',
  },
];

export function ProbabilidadFAQ() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="faq-prob-heading">
      <div className="site-shell">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 id="faq-prob-heading" className="mt-2 mb-8 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Preguntas frecuentes sobre probabilidad
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
