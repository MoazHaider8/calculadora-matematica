export function MatrizInversaWhatIs() {
  return (
    <section className="bg-white py-10 lg:py-12" aria-labelledby="whatis-inv-heading">
      <div className="site-shell">
        <div className="mx-auto max-w-2xl">
          <div className="academic-card p-6">
            <p className="eyebrow">Sobre esta herramienta</p>
            <h2
              id="whatis-inv-heading"
              className="mt-3 text-[1.35rem] font-bold leading-snug"
              style={{ color: '#102a43' }}
            >
              Qué calcula esta herramienta
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: '#334e68' }}>
              <p>
                Esta calculadora obtiene la <strong>matriz inversa A⁻¹</strong> de matrices cuadradas 2×2 y 3×3. La matriz inversa es aquella que, al multiplicarse por la original, produce la <strong>matriz identidad</strong>: A · A⁻¹ = I.
              </p>
              <p>
                Para que una matriz tenga inversa debe ser cuadrada y su <strong>determinante</strong> debe ser distinto de cero. Si det(A) = 0, la matriz es <strong>singular</strong> y no tiene inversa.
              </p>
              <p>
                Para matrices 2×2 se aplica la fórmula directa. Para matrices 3×3 se usa el método de <strong>Gauss Jordan</strong>, que transforma la matriz aumentada [A|I] hasta obtener [I|A⁻¹]. Cada resultado incluye el determinante, el método utilizado y la comprobación A · A⁻¹ = I. Esta herramienta calcula inversas, no operaciones generales con matrices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
