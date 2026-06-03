const types = [
  {
    formula: '∛27 = 3',
    name: 'Raíz cúbica',
    explanation: 'Índice 3. Busca el número que elevado al cubo produce el radicando.',
  },
  {
    formula: '⁴√625 = 5',
    name: 'Raíz cuarta',
    explanation: 'Índice 4. Busca el número que elevado a la cuarta potencia produce el radicando.',
  },
  {
    formula: 'ⁿ√a = a^(1/n)',
    name: 'Raíz enésima',
    explanation: 'Cualquier índice n. La raíz enésima es el caso general de todas las raíces.',
  },
  {
    formula: '∛(-27) = -3',
    name: 'Raíz de número negativo',
    explanation: 'Índice impar con radicando negativo. El resultado real existe y es negativo.',
  },
  {
    formula: '√72 = 6√2',
    name: 'Radical simplificado',
    explanation: 'Se extraen los factores perfectos del radicando para simplificar el radical.',
  },
  {
    formula: '∛x² = x^(2/3)',
    name: 'Raíz como exponente',
    explanation: 'Una raíz de índice n equivale a un exponente fraccionario 1/n aplicado al radicando.',
  },
];

export function RaizTypes() {
  return (
    <section className="py-12 lg:py-16 bg-white" aria-labelledby="types-raiz-heading">
      <div className="site-shell">
        <p className="eyebrow">Referencia</p>
        <h2
          id="types-raiz-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Tipos de raíces que puedes calcular
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((t) => (
            <div
              key={t.name}
              className="overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
            >
              <div
                className="px-5 py-4 font-mono text-base font-bold"
                style={{ background: '#0a3535', color: 'rgba(216,163,26,0.88)' }}
                aria-hidden="true"
              >
                {t.formula}
              </div>
              <div className="px-5 py-4">
                <h3 className="mb-2 text-sm font-bold" style={{ color: '#102a43' }}>{t.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#627d98' }}>{t.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
