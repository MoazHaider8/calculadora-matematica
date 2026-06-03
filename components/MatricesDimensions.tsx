const rules = [
  {
    op: 'Suma y resta',
    formula: 'A(m×n) + B(m×n)',
    condition: 'Las dos matrices deben tener exactamente las mismas dimensiones (m filas y n columnas).',
    example: '2×2 + 2×2 → 2×2',
    ok: true,
  },
  {
    op: 'Multiplicación',
    formula: 'A(m×n) × B(n×p)',
    condition: 'El número de columnas de A debe ser igual al número de filas de B. El resultado tiene m filas y p columnas.',
    example: '2×3 × 3×2 → 2×2',
    ok: true,
  },
  {
    op: 'Transpuesta',
    formula: 'A(m×n) → Aᵀ(n×m)',
    condition: 'Cualquier matriz puede transponerse. La dimensión resultante invierte filas y columnas.',
    example: '2×3 → 3×2',
    ok: true,
  },
  {
    op: 'Escalar',
    formula: 'k · A(m×n)',
    condition: 'Cualquier matriz puede multiplicarse por un escalar. El resultado mantiene las mismas dimensiones.',
    example: '3 × 2×3 → 2×3',
    ok: true,
  },
  {
    op: 'Incompatible',
    formula: 'A(2×2) + B(2×3)',
    condition: 'No se pueden sumar matrices de distintas dimensiones. La calculadora mostrará un error explicativo.',
    example: 'Suma 2×2 y 2×3 → error',
    ok: false,
  },
];

export function MatricesDimensions() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="dims-matrices-heading">
      <div className="site-shell">
        <p className="eyebrow">Compatibilidad</p>
        <h2
          id="dims-matrices-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Dimensiones compatibles en matrices
        </h2>

        <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid #D7E2EA' }}>
          {rules.map((rule, i) => (
            <div
              key={rule.op}
              className="grid grid-cols-1 gap-3 px-6 py-5 sm:grid-cols-12 sm:items-start sm:gap-4"
              style={{
                borderBottom: i < rules.length - 1 ? '1px solid #EEF4F7' : 'none',
                background: i % 2 === 0 ? '#ffffff' : '#FAFCFD',
              }}
            >
              <div className="sm:col-span-2 flex items-center gap-2">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{ background: rule.ok ? '#DDF3F0' : '#FEE2E2', color: rule.ok ? '#0F5C5C' : '#b91c1c' }}
                  aria-hidden="true"
                >
                  {rule.ok ? '✓' : '✗'}
                </span>
                <span className="text-xs font-bold" style={{ color: '#102a43' }}>{rule.op}</span>
              </div>
              <div className="sm:col-span-3">
                <p className="font-mono text-sm font-semibold" style={{ color: '#D8A31A' }}>{rule.formula}</p>
              </div>
              <div className="sm:col-span-5">
                <p className="text-sm leading-relaxed" style={{ color: '#334e68' }}>{rule.condition}</p>
              </div>
              <div className="sm:col-span-2">
                <span
                  className="inline-block rounded-lg px-2.5 py-1 font-mono text-[10px] font-bold"
                  style={{ background: rule.ok ? '#F0FAF9' : '#FFF5F5', color: rule.ok ? '#0F5C5C' : '#b91c1c', border: `1px solid ${rule.ok ? '#DDF3F0' : '#FECACA'}` }}
                >
                  {rule.example}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
