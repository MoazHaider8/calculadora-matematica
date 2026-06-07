export function ContactoSugerir() {
  return (
    <section className="bg-white py-8 lg:py-11" aria-labelledby="sugerir-heading">
      <div className="site-shell">
        <p className="eyebrow">Propuestas</p>
        <h2 id="sugerir-heading" className="mt-2 mb-6 text-[1.5rem] font-bold text-ink lg:text-[1.8rem]">
          Sugerir una calculadora
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Si hay una calculadora que te resultaría útil y todavía no está en el sitio, puedes sugerirla usando el formulario de contacto. Las sugerencias pueden incluir calculadoras nuevas, categorías adicionales, nuevos modos dentro de una herramienta existente, ejemplos, fórmulas o cualquier mejora que consideres necesaria.
            </p>
            <p>
              Para que la sugerencia sea más fácil de evaluar, incluye el nombre de la calculadora, qué debería calcular, qué datos debería pedir al usuario y qué resultado esperarías ver. Si tienes un ejemplo concreto, añádelo también.
            </p>
            <p>
              Puedes copiar la plantilla de abajo y pegarla en el campo de mensaje del formulario.
            </p>
          </div>

          <div
            className="rounded-2xl p-5"
            style={{ background: '#F4F8FB', border: '1px solid #D7E2EA' }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">Plantilla sugerida</p>
            <pre
              className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-slate"
              aria-label="Plantilla para sugerir una calculadora"
            >{`Nombre de la calculadora:
Qué debe calcular:
Datos que debería pedir:
Resultado esperado:
Ejemplo de uso:`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
