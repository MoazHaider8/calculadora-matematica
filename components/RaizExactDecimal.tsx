const exactItems = [
  'El resultado es un número entero.',
  'Permite comprobación directa.',
  'Se puede verificar elevando al índice.',
  'Por ejemplo: ∛27 = 3 porque 3³ = 27.',
];

const decimalItems = [
  'El resultado no es un número entero.',
  'Se muestra como aproximación decimal.',
  'Útil cuando no existe raíz exacta.',
  'Por ejemplo: ∛10 ≈ 2.1544346900.',
];

export function RaizExactDecimal() {
  return (
    <section className="py-12 lg:py-16 bg-white" aria-labelledby="exact-decimal-heading">
      <div className="site-shell">
        <p className="eyebrow">Tipos de resultado</p>
        <h2
          id="exact-decimal-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Raíces exactas y decimales
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

          <div
            className="overflow-hidden rounded-2xl bg-white"
            style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
          >
            <div className="px-6 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-base font-bold" style={{ color: 'rgba(216,163,26,0.88)' }}>∛27 = 3</p>
              <p className="mt-1 text-xs font-semibold" style={{ color: 'rgba(221,243,240,0.6)' }}>Raíz exacta</p>
            </div>
            <div className="px-6 py-5">
              <h3 className="mb-3 text-sm font-bold" style={{ color: '#102a43' }}>Raíces exactas</h3>
              <ul className="space-y-2">
                {exactItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#334e68' }}>
                    <span className="mt-0.5 shrink-0 font-bold" style={{ color: '#0F5C5C' }} aria-hidden="true">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-2xl bg-white"
            style={{ border: '1px solid #D7E2EA', boxShadow: '0 2px 10px rgba(16,42,67,0.05)' }}
          >
            <div className="px-6 py-4" style={{ background: '#0a3535' }}>
              <p className="font-mono text-base font-bold" style={{ color: 'rgba(216,163,26,0.88)' }}>∛10 ≈ 2.1544346900</p>
              <p className="mt-1 text-xs font-semibold" style={{ color: 'rgba(221,243,240,0.6)' }}>Raíz decimal</p>
            </div>
            <div className="px-6 py-5">
              <h3 className="mb-3 text-sm font-bold" style={{ color: '#102a43' }}>Raíces decimales</h3>
              <ul className="space-y-2">
                {decimalItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#334e68' }}>
                    <span className="mt-0.5 shrink-0 font-bold" style={{ color: '#0F5C5C' }} aria-hidden="true">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
